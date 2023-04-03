import{_ as n,W as s,X as a,a0 as e}from"./framework-f64bc974.js";const t={},o=e(`<h1 id="aspose-word转换为pdf的时候字体丢失" tabindex="-1"><a class="header-anchor" href="#aspose-word转换为pdf的时候字体丢失" aria-hidden="true">#</a> Aspose.Word转换为PDF的时候字体丢失</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>我们使用Aspose.Word 生成word的时候字体都是正常的，但是转成pdf 之后字体就丢失了。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220609085737039.png" alt="image-20220609085737039" tabindex="0" loading="lazy"><figcaption>image-20220609085737039</figcaption></figure><h2 id="_2-问题原因" tabindex="-1"><a class="header-anchor" href="#_2-问题原因" aria-hidden="true">#</a> 2. 问题原因</h2><p>Aspose.Word 使用的字体文件并没有正确指向系统的字体（网上有的说是因为使用了虚拟路径，并不是真正的路径），导致最终渲染pdf的时候字体丢失</p><h2 id="_3-解决方案" tabindex="-1"><a class="header-anchor" href="#_3-解决方案" aria-hidden="true">#</a> 3. 解决方案</h2><p>将用户目录字体添加到字体源中</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
    <span class="token doc-comment comment">/**
     * 设置字体资源
     * 不设置会导致word转pdf的时候字体丢失
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">setFontsSources</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> fontsDir <span class="token operator">=</span> <span class="token string">&quot;/usr/share/fonts&quot;</span><span class="token punctuation">;</span>

        <span class="token comment">//将用户目录字体添加到字体源中</span>
        <span class="token class-name">FontSourceBase</span><span class="token punctuation">[</span><span class="token punctuation">]</span> originalFontSources <span class="token operator">=</span> <span class="token class-name">FontSettings</span><span class="token punctuation">.</span><span class="token function">getDefaultInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFontsSources</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">FolderFontSource</span> folderFontSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FolderFontSource</span><span class="token punctuation">(</span>fontsDir<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">FontSourceBase</span><span class="token punctuation">[</span><span class="token punctuation">]</span> updatedFontSources <span class="token operator">=</span> <span class="token punctuation">{</span>originalFontSources<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> folderFontSource<span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token class-name">FontSettings</span><span class="token punctuation">.</span><span class="token function">getDefaultInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setFontsSources</span><span class="token punctuation">(</span>updatedFontSources<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>全局调用一次即可，不用每次转换设置</p><h2 id="_4-转换效果" tabindex="-1"><a class="header-anchor" href="#_4-转换效果" aria-hidden="true">#</a> 4. 转换效果</h2><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220609090124782.png" alt="image-20220609090124782" tabindex="0" loading="lazy"><figcaption>image-20220609090124782</figcaption></figure>`,12),p=[o];function c(i,l){return s(),a("div",null,p)}const r=n(t,[["render",c],["__file","office-x-aspose-to-pdf-font.html.vue"]]);export{r as default};
