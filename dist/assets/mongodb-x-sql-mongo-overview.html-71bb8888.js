import{_ as l,W as t,X as s,Y as e,Z as n,$ as d,a0 as i,D as r}from"./framework-f64bc974.js";const o={},u=e("h1",{id:"从sql到mongodb之概念篇",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#从sql到mongodb之概念篇","aria-hidden":"true"},"#"),n(" 从SQL到MongoDB之概念篇")],-1),c=e("h2",{id:"_1-概念对应关系",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-概念对应关系","aria-hidden":"true"},"#"),n(" 1. 概念对应关系")],-1),v=e("p",null,"SQL 术语和概念以及相应的 MongoDB 术语和概念.",-1),p=e("p",null,"下表介绍了各种 SQL 术语和概念以及相应的 MongoDB 术语和概念.",-1),m=e("thead",null,[e("tr",null,[e("th",null,"SQL术语/概念"),e("th",null,"MongoDB 术语/概念")])],-1),b=e("td",null,"database",-1),h={href:"https://docs.mongodb.com/manual/reference/glossary/#term-database",target:"_blank",rel:"noopener noreferrer"},g=e("td",null,"table",-1),_={href:"https://docs.mongodb.com/manual/reference/glossary/#term-collection",target:"_blank",rel:"noopener noreferrer"},x=e("td",null,"row",-1),E={href:"https://docs.mongodb.com/manual/reference/glossary/#term-document",target:"_blank",rel:"noopener noreferrer"},f={href:"https://docs.mongodb.com/manual/reference/glossary/#term-bson",target:"_blank",rel:"noopener noreferrer"},L=e("td",null,"column",-1),S={href:"https://docs.mongodb.com/manual/reference/glossary/#term-field",target:"_blank",rel:"noopener noreferrer"},M=e("td",null,"index",-1),T={href:"https://docs.mongodb.com/manual/reference/glossary/#term-index",target:"_blank",rel:"noopener noreferrer"},q=e("td",null,"table joins （表联接）",-1),k={href:"https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/#pipe._S_lookup",target:"_blank",rel:"noopener noreferrer"},D=e("code",null,"embedded documents （嵌入式文档）",-1),A=e("td",null,"primary key 指定任何唯一的列或者列组合作为主键",-1),R={href:"https://docs.mongodb.com/manual/reference/glossary/#term-primary-key",target:"_blank",rel:"noopener noreferrer"},y={href:"https://docs.mongodb.com/manual/reference/glossary/#term-id",target:"_blank",rel:"noopener noreferrer"},C=e("td",null,"aggregation (如：group by)",-1),B=e("code",null,"aggregation pipeline （聚合管道）",-1),O={href:"https://docs.mongodb.com/manual/reference/sql-aggregation-comparison/",target:"_blank",rel:"noopener noreferrer"},I=e("td",null,"SELECT INTO NEW_TABLE",-1),N={href:"https://docs.mongodb.com/manual/reference/operator/aggregation/out/#pipe._S_out",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://docs.mongodb.com/manual/reference/sql-aggregation-comparison/",target:"_blank",rel:"noopener noreferrer"},$=e("td",null,"MERGE INTO TABLE",-1),j={href:"https://docs.mongodb.com/manual/reference/operator/aggregation/merge/#pipe._S_merge",target:"_blank",rel:"noopener noreferrer"},P={href:"https://docs.mongodb.com/manual/reference/sql-aggregation-comparison/",target:"_blank",rel:"noopener noreferrer"},U=e("td",null,"transactions",-1),W={href:"https://docs.mongodb.com/manual/core/transactions/",target:"_blank",rel:"noopener noreferrer"},F=i(`<blockquote><p>TIP</p><p><em>在许多情况下，</em> <code>非规范化数据模型（嵌入式文档和数组） denormalized data model (embedded documents and arrays)</code> <em>将继续是您数据和用例的最佳选择，而不是多文档事务. 也就是说，对于许多场景，对数据进行适当的建模将最大限度地减少对</em> <code>多文档事务（multi-document transactions）</code><em>的需求。</em></p></blockquote><h2 id="_2-可执行文件" tabindex="-1"><a class="header-anchor" href="#_2-可执行文件" aria-hidden="true">#</a> 2. 可执行文件</h2><p>下表显示了一些数据库可执行文件和相应的 MongoDB 可执行文件。 这张表并不是详尽无遗的。</p><table><thead><tr><th></th><th>MongoDB</th><th>MySQL</th><th>Oracle</th><th>Informix</th><th>DB2</th></tr></thead><tbody><tr><td>Database Server</td><td>mongod</td><td>mysqld</td><td>oracle</td><td>IDS</td><td>DB2 Server</td></tr><tr><td>Database Client</td><td>mongo</td><td>mysql</td><td>sqlplus</td><td>DB-Access</td><td>DB2 Client</td></tr></tbody></table><h2 id="_3-示例" tabindex="-1"><a class="header-anchor" href="#_3-示例" aria-hidden="true">#</a> 3. 示例</h2><p>下表显示了各种 SQL 语句和相应的 MongoDB 语句。 表中的例子假定以下条件:</p><ul><li>Sql 示例假设一个名为 people 的表。</li><li>MongoDB 的示例假定一个名为 people 的集合包含以下原型的文档：</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token function">ObjectId</span><span class="token punctuation">(</span><span class="token string">&quot;509a8fb2f3f4948bd2f983a0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">user_id</span><span class="token operator">:</span> <span class="token string">&quot;abc123&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">55</span><span class="token punctuation">,</span>
  <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;A&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-create-and-alter" tabindex="-1"><a class="header-anchor" href="#_3-1-create-and-alter" aria-hidden="true">#</a> 3.1 Create and Alter</h3><h4 id="_3-1-1-create-table" tabindex="-1"><a class="header-anchor" href="#_3-1-1-create-table" aria-hidden="true">#</a> 3.1.1 CREATE TABLE</h4><ul><li>SQL 模式语句：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE TABLE people (
    id MEDIUMINT NOT NULL
        AUTO_INCREMENT,
    user_id Varchar(30),
    age Number,
    status char(1),
    PRIMARY KEY (id)
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>MongoDB 模式语句：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.people.insertOne( {
    user_id: &quot;abc123&quot;,
    age: 55,
    status: &quot;A&quot;
 } )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-1-2-alter-table-add" tabindex="-1"><a class="header-anchor" href="#_3-1-2-alter-table-add" aria-hidden="true">#</a> 3.1.2 ALTER TABLE / ADD</h4><ul><li>SQL模式语句：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER TABLE people
ADD join_date DATETIME
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>MongoDB 模式语句：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.people.updateMany(
    { },
    { $set: { join_date: new Date() } }
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>集合不描述或强制执行其文档的结构；也就是说，在集合级别上没有结构上的改变。</p>`,20),H={href:"https://docs.mongodb.com/manual/reference/method/db.collection.updateMany/#db.collection.updateMany",target:"_blank",rel:"noopener noreferrer"},w={href:"https://docs.mongodb.com/manual/reference/operator/update/set/#up._S_set",target:"_blank",rel:"noopener noreferrer"},X=i(`<h4 id="_3-1-3-alter-table-drop-column" tabindex="-1"><a class="header-anchor" href="#_3-1-3-alter-table-drop-column" aria-hidden="true">#</a> 3.1.3 ALTER TABLE / DROP COLUMN</h4><ul><li>SQL模式语句：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER TABLE people
DROP COLUMN join_date
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>MongoDB 模式语句：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.people.updateMany(
    { },
    { $unset: { &quot;join_date&quot;: &quot;&quot; } }
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>集合不描述或强制执行其文档的结构；也就是说，在集合级别上没有结构上的改变。</p>`,6),V={href:"https://docs.mongodb.com/manual/reference/method/db.collection.updateMany/#db.collection.updateMany",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://docs.mongodb.com/manual/reference/operator/update/unset/#up._S_unset",target:"_blank",rel:"noopener noreferrer"},K=i(`<h4 id="_3-1-4-create-index" tabindex="-1"><a class="header-anchor" href="#_3-1-4-create-index" aria-hidden="true">#</a> 3.1.4 CREATE INDEX</h4><ul><li>SQL 模式语句：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE INDEX idx_user_id_asc
ON people(user_id)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>MongoDB 模式语句：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.people.createIndex( { user_id: 1 } )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-1-5-create-index-multi" tabindex="-1"><a class="header-anchor" href="#_3-1-5-create-index-multi" aria-hidden="true">#</a> 3.1.5 CREATE INDEX / Multi</h4><ul><li>SQL模式语句：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE INDEX
       idx_user_id_asc_age_desc
ON people(user_id, age DESC)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>MongoDB 模式语句：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.people.createIndex( { user_id: 1, age: -1 } )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-1-6-drop-table" tabindex="-1"><a class="header-anchor" href="#_3-1-6-drop-table" aria-hidden="true">#</a> 3.1.6 DROP TABLE</h4><ul><li>SQL模式语句：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DROP TABLE people
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>MongoDB 模式语句：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.people.drop()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-2-insert" tabindex="-1"><a class="header-anchor" href="#_3-2-insert" aria-hidden="true">#</a> 3.2 Insert</h3><p>下表显示了与向表中插入记录相关的各种 SQL 语句以及相应的 MongoDB 语句。</p><ul><li>SQL INSERT 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>INSERT INTO people(user_id,
                  age,
                  status)
VALUES (&quot;bcd001&quot;,
        45,
        &quot;A&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mongodb insertOne() 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.people.insertOne(
   { user_id: &quot;bcd001&quot;, age: 45, status: &quot;A&quot; }
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-select" tabindex="-1"><a class="header-anchor" href="#_3-3-select" aria-hidden="true">#</a> 3.3 Select</h3><p>下表显示了与从表中读取记录相关的各种 SQL 语句以及相应的 MongoDB 语句。</p>`,23),z=e("p",null,"NOTE：",-1),G={href:"https://docs.mongodb.com/manual/reference/method/db.collection.find/#db.collection.find",target:"_blank",rel:"noopener noreferrer"},Z=e("code",null,"_id",-1),J={href:"https://docs.mongodb.com/manual/tutorial/project-fields-from-query-results/#projection",target:"_blank",rel:"noopener noreferrer"},ee=e("code",null,"_id",-1),ne={href:"https://docs.mongodb.com/manual/reference/method/db.collection.find/#db.collection.find",target:"_blank",rel:"noopener noreferrer"},ae=i(`<h4 id="_3-3-1-select-where" tabindex="-1"><a class="header-anchor" href="#_3-3-1-select-where" aria-hidden="true">#</a> 3.3.1 SELECT ... WHERE</h4><ul><li>SQL 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT user_id, status
FROM people
WHERE status = &quot;A&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mongodb 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.people.find(
    { status: &quot;A&quot; },
    { user_id: 1, status: 1, _id: 0 }
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-2-select-and" tabindex="-1"><a class="header-anchor" href="#_3-3-2-select-and" aria-hidden="true">#</a> 3.3.2 SELECT ... AND</h4><ul><li>SQL 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT *
FROM people
WHERE age &gt; 25
AND   age &lt;= 50
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mongodb 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.people.find(
   { age: { $gt: 25, $lte: 50 } }
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-3-select-or" tabindex="-1"><a class="header-anchor" href="#_3-3-3-select-or" aria-hidden="true">#</a> 3.3.3 SELECT ... OR</h4><ul><li>SQL 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT *
FROM people
WHERE status = &quot;A&quot;
OR age = 50
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mongodb 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.people.find(
    { $or: [ { status: &quot;A&quot; } , { age: 50 } ] }
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-4-select-like" tabindex="-1"><a class="header-anchor" href="#_3-3-4-select-like" aria-hidden="true">#</a> 3.3.4 SELECT ... LIKE</h4><ul><li>SQL 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>FROM people
WHERE user_id like &quot;%bc%&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mongodb 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.people.find( { user_id: /bc/ } )

-or-

db.people.find( { user_id: { $regex: /bc/ } } )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-5-select-oeder-by" tabindex="-1"><a class="header-anchor" href="#_3-3-5-select-oeder-by" aria-hidden="true">#</a> 3.3.5 SELECT ... OEDER BY</h4><ul><li>SQL 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT *
FROM people
WHERE status = &quot;A&quot;
ORDER BY user_id ASC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mongodb 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.people.find( { status: &quot;A&quot; } ).sort( { user_id: 1 } )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-3-6-select-count" tabindex="-1"><a class="header-anchor" href="#_3-3-6-select-count" aria-hidden="true">#</a> 3.3.6 SELECT ... COUNT</h4><ul><li>SQL 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT COUNT(user_id)
FROM people
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mongodb 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.people.count( { user_id: { $exists: true } } )

or

db.people.find( { user_id: { $exists: true } } ).count()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-7-select-distinct" tabindex="-1"><a class="header-anchor" href="#_3-3-7-select-distinct" aria-hidden="true">#</a> 3.3.7 SELECT DISTINCT</h4><ul><li>SQL 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT DISTINCT(status)
FROM people
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mongodb 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.people.aggregate( [ { $group : { _id : &quot;$status&quot; } } ] )

或者，对于不同的不超过 [BSON 大小限制](https://docs.mongodb.com/manual/reference/limits/#limit-bson-document-size) 的值集

db.people.distinct( &quot;status&quot; )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-8-select-limit-skip" tabindex="-1"><a class="header-anchor" href="#_3-3-8-select-limit-skip" aria-hidden="true">#</a> 3.3.8 SELECT ... LIMIT SKIP</h4><ul><li>SQL 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT *
FROM people
LIMIT 5
SKIP 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mongodb 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.people.find().limit(5).skip(10)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-3-9-explain-select" tabindex="-1"><a class="header-anchor" href="#_3-3-9-explain-select" aria-hidden="true">#</a> 3.3.9 EXPLAIN SELECT</h4><ul><li>SQL 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>EXPLAIN SELECT *
FROM people
WHERE status = &quot;A&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mongodb 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.people.find( { status: &quot;A&quot; } ).explain()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-4-update-records" tabindex="-1"><a class="header-anchor" href="#_3-4-update-records" aria-hidden="true">#</a> 3.4 Update Records</h3><p>下面显示了与更新表中现有记录相关的各种 SQL 语句以及相应的 MongoDB 语句。</p><h4 id="_3-4-1-update-set" tabindex="-1"><a class="header-anchor" href="#_3-4-1-update-set" aria-hidden="true">#</a> 3.4.1 UPDATE ... SET</h4><ul><li>SQL 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>UPDATE people
SET status = &quot;C&quot;
WHERE age &gt; 25
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mongodb 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.people.updateMany(
   { age: { $gt: 25 } },
   { $set: { status: &quot;C&quot; } }
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-4-2-update-inc" tabindex="-1"><a class="header-anchor" href="#_3-4-2-update-inc" aria-hidden="true">#</a> 3.4.2 UPDATE ... INC</h4><ul><li>SQL 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>UPDATE people
SET age = age + 3
WHERE status = &quot;A&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mongodb 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.people.updateMany(
   { status: &quot;A&quot; } ,
   { $inc: { age: 3 } }
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-delete-records" tabindex="-1"><a class="header-anchor" href="#_3-5-delete-records" aria-hidden="true">#</a> 3.5 Delete Records</h3><p>下面显示了与从表中删除记录相关的各种 SQL 语句以及相应的 MongoDB 语句。</p><h4 id="_3-5-1-delete-where" tabindex="-1"><a class="header-anchor" href="#_3-5-1-delete-where" aria-hidden="true">#</a> 3.5.1 DELETE WHERE</h4><ul><li>SQL 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE FROM people
WHERE status = &quot;D&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mongodb 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.people.deleteMany( { status: &quot;D&quot; } )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-5-2-delete" tabindex="-1"><a class="header-anchor" href="#_3-5-2-delete" aria-hidden="true">#</a> 3.5.2 DELETE</h4><ul><li>SQL 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE FROM people
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Mongodb 语句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.people.deleteMany({})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,70),de={href:"https://jelly.jd.com/exp/detail?id=5edf432cc27b86015c50187a",target:"_blank",rel:"noopener noreferrer"},ie=e("strong",null,"从 SQL 到 MongoDB 之概念篇",-1);function le(te,se){const a=r("ExternalLinkIcon");return t(),s("div",null,[u,c,v,p,e("table",null,[m,e("tbody",null,[e("tr",null,[b,e("td",null,[e("a",h,[n("database"),d(a)])])]),e("tr",null,[g,e("td",null,[e("a",_,[n("collection"),d(a)])])]),e("tr",null,[x,e("td",null,[e("a",E,[n("document "),d(a)]),n("或 "),e("a",f,[n("BSON "),d(a)]),n("document")])]),e("tr",null,[L,e("td",null,[e("a",S,[n("field"),d(a)])])]),e("tr",null,[M,e("td",null,[e("a",T,[n("index"),d(a)])])]),e("tr",null,[q,e("td",null,[e("a",k,[n("$lookup "),d(a)]),n(", "),D])]),e("tr",null,[A,e("td",null,[e("a",R,[n("primary key "),d(a)]),n("在 MongoDB 中, 主键自动设置为 "),e("a",y,[n("_id "),d(a)]),n("字段")])]),e("tr",null,[C,e("td",null,[B,n("参考： "),e("a",O,[n("SQL to Aggregation Mapping Chart"),d(a)])])]),e("tr",null,[I,e("td",null,[e("a",N,[n("$out "),d(a)]),n("参考： "),e("a",Q,[n("SQL to Aggregation Mapping Chart"),d(a)])])]),e("tr",null,[$,e("td",null,[e("a",j,[n("$merge "),d(a)]),n("（从MongoDB 4.2开始可用） 参考： "),e("a",P,[n("SQL to Aggregation Mapping Chart"),d(a)])])]),e("tr",null,[U,e("td",null,[e("a",W,[n("transactions"),d(a)])])])])]),F,e("p",null,[n("但是，在文档级别， "),e("a",H,[n("updateMany() "),d(a)]),n("操作可以使用 "),e("a",w,[n("$set "),d(a)]),n("操作符向现有文档添加字段。")]),X,e("p",null,[n("但是，在文档级别， "),e("a",V,[n("updateMany() "),d(a)]),n("操作可以使用 "),e("a",Y,[n("$unset "),d(a)]),n("操作符从文档中删除字段。")]),K,e("blockquote",null,[z,e("p",null,[e("a",G,[n("find() "),d(a)]),n("方法总是包含返回文档中的 "),Z,n(" 字段，除非通过 "),e("a",J,[n("projection "),d(a)]),n("特别排除。 下面的一些 SQL 查询可能包含一个 "),ee,n(" 字段来反映这一点，即使该字段没有包含在相应的 "),e("a",ne,[n("find() "),d(a)]),n("查询中。")])]),ae,e("p",null,[e("a",de,[ie,d(a)])])])}const oe=l(o,[["render",le],["__file","mongodb-x-sql-mongo-overview.html.vue"]]);export{oe as default};
