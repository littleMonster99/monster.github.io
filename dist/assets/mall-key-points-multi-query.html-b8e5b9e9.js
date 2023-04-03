import{_ as d,W as a,X as c,Y as e,Z as r,$ as i,a0 as n,D as t}from"./framework-f64bc974.js";const s={},l=n('<h1 id="商城设计要点-九-订单分库分表-多维度查询" tabindex="-1"><a class="header-anchor" href="#商城设计要点-九-订单分库分表-多维度查询" aria-hidden="true">#</a> 商城设计要点(九)-订单分库分表，多维度查询</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>如果电商网站的订单数过多，我们一般会想到 <code>分库分表</code> 解决策略。没问题，这个方向是对的。</p><p><strong>但是查询维度很多</strong></p><p>1、买家，查询 <code>我的订单</code> 列表，需要根据 <code>buyer_id</code> 来查询</p><p>2、查看订单详情，需要根据 <code>order_id</code> 来查询</p><p>3、卖家，查询 <code>我的销售</code> 列表，需要根据 <code>seller_id</code> 来查询</p><p>而订单分表只有一个分表键，如何满足多维度 SQL 操作呢？</p><h2 id="_2-解决方案" tabindex="-1"><a class="header-anchor" href="#_2-解决方案" aria-hidden="true">#</a> 2. 解决方案</h2><p>而订单分表只有一个分表键，如何满足多维度 SQL 操作呢？</p><p>我们一般是基于买家维度来设计，下图是 <code>淘宝</code> 的订单列表</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220326213429736.png" alt="image-20220326213429736" tabindex="0" loading="lazy"><figcaption>image-20220326213429736</figcaption></figure><p>一个订单号 19 位，我们会发现同一个用户不同订单的最后 6 位都是一样的，没错，那是用户id的后6位。</p><p>这样，上文中 <code>场景1</code>、<code>场景2</code> 的查询可以共性抽取， 采用 <code>buyer_id</code> 或 <code>order_id</code> 的 <code>后六位</code> 作为分表键，对 <code>1 000 000</code> 取模，得到买家维度的订单分表的编号。</p><p>至于 <code>场景3</code> 卖家维度的订单查询，我们可以采用数据异构方式，按 <code>seller_id</code> 维度另外存储一份数据，专门供卖家使用。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>',16),p={href:"https://mp.weixin.qq.com/s/BgVr0jEBJwQI5UW_ele08A",target:"_blank",rel:"noopener noreferrer"};function h(_,u){const o=t("ExternalLinkIcon");return a(),c("div",null,[l,e("p",null,[e("a",p,[r("聊聊电商系统中常见的9大坑！库存超卖、重复下单、物流单ABA"),i(o)])])])}const f=d(s,[["render",h],["__file","mall-key-points-multi-query.html.vue"]]);export{f as default};
