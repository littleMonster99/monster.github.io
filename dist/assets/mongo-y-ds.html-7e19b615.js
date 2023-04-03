import{_ as o,W as i,X as r,Y as e,Z as g,$ as t,a0 as n,D as l}from"./framework-f64bc974.js";const s={},c=n('<h1 id="mongo进阶-wt引擎-数据结构" tabindex="-1"><a class="header-anchor" href="#mongo进阶-wt引擎-数据结构" aria-hidden="true">#</a> Mongo进阶 - WT引擎：数据结构</h1><blockquote><p>MongoDB的WiredTiger存储引擎背后采用了什么样的数据结构呢？本文将从<code>常见引擎数据结构</code>，<code>典型B-Tree数据结构</code>，<code>磁盘数据结构</code>, <code>内存数据结构</code>, <code>Page数据结构</code>等方面详解介绍。</p></blockquote><h2 id="_1-存储引擎及常见数据结构" tabindex="-1"><a class="header-anchor" href="#_1-存储引擎及常见数据结构" aria-hidden="true">#</a> 1. 存储引擎及常见数据结构</h2><p>存储引擎要做的事情无外乎是将磁盘上的数据读到内存并返回给应用，或者将应用修改的数据由内存写到磁盘上。如何设计一种高效的数据结构和算法是所有存储引擎要考虑的根本问题，目前大多数流行的存储引擎是基于B-Tree或LSM(Log Structured Merge) Tree这两种数据结构来设计的。</p><ul><li><strong>B-Tree</strong></li></ul><p>像Oracle、SQL Server、DB2、MySQL (InnoDB)和PostgreSQL这些传统的关系数据库依赖的底层存储引擎是基于B-Tree开发的；</p><ul><li><strong>LSM Tree</strong></li></ul><p>像Cassandra、Elasticsearch (Lucene)、Google Bigtable、Apache HBase、LevelDB和RocksDB这些当前比较流行的NoSQL数据库存储引擎是基于LSM开发的。</p><ul><li><strong>插件式兼容上述两种</strong></li></ul><p>当然有些数据库采用了插件式的存储引擎架构，实现了Server层和存储引擎层的解耦，可以支持多种存储引擎，如MySQL既可以支持B-Tree结构的InnoDB存储引擎，还可以支持LSM结构的RocksDB存储引擎。</p><blockquote><p>对于MongoDB来说，也采用了插件式存储引擎架构，底层的WiredTiger存储引擎还可以支持B-Tree和LSM两种结构组织数据,但MongoDB在使用WiredTiger作为存储引擎时，目前<strong>默认配置是使用了B-Tree结构</strong>。</p></blockquote><p>因此，本章后面的内容将以B-Tree为核心来分析MongoDB是如何将文档数据在磁盘和内存间进行流传以及WiredTiger存储引擎的其它高级特性。</p><h2 id="_2-典型b-tree数据结构" tabindex="-1"><a class="header-anchor" href="#_2-典型b-tree数据结构" aria-hidden="true">#</a> 2. 典型B-Tree数据结构</h2><blockquote><p>B-Tree是为磁盘或其它辅助存储设备而设计的一种数据结构，目的是为了在查找数据的过程中减少磁盘I/O的次数。</p></blockquote><p>一个典型的B-Tree结构如下图所示：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20230112212906630.png" alt="image-20230112212906630" tabindex="0" loading="lazy"><figcaption>image-20230112212906630</figcaption></figure><p>在整个B-Tree中，从上往下依次为Root结点、内部结点和叶子结点，每个结点就是一个Page，数据以Page为单位在内存和磁盘间进行调度，每个Page的大小决定了相应结点的分支数量，每条索引记录会包含一个数据指针，指向一条数据记录所在文件的偏移量。</p><p>如上图，假设每个结点100个分支，那么所有叶子结点合起来可以包含100万个键值（等于100<em>100</em>100）。通常情况下Root结点和内部结点的Page会驻留在内存中，所以查找一条数据可能只需2次磁盘I/O。但随着数据不断的插入、删除，会涉及到B-Tree结点的分裂、位置提升及合并等操作，因此维护一个B-Tree的平衡也是比较耗时的。</p><h2 id="_3-wiredtiger数据文件在磁盘上的数据结构" tabindex="-1"><a class="header-anchor" href="#_3-wiredtiger数据文件在磁盘上的数据结构" aria-hidden="true">#</a> 3. WiredTiger数据文件在磁盘上的数据结构</h2><p>对于WiredTiger存储引擎来说，集合所在的数据文件和相应的索引文件都是按B-Tree结构来组织的，<strong>不同之处在于数据文件对应的B-Tree叶子结点上除了存储键名外（keys），还会存储真正的集合数据（values）</strong>，所以数据文件的存储结构也可以认为是一种B+Tree，其整体结构如下图所示：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20230112213257369.png" alt="image-20230112213257369" tabindex="0" loading="lazy"><figcaption>image-20230112213257369</figcaption></figure><p>从上图可以看到，B+ Tree中的leaf page包含一个页头（page header）、块头（block header）和真正的数据（key/value），其中页头定义了页的类型、页中实际载荷数据的大小、页中记录条数等信息；块头定义了此页的checksum、块在磁盘上的寻址位置等信息。</p><p>WiredTiger有一个块设备管理的模块，用来为page分配block。如果要定位某一行数据（key/value）的位置，可以先通过block的位置找到此page（相对于文件起始位置的偏移量），再通过page找到行数据的相对位置，最后可以得到行数据相对于文件起始位置的偏移量offsets。由于offsets是一个8字节大小的变量，所以WiredTiger磁盘文件的大小，其最大值可以非常大(264bit)。</p><h2 id="_4-wiredtiger内存上的基础数据结构" tabindex="-1"><a class="header-anchor" href="#_4-wiredtiger内存上的基础数据结构" aria-hidden="true">#</a> 4. WiredTiger内存上的基础数据结构</h2><p>WiredTiger会按需将磁盘的数据<strong>以page为单位加载到内存</strong>，同时在内存会构造相应的B-Tree来存储这些数据。<strong>为了高效的支撑CRUD等操作以及将内存里面发生变化的数据持久化到磁盘上</strong>，WiredTiger也会在内存里面维护其它几种数据结构，如下图所示：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20230112213737125.png" alt="image-20230112213737125" tabindex="0" loading="lazy"><figcaption>image-20230112213737125</figcaption></figure><p>上图是WiredTiger在内存里面的大概布局图，通过它我们可梳理清楚存储引擎是如何将数据加载到内存，然后如何通过相应数据结构来支持查询、插入、修改操作的。</p><ul><li>内存里面B-Tree包含三种类型的page，即rootpage、internal page和leaf page，前两者包含指向其子页的page index指针，不包含集合中的真正数据，leaf page包含集合中的真正数据即keys/values和指向父页的home指针；</li><li>内存上的leaf page会维护一个<code>WT_ROW</code>结构的数组变量，将保存从磁盘leaf page读取的keys/values值，每一条记录还有一个cell_offset变量，表示这条记录在page上的偏移量；</li><li>内存上的leaf page会维护一个<code>WT_UPDATE</code>结构的数组变量，每条被修改的记录都会有一个数组元素与之对应，如果某条记录被多次修改，则会将所有修改值以链表形式保存。</li><li>内存上的leaf page会维护一个<code>WT_INSERT_HEAD</code>结构的数组变量，具体插入的data会保存在<code>WT_INSERT_HEAD</code>结构中的<code>WT_UPDATE</code>属性上，且通过key属性的offset和size可以计算出此条记录待插入的位置；同时，为了提高寻找待插入位置的效率，每个<code>WT_INSERT_HEAD</code>变量以<strong>跳转链表</strong>的形式构成。</li></ul><p>下图是一个跳转链表的插入示例：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20230112213944090.png" alt="image-20230112213944090" tabindex="0" loading="lazy"><figcaption>image-20230112213944090</figcaption></figure><p>假如现在插入一个16，最终结果如下：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20230112214001872.png" alt="image-20230112214001872" tabindex="0" loading="lazy"><figcaption>image-20230112214001872</figcaption></figure><p>如果是一个普通的链表，寻找合适的插入位置时，需要经过：</p><p>开始结点-&gt;2-&gt;5-&gt;8-&gt;10-&gt;20的比较；</p><p>对于跳转链表来说只需经过：开始结点-&gt;5-&gt;10-&gt;20的比较，可以看到比在普通链表上寻找插入位置时需要的比较步骤少，所以，<strong>通过跳转链表的数据结构能够提升插入操作的效率</strong>。</p><h2 id="_5-page的其它数据结构" tabindex="-1"><a class="header-anchor" href="#_5-page的其它数据结构" aria-hidden="true">#</a> 5. page的其它数据结构</h2><p>对于一个面向行存储的leaf page来说，包含的数据结构除了上面提到的<code>WT_ROW</code>（keys/values）、<code>WT_UPDATE</code>（修改数据）、<code>WT_INSERT_HEAD</code>（插入数据）外，还有如下几种重要的数据结构：</p><ul><li><strong>WT_PAGE_MODIFY</strong>：</li></ul><p>保存page上事务、脏数据字节大小等与page修改相关的信息；</p><ul><li><strong>read_gen</strong>：</li></ul><p>page的read generation值作为evict page时使用，具体来说对应page在LRU队列中的位置，决定page被evict server选中淘汰出去的先后顺序。</p><ul><li><strong>WT_PAGE_LOOKASIDE</strong>：</li></ul><p>page关联的lookasidetable数据。当对一个page进行reconcile时，如果系统中还有之前的读操作正在访问此page上修改的数据，则会将这些数据保存到lookasidetable；当page再被读时，可以利用lookasidetable中的数据重新构建内存page.</p><ul><li><strong>WT_ADDR</strong>：</li></ul><p>page被成功reconciled后，对应的磁盘上块的地址，将按这个地址将page写到磁盘，块是最小磁盘上文件的最小分配单元，一个page可能有多个块。</p><ul><li><strong>checksum</strong>：</li></ul><p>page的校验和，如果page从磁盘读到内存后没有任何修改，比较checksum可以得到相等结果，那么后续reconcile这个page时，不会将这个page的再重新写入磁盘。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>',48),p={href:"https://pdai.tech/md/db/nosql-mongo/mongo-y-ds.html",target:"_blank",rel:"noopener noreferrer"};function d(h,u){const a=l("ExternalLinkIcon");return i(),r("div",null,[c,e("p",null,[e("a",p,[g("Mongo进阶 - WT引擎：数据结构"),t(a)])])])}const f=o(s,[["render",d],["__file","mongo-y-ds.html.vue"]]);export{f as default};
