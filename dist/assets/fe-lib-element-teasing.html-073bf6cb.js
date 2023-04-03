import{_ as o,W as t,X as r,Y as a,Z as s,$ as n,a0 as p,D as l}from"./framework-f64bc974.js";const c={},i=a("h1",{id:"element-吐槽点",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#element-吐槽点","aria-hidden":"true"},"#"),s(" Element-吐槽点")],-1),d=a("h2",{id:"_1-关于-el-radio-group-增加垂直排列的建议",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_1-关于-el-radio-group-增加垂直排列的建议","aria-hidden":"true"},"#"),s(" 1. 关于 el-radio-group 增加垂直排列的建议")],-1),k={href:"https://github.com/ElemeFE/element/issues/3037",target:"_blank",rel:"noopener noreferrer"},u=p(`<blockquote><p>官方回复：没有太多人有这个需求，可能暂时没有这个计划，你可以用CSS处理。</p></blockquote><p>这么简单的需求，硬是不加。需要自己实现。一大堆评论要求加，视而不见。</p><p>2017 年提的，现在都2022年了，还没解决</p><h3 id="_1-1-解决方案-增加div" tabindex="-1"><a class="header-anchor" href="#_1-1-解决方案-增加div" aria-hidden="true">#</a> 1.1 解决方案: 增加div</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>el<span class="token operator">-</span>radio<span class="token operator">-</span>group v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;selectMod&quot;</span> size<span class="token operator">=</span><span class="token string">&quot;small&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;vertical&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>div v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span> index <span class="token keyword">of</span> <span class="token number">3</span><span class="token operator">&gt;</span>
 <span class="token operator">&lt;</span>el<span class="token operator">-</span>radio<span class="token operator">-</span>button label<span class="token operator">=</span><span class="token string">&quot;第一列&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>radio<span class="token operator">-</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>radio<span class="token operator">-</span>group<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-可搜索cascader-级联选择器使用时-多次搜索错误的内容-点击下拉无匹配数据区域-会-导致-页面卡死" tabindex="-1"><a class="header-anchor" href="#_2-可搜索cascader-级联选择器使用时-多次搜索错误的内容-点击下拉无匹配数据区域-会-导致-页面卡死" aria-hidden="true">#</a> 2. 可搜索Cascader 级联选择器使用时 多次搜索错误的内容，点击下拉无匹配数据区域 会 导致 页面卡死</h2>`,6),h={href:"https://github.com/ElemeFE/element/issues/22006#top",target:"_blank",rel:"noopener noreferrer"};function m(_,v){const e=l("ExternalLinkIcon");return t(),r("div",null,[i,d,a("p",null,[a("a",k,[s("关于 el-radio-group 增加垂直排列的建议"),n(e)])]),u,a("p",null,[a("a",h,[s("Bug Report] 可搜索Cascader 级联选择器使用时 多次搜索错误的内容，点击下拉无匹配数据区域 会 导致 页面卡死"),n(e)])])])}const b=o(c,[["render",m],["__file","fe-lib-element-teasing.html.vue"]]);export{b as default};