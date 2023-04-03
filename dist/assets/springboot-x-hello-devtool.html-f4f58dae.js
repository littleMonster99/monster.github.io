import{_ as o,W as e,X as l,Y as s,Z as n,$ as t,a0 as p,D as c}from"./framework-f64bc974.js";const r={},i=p(`<h1 id="springboot部署-配置热部署devtools工具" tabindex="-1"><a class="header-anchor" href="#springboot部署-配置热部署devtools工具" aria-hidden="true">#</a> SpringBoot部署 - 配置热部署devtools工具</h1><blockquote><p>在SpringBoot开发调试中，如果我每行代码的修改都需要重启启动再调试，可能比较费时间；SpringBoot团队针对此问题提供了spring-boot-devtools（简称devtools）插件，它试图提升开发调试的效率。</p></blockquote><h2 id="_1-准备知识点" tabindex="-1"><a class="header-anchor" href="#_1-准备知识点" aria-hidden="true">#</a> 1. 准备知识点</h2><h3 id="_1-1-什么是热部署和热加载" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是热部署和热加载" aria-hidden="true">#</a> 1.1 什么是热部署和热加载？</h3><blockquote><p>热部署和热加载是在应用正在运行的时候，自动更新（重新加载或者替换class等）应用的一种能力。（PS：<strong>spring-boot-devtools提供的方案也是要重启的，只是无需手动重启能实现自动加载而已。</strong>）</p></blockquote><p>严格意义上，我们需要区分下热部署和热加载, 对于Java项目而言：</p><ul><li><strong>热部署</strong><ul><li>在服务器运行时重新部署项目</li><li>它是直接重新加载整个应用，这种方式会释放内存，比热加载更加干净彻底，但同时也更费时间。</li></ul></li><li><strong>热加载</strong><ul><li>在运行时重新加载class，从而升级应用。</li><li>热加载的实现原理主要<strong>依赖java的类加载机制</strong>，在实现方式可以概括为在容器启动的时候起一条后台线程，定时的检测类文件的时间戳变化，如果类的时间戳变掉了，则将类重新载入。</li><li>对比反射机制，反射是在运行时获取类信息，通过动态的调用来改变程序行为； 热加载则是在运行时通过重新加载改变类信息，直接改变程序行为。</li></ul></li></ul><h3 id="_1-2-什么是liveload" tabindex="-1"><a class="header-anchor" href="#_1-2-什么是liveload" aria-hidden="true">#</a> 1.2 什么是LiveLoad？</h3><p>LiveLoad是提供浏览器客户端自动加载更新的工具，分为LiveLoad服务器和Liveload浏览器插件两部分； devtools中已经集成了LiveLoad服务器，所以如果我们开发的是web应用，并且期望浏览器自动刷新， 这时候可以考虑LiveLoad.</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220716103314429.png" alt="image-20220716103314429" tabindex="0" loading="lazy"><figcaption>image-20220716103314429</figcaption></figure><p>同一时间只能运行一个LiveReload服务器。 开始应用程序之前，请确保没有其他LiveReload服务器正在运行。如果从IDE启动多个应用程序，则只有第一个应用程序将支持LiveReload。</p><h2 id="_2-配置devtools实现热部署" tabindex="-1"><a class="header-anchor" href="#_2-配置devtools实现热部署" aria-hidden="true">#</a> 2. 配置devtools实现热部署</h2><blockquote><p>我们通过如下配置来实现自动重启方式的热部署。</p></blockquote><h3 id="_2-1-pom配置" tabindex="-1"><a class="header-anchor" href="#_2-1-pom配置" aria-hidden="true">#</a> 2.1 POM配置</h3><p>添加spring-boot-devtools的依赖</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-devtools<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">&gt;</span></span> <span class="token comment">&lt;!-- 可以防止将devtools依赖传递到其他模块中 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-idea配置" tabindex="-1"><a class="header-anchor" href="#_2-2-idea配置" aria-hidden="true">#</a> 2.2 IDEA配置</h3><blockquote><p>如果你使用IDEA开发工具，通常有如下两种方式：</p></blockquote><h4 id="_2-2-1-方式一-无任何配置时-手动触发重启更新-ctrl-f9" tabindex="-1"><a class="header-anchor" href="#_2-2-1-方式一-无任何配置时-手动触发重启更新-ctrl-f9" aria-hidden="true">#</a> 2.2.1 方式一： <strong>无任何配置时，手动触发重启更新（Ctrl+F9）</strong></h4><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220716103429362.png" alt="image-20220716103429362" tabindex="0" loading="lazy"><figcaption>image-20220716103429362</figcaption></figure><p>（也可以用<code>mvn compile</code>编译触发重启更新）</p><h4 id="_2-2-2-方式二-idea需开启运行时编译-自动重启更新" tabindex="-1"><a class="header-anchor" href="#_2-2-2-方式二-idea需开启运行时编译-自动重启更新" aria-hidden="true">#</a> 2.2.2 方式二： <strong>IDEA需开启运行时编译，自动重启更新</strong></h4><p><strong>设置1</strong>：</p><p>File-&gt;Setting-&gt;Build,Execution,Deployment-&gt;Compile</p><p>勾选：Make project automatically</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220716103508265.png" alt="image-20220716103508265" tabindex="0" loading="lazy"><figcaption>image-20220716103508265</figcaption></figure><p><strong>设置2</strong>：</p><p>快捷键：ctrl+alt+shift+/</p><p>选择：Registry</p><p>勾选：compiler.automake.allow.when.app.running</p><p>新版本的IDEA可以在File-&gt;setting-&gt;Advanced Setttings里面的第一个设置：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220716103530756.png" alt="image-20220716103530756" tabindex="0" loading="lazy"><figcaption>image-20220716103530756</figcaption></figure><h3 id="_2-3-application-yml配置" tabindex="-1"><a class="header-anchor" href="#_2-3-application-yml配置" aria-hidden="true">#</a> 2.3 application.yml配置</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">devtools</span><span class="token punctuation">:</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  <span class="token comment">#设置开启热部署</span>
      <span class="token key atrule">additional-paths</span><span class="token punctuation">:</span> src/main/java <span class="token comment">#重启目录</span>
      <span class="token key atrule">exclude</span><span class="token punctuation">:</span> WEB<span class="token punctuation">-</span>INF/<span class="token important">**</span>
  <span class="token key atrule">thymeleaf</span><span class="token punctuation">:</span>
    <span class="token key atrule">cache</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment">#使用Thymeleaf模板引擎，关闭缓存</span>

  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-使用liveload" tabindex="-1"><a class="header-anchor" href="#_2-4-使用liveload" aria-hidden="true">#</a> 2.4 使用LiveLoad</h3><p>spring-boot-devtools模块包含<strong>嵌入式LiveReload服务器</strong>，可以在资源更改时用于触发浏览器刷新。 LiveReload浏览器扩展程序支持Chrome，Firefox和Safari，你可以从livereload.com免费下载。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220716103640674.png" alt="image-20220716103640674" tabindex="0" loading="lazy"><figcaption>image-20220716103640674</figcaption></figure><p>或者从浏览器插件中心下载，比如firefox:</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220716103657510.png" alt="image-20220716103657510" tabindex="0" loading="lazy"><figcaption>image-20220716103657510</figcaption></figure><p>安装完之后，可以通过如下图标管理</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220716103713325.png" alt="image-20220716103713325"><p>如果你不想在应用程序运行时启动LiveReload服务器，则可以将spring.devtools.livereload.enabled属性设置为false 。</p><p>同一时间只能运行一个LiveReload服务器。 开始应用程序之前，请确保没有其他LiveReload服务器正在运行。如果从IDE启动多个应用程序，则只有第一个应用程序将支持LiveReload。</p><h2 id="_3-进一步理解" tabindex="-1"><a class="header-anchor" href="#_3-进一步理解" aria-hidden="true">#</a> 3. 进一步理解</h2><blockquote><p>虽然一些开发者会使用devtool工具，但是很少有能够深入理解的；让我们理解如下几个问题，帮助你进一步理解。</p></blockquote><h3 id="_3-1-devtool的原理-为何会自动重启" tabindex="-1"><a class="header-anchor" href="#_3-1-devtool的原理-为何会自动重启" aria-hidden="true">#</a> 3.1 devtool的原理？为何会自动重启？</h3><blockquote><p>为什么同样是重启应用，为什么不手动重启，而是建议使用spring-boot-devtools进行热部署重启？</p></blockquote><p>spring-boot-devtools使用了两个类加载器ClassLoader，一个ClassLoader加载不会发生更改的类（第三方jar包），另一个ClassLoader（restart ClassLoader）加载会更改的类（自定义的类）。</p><p>后台启动一个<strong>文件监听线程（File Watcher）</strong>，<strong>监测的目录中的文件发生变动时， 原来的restart ClassLoader被丢弃，将会重新加载新的restart ClassLoader</strong>。</p><p>因为文件变动后，第三方jar包不再重新加载，<strong>只加载自定义的类，加载的类比较少，所以重启比较快。</strong></p><p>这也是为什么，同样是重启应用，为什么不手动重启，建议使用spring-boot-devtools进行热部署重启。</p><p>在自动重启中有几点需要注意:</p><ul><li><strong>自动重启会记录日志的</strong></li></ul><p>（记录在什么情况下重启的日志）</p><p>可以通过如下关闭</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">devtools</span><span class="token punctuation">:</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span>
      <span class="token key atrule">log-condition-evaluation-delta</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>排除一些不需要自动重启的资源</strong></li></ul><p>某些资源在更改时不一定需要触发重新启动。默认情况下，改变资源/META-INF/maven，/META-INF/resources，/resources，/static，/public，或/templates不触发重新启动，但确会触发现场重装。如果要自定义这些排除项，可以使用该spring.devtools.restart.exclude属性。例如，要仅排除/static，/public你将设置以下属性：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">devtools</span><span class="token punctuation">:</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span>
      <span class="token key atrule">exclude</span><span class="token punctuation">:</span> <span class="token string">&quot;static/**,public/**&quot;</span>

  
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要保留这些默认值并添加其他排除项，请改用该spring.devtools.restart.additional-exclude属性。</p><ul><li><strong>自定义重启类加载器</strong></li></ul><p>重启功能是通过使用两个类加载器来实现的。对于大多数应用程序，这种方法效果很好。但是，它有时会导致类加载问题。</p><p>默认情况下，IDE 中的任何打开项目都使用“重启”类加载器加载，任何常规.jar文件都使用“基本”类加载器加载。如果你处理一个多模块项目，并且不是每个模块都导入到你的 IDE 中，你可能需要自定义一些东西。为此，你可以创建一个META-INF/spring-devtools.properties文件。</p><p>该spring-devtools.properties文件可以包含以restart.exclude和为前缀的属性restart.include。该include元素是应该被拉高到“重启”的类加载器的项目，以及exclude要素是应该向下推入“Base”类加载器的项目。该属性的值是应用于类路径的正则表达式模式，如以下示例所示：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">restart</span><span class="token punctuation">:</span>
  <span class="token key atrule">exclude</span><span class="token punctuation">:</span>
    <span class="token key atrule">companycommonlibs</span><span class="token punctuation">:</span> <span class="token string">&quot;/mycorp-common-[\\\\w\\\\d-\\\\.]+\\\\.jar&quot;</span>
  <span class="token key atrule">include</span><span class="token punctuation">:</span>
    <span class="token key atrule">projectcommon</span><span class="token punctuation">:</span> <span class="token string">&quot;/mycorp-myproj-[\\\\w\\\\d-\\\\.]+\\\\.jar&quot;</span>

  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-devtool是否会被打包进jar" tabindex="-1"><a class="header-anchor" href="#_3-2-devtool是否会被打包进jar" aria-hidden="true">#</a> 3.2 devtool是否会被打包进Jar？</h3><blockquote><p>devtool原则上来说应该是只在开发调试的时候使用，而在生产环境运行jar包时是不需要的，所以Spring打包会不会把它打进JAR吗？</p></blockquote><ul><li><strong>默认情况下，不会被打包进JAR</strong></li></ul><p>运行打包的应用程序时，开发人员工具<strong>会自动禁用</strong>。如果你通过 java -jar或者其他特殊的类加载器进行启动时，都会被认为是“生产环境的应用”。</p><ul><li><strong>如果我们期望远程调试应用</strong></li></ul><p>（<em>生产环境勿用，只有在受信任的网络上运行或使用 SSL 进行保护时，才应启用它</em>）</p><p>在这种情况下，devtool也具备远程调试的能力：远程客户端应用程序旨在从你的 IDE 中运行。你需要org.springframework.boot.devtools.RemoteSpringApplication使用与你连接的远程项目相同的类路径运行。应用程序的唯一必需参数是它连接到的远程 URL。</p><p>例如，如果使用 Eclipse 或 Spring Tools，并且你有一个my-app已部署到 Cloud Foundry 的名为的项目，执行以下操作：</p>`,73),u=s("li",null,"选择Run Configurations…从Run菜单。",-1),k=s("li",null,"创建一个新的Java Application“启动配置”。",-1),d=s("li",null,"浏览my-app项目。",-1),g=s("li",null,"使用org.springframework.boot.devtools.RemoteSpringApplication作为主类。",-1),m={href:"https://myapp.cfapps.xn--ioProgram-6y4o",target:"_blank",rel:"noopener noreferrer"},v=p(`<p>正在运行的远程客户端可能类似于以下列表：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>  <span class="token punctuation">.</span>   ____          _                                              __ _ _
 <span class="token operator">/</span>\\\\ <span class="token operator">/</span> ___&#39;_ __ _ <span class="token function">_</span><span class="token punctuation">(</span>_<span class="token punctuation">)</span>_ __  __ _          ___               _      \\ \\ \\ \\
<span class="token punctuation">(</span> <span class="token punctuation">(</span> <span class="token punctuation">)</span>\\___ <span class="token operator">|</span> <span class="token char">&#39;_ | &#39;</span>_<span class="token operator">|</span> <span class="token operator">|</span> &#39;_ \\<span class="token operator">/</span> _\` <span class="token operator">|</span>        <span class="token operator">|</span> _ \\___ _ __  ___<span class="token operator">|</span> <span class="token operator">|</span>_ ___ \\ \\ \\ \\
 \\\\<span class="token operator">/</span>  ___<span class="token punctuation">)</span><span class="token operator">|</span> <span class="token operator">|</span>_<span class="token punctuation">)</span><span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">||</span> <span class="token punctuation">(</span>_<span class="token operator">|</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">::</span><span class="token operator">::</span><span class="token operator">::</span><span class="token punctuation">[</span><span class="token punctuation">]</span>   <span class="token operator">/</span> <span class="token operator">-</span>_<span class="token punctuation">)</span> &#39;  \\<span class="token operator">/</span> _ \\  _<span class="token operator">/</span> <span class="token operator">-</span>_<span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span>
  &#39;  <span class="token operator">|</span>____<span class="token operator">|</span> <span class="token punctuation">.</span>__<span class="token operator">|</span>_<span class="token operator">|</span> <span class="token operator">|</span>_<span class="token operator">|</span>_<span class="token operator">|</span> <span class="token operator">|</span>_\\__<span class="token punctuation">,</span> <span class="token operator">|</span>        <span class="token operator">|</span>_<span class="token operator">|</span>_\\___<span class="token operator">|</span>_<span class="token operator">|</span>_<span class="token operator">|</span>_\\___<span class="token operator">/</span>\\__\\___<span class="token operator">|</span><span class="token operator">/</span> <span class="token operator">/</span> <span class="token operator">/</span> <span class="token operator">/</span>
 <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">|</span>_<span class="token operator">|=</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">|</span>___<span class="token operator">/=</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">/</span>_<span class="token operator">/</span>_<span class="token operator">/</span>_<span class="token operator">/</span>
 <span class="token operator">::</span> <span class="token class-name">Spring</span> <span class="token class-name">Boot</span> <span class="token class-name">Remote</span> <span class="token operator">::</span> <span class="token number">2.5</span><span class="token number">.4</span>

<span class="token number">2015</span><span class="token operator">-</span><span class="token number">06</span><span class="token operator">-</span><span class="token number">10</span> <span class="token number">18</span><span class="token operator">:</span><span class="token number">25</span><span class="token operator">:</span><span class="token number">06.632</span>  <span class="token constant">INFO</span> <span class="token number">14938</span> <span class="token operator">--</span><span class="token operator">-</span> <span class="token punctuation">[</span>           main<span class="token punctuation">]</span> <span class="token class-name"><span class="token namespace">o<span class="token punctuation">.</span>s<span class="token punctuation">.</span>b<span class="token punctuation">.</span>devtools<span class="token punctuation">.</span></span>RemoteSpringApplication</span>   <span class="token operator">:</span> <span class="token class-name">Starting</span> <span class="token class-name">RemoteSpringApplication</span> on pwmbp <span class="token keyword">with</span> <span class="token class-name">PID</span> <span class="token number">14938</span> <span class="token punctuation">(</span><span class="token operator">/</span><span class="token class-name">Users</span><span class="token operator">/</span>pwebb<span class="token operator">/</span>projects<span class="token operator">/</span>spring<span class="token operator">-</span>boot<span class="token operator">/</span>code<span class="token operator">/</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>project<span class="token operator">/</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>devtools<span class="token operator">/</span>target<span class="token operator">/</span>classes started by pwebb in <span class="token operator">/</span><span class="token class-name">Users</span><span class="token operator">/</span>pwebb<span class="token operator">/</span>projects<span class="token operator">/</span>spring<span class="token operator">-</span>boot<span class="token operator">/</span>code<span class="token punctuation">)</span>
<span class="token number">2015</span><span class="token operator">-</span><span class="token number">06</span><span class="token operator">-</span><span class="token number">10</span> <span class="token number">18</span><span class="token operator">:</span><span class="token number">25</span><span class="token operator">:</span><span class="token number">06.671</span>  <span class="token constant">INFO</span> <span class="token number">14938</span> <span class="token operator">--</span><span class="token operator">-</span> <span class="token punctuation">[</span>           main<span class="token punctuation">]</span> <span class="token class-name"><span class="token namespace">s<span class="token punctuation">.</span>c<span class="token punctuation">.</span>a<span class="token punctuation">.</span></span>AnnotationConfigApplicationContext</span> <span class="token operator">:</span> <span class="token class-name">Refreshing</span> <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span>AnnotationConfigApplicationContext</span><span class="token annotation punctuation">@2a17b7b6</span><span class="token operator">:</span> startup date <span class="token punctuation">[</span><span class="token class-name">Wed</span> <span class="token class-name">Jun</span> <span class="token number">10</span> <span class="token number">18</span><span class="token operator">:</span><span class="token number">25</span><span class="token operator">:</span><span class="token number">06</span> <span class="token constant">PDT</span> <span class="token number">2015</span><span class="token punctuation">]</span><span class="token punctuation">;</span> root of context hierarchy
<span class="token number">2015</span><span class="token operator">-</span><span class="token number">06</span><span class="token operator">-</span><span class="token number">10</span> <span class="token number">18</span><span class="token operator">:</span><span class="token number">25</span><span class="token operator">:</span><span class="token number">07.043</span>  <span class="token constant">WARN</span> <span class="token number">14938</span> <span class="token operator">--</span><span class="token operator">-</span> <span class="token punctuation">[</span>           main<span class="token punctuation">]</span> <span class="token class-name"><span class="token namespace">o<span class="token punctuation">.</span>s<span class="token punctuation">.</span>b<span class="token punctuation">.</span>d<span class="token punctuation">.</span>r<span class="token punctuation">.</span>c<span class="token punctuation">.</span></span>RemoteClientConfiguration</span>    <span class="token operator">:</span> <span class="token class-name">The</span> connection <span class="token keyword">to</span> <span class="token namespace">http</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">8080</span> is <span class="token class-name"><span class="token namespace">insecure<span class="token punctuation">.</span></span> You</span> should use a <span class="token constant">URL</span> starting <span class="token keyword">with</span> &#39;https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>&#39;<span class="token punctuation">.</span>
<span class="token number">2015</span><span class="token operator">-</span><span class="token number">06</span><span class="token operator">-</span><span class="token number">10</span> <span class="token number">18</span><span class="token operator">:</span><span class="token number">25</span><span class="token operator">:</span><span class="token number">07.074</span>  <span class="token constant">INFO</span> <span class="token number">14938</span> <span class="token operator">--</span><span class="token operator">-</span> <span class="token punctuation">[</span>           main<span class="token punctuation">]</span> <span class="token class-name"><span class="token namespace">o<span class="token punctuation">.</span>s<span class="token punctuation">.</span>b<span class="token punctuation">.</span>d<span class="token punctuation">.</span>a<span class="token punctuation">.</span></span>OptionalLiveReloadServer</span>       <span class="token operator">:</span> <span class="token class-name">LiveReload</span> server is running on port <span class="token number">35729</span>
<span class="token number">2015</span><span class="token operator">-</span><span class="token number">06</span><span class="token operator">-</span><span class="token number">10</span> <span class="token number">18</span><span class="token operator">:</span><span class="token number">25</span><span class="token operator">:</span><span class="token number">07.130</span>  <span class="token constant">INFO</span> <span class="token number">14938</span> <span class="token operator">--</span><span class="token operator">-</span> <span class="token punctuation">[</span>           main<span class="token punctuation">]</span> <span class="token class-name"><span class="token namespace">o<span class="token punctuation">.</span>s<span class="token punctuation">.</span>b<span class="token punctuation">.</span>devtools<span class="token punctuation">.</span></span>RemoteSpringApplication</span>   <span class="token operator">:</span> <span class="token class-name">Started</span> <span class="token class-name">RemoteSpringApplication</span> in <span class="token number">0.74</span> seconds <span class="token punctuation">(</span><span class="token constant">JVM</span> running <span class="token keyword">for</span> <span class="token number">1.105</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-devtool为何会默认禁用缓存选项" tabindex="-1"><a class="header-anchor" href="#_3-3-devtool为何会默认禁用缓存选项" aria-hidden="true">#</a> 3.3 devtool为何会默认禁用缓存选项？</h3><blockquote><p>Spring Boot 支持的一些库<strong>使用缓存来提高性能</strong>。例如，模板引擎缓存已编译的模板以避免重复解析模板文件。此外，Spring MVC 可以在提供静态资源时向响应添加 HTTP 缓存标头。</p></blockquote><p>虽然缓存<strong>在生产中非常有益，但在开发过程中可能会适得其反</strong>，使你无法看到刚刚在应用程序中所做的更改。出于这个原因， spring-boot-devtools 默认禁用缓存选项。</p><p>比如Thymeleaf 提供了spring.thymeleaf.cache来设置模板引擎的缓存，使用spring-boot-devtools模块时是不需要手动设置这些属性的，因为spring-boot-devtools会自动进行设置。</p><p>那么会自动设置哪些配置呢？你可以在DevToolsPropertyDefaultsPostProcessor类找到对应的默认配置。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DevToolsPropertyDefaultsPostProcessor</span> <span class="token keyword">implements</span> <span class="token class-name">EnvironmentPostProcessor</span> <span class="token punctuation">{</span>

	<span class="token keyword">static</span> <span class="token punctuation">{</span>
		<span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> properties <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		properties<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;spring.thymeleaf.cache&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;false&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		properties<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;spring.freemarker.cache&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;false&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		properties<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;spring.groovy.template.cache&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;false&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		properties<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;spring.mustache.cache&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;false&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		properties<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;server.servlet.session.persistent&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		properties<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;spring.h2.console.enabled&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		properties<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;spring.web.resources.cache.period&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		properties<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;spring.web.resources.chain.cache&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;false&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		properties<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;spring.template.provider.cache&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;false&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		properties<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;spring.mvc.log-resolved-exception&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		properties<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;server.error.include-binding-errors&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ALWAYS&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		properties<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;server.error.include-message&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ALWAYS&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		properties<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;server.error.include-stacktrace&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ALWAYS&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		properties<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;server.servlet.jsp.init-parameters.development&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		properties<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;spring.reactor.debug&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token constant">PROPERTIES</span> <span class="token operator">=</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">unmodifiableMap</span><span class="token punctuation">(</span>properties<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然如果你不想被应用属性被spring-boot-devtools默认设置， 可以通过spring.devtools.add-properties到false你application.yml中。</p><h3 id="_3-4-devtool是否可以给所有springboot应用做全局的配置" tabindex="-1"><a class="header-anchor" href="#_3-4-devtool是否可以给所有springboot应用做全局的配置" aria-hidden="true">#</a> 3.4 devtool是否可以给所有Springboot应用做全局的配置？</h3><blockquote><p>可以通过将spring-boot-devtools.yml文件添加到$HOME/.config/spring-boot目录来<strong>配置全局 devtools 设置</strong>。</p></blockquote><p>添加到这些文件的任何属性都适用于你机器上使用 devtools 的所有Spring Boot 应用程序。例如，要将重新启动配置为始终使用触发器文件，你需要将以下属性添加到你的spring-boot-devtools文件中：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">devtools</span><span class="token punctuation">:</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span>
      <span class="token key atrule">trigger-file</span><span class="token punctuation">:</span> <span class="token string">&quot;.reloadtrigger&quot;</span>

  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-如果我不用devtool-还有什么选择" tabindex="-1"><a class="header-anchor" href="#_4-如果我不用devtool-还有什么选择" aria-hidden="true">#</a> 4. 如果我不用devtool，还有什么选择？</h2><blockquote><p>如果我不用devtool，还有什么选择？</p></blockquote><p><strong>在实际的开发过程中，我也不会去使用devtool工具</strong>, 因为：</p>`,16),b=p('<li><p>devtool本身基于重启方式，这种仍然不是真正的热替换方案，JRebel才是（它是收费的）</p></li><li><p>开发调试最重要的还是一种权衡</p><ul><li><p>自动重启的开销如果和手动重启没有什么太大差别，那么还不如手动重启（按需重启）</p></li><li><p>多数情况下，如果是<strong>方法内部的修改或者静态资源的修改</strong>，在IDEA中是可以通过Rebuild（Ctrl + Shift + F9）进行热更的</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220716113243457.png" alt="image-20220716113243457" tabindex="0" loading="lazy"><figcaption>image-20220716113243457</figcaption></figure></li></ul></li>',2),h={href:"https://github.com/spring-projects/spring-loaded",target:"_blank",rel:"noopener noreferrer"},_=s("h2",{id:"参考文章",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#参考文章","aria-hidden":"true"},"#"),n(" 参考文章")],-1),f={href:"https://pdai.tech/md/spring/springboot/springboot-x-hello-devtool.html",target:"_blank",rel:"noopener noreferrer"},y=s("strong",null,"SpringBoot入门 - 配置热部署devtools工具",-1);function q(x,z){const a=c("ExternalLinkIcon");return e(),l("div",null,[i,s("ol",null,[u,k,d,g,s("li",null,[n("添加"),s("a",m,[n("https://myapp.cfapps.io到Program"),t(a)]),n(" arguments（或任何你的远程 URL）。")])]),v,s("ul",null,[b,s("li",null,[s("p",null,[n("此外还有一个工具spring loaded， 可实现修改类文件的热部署，具体可看其"),s("a",h,[n("github地址"),t(a)]),n("上的说明。")])])]),_,s("p",null,[s("a",f,[y,t(a)])])])}const j=o(r,[["render",q],["__file","springboot-x-hello-devtool.html.vue"]]);export{j as default};