import{_ as p,W as o,X as l,Y as n,Z as a,$ as t,a0 as e,D as c}from"./framework-f64bc974.js";const i={},u=e(`<h1 id="moment时间格式化" tabindex="-1"><a class="header-anchor" href="#moment时间格式化" aria-hidden="true">#</a> moment时间格式化</h1><h2 id="_1-全局导入方法" tabindex="-1"><a class="header-anchor" href="#_1-全局导入方法" aria-hidden="true">#</a> 1. 全局导入方法</h2><ol><li><p>安装moment</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>npm install moment --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>main.js 引入注册</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 导入时间插件momentjs</span>
<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">&#39;moment&#39;</span>

<span class="token comment">// 定义时间格式全局过滤器</span>
Vue<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token string">&#39;dateFormat&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>daraStr<span class="token punctuation">,</span> pattern <span class="token operator">=</span> <span class="token string">&#39;YYYY-MM-DD HH:mm:ss&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">moment</span><span class="token punctuation">(</span>daraStr<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>pattern<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>模板中使用</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- 显示2019-12-05 10:10 --&gt;</span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>time<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{nowDate | dateFormat(&#39;YYYY-MM-DD HH:mm&#39;)}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
 <span class="token comment">&lt;!-- 显示10:10 --&gt;</span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>time<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{nowDate | dateFormat(&#39;HH:mm&#39;)}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
 <span class="token comment">&lt;!-- 显示2019-12-05 10:10:10 --&gt;</span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>time<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{nowDate | dateFormat}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_2-单个组件引入" tabindex="-1"><a class="header-anchor" href="#_2-单个组件引入" aria-hidden="true">#</a> 2. 单个组件引入</h2><ol><li>直接在所需要的组件中引入就可以了</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">let</span> moment <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;moment&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 引入</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">nowDate</span><span class="token operator">:</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">// 获取时间戳</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 转换时间格式年月日时分秒</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>nowDate <span class="token operator">=</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nowDate<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;YYYY-MM-DD HH:mm&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模板中</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>time<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{nowDate}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-使用" tabindex="-1"><a class="header-anchor" href="#_3-使用" aria-hidden="true">#</a> 3. 使用</h2><h3 id="_3-1-基础使用" tabindex="-1"><a class="header-anchor" href="#_3-1-基础使用" aria-hidden="true">#</a> 3.1 基础使用</h3>`,10),d=e(`<li><p>moment()</p><p>要获取当前的日期和时间， 只需调用不带参数的<code>moment()</code> 即可。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> now <span class="token operator">=</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,1),r=n("p",null,"moment(dateStr)",-1),m={href:"http://nodejs.cn/s/eV6MeQ",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"new Date(string)",-1),v={href:"http://nodejs.cn/s/ETQ1d1",target:"_blank",rel:"noopener noreferrer"},g=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> day <span class="token operator">=</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">&quot;1995-12-25&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),h=e(`<li><p><strong>moment(dateStr,format) 指定格式</strong></p><p>如果不指定格式，降维到 new Date(string)</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$moment</span><span class="token punctuation">(</span><span class="token string">&quot;20210513150959&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;YYYYMMDDHHmmss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;YYYY-MM-DD HH:mm&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>moment(dateStr,format[]) 多个格式</p><p>如果不知道输入字符串的确切格式，但是知道它可能是多种格式之一，则可以使用格式数组。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">&quot;12-25-1995&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;MM-DD-YYYY&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;YYYY-MM-DD&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,2),b=e(`<h3 id="_3-2-日期操作" tabindex="-1"><a class="header-anchor" href="#_3-2-日期操作" aria-hidden="true">#</a> 3.2 日期操作</h3><p>moment.js 使用流式接口，操作如</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>moment().add(7, &#39;days&#39;).subtract(1, &#39;months&#39;).year(2009).hours(0).minutes(0).seconds(0);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li><p>add()</p><p>为现有的 moment 增加时间</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>moment().add(Number, String);
moment().add(Duration);
moment().add(Object);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">&#39;days&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果对希望简短，也有一些快捷的键。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;">键</th><th style="text-align:left;">快捷键</th></tr></thead><tbody><tr><td style="text-align:left;">years</td><td style="text-align:left;">y</td></tr><tr><td style="text-align:left;">quarters</td><td style="text-align:left;">Q</td></tr><tr><td style="text-align:left;">months</td><td style="text-align:left;">M</td></tr><tr><td style="text-align:left;">weeks</td><td style="text-align:left;">w</td></tr><tr><td style="text-align:left;">days</td><td style="text-align:left;">d</td></tr><tr><td style="text-align:left;">hours</td><td style="text-align:left;">h</td></tr><tr><td style="text-align:left;">minutes</td><td style="text-align:left;">m</td></tr><tr><td style="text-align:left;">seconds</td><td style="text-align:left;">s</td></tr><tr><td style="text-align:left;">milliseconds</td><td style="text-align:left;">ms</td></tr></tbody></table></li><li><h3 id="subtract" tabindex="-1"><a class="header-anchor" href="#subtract" aria-hidden="true">#</a> subtract()</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span>Number<span class="token punctuation">,</span> String<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span>Duration<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span>Object<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过减去时间来改变原始的 moment。</p></li></ol>`,4),f={href:"http://momentjs.cn/docs/",target:"_blank",rel:"noopener noreferrer"},x=e(`<h3 id="_3-3-获取本月-年最后一天" tabindex="-1"><a class="header-anchor" href="#_3-3-获取本月-年最后一天" aria-hidden="true">#</a> 3.3 获取本月/年最后一天</h3><p>获取某年某月的最后一天</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>moment(日期).endOf(&#39;month&#39;).format(&quot;YYYY-MM-DD&quot;)//日期可以是 年月的格式 也可以是年月日的格式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>moment.js获取某年的最后一天</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>oment(日期).endOf(&#39;year&#39;).format(&quot;YYYY-MM-DD&quot;)//日期可以是年的格式 或者 年月的格式 也可以是年月日的格式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,6),_={href:"http://momentjs.cn/docs/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://segmentfault.com/a/1190000021200938",target:"_blank",rel:"noopener noreferrer"},j={href:"https://blog.csdn.net/qq_37899792/article/details/89914476",target:"_blank",rel:"noopener noreferrer"};function Y(q,D){const s=c("ExternalLinkIcon");return o(),l("div",null,[u,n("ol",null,[d,n("li",null,[r,n("ul",null,[n("li",null,[a("当从字符串创建 moment 时，需要首先检查字符串是否与已知的 "),n("a",m,[a("ISO 8601"),t(s)]),a(" 格式匹配")]),n("li",null,[a("如果未找到已知的格式，则在降维到 "),k,a(" 之前检查字符串是否与 "),n("a",v,[a("RFC 2822 日期时间"),t(s)]),a("格式匹配。")])]),g]),h]),b,n("p",null,[a("​ "),n("a",f,[a("更多使用参考官方文档"),t(s)])]),x,n("p",null,[n("a",_,[a("官方文档"),t(s)])]),n("p",null,[n("a",y,[a("vue+moment.js使用"),t(s)])]),n("p",null,[n("a",j,[a("moment.js 获取某年某月的最后一天 以及 获取某年最后一天"),t(s)])])])}const M=p(i,[["render",Y],["__file","vue-moment-time-format.html.vue"]]);export{M as default};
