import{_ as s,W as n,X as l,Y as e,Z as i,$ as t,a0 as o,D as r}from"./framework-f64bc974.js";const g={},c=e("h1",{id:"导入springboot源码",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#导入springboot源码","aria-hidden":"true"},"#"),i(" 导入SpringBoot源码")],-1),p=e("h2",{id:"_1-导入源码",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-导入源码","aria-hidden":"true"},"#"),i(" 1. 导入源码")],-1),d=e("blockquote",null,[e("p",null,"我们项目中的springboot 版本为2.1.0.RELEASE，所以我们就以2.1.0.RELEASE为学习标准")],-1),m=e("p",null,"源码地址",-1),b={href:"https://github.com/spring-projects/spring-boot/tree/v2.1.0.RELEASE",target:"_blank",rel:"noopener noreferrer"},h=e("li",null,[e("p",null,"fork到自己github仓库"),e("p",null,"fork 到自己仓库，可以方便的写一些注释帮助我们阅读理解源码")],-1),u=e("li",null,[e("p",null,"建个分支来学习"),e("p",null,"分支的基础版本为：2.1.0.RELEASE"),e("figure",null,[e("img",{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20220308192302601.png",alt:"image-20220308192302601",tabindex:"0",loading:"lazy"}),e("figcaption",null,"image-20220308192302601")])],-1),_=o(`<h2 id="_2-将springboot源码项目导入到idea中" tabindex="-1"><a class="header-anchor" href="#_2-将springboot源码项目导入到idea中" aria-hidden="true">#</a> 2. 将SpringBoot源码项目导入到IDEA中</h2><p>导入后的结果</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20220308190307742.png" alt="image-20220308190307742" tabindex="0" loading="lazy"><figcaption>image-20220308190307742</figcaption></figure><h2 id="_3-编译构建springboot源码项目" tabindex="-1"><a class="header-anchor" href="#_3-编译构建springboot源码项目" aria-hidden="true">#</a> 3. 编译构建SpringBoot源码项目</h2><h3 id="_3-1-前置配置" tabindex="-1"><a class="header-anchor" href="#_3-1-前置配置" aria-hidden="true">#</a> 3.1 前置配置</h3><p>此时导入项目后，我们进行编译构建SpringBoot源码项目了，在构建之前做两个配置：</p><ol><li><p>我们要禁用maven的代码检查，在根pom.xml中增加一下配置即可，如下图：</p><div class="language-&lt;!--设置disable.checks为true--&gt; &lt;disable.checks&gt;true&lt;/disable.checks&gt; line-numbers-mode" data-ext="&lt;!--设置disable.checks为true--&gt;		&lt;disable.checks&gt;true&lt;/disable.checks&gt;"><pre class="language-&lt;!--设置disable.checks为true--&gt; &lt;disable.checks&gt;true&lt;/disable.checks&gt;"><code>&lt;!--设置disable.checks为true--&gt;
&lt;disable.checks&gt;true&lt;/disable.checks&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>​ <img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20220308190609199.png" alt="image-20220308190609199" loading="lazy"></p>`,8),f={start:"2"},z=e("code",null,"java.lang.OutOfMemoryError",-1),v={href:"https://blog.csdn.net/w605283073/article/details/85107497",target:"_blank",rel:"noopener noreferrer"},x=o(`<p>​ <img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20220308190638212.png" alt="image-20220308190638212" loading="lazy"></p><h3 id="_3-2-命令编译" tabindex="-1"><a class="header-anchor" href="#_3-2-命令编译" aria-hidden="true">#</a> 3.2 命令编译</h3><p>进行了上面的两点配置后，此时我们就可以直接执行以下maven命令来编译构建源码项目了。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>mvn clean install <span class="token operator">-</span>DskipTests <span class="token operator">-</span>Pfast
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20220308190825164.png" alt="image-20220308190825164" tabindex="0" loading="lazy"><figcaption>image-20220308190825164</figcaption></figure><p>此时又是漫长的等待构建成功了，如下图：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20220308195059235.png" alt="image-20220308195059235" tabindex="0" loading="lazy"><figcaption>image-20220308195059235</figcaption></figure><h2 id="_4-运行springboot自带的sample" tabindex="-1"><a class="header-anchor" href="#_4-运行springboot自带的sample" aria-hidden="true">#</a> 4. 运行SpringBoot自带的sample</h2><p>因为SpringBoot源码中的spring-boot-samples模块自带了很多DEMO样例，我们可以利用其中的一个sample来测试运行刚刚构建的springboot源码项目即可。但此时发现spring-boot-samples模块是灰色的，如下图</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20220308195141434.png" alt="image-20220308195141434" tabindex="0" loading="lazy"><figcaption>image-20220308195141434</figcaption></figure><p>这是因为spring-boot-samples模块没有被添加到根pom.xml中，此时将其添加到根pom.xml中即可，增加如下配置，如下图：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20220308195320473.png" alt="image-20220308195320473" tabindex="0" loading="lazy"><figcaption>image-20220308195320473</figcaption></figure><p>此时我们挑选spring-boot-samples模块下的spring-boot-sample-tomcat样例项目来测试好了，此时启动<code>SampleTomcatApplication</code>的<code>main</code>函数，启动成功界面如下：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20220308202332052.png" alt="image-20220308202332052" tabindex="0" loading="lazy"><figcaption>image-20220308202332052</figcaption></figure><p>然后我们再在浏览器发送一个HTTP请求，此时可以看到服务端成功返回响应，说明此时SpringBoot源码环境就已经构建成功了，接下来我们就可以进行调试了，如下图：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20220308202423116.png" alt="image-20220308202423116" tabindex="0" loading="lazy"><figcaption>image-20220308202423116</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,17),k={href:"https://cloud.tencent.com/developer/article/1595465",target:"_blank",rel:"noopener noreferrer"},E={href:"https://blog.csdn.net/w605283073/article/details/85106902",target:"_blank",rel:"noopener noreferrer"};function y(S,j){const a=r("ExternalLinkIcon");return n(),l("div",null,[c,p,d,e("ol",null,[e("li",null,[m,e("p",null,[e("a",b,[i("https://github.com/spring-projects/spring-boot/tree/v2.1.0.RELEASE"),t(a)])])]),h,u]),_,e("ol",f,[e("li",null,[i("可能有的小伙伴们的pom.xml文件的project标签上显示"),z,i("错误，这是因为IDEA里的Maven的importer设置的JVM最大堆内存过小而导致的，如下图,此时可参考"),e("a",v,[i("Maven依赖包导入错误（IntelliJ IDEA）"),t(a)]),i("解决即可。")])]),x,e("p",null,[e("a",k,[i("如何搭建自己的SpringBoot源码调试环境？--SpringBoot源码（一）"),t(a)])]),e("p",null,[e("a",E,[i("搭建SpringBoot源码环境的正确姿势（避坑必备）"),t(a)])])])}const A=s(g,[["render",y],["__file","springboot-y-source-import.html.vue"]]);export{A as default};
