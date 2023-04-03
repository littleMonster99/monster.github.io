import{_ as r,W as h,X as t,Y as e,Z as n,$ as d,a0 as c,D as i}from"./framework-f64bc974.js";const s={},o=c('<h1 id="架构-保障架构安全" tabindex="-1"><a class="header-anchor" href="#架构-保障架构安全" aria-hidden="true">#</a> 架构-保障架构安全</h1><h2 id="_1-架构安全" tabindex="-1"><a class="header-anchor" href="#_1-架构安全" aria-hidden="true">#</a> 1. 架构安全</h2><p>对已知问题有有效的解决方案，对未知/潜在问题建立发现和防御机制。对于安全问题，首先要提高安全意识，建立一个安全的有效机制，从政策层面，组织层面进行保障。比如服务器密码不能泄露，密码每月更新，并且三次内不能重复；每周安全扫描等。以制度化的方式，加强安全体系的建设。同时，需要注意与安全有关的各个环节。安全问题不容忽视。包括基础设施安全，应用系统安全，数据保密安全等。</p><h3 id="_1-1-基础设施安全" tabindex="-1"><a class="header-anchor" href="#_1-1-基础设施安全" aria-hidden="true">#</a> 1.1 基础设施安全</h3><p>硬件采购，操作系统，网络环境方面的安全。一般采用，正规渠道购买高质量的产品，选择安全的操作系统，及时修补漏洞，安装杀毒软件防火墙。防范病毒，后门。设置防火墙策略，建立DDOS防御系统，使用攻击检测系统，进行子网隔离等手段。</p><h3 id="_1-2-应用系统安全" tabindex="-1"><a class="header-anchor" href="#_1-2-应用系统安全" aria-hidden="true">#</a> 1.2 应用系统安全</h3><p>在程序开发时，对已知常用问题，使用正确的方式，在代码层面解决掉。防止跨站脚本攻击（XSS），注入攻击，跨站请求伪造（CSRF），错误信息，HTML注释，文件上传，路径遍历等。还可以使用Web应用防火墙（比如：ModSecurity），进行安全漏洞扫描等措施，加强应用级别的安全。</p><h3 id="_1-3-数据保密安全" tabindex="-1"><a class="header-anchor" href="#_1-3-数据保密安全" aria-hidden="true">#</a> 1.3 数据保密安全</h3><p>存储安全（存在在可靠的设备，实时，定时备份），保存安全（重要的信息加密保存，选择合适的人员复杂保存和检测等），传输安全（防止数据窃取和数据篡改）；</p><h3 id="_1-4-其它-算法" tabindex="-1"><a class="header-anchor" href="#_1-4-其它-算法" aria-hidden="true">#</a> 1.4 其它 - 算法</h3><p>常用的加解密算法（单项散列加密[MD5,SHA]，对称加密[DES,3DES,RC]），非对称加密[RSA]等。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>',12),_={href:"https://pdai.tech/md/arch/arch-x-security.html",target:"_blank",rel:"noopener noreferrer"},l=e("strong",null,"架构 - 保障架构安全",-1);function p(u,f){const a=i("ExternalLinkIcon");return h(),t("div",null,[o,e("p",null,[e("a",_,[l,n(),d(a)])])])}const S=r(s,[["render",p],["__file","arch-x-security.html.vue"]]);export{S as default};
