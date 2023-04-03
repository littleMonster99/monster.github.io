import{_ as o,W as r,X as l,Y as n,Z as a,$ as s,a0 as i,D as t}from"./framework-f64bc974.js";const c={},d=i(`<h1 id="jenkins共享库编写与使用" tabindex="-1"><a class="header-anchor" href="#jenkins共享库编写与使用" aria-hidden="true">#</a> Jenkins共享库编写与使用</h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景" aria-hidden="true">#</a> 1. 背景</h2><p>如果你经常使用 Jenkins Pipeline 一定会遇到多个不同流水线中有大量重复代码的情况，很多时候为了方便我们都是直接复制粘贴到不同的管道中去的，但是长期下去这些代码的维护就会越来越麻烦。为了解决这个问题，Jenkins 中提供了共享库的概念来解决重复代码的问题，我们只需要将公共部分提取出来，然后就可以在所有的 Pipeline 中引用这些共享库下面的代码了。</p><h2 id="_2-共享库是什么" tabindex="-1"><a class="header-anchor" href="#_2-共享库是什么" aria-hidden="true">#</a> 2. 共享库是什么？</h2><p>共享库（shared library）是一些<strong>独立的 Groovy 脚本的集合</strong>，我们可以在运行 Pipeline 的时候去获取这些共享库代码。使用共享库最好的方式同样是把代码使用 Git 仓库进行托管，这样我们就可以进行版本化管理了。</p><p>使用共享库一般只需要3个步骤即可：</p><ul><li>首先创建 Groovy 脚本，添加到 Git 仓库中</li><li>然后在 Jenkins 中配置将共享库添加到 Jenkins 中来</li><li>最后，在我们的流水线中导入需要使用的共享库：<code>@Library(&#39;your-shared-library&#39;)</code>，这样就可以使用共享库中的代码了。</li></ul><h2 id="_3-共享库内容" tabindex="-1"><a class="header-anchor" href="#_3-共享库内容" aria-hidden="true">#</a> 3. 共享库内容</h2><p>在共享库中一般会有两种通用的代码：</p><h3 id="_3-1-vars-下的steps" tabindex="-1"><a class="header-anchor" href="#_3-1-vars-下的steps" aria-hidden="true">#</a> 3.1 vars 下的steps</h3><blockquote><p><strong>Steps</strong>：这些 Steps 在 Jenkins 中被称为<strong>全局变量</strong>，我们可以在所有的 Jenkins Pipeline 中使用这些自定义的 Steps。</p></blockquote><p>比如，我们可以编写一个标准的 Step 来部署应用或者发送消息通知等，我们就可以将代码添加到 <code>vars/YourStepName.groovy</code> 文件中，然后实现一个 <code>call</code> 函数即可：</p><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code><span class="token shebang comment">#!/usr/bin/env groovy</span>
<span class="token comment">// vars/YourStepName.groovy</span>

<span class="token keyword">def</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Do something here...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-src下的通用代码-通常放帮助类" tabindex="-1"><a class="header-anchor" href="#_3-2-src下的通用代码-通常放帮助类" aria-hidden="true">#</a> 3.2 src下的通用代码（通常放帮助类）</h3><p>这些代码需要放在 <code>src/your/package/name</code> 目录下面，然后就可以使用常规的 Groovy 语法了，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/usr/bin/env groovy
// com/qikqiak/GlobalVars.groovy
package com.qikqiak

class GlobalVars {
   static String foo = &quot;bar&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以在 Jenkins Pipeline 中使用 <code>import</code> 导入上面的类，并引用其中的静态变量，比如 <code>GlobalVars.foo</code>。</p><h2 id="_4-示例" tabindex="-1"><a class="header-anchor" href="#_4-示例" aria-hidden="true">#</a> 4. 示例</h2><h3 id="_4-1-步骤1-vars的steps示例" tabindex="-1"><a class="header-anchor" href="#_4-1-步骤1-vars的steps示例" aria-hidden="true">#</a> 4.1 步骤1：vars的steps示例</h3><p>新建一个名为 <code>pipeline-library-demo</code> 的文件夹，将该项目加入到 Git 仓库中。首先创建一个名为 <code>vars</code> 的目录，自定义一个 step 就是在 <code>vars</code> 目录下面的一个 <code>.groovy</code> 文件，这些被称为全局变量，比如我们添加一个 <code>sayHi.groovy</code> 的文件，代码如下所示：</p><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code><span class="token shebang comment">#!/usr/bin/env groovy</span>

<span class="token keyword">def</span> <span class="token function">call</span><span class="token punctuation">(</span>String name<span class="token operator">=</span><span class="token string">&#39;zsz&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  echo <span class="token interpolation-string"><span class="token string">&quot;Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">name</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.&quot;</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是需要实现 call 方法，添加了一个名为 name 的参数，具有默认值 <code>zsz</code>，可以用 <code>\${name}</code> 来进行访问。</p><h3 id="_4-2-步骤2-src-的通用代码示例" tabindex="-1"><a class="header-anchor" href="#_4-2-步骤2-src-的通用代码示例" aria-hidden="true">#</a> 4.2 步骤2：src 的通用代码示例</h3><p>然后创建一个名为 <code>src/com/zsz/GlobalVars.groovy</code> 的文件，文件内容如下所示：</p><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code><span class="token shebang comment">#!/usr/bin/env groovy</span>
<span class="token keyword">package</span> com<span class="token punctuation">.</span>qikqiak

<span class="token keyword">class</span> <span class="token class-name">GlobalVars</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> String foo <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;bar&quot;</span></span>

  <span class="token comment">// 在 Pipeline 中可以引用这里的静态变量：</span>
  <span class="token comment">// </span>
  <span class="token comment">// import com.zsz.GlobalVars</span>
  <span class="token comment">// println GlobalVars.foo</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-完整的代码目录如下所示" tabindex="-1"><a class="header-anchor" href="#_4-3-完整的代码目录如下所示" aria-hidden="true">#</a> 4.3 完整的代码目录如下所示：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ tree .
.
├── README.md
├── src
│   └── com
│       └── zsz
│           └── GlobalVars.groovy
└── vars
    └── sayHi.groovy

4 directories, 3 files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-上传代码到git" tabindex="-1"><a class="header-anchor" href="#_4-4-上传代码到git" aria-hidden="true">#</a> 4.4 上传代码到git</h3>`,28),p={href:"https://gitee.com/zszdevelop/pipeline-library-demo",target:"_blank",rel:"noopener noreferrer"},u=i(`<h3 id="_4-5-jenkins-添加共享库" tabindex="-1"><a class="header-anchor" href="#_4-5-jenkins-添加共享库" aria-hidden="true">#</a> 4.5 Jenkins 添加共享库</h3><p>共享库创建完成后，我们需要让 Jenkins 知道这个共享库，我们可以从 Jenkins 的 Web 页面进行添加。在 Jenkins 首页 -&gt; 系统管理 -&gt; 系统配置，在 <code>Global Pipeline Libraries</code> 区域配置共享库：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211001182353785.png" alt="image-20211001182353785" tabindex="0" loading="lazy"><figcaption>image-20211001182353785</figcaption></figure><h3 id="_4-6-新建流水线项目" tabindex="-1"><a class="header-anchor" href="#_4-6-新建流水线项目" aria-hidden="true">#</a> 4.6 新建流水线项目</h3><p>保存后即可使用配置共享库。接下来新建一个名为 <code>share-lib-demo</code> 的流水线项目，在 <code>Pipeline script</code> 区域添加如下代码：</p><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code><span class="token annotation punctuation">@Library</span><span class="token punctuation">(</span><span class="token string">&#39;pipeline-library-demo&#39;</span><span class="token punctuation">)</span><span class="token number">_</span>

<span class="token keyword">import</span> com<span class="token punctuation">.</span>qikqiak<span class="token punctuation">.</span>GlobalVars

<span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">&#39;Demo&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    echo <span class="token string">&#39;Hello world&#39;</span>
    sayHi <span class="token string">&#39;张三&#39;</span>
    println GlobalVars<span class="token punctuation">.</span>foo
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211001182543979.png" alt="image-20211001182543979" tabindex="0" loading="lazy"><figcaption>image-20211001182543979</figcaption></figure><p>需要注意的是 <code>@Library(&#39;pipeline-library-demo&#39;)_</code> 最后有一个下划线 <code>_</code>，这个下划线并不是写错了，如果 <code>@Libray</code> 后面紧接的一行不是 <code>import</code> 语句的话，就需要这个下划线，我们这里后面就是一条 <code>import</code> 语句，所以这里可以省略这个下划线。</p><h3 id="_4-7-构建输出" tabindex="-1"><a class="header-anchor" href="#_4-7-构建输出" aria-hidden="true">#</a> 4.7 构建输出</h3><p>配置完成后，构建这个 Pipeline，正常就可以看到如下所示的构建结果</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211001182654054.png" alt="image-20211001182654054" tabindex="0" loading="lazy"><figcaption>image-20211001182654054</figcaption></figure><h2 id="_5-参考文章" tabindex="-1"><a class="header-anchor" href="#_5-参考文章" aria-hidden="true">#</a> 5. 参考文章</h2>`,12),v={href:"https://www.jenkins.io/zh/doc/book/pipeline/shared-libraries/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.qikqiak.com/post/jenkins-shared-library-demo/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/zszdevelop/jenkinslibrary",target:"_blank",rel:"noopener noreferrer"};function h(g,k){const e=t("ExternalLinkIcon");return r(),l("div",null,[d,n("p",null,[n("a",p,[a("https://gitee.com/zszdevelop/pipeline-library-demo"),s(e)])]),u,n("p",null,[n("a",v,[a("jenkins官网"),s(e)])]),n("p",null,[n("a",m,[a("Jenkins 共享库示例"),s(e)])]),n("p",null,[n("a",b,[a("DevOps流水线最佳实践"),s(e)])])])}const y=o(c,[["render",h],["__file","jenkins-x-sharedlib.html.vue"]]);export{y as default};
