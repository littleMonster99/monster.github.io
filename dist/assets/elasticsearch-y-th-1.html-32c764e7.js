import{_ as a,W as g,X as n,Y as i,$ as l,a0 as s,D as t}from"./framework-f64bc974.js";const o={},c=s('<h1 id="es详解-原理-从图解构筑对es原理的初步认知" tabindex="-1"><a class="header-anchor" href="#es详解-原理-从图解构筑对es原理的初步认知" aria-hidden="true">#</a> ES详解 - 原理：从图解构筑对ES原理的初步认知</h1><blockquote><p>在学习ElasticSearch原理时，我推荐你先通过官方博客中的一篇图解文章(虽然是基于2.x版本）来构筑对ES的初步认知（这种认识是体系上的快速认知）</p></blockquote><h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1. 前言</h2><p>本文先自上而下，后自底向上的介绍ElasticSearch的底层工作原理，试图回答以下问题：</p><ul><li>为什么我的搜索 <code>*foo-bar*</code> 无法匹配 <code>foo-bar</code> ？</li><li>为什么增加更多的文件会压缩索引（Index）？</li><li>为什么ElasticSearch占用很多内存？</li></ul><p><strong>版本</strong></p><p>elasticsearch版本: elasticsearch-2.2.0</p><h2 id="_2-图解elasticsearch" tabindex="-1"><a class="header-anchor" href="#_2-图解elasticsearch" aria-hidden="true">#</a> 2. 图解ElasticSearch</h2><ul><li>云上的集群</li></ul><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807211427280.png" alt="image-20220807211427280" tabindex="0" loading="lazy"><figcaption>image-20220807211427280</figcaption></figure><ul><li>集群里的盒子</li></ul><p>云里面的每个白色正方形的盒子代表一个节点——Node。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807211503936.png" alt="image-20220807211503936" tabindex="0" loading="lazy"><figcaption>image-20220807211503936</figcaption></figure><ul><li>节点之间</li></ul><p>在一个或者多个节点直接，多个绿色小方块组合在一起形成一个ElasticSearch的索引。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807211603236.png" alt="image-20220807211603236" tabindex="0" loading="lazy"><figcaption>image-20220807211603236</figcaption></figure><ul><li>索引里的小方块</li></ul><p>在一个索引下，分布在多个节点里的绿色小方块称为分片——Shard。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807211805270.png" alt="image-20220807211805270" tabindex="0" loading="lazy"><figcaption>image-20220807211805270</figcaption></figure><ul><li>Shard＝Lucene Index</li></ul><p>一个ElasticSearch的Shard本质上是一个Lucene Index。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807211833316.png" alt="image-20220807211833316" tabindex="0" loading="lazy"><figcaption>image-20220807211833316</figcaption></figure><p>Lucene是一个Full Text 搜索库（也有很多其他形式的搜索库），ElasticSearch是建立在Lucene之上的。接下来的故事要说的大部分内容实际上是ElasticSearch如何基于Lucene工作的。</p><h2 id="_3-图解lucene" tabindex="-1"><a class="header-anchor" href="#_3-图解lucene" aria-hidden="true">#</a> 3. 图解Lucene</h2><h3 id="_3-1-segment" tabindex="-1"><a class="header-anchor" href="#_3-1-segment" aria-hidden="true">#</a> 3.1 Segment</h3><ul><li><strong>Mini索引——segment</strong></li></ul><p>在Lucene里面有很多小的segment，我们可以把它们看成Lucene内部的mini-index。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807212046076.png" alt="image-20220807212046076" tabindex="0" loading="lazy"><figcaption>image-20220807212046076</figcaption></figure><ul><li>Segment内部（有着许多数据结构） <ul><li>Inverted Index</li><li>Stored Fields</li><li>Document Values</li><li>Cache</li></ul></li></ul><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807212120099.png" alt="image-20220807212120099" tabindex="0" loading="lazy"><figcaption>image-20220807212120099</figcaption></figure><h4 id="_3-1-1-inverted-index" tabindex="-1"><a class="header-anchor" href="#_3-1-1-inverted-index" aria-hidden="true">#</a> 3.1.1 Inverted Index</h4><p>最最重要的Inverted Index</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807212220356.png" alt="image-20220807212220356" tabindex="0" loading="lazy"><figcaption>image-20220807212220356</figcaption></figure><p>Inverted Index主要包括两部分：</p><ul><li>一个有序的数据字典Dictionary（包括单词Term和它出现的频率）。</li><li>与单词Term对应的Postings（即存在这个单词的文件）。</li></ul><p>当我们搜索的时候，首先将搜索的内容分解，然后在字典里找到对应Term，从而查找到与搜索相关的文件内容。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807212500261.png" alt="image-20220807212500261" tabindex="0" loading="lazy"><figcaption>image-20220807212500261</figcaption></figure><ul><li><strong>查询“the fury”</strong></li></ul><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807212606988.png" alt="image-20220807212606988" tabindex="0" loading="lazy"><figcaption>image-20220807212606988</figcaption></figure><ul><li><strong>自动补全</strong>（AutoCompletion-Prefix）</li></ul><p>如果想要查找以字母“c”开头的字母，可以简单的通过二分查找（Binary Search）在Inverted Index表中找到例如“choice”、“coming”这样的词（Term）。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807212700285.png" alt="image-20220807212700285" tabindex="0" loading="lazy"><figcaption>image-20220807212700285</figcaption></figure><ul><li><strong>昂贵的查找</strong></li></ul><p>如果想要查找所有包含“our”字母的单词，那么系统会扫描整个Inverted Index，这是非常昂贵的。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807212737409.png" alt="image-20220807212737409" tabindex="0" loading="lazy"><figcaption>image-20220807212737409</figcaption></figure><p>在此种情况下，如果想要做优化，那么我们面对的问题是如何生成合适的Term。</p><ul><li><strong>问题的转化</strong></li></ul><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807212813500.png" alt="image-20220807212813500" tabindex="0" loading="lazy"><figcaption>image-20220807212813500</figcaption></figure><p>对于以上诸如此类的问题，我们可能会有几种可行的解决方案：</p><ol><li><code>* suffix -&gt; xiffus *</code></li></ol><p>如果我们想以后缀作为搜索条件，可以为Term做反向处理。</p><ol><li><code>(60.6384, 6.5017) -&gt; u4u8gyykk</code></li></ol><p>对于GEO位置信息，可以将它转换为GEO Hash。</p><ol><li><code>123 -&gt; {1-hundreds, 12-tens, 123}</code></li></ol><p>对于简单的数字，可以为它生成多重形式的Term。</p><ul><li><strong>解决拼写错误</strong></li></ul><p>一个Python库 为单词生成了一个包含错误拼写信息的树形状态机，解决拼写错误的问题。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807213035372.png" alt="image-20220807213035372" tabindex="0" loading="lazy"><figcaption>image-20220807213035372</figcaption></figure><h4 id="_3-1-2-stored-field字段查找" tabindex="-1"><a class="header-anchor" href="#_3-1-2-stored-field字段查找" aria-hidden="true">#</a> 3.1.2 Stored Field字段查找</h4><p>当我们想要查找包含某个特定标题内容的文件时，Inverted Index就不能很好的解决这个问题，所以Lucene提供了另外一种数据结构Stored Fields来解决这个问题。本质上，Stored Fields是一个简单的键值对key-value。默认情况下，ElasticSearch会存储整个文件的JSON source。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807213136650.png" alt="image-20220807213136650" tabindex="0" loading="lazy"><figcaption>image-20220807213136650</figcaption></figure><h4 id="_3-1-3-document-values为了排序-聚合" tabindex="-1"><a class="header-anchor" href="#_3-1-3-document-values为了排序-聚合" aria-hidden="true">#</a> 3.1.3 Document Values为了排序，聚合</h4><p>即使这样，我们发现以上结构仍然无法解决诸如：排序、聚合、facet，因为我们可能会要读取大量不需要的信息。</p><p>所以，另一种数据结构解决了此种问题：Document Values。这种结构本质上就是一个列式的存储，它高度优化了具有相同类型的数据的存储结构。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807213419125.png" alt="image-20220807213419125" tabindex="0" loading="lazy"><figcaption>image-20220807213419125</figcaption></figure><p>为了提高效率，ElasticSearch可以将索引下某一个Document Value全部读取到内存中进行操作，这大大提升访问速度，但是也同时会消耗掉大量的内存空间。</p><p>总之，这些数据结构Inverted Index、Stored Fields、Document Values及其缓存，都在segment内部。</p><h3 id="_3-2-搜索发生时" tabindex="-1"><a class="header-anchor" href="#_3-2-搜索发生时" aria-hidden="true">#</a> 3.2 搜索发生时</h3><p>搜索时，Lucene会搜索所有的segment然后将每个segment的搜索结果返回，最后合并呈现给客户。</p><p>Lucene的一些特性使得这个过程非常重要：</p><ul><li>Segments是不可变的（immutable） <ul><li>Delete? 当删除发生时，Lucene做的只是将其标志位置为删除，但是文件还是会在它原来的地方，不会发生改变</li><li>Update? 所以对于更新来说，本质上它做的工作是：先删除，然后重新索引（Re-index）</li></ul></li><li>随处可见的压缩 <ul><li>Lucene非常擅长压缩数据，基本上所有教科书上的压缩方式，都能在Lucene中找到。</li></ul></li><li>缓存所有的所有 <ul><li>Lucene也会将所有的信息做缓存，这大大提高了它的查询效率。</li></ul></li></ul><h3 id="_3-3-缓存的故事" tabindex="-1"><a class="header-anchor" href="#_3-3-缓存的故事" aria-hidden="true">#</a> 3.3 缓存的故事</h3><p>当ElasticSearch索引一个文件的时候，会为文件建立相应的缓存，并且会定期（每秒）刷新这些数据，然后这些文件就可以被搜索到。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807213820893.png" alt="image-20220807213820893" tabindex="0" loading="lazy"><figcaption>image-20220807213820893</figcaption></figure><p>随着时间的增加，我们会有很多segments，</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807213837006.png" alt="image-20220807213837006" tabindex="0" loading="lazy"><figcaption>image-20220807213837006</figcaption></figure><p>所以ElasticSearch会将这些segment合并，在这个过程中，segment会最终被删除掉</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807213906420.png" alt="image-20220807213906420" tabindex="0" loading="lazy"><figcaption>image-20220807213906420</figcaption></figure><p>这就是为什么增加文件可能会使索引所占空间变小，它会引起merge，从而可能会有更多的压缩。</p><ul><li><strong>举个栗子</strong></li></ul><p>有两个segment将会merge</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807213929679.png" alt="image-20220807213929679" tabindex="0" loading="lazy"><figcaption>image-20220807213929679</figcaption></figure><p>这两个segment最终会被删除，然后合并成一个新的segment</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807213945097.png" alt="image-20220807213945097" tabindex="0" loading="lazy"><figcaption>image-20220807213945097</figcaption></figure><p>这时这个新的segment在缓存中处于cold状态，但是大多数segment仍然保持不变，处于warm状态。</p><p>以上场景经常在Lucene Index内部发生的。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807214011917.png" alt="image-20220807214011917" tabindex="0" loading="lazy"><figcaption>image-20220807214011917</figcaption></figure><h3 id="_3-4-在shard中搜索" tabindex="-1"><a class="header-anchor" href="#_3-4-在shard中搜索" aria-hidden="true">#</a> 3.4 在Shard中搜索</h3><p>ElasticSearch从Shard中搜索的过程与Lucene Segment中搜索的过程类似。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807214055031.png" alt="image-20220807214055031" tabindex="0" loading="lazy"><figcaption>image-20220807214055031</figcaption></figure><p>与在Lucene Segment中搜索不同的是，Shard可能是分布在不同Node上的，所以在搜索与返回结果时，所有的信息都会通过网络传输。</p><p>需要注意的是：</p><p>1次搜索查找2个shard ＝ 2次分别搜索shard</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807214137281.png" alt="image-20220807214137281" tabindex="0" loading="lazy"><figcaption>image-20220807214137281</figcaption></figure><ul><li><strong>对于日志文件的处理</strong></li></ul><p>当我们想搜索特定日期产生的日志时，通过根据时间戳对日志文件进行分块与索引，会极大提高搜索效率。</p><p>当我们想要删除旧的数据时也非常方便，只需删除老的索引即可。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807214205416.png" alt="image-20220807214205416" tabindex="0" loading="lazy"><figcaption>image-20220807214205416</figcaption></figure><p>在上种情况下，每个index有两个shards</p><ul><li><strong>如何Scale</strong></li></ul><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807214221166.png" alt="image-20220807214221166" tabindex="0" loading="lazy"><figcaption>image-20220807214221166</figcaption></figure><p>shard不会进行更进一步的拆分，但是shard可能会被转移到不同节点上</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807214243442.png" alt="image-20220807214243442" tabindex="0" loading="lazy"><figcaption>image-20220807214243442</figcaption></figure><p>所以，如果当集群节点压力增长到一定的程度，我们可能会考虑增加新的节点，这就会要求我们对所有数据进行重新索引，这是我们不太希望看到的，所以我们需要在规划的时候就考虑清楚，如何去平衡足够多的节点与不足节点之间的关系。</p><ul><li>节点分配与Shard优化 <ul><li>为更重要的数据索引节点，分配性能更好的机器</li><li>确保每个shard都有副本信息replica</li></ul></li></ul><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807214333483.png" alt="image-20220807214333483" tabindex="0" loading="lazy"><figcaption>image-20220807214333483</figcaption></figure><ul><li><strong>路由Routing</strong></li></ul><p>每个节点，每个都存留一份路由表，所以当请求到任何一个节点时，ElasticSearch都有能力将请求转发到期望节点的shard进一步处理。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807214349755.png" alt="image-20220807214349755" tabindex="0" loading="lazy"><figcaption>image-20220807214349755</figcaption></figure><h2 id="_4-一个真实的请求" tabindex="-1"><a class="header-anchor" href="#_4-一个真实的请求" aria-hidden="true">#</a> 4. 一个真实的请求</h2><h3 id="_4-1-请求的逻辑示例" tabindex="-1"><a class="header-anchor" href="#_4-1-请求的逻辑示例" aria-hidden="true">#</a> 4.1 请求的逻辑示例</h3><p>包含了查询条件和聚合</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807215038558.png" alt="image-20220807215038558" tabindex="0" loading="lazy"><figcaption>image-20220807215038558</figcaption></figure><ul><li><strong>Query</strong></li></ul><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221226155157815.png" alt="image-20221226155157815" tabindex="0" loading="lazy"><figcaption>image-20221226155157815</figcaption></figure><p>Query有一个类型filtered，以及一个multi_match的查询</p><ul><li><strong>Aggregation</strong></li></ul><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807215107852.png" alt="image-20220807215107852" tabindex="0" loading="lazy"><figcaption>image-20220807215107852</figcaption></figure><p>根据作者进行聚合，得到top10的hits的top10作者的信息</p><h3 id="_4-2-请求分发-确定协调者节点" tabindex="-1"><a class="header-anchor" href="#_4-2-请求分发-确定协调者节点" aria-hidden="true">#</a> 4.2 请求分发-确定协调者节点</h3><ul><li><strong>请求分发</strong></li></ul><p>这个请求可能被分发到集群里的任意一个节点</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807215126919.png" alt="image-20220807215126919" tabindex="0" loading="lazy"><figcaption>image-20220807215126919</figcaption></figure><ul><li><strong>上帝节点</strong></li></ul><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807215154971.png" alt="image-20220807215154971" tabindex="0" loading="lazy"><figcaption>image-20220807215154971</figcaption></figure><p>这时这个节点就成为当前请求的协调者（Coordinator），它决定：</p><ul><li>a) 根据索引信息，判断请求会被路由到哪个核心节点</li><li>b) 以及哪个副本是可用的</li><li>c) 等等</li></ul><h3 id="_4-3-请求分发-分发给集群中的同索引shard节点" tabindex="-1"><a class="header-anchor" href="#_4-3-请求分发-分发给集群中的同索引shard节点" aria-hidden="true">#</a> 4.3 请求分发-分发给集群中的同索引shard节点</h3><ul><li><strong>路由</strong></li></ul><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807215231471.png" alt="image-20220807215231471" tabindex="0" loading="lazy"><figcaption>image-20220807215231471</figcaption></figure><h3 id="_4-4-es的query转换成lucene-query" tabindex="-1"><a class="header-anchor" href="#_4-4-es的query转换成lucene-query" aria-hidden="true">#</a> 4.4 ES的Query转换成Lucene Query</h3><ul><li><strong>在真实搜索之前</strong></li></ul><p>ElasticSearch 会将Query转换成Lucene Query</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807215258465.png" alt="image-20220807215258465" tabindex="0" loading="lazy"><figcaption>image-20220807215258465</figcaption></figure><p>然后在所有的segment中执行计算</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807215314079.png" alt="image-20220807215314079" tabindex="0" loading="lazy"><figcaption>image-20220807215314079</figcaption></figure><p>对于Filter条件本身也会有缓存</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807215326982.png" alt="image-20220807215326982" tabindex="0" loading="lazy"><figcaption>image-20220807215326982</figcaption></figure><p>但queries不会被缓存，所以如果相同的Query重复执行，应用程序自己需要做缓存</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807215344697.png" alt="image-20220807215344697" tabindex="0" loading="lazy"><figcaption>image-20220807215344697</figcaption></figure><p>所以，</p><ul><li><p>a) filters可以在任何时候使用</p></li><li><p>b) query只有在需要score的时候才使用</p></li></ul><h3 id="_4-5-向上逐层返回" tabindex="-1"><a class="header-anchor" href="#_4-5-向上逐层返回" aria-hidden="true">#</a> 4.5 <strong>向上逐层返回</strong></h3><p>搜索结束之后，结果会沿着下行的路径向上逐层返回。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807215403015.png" alt="image-20220807215403015" tabindex="0" loading="lazy"><figcaption>image-20220807215403015</figcaption></figure><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807215411973.png" alt="image-20220807215411973" tabindex="0" loading="lazy"><figcaption>image-20220807215411973</figcaption></figure><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807215420881.png" alt="image-20220807215420881" tabindex="0" loading="lazy"><figcaption>image-20220807215420881</figcaption></figure><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807215435346.png" alt="image-20220807215435346" tabindex="0" loading="lazy"><figcaption>image-20220807215435346</figcaption></figure><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807215446748.png" alt="image-20220807215446748" tabindex="0" loading="lazy"><figcaption>image-20220807215446748</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>',150),r={href:"https://pdai.tech/md/db/nosql-es/elasticsearch-y-th-1.html",target:"_blank",rel:"noopener noreferrer"},p=i("strong",null,"ES详解 - 原理：从图解构筑对ES原理的初步认知",-1);function u(m,d){const e=t("ExternalLinkIcon");return g(),n("div",null,[c,i("p",null,[i("a",r,[p,l(e)])])])}const f=a(o,[["render",u],["__file","elasticsearch-y-th-1.html.vue"]]);export{f as default};
