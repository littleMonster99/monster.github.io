import{_ as r,W as i,X as o,Y as e,Z as a,$ as n,a0 as l,D as s}from"./framework-f64bc974.js";const h={},c=l('<h1 id="java堆设置多大合适" tabindex="-1"><a class="header-anchor" href="#java堆设置多大合适" aria-hidden="true">#</a> Java堆设置多大合适</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>针对堆空间的优化是Java性能调优的重点之一。如果没有设置JVM堆空间大小，JVM会根据服务器物理内存大小设置默认堆大小的值。例如，在64位的服务器端，</p><ul><li>当物理内存小于192MB时，JVM堆大小默认选为物理内存的一半；</li><li><strong>当物理内存大192MB且小于128GB时，JVM堆大小默认选为物理内存的四分之一</strong>；</li><li>当物理内存大于等于128GB时，都为32GB。</li></ul><p>通常情况下，Java应用程序的会通过参数指定堆大小，具体方法下文会有说明。</p><h2 id="_2-推荐配置原则" tabindex="-1"><a class="header-anchor" href="#_2-推荐配置原则" aria-hidden="true">#</a> 2. 推荐配置原则：</h2><ol><li>应用程序运行时，计算<strong>老年代存活对象的占用空间大小X</strong>。 <ol><li>程序整个堆大小（Xmx和Xms）设置为X的3~4倍；</li><li>永久代PermSize和MaxPermSize设置为X的1.2~1.5倍。</li><li>年轻代Xmn的设置为X的1<sub>1.5倍。老年代内存大小设置为X的2</sub>3倍。</li></ol></li><li>JDK官方建议年轻代占整个堆大小空间的3/8左右。</li><li>完成一次Full GC后，应该释放出70%的堆空间（30%的空间仍然占用）。</li><li>设置JVM 初始堆内存-Xms和最大堆内-Xmx相同，<strong>以避免每次垃圾回收完成后JVM重新分配内存。</strong></li></ol><h2 id="_3-暴力设置" tabindex="-1"><a class="header-anchor" href="#_3-暴力设置" aria-hidden="true">#</a> 3. 暴力设置</h2><p>若依和IBM等堆大小都设置为512M, 如有额外需求，才根据上面原则进行调整</p>',9),d=e("p",null,"对于大多数环境而言，最大 Java 堆大小为 512 兆字节（如上图所示）已足够。",-1),p={href:"https://www.ibm.com/docs/zh/itcam-app-mgr/7.2.1?topic=spa-setting-maximum-java-heap-size-1",target:"_blank",rel:"noopener noreferrer"},_=e("h2",{id:"参考文章",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考文章","aria-hidden":"true"},"#"),a(" 参考文章")],-1),m={href:"https://support.huaweicloud.com/tuningtip-kunpenggrf/kunpengtuning_12_0063.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.ibm.com/docs/zh/itcam-app-mgr/7.2.1?topic=spa-setting-maximum-java-heap-size-1",target:"_blank",rel:"noopener noreferrer"},f={href:"https://blog.csdn.net/weixin_28782251/article/details/114547003",target:"_blank",rel:"noopener noreferrer"};function g(x,v){const t=s("ExternalLinkIcon");return i(),o("div",null,[c,e("blockquote",null,[d,e("p",null,[a("---"),e("a",p,[a("IBM 文档"),n(t)])])]),_,e("p",null,[e("a",m,[a("华为鲲鹏-设置JVM堆空间大小"),n(t)])]),e("p",null,[e("a",u,[a("IBM 文档"),n(t)])]),e("p",null,[e("a",f,[a("java堆设置成多少合适_jvm~xmx设置多少合适"),n(t)])])])}const M=r(h,[["render",g],["__file","java-jvm-optimization-size.html.vue"]]);export{M as default};
