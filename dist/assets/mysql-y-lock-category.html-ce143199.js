import{_ as i,W as n,X as l,Y as e,Z as t,$ as o,a0 as a,D as s}from"./framework-f64bc974.js";const d={},h=a('<h1 id="mysql的乐观锁-悲观锁与mvcc" tabindex="-1"><a class="header-anchor" href="#mysql的乐观锁-悲观锁与mvcc" aria-hidden="true">#</a> MySQL的乐观锁，悲观锁与MVCC</h1><h2 id="_1-前提概念" tabindex="-1"><a class="header-anchor" href="#_1-前提概念" aria-hidden="true">#</a> 1. 前提概念</h2><h3 id="_1-1-数据库并发的三种场景" tabindex="-1"><a class="header-anchor" href="#_1-1-数据库并发的三种场景" aria-hidden="true">#</a> 1.1 数据库并发的三种场景</h3><p><strong>数据库并发场景有三种，分别为：</strong></p><ul><li><code>读-读</code>：不存在任何问题，也不需要并发控制</li><li><code>读-写</code>：有隔离性问题，可能遇到脏读，幻读，不可重复读</li><li><code>写-写</code>：可能存更新丢失问题，比如第一类更新丢失，第二类更新丢失</li></ul><h3 id="_1-2-乐观锁和悲观锁的澄清" tabindex="-1"><a class="header-anchor" href="#_1-2-乐观锁和悲观锁的澄清" aria-hidden="true">#</a> 1.2 乐观锁和悲观锁的澄清</h3><ul><li>无论是悲观锁还是乐观锁，他们本质上不是数据库中具体的锁概念，而是我们定义出来，用来描述两种类别的锁的思想。所以有了设计的分类，我们就可以通过这个分类去对数据库中具体的锁进行分门别类；</li><li>不过数据库中的乐观锁更倾向叫乐观并发控制（OCC），悲观锁叫悲观并发控制（PCC），还有区别于乐观悲观锁的一种控制叫MVCC，多版本并发控制</li><li>也不要把乐观锁和悲观锁与数据库中的行锁，表锁，排他锁，共享锁混为一谈，他们并不是一个维度的东西；前者是一个锁思想，可以将后者根据是否进行趋近于乐观或悲观锁的思想进行分类</li><li>乐观锁和悲观锁的概念不仅仅存在于数据库领域，可以说存在线程安全，存在并发的场景几乎都有乐观锁和悲观锁的适用场景，比如Java中也有乐观锁和悲观锁思想的具体实现；但不同领域的乐观和悲观锁的具体实现都不尽相同，要解决的问题也可能有所不一样</li></ul><blockquote><p><strong>所以要是别人再问你乐观锁和悲观锁是什么，你千万别说它是一种具体的锁，它只是一种锁的设计思想，他可以有很多具体的实现类</strong></p></blockquote><h2 id="_2-悲观锁" tabindex="-1"><a class="header-anchor" href="#_2-悲观锁" aria-hidden="true">#</a> 2 悲观锁</h2><h3 id="_2-1-什么是悲观锁" tabindex="-1"><a class="header-anchor" href="#_2-1-什么是悲观锁" aria-hidden="true">#</a> 2.1 什么是悲观锁？</h3><p>在关系数据库管理系统里，悲观并发控制（又名“悲观锁”，Pessimistic Concurrency Control，缩写“PCC”）是一种并发控制的方法; 悲观锁指的是采用一种持悲观消极的态度，默认数据被外界访问时，必然会产生冲突，所以在数据处理的整个过程中都采用加锁的状态，保证同一时间，只有一个线程可以访问到数据，实现数据的排他性；通常，数据库的悲观锁是利用数据库本身提供的锁机制去实现的.</p><p>数据库的悲观并发控制可以解决<strong>读-写冲突和写-写冲突</strong>,指在用加锁的方式去解决</p><h3 id="_2-2-悲观锁的实现" tabindex="-1"><a class="header-anchor" href="#_2-2-悲观锁的实现" aria-hidden="true">#</a> 2.2 悲观锁的实现</h3><p>通常情况下，数据库的悲观锁就是利用数据库本身提供的锁去实现的</p><ul><li>外界要访问某条数据，那它就要首先向数据库申请该数据的锁(某种锁)</li><li>如果获得成功，那它就可以操作该数据，在它操作期间，其他客户端就无法再操作该数据了</li></ul><p>如果获得失败，则代表同一时间已有其他客户端获得了该锁，那就必须等待其他客户端释放锁 当然数据库提供了非常多的锁，每种数据库提供的锁也不尽然相同，所以具体情况就要看是什么锁了,比如行锁，表锁等</p><h3 id="_2-3-优点与缺点" tabindex="-1"><a class="header-anchor" href="#_2-3-优点与缺点" aria-hidden="true">#</a> 2.3 优点与缺点</h3><blockquote><p>悲观并发控制实际上是“先取锁再访问”的保守策略，为数据处理的安全提供了保证。但是在效率方面，处理加锁的机制会让数据库产生额外的开销，还有增加产生死锁的机会；另外，在只读型事务处理中由于不会产生冲突，也没必要使用锁，这样做只能增加系统负载；还有会降低了并行性，一个事务如果锁定了某行数据，其他事务就必须等待该事务处理完才可以处理那行数</p></blockquote><ul><li>优点： 适合在写多读少的并发环境中使用，虽然无法维持非常高的性能，但是在乐观锁无法提更好的性能前提下，可以做到数据的安全性</li><li>缺点： 加锁会增加系统开销，虽然能保证数据的安全，但数据处理吞吐量低，不适合在读多写少的场合下使用</li></ul><h2 id="_3-乐观锁" tabindex="-1"><a class="header-anchor" href="#_3-乐观锁" aria-hidden="true">#</a> 3. 乐观锁</h2><h3 id="_3-1-什么是乐观锁" tabindex="-1"><a class="header-anchor" href="#_3-1-什么是乐观锁" aria-hidden="true">#</a> 3.1 什么是乐观锁？</h3><p>在关系数据库管理系统里，乐观并发控制（又名“乐观锁”，Optimistic Concurrency Control，缩写“OCC”）是一种并发控制的方法；乐观锁（ Optimistic Locking ） 是相对悲观锁而言，乐观锁是假设认为即使在并发环境中，外界对数据的操作一般是不会造成冲突，所以并不会去加锁(所以乐观锁不是一把锁)，而是在数据进行提交更新的时候，才会正式对数据的冲突与否进行检测，如果发现冲突了，则让返回冲突信息，让用户决定如何去做下一步，比如说重试，直至成功为止；数据库的乐观锁，并不是利用数据库本身的锁去实现的，可能是利用某种实现逻辑去实现做到乐观锁的思想</p><p>数据库的乐观并发控制要解决的是数据库并发场景下的<strong>写-写冲突</strong>，指在用<strong>无锁的方式去解决</strong></p><h3 id="_3-2-cas思想" tabindex="-1"><a class="header-anchor" href="#_3-2-cas思想" aria-hidden="true">#</a> 3.2 CAS思想</h3><p>其实数据库乐观锁的具体实现几乎就跟Java中乐观锁采用的CAS算法思想是一致，<strong>所以我们可以从CAS算法中学习到数据库乐观锁的设计：</strong></p><p>CAS指令全称为Compare and Swap，它是系统的指令集，整个CAS操作是一个原子操作，是不可分割的。从具体的描述上，我们可以这么看CAS操作：</p><blockquote><p>CAS指令需要3个操作数，分别是内存位置V，旧的预期值A,和新值B。CAS指令执行时，当我们读取的内置位置V的现值等于旧预期值A时，处理器才会将新值B去更新内置位置V的值。否则它就不执行更新，但无论是否更新V的值，都会返回V的旧值。</p></blockquote><p>我们通俗的放到代码层次上去理解i = 2; i++，就是说：</p><ul><li>首先线程1从内存位置V中读取到了值，保存并作为旧预期值A. (v = 2 ,a = 2)</li><li>然后在因为i要进行++操作，系统会比较内存位置V的现值跟旧预期值A进行比较，既V =? A。</li><li>如果相等，B = i++ = 3 ，新值B就会对内存位置V进行更新，所以内存位置V的值就变成了B的值，3</li><li>如果不相等，则说明有其他的线程修改过了内存位置V的值，比如线程2在线程1修改i的值前就更新了i的值。，所以线程1会更新变量i失败。但线程不会挂起，而是返回失败状态，等待调用线程决定是否重试或其他操作。(通常会重试直到成功) 数据库层的乐观锁实现也类似代码层面的实现</li></ul><p>数据库层的乐观锁实现也类似代码层面的实现</p><h3 id="_3-3-数据库中乐观锁的实现" tabindex="-1"><a class="header-anchor" href="#_3-3-数据库中乐观锁的实现" aria-hidden="true">#</a> 3.3 数据库中乐观锁的实现</h3><p><strong>通常乐观锁的实现有两种，但它们的内在都是CAS思想的设计：</strong></p>',32),c=e("ul",null,[e("li",null,[e("p",null,"方式一： 使用数据版本（version）实现"),e("blockquote",null,[e("ul",null,[e("li",null,"这是乐观锁最常用的一种实现方式。什么是数据版本呢？就是在表中增添一个字段作为该记录的版本标识，比如叫version，每次对该记录的写操作都会让 version+ 1。"),e("li",null,"所以当我们读取了数据(包括version)，做出更新，要提交的时候，就会拿取得的version去跟数据库中的version比较是否一致，如果一致则代表这个时间段，并没有其他的线程的也修改过这个数据，给予更新，同时version + 1；如果不一致，则代表在这个时间段，该记录以及被其他线程修改过了， 认为是过期数据，返回冲突信息，让用户决定下一步动作，比如重试（重新读取最新数据，再过更新）"),e("li",{id:""},"update table set num = num + 1 , version = version + 1 where version = #{version} and id = #")])])]),e("li",null,[e("p",null,"方式二： 使用时间戳(timestamp)实现"),e("blockquote",null,[e("ul",null,[e("li",null,"表中增加一个字段，名称无所谓，比如叫update_time, 字段类型使用时间戳（timestamp）"),e("li",null,"原理和方式一一致，也是在更新提交的时检查当前数据库中数据的时间戳和自己更新前取到的时间戳是否一致，如果一致则代表此刻没有冲突，可以提交更新，同时时间戳更新为当前时间，否则就是该时间段有其他线程也更新提交过，返回冲突信息，等待用户下一步动作。"),e("li",{updateTime:""},"update table set num = num + 1 ,update_time = unix_timestamp(now()) where id = #{id} and update_time = #")])])])],-1),p=a('<p>但是我们要注意的是，要实现乐观锁的思想的同时，我们必须要要保证CAS多个操作的原子性，即获取数据库数据的版本，拿数据库的数据版本与之前拿到的版本的比较，以及更新数据等这几个操作的执行必须是连贯执行，具有复合操作的原子性；所以如果是数据库的SQL,那么我们就要保证多个SQL操作处于同一个事务中</p><h3 id="_3-4-优点与缺点" tabindex="-1"><a class="header-anchor" href="#_3-4-优点与缺点" aria-hidden="true">#</a> 3.4 优点与缺点</h3><p><strong>优点：</strong> 在读多写少的并发场景下，可以避免数据库加锁的开销，提高Dao层的响应性能 其实很多情况下，我们orm工具都有带有乐观锁的实现，所以这些方法不一定需要我们人为的去实现</p><p><strong>缺点：</strong> 在写多读少的并发场景下，即在写操作竞争激烈的情况下，会导致CAS多次重试，冲突频率过高，导致开销比悲观锁更高</p><h2 id="_4-mvcc多版本并发控制" tabindex="-1"><a class="header-anchor" href="#_4-mvcc多版本并发控制" aria-hidden="true">#</a> 4. MVCC多版本并发控制</h2><h3 id="_4-1-什么是mvcc" tabindex="-1"><a class="header-anchor" href="#_4-1-什么是mvcc" aria-hidden="true">#</a> 4.1 什么是MVCC?</h3><blockquote><p>MVCC MVCC，全称Multi-Version Concurrency Control，即多版本并发控制。MVCC是一种并发控制的方法，一般在数据库管理系统中，实现对数据库的并发访问，在编程语言中实现事务内存。</p></blockquote><p>MVCC在MySQL InnoDB中的实现主要是为了提高数据库并发性能，用更好的方式去处理读-写冲突，做到即使有读写冲突时，也能做到不加锁，非阻塞并发读</p><h3 id="_4-2-什么是当前读和快照读" tabindex="-1"><a class="header-anchor" href="#_4-2-什么是当前读和快照读" aria-hidden="true">#</a> 4.2 什么是当前读和快照读？</h3><p>什么是MySQL InnoDB下的当前读和快照读?</p><ul><li><p>当前读 像select lock in share mode(<strong>共享锁</strong>), select for update ; update, insert ,delete(<strong>排他锁</strong>)这些操作都是一种当前读，为什么叫当前读？就是它读取的是记录的最新版本，读取时还要保证其他并发事务不能修改当前记录，会对读取的记录进行加锁</p></li><li><p>快照读 像<strong>不加锁</strong>的select操作就是快照读，即不加锁的非阻塞读；快照读的前提是隔离级别不是串行级别，串行级别下的快照读会退化成当前读；之所以出现快照读的情况，是基于提高并发性能的考虑，快照读的实现是基于多版本并发控制，即MVCC,可以认为MVCC是行锁的一个变种，但它在很多情况下，避免了加锁操作，降低了开销；<strong>既然是基于多版本，即快照读可能读到的并不一定是数据的最新版本，而有可能是之前的历史版本</strong></p></li></ul><p><strong>说白了快照读就是MVCC思想在MySQL的具体非阻塞读功能实现，整个MVCC多并发控制的目的就是为了实现读-写冲突不加锁，提高并发读写性能，而这个读指的就是<code>快照读</code>, 而非当前读，当前读实际上是一种加锁的操作，是悲观锁的实现</strong></p><h2 id="_5-总结" tabindex="-1"><a class="header-anchor" href="#_5-总结" aria-hidden="true">#</a> 5. 总结</h2><h3 id="_5-1-乐观锁和悲观锁的抉择" tabindex="-1"><a class="header-anchor" href="#_5-1-乐观锁和悲观锁的抉择" aria-hidden="true">#</a> 5.1 乐观锁和悲观锁的抉择</h3><p>对乐观锁和悲观锁的抉择主要体现在写-写 <strong>在悲观锁和乐观锁的抉择中，我们可以从下面三个因素来考虑：</strong></p><ul><li><strong>响应速度</strong>： 如果Dao层需要非常高的响应速度，尤其是读多写少的场景下，那我们就可以采用乐观锁方案，降低数据库锁的开销，提供并发量</li><li><strong>冲突频率</strong>： 如果冲突频率非常高，那么我们就可以采用悲观锁，保证成功率；毕竟如果冲突频率大，乐观锁会需要多次重试才能成功，代价可能会大大增加</li><li><strong>重试代价</strong>： 如果重试代价大，比如说重试过程的代码执行非常耗时，那么此时我就不建议使用乐观锁了，还不如直接上悲观锁来了爽快</li></ul><p><strong>所以我们知道：</strong></p><ul><li>在读多写少，CAS竞争没这么激烈的时候，我们可以采用乐观锁策略，降低数据库加锁的开销，提高数据库并发响应</li><li>在写多读少的场景下，因为会产生大量的CAS竞争，且重试成本比较高的情况下，我们就不建议再采用乐观锁策略了，还是直接使用悲观锁的数据库加锁吧</li></ul><h2 id="_6-occ-pcc-mvcc三者的关系" tabindex="-1"><a class="header-anchor" href="#_6-occ-pcc-mvcc三者的关系" aria-hidden="true">#</a> 6. OCC,PCC,MVCC三者的关系</h2><ul><li><p>悲观并发控制（PCC）</p><p>是一种用来解决<strong>读-写冲突和写-写冲突的的加锁并发控制</strong>, 为每个操作都加锁，同一时间下，只有获得该锁的事务才能有权利对该数据进行操作，没有获得锁的事务只能等待其他事务释放锁；所以可以解决脏读，幻读，不可重复读，第一类更新丢失，第二类更新丢失的问题</p></li><li><p>乐观并发控制（OCC）</p><p>是一种用来解决<strong>写-写冲突的无锁并发控制</strong>，认为事务间争用没有那么多，所以先进行修改，在提交事务前，检查一下事务开始后，有没有新提交改变，如果没有就提交，如果有就放弃并重试。乐观并发控制类似自旋锁。乐观并发控制适用于低数据争用，写冲突比较少的环境；无法解决脏读，幻读，不可重复读，但是可以解决更新丢失问题</p></li><li><p>多版本并发控制（MVCC）</p><p>是一种用来解决<strong>读-写冲突的无锁并发控制</strong>，也就是为事务分配单向增长的时间戳，为每个修改保存一个版本，版本与事务时间戳关联，读操作只读该事务开始前的数据库的快照。 这样在读操作时就不用阻塞写操作，写操作也不用阻塞读操作；不仅可以提高并发性能，还可以解决脏读，幻读，不可重复读等事务问题。更新丢失问题除外</p></li></ul><p>总的来说，MVCC的出现就是数据库不满用悲观锁去解决读-写冲突问题，因性能不高而提出的解决方案，所以在数据库中，我们可以形成两个组合：</p><ul><li><strong>MVCC + 悲观锁</strong> MVCC解决读写冲突，悲观锁解决写写冲突</li><li><strong>MVCC + 乐观锁</strong> MVCC解决读写冲突，乐观锁解决写写冲突</li></ul><p>这种组合的方式就可以最大程度的提高数据库并发性能，并解决读写冲突，和写写冲突导致的问题</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>',24),u={href:"https://blog.csdn.net/SnailMann/article/details/88388829",target:"_blank",rel:"noopener noreferrer"};function C(_,g){const r=s("ExternalLinkIcon");return n(),l("div",null,[h,c,p,e("p",null,[e("a",u,[t("【MySQL笔记】正确的理解MySQL的乐观锁，悲观锁与MVCC"),o(r)])])])}const V=i(d,[["render",C],["__file","mysql-y-lock-category.html.vue"]]);export{V as default};
