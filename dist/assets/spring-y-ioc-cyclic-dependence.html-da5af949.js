import{_ as e,W as i,X as a,a0 as t}from"./framework-f64bc974.js";const n={},o=t('<h1 id="循环依赖问题" tabindex="-1"><a class="header-anchor" href="#循环依赖问题" aria-hidden="true">#</a> 循环依赖问题</h1><h2 id="_1-什么是循环依赖" tabindex="-1"><a class="header-anchor" href="#_1-什么是循环依赖" aria-hidden="true">#</a> 1. 什么是循环依赖</h2><p>循环依赖，其实就是循环引用，就是两个或者两个以上的bean 互相引用对方，最终形成一个闭环，如A 依赖B,B依赖C，C依赖A。如下图所示</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20191103124214967.png" alt="image-20191103124214967" tabindex="0" loading="lazy"><figcaption>image-20191103124214967</figcaption></figure><p>循环依赖，其实就是一个<strong>死循环</strong>的过程，在初始化A的时候发现引用了B，这时候就会去初始化B，然后又开发B引用了A，则又会出初始化A，依次循环用不退出，除非有终结条件</p><h2 id="_2-循环依赖的两种场景" tabindex="-1"><a class="header-anchor" href="#_2-循环依赖的两种场景" aria-hidden="true">#</a> 2. 循环依赖的两种场景</h2><ol><li>构造器的循环依赖</li><li>field 属性的循环依赖</li></ol><blockquote><p>对于构造器的循环依赖，Spring 是无法解决的，只能抛出 BeanCurrentlyInCreationException 异常表示循环依赖，<strong>所以下面我们分析的都是基于 field 属性的循环依赖</strong>。</p></blockquote><blockquote><p>Spring 只解决 scope 为 singleton 的循环依赖。对于scope 为 prototype 的 bean ，Spring 无法解决，直接抛出 BeanCurrentlyInCreationException 异常。</p></blockquote><h2 id="_3-解决流程总结" tabindex="-1"><a class="header-anchor" href="#_3-解决流程总结" aria-hidden="true">#</a> 3. 解决流程总结</h2><ul><li>首先 A 完成初始化第一步并将自己提前曝光出来（通过 ObjectFactory 将自己提前曝光），在初始化的时候，发现自己依赖对象 B，此时就会去尝试 get(B)，这个时候发现 B 还没有被创建出来</li><li>然后 B 就走创建流程，在 B 初始化的时候，同样发现自己依赖 C，C 也没有被创建出来</li><li>这个时候 C 又开始初始化进程，但是在初始化的过程中发现自己依赖 A，于是尝试 get(A)，这个时候由于 A 已经添加至缓存中（一般都是添加至三级缓存 <code>singletonFactories</code> ），通过 ObjectFactory 提前曝光，所以可以通过 <code>ObjectFactory#getObject()</code> 方法来拿到 A 对象，C 拿到 A 对象后顺利完成初始化，然后将自己添加到一级缓存中</li><li>回到 B ，B 也可以拿到 C 对象，完成初始化，A 可以顺利拿到 B 完成初始化。到这里整个链路就已经完成了初始化过程了</li></ul>',11),c=[o];function r(l,s){return i(),a("div",null,c)}const g=e(n,[["render",r],["__file","spring-y-ioc-cyclic-dependence.html.vue"]]);export{g as default};
