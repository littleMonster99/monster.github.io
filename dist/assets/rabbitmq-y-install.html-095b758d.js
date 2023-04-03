import{_ as t,W as d,X as s,Y as e,Z as a,$ as r,a0 as n,D as l}from"./framework-f64bc974.js";const c={},o=n(`<h1 id="rabbitmq安装-rabbitmq安装" tabindex="-1"><a class="header-anchor" href="#rabbitmq安装-rabbitmq安装" aria-hidden="true">#</a> RabbitMQ安装 - RabbitMQ安装</h1><h2 id="_1-安装erlang" tabindex="-1"><a class="header-anchor" href="#_1-安装erlang" aria-hidden="true">#</a> 1. 安装erlang</h2><h3 id="_1-1-下载erlang-安装包" tabindex="-1"><a class="header-anchor" href="#_1-1-下载erlang-安装包" aria-hidden="true">#</a> 1.1 下载erlang 安装包</h3><p>在官网下载然后上传到 Linux 上或者直接使用下面的命令下载对应的版本。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget http://erlang.org/download/otp_src_19.3.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-2-解压erlang-安装包" tabindex="-1"><a class="header-anchor" href="#_1-2-解压erlang-安装包" aria-hidden="true">#</a> 1.2 解压erlang 安装包</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tar -xvzf otp_src_19.3.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-3-删除erlang-安装包" tabindex="-1"><a class="header-anchor" href="#_1-3-删除erlang-安装包" aria-hidden="true">#</a> 1.3 删除erlang 安装包</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rm -rf otp_src_19.3.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-4-安装erlang-的依赖工具" tabindex="-1"><a class="header-anchor" href="#_1-4-安装erlang-的依赖工具" aria-hidden="true">#</a> 1.4 安装erlang 的依赖工具</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum -y install make gcc gcc-c++ kernel-devel m4 ncurses-devel openssl-devel unixODBC-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-5-进入-erlang-安装包解压文件对erlang-进行安装环境的配置" tabindex="-1"><a class="header-anchor" href="#_1-5-进入-erlang-安装包解压文件对erlang-进行安装环境的配置" aria-hidden="true">#</a> 1.5 进入 erlang 安装包解压文件对erlang 进行安装环境的配置</h3><p>在/usr/local新建一个文件夹</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir erlang
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对erlang 进行安装环境配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./configure --prefix=/usr/local/erlang --without-javac
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-6-编译安装" tabindex="-1"><a class="header-anchor" href="#_1-6-编译安装" aria-hidden="true">#</a> 1.6 编译安装</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>make &amp;&amp; make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-7-验证erlang-是否安装成功" tabindex="-1"><a class="header-anchor" href="#_1-7-验证erlang-是否安装成功" aria-hidden="true">#</a> 1.7 验证erlang 是否安装成功</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./bin/erl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行下面的语句输出“hello world”</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>io:format(&quot;hello world~n&quot;, []).
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20191107002303817.png" alt="image-20191107002303817" tabindex="0" loading="lazy"><figcaption>image-20191107002303817</figcaption></figure><p>到此就安装完毕</p><h3 id="_1-8-配置-erlang-环境变量" tabindex="-1"><a class="header-anchor" href="#_1-8-配置-erlang-环境变量" aria-hidden="true">#</a> 1.8 配置 erlang 环境变量</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>追加下列环境变量到文件末尾</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#erlang
ERL_HOME=/usr/local/erlang
PATH=$ERL_HOME/bin:$PATH
export ERL_HOME PATH
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行下列命令使配置文件<code>profile</code>生效</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>source /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输入 erl 查看 erlang 环境变量是否配置正确</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20191107002712325.png" alt="image-20191107002712325" tabindex="0" loading="lazy"><figcaption>image-20191107002712325</figcaption></figure><h2 id="_2-安装-rabbitmq" tabindex="-1"><a class="header-anchor" href="#_2-安装-rabbitmq" aria-hidden="true">#</a> 2. 安装 RabbitMQ</h2><h3 id="_2-1-下载-rpm" tabindex="-1"><a class="header-anchor" href="#_2-1-下载-rpm" aria-hidden="true">#</a> 2.1 下载 rpm</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget https://www.rabbitmq.com/releases/rabbitmq-server/v3.6.8/rabbitmq-server-3.6.8-1.el7.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-2-安装rpm" tabindex="-1"><a class="header-anchor" href="#_2-2-安装rpm" aria-hidden="true">#</a> 2.2 安装rpm</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpm --import https://www.rabbitmq.com/rabbitmq-release-signing-key.asc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>紧接着执行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install rabbitmq-server-3.6.8-1.el7.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-3-开启-web-管理插件" tabindex="-1"><a class="header-anchor" href="#_2-3-开启-web-管理插件" aria-hidden="true">#</a> 2.3 开启 web 管理插件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rabbitmq-plugins enable rabbitmq_management
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-4-设置开机启动" tabindex="-1"><a class="header-anchor" href="#_2-4-设置开机启动" aria-hidden="true">#</a> 2.4 设置开机启动</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>chkconfig rabbitmq-server on
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-5-启动服务" tabindex="-1"><a class="header-anchor" href="#_2-5-启动服务" aria-hidden="true">#</a> 2.5 启动服务</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>service rabbitmq-server start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-6-查看服务状态" tabindex="-1"><a class="header-anchor" href="#_2-6-查看服务状态" aria-hidden="true">#</a> 2.6 查看服务状态</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>service rabbitmq-server status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-7-访问rabbitmq-控制台" tabindex="-1"><a class="header-anchor" href="#_2-7-访问rabbitmq-控制台" aria-hidden="true">#</a> 2.7 访问RabbitMQ 控制台</h3>`,48),g={href:"http://xn--ip-0p3ck01akcu41v:15672/",target:"_blank",rel:"noopener noreferrer"},u=n(`<p>默认用户名和密码： guest/guest;但是需要注意的是：guestuest用户只是被容许从localhost访问。官网文档描述如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>“guest” user can only connect via localhost
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>解决远程访问 RabbitMQ 远程访问密码错误</strong></p><p>新建用户并授权</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rabbitmqctl add_user root root
rabbitmqctl set_user_tags root administrator
rabbitmqctl set_permissions -p / root &quot;.*&quot; &quot;.*&quot; &quot;.*&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20191107003531187.png" alt="image-20191107003531187" tabindex="0" loading="lazy"><figcaption>image-20191107003531187</figcaption></figure>`,6),m={href:"http://xn--ip-0p3ck01akcu41v:15672/",target:"_blank",rel:"noopener noreferrer"},b=e("figure",null,[e("img",{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20191107003626827.png",alt:"image-20191107003626827",tabindex:"0",loading:"lazy"}),e("figcaption",null,"image-20191107003626827")],-1);function h(v,p){const i=l("ExternalLinkIcon");return d(),s("div",null,[o,e("p",null,[a("浏览器访问："),e("a",g,[a("http://你的ip地址:15672/"),r(i)])]),u,e("p",null,[a("再次访问:"),e("a",m,[a("http://你的ip地址:15672/"),r(i)]),a(" ,输入用户名和密码：root root")]),b])}const _=t(c,[["render",h],["__file","rabbitmq-y-install.html.vue"]]);export{_ as default};
