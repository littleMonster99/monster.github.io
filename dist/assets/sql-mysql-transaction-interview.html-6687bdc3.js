import{_ as i,W as n,X as t,Y as o,Z as a,$ as r,a0 as l,D as s}from"./framework-f64bc974.js";const g={},c=l('<h1 id="mysql-事务-面试场景切入" tabindex="-1"><a class="header-anchor" href="#mysql-事务-面试场景切入" aria-hidden="true">#</a> MySQL - 事务（面试场景切入）</h1><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221015100314961.png" alt="image-20221015100314961" tabindex="0" loading="lazy"><figcaption>image-20221015100314961</figcaption></figure><h2 id="_1-事务的特性" tabindex="-1"><a class="header-anchor" href="#_1-事务的特性" aria-hidden="true">#</a> 1. 事务的特性</h2><p><strong>面试官：</strong> 看你简历上面写着精通MySQL，我先问你事务的特性是什么？</p><blockquote><p>老生常谈，这个还有谁不会背的吗？</p></blockquote><p><strong>我：</strong> 这个我知道，事务有四大特性，分别是原子性（Atomicity）、一致性（Consistency）、隔离性（Isolation）、持久性（Durability），简称ACID。</p><ul><li><strong>原子性</strong>是指事务中所有操作要么全部成功，要么全部失败。</li><li><strong>一致性</strong>是指事务执行前后，数据始终处于一致性状态，不会出现数据丢失。</li><li><strong>隔离性</strong>是指事务提交前的中间状态对其他事务不可见，即相互隔离。</li><li><strong>持久性</strong>是指事务提交后，数据的修改永久保存在数据库中。</li></ul><h2 id="_2-mysql怎么实现事务" tabindex="-1"><a class="header-anchor" href="#_2-mysql怎么实现事务" aria-hidden="true">#</a> 2. Mysql怎么实现事务？</h2><p><strong>面试官：</strong> 嗯，回答得不错。那你知道MySQL底层是怎么实现事务的四大特性？</p><blockquote><p>这道题有点深了，需要背会redo log、undo log、mvcc。 千万别说不知道这几个东西是干嘛用的。 不但要知道，还要跟事务扯上关系。</p></blockquote><p><strong>我：</strong> 原子性是undo log实现的，一致性是由代码逻辑层面保证的，隔离性是由mvcc实现的，持久性是基于redo log实现的。</p><h3 id="_2-1-redo-log-重做日志" tabindex="-1"><a class="header-anchor" href="#_2-1-redo-log-重做日志" aria-hidden="true">#</a> 2.1 <strong>Redo Log（重做日志）</strong></h3><p>Redo Log记录的是物理日志，也就是磁盘数据的修改。 用来保证服务崩溃后，仍能把事务中变更的数据持久化到磁盘上。</p><p>如果没有Redo Log的话，会发生什么？</p><p>修改数据的过程就变成这样了：</p><ol><li>从磁盘加载数据到内存</li><li>在内存中修改数据</li><li>把新数据持久化到磁盘</li></ol><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221015094002165.png" alt="image-20221015094002165" tabindex="0" loading="lazy"><figcaption>image-20221015094002165</figcaption></figure><p>这样做，会有严重的性能问题。</p><ol><li>InnoDB在磁盘中存储的基本单元是页，可能本次修改只变更一页中几个字节，但是需要刷新整页的数据，就很浪费资源。</li><li>一个事务可能修改了多页中的数据，页之间又是不连续的，就会产生随机IO，性能更差。</li></ol><p>所以为了提高写入性能，于是就引入了Redo Log。</p><p>看一下引入Redo Log后修改流程：</p><ol><li>从磁盘加载数据到内存</li><li>在内存中修改数据</li><li>把新数据写到<strong>Redo Log Buffer</strong>中</li><li>把<strong>Redo Log Buffer</strong>中数据持久化到<strong>Redo Log</strong>文件中</li><li>把<strong>Redo Log</strong>文件中数据持久化到数据库磁盘中</li></ol><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221015094221790.png" alt="image-20221015094221790" tabindex="0" loading="lazy"><figcaption>image-20221015094221790</figcaption></figure><h3 id="_2-2-undo-log-回滚日志" tabindex="-1"><a class="header-anchor" href="#_2-2-undo-log-回滚日志" aria-hidden="true">#</a> 2.2 <strong>Undo Log（回滚日志）：</strong></h3><p>Undo Log记录的是逻辑日志，用来回滚事务时，恢复到修改前的数据。</p><p>比如：当我们执行一条insert语句时，Undo Log就记录一条相反的delete语句。</p><p>加入Undo Log之后的修改流程就是这样的：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221015094600542.png" alt="image-20221015094600542" tabindex="0" loading="lazy"><figcaption>image-20221015094600542</figcaption></figure><h3 id="_2-3-mvcc-多版本并发控制-multi-version-concurrency-control" tabindex="-1"><a class="header-anchor" href="#_2-3-mvcc-多版本并发控制-multi-version-concurrency-control" aria-hidden="true">#</a> 2.3 <strong>MVCC（多版本并发控制，Multi-Version Concurrency Control）：</strong></h3><p>记录的是某个时间点上的数据快照，用来实现不同事务之间数据的隔离性。</p><p>提到隔离性，一定要说一下事务的隔离级别。</p><p>说事务隔离级别之前，必须要先说一下并发事务产生的问题：</p><ul><li><strong>脏读：</strong> 一个事务读到其他事务未提交的数据。</li><li><strong>不可重复读：</strong> 多次读取相同的数据，得到的结果集不一致，即读到其他事务提交后的数据。</li><li><strong>幻读：</strong> 相同的查询条件，多次读取的结果不一致，即读到其他事务提交后的数据。</li><li><strong>不可重复读与幻读的区别是：</strong> 不可重复读是读到了其他事务执行update、delete后的数据，而幻读是读到其他事务执行insert后的数据。</li></ul><p><strong>隔离级别</strong></p><ul><li><strong>Read UnCommitted（读未提交）：</strong> 读到其他事务未提交的数据，会出现脏读、不可重复读、幻读。</li><li><strong>Read Committed（读已提交）：</strong> 读到其他事务已提交的数据，解决了脏读，会出现不可重复读、幻读。</li><li><strong>Repeatable Read（可重复读）：</strong> 相同的数据，多次读取到的结果集一致。解决了不可重复读，还是会出现幻读。</li><li><strong>Serializable（串行化）：</strong> 所有事务串行执行，解决了幻读。</li></ul><p><strong>再谈MVCC：</strong></p><p>MVCC解决了读写冲突，实现了读写并行，提升了事务的性能。</p><p>由于Read UnCommitted隔离级别下，每次都读取最新的数据。而Serializable隔离级别下，对所有读取数据都加锁。这两种隔离级不需要MVCC，所以MVCC只在Read Committed和Repeatable Read两种隔离级别下起作用。</p><p>MVCC的实现方式通过两个隐藏列trx_id（最近一次提交事务的ID）和roll_pointer（上个版本的地址），建立一个版本链。并在事务中读取的时候生成一个ReadView（读视图），在Read Committed隔离级别下，每次读取都会生成一个读视图，而在Repeatable Read隔离级别下，只会在第一次读取时生成一个读视图。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221015100152621.png" alt="image-20221015100152621" tabindex="0" loading="lazy"><figcaption>image-20221015100152621</figcaption></figure><p><strong>InnoDB如何解决幻读的？</strong></p><p>先普及一下快照读和当前读。</p><ul><li><strong>当前读：</strong> 读取数据的最新版本，并对数据进行加锁。 例如：insert、update、delete、select for update</li><li><strong>快照读：</strong> 读取数据的历史版本，不对数据加锁。 例如：select</li></ul><p>在当前读的情况下，是通过加锁来解决幻读。</p><p>在快照读的情况下，是通过MVCC来解决幻读。</p><h2 id="_3-总结" tabindex="-1"><a class="header-anchor" href="#_3-总结" aria-hidden="true">#</a> 3. 总结</h2><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221015100314961.png" alt="image-20221015100314961" tabindex="0" loading="lazy"><figcaption>image-20221015100314961</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>',48),d={href:"https://zhuanlan.zhihu.com/p/515386351",target:"_blank",rel:"noopener noreferrer"};function p(h,u){const e=s("ExternalLinkIcon");return n(),t("div",null,[c,o("p",null,[o("a",d,[a("面试官竟然问我MySQL事务的底层原理？幸亏我总结了全套八股文"),r(e)])])])}const f=i(g,[["render",p],["__file","sql-mysql-transaction-interview.html.vue"]]);export{f as default};
