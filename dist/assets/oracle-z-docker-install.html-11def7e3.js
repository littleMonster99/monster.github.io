import{_ as i,W as l,X as r,Y as e,Z as s,$ as n,a0 as c,D as o}from"./framework-f64bc974.js";const d={},t=c(`<h1 id="通过docker安装oracle" tabindex="-1"><a class="header-anchor" href="#通过docker安装oracle" aria-hidden="true">#</a> 通过docker安装Oracle</h1><h2 id="_1-安装oracle" tabindex="-1"><a class="header-anchor" href="#_1-安装oracle" aria-hidden="true">#</a> 1. 安装Oracle</h2><ol><li><p>拉取镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull registry.cn-hangzhou.aliyuncs.com/helowin/oracle_11g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>镜像大概有6.8G</p><p>查看镜像信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> iamges
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>创建容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">1521</span>:1521 <span class="token parameter variable">--name</span> oracle_11g registry.aliyuncs.com/helowin/oracle_11g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> start oracle_11g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>进入控制台设置用户信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> oracle_11g <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>切换成root进行操作：</p><blockquote><p>su - root</p></blockquote><p>输入密码helowin</p></li><li><p>设置oracle环境变量如下：</p><p>vi /etc/profile文件末尾添加：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">ORACLE_HOME</span><span class="token operator">=</span>/home/oracle/app/oracle/product/11.2.0/dbhome_2
<span class="token builtin class-name">export</span> <span class="token assign-left variable">ORACLE_SID</span><span class="token operator">=</span>helowin
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>切换回oracle用户：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">su</span> - oracle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>修改sys、system用户密码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sqlplus /nolog
conn /as sysdba
alter user system identified by oracle;
alter user sys identified by oracle;
ALTER PROFILE DEFAULT LIMIT PASSWORD_LIFE_TIME UNLIMITED;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此处的oracle 就是你设置的密码</p><p>Ps:默认密码是：helowin</p></li></ol><h2 id="_2-遇到的问题" tabindex="-1"><a class="header-anchor" href="#_2-遇到的问题" aria-hidden="true">#</a> 2. 遇到的问题</h2><h3 id="_2-1-远程连接提示" tabindex="-1"><a class="header-anchor" href="#_2-1-远程连接提示" aria-hidden="true">#</a> 2.1 远程连接提示</h3><p>ORA-12514: TNS:listener does not currently know of service requested in connect descriptor</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200507212411220.png" alt="image-20200507212411220" tabindex="0" loading="lazy"><figcaption>image-20200507212411220</figcaption></figure><p>主要原因是service name 设置的并不是ORCL 导致</p><ul><li><p>解决方案：</p><p>service name 改为 helowin</p></li><li><p>解决步骤</p><ol><li><p>进入docker 容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> oracle_11g <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>进入 tnsnames.ora所在的目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home/oracle/app/oracle/product/11.2.0/dbhome_2/network/admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查看 tnsnames.ora</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vi  tnsnames.ora
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以看到SERVICE_NAME = helowin</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200507213419605.png" alt="image-20200507213419605" tabindex="0" loading="lazy"><figcaption>image-20200507213419605</figcaption></figure><p>serviceName 改为helowin 或者这里改为orcl</p></li></ol></li></ul><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,10),p={href:"https://segmentfault.com/a/1190000020633619",target:"_blank",rel:"noopener noreferrer"},u={href:"https://blog.csdn.net/weixin_30657541/article/details/98204681",target:"_blank",rel:"noopener noreferrer"};function m(b,v){const a=o("ExternalLinkIcon");return l(),r("div",null,[t,e("p",null,[e("a",p,[s("centos7使用docker安装oracle"),n(a)])]),e("p",null,[e("a",u,[s("Linux下如何查找sqlnet.ora 和listener.ora 和tnsnames.ora 配置文件的目录"),n(a)])])])}const g=i(d,[["render",m],["__file","oracle-z-docker-install.html.vue"]]);export{g as default};
