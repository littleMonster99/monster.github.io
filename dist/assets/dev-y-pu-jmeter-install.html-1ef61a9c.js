import{_ as n,W as t,X as s,Y as e,Z as a,$ as d,a0 as i,D as l}from"./framework-f64bc974.js";const o={},c=i('<h1 id="jmeter的安装" tabindex="-1"><a class="header-anchor" href="#jmeter的安装" aria-hidden="true">#</a> JMeter的安装</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>Apache JMeter 是一個 Apache 專案，目的是用來作 load test 工具，可以提供於分析和測量各種服務的性能，主要目標是 Web application。 JMeter 也可以用來進行 JDBC數據庫連接，FTP，LDAP，WebService，JMS，HTTP，一般 TCP 連線和 OSnative processes 的單元測試工具。</p><h2 id="_2-安装" tabindex="-1"><a class="header-anchor" href="#_2-安装" aria-hidden="true">#</a> 2. 安装</h2><p>安装方式有两种</p><h3 id="_2-1-手动安装" tabindex="-1"><a class="header-anchor" href="#_2-1-手动安装" aria-hidden="true">#</a> 2.1 手动安装</h3>',6),h={href:"https://jmeter.apache.org/download_jmeter.cgi",target:"_blank",rel:"noopener noreferrer"},g=e("li",null,[a("執行 "),e("code",null,"apache-jmeter-5.1.1/bin/jmeter.sh")],-1),m=i(`<h3 id="_2-2-使用-homebrew" tabindex="-1"><a class="header-anchor" href="#_2-2-使用-homebrew" aria-hidden="true">#</a> 2.2 使用 homebrew</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> jmeter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>会自动加入环境变量，不用指定执行路径</p><h2 id="_3-启动" tabindex="-1"><a class="header-anchor" href="#_3-启动" aria-hidden="true">#</a> 3. 启动</h2><h3 id="_3-1-终端启动" tabindex="-1"><a class="header-anchor" href="#_3-1-终端启动" aria-hidden="true">#</a> 3.1 终端启动</h3><p>直接在终端（任意目录）输入<code>jmeter</code>，即可启动JMeter。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200102181112165.png" alt="image-20200102181112165" tabindex="0" loading="lazy"><figcaption>image-20200102181112165</figcaption></figure><h3 id="_3-2安装路径启动" tabindex="-1"><a class="header-anchor" href="#_3-2安装路径启动" aria-hidden="true">#</a> 3.2安装路径启动</h3><p>安装完成后提示的安装路径</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/usr/local/Cellar/jmeter/5.2.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>点击bin下的</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200102104226244.png" alt="image-20200102104226244" tabindex="0" loading="lazy"><figcaption>image-20200102104226244</figcaption></figure><p>可以看到启动后的页面为：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200102104300100.png" alt="image-20200102104300100" tabindex="0" loading="lazy"><figcaption>image-20200102104300100</figcaption></figure><h2 id="_4-设置中文" tabindex="-1"><a class="header-anchor" href="#_4-设置中文" aria-hidden="true">#</a> 4. 设置中文</h2><h3 id="_4-1-临时设置中文" tabindex="-1"><a class="header-anchor" href="#_4-1-临时设置中文" aria-hidden="true">#</a> 4.1 临时设置中文</h3><p>Options-Choose Language-Chinese(S)</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220621140727177.png" alt="image-20220621140727177" tabindex="0" loading="lazy"><figcaption>image-20220621140727177</figcaption></figure><h3 id="_4-2-永久设置中文" tabindex="-1"><a class="header-anchor" href="#_4-2-永久设置中文" aria-hidden="true">#</a> 4.2 永久设置中文</h3><p>在jmeter安装路径<code>/usr/local/Cellar/jmeter/5.2.1/libexec/bin/</code>中的jmeter.properties，</p><ol><li>打开该文件</li><li>搜索#language=en，将#language=en修改为language=zh_CN。</li></ol>`,21);function p(u,b){const r=l("ExternalLinkIcon");return t(),s("div",null,[c,e("ol",null,[e("li",null,[a("下載並解壓 \b"),e("a",h,[a("Apache JMeter"),d(r)])]),g]),m])}const f=n(o,[["render",p],["__file","dev-y-pu-jmeter-install.html.vue"]]);export{f as default};
