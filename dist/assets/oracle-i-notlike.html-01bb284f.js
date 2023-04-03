import{_ as t,W as n,X as r,Y as e,Z as i,$ as o,a0 as l,D as c}from"./framework-f64bc974.js";const s={},d=l('<h1 id="notlike优化" tabindex="-1"><a class="header-anchor" href="#notlike优化" aria-hidden="true">#</a> notlike优化</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>我们有些查询条件需要使用not like ，过滤掉不包含某些文字的数据。但dot like 会导致全表扫描。有没有什么办法既能满足我们需求又保证效率呢？</p><h2 id="_2-解决" tabindex="-1"><a class="header-anchor" href="#_2-解决" aria-hidden="true">#</a> 2. 解决</h2><p>instr(title,’手册’)&gt;0 相当于like</p><p>instr(title,’手册’)=0 相当于not like</p><p>对于LIKE语句，我们可以使用instr函数来进行SQL调优</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>',8),h={href:"https://blog.csdn.net/weixin_30715523/article/details/101579345",target:"_blank",rel:"noopener noreferrer"};function _(p,k){const a=c("ExternalLinkIcon");return n(),r("div",null,[d,e("p",null,[e("a",h,[i("like not like 优化"),o(a)])])])}const x=t(s,[["render",_],["__file","oracle-i-notlike.html.vue"]]);export{x as default};
