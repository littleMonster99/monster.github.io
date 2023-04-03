import{_ as a,W as t,X as c,Y as e,Z as o,$ as r,a0 as d,D as s}from"./framework-f64bc974.js";const l={},i=d('<h1 id="商城设计要点-六-账户余额更新-保证事务" tabindex="-1"><a class="header-anchor" href="#商城设计要点-六-账户余额更新-保证事务" aria-hidden="true">#</a> 商城设计要点(六)-账户余额更新，保证事务</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>用户支付，我们要从买家账户减掉一定金额，再往卖家增加一定金额，为了保证数据的<code>完整性</code>、<code>可追溯性</code>，变更余额时，我们通常会同时插入一条<code>记录流水</code>。</p><p><strong>账户流水核心字段</strong>：流水ID、金额、交易双方账户、交易时间戳、订单号、</p><blockquote><p>注意：账户流水只能新增，不能修改和删除。流水号必须是自增的。</p></blockquote><p>后续，系统对账时，我们只需要对交易流水明细数据做累计即可，如果出现和余额不一致情况，一般以交易流水为准来修复余额数据。</p><p><code>更新余额</code>、<code>记录流水</code> 虽属于两个操作，但是要保证要么都成功，要么都失败。要做到事务。</p><h2 id="_2-解决" tabindex="-1"><a class="header-anchor" href="#_2-解决" aria-hidden="true">#</a> 2. 解决</h2><p>数据库的事务隔离级别有：<code>读未提交（RU）</code>、<code>读已提交（RC）</code>、<code>可重复读（RR）</code>、<code>串行化（Serializable）</code></p><p>常用的隔离级别是 RC 和 RR ，因为这两种隔离级别都可以避免脏读。</p>',10),_={href:"https://mp.weixin.qq.com/s?__biz=Mzg2NzYyNjQzNg==&mid=2247488721&idx=1&sn=28bbdd6818da9b6afeda46319e060fb3&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},h={href:"https://mp.weixin.qq.com/s?__biz=Mzg2NzYyNjQzNg==&mid=2247486613&idx=1&sn=1ce63f19e077d8230799bc0e4c41b04f&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},p=e("p",null,[o("当然，如果涉及多个微服务调用，会用到"),e("strong",null,"分布式事务")],-1),u=e("p",null,[o("分布式事务，细想下也很容易理解，就是将"),e("code",null,"一个大事务"),o("拆分为多个"),e("code",null,"本地事务"),o("，本地事务依然借助于数据库自身事务来解决，难点在于解决这个分布式一致性问题，借助"),e("strong",null,"重试"),o("机制，保证最终一致是我们常用的方案")],-1),f=e("h2",{id:"参考文章",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考文章","aria-hidden":"true"},"#"),o(" 参考文章")],-1),b={href:"https://mp.weixin.qq.com/s/BgVr0jEBJwQI5UW_ele08A",target:"_blank",rel:"noopener noreferrer"};function m(x,g){const n=s("ExternalLinkIcon");return t(),c("div",null,[i,e("ul",null,[e("li",null,[e("strong",null,[e("a",_,[o("跑了4个实验，实战讲解 MySQL的行锁、间隙锁..."),r(n)])])]),e("li",null,[e("strong",null,[e("a",h,[o("InnoDB解决幻读的方案 -- LBCC&MVCC"),r(n)])])])]),p,u,f,e("p",null,[e("a",b,[o("聊聊电商系统中常见的9大坑！库存超卖、重复下单、物流单ABA"),r(n)])])])}const N=a(l,[["render",m],["__file","mall-key-points-assurance-affairs.html.vue"]]);export{N as default};
