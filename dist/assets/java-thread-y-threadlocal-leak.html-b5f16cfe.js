import{_ as n,W as o,X as l,Y as e,Z as a,$ as t,D as c}from"./framework-f64bc974.js";const d={},s=e("h1",{id:"threadlocal使用不当导致内存泄漏",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#threadlocal使用不当导致内存泄漏","aria-hidden":"true"},"#"),a(" ThreadLocal使用不当导致内存泄漏")],-1),h=e("p",null,"线程池的一个线程使用完 Threadlocal 对象之后，由于线程池中的线程不会退出，线程池中的线程池存在，同时ThreadLocal变量也会存在，占用内存，造成OOM溢出。",-1),_=e("h2",{id:"参考文章",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考文章","aria-hidden":"true"},"#"),a(" 参考文章")],-1),i={href:"https://blog.csdn.net/xlgen157387/article/details/78297568",target:"_blank",rel:"noopener noreferrer"},f={href:"https://blog.csdn.net/xlgen157387/article/details/78298840",target:"_blank",rel:"noopener noreferrer"};function p(u,x){const r=c("ExternalLinkIcon");return o(),l("div",null,[s,h,_,e("p",null,[e("a",i,[a("多图深入分析ThreadLocal原理"),t(r)])]),e("p",null,[e("a",f,[a("Java多线程编程-（9）-ThreadLocal造成OOM内存溢出案例演示与原理分析"),t(r)])])])}const m=n(d,[["render",p],["__file","java-thread-y-threadlocal-leak.html.vue"]]);export{m as default};
