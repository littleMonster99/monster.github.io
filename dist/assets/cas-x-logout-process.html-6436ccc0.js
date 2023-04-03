import{_ as n,W as r,X as i,Y as e,Z as o,$ as s,a0 as t,D as c}from"./framework-f64bc974.js";const d={},h=t('<h1 id="cas单点登录-登出" tabindex="-1"><a class="header-anchor" href="#cas单点登录-登出" aria-hidden="true">#</a> CAS单点登录 - 登出</h1><p>CAS 的登出包含两种情况，一种是CAS客户端登出，另一种是CAS单点登出，使用流程图说明这两者的不同。（一图胜千言）</p><h2 id="_1-cas客户端登出流程" tabindex="-1"><a class="header-anchor" href="#_1-cas客户端登出流程" aria-hidden="true">#</a> 1. CAS客户端登出流程</h2><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20230215224130109.png" alt="image-20230215224130109" tabindex="0" loading="lazy"><figcaption>image-20230215224130109</figcaption></figure><p>如图，客户端的登出仅仅是<strong>过期当前用户与客户端之间的会话</strong>，并未过期用户浏览器与CAS服务端建立的会话（没有处理TGC），此时如果用户再访问客户端的接口，无需输入账号密码立即登录成功。</p><h2 id="_2-全局单点登出流程" tabindex="-1"><a class="header-anchor" href="#_2-全局单点登出流程" aria-hidden="true">#</a> 2. 全局单点登出流程</h2><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20230215224210538.png" alt="image-20230215224210538" tabindex="0" loading="lazy"><figcaption>image-20230215224210538</figcaption></figure><p>如图，用户访问CAS服务端单点登出接口（由客户端提供），CAS服务端根据请求携带的TGC，不仅过期了服务内TGT与ST，还向该TGC对应的客户端服务发起登出请求，客户端过期对应用户的会话，CAS服务端响应用户浏览器过期TGC以及重定向到指定页面(单点登出的重定向页面必须是 <code>serviceName</code> 开始的地址)</p><h2 id="_3-总结" tabindex="-1"><a class="header-anchor" href="#_3-总结" aria-hidden="true">#</a> 3. 总结</h2><p>CAS登出有两种情况：客户端登出（过期自己）及单点登出（过期自己以及所有相关客户端）。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>',11),l={href:"https://www.cnblogs.com/hellxz/p/15819781.html",target:"_blank",rel:"noopener noreferrer"};function g(p,_){const a=c("ExternalLinkIcon");return r(),i("div",null,[h,e("p",null,[e("a",l,[o("CAS学习笔记四：CAS单点登出流程"),s(a)])])])}const m=n(d,[["render",g],["__file","cas-x-logout-process.html.vue"]]);export{m as default};
