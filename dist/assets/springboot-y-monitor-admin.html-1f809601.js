import{_ as i,W as p,X as o,Y as n,Z as a,$ as t,a0 as e,D as l}from"./framework-f64bc974.js";const c={},r=e('<h1 id="springboot监控-集成springboot-admin监控工具" tabindex="-1"><a class="header-anchor" href="#springboot监控-集成springboot-admin监控工具" aria-hidden="true">#</a> SpringBoot监控 - 集成springboot admin监控工具</h1><blockquote><p>上文中展示了SpringBoot提供了Actuator对应用进行监控和管理， 而Spring Boot Admin能够将 Actuator 中的信息进行界面化的展示，也可以监控所有 Spring Boot 应用的健康状况，提供实时警报功能。 本文主要介绍springboot admin以及SpringBoot和springboot admin的集成。</p></blockquote><h2 id="_1-知识准备" tabindex="-1"><a class="header-anchor" href="#_1-知识准备" aria-hidden="true">#</a> 1. 知识准备</h2><blockquote><p>需要了解Spring Boot Admin和actuartor之间的关系等。</p></blockquote><h3 id="_1-1-什么是spring-boot-admin-和actuartor是什么关系" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是spring-boot-admin-和actuartor是什么关系" aria-hidden="true">#</a> 1.1 什么是Spring Boot Admin？和actuartor是什么关系？</h3><blockquote><p>Spring Boot Admin能够将 Actuator 中的信息进行界面化的展示，也可以监控所有 Spring Boot 应用的健康状况，提供实时警报功能。</p></blockquote><ul><li><strong>Spring Boot Admin提供的主要功能</strong></li></ul><ol><li>显示健康状况</li><li>显示详细信息，例如 <ol><li>JVM和内存指标</li><li>micrometer.io指标</li><li>数据源指标</li><li>缓存指标</li></ol></li><li>显示构建信息编号</li><li>关注并下载日志文件</li><li>查看jvm系统和环境属性</li><li>查看Spring Boot配置属性</li><li>支持Spring Cloud的postable / env-和/ refresh-endpoint</li><li>轻松的日志级管理</li><li>与JMX-beans交互</li><li>查看线程转储</li><li>查看http跟踪</li><li>查看auditevents</li><li>查看http-endpoints</li><li>查看计划任务</li><li>查看和删除活动会话（使用spring-session）</li><li>查看Flyway / Liquibase数据库迁移</li><li>下载heapdump</li><li>状态变更通知（通过电子邮件，Slack，Hipchat，…）</li><li>状态更改的事件日志（非持久性）</li></ol>',8),u={href:"https://github.com/codecentric/spring-boot-admin",target:"_blank",rel:"noopener noreferrer"},d=n("ul",null,[n("li",null,[n("strong",null,"Spring Boot Admin不是Spring团队提供的模块"),a("？")])],-1),g={href:"https://github.com/codecentric/spring-boot-admin",target:"_blank",rel:"noopener noreferrer"},k=e(`<ul><li><strong>Spring Boot Admin和actuartor是什么关系？</strong></li></ul><p>从如下POM的依赖关系可以看出Spring Boot Admin本质上集成了actuartor，将实时警报，此外添加一些实时警报功能等。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220720204640820.png" alt="image-20220720204640820" tabindex="0" loading="lazy"><figcaption>image-20220720204640820</figcaption></figure><h3 id="_1-2-springboot-admin的client和server" tabindex="-1"><a class="header-anchor" href="#_1-2-springboot-admin的client和server" aria-hidden="true">#</a> 1.2 SpringBoot Admin的Client和Server？</h3><blockquote><p>Spring Boot Admin（简称SBA）由两部分组成：<strong>SBA Server</strong>和<strong>SBA Client</strong>。</p></blockquote><p><strong>SBA Server</strong>： 包括Admin用户界面并独立运行于被监控应用</p><p><strong>SBA Client</strong>： 提供一种方式将被监控应用注册到 SBA Server</p><h4 id="_1-2-1-为什么spring-boot-admin设计上会分为server和client两个部分" tabindex="-1"><a class="header-anchor" href="#_1-2-1-为什么spring-boot-admin设计上会分为server和client两个部分" aria-hidden="true">#</a> 1.2.1 <strong>为什么Spring Boot Admin设计上会分为Server和Client两个部分</strong>？</h4><ol><li>首先，Spring Boot Admin做的是集中化的监控（比如应用的集群，多个服务或者微服务等），而不是每个应用都需要有一个UI。</li><li>其次，被监控的应用应该是和监控平台是分离的，比如Client应用会挂掉，这时候Server监控依然正常运行并发现和报警Client的异常状态。</li><li>再者，还要考虑和其它语言应用，其它平台等的集成等。</li></ol><h4 id="_1-2-2-只能通过sba-client注册到sba-server吗" tabindex="-1"><a class="header-anchor" href="#_1-2-2-只能通过sba-client注册到sba-server吗" aria-hidden="true">#</a> 1.2.2 <strong>只能通过SBA Client注册到SBA Server吗</strong>？</h4><p>并不是， 除了SBA Client， SBA 还支持:</p><ol><li>Spring Cloud Discovery: 为了支持一些微服务框架如SpringCloud等（因为微服务框架中已经包含了服务发现和注册模块）</li><li>Python Applications Using Pyctuator: 为了支持其它语言开发的应用，比如Python</li></ol><h2 id="_2-简单示例" tabindex="-1"><a class="header-anchor" href="#_2-简单示例" aria-hidden="true">#</a> 2. 简单示例</h2><blockquote><p>本例子主要展示SBA Server + SBA Client注册的方式。</p></blockquote><h3 id="_2-1-启用sba-server" tabindex="-1"><a class="header-anchor" href="#_2-1-启用sba-server" aria-hidden="true">#</a> 2.1 启用SBA Server</h3><p>pom引入包</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>de.codecentric<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-admin-starter-server<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.5.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过@EnableAdminServer注解启用SBA Server</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> pdai
 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableAdminServer</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringBootHelloWorldApplication</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * main interface.
     *
     * <span class="token keyword">@param</span> <span class="token parameter">args</span> args
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">SpringBootHelloWorldApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样你便可以打开如下网址查看Server UI，很显然目前没有客户端注册上来。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220720205007867.png" alt="image-20220720205007867" tabindex="0" loading="lazy"><figcaption>image-20220720205007867</figcaption></figure><h3 id="_2-2-注册client" tabindex="-1"><a class="header-anchor" href="#_2-2-注册client" aria-hidden="true">#</a> 2.2 注册Client</h3><p>这里采用Spring Boot Admin Client注册的方式。</p><p>引入SBA Client的pom依赖</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>de.codecentric<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-admin-starter-client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.5.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加配置</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">boot</span><span class="token punctuation">:</span>
    <span class="token key atrule">admin</span><span class="token punctuation">:</span>
      <span class="token key atrule">client</span><span class="token punctuation">:</span>
        <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&#39;http://localhost:8080&#39;</span>
<span class="token key atrule">management</span><span class="token punctuation">:</span>
  <span class="token key atrule">endpoints</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled-by-default</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">web</span><span class="token punctuation">:</span>
      <span class="token key atrule">base-path</span><span class="token punctuation">:</span> /manage
      <span class="token key atrule">exposure</span><span class="token punctuation">:</span>
        <span class="token key atrule">include</span><span class="token punctuation">:</span> <span class="token string">&#39;*&#39;</span>
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-演示效果" tabindex="-1"><a class="header-anchor" href="#_2-3-演示效果" aria-hidden="true">#</a> 2.3 演示效果</h3>`,28),m={href:"http://localhost:8080/wallboard",target:"_blank",rel:"noopener noreferrer"},b=e('<figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220720205101689.png" alt="image-20220720205101689" tabindex="0" loading="lazy"><figcaption>image-20220720205101689</figcaption></figure><p>左侧是主要功能：</p><p>Insight - Details</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220720205624005.png" alt="image-20220720205624005" tabindex="0" loading="lazy"><figcaption>image-20220720205624005</figcaption></figure><p>Insight - Metrics</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220720205743086.png" alt="image-20220720205743086" tabindex="0" loading="lazy"><figcaption>image-20220720205743086</figcaption></figure><p>Insight - Configurations</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220720205832953.png" alt="image-20220720205832953" tabindex="0" loading="lazy"><figcaption>image-20220720205832953</figcaption></figure><p>Loggers</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220720205910150.png" alt="image-20220720205910150" tabindex="0" loading="lazy"><figcaption>image-20220720205910150</figcaption></figure><p>JVM</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220720210025579.png" alt="image-20220720210025579" tabindex="0" loading="lazy"><figcaption>image-20220720210025579</figcaption></figure><p>Mappings</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220720210045166.png" alt="image-20220720210045166" tabindex="0" loading="lazy"><figcaption>image-20220720210045166</figcaption></figure><h2 id="_3-进一步理解" tabindex="-1"><a class="header-anchor" href="#_3-进一步理解" aria-hidden="true">#</a> 3. 进一步理解</h2>',15),v={href:"https://codecentric.github.io/spring-boot-admin/current",target:"_blank",rel:"noopener noreferrer"},h=e(`<h3 id="_3-1-如何启用jmx管理" tabindex="-1"><a class="header-anchor" href="#_3-1-如何启用jmx管理" aria-hidden="true">#</a> 3.1 如何启用JMX管理？</h3><p>默认下SBA没有启用JMX，需要通过如下配置启用。</p><p>首先需要引入POM依赖（PS：需要SpringBoot2.2+ 版本）</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.jolokia<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jolokia-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启用JMX</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">jmx</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>刷新SBA UI就可以看到增加了JMX相关的连接</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220720210348392.png" alt="image-20220720210348392" tabindex="0" loading="lazy"><figcaption>image-20220720210348392</figcaption></figure><h3 id="_3-2-如何显示日志内容" tabindex="-1"><a class="header-anchor" href="#_3-2-如何显示日志内容" aria-hidden="true">#</a> 3.2 如何显示日志内容？</h3>`,9),f={href:"http://xn--logging-gf7nh96s.file.name",target:"_blank",rel:"noopener noreferrer"},y=e(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">logging</span><span class="token punctuation">:</span>
  <span class="token key atrule">file</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&#39;pdai-spring-boot-application.log&#39;</span>
  <span class="token key atrule">pattern</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> <span class="token string">&#39;%clr(%d{yyyy-MM-dd HH:mm:ss.SSS}){faint} %clr(%5p) %clr(\${PID}){magenta} %clr(---){faint} %clr([%15.15t]){faint} %clr(%-40.40logger{39}){cyan} %clr(:){faint} %m%n%wEx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>刷新SBA UI就可以看到增加了日志文件相关的连接</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220720210606935.png" alt="image-20220720210606935" tabindex="0" loading="lazy"><figcaption>image-20220720210606935</figcaption></figure><h3 id="_3-3-如何继承spring-security" tabindex="-1"><a class="header-anchor" href="#_3-3-如何继承spring-security" aria-hidden="true">#</a> 3.3 如何继承Spring Security？</h3><p>可以通过如下继承spring-boot-starter-security</p><p>添加pom依赖</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-security<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加HttpSecurity配置</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">SecurityPermitAllConfig</span> <span class="token keyword">extends</span> <span class="token class-name">WebSecurityConfigurerAdapter</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        http<span class="token punctuation">.</span><span class="token function">authorizeRequests</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">anyRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
            <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">csrf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">disable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),_={href:"https://codecentric.github.io/spring-boot-admin/current/#securing-spring-boot-admin",target:"_blank",rel:"noopener noreferrer"},S=e(`<h3 id="_3-4-如何通知告警信息" tabindex="-1"><a class="header-anchor" href="#_3-4-如何通知告警信息" aria-hidden="true">#</a> 3.4 如何通知告警信息？</h3><p>可以通过集成 spring-boot-starter-mail 配置JavaMailSender 来用邮件通知信息。</p><p>添加pom依赖</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-mail<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加配置信息</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>spring.mail.host=smtp.example.com
spring.boot.admin.notify.mail.to=admin@example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>除了邮件通知这种，内置还支持很多其他方式以及支持自定义notification，比如钉钉，微信通知等</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220720210755484.png" alt="image-20220720210755484" tabindex="0" loading="lazy"><figcaption>image-20220720210755484</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,9),x={href:"https://pdai.tech/md/spring/springboot/springboot-x-monitor-boot-admin.html",target:"_blank",rel:"noopener noreferrer"},z=n("strong",null,"SpringBoot监控 - 集成springboot admin监控工具",-1);function A(B,I){const s=l("ExternalLinkIcon");return p(),o("div",null,[r,n("p",null,[a("更多的可以"),n("a",u,[a("参考"),t(s)])]),d,n("p",null,[a("它是由Codecentric公司创建的，代码在"),n("a",g,[a("Github： spring-boot-admin"),t(s)]),a("上。")]),k,n("p",null,[a("打开 "),n("a",m,[a("http://localhost:8080/wallboard"),t(s)])]),b,n("blockquote",null,[n("p",null,[a("我们再通过一些问题来帮助你更深入理解SBA， 更详细的内容可以参考"),n("a",v,[a("官网文档 "),t(s)]),a("。")])]),h,n("p",null,[a("默认下没有显示Log File的内容，如果需要显示SpringBoot应用日志需要进行如下配置（配置logging.file.path "),n("a",f,[a("或者logging.file.name"),t(s)]),a("）。")]),y,n("p",null,[a("其它安全相关配置可以参考"),n("a",_,[a("官网文档"),t(s)])]),S,n("p",null,[n("a",x,[z,t(s)])])])}const w=i(c,[["render",A],["__file","springboot-y-monitor-admin.html.vue"]]);export{w as default};
