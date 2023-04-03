import{_ as o,W as p,X as l,Y as n,Z as s,$ as e,a0 as t,D as i}from"./framework-f64bc974.js";const c={},r=t(`<h1 id="自定义springboot-starter实现自动化配置" tabindex="-1"><a class="header-anchor" href="#自定义springboot-starter实现自动化配置" aria-hidden="true">#</a> 自定义SpringBoot Starter实现自动化配置</h1><p>自动化配置需满足两个条件</p><ol><li>能够生成Bean，并注册到Bean容器中</li><li>能够自动配置项目所需要的配置</li></ol><h2 id="_1-自定义步骤" tabindex="-1"><a class="header-anchor" href="#_1-自定义步骤" aria-hidden="true">#</a> 1. 自定义步骤</h2><h3 id="_1-1-引入springboot-自动化配置依赖" tabindex="-1"><a class="header-anchor" href="#_1-1-引入springboot-自动化配置依赖" aria-hidden="true">#</a> 1.1 引入SpringBoot 自动化配置依赖：</h3><p>引入 SpringBoot 自动化配置依赖：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-autoconfigure<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.5.9.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-创建-service" tabindex="-1"><a class="header-anchor" href="#_1-2-创建-service" aria-hidden="true">#</a> 1.2 创建 Service</h3><p>spring-boot-starter-helloworld 只是作为例子演示自定义 starter 的过程，实现的功能很简单就是创建一个 HelloworldService 的，并配置 sayHello() 方法打印的语句。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloworldService</span> <span class="token punctuation">{</span>

  <span class="token keyword">private</span> <span class="token class-name">String</span> words<span class="token punctuation">;</span>

  <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">getWords</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> words<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setWords</span><span class="token punctuation">(</span><span class="token class-name">String</span> words<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>words <span class="token operator">=</span> words<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token string">&quot;hello, &quot;</span> <span class="token operator">+</span> words<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-创建属性类" tabindex="-1"><a class="header-anchor" href="#_1-3-创建属性类" aria-hidden="true">#</a> 1.3 创建属性类</h3><p>创建属性类，prefix = “helloworld”代表该项目在属性文件中配置的前缀，即可以在属性文件中通过 helloworld.words=springboot，就可以改变属性类字段 words 的值了。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;helloworld&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloworldProperties</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">DEFAULT_WORDS</span> <span class="token operator">=</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">;</span>

  <span class="token keyword">private</span> <span class="token class-name">String</span> words <span class="token operator">=</span> <span class="token constant">DEFAULT_WORDS</span><span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getWords</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> words<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setWords</span><span class="token punctuation">(</span><span class="token class-name">String</span> words<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>words <span class="token operator">=</span> words<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-创建自动配置类" tabindex="-1"><a class="header-anchor" href="#_1-4-创建自动配置类" aria-hidden="true">#</a> 1.4 创建自动配置类</h3><p>创建自动化配置类，这个相当于就是一个普通的 Java 配置类，可以在这里创建 Bean，并可获得与 application.properties 属性文件相对应的属性类的 Bean。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 相当于一个普通的 java 配置类</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token comment">// 当 HelloworldService 在类路径的条件下</span>
<span class="token annotation punctuation">@ConditionalOnClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">HelloworldService</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 将 application.properties 的相关的属性字段与该类一一对应，并生成 Bean</span>
<span class="token annotation punctuation">@EnableConfigurationProperties</span><span class="token punctuation">(</span><span class="token class-name">HelloworldProperties</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloworldAutoConfiguration</span> <span class="token punctuation">{</span>

  <span class="token comment">// 注入属性类</span>
  <span class="token annotation punctuation">@Autowired</span>
  <span class="token keyword">private</span> <span class="token class-name">HelloworldProperties</span> hellowordProperties<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Bean</span>
  <span class="token comment">// 当容器没有这个 Bean 的时候才创建这个 Bean</span>
  <span class="token annotation punctuation">@ConditionalOnMissingBean</span><span class="token punctuation">(</span><span class="token class-name">HelloworldService</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token class-name">HelloworldService</span> <span class="token function">helloworldService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">HelloworldService</span> helloworldService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HelloworldService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    helloworldService<span class="token punctuation">.</span><span class="token function">setWords</span><span class="token punctuation">(</span>hellowordProperties<span class="token punctuation">.</span><span class="token function">getWords</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> helloworldService<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-meta-inf-目录下创建-spring-factories" tabindex="-1"><a class="header-anchor" href="#_1-5-meta-inf-目录下创建-spring-factories" aria-hidden="true">#</a> 1.5 META-INF 目录下创建 spring.factories</h3><p>在 META-INF 目录下创建 spring.factories，这个属性文件可重要啦，因为 SpringBoot 自动化配置最终就是要扫描 META-INF/spring.factories 来加载项目的自动化配置类。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code># <span class="token class-name">Auto</span> <span class="token class-name">Configure</span>
<span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span>EnableAutoConfiguration</span><span class="token operator">=</span><span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>objcoding<span class="token punctuation">.</span>starters<span class="token punctuation">.</span>helloworld<span class="token punctuation">.</span></span>HelloworldAutoConfiguration</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-引用starter" tabindex="-1"><a class="header-anchor" href="#_2-引用starter" aria-hidden="true">#</a> 2. 引用Starter</h2><p>为了引入 starter，我在这里再创建一个 spring-boot-starter-helloworld-sample 项目。</p><p>添加 spring-boot-starter-helloworld 起步依赖：</p><div class="language-pom line-numbers-mode" data-ext="pom"><pre class="language-pom"><code>&lt;dependency&gt;
  &lt;groupId&gt;com.objcoding&lt;/groupId&gt;
  &lt;artifactId&gt;spring-boot-starter-helloworld&lt;/artifactId&gt;
  &lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 application.properties 中添加属性：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>helloworld.words=springboot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 SpringBoot 主程序中 注入 helloworldService</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloworldApplication</span> <span class="token punctuation">{</span>

  <span class="token annotation punctuation">@Autowired</span>
  <span class="token keyword">private</span> <span class="token class-name">HelloworldService</span> helloworldService<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> helloworldService<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">HelloworldApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),u={href:"http://localhost:8080/%EF%BC%8C%E6%89%93%E5%8D%B0%E4%BB%A5%E4%B8%8B%E7%BB%93%E6%9E%9C%EF%BC%9A",target:"_blank",rel:"noopener noreferrer"},d=t('<figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200321000541904.png" alt="image-20200321000541904" tabindex="0" loading="lazy"><figcaption>image-20200321000541904</figcaption></figure><h2 id="面试真题" tabindex="-1"><a class="header-anchor" href="#面试真题" aria-hidden="true">#</a> 面试真题</h2><p>你自己有定义过一些（Springboot）自动化配置吗？</p><blockquote><p>我之前做过xxx使用到了，他的创建步骤</p><ol><li>使用 @ConfigurationProperties 创建属性类</li><li>主要通过@Configuration 和 @Bean 实现 Java显示配置，并注入属性</li><li>创建 META-INF/spring.factories 文件，添加这个允许自动配置的类</li></ol></blockquote><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>',5),k={href:"https://objcoding.com/2018/02/02/Costom-SpringBoot-Starter/",target:"_blank",rel:"noopener noreferrer"};function v(m,g){const a=i("ExternalLinkIcon");return p(),l("div",null,[r,n("p",null,[s("访问 "),n("a",u,[s("http://localhost:8080/，打印以下结果："),e(a)])]),d,n("p",null,[n("a",k,[s("实战|如何自定义SpringBoot Starter？"),e(a)])])])}const h=o(c,[["render",v],["__file","springboot-y-costom-springboot-starter.html.vue"]]);export{h as default};
