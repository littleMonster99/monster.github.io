import{_ as o,W as n,X as i,Y as e,Z as r,$ as t,a0 as a,D as h}from"./framework-f64bc974.js";const c={},l=a('<h1 id="开发安全-cors、csrf、xss对比-补充" tabindex="-1"><a class="header-anchor" href="#开发安全-cors、csrf、xss对比-补充" aria-hidden="true">#</a> 开发安全 - CORS、CSRF、XSS对比（补充）</h1><h2 id="_1-概念" tabindex="-1"><a class="header-anchor" href="#_1-概念" aria-hidden="true">#</a> 1. 概念</h2><ol><li><strong>CSRF</strong> - Cross-Site Request Forgery - 跨站请求伪造</li><li><strong>CORS</strong> - Cross Origin Resourse-Sharing - 跨站资源共享</li><li><strong>XSS</strong> ： Cross Site Scrit 跨站脚本攻击（为与 CSS 区别，所以在安全领域叫 XSS）</li></ol><h2 id="_2-csrf" tabindex="-1"><a class="header-anchor" href="#_2-csrf" aria-hidden="true">#</a> 2. CSRF</h2><h3 id="_2-1-概念" tabindex="-1"><a class="header-anchor" href="#_2-1-概念" aria-hidden="true">#</a> 2.1 概念</h3>',5),d={href:"https://link.zhihu.com/?target=https%3A//zh.wikipedia.org/wiki/%E8%B7%A8%E7%AB%99%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0",target:"_blank",rel:"noopener noreferrer"},_=a('<p><strong>核心知识：</strong> 跨站点请求伪造请求。</p><p><strong>简单理解：</strong> 攻击者盗用你的身份，以你的名义发送恶意请求。</p><p>常见场景：以你名义发送邮件，发消息，盗取你的账号，甚至于购买商品，虚拟货币转账等等。</p><p>造成影响：个人隐私泄露以及财产安全。</p><h2 id="_3-cors" tabindex="-1"><a class="header-anchor" href="#_3-cors" aria-hidden="true">#</a> 3. CORS</h2><h3 id="_3-1-概念" tabindex="-1"><a class="header-anchor" href="#_3-1-概念" aria-hidden="true">#</a> 3.1 概念</h3><p>CORS是一个W3C标准，全称是&quot;跨域资源共享&quot;（Cross-origin resource sharing）。</p><p>它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而<strong>克服了AJAX只能同源使用的限制</strong>。</p><blockquote><p>整个CORS通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS通信与同源的AJAX通信没有差别，代码完全一样。浏览器一旦发现AJAX请求跨源，就会<strong>自动添加一些附加的头信息，有时还会多出一次附加的请求</strong>，但用户不会有感觉。</p><p>因此，实现CORS通信的关键是服务器。只要服务器实现了CORS接口，就可以跨源通信。</p></blockquote><h2 id="_4-xss" tabindex="-1"><a class="header-anchor" href="#_4-xss" aria-hidden="true">#</a> 4. XSS</h2><h3 id="_4-1-概念" tabindex="-1"><a class="header-anchor" href="#_4-1-概念" aria-hidden="true">#</a> 4.1. 概念</h3>',11),u={href:"https://link.zhihu.com/?target=https%3A//zh.wikipedia.org/wiki/%E8%B7%A8%E7%B6%B2%E7%AB%99%E6%8C%87%E4%BB%A4%E7%A2%BC",target:"_blank",rel:"noopener noreferrer"},S=e("p",null,"XSS 攻击，一般是指攻击者通过在网页中注入恶意脚本，当用户浏览网页时，恶意脚本执行，控制用户浏览器行为的一种攻击方式。",-1),p=e("p",null,"常见 XSS 危害有：",-1),C=e("ul",null,[e("li",null,"窃取用户Cookie，获取用户隐私，盗取用户账号。"),e("li",null,"劫持用户（浏览器）会话，从而执行任意操作，例如进行非法转账、强制发表日志、发送电子邮件等。"),e("li",null,"强制弹出广告页面，刷流量，传播跨站脚本蠕虫，网页挂马等。"),e("li",null,"结合其他漏洞，如 CSRF 漏洞，实施进一步的攻击。")],-1),f=e("h2",{id:"参考文章",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考文章","aria-hidden":"true"},"#"),r(" 参考文章")],-1),g={href:"https://www.jianshu.com/p/de831ca7a523",target:"_blank",rel:"noopener noreferrer"},R={href:"https://zhuanlan.zhihu.com/p/92255672",target:"_blank",rel:"noopener noreferrer"};function k(x,b){const s=h("ExternalLinkIcon");return n(),i("div",null,[l,e("blockquote",null,[e("p",null,[r("跨站请求伪造（英语：Cross-site request forgery），也被称为 one-click attack 或者 session riding，通常缩写为 CSRF 或者 XSRF， 是一种挟制用户在当前已登录的Web应用程序上执行非本意的操作的攻击方法。跟跨网站脚本（XSS）相比，XSS 利用的是用户对指定网站的信任，CSRF 利用的是网站对用户网页浏览器的信任。 —— "),e("a",d,[r("维基百科"),t(s)])])]),_,e("blockquote",null,[e("p",null,[r("跨站脚本（英语：Cross-site scripting，通常简称为：XSS）是一种网站应用程序的安全漏洞攻击，是代码注入的一种。它允许恶意用户将代码注入到网页上，其他用户在观看网页时就会受到影响。这类攻击通常包含了HTML以及用户端脚本语言。 —— "),e("a",u,[r("维基百科"),t(s)])])]),S,p,C,f,e("p",null,[e("a",g,[r("CSRF & CORS 的区别"),t(s)])]),e("p",null,[e("a",R,[r("【全栈修炼】CORS和CSRF修炼宝典"),t(s)])])])}const X=o(c,[["render",k],["__file","dev-security-x-csrf-cors.html.vue"]]);export{X as default};