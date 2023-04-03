import{_ as e,W as a,X as r,a0 as d}from"./framework-f64bc974.js";const h={},i=d('<h1 id="redis缓存预热" tabindex="-1"><a class="header-anchor" href="#redis缓存预热" aria-hidden="true">#</a> Redis缓存预热</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>缓存预热就是系统上线后，<strong>将相关的缓存数据直接加载到缓存系统</strong></p><p>这样可以避免在用户请求的时候，先查询数据库，然后再将数据缓存的问题！用户直接查询事先被预热的缓存数据！</p><h2 id="_2-解决方案" tabindex="-1"><a class="header-anchor" href="#_2-解决方案" aria-hidden="true">#</a> 2.解决方案</h2><h3 id="_2-1-缓存刷新页面" tabindex="-1"><a class="header-anchor" href="#_2-1-缓存刷新页面" aria-hidden="true">#</a> 2.1 缓存刷新页面</h3><p>直接写个缓存刷新页面，上线时手工操作</p><h3 id="_2-2-项目启动自动加载" tabindex="-1"><a class="header-anchor" href="#_2-2-项目启动自动加载" aria-hidden="true">#</a> 2.2 项目启动自动加载</h3><p>数据量不大，可以在项目启动的时候自动进行加载</p><p>目的就是在系统上线前，将数据加载到缓存中。</p>',10),t=[i];function s(n,c){return a(),r("div",null,t)}const o=e(h,[["render",s],["__file","redis-x-questuin-cache-warm-up.html.vue"]]);export{o as default};
