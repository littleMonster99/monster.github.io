import{_ as n,W as s,X as a,a0 as t}from"./framework-f64bc974.js";const e={},p=t(`<h1 id="aspose-word插入复选框" tabindex="-1"><a class="header-anchor" href="#aspose-word插入复选框" aria-hidden="true">#</a> Aspose.Word插入复选框</h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景" aria-hidden="true">#</a> 1. 背景</h2><p>word 中难免有复选框的功能，我们动态插入文字时，他只是一个文本，并没有选中切换的功能。</p><h2 id="_2-解决思路" tabindex="-1"><a class="header-anchor" href="#_2-解决思路" aria-hidden="true">#</a> 2. 解决思路</h2><p>我们来看看 word 中我们是如何插入复选框的</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622104329590.png" alt="image-20220622104329590"><p>我们查看详情</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622104534970.png" alt="image-20220622104534970" tabindex="0" loading="lazy"><figcaption>image-20220622104534970</figcaption></figure><p>我们可以看到</p><ul><li>字体为：Wingdings 2</li><li>字符代码为：0052</li></ul><p>那么我们插入特定的格式的字体，对应的代码是不是就能解决了</p><h2 id="_3-解决" tabindex="-1"><a class="header-anchor" href="#_3-解决" aria-hidden="true">#</a> 3. 解决</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token keyword">boolean</span> isMoveSuccess <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">moveToMergeField</span><span class="token punctuation">(</span>fieldName<span class="token punctuation">)</span><span class="token punctuation">;</span>
 builder<span class="token punctuation">.</span><span class="token function">getFont</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setSize</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           
 <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>fieldValue<span class="token punctuation">,</span><span class="token string">&quot;☑&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
        builder<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;\\u0052&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>fieldValue<span class="token punctuation">,</span><span class="token string">&quot;☐&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
       builder<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;\\u00A3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样我们就正常渲染出了复选框</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220622104905805.png" alt="image-20220622104905805" tabindex="0" loading="lazy"><figcaption>image-20220622104905805</figcaption></figure>`,15),o=[p];function c(i,u){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","office-x-aspose-checkbox.html.vue"]]);export{r as default};
