import{_ as e,W as a,X as i,a0 as d}from"./framework-f64bc974.js";const r={},n=d('<h1 id="接口设计之依赖项过多时方案选择" tabindex="-1"><a class="header-anchor" href="#接口设计之依赖项过多时方案选择" aria-hidden="true">#</a> 接口设计之依赖项过多时方案选择</h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景" aria-hidden="true">#</a> 1. 背景</h2><p>在开发中有时候会面对一些复杂场景，例如</p><ol><li>表单项采集项特别多，有二三十个。</li><li>针对表单我们还有额外操作，这些操作需要表单中的10个参数</li></ol><h2 id="_2-两种方案" tabindex="-1"><a class="header-anchor" href="#_2-两种方案" aria-hidden="true">#</a> 2. 两种方案</h2><h3 id="_2-1-方案1-把需要的参数传过来" tabindex="-1"><a class="header-anchor" href="#_2-1-方案1-把需要的参数传过来" aria-hidden="true">#</a> 2.1 方案1：把需要的参数传过来</h3><p>传10个基础参数进来（我嫌太多，每个操作接口都要传）</p><h3 id="_2-2-方案2-每次操作前保存信息-只传表单id" tabindex="-1"><a class="header-anchor" href="#_2-2-方案2-每次操作前保存信息-只传表单id" aria-hidden="true">#</a> 2.2 方案2：每次操作前保存信息，只传表单id</h3><p>方案2：每次操作前保存基础信息，多传一个表单id就可以（又觉得每次操作前保存是不是太浪费性能）</p><h2 id="_3-最终方案" tabindex="-1"><a class="header-anchor" href="#_3-最终方案" aria-hidden="true">#</a> 3. 最终方案</h2><p><strong>我们程序在乎的是性能和用户体验。</strong></p><p>方案2每次保存的方案，需要额外浪费2次不必要的网络请求，</p><ol><li>前端先保存表单</li><li>后端拿表单id查表单信息</li></ol><p>这两步完全是没必要做的。</p><p>如果我们觉得写参数麻烦。我们<strong>可以直接把表单对象整个传进去</strong>，暴力一点也没事</p><h2 id="_4-为什么会有这种问题产生" tabindex="-1"><a class="header-anchor" href="#_4-为什么会有这种问题产生" aria-hidden="true">#</a> 4. 为什么会有这种问题产生？</h2><p>温水煮青蛙的结果</p><ol><li>刚开始只需要表单id关联就好</li><li>随后需要校验2个表单参数，ok再这几个操作中加2个新字段就好</li><li>随着业务的发展，需要校验的数据越来越多。重复参数的增加导致多个操作方法都要加。索性改成通过表单id 后台查一遍</li></ol><p>其实回过头来，如果一开始就有这样的需求，或许自己不会在这两种方案中纠结。</p><p>当遇到问题时，要看透本质</p>',20),h=[n];function t(o,l){return a(),i("div",null,h)}const c=e(r,[["render",t],["__file","Interface-design-too-many-dependencies.html.vue"]]);export{c as default};
