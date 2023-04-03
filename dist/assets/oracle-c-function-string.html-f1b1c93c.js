import{_ as t,W as r,X as i,Y as a,Z as n,$ as s,a0 as c,D as l}from"./framework-f64bc974.js";const d={},o=c(`<h1 id="oracle截取字符串substr、查找字符串位置instr、替换字符串replace" tabindex="-1"><a class="header-anchor" href="#oracle截取字符串substr、查找字符串位置instr、替换字符串replace" aria-hidden="true">#</a> Oracle截取字符串substr、查找字符串位置instr、替换字符串replace</h1><h2 id="_1-截取字符串-substr" tabindex="-1"><a class="header-anchor" href="#_1-截取字符串-substr" aria-hidden="true">#</a> 1. 截取字符串：substr</h2><h3 id="_1-1-substr-函数介绍" tabindex="-1"><a class="header-anchor" href="#_1-1-substr-函数介绍" aria-hidden="true">#</a> 1.1 substr 函数介绍</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>substr(str1,str2,str3)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>str1为目标字符串</li><li>str2是将要输出的子串的<strong>起点</strong></li><li>str3是将要输出的子串的<strong>长度</strong></li></ul><h3 id="_1-2-示例" tabindex="-1"><a class="header-anchor" href="#_1-2-示例" aria-hidden="true">#</a> 1.2 示例</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>例子：
substr(&#39;ABCDEFG&#39;, 2, 3)   =   &#39;BCD&#39;    
substr(&#39;ABCDEFG&#39;,   -2)   =   &#39;FG&#39;  --如果第二个参数为负数，那么将会从源串的尾部开始向前定位至负数的绝对值的位置
substr(&#39;ABCDEFG&#39;,   -4)   =   &#39;DEFG
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-查找字符串位置-instr" tabindex="-1"><a class="header-anchor" href="#_2-查找字符串位置-instr" aria-hidden="true">#</a> 2. <strong>查找字符串位置：instr</strong></h2><h3 id="_2-1-instr-函数介绍如下" tabindex="-1"><a class="header-anchor" href="#_2-1-instr-函数介绍如下" aria-hidden="true">#</a> 2.1 instr 函数介绍如下：</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>instr<span class="token punctuation">(</span> strSource<span class="token punctuation">,</span>str <span class="token punctuation">,</span> startPos<span class="token punctuation">,</span> appearance  <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>strSource :源字符串</li><li>str :要查找的字符串.</li><li>startPos :<strong>从哪个位置开始查找，默认为1。参数为正，从左到右开始检索，参数为负，从右到左检索。</strong></li><li>appearance :代表要查找第几次出现的str,默认为 1,不能为负。</li></ul><h3 id="_2-2-示例" tabindex="-1"><a class="header-anchor" href="#_2-2-示例" aria-hidden="true">#</a> 2.2 示例</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>例子：
instr(&#39;ABCDABCDAEF&#39;, &#39;AB&#39;);   -- 返回结果是：1，因为instr字符串索引从1开始，所以是1不是0
instr(&#39;ABCDABCDAEF&#39;, &#39;DA&#39;, 1, 2);   -- 返回结果是：8，返回第二次出现&#39;DA&#39;的位置
instr(&#39;A BCDABCDAEF&#39;, &#39;DA&#39;, 1, 2)；  -- 返回结果是：9，由于我在元字符串中加了一个空格，空格仍然算一个字符
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-替换字符串-replace" tabindex="-1"><a class="header-anchor" href="#_3-替换字符串-replace" aria-hidden="true">#</a> 3. <strong>替换字符串：replace</strong></h2><h3 id="_3-1-replace函数介绍" tabindex="-1"><a class="header-anchor" href="#_3-1-replace函数介绍" aria-hidden="true">#</a> 3.1 replace函数介绍</h3><p>replace(str1, str2, str3) 其表示的意思是：在str1中查找str2，凡是出现str2的地方，都替换成str3。</p><h3 id="_3-2-示例" tabindex="-1"><a class="header-anchor" href="#_3-2-示例" aria-hidden="true">#</a> 3.2 示例</h3><p>replace(&#39;ABCDEFG&#39;, &#39;CDE&#39;, &#39;cde&#39;); -- 返回结果是：ABcdeFG replace(&#39;ABCDEFG&#39;, &#39;CDE&#39;, &#39;&#39;); -- 返回结果是：ABFG，CDE被替换成空字符 replace(&#39;ABCDEFG&#39;, &#39;CDE&#39;); -- 返回结果是：ABFG，当不存在第三个参数时，CDE直接被删掉------据此可以确定某个字符串在字符中出现的次数</p><h2 id="_4-replace扩展" tabindex="-1"><a class="header-anchor" href="#_4-replace扩展" aria-hidden="true">#</a> 4. <strong>replace扩展：</strong></h2><p>确定某个字符串在字符中出现的次数。 例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>select a<span class="token punctuation">.</span>* from tb_duty a where <span class="token function">length</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>col<span class="token punctuation">)</span><span class="token operator">-</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token function">replace</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>col<span class="token punctuation">,</span> <span class="token char">&#39;,&#39;</span><span class="token punctuation">,</span> &#39;&#39;<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token function">n</span><span class="token punctuation">(</span>n为出现的次数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,22),p={href:"https://blog.csdn.net/big1989wmf/article/details/70144624",target:"_blank",rel:"noopener noreferrer"},u={href:"http://www.myexceptions.net/h/1369083.html",target:"_blank",rel:"noopener noreferrer"};function h(b,v){const e=l("ExternalLinkIcon");return r(),i("div",null,[o,a("p",null,[a("a",p,[n("Oracle截取字符串substr、查找字符串位置instr、替换字符串replace"),s(e)])]),a("p",null,[a("a",u,[n("ORACLE 查找某个字符最后一次出现的位置"),s(e)])])])}const g=t(d,[["render",h],["__file","oracle-c-function-string.html.vue"]]);export{g as default};
