import{_ as n,W as s,X as a,a0 as t}from"./framework-f64bc974.js";const e={},p=t(`<h1 id="swagger分模块" tabindex="-1"><a class="header-anchor" href="#swagger分模块" aria-hidden="true">#</a> Swagger分模块</h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景" aria-hidden="true">#</a> 1. 背景</h2><p>我们在使用swagger的时候，如果接口非常多的时候，我们的接口列表是非常庞大的。要查找一个接口并不容易。我们希望能按模块划分</p><h3 id="_1-1-初始情况" tabindex="-1"><a class="header-anchor" href="#_1-1-初始情况" aria-hidden="true">#</a> 1.1 初始情况</h3><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211026093522355.png" alt="image-20211026093522355" tabindex="0" loading="lazy"><figcaption>image-20211026093522355</figcaption></figure><p>默认情况模块只有一个default</p><h2 id="_2-实现步骤" tabindex="-1"><a class="header-anchor" href="#_2-实现步骤" aria-hidden="true">#</a> 2. 实现步骤</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SwaggerConfig</span>
<span class="token punctuation">{</span>
   
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
   
    <span class="token doc-comment comment">/**
     * 创建API
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Docket</span> <span class="token function">createRestApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Docket</span><span class="token punctuation">(</span><span class="token class-name">DocumentationType</span><span class="token punctuation">.</span><span class="token constant">OAS_30</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">groupName</span><span class="token punctuation">(</span><span class="token string">&quot;XXAPI接口&quot;</span><span class="token punctuation">)</span>
                <span class="token comment">// 是否启用Swagger</span>
                <span class="token punctuation">.</span><span class="token function">enable</span><span class="token punctuation">(</span>enabled<span class="token punctuation">)</span>
                <span class="token comment">// 用来创建该API的基本信息，展示在文档的页面中（自定义展示的信息）</span>
                <span class="token punctuation">.</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token comment">// 设置哪些接口暴露给Swagger展示</span>
                <span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token comment">// 扫描所有有注解的api，用这种方式更灵活</span>
                <span class="token punctuation">.</span><span class="token function">apis</span><span class="token punctuation">(</span><span class="token class-name">RequestHandlerSelectors</span><span class="token punctuation">.</span><span class="token function">withMethodAnnotation</span><span class="token punctuation">(</span><span class="token class-name">ApiOperation</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token comment">// 扫描指定包中的swagger注解</span>
                <span class="token comment">// .apis(RequestHandlerSelectors.basePackage(&quot;com.ygn.project.tool.swagger&quot;))</span>
                <span class="token comment">// 扫描所有 .apis(RequestHandlerSelectors.any())</span>
<span class="token comment">//                .paths(PathSelectors.any())</span>
                <span class="token punctuation">.</span><span class="token function">paths</span><span class="token punctuation">(</span><span class="token class-name">PathSelectors</span><span class="token punctuation">.</span><span class="token function">ant</span><span class="token punctuation">(</span><span class="token string">&quot;/xx/**&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token comment">/* 设置安全模式，swagger可以设置访问token */</span>
                <span class="token punctuation">.</span><span class="token function">securitySchemes</span><span class="token punctuation">(</span><span class="token function">securitySchemes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">securityContexts</span><span class="token punctuation">(</span><span class="token function">securityContexts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">pathMapping</span><span class="token punctuation">(</span>pathMapping<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 创建API
     */</span>
    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">&quot;system&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Docket</span> <span class="token function">createSystemRestApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Docket</span><span class="token punctuation">(</span><span class="token class-name">DocumentationType</span><span class="token punctuation">.</span><span class="token constant">SWAGGER_2</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">groupName</span><span class="token punctuation">(</span><span class="token string">&quot;系统API接口&quot;</span><span class="token punctuation">)</span>
                <span class="token comment">// 是否启用Swagger</span>
                <span class="token punctuation">.</span><span class="token function">enable</span><span class="token punctuation">(</span>enabled<span class="token punctuation">)</span>
                <span class="token comment">// 用来创建该API的基本信息，展示在文档的页面中（自定义展示的信息）</span>
                <span class="token punctuation">.</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token comment">// 设置哪些接口暴露给Swagger展示</span>
                <span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token comment">// 扫描所有有注解的api，用这种方式更灵活</span>
                <span class="token punctuation">.</span><span class="token function">apis</span><span class="token punctuation">(</span><span class="token class-name">RequestHandlerSelectors</span><span class="token punctuation">.</span><span class="token function">withMethodAnnotation</span><span class="token punctuation">(</span><span class="token class-name">ApiOperation</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token comment">// 扫描指定包中的swagger注解</span>
<span class="token comment">//                .apis(RequestHandlerSelectors.basePackage(&quot;com.fardu.jd&quot;))</span>
                <span class="token comment">// 扫描所有</span>
                <span class="token comment">// .apis(RequestHandlerSelectors.any())</span>
<span class="token comment">//                .paths(PathSelectors.any())</span>
                <span class="token punctuation">.</span><span class="token function">paths</span><span class="token punctuation">(</span><span class="token class-name">PathSelectors</span><span class="token punctuation">.</span><span class="token function">ant</span><span class="token punctuation">(</span><span class="token string">&quot;/system/**&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token comment">/* 设置安全模式，swagger可以设置访问token */</span>
                <span class="token punctuation">.</span><span class="token function">securitySchemes</span><span class="token punctuation">(</span><span class="token function">securitySchemes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">securityContexts</span><span class="token punctuation">(</span><span class="token function">securityContexts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">pathMapping</span><span class="token punctuation">(</span>pathMapping<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>@Bean(&quot;system&quot;) : 实例化多个<code>docket</code></li><li>groupName: 指定该模块名称</li><li>paths：指定该模块要扫码的路径</li></ul><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211026094024020.png" alt="image-20211026094024020" tabindex="0" loading="lazy"><figcaption>image-20211026094024020</figcaption></figure><h2 id="_3-docket模块支持多个包" tabindex="-1"><a class="header-anchor" href="#_3-docket模块支持多个包" aria-hidden="true">#</a> 3. Docket模块支持多个包</h2><h3 id="_3-1-使用pathselectors-regex" tabindex="-1"><a class="header-anchor" href="#_3-1-使用pathselectors-regex" aria-hidden="true">#</a> 3.1 使用PathSelectors.regex</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.paths(PathSelectors.regex(&quot;/api/.*|/test/.*&quot;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","swagger-x-module.html.vue"]]);export{d as default};
