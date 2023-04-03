import{_ as e,W as s,X as t,Y as a,Z as i,$ as p,a0 as r,D as o}from"./framework-f64bc974.js";const c={},d=r(`<h1 id="rabbitmq面试-面试总结" tabindex="-1"><a class="header-anchor" href="#rabbitmq面试-面试总结" aria-hidden="true">#</a> RabbitMQ面试 - 面试总结</h1><h2 id="_0-面试题" tabindex="-1"><a class="header-anchor" href="#_0-面试题" aria-hidden="true">#</a> 0. 面试题</h2><ul><li><p>为什么使用消息队列？</p></li><li><p>消息队列有什么优缺点</p><p>Kafka、ActiveMQ、RabbitMQ、RocketMQ 有什么优缺点？</p></li><li><p>如何保证消息的可靠性传输？或者说，如何处理消息丢失的问题？</p><p>RabbitMQ Kafka</p></li><li><p>如何保证消息队列的高可用？</p><ul><li><p>RabbitMQ 的高可用性</p></li><li><p>Kafka 的高可用性</p></li></ul></li><li><p>如何避免消息重复投递或重复消费？</p></li><li><p>消息基于什么传输？</p></li><li><p>消息怎么路由？</p></li><li><p>多个消费者监听一个队列时，消息如何分发</p></li><li><p>无法被路由的消息去了哪里</p></li><li><p>消息在什么时候会变成死信</p></li><li><p>RabbitMQ如何实现延时队列</p></li><li><p>如何保证消息幂等性</p></li><li><p>消息如何被优先消费</p></li><li><p>如何保证消息的顺序性</p></li><li><p>mq 的缺点</p></li></ul><h2 id="_1-为什么使用消息队列" tabindex="-1"><a class="header-anchor" href="#_1-为什么使用消息队列" aria-hidden="true">#</a> 1. 为什么使用消息队列？</h2><blockquote><p>面试官心理分析</p><p>其实面试官主要是想看看：</p><p>第一，你知不知道你们系统里为什么要用消息队列这个东西？ 不少候选人，说自己项目里用了 Redis、MQ，但是其实他并不知道自己为什么要用这个东西。其实说白了，就是为了用而用，或者是别人设计的架构，他从头到尾都没思考过。 没有对自己的架构问过为什么的人，一定是平时没有思考的人，面试官对这类候选人印象通常很不好。因为面试官担心你进了团队之后只会木头木脑的干呆活儿，不会自己思考。</p><p>第二，你既然用了消息队列这个东西，你知不知道用了有什么好处&amp;坏处？ 你要是没考虑过这个，那你盲目弄个 MQ 进系统里，后面出了问题你是不是就自己溜了给公司留坑？你要是没考虑过引入一个技术可能存在的弊端和风险，面试官把这类候选人招进来了，基本可能就是挖坑型选手。就怕你干 1 年挖一堆坑，自己跳槽了，给公司留下无穷后患。</p><p>第三，既然你用了 MQ，可能是某一种 MQ，那么你当时做没做过调研？ 你别傻乎乎的自己拍脑袋看个人喜好就瞎用了一个 MQ，比如 Kafka，甚至都从没调研过业界流行的 MQ 到底有哪几种。每一个 MQ 的优点和缺点是什么。每一个 MQ 没有绝对的好坏，但是就是看用在哪个场景可以扬长避短，利用其优势，规避其劣势。 如果是一个不考虑技术选型的候选人招进了团队，leader 交给他一个任务，去设计个什么系统，他在里面用一些技术，可能都没考虑过选型，最后选的技术可能并不一定合适，一样是留坑。</p></blockquote><blockquote><p>面试题剖析</p><p>其实就是问问你消息队列都有哪些使用场景，然后你项目里具体是什么场景，说说你在这个场景里用消息队列是什么？</p><p>面试官问你这个问题，期望的一个回答是说，你们公司有个什么业务场景，这个业务场景有个什么技术挑战，如果不用 MQ 可能会很麻烦，但是你现在用了 MQ 之后带给了你很多的好处。</p><p>先说一下消息队列常见的使用场景吧，其实场景有很多，但是比较核心的有 3 个：解耦、异步、削峰。</p></blockquote><p>为了：解耦、异步、削峰</p><h3 id="_1-1-解耦" tabindex="-1"><a class="header-anchor" href="#_1-1-解耦" aria-hidden="true">#</a> 1.1 解耦</h3><h4 id="_1-1-1-使用mq-之前" tabindex="-1"><a class="header-anchor" href="#_1-1-1-使用mq-之前" aria-hidden="true">#</a> 1.1.1 使用MQ 之前</h4><p>看这么个场景。A 系统发送数据到 BCD 三个系统，通过接口调用发送。如果 E 系统也要这个数据呢？那如果 C 系统现在不需要了呢？A 系统负责人几乎崩溃......</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220925204621997.png" alt="image-20220925204621997" tabindex="0" loading="lazy"><figcaption>image-20220925204621997</figcaption></figure><p>在这个场景中，A 系统跟其它各种乱七八糟的系统严重耦合，A 系统产生一条比较关键的数据，很多系统都需要 A 系统将这个数据发送过来。A 系统要时时刻刻考虑 BCDE 四个系统如果挂了该咋办？要不要重发，要不要把消息存起来？头发都白了啊！</p><h4 id="_1-1-2-使用mq-之后" tabindex="-1"><a class="header-anchor" href="#_1-1-2-使用mq-之后" aria-hidden="true">#</a> 1.1.2 使用MQ 之后</h4><p>如果使用 MQ，A 系统产生一条数据，发送到 MQ 里面去，哪个系统需要数据自己去 MQ 里面消费。如果新系统需要数据，直接从 MQ 里消费即可；如果某个系统不需要这条数据了，就取消对 MQ 消息的消费即可。这样下来，A 系统压根儿不需要去考虑要给谁发送数据，不需要维护这个代码，也不需要考虑人家是否调用成功、失败超时等情况。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220925204827353.png" alt="image-20220925204827353" tabindex="0" loading="lazy"><figcaption>image-20220925204827353</figcaption></figure><h4 id="_1-1-3-总结" tabindex="-1"><a class="header-anchor" href="#_1-1-3-总结" aria-hidden="true">#</a> 1.1.3 总结：</h4><p>通过一个 MQ，Pub/Sub 发布订阅消息这么一个模型，A 系统就跟其它系统彻底解耦了。</p><h4 id="_1-1-4-面试技巧" tabindex="-1"><a class="header-anchor" href="#_1-1-4-面试技巧" aria-hidden="true">#</a> 1.1.4 面试技巧：</h4><p>你需要去考虑一下你负责的系统中是否有类似的场景，就是一个系统或者一个模块，调用了多个系统或者模块，互相之间的调用很复杂，维护起来很麻烦。但是其实这个调用是不需要直接同步调用接口的，如果用 MQ 给它异步化解耦，也是可以的，你就需要去考虑在你的项目里，是不是可以运用这个 MQ 去进行系统的解耦。在简历中体现出来这块东西，用 MQ 作解耦。</p><h3 id="_1-2-异步" tabindex="-1"><a class="header-anchor" href="#_1-2-异步" aria-hidden="true">#</a> 1.2 异步</h3><h4 id="_1-2-1-使用mq-之前" tabindex="-1"><a class="header-anchor" href="#_1-2-1-使用mq-之前" aria-hidden="true">#</a> 1.2.1 使用MQ 之前</h4><p>再来看一个场景，A 系统接收一个请求，需要在自己本地写库，还需要在 BCD 三个系统写库，自己本地写库要 3ms，BCD 三个系统分别写库要 300ms、450ms、200ms。最终请求总延时是 3 + 300 + 450 + 200 = 953ms，接近 1s，用户感觉搞个什么东西，慢死了慢死了。用户通过浏览器发起请求，等待个 1s，这几乎是不可接受的。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220925205330911.png" alt="image-20220925205330911" tabindex="0" loading="lazy"><figcaption>image-20220925205330911</figcaption></figure><p>一般互联网类的企业，对于用户直接的操作，一般要求是每个请求都必须在 200 ms 以内完成，对用户几乎是无感知的。</p><h4 id="_1-2-3-使用mq-之后" tabindex="-1"><a class="header-anchor" href="#_1-2-3-使用mq-之后" aria-hidden="true">#</a> 1.2.3 使用MQ 之后</h4><p>如果使用 MQ，那么 A 系统连续发送 3 条消息到 MQ 队列中，假如耗时 5ms，A 系统从接受一个请求到返回响应给用户，总时长是 3 + 5 = 8ms，对于用户而言，其实感觉上就是点个按钮，8ms 以后就直接返回了，爽！网站做得真好，真快！</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220925205429880.png" alt="image-20220925205429880" tabindex="0" loading="lazy"><figcaption>image-20220925205429880</figcaption></figure><h3 id="_1-3-削峰" tabindex="-1"><a class="header-anchor" href="#_1-3-削峰" aria-hidden="true">#</a> 1.3 削峰</h3><h4 id="_1-3-1-使用mq-之前" tabindex="-1"><a class="header-anchor" href="#_1-3-1-使用mq-之前" aria-hidden="true">#</a> 1.3.1 使用MQ 之前</h4><p>每天 0:00 到 12:00，A 系统风平浪静，每秒并发请求数量就 50 个。结果每次一到 12:00 ~ 13:00 ，每秒并发请求数量突然会暴增到 5k+ 条。但是系统是直接基于 MySQL 的，大量的请求涌入 MySQL，每秒钟对 MySQL 执行约 5k 条 SQL。</p><p>一般的 MySQL，扛到每秒 2k 个请求就差不多了，如果每秒请求到 5k 的话，可能就直接把 MySQL 给打死了，导致系统崩溃，用户也就没法再使用系统了。</p><p>但是高峰期一过，到了下午的时候，就成了低峰期，可能也就 1w 的用户同时在网站上操作，每秒中的请求数量可能也就 50 个请求，对整个系统几乎没有任何的压力。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220925205521714.png" alt="image-20220925205521714" tabindex="0" loading="lazy"><figcaption>image-20220925205521714</figcaption></figure><h4 id="_1-3-2-使用mq-之后" tabindex="-1"><a class="header-anchor" href="#_1-3-2-使用mq-之后" aria-hidden="true">#</a> 1.3.2 使用MQ 之后</h4><p>如果使用 MQ，每秒 5k 个请求写入 MQ，A 系统每秒钟最多处理 2k 个请求，因为 MySQL 每秒钟最多处理 2k 个。A 系统从 MQ 中慢慢拉取请求，每秒钟就拉取 2k 个请求，不要超过自己每秒能处理的最大请求数量就 ok，这样下来，哪怕是高峰期的时候，A 系统也绝对不会挂掉。而 MQ 每秒钟 5k 个请求进来，就 2k 个请求出去，结果就导致在中午高峰期（1 个小时），可能有几十万甚至几百万的请求积压在 MQ 中。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220925205656228.png" alt="image-20220925205656228" tabindex="0" loading="lazy"><figcaption>image-20220925205656228</figcaption></figure><p>这个短暂的高峰期积压是 ok 的，因为高峰期过了之后，每秒钟就 50 个请求进 MQ，但是 A 系统依然会按照每秒 2k 个请求的速度在处理。所以说，只要高峰期一过，A 系统就会快速将积压的消息给解决掉。</p><h2 id="_2-消息队列有什么优缺点" tabindex="-1"><a class="header-anchor" href="#_2-消息队列有什么优缺点" aria-hidden="true">#</a> 2. 消息队列有什么优缺点</h2><p>优点上面已经说了，就是在特殊场景下有其对应的好处，解耦、异步、削峰。</p><p>缺点有以下几个：</p><h3 id="_2-1-系统可用性降低" tabindex="-1"><a class="header-anchor" href="#_2-1-系统可用性降低" aria-hidden="true">#</a> 2.1 系统可用性降低</h3><p>系统引入的外部依赖越多，越容易挂掉。本来你就是 A 系统调用 BCD 三个系统的接口就好了，ABCD 四个系统还好好的，没啥问题，你偏加个 MQ 进来，万一 MQ 挂了咋整？MQ 一挂，整套系统崩溃，你不就完了？</p><h3 id="_2-2-系统复杂度提高" tabindex="-1"><a class="header-anchor" href="#_2-2-系统复杂度提高" aria-hidden="true">#</a> 2.2 系统复杂度提高</h3><p>硬生生加个 MQ 进来，你怎么保证消息没有重复消费？怎么处理消息丢失的情况？怎么保证消息传递的顺序性？头大头大，问题一大堆，痛苦不已。</p><h3 id="_2-3-一致性问题" tabindex="-1"><a class="header-anchor" href="#_2-3-一致性问题" aria-hidden="true">#</a> 2.3 一致性问题</h3><p>A 系统处理完了直接返回成功了，人都以为你这个请求就成功了；但是问题是，要是 BCD 三个系统那里，BD 两个系统写库成功了，结果 C 系统写库失败了，咋整？你这数据就不一致了。</p><blockquote><p>所以消息队列实际是一种非常复杂的架构，你引入它有很多好处，但是也得针对它带来的坏处做各种额外的技术方案和架构来规避掉，做好之后，你会发现，妈呀，系统复杂度提升了一个数量级，也许是复杂了 10 倍。但是关键时刻，用，还是得用的。</p></blockquote><h2 id="_3-kafka、activemq、rabbitmq、rocketmq-有什么优缺点" tabindex="-1"><a class="header-anchor" href="#_3-kafka、activemq、rabbitmq、rocketmq-有什么优缺点" aria-hidden="true">#</a> 3. Kafka、ActiveMQ、RabbitMQ、RocketMQ 有什么优缺点？</h2><table><thead><tr><th>特性</th><th>ActiveMQ</th><th>RabbitMQ</th><th>RocketMQ</th><th>Kafka</th></tr></thead><tbody><tr><td>客户端支持语言</td><td>JAVA、C、C++、Python、PHP、Pert、net等</td><td>官方支持Erlang、Java/Ruby等，社区产出多种语言API，几乎支持所有常用语言</td><td>JAVA、C++（不成熟）</td><td>官方支持JAVA,开源社区有多语言版本，如PHP,Python,GO,C/C++，Ruby，NodeJS等编程语言</td></tr><tr><td>单机吞吐量</td><td>万级，吞吐量RocketMQ和Kafka要低了一个数量级</td><td>万级，吞吐量比RocketMQ和Kafka要低了一个数量级</td><td>10万级，RocketMQ也是可以支撑高吞吐的一种MQ</td><td>10万级别，这是kafka最大的优点，就是吞吐量高。 一般配合大数据类的系统来进行实时数据计算、日志采集等场景</td></tr><tr><td>topic数量对吞吐量的影响</td><td></td><td></td><td>topic可以达到几百，几千个的级别，吞吐量会有较小幅度的下降 这是RocketMQ的一大优势，在同等机器下，可以支撑大量的topic</td><td>topic从几十个到几百个的时候，吞吐量会大幅度下降 所以在同等机器下，kafka尽量保证topic数量不要过多。如果要支撑大规模topic，需要增加更多的机器资源</td></tr><tr><td>时效性</td><td>ms级</td><td>微秒级，这是rabbitmq的一大特点，延迟是最低的</td><td>ms级</td><td>延迟在ms级以内</td></tr><tr><td>可用性</td><td>高，基于主从架构实现高可用性</td><td>高，基于主从架构实现高可用性</td><td>非常高，分布式架构</td><td>非常高，kafka是分布式的，一个数据多个副本，少数机器宕机，不会丢失数据，不会导致不可用</td></tr><tr><td>消息可靠性</td><td>有较低的概率丢失数据</td><td>基本不丢</td><td>经过参数优化配置，可以做到0丢失</td><td>经过参数优化配置，消息可以做到0丢失</td></tr><tr><td>持久化</td><td>内存、文件、数据库</td><td>内存、文件，支持数据堆积，但数据堆积会影响生产速率</td><td>磁盘文件</td><td>磁盘文件，只要磁盘容量足够，可以做到无限消息堆积</td></tr><tr><td>功能支持</td><td>MQ领域的功能极其完备</td><td>基于erlang开发，所以并发能力很强，性能极其好，延时很低</td><td>MQ功能较为完善，还是分布式的，扩展性好</td><td>功能较为简单，主要支持简单的MQ功能，在大数据领域的实时计算以及日志采集被大规模使用，是事实上的标准</td></tr></tbody></table><h3 id="_3-1-业务选型" tabindex="-1"><a class="header-anchor" href="#_3-1-业务选型" aria-hidden="true">#</a> 3.1 业务选型</h3><ol><li>一般的业务系统要引入MQ，最早大家都用ActiveMQ，但是现在确实大家用的不多了，没经过大规模吞吐量场景的验证，社区也不是很活跃</li><li>如果是<strong>中小型公司</strong>，基础架构研发能力较弱，<strong>采用RabbitMQ</strong>是不错的选择，虽然erlang语言阻止了大量的java工程师去深入研究和掌控他，但是社区十分活跃</li><li>如果系统有较大吞吐量需求，同时可能会有大量的topic，基础架构<strong>研发实力较强的大公司</strong>，完全可以采用RocketMQ，即使社区不再更新，也可以自己去维护</li><li>如果是<strong>大数据领域的实时计算、日志采集等场景</strong>，用Kafka是业内标准的，绝对没问题，社区活跃度很高，绝对不会黄，何况几乎是全世界这个领域的事实性规范</li></ol><h2 id="_4-如何保证消息的可靠性传输-或者说-如何处理消息丢失的问题" tabindex="-1"><a class="header-anchor" href="#_4-如何保证消息的可靠性传输-或者说-如何处理消息丢失的问题" aria-hidden="true">#</a> 4. 如何保证消息的可靠性传输？或者说，如何处理消息丢失的问题？</h2><blockquote><p>面试官心理分析</p><p>这个是肯定的，用 MQ 有个基本原则，就是数据不能多一条，也不能少一条，不能多，就是前面说的重复消费和幂等性问题。不能少，就是说这数据别搞丢了。那这个问题你必须得考虑一下。</p><p>如果说你这个是用 MQ 来传递非常核心的消息，比如说计费、扣费的一些消息，那必须确保这个 MQ 传递过程中绝对不会把计费消息给弄丢。</p></blockquote><blockquote><p>面试题剖析</p><p>数据的丢失问题，可能出现在生产者、MQ、消费者中，咱们从 RabbitMQ 和 Kafka 分别来分析一下吧。</p></blockquote><h3 id="_4-1-rabbitmq" tabindex="-1"><a class="header-anchor" href="#_4-1-rabbitmq" aria-hidden="true">#</a> 4.1 RabbitMQ</h3><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220925211000760.png" alt="image-20220925211000760" tabindex="0" loading="lazy"><figcaption>image-20220925211000760</figcaption></figure><h4 id="_4-1-1-生产者弄丢了数据" tabindex="-1"><a class="header-anchor" href="#_4-1-1-生产者弄丢了数据" aria-hidden="true">#</a> 4.1.1 生产者弄丢了数据</h4><p>生产者将数据发送到 RabbitMQ 的时候，可能数据就在半路给搞丢了，因为网络问题啥的，都有可能。</p><p>此时可以选择用 RabbitMQ 提供的事务功能，就是生产者发送数据之前开启 RabbitMQ 事务 channel.txSelect ，然后发送消息，如果消息没有成功被 RabbitMQ 接收到，那么生产者会收到异常报错，此时就可以回滚事务 channel.txRollback ，然后重试发送消息；如果收到了消息，那么可以提交事务 channel.txCommit 。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 开启事务
channel.txSelect
try {
    // 这里发送消息
} catch (Exception e) {
    channel.txRollback

    // 这里再次重发这条消息

}

// 提交事务
channel.txCommit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>但是问题是，RabbitMQ 事务机制（同步）一搞，基本上吞吐量会下来，因为太耗性能。</strong></p><p>所以一般来说，如果你要确保说写 RabbitMQ 的消息别丢，可以开启 confirm 模式，在生产者那里设置开启 confirm 模式之后，你每次写的消息都会分配一个唯一的 id，然后如果写入了 RabbitMQ 中，RabbitMQ 会给你回传一个 ack 消息，告诉你说这个消息 ok 了。如果 RabbitMQ 没能处理这个消息，会回调你的一个 nack 接口，告诉你这个消息接收失败，你可以重试。而且你可以结合这个机制自己在内存里维护每个消息 id 的状态，如果超过一定时间还没接收到这个消息的回调，那么你可以重发。</p><p><strong>事务机制和 confirm 机制最大的不同在于</strong>，<strong>事务机制是同步的</strong>，你提交一个事务之后会阻塞在那儿，但是 <strong>confirm 机制是异步的</strong>，你发送个消息之后就可以发送下一个消息，然后那个消息 RabbitMQ 接收了之后会异步回调你的一个接口通知你这个消息接收到了。</p><p>所以一般在生产者这块避<strong>免数据丢失，都是用 confirm 机制</strong>的。</p><h4 id="_4-1-2-rabbitmq-弄丢了数据" tabindex="-1"><a class="header-anchor" href="#_4-1-2-rabbitmq-弄丢了数据" aria-hidden="true">#</a> 4.1.2 RabbitMQ 弄丢了数据</h4><p>就是 RabbitMQ 自己弄丢了数据，这个你必须开启 RabbitMQ 的持久化，就是消息写入之后会持久化到磁盘，哪怕是 RabbitMQ 自己挂了，恢复之后会自动读取之前存储的数据，一般数据不会丢。除非极其罕见的是，RabbitMQ 还没持久化，自己就挂了，可能导致少量数据丢失，但是这个概率较小。</p><p>设置持久化有两个步骤：</p><ol><li><p>创建 queue 的时候将其设置为持久化 这样就可以保证 RabbitMQ 持久化 queue 的元数据，但是它是不会持久化 queue 里的数据的。</p></li><li><p>第二个是发送消息的时候将消息的 deliveryMode 设置为 2 就是将消息设置为持久化的，此时 RabbitMQ 就会将消息持久化到磁盘上去。</p></li></ol><p>必须要同时设置这两个持久化才行，RabbitMQ 哪怕是挂了，再次重启，也会从磁盘上重启恢复 queue，恢复这个 queue 里的数据。</p><p>注意，哪怕是你给 RabbitMQ 开启了持久化机制，也有一种可能，就是这个消息写到了 RabbitMQ 中，但是还没来得及持久化到磁盘上，结果不巧，此时 RabbitMQ 挂了，就会导致内存里的一点点数据丢失。</p><p>所以，持久化可以跟生产者那边的 confirm 机制配合起来，只有消息被持久化到磁盘之后，才会通知生产者 ack 了，所以哪怕是在持久化到磁盘之前，RabbitMQ 挂了，数据丢了，生产者收不到 ack ，你也是可以自己重发的。</p><h4 id="_4-1-3-消费端弄丢了数据" tabindex="-1"><a class="header-anchor" href="#_4-1-3-消费端弄丢了数据" aria-hidden="true">#</a> 4.1.3 消费端弄丢了数据</h4><p>RabbitMQ 如果丢失了数据，主要是因为你消费的时候，刚消费到，还没处理，结果进程挂了，比如重启了，那么就尴尬了，RabbitMQ 认为你都消费了，这数据就丢了。</p><p>这个时候得用 RabbitMQ 提供的 ack 机制，简单来说，就是你必须关闭 RabbitMQ 的自动 ack ，可以通过一个 api 来调用就行，然后每次你自己代码里确保处理完的时候，再在程序里 ack 一把。这样的话，如果你还没处理完，不就没有 ack 了？那 RabbitMQ 就认为你还没处理完，这个时候 RabbitMQ 会把这个消费分配给别的 consumer 去处理，消息是不会丢的。</p><h3 id="_4-2-kafka" tabindex="-1"><a class="header-anchor" href="#_4-2-kafka" aria-hidden="true">#</a> 4.2 Kafka</h3><h4 id="_4-2-1-消费端弄丢了数据" tabindex="-1"><a class="header-anchor" href="#_4-2-1-消费端弄丢了数据" aria-hidden="true">#</a> 4.2.1 消费端弄丢了数据</h4><p>唯一可能导致消费者弄丢数据的情况，就是说，你消费到了这个消息，然后消费者那边自动提交了 offset，让 Kafka 以为你已经消费好了这个消息，但其实你才刚准备处理这个消息，你还没处理，你自己就挂了，此时这条消息就丢咯。</p><p>这不是跟 RabbitMQ 差不多吗，大家都知道 Kafka 会自动提交 offset，那么只要关闭自动提交 offset，在处理完之后自己手动提交 offset，就可以保证数据不会丢。但是此时确实还是可能会有重复消费，比如你刚处理完，还没提交 offset，结果自己挂了，此时肯定会重复消费一次，自己保证幂等性就好了。</p><p>生产环境碰到的一个问题，就是说我们的 Kafka 消费者消费到了数据之后是写到一个内存的 queue 里先缓冲一下，结果有的时候，你刚把消息写入内存 queue，然后消费者会自动提交 offset。然后此时我们重启了系统，就会导致内存 queue 里还没来得及处理的数据就丢失了。</p><h4 id="_4-2-2-kafka-弄丢了数据" tabindex="-1"><a class="header-anchor" href="#_4-2-2-kafka-弄丢了数据" aria-hidden="true">#</a> 4.2.2 Kafka 弄丢了数据</h4><p>这块比较常见的一个场景，就是 Kafka 某个 broker 宕机，然后重新选举 partition 的 leader。大家想想，要是此时其他的 follower 刚好还有些数据没有同步，结果此时 leader 挂了，然后选举某个 follower 成 leader 之后，不就少了一些数据？这就丢了一些数据啊。</p><p>生产环境也遇到过，我们也是，之前 Kafka 的 leader 机器宕机了，将 follower 切换为 leader 之后，就会发现说这个数据就丢了。</p><p>所以此时一般是要求起码设置如下 4 个参数：</p><p>给 topic 设置 replication.factor 参数：这个值必须大于 1，要求每个 partition 必须有至少 2 个副本。 在 Kafka 服务端设置 min.insync.replicas 参数：这个值必须大于 1，这个是要求一个 leader 至少感知到有至少一个 follower 还跟自己保持联系，没掉队，这样才能确保 leader 挂了还有一个 follower 吧。 在 producer 端设置 acks=all ：这个是要求每条数据，必须是写入所有 replica 之后，才能认为是写成功了。 在 producer 端设置 retries=MAX （很大很大很大的一个值，无限次重试的意思）：这个是要求一旦写入失败，就无限重试，卡在这里了。 我们生产环境就是按照上述要求配置的，这样配置之后，至少在 Kafka broker 端就可以保证在 leader 所在 broker 发生故障，进行 leader 切换时，数据不会丢失。</p><h4 id="_4-2-3-生产者会不会弄丢数据" tabindex="-1"><a class="header-anchor" href="#_4-2-3-生产者会不会弄丢数据" aria-hidden="true">#</a> 4.2.3 生产者会不会弄丢数据？</h4><p>如果按照上述的思路设置了 acks=all ，一定不会丢，要求是，你的 leader 接收到消息，所有的 follower 都同步到了消息之后，才认为本次写成功了。如果没满足这个条件，生产者会自动不断的重试，重试无限次。</p><h2 id="_5-如何保证消息队列的高可用" tabindex="-1"><a class="header-anchor" href="#_5-如何保证消息队列的高可用" aria-hidden="true">#</a> 5. 如何保证消息队列的高可用？</h2><blockquote><p>面试官心理分析</p><p>如果有人问到你 MQ 的知识，高可用是必问的。上一讲提到，MQ 会导致系统可用性降低。所以只要你用了 MQ，接下来问的一些要点肯定就是围绕着 MQ 的那些缺点怎么来解决了。</p><p>要是你傻乎乎的就干用了一个 MQ，各种问题从来没考虑过，那你就杯具了，面试官对你的感觉就是，只会简单使用一些技术，没任何思考，马上对你的印象就不太好了。这样的同学招进来要是做个 20k 薪资以内的普通小弟还凑合，要是做薪资 20k+ 的高工，那就惨了，让你设计个系统，里面肯定一堆坑，出了事故公司受损失，团队一起背锅。</p></blockquote><blockquote><p>面试题剖析</p><p>这个问题这么问是很好的，因为不能问你 Kafka 的高可用性怎么保证？ActiveMQ 的高可用性怎么保证？一个面试官要是这么问就显得很没水平，人家可能用的就是 RabbitMQ，没用过 Kafka，你上来问人家 Kafka 干什么？这不是摆明了刁难人么。</p><p>所以有水平的面试官，问的是 MQ 的高可用性怎么保证？这样就是你用过哪个 MQ，你就说说你对那个 MQ 的高可用性的理解。</p></blockquote><h3 id="_5-1-rabbitmq-的高可用性" tabindex="-1"><a class="header-anchor" href="#_5-1-rabbitmq-的高可用性" aria-hidden="true">#</a> 5.1 RabbitMQ 的高可用性</h3><p>RabbitMQ 是比较有代表性的，因为是基于主从（非分布式）做高可用性的，我们就以 RabbitMQ 为例子讲解第一种 MQ 的高可用性怎么实现。</p><p>RabbitMQ 有三种模式：<strong>单机模式、普通集群模式、镜像集群模式</strong>。</p><h4 id="_5-1-1-单机模式" tabindex="-1"><a class="header-anchor" href="#_5-1-1-单机模式" aria-hidden="true">#</a> 5.1.1 单机模式</h4><p>单机模式，就是 Demo 级别的，一般就是你本地启动了玩玩儿的 ????，没人生产用单机模式。</p><h4 id="_5-1-2-普通集群模式-无高可用性" tabindex="-1"><a class="header-anchor" href="#_5-1-2-普通集群模式-无高可用性" aria-hidden="true">#</a> 5.1.2 普通集群模式（无高可用性）</h4><p>普通集群模式，意思就是在多台机器上启动多个 RabbitMQ 实例，每个机器启动一个。你创建的 queue，只会放在一个 RabbitMQ 实例上，但是每个实例都同步 queue 的元数据（元数据可以认为是 queue 的一些配置信息，通过元数据，可以找到 queue 所在实例）。你消费的时候，实际上如果连接到了另外一个实例，那么那个实例会从 queue 所在实例上拉取数据过来。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220925212419633.png" alt="image-20220925212419633" tabindex="0" loading="lazy"><figcaption>image-20220925212419633</figcaption></figure><p>这种方式确实很麻烦，也不怎么好，<strong>没做到所谓的分布式</strong>，就是个普通集群。因为这导致你要么消费者每次随机连接一个实例然后拉取数据，要么固定连接那个 queue 所在实例消费数据，前者有<strong>数据拉取的开销</strong>，后者<strong>导致单实例性能瓶颈</strong>。</p><p>而且如果那个放 queue 的实例宕机了，会导致接下来其他实例就无法从那个实例拉取，如果你开启了消息持久化，让 RabbitMQ 落地存储消息的话，<strong>消息不一定会丢</strong>，得等这个实例恢复了，然后才可以继续从这个 queue 拉取数据。</p><p>所以这个事儿就比较尴尬了，这就<strong>没有什么所谓的高可用性，这方案主要是提高吞吐量</strong>的，就是说让集群中多个节点来服务某个 queue 的读写操作。</p><h4 id="_5-1-3-镜像集群模式-高可用性" tabindex="-1"><a class="header-anchor" href="#_5-1-3-镜像集群模式-高可用性" aria-hidden="true">#</a> 5.1.3 镜像集群模式（高可用性）</h4><p>这种模式，才是所谓的 RabbitMQ 的高可用模式。跟普通集群模式不一样的是，在镜像集群模式下，你创建的 queue，无论元数据还是 queue 里的消息都会存在于多个实例上，就是说，每个 RabbitMQ 节点都有这个 queue 的一个完整镜像，包含 queue 的全部数据的意思。然后每次你写消息到 queue 的时候，都会自动把消息同步到多个实例的 queue 上。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220925212754157.png" alt="image-20220925212754157" tabindex="0" loading="lazy"><figcaption>image-20220925212754157</figcaption></figure><h5 id="_5-1-3-1-开启这个镜像集群模式" tabindex="-1"><a class="header-anchor" href="#_5-1-3-1-开启这个镜像集群模式" aria-hidden="true">#</a> 5.1.3.1 开启这个镜像集群模式</h5><p>那么如何开启这个镜像集群模式呢？其实很简单，RabbitMQ 有很好的管理控制台，就是在后台新增一个策略，这个策略是镜像集群模式的策略，指定的时候是可以要求数据同步到所有节点的，也可以要求同步到指定数量的节点，再次创建 queue 的时候，应用这个策略，就会自动将数据同步到其他的节点上去了。</p><p>这样的话，好处在于，你任何一个机器宕机了，没事儿，其它机器（节点）还包含了这个 queue 的完整数据，别的 consumer 都可以到其它节点上去消费数据。坏处在于，第一，这个性能开销也太大了吧，消息需要同步到所有机器上，导致网络带宽压力和消耗很重！第二，这么玩儿，不是分布式的，就没有扩展性可言了，如果某个 queue 负载很重，你加机器，新增的机器也包含了这个 queue 的所有数据，并没有办法线性扩展你的 queue。你想，如果这个 queue 的数据量很大，大到这个机器上的容量无法容纳了，此时该怎么办呢？</p><h3 id="_5-2-kafka-的高可用性" tabindex="-1"><a class="header-anchor" href="#_5-2-kafka-的高可用性" aria-hidden="true">#</a> 5.2 Kafka 的高可用性</h3><p>Kafka 一个最基本的架构认识：由多个 broker 组成，每个 broker 是一个节点；你创建一个 topic，这个 topic 可以划分为多个 partition，每个 partition 可以存在于不同的 broker 上，每个 partition 就放一部分数据。</p><p>这就是天然的分布式消息队列，就是说一个 topic 的数据，是分散放在多个机器上的，每个机器就放一部分数据。</p><p><strong>实际上 RabbitMQ 之类的，并不是分布式消息队列，它就是传统的消息队列，只不过提供了一些集群、HA(High Availability, 高可用性) 的机制而已，因为无论怎么玩儿，RabbitMQ 一个 queue 的数据都是放在一个节点里的，镜像集群下，也是每个节点都放这个 queue 的完整数据。</strong></p><p>Kafka 0.8 以前，是没有 HA 机制的，就是任何一个 broker 宕机了，那个 broker 上的 partition 就废了，没法写也没法读，没有什么高可用性可言。</p><p>比如说，我们假设创建了一个 topic，指定其 partition 数量是 3 个，分别在三台机器上。但是，如果第二台机器宕机了，会导致这个 topic 的 1/3 的数据就丢了，因此这个是做不到高可用的。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220925213155537.png" alt="image-20220925213155537" tabindex="0" loading="lazy"><figcaption>image-20220925213155537</figcaption></figure><p>Kafka 0.8 以后，提供了 HA 机制，就是 replica（复制品） 副本机制。每个 partition 的数据都会同步到其它机器上，形成自己的多个 replica 副本。所有 replica 会选举一个 leader 出来，那么生产和消费都跟这个 leader 打交道，然后其他 replica 就follower。写的时候，leader 会负责把数据同步到所有 follower 上去，读的时候就直接读 leader 上的数据即可。只能读写 leader？很简单，要是你可以随意读写每个 follower，那么就要 care 数据一致性的问题，系统复杂度太高，很容易出问题。Kafka 会均匀地将一个 partition 的所有 replica 分布在不同的机器上，这样才可以提高容错性。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220925213624841.png" alt="image-20220925213624841" tabindex="0" loading="lazy"><figcaption>image-20220925213624841</figcaption></figure><p>这么搞，就有所谓的高可用性了，因为如果某个 broker 宕机了，没事儿，那个 broker 上面的 partition 在其他机器上都有副本的。如果这个宕机的 broker 上面有某个 partition 的 leader，那么此时会从 follower 中重新选举一个新的 leader 出来，大家继续读写那个新的 leader 即可。这就有所谓的高可用性了。</p><p>写数据的时候，生产者就写 leader，然后 leader 将数据落地写本地磁盘，接着其他 follower 自己主动从 leader 来 pull 数据。一旦所有 follower 同步好数据了，就会发送 ack 给 leader，leader 收到所有 follower 的 ack 之后，就会返回写成功的消息给生产者。（当然，这只是其中一种模式，还可以适当调整这个行为）</p><p>消费的时候，只会从 leader 去读，但是只有当一个消息已经被所有 follower 都同步成功返回 ack 的时候，这个消息才会被消费者读到。</p><p>看到这里，相信你大致明白了 Kafka 是如何保证高可用机制的了，对吧？不至于一无所知，现场还能给面试官画画图。要是遇上面试官确实是 Kafka 高手，深挖了问，那你只能说不好意思，太深入的你没研究过。</p><h2 id="_6-如何避免消息重复投递或重复消费" tabindex="-1"><a class="header-anchor" href="#_6-如何避免消息重复投递或重复消费" aria-hidden="true">#</a> 6. 如何避免消息重复投递或重复消费？</h2><p>在消息生产时，MQ 内部针对每条生产者发送的消息生成一个 inner-msg-id，作为去重的依据（消息投递失败并重传），避免重复的消息进入队列；在消息消费时，要求消息体中必须要有一个 bizId（对于同一业务全局唯一，如支付 ID、订单 ID、帖子 ID 等）作为去重的依据，避免同一条消息被重复消费。</p><h2 id="_7-消息基于什么传输" tabindex="-1"><a class="header-anchor" href="#_7-消息基于什么传输" aria-hidden="true">#</a> 7. 消息基于什么传输？</h2><p>由于 TCP 连接的创建和销毁开销较大，且并发数受系统资源限制，会造成性能瓶颈。RabbitMQ <strong>使用信道的方式来传输数据。信道是建立在真实的 TCP 连接内的虚拟连接，且每条 TCP 连接上的信道数量没有限制</strong>。</p><h2 id="_8-消息如何分发" tabindex="-1"><a class="header-anchor" href="#_8-消息如何分发" aria-hidden="true">#</a> 8. 消息如何分发？</h2><p>若该队列至少有一个消费者订阅，消息将以循环（round-robin）的方式发送给消费者。每条消息只会分发给一个订阅的消费者（前提是消费者能够正常处理消息并进行确认）。通过路由可实现多消费的功能</p><h2 id="_9-消息怎么路由" tabindex="-1"><a class="header-anchor" href="#_9-消息怎么路由" aria-hidden="true">#</a> 9. 消息怎么路由？</h2><p>生产者把消息发送到 RabbitMQ Broker 上的Exchange 交换机上。Exchange 交换机把收到的消息根据路由规则发给绑定的队列（Queue）。最后再把消息投递给订阅了这个队列的消费者，从而完成消息的异步通讯。</p><p>常用的交换器主要分为一下三种：</p><p>fanout：如果交换器收到消息，将会广播到所有绑定的队列上</p><p>direct：如果路由键完全匹配，消息就被投递到相应的队列</p><p>topic：可以使来自不同源头的消息能够到达同一个队列。使用 topic 交换器时，可以使用通配符</p><h2 id="_10-多个消费者监听一个队列时-消息如何分发" tabindex="-1"><a class="header-anchor" href="#_10-多个消费者监听一个队列时-消息如何分发" aria-hidden="true">#</a> 10. 多个消费者监听一个队列时，消息如何分发</h2><ul><li>轮询 默认的策略，消费者轮流，平均地接收消息</li><li>公平分发 根据消费者的能力来分发消息，给空闲的消费者发送更多消息</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//当消费者有x条消息没有响应ACK时，不再给这个消费者发送消息</span>
	channel<span class="token punctuation">.</span><span class="token function">basicQos</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-无法被路由的消息去了哪里" tabindex="-1"><a class="header-anchor" href="#_11-无法被路由的消息去了哪里" aria-hidden="true">#</a> 11. 无法被路由的消息去了哪里</h2><p>无设置的情况下，无法路由（Routing key错误）的消息会被直接丢弃 解决方案： 将mandatory设置为true，并配合ReturnListener，实现消息的回发</p><p>声明交换机时，指定备份的交换机</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Maparguments</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	arguments<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;alternate-exchange&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;备份交换机名&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-消息在什么时候会变成死信" tabindex="-1"><a class="header-anchor" href="#_12-消息在什么时候会变成死信" aria-hidden="true">#</a> 12. 消息在什么时候会变成死信</h2><ul><li>消息拒绝并且没有设置重新入队</li><li>消息过期</li><li>消息堆积，并且队列达到最大长度，先入队的消息会变成DL</li></ul><h2 id="_13-rabbitmq如何实现延时队列" tabindex="-1"><a class="header-anchor" href="#_13-rabbitmq如何实现延时队列" aria-hidden="true">#</a> 13. RabbitMQ如何实现延时队列</h2><p>利用TTL（队列的消息存活时间或者消息存活时间），加上死信交换机</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token comment">// 设置属性，消息10秒钟过期</span>
        <span class="token class-name">AMQP<span class="token punctuation">.</span>BasicProperties</span> properties <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AMQP<span class="token punctuation">.</span>BasicProperties<span class="token punctuation">.</span>Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">expiration</span><span class="token punctuation">(</span><span class="token string">&quot;10000&quot;</span><span class="token punctuation">)</span> <span class="token comment">// TTL</span>

 <span class="token comment">// 指定队列的死信交换机</span>
        <span class="token class-name">Maparguments</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arguments<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;x-dead-letter-exchange&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;DLX_EXCHANGE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_14-如何保证消息幂等性" tabindex="-1"><a class="header-anchor" href="#_14-如何保证消息幂等性" aria-hidden="true">#</a> 14. 如何保证消息幂等性</h2><p>1.生产者方面：</p><p>可以对每条消息生成一个msgID，以控制消息重复投递</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token class-name">AMQP<span class="token punctuation">.</span>BasicProperties</span> properties <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AMQP<span class="token punctuation">.</span>BasicProperties<span class="token punctuation">.</span>Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	porperties<span class="token punctuation">.</span><span class="token function">messageId</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOF</span><span class="token punctuation">(</span><span class="token constant">UUID</span><span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.消费者方面</p><p>消息体中必须携带一个业务ID，如银行流水号，消费者可以根据业务ID去重，避免重复消费</p><h2 id="_15-消息如何被优先消费" tabindex="-1"><a class="header-anchor" href="#_15-消息如何被优先消费" aria-hidden="true">#</a> 15. 消息如何被优先消费</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//生产者</span>
 <span class="token class-name">Mapargss</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        argss<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;x-max-priority&quot;</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//消费者</span>
<span class="token class-name">AMQP<span class="token punctuation">.</span>BasicProperties</span> properties <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AMQP<span class="token punctuation">.</span>BasicProperties<span class="token punctuation">.</span>Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">priority</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment">// 优先级，默认为5，配合队列的 x-max-priority 属性使用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_16-如何保证消息的顺序性" tabindex="-1"><a class="header-anchor" href="#_16-如何保证消息的顺序性" aria-hidden="true">#</a> 16. 如何保证消息的顺序性</h2><p>一个队列只有一个消费者的情况下才能保证顺序，否则只能通过全局ID实现（每条消息都一个msgId，关联的消息拥有一个parentMsgId。可以在消费端实现前一条消息未消费，不处理下一条消息；也可以在生产端实现前一条消息未处理完毕，不发布下一条消息）</p><h2 id="_17-mq-的缺点" tabindex="-1"><a class="header-anchor" href="#_17-mq-的缺点" aria-hidden="true">#</a> 17. mq 的缺点</h2><p>（1）系统可用性降低</p><p>系统引入的外部依赖越多，越容易挂掉，本来你就是 A 系统调用 BCD 三个系统的接口就好了，人 ABCD 四个系统好好的，没啥问题，你偏加个 MQ 进来，万一MQ 挂了咋整？MQ 挂了，整套系统崩溃了，你不就完了么。</p><p>（2）系统复杂性提高</p><p>硬生生加个 MQ 进来，你怎么保证消息没有重复消费？怎么处理消息丢失的情况？怎么保证消息传递的顺序性？头大头大，问题一大堆，痛苦不已</p><p>（3）一致性问题</p><p>A 系统处理完了直接返回成功了，人都以为你这个请求就成功了；但是问题是，要是 BCD 三个系统那里，BD 两个系统写库成功了，结果 C 系统写库失败了，咋整？你这数据就不一致了。</p><p>所以消息队列实际是一种非常复杂的架构，你引入它有很多好处，但是也得针对它带来的坏处做各种额外的技术方案和架构来规避掉，最好之后，你会发现，妈呀，系统复杂度提升了一个数量级，也许是复杂了 10 倍。但是关键时刻，用，还是得用的。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,162),l={href:"https://blog.51cto.com/u_15257216/2862867",target:"_blank",rel:"noopener noreferrer"};function u(h,b){const n=o("ExternalLinkIcon");return s(),t("div",null,[d,a("p",null,[a("a",l,[i("rabbitmq面试总结——赋答案和demo，面试看这篇就够了，推荐收藏！"),p(n)])])])}const g=e(c,[["render",u],["__file","rabbitmq-z-interview.html.vue"]]);export{g as default};
