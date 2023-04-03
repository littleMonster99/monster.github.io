import{_ as a,W as e,X as p,Y as s,Z as t,$ as o,a0 as c,D as l}from"./framework-f64bc974.js";const i={},k=c(`<h1 id="消息中心数据库设计" tabindex="-1"><a class="header-anchor" href="#消息中心数据库设计" aria-hidden="true">#</a> 消息中心数据库设计</h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景" aria-hidden="true">#</a> 1. 背景</h2><p>消息中心是大部分系统都有的功能，如何设计一个合理的消息系统呢？</p><p>需求：</p><ul><li>每个用户收到消息都应该知道，该消息的已读未读状态</li></ul><h2 id="_2-数据库设计" tabindex="-1"><a class="header-anchor" href="#_2-数据库设计" aria-hidden="true">#</a> 2. 数据库设计</h2><h3 id="_2-1-消息表" tabindex="-1"><a class="header-anchor" href="#_2-1-消息表" aria-hidden="true">#</a> 2.1 消息表</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> T_SYS_NOTIFY<span class="token punctuation">(</span>
    ID <span class="token keyword">BIGINT</span><span class="token punctuation">(</span><span class="token number">19</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span>  <span class="token keyword">COMMENT</span> <span class="token string">&#39;主键&#39;</span> <span class="token punctuation">,</span>
    <span class="token keyword">TYPE</span> <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>    <span class="token keyword">COMMENT</span> <span class="token string">&#39;操作类型，1 系统通知，2，用户消息&#39;</span> <span class="token punctuation">,</span>
    TITLE <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span>    <span class="token keyword">COMMENT</span> <span class="token string">&#39;标题&#39;</span> <span class="token punctuation">,</span>
    CONTENT <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">512</span><span class="token punctuation">)</span>    <span class="token keyword">COMMENT</span> <span class="token string">&#39;通知内容&#39;</span> <span class="token punctuation">,</span>
    CREATE_BY <span class="token keyword">BIGINT</span><span class="token punctuation">(</span><span class="token number">19</span><span class="token punctuation">)</span>    <span class="token keyword">COMMENT</span> <span class="token string">&#39;创建人&#39;</span> <span class="token punctuation">,</span>
    CREATE_TIME <span class="token keyword">DATETIME</span>    <span class="token keyword">COMMENT</span> <span class="token string">&#39;创建时间&#39;</span> <span class="token punctuation">,</span>
    REMARK <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span>    <span class="token keyword">COMMENT</span> <span class="token string">&#39;备注&#39;</span> <span class="token punctuation">,</span>
    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>ID<span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">COMMENT</span> <span class="token operator">=</span> <span class="token string">&#39;系统消息表 &#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基础的消息表如上</p><h4 id="_2-1-1-消息表补充" tabindex="-1"><a class="header-anchor" href="#_2-1-1-消息表补充" aria-hidden="true">#</a> 2.1.1 消息表补充</h4><p>如果需要记录</p><ul><li><p>该条提醒<strong>所关联的对象</strong></p></li><li><p>该条提醒<strong>所关联的动作</strong></p></li></ul><p>例如</p><ul><li>小明喜欢了文章， <ul><li>喜欢是：action</li><li>那篇文章：target，targetType</li></ul></li></ul><p>则需要新增<code>target</code>、<code>targetType</code>、<code>action</code>字段。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> T_SYS_NOTIFY <span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> target <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span>     <span class="token keyword">COMMENT</span> <span class="token string">&#39;目标的ID&#39;</span> <span class="token keyword">AFTER</span> CONTENT<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> T_SYS_NOTIFY <span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> targetType <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span>     <span class="token keyword">COMMENT</span> <span class="token string">&#39;目标的类型&#39;</span> <span class="token keyword">AFTER</span> target<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> T_SYS_NOTIFY <span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> <span class="token keyword">action</span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span>     <span class="token keyword">COMMENT</span> <span class="token string">&#39;提醒信息的动作类型&#39;</span> <span class="token keyword">AFTER</span> targetType<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-用户消息表" tabindex="-1"><a class="header-anchor" href="#_2-2-用户消息表" aria-hidden="true">#</a> 2.2 用户消息表</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> T_SYS_USER_NOTIFY<span class="token punctuation">(</span>
    ID <span class="token keyword">BIGINT</span><span class="token punctuation">(</span><span class="token number">19</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span>  <span class="token keyword">COMMENT</span> <span class="token string">&#39;主键&#39;</span> <span class="token punctuation">,</span>
    NOTIFY_ID <span class="token keyword">BIGINT</span><span class="token punctuation">(</span><span class="token number">19</span><span class="token punctuation">)</span>    <span class="token keyword">COMMENT</span> <span class="token string">&#39;通知id&#39;</span> <span class="token punctuation">,</span>
    USER_ID <span class="token keyword">BIGINT</span><span class="token punctuation">(</span><span class="token number">19</span><span class="token punctuation">)</span>    <span class="token keyword">COMMENT</span> <span class="token string">&#39;用户id&#39;</span> <span class="token punctuation">,</span>
    IS_READ <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>    <span class="token keyword">COMMENT</span> <span class="token string">&#39;是否已读&#39;</span> <span class="token punctuation">,</span>
    CREATE_TIME <span class="token keyword">DATETIME</span>    <span class="token keyword">COMMENT</span> <span class="token string">&#39;创建时间&#39;</span> <span class="token punctuation">,</span>
    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>ID<span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">COMMENT</span> <span class="token operator">=</span> <span class="token string">&#39;用户消息表 &#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,19),r={href:"https://www.jianshu.com/p/6bf8166b291c",target:"_blank",rel:"noopener noreferrer"};function d(u,T){const n=l("ExternalLinkIcon");return e(),p("div",null,[k,s("p",null,[s("a",r,[t("消息系统设计与实现「下篇」"),o(n)])])])}const w=a(i,[["render",d],["__file","message-system-db-design.html.vue"]]);export{w as default};
