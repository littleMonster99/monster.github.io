import{_ as a,W as s,X as e,a0 as n}from"./framework-f64bc974.js";const t={},o=n(`<h1 id="达梦数据库-sql创建用户与授权" tabindex="-1"><a class="header-anchor" href="#达梦数据库-sql创建用户与授权" aria-hidden="true">#</a> 达梦数据库-SQL创建用户与授权</h1><h2 id="_1-创建用户" tabindex="-1"><a class="header-anchor" href="#_1-创建用户" aria-hidden="true">#</a> 1. 创建用户</h2><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>create tablespace &quot;TEST&quot; datafile &#39;/mypath/TEST.DBF&#39; size 180 autoextend on maxsize 16777215 CACHE = NORMAL;
create user &quot;TEST&quot; identified by &quot;mypassword&quot; limit failed_login_attemps 3, password_lock_time 1, password_grace_time 10 default tablespace &quot;TEST&quot; default index tablespace &quot;TEST&quot;;
grant &quot;DBA&quot;,&quot;RESOURCE&quot;,&quot;PUBLIC&quot;,&quot;SOI&quot; to &quot;TEST&quot;;
grant CREATE SCHEMA,CREATE TABLE,CREATE VIEW,CREATE PROCEDURE,CREATE SEQUENCE,CREATE TRIGGER,CREATE INDEX,CREATE CONTEXT INDEX,CREATE LINK to &quot;TEST&quot;;
CREATE SCHEMA &quot;TEST&quot; AUTHORIZATION &quot;TEST&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-给其他用户授权" tabindex="-1"><a class="header-anchor" href="#_2-给其他用户授权" aria-hidden="true">#</a> 2. 给其他用户授权</h2><p>将A用户的视图授权给B用户</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">user</span> <span class="token string">&quot;B&quot;</span> identified <span class="token keyword">by</span> <span class="token string">&quot;mypassword&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">grant</span> <span class="token keyword">select</span> <span class="token keyword">on</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">.</span>V_SYS_USER <span class="token keyword">to</span> B <span class="token punctuation">;</span>
<span class="token keyword">grant</span> <span class="token keyword">select</span> <span class="token keyword">on</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">.</span>V_SYS_DEPT <span class="token keyword">to</span> B <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),i=[o];function d(r,l){return s(),e("div",null,i)}const u=a(t,[["render",d],["__file","dm-operation-create-user.html.vue"]]);export{u as default};
