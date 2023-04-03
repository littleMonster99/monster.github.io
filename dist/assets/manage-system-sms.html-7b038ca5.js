import{_ as n,W as s,X as a,a0 as t}from"./framework-f64bc974.js";const p={},e=t(`<h1 id="后台管理-短信服务适配" tabindex="-1"><a class="header-anchor" href="#后台管理-短信服务适配" aria-hidden="true">#</a> 后台管理 - 短信服务适配</h1><h2 id="_1-具体实现" tabindex="-1"><a class="header-anchor" href="#_1-具体实现" aria-hidden="true">#</a> 1. 具体实现</h2><h3 id="_1-1-初始化" tabindex="-1"><a class="header-anchor" href="#_1-1-初始化" aria-hidden="true">#</a> 1.1 初始化</h3><ol><li>通过springboot @AutoConfiguration 自动注入</li><li>通过@ConditionalOnClass() 判断具体导入谁（是阿里还是用腾讯云）</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 短信配置类
 *
 * <span class="token keyword">@author</span> Lion Li
 * <span class="token keyword">@version</span> 4.2.0
 */</span>
<span class="token annotation punctuation">@AutoConfiguration</span>
<span class="token annotation punctuation">@EnableConfigurationProperties</span><span class="token punctuation">(</span><span class="token class-name">SmsProperties</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SmsAutoConfiguration</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Configuration</span>
    <span class="token annotation punctuation">@ConditionalOnProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;sms.enabled&quot;</span><span class="token punctuation">,</span> havingValue <span class="token operator">=</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ConditionalOnClass</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>dysmsapi20170525<span class="token punctuation">.</span></span>Client</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">AliyunSmsConfiguration</span> <span class="token punctuation">{</span>

        <span class="token annotation punctuation">@Bean</span>
        <span class="token keyword">public</span> <span class="token class-name">SmsTemplate</span> <span class="token function">aliyunSmsTemplate</span><span class="token punctuation">(</span><span class="token class-name">SmsProperties</span> smsProperties<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">AliyunSmsTemplate</span><span class="token punctuation">(</span>smsProperties<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Configuration</span>
    <span class="token annotation punctuation">@ConditionalOnProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;sms.enabled&quot;</span><span class="token punctuation">,</span> havingValue <span class="token operator">=</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ConditionalOnClass</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>tencentcloudapi<span class="token punctuation">.</span>sms<span class="token punctuation">.</span>v20190711<span class="token punctuation">.</span></span>SmsClient</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">TencentSmsConfiguration</span> <span class="token punctuation">{</span>

        <span class="token annotation punctuation">@Bean</span>
        <span class="token keyword">public</span> <span class="token class-name">SmsTemplate</span> <span class="token function">tencentSmsTemplate</span><span class="token punctuation">(</span><span class="token class-name">SmsProperties</span> smsProperties<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">TencentSmsTemplate</span><span class="token punctuation">(</span>smsProperties<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-短信模板" tabindex="-1"><a class="header-anchor" href="#_1-2-短信模板" aria-hidden="true">#</a> 1.2 短信模板</h3><ol><li>抽象出模板类、针对平台特殊的参数通过map传入</li><li>发送由具体模板实现</li><li>针对返回结果组装成自己的result</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 短信模板
 *
 * <span class="token keyword">@version</span> 4.2.0
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">SmsTemplate</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 发送短信
     *
     * <span class="token keyword">@param</span> <span class="token parameter">phones</span>     电话号(多个逗号分割)
     * <span class="token keyword">@param</span> <span class="token parameter">templateId</span> 模板id
     * <span class="token keyword">@param</span> <span class="token parameter">param</span>      模板对应参数
     *                   阿里 需使用 模板变量名称对应内容 例如: code=1234
     *                   腾讯 需使用 模板变量顺序对应内容 例如: 1=1234, 1为模板内第一个参数
     */</span>
    <span class="token class-name">SmsResult</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token class-name">String</span> phones<span class="token punctuation">,</span> <span class="token class-name">String</span> templateId<span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> param<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>阿里模板</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Aliyun 短信模板
 *
 * <span class="token keyword">@author</span> Lion Li
 * <span class="token keyword">@version</span> 4.2.0
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AliyunSmsTemplate</span> <span class="token keyword">implements</span> <span class="token class-name">SmsTemplate</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">SmsProperties</span> properties<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Client</span> client<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@SneakyThrows</span><span class="token punctuation">(</span><span class="token class-name">Exception</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">AliyunSmsTemplate</span><span class="token punctuation">(</span><span class="token class-name">SmsProperties</span> smsProperties<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>properties <span class="token operator">=</span> smsProperties<span class="token punctuation">;</span>
        <span class="token class-name">Config</span> config <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Config</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token comment">// 您的AccessKey ID</span>
            <span class="token punctuation">.</span><span class="token function">setAccessKeyId</span><span class="token punctuation">(</span>smsProperties<span class="token punctuation">.</span><span class="token function">getAccessKeyId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token comment">// 您的AccessKey Secret</span>
            <span class="token punctuation">.</span><span class="token function">setAccessKeySecret</span><span class="token punctuation">(</span>smsProperties<span class="token punctuation">.</span><span class="token function">getAccessKeySecret</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token comment">// 访问的域名</span>
            <span class="token punctuation">.</span><span class="token function">setEndpoint</span><span class="token punctuation">(</span>smsProperties<span class="token punctuation">.</span><span class="token function">getEndpoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Client</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">SmsResult</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token class-name">String</span> phones<span class="token punctuation">,</span> <span class="token class-name">String</span> templateId<span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> param<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isBlank</span><span class="token punctuation">(</span>phones<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">SmsException</span><span class="token punctuation">(</span><span class="token string">&quot;手机号不能为空&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isBlank</span><span class="token punctuation">(</span>templateId<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">SmsException</span><span class="token punctuation">(</span><span class="token string">&quot;模板ID不能为空&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">SendSmsRequest</span> req <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SendSmsRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">setPhoneNumbers</span><span class="token punctuation">(</span>phones<span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">setSignName</span><span class="token punctuation">(</span>properties<span class="token punctuation">.</span><span class="token function">getSignName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">setTemplateCode</span><span class="token punctuation">(</span>templateId<span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">setTemplateParam</span><span class="token punctuation">(</span><span class="token class-name">JsonUtils</span><span class="token punctuation">.</span><span class="token function">toJsonString</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">SendSmsResponse</span> resp <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">sendSms</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token class-name">SmsResult</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">isSuccess</span><span class="token punctuation">(</span><span class="token string">&quot;OK&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">message</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token class-name">JsonUtils</span><span class="token punctuation">.</span><span class="token function">toJsonString</span><span class="token punctuation">(</span>resp<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">SmsException</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>腾讯模板</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Tencent 短信模板
 *
 * <span class="token keyword">@author</span> Lion Li
 * <span class="token keyword">@version</span> 4.2.0
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TencentSmsTemplate</span> <span class="token keyword">implements</span> <span class="token class-name">SmsTemplate</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">SmsProperties</span> properties<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">SmsClient</span> client<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@SneakyThrows</span><span class="token punctuation">(</span><span class="token class-name">Exception</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">TencentSmsTemplate</span><span class="token punctuation">(</span><span class="token class-name">SmsProperties</span> smsProperties<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>properties <span class="token operator">=</span> smsProperties<span class="token punctuation">;</span>
        <span class="token class-name">Credential</span> credential <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Credential</span><span class="token punctuation">(</span>smsProperties<span class="token punctuation">.</span><span class="token function">getAccessKeyId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> smsProperties<span class="token punctuation">.</span><span class="token function">getAccessKeySecret</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">HttpProfile</span> httpProfile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HttpProfile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        httpProfile<span class="token punctuation">.</span><span class="token function">setEndpoint</span><span class="token punctuation">(</span>smsProperties<span class="token punctuation">.</span><span class="token function">getEndpoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ClientProfile</span> clientProfile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClientProfile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        clientProfile<span class="token punctuation">.</span><span class="token function">setHttpProfile</span><span class="token punctuation">(</span>httpProfile<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SmsClient</span><span class="token punctuation">(</span>credential<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> clientProfile<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">SmsResult</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token class-name">String</span> phones<span class="token punctuation">,</span> <span class="token class-name">String</span> templateId<span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> param<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isBlank</span><span class="token punctuation">(</span>phones<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">SmsException</span><span class="token punctuation">(</span><span class="token string">&quot;手机号不能为空&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isBlank</span><span class="token punctuation">(</span>templateId<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">SmsException</span><span class="token punctuation">(</span><span class="token string">&quot;模板ID不能为空&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">SendSmsRequest</span> req <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SendSmsRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> set <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>phones<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>p <span class="token operator">-&gt;</span> <span class="token string">&quot;+86&quot;</span> <span class="token operator">+</span> p<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        req<span class="token punctuation">.</span><span class="token function">setPhoneNumberSet</span><span class="token punctuation">(</span><span class="token class-name">ArrayUtil</span><span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span>set<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">CollUtil</span><span class="token punctuation">.</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            req<span class="token punctuation">.</span><span class="token function">setTemplateParamSet</span><span class="token punctuation">(</span><span class="token class-name">ArrayUtil</span><span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span>param<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        req<span class="token punctuation">.</span><span class="token function">setTemplateID</span><span class="token punctuation">(</span>templateId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        req<span class="token punctuation">.</span><span class="token function">setSign</span><span class="token punctuation">(</span>properties<span class="token punctuation">.</span><span class="token function">getSignName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        req<span class="token punctuation">.</span><span class="token function">setSmsSdkAppid</span><span class="token punctuation">(</span>properties<span class="token punctuation">.</span><span class="token function">getSdkAppId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">SendSmsResponse</span> resp <span class="token operator">=</span> <span class="token class-name"><span class="token namespace">client<span class="token punctuation">.</span></span>SendSms</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">SmsResult<span class="token punctuation">.</span>SmsResultBuilder</span> builder <span class="token operator">=</span> <span class="token class-name">SmsResult</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">isSuccess</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token string">&quot;send success&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token class-name">JsonUtils</span><span class="token punctuation">.</span><span class="token function">toJsonString</span><span class="token punctuation">(</span>resp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">SendStatus</span> sendStatus <span class="token operator">:</span> resp<span class="token punctuation">.</span><span class="token function">getSendStatusSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token string">&quot;Ok&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>sendStatus<span class="token punctuation">.</span><span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    builder<span class="token punctuation">.</span><span class="token function">isSuccess</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">message</span><span class="token punctuation">(</span>sendStatus<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> builder<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">SmsException</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","manage-system-sms.html.vue"]]);export{k as default};