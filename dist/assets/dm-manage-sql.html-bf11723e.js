import{_ as a,W as e,X as p,Y as s,Z as o,$ as t,a0 as c,D as l}from"./framework-f64bc974.js";const r={},k=c(`<h1 id="达梦数据库管理常用-sql-命令" tabindex="-1"><a class="header-anchor" href="#达梦数据库管理常用-sql-命令" aria-hidden="true">#</a> 达梦数据库管理常用 SQL 命令</h1><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--查询数据库版本</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span>  v$version<span class="token punctuation">;</span>

<span class="token comment">--查询授权信息</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span>  v$license<span class="token punctuation">;</span>

<span class="token comment">--查询服务器信息</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span>  V$SYSTEMINFO<span class="token punctuation">;</span>

<span class="token comment">--查询会话连接信息</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span>  v$sessions<span class="token punctuation">;</span>

<span class="token keyword">select</span>  <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">,</span>state <span class="token keyword">from</span> v$sessions <span class="token keyword">group</span> <span class="token keyword">by</span> state<span class="token punctuation">;</span>
<span class="token keyword">select</span>  <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">,</span>clnt_ip <span class="token keyword">from</span> v$sessions <span class="token keyword">group</span> <span class="token keyword">by</span> clnt_ip<span class="token punctuation">;</span>

<span class="token comment">--查看数据库服务器配置参数</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span>  v$dm_ini<span class="token punctuation">;</span>

<span class="token comment">--查询最近的 SQL 执行记录</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span>  v$sql_history<span class="token punctuation">;</span>

<span class="token comment">--查询某个用户下所有的表</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span>  user_tables<span class="token punctuation">;</span> <span class="token comment">--查询当前用户下所有的表</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span>  all_tables <span class="token keyword">where</span> owner<span class="token operator">=</span>’TEST’<span class="token punctuation">;</span> <span class="token comment">--dba 用户查询某个模式下的所有表</span>

<span class="token comment">--查询某个用户下所有表字段</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span>  all_tab_cols <span class="token keyword">where</span> owner<span class="token operator">=</span>’TEST’<span class="token punctuation">;</span>

<span class="token comment">--查看表注释</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span>  ALL_TAB_COMMENTS <span class="token keyword">where</span> ower<span class="token operator">=</span>’TEST’<span class="token punctuation">;</span>

<span class="token comment">--查看字段注释</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span>  ALL_COL_COMMENTS <span class="token keyword">where</span> ower<span class="token operator">=</span>’TEST’<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token string">&#39;实例名称&#39;</span> 数据库选项<span class="token punctuation">,</span>INSTANCE_NAME 数据库集群相关参数值 <span class="token keyword">FROM</span> v$instance <span class="token keyword">union</span> <span class="token keyword">all</span>

<span class="token keyword">select</span> <span class="token string">&#39;数据库版本&#39;</span><span class="token punctuation">,</span>substr<span class="token punctuation">(</span>svr_version<span class="token punctuation">,</span>instr<span class="token punctuation">(</span>svr_version<span class="token punctuation">,</span><span class="token string">&#39;(&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">FROM</span> v$instance <span class="token keyword">union</span> <span class="token keyword">all</span>   <span class="token keyword">SELECT</span> <span class="token string">&#39;字符集&#39;</span><span class="token punctuation">,</span><span class="token keyword">CASE</span> SF_GET_UNICODE_FLAG<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">WHEN</span> <span class="token string">&#39;0&#39;</span> <span class="token keyword">THEN</span> <span class="token string">&#39;GBK18030&#39;</span> <span class="token keyword">WHEN</span> <span class="token string">&#39;1&#39;</span> <span class="token keyword">then</span> <span class="token string">&#39;UTF-8&#39;</span> <span class="token keyword">when</span> <span class="token string">&#39;2&#39;</span> <span class="token keyword">then</span> <span class="token string">&#39;EUC-KR&#39;</span> <span class="token keyword">end</span> <span class="token keyword">union</span> <span class="token keyword">all</span>

<span class="token keyword">SELECT</span> <span class="token string">&#39;页大小&#39;</span><span class="token punctuation">,</span>cast<span class="token punctuation">(</span>PAGE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">1024</span> <span class="token keyword">as</span> <span class="token keyword">varchar</span><span class="token punctuation">)</span> <span class="token keyword">union</span> <span class="token keyword">all</span>   <span class="token keyword">SELECT</span> <span class="token string">&#39;簇大小&#39;</span><span class="token punctuation">,</span>cast<span class="token punctuation">(</span>SF_GET_EXTENT_SIZE<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token keyword">varchar</span><span class="token punctuation">)</span> <span class="token keyword">union</span> <span class="token keyword">all</span>

<span class="token keyword">SELECT</span> <span class="token string">&#39;大小写敏感&#39;</span><span class="token punctuation">,</span>cast<span class="token punctuation">(</span>SF_GET_CASE_SENSITIVE_FLAG<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token keyword">varchar</span><span class="token punctuation">)</span> <span class="token keyword">union</span> <span class="token keyword">all</span>

<span class="token keyword">select</span> <span class="token string">&#39;数据库模式&#39;</span><span class="token punctuation">,</span><span class="token keyword">MODE</span>$ <span class="token keyword">from</span> v$instance <span class="token keyword">union</span> <span class="token keyword">all</span>

<span class="token keyword">select</span> <span class="token string">&#39;唯一魔数&#39;</span><span class="token punctuation">,</span>cast<span class="token punctuation">(</span>permanent_magic <span class="token keyword">as</span> <span class="token keyword">varchar</span><span class="token punctuation">)</span> <span class="token keyword">union</span> <span class="token keyword">all</span>

<span class="token keyword">select</span> <span class="token string">&#39;LSN&#39;</span><span class="token punctuation">,</span>cast<span class="token punctuation">(</span>cur_lsn <span class="token keyword">as</span> <span class="token keyword">varchar</span><span class="token punctuation">)</span> <span class="token keyword">from</span> v$rlog<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,3),i={href:"https://www.modb.pro/db/34627",target:"_blank",rel:"noopener noreferrer"};function d(u,v){const n=l("ExternalLinkIcon");return e(),p("div",null,[k,s("p",null,[s("a",i,[o("DM达梦数据库管理常用 SQL 命令"),t(n)])])])}const w=a(r,[["render",d],["__file","dm-manage-sql.html.vue"]]);export{w as default};
