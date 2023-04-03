import{_ as i,W as o,X as t,Y as e,Z as s,$ as a,a0 as n,D as r}from"./framework-f64bc974.js";const h={},u=n('<h1 id="博客框架选型" tabindex="-1"><a class="header-anchor" href="#博客框架选型" aria-hidden="true">#</a> 博客框架选型</h1><p>我的读书笔记也积累了一两年时间了，随着博客文章越来越多，原有的博客框架gitbook 也不能满足自己的需求。先后使用了gitbook=&gt; docsify=&gt; vuepress 。现总结一下这三个的使用感受</p><h2 id="gitbook" tabindex="-1"><a class="header-anchor" href="#gitbook" aria-hidden="true">#</a> gitbook</h2><p>优势</p><ul><li>相关插件丰富</li></ul><p>缺点</p><ul><li>随着项目增大，每次构建时间都需要花费10多分钟，实在难以忍受</li><li>页面样式过于简约单调</li></ul><h2 id="docsify" tabindex="-1"><a class="header-anchor" href="#docsify" aria-hidden="true">#</a> docsify</h2><p>优势</p><ul><li>可以无缝将gitbook转到docsify</li><li>文档样式好看不少</li></ul><p>缺点：</p><ul><li>动态渲染，对SEO 不够友好。百度google 无法搜索到我们的博客</li><li>目录折叠没找到一个好方案</li></ul><h2 id="vuepress" tabindex="-1"><a class="header-anchor" href="#vuepress" aria-hidden="true">#</a> vuepress</h2><p>优势：</p><ul><li>样式好看</li><li>构建时间几分钟内</li><li>SEO支持度高</li></ul><p>缺点：</p><ul><li>gitbook的目录不能无缝切到vuepress</li><li>竟然没有目录，文章多的时候非常痛苦（找了各种插件都不合适）</li></ul><h2 id="vuepress-theme-hope" tabindex="-1"><a class="header-anchor" href="#vuepress-theme-hope" aria-hidden="true">#</a> vuepress-theme-hope</h2><p>在原有的vuepress 基础上做了样式优化和常用组件的集成，页面效果好</p>',19),c=e("p",null,"制作本主题的初衷是发现 VuePress 只是一个单纯的静态文档生成器。举个例子，它并不会注入 meta 标签做 SEO 优化，也不会生成 Sitemap 帮助搜索引擎索引文档内容。",-1),d=e("p",null,"虽然 VuePress 在一定程度上扩展了 Markdown 语法，它仍然缺失一些常用的功能，比如文本对齐、标记、流程图、公式、演示等。同时默认主题提供的一些功能，也比较弱或者缺失，如图片预览，深色模式等。",-1),p={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/get-started/intro.html",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,"优势",-1),f=e("ul",null,[e("li",null,"文章目录, 搜索，代码复制，图片预览等组件不需要自己额外集成，方便快速"),e("li",null,"整体的配色/样式好看不少"),e("li",null,"作者活跃，及时的反馈相关问题")],-1),g=e("p",null,"缺点",-1),b=e("ul",null,[e("li",null,"图片预览经常加载不出来"),e("li",null,"新版本不是特别稳定")],-1);function m(k,v){const l=r("ExternalLinkIcon");return o(),t("div",null,[u,e("blockquote",null,[c,d,e("p",null,[e("a",p,[s("官方对主题的介绍"),a(l)])])]),_,f,g,b])}const y=i(h,[["render",m],["__file","blog-technology-selection.html.vue"]]);export{y as default};
