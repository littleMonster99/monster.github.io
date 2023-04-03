import{_ as a,W as s,X as n,Y as e,$ as t,a0 as o,D as l}from"./framework-f64bc974.js";const c={},r=o(`<h1 id="代码质量-统一风格-统一代码格式化详解" tabindex="-1"><a class="header-anchor" href="#代码质量-统一风格-统一代码格式化详解" aria-hidden="true">#</a> 代码质量 - 统一风格：统一代码格式化详解</h1><blockquote><p>项目的代码通常是一个团队共同完成的，要保障代码质量的首要前提就是统一代码的风格，本文将介绍常用的统一风格的措施之<strong>统一代码格式化</strong>。</p></blockquote><h2 id="_1-统一代码格式化" tabindex="-1"><a class="header-anchor" href="#_1-统一代码格式化" aria-hidden="true">#</a> 1. 统一代码格式化</h2><blockquote><p>统一风格的第一条，就是要统一代码的格式化，因为不同人提交的代码格式化不一样将导致merge代码造成大几率的冲突；而统一的代码风格无论是对于项目可维护性，还是降低merge冲突都是极为重要的。</p></blockquote><p>通常是两种方式：一种方式是，强制使用同样的IDE工具；另外一个更为常见的是，使用同一种代码格式规范。</p><h3 id="_1-1-eclipse-code-formatter插件" tabindex="-1"><a class="header-anchor" href="#_1-1-eclipse-code-formatter插件" aria-hidden="true">#</a> 1.1 <s>Eclipse code formatter插件</s></h3><blockquote><p>基本都统一用IDEA 了</p></blockquote><p>最为常用的工具是 <strong>Eclipse code formatter插件</strong>, 用来统一eclipse和IDEA等IDE的代码规范</p><ul><li><strong>安装Eclipse Code Formatter插件</strong>：</li></ul><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220901220301868.png" alt="image-20220901220301868" tabindex="0" loading="lazy"><figcaption>image-20220901220301868</figcaption></figure><p>(安装完之后需要重启idea)</p><ul><li><strong>启用Eclipse Code Formatter</strong></li></ul><p>File-&gt;Settings-&gt;Other Tools-&gt;Eclipse Code Formatter-&gt;Use the Eclipse Code Formatter</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220901220351945.png" alt="image-20220901220351945" tabindex="0" loading="lazy"><figcaption>image-20220901220351945</figcaption></figure><p>相关的formtter.xml配置文件可以到网上下载下或者用eclipse导出下）</p><h3 id="_1-2-其它idea统一样式" tabindex="-1"><a class="header-anchor" href="#_1-2-其它idea统一样式" aria-hidden="true">#</a> 1.2 其它IDEA统一样式</h3><blockquote><p>在Eclipse Code Formatter配置后，还是会有其它一些差异的，这时候还需要通过IDEA约定一些设置和一些公共样式的scheme（这里也会同时考虑checkstyle等样式检查工具对代码的要求）</p></blockquote><ul><li><strong>配置自动导入包</strong></li></ul><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220901220417771.png" alt="image-20220901220417771" tabindex="0" loading="lazy"><figcaption>image-20220901220417771</figcaption></figure><ul><li><strong>配置code style</strong></li></ul><p>通常而言，注意下这里几步（当然你可以设置更多，特意截图这几步，主要考虑checkstyle的要求及imports化在不同IDE下的差异），然后保存我一个scheme放到项目根目录下，供所有队员统一使用</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220901220558975.png" alt="image-20220901220558975" tabindex="0" loading="lazy"><figcaption>image-20220901220558975</figcaption></figure><h3 id="_1-3-统一的注释" tabindex="-1"><a class="header-anchor" href="#_1-3-统一的注释" aria-hidden="true">#</a> 1.3 统一的注释</h3><ul><li><strong>类文件头的注释</strong></li></ul><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220901221115201.png" alt="image-20220901221115201" tabindex="0" loading="lazy"><figcaption>image-20220901221115201</figcaption></figure><p>测试下, 创建一个类TestClass，将自动生成文件头注释</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * This class is for xxxx.
 *
 * <span class="token keyword">@version</span> 2021/1/20
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestClass</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，如果你发现对已经存在的类进行类注释&#39;/**&#39;时无法自动加入上述注释时，还可以使用Live Template</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220901221800374.png" alt="image-20220901221800374" tabindex="0" loading="lazy"><figcaption>image-20220901221800374</figcaption></figure><p>配置好以后，方法头 输入<code>A</code>，然后按TAB键</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220901221821850.png" alt="image-20220901221821850" tabindex="0" loading="lazy"><figcaption>image-20220901221821850</figcaption></figure><p>再按Enter</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220901221836953.png" alt="image-20220901221836953" tabindex="0" loading="lazy"><figcaption>image-20220901221836953</figcaption></figure><ul><li><strong>方法的注释</strong></li></ul><p>如果有必要的话，还可以设置下方法的注释（其实我觉得默认就够了）</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,36),g={href:"https://pdai.tech/md/develop/ut/dev-qt-code-style.html",target:"_blank",rel:"noopener noreferrer"},d=e("strong",null,"代码质量 - 统一风格：统一代码格式化详解",-1);function p(m,u){const i=l("ExternalLinkIcon");return s(),n("div",null,[r,e("p",null,[e("a",g,[d,t(i)])])])}const b=a(c,[["render",p],["__file","dev-qt-code-style.html.vue"]]);export{b as default};