import{_ as a,W as n,X as s,a0 as e}from"./framework-f64bc974.js";const i={},r=e(`<h1 id="linux文件解压" tabindex="-1"><a class="header-anchor" href="#linux文件解压" aria-hidden="true">#</a> Linux文件解压</h1><h2 id="_1-tar命令详解" tabindex="-1"><a class="header-anchor" href="#_1-tar命令详解" aria-hidden="true">#</a> 1. tar命令详解</h2><h3 id="_1-1-五个独立命令" tabindex="-1"><a class="header-anchor" href="#_1-1-五个独立命令" aria-hidden="true">#</a> 1.1 五个独立命令</h3><p>这五个是独立的命令，压缩解压都要<strong>用到其中一个</strong>，<strong>可以和别的命令连用但只能用其中一个</strong>。</p><p>-c: 建立压缩档案</p><p>-x：解压</p><p>-t：查看内容</p><p>-r：向压缩归档文件末尾追加文件</p><p>-u：更新原压缩包中的文件</p><h3 id="_1-2-可选命令" tabindex="-1"><a class="header-anchor" href="#_1-2-可选命令" aria-hidden="true">#</a> 1.2 可选命令</h3><p>下面的参数是根据需要在压缩或解压档案时可选的。</p><p>-z：有gzip属性的</p><p>-j：有bz2属性的</p><p>-Z：有compress属性的</p><p>-v：显示所有过程</p><p>-O：将文件解开到标准输出</p><h3 id="_1-3-最后一个必须参数-f" tabindex="-1"><a class="header-anchor" href="#_1-3-最后一个必须参数-f" aria-hidden="true">#</a> 1.3 最后一个必须参数-f</h3><p>-f: 使用档案名字，切记，这个参数是最后一个参数，后面只能接档案名。</p><h2 id="_2-常用解压" tabindex="-1"><a class="header-anchor" href="#_2-常用解压" aria-hidden="true">#</a> 2. 常用解压</h2><p><strong>压缩</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> –cvf jpg.tar *.jpg       // 将目录里所有jpg文件打包成 tar.jpg 
<span class="token function">tar</span> –czf jpg.tar.gz *.jpg    // 将目录里所有jpg文件打包成 jpg.tar 后，并且将其用 <span class="token function">gzip</span> 压缩，生成一个 <span class="token function">gzip</span> 压缩过的包，命名为 jpg.tar.gz 
<span class="token function">tar</span> –cjf jpg.tar.bz2 *.jpg   // 将目录里所有jpg文件打包成 jpg.tar 后，并且将其用 <span class="token function">bzip2</span> 压缩，生成一个 <span class="token function">bzip2</span> 压缩过的包，命名为jpg.tar.bz2 
<span class="token function">tar</span> –cZf jpg.tar.Z *.jpg     // 将目录里所有 jpg 文件打包成 jpg.tar 后，并且将其用 compress 压缩，生成一个 umcompress 压缩过的包，命名为jpg.tar.Z 
<span class="token function">rar</span> a jpg.rar *.jpg          // rar格式的压缩，需要先下载 <span class="token function">rar</span> <span class="token keyword">for</span> linux 
<span class="token function">zip</span> jpg.zip *.jpg            // zip格式的压缩，需要先下载 <span class="token function">zip</span> <span class="token keyword">for</span> linux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解压</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> –xvf file.tar         // 解压 <span class="token function">tar</span> 包 
<span class="token function">tar</span> <span class="token parameter variable">-xzvf</span> file.tar.gz     // 解压 tar.gz 
<span class="token function">tar</span> <span class="token parameter variable">-xjvf</span> file.tar.bz2    // 解压 tar.bz2 
<span class="token function">tar</span> –xZvf file.tar.Z      // 解压 tar.Z 
<span class="token function">unrar</span> e file.rar          // 解压 <span class="token function">rar</span> 
<span class="token function">unzip</span> file.zip            // 解压 <span class="token function">zip</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-7z-操作" tabindex="-1"><a class="header-anchor" href="#_2-7z-操作" aria-hidden="true">#</a> 2. 7z 操作</h2><ol><li><p>安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install p7zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>压缩</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>7za a 压缩包.7z 被压缩文件或目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li><p>解压</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#将压缩包解压到指定目录，注意：指定目录参数-o后面不要有空格
7za x 压缩包.7z -o解压目录
#将压缩包解压到当前目录
7za x 压缩包.7z
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,27),t=[r];function p(l,d){return n(),s("div",null,t)}const o=a(i,[["render",p],["__file","linux-k-compress.html.vue"]]);export{o as default};
