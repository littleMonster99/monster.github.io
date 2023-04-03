import{_ as s,W as e,X as t,Y as n,Z as o,$ as c,a0 as p,D as i}from"./framework-f64bc974.js";const r={},l=p(`<h1 id="使用zxing生成二维码乱码问题" tabindex="-1"><a class="header-anchor" href="#使用zxing生成二维码乱码问题" aria-hidden="true">#</a> 使用zxing生成二维码乱码问题</h1><p>直接上代码</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token class-name">QRCodeWriter</span> writer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QRCodeWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token comment">// 解决中文乱码问题</span>
        <span class="token class-name">String</span> contentCharset <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>content<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;ISO-8859-1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BitMatrix</span> matrix <span class="token operator">=</span> writer<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>contentCharset<span class="token punctuation">,</span> format<span class="token punctuation">,</span> width<span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,4),u={href:"https://www.jianshu.com/p/532832542d91",target:"_blank",rel:"noopener noreferrer"};function d(k,m){const a=i("ExternalLinkIcon");return e(),t("div",null,[l,n("p",null,[n("a",u,[o("生成可防止中文乱码的二维码（zxing-android-embeded）"),c(a)])])])}const v=s(r,[["render",d],["__file","qr-x-zxing-garbled-code.html.vue"]]);export{v as default};