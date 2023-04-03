import{_ as a,W as e,X as t,Y as s,Z as p,$ as o,a0 as l,D as c}from"./framework-f64bc974.js";const r={},i=l(`<h1 id="mybatis问题-mybatis是如何防止sql注入的" tabindex="-1"><a class="header-anchor" href="#mybatis问题-mybatis是如何防止sql注入的" aria-hidden="true">#</a> MyBatis问题 - Mybatis是如何防止SQL注入的</h1><h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入" aria-hidden="true">#</a> 1.引入</h2><p><strong>1、首先看一下下面两个sql语句的区别：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&lt;</span><span class="token keyword">select</span> id<span class="token operator">=</span><span class="token string">&quot;selectByNameAndPassword&quot;</span> parameterType<span class="token operator">=</span><span class="token string">&quot;java.util.Map&quot;</span> resultMap<span class="token operator">=</span><span class="token string">&quot;BaseResultMap&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">select</span> id<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">,</span> role
<span class="token keyword">from</span> <span class="token keyword">user</span>
<span class="token keyword">where</span> username <span class="token operator">=</span> <span class="token comment">#{username,jdbcType=VARCHAR}</span>
<span class="token operator">and</span> password <span class="token operator">=</span> <span class="token comment">#{password,jdbcType=VARCHAR}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span><span class="token keyword">select</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&lt;</span><span class="token keyword">select</span> id<span class="token operator">=</span><span class="token string">&quot;selectByNameAndPassword&quot;</span> parameterType<span class="token operator">=</span><span class="token string">&quot;java.util.Map&quot;</span> resultMap<span class="token operator">=</span><span class="token string">&quot;BaseResultMap&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">select</span> id<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">,</span> role
<span class="token keyword">from</span> <span class="token keyword">user</span>
<span class="token keyword">where</span> username <span class="token operator">=</span> \${username<span class="token punctuation">,</span>jdbcType<span class="token operator">=</span><span class="token keyword">VARCHAR</span>}
<span class="token operator">and</span> password <span class="token operator">=</span> \${password<span class="token punctuation">,</span>jdbcType<span class="token operator">=</span><span class="token keyword">VARCHAR</span>}
<span class="token operator">&lt;</span><span class="token operator">/</span><span class="token keyword">select</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-mybatis中的-和-的区别" tabindex="-1"><a class="header-anchor" href="#_1-1-mybatis中的-和-的区别" aria-hidden="true">#</a> 1.1 <strong>mybatis中的#和$的区别：</strong></h3><ol><li>#将传入的数据都当成一个字符串，会对自动传入的数据加一个双引号。 如：where username=#{username}，如果传入的值是111,那么解析成sql时的值为where username=&quot;111&quot;, 如果传入的值是id，则解析成的sql为where username=&quot;id&quot;.</li><li>$将传入的数据直接显示生成在sql中。 如：where username=\${username}，如果传入的值是111,那么解析成sql时的值为where username=111； 如果传入的值是：drop table user;，则解析成的sql为：select id, username, password, role from user where username=;drop table user;</li><li>#方式能够很大程度防止sql注入，$方式无法防止Sql注入。</li><li>$方式一般用于传入数据库对象，例如传入表名.</li><li>一般能用#的就别用$，若不得不使用“\${xxx}”这样的参数，要手工地做好过滤工作，来防止sql注入攻击。</li><li>在MyBatis中，“\${xxx}”这样格式的参数会直接参与SQL编译，从而不能避免注入攻击。但涉及到动态表名和列名时，只能使用“\${xxx}”这样的参数格式。所以，这样的参数需要我们在代码中手工进行处理来防止注入。</li></ol><blockquote><p>【结论】在编写MyBatis的映射语句时，尽量采用“#{xxx}”这样的格式。若不得不使用“\${xxx}”这样的参数，要手工地做好过滤工作，来防止SQL注入攻击。</p></blockquote><h2 id="_2-什么是sql注入" tabindex="-1"><a class="header-anchor" href="#_2-什么是sql注入" aria-hidden="true">#</a> 2. 什么是sql注入</h2><blockquote><p>sql注入解释：是一种代码注入技术，用于攻击数据驱动的应用，恶意的SQL语句被插入到执行的实体字段中（例如，为了转储数据库内容给攻击者）</p></blockquote><p><strong>SQL注入</strong>，大家都不陌生，是一种常见的攻击方式。<strong>攻击者</strong>在界面的表单信息或URL上输入一些奇怪的SQL片段（例如“or ‘1’=’1’”这样的语句），有可能入侵<strong>参数检验不足</strong>的应用程序。所以，在我们的应用中需要做一些工作，来防备这样的攻击方式。在一些安全性要求很高的应用中（比如银行软件），经常使用将<strong>SQL语句</strong>全部替换为<strong>存储过程</strong>这样的方式，来防止SQL注入。这当然是<strong>一种很安全的方式</strong>，但我们平时开发中，可能不需要这种死板的方式。</p><h2 id="_3-mybatis是如何做到防止sql注入的" tabindex="-1"><a class="header-anchor" href="#_3-mybatis是如何做到防止sql注入的" aria-hidden="true">#</a> 3. mybatis是如何做到防止sql注入的</h2><p>MyBatis框架作为一款半自动化的持久层框架，其SQL语句都要我们自己手动编写，这个时候当然需要防止SQL注入。其实，MyBatis的SQL是一个具有“<strong>输入+输出</strong>”的功能，类似于函数的结构，参考上面的两个例子。其中，parameterType表示了输入的参数类型，resultType表示了输出的参数类型。回应上文，如果我们想防止SQL注入，理所当然地要在输入参数上下功夫。上面代码中使用#的即输入参数在SQL中拼接的部分，传入参数后，打印出执行的SQL语句，会看到SQL是这样的：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> id<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">,</span> role <span class="token keyword">from</span> <span class="token keyword">user</span> <span class="token keyword">where</span> username<span class="token operator">=</span>? <span class="token operator">and</span> password<span class="token operator">=</span>?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不管输入什么参数，打印出的SQL都是这样的。这是因为MyBatis启用了预编译功能，在SQL执行前，会先将上面的SQL发送给数据库进行编译；执行时，直接使用编译好的SQL，替换占位符“?”就可以了。因为SQL注入只能对编译过程起作用，所以这样的方式就很好地避免了SQL注入的问题。</p><h3 id="_3-1-底层实现原理" tabindex="-1"><a class="header-anchor" href="#_3-1-底层实现原理" aria-hidden="true">#</a> 3.1 底层实现原理</h3><p>MyBatis是如何做到SQL预编译的呢？其实在框架底层，是JDBC中的PreparedStatement类在起作用，PreparedStatement是我们很熟悉的Statement的子类，它的对象包含了编译好的SQL语句。这种“准备好”的方式不仅能提高安全性，而且在多次执行同一个SQL时，能够提高效率。原因是SQL已编译好，再次执行时无需再编译。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//安全的，预编译了的</span>
<span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token function">getConn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//获得连接</span>
<span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select id, username, password, role from user where id=?&quot;</span><span class="token punctuation">;</span> <span class="token comment">//执行sql前会预编译号该条语句</span>
<span class="token class-name">PreparedStatement</span> pstmt <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span> 
pstmt<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token class-name">ResultSet</span> rs<span class="token operator">=</span>pstmt<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//不安全的，没进行预编译</span>
<span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">getNameByUserId</span><span class="token punctuation">(</span><span class="token class-name">String</span> userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token function">getConn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//获得连接</span>
    <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select id,username,password,role from user where id=&quot;</span> <span class="token operator">+</span> id<span class="token punctuation">;</span>
    <span class="token comment">//当id参数为&quot;3;drop table user;&quot;时，执行的sql语句如下:</span>
    <span class="token comment">//select id,username,password,role from user where id=3; drop table user;  </span>
    <span class="token class-name">PreparedStatement</span> pstmt <span class="token operator">=</span>  conn<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ResultSet</span> rs<span class="token operator">=</span>pstmt<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-结论" tabindex="-1"><a class="header-anchor" href="#_3-2-结论" aria-hidden="true">#</a> 3.2 结论</h3><p>#{}：相当于JDBC中的PreparedStatement</p><p>\${}：是输出变量的值</p><p>简单说，#{}是经过预编译的，是安全的；\${}是未经过预编译的，仅仅是取变量的值，是非安全的，存在SQL注入。 如果我们order by语句后用了\${}，那么不做任何处理的时候是存在SQL注入危险的。你说怎么防止，那我只能悲惨的告诉你，你得手动处理过滤一下输入的内容。如判断一下输入的参数的长度是否正常（注入语句一般很长），更精确的过滤则可以查询一下输入的参数是否在预期的参数集合中。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,24),u={href:"https://zhuanlan.zhihu.com/p/39408398",target:"_blank",rel:"noopener noreferrer"};function d(k,m){const n=c("ExternalLinkIcon");return e(),t("div",null,[i,s("p",null,[s("a",u,[p("mybatis是如何防止SQL注入的"),o(n)])])])}const b=a(r,[["render",d],["__file","mybatis-z-injection.html.vue"]]);export{b as default};
