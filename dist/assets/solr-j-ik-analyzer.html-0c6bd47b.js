import{_ as p,W as o,X as l,Y as a,Z as s,$ as t,a0 as e,D as c}from"./framework-f64bc974.js";const i={},u=e('<h1 id="solr配置中文分词器ik-analyzer" tabindex="-1"><a class="header-anchor" href="#solr配置中文分词器ik-analyzer" aria-hidden="true">#</a> Solr配置中文分词器ik-analyzer</h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景" aria-hidden="true">#</a> 1. 背景</h2><h2 id="_2-集成步骤" tabindex="-1"><a class="header-anchor" href="#_2-集成步骤" aria-hidden="true">#</a> 2. 集成步骤</h2><p>下载ik分词器</p>',4),r={href:"https://github.com/magese/ik-analyzer-solr",target:"_blank",rel:"noopener noreferrer"},d={href:"https://search.maven.org/search?q=g:com.github.magese%20AND%20a:ik-analyzer&core=gav",target:"_blank",rel:"noopener noreferrer"},k=e(`<ol><li><p>将jar包放入Solr服务的<code>Jetty</code>或<code>Tomcat</code>的<code>webapp/WEB-INF/lib/</code>目录下；</p><blockquote><p>默认位置：E:\\solr-7.7\\solr-7.7.3\\server\\solr-webapp\\webapp\\WEB-INF\\lib</p></blockquote></li><li><p>将<code>resources</code>目录下的5个配置文件放入solr服务的<code>Jetty</code>或<code>Tomcat</code>的<code>webapp/WEB-INF/classes/</code>目录下；</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>① IKAnalyzer.cfg.xml
② ext.dic
③ stopword.dic
④ ik.conf
⑤ dynamicdic.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置Solr的<code>managed-schema</code>，添加<code>ik分词器</code>，示例如下；</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- ik分词器 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fieldType</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text_ik<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>solr.TextField<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>analyzer</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tokenizer</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.wltea.analyzer.lucene.IKTokenizerFactory<span class="token punctuation">&quot;</span></span> <span class="token attr-name">useSmart</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">conf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ik.conf<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>solr.LowerCaseFilterFactory<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>analyzer</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>analyzer</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>query<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tokenizer</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.wltea.analyzer.lucene.IKTokenizerFactory<span class="token punctuation">&quot;</span></span> <span class="token attr-name">useSmart</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">conf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ik.conf<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>solr.LowerCaseFilterFactory<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>analyzer</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fieldType</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置完成，重启服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>solr stop <span class="token parameter variable">-all</span>
solr start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启动Solr服务测试分词</p><p>选择core-&gt; Analysis -&gt; 选择分词器 text_ik 输入 &quot;黑夜给了我黑色的眼睛&quot;-&gt;点击&quot;Analyse Values&quot;按钮</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210304172543651.png" alt="image-20210304172543651" tabindex="0" loading="lazy"><figcaption>image-20210304172543651</figcaption></figure></li></ol><h2 id="_3-ik分词器配置" tabindex="-1"><a class="header-anchor" href="#_3-ik分词器配置" aria-hidden="true">#</a> 3. ik分词器配置</h2><ol><li><p><code>ik.conf</code>文件说明：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>files=dynamicdic.txt
lastupdate=0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><code>files</code>为动态词典列表，可以设置多个词典表，用逗号进行分隔，默认动态词典表为<code>dynamicdic.txt</code>；</li><li><code>lastupdate</code>默认值为<code>0</code>，每次对动态词典表修改后请+1，不然不会将词典表中新的词语添加到内存中。</li></ol></li><li><p><code>dynamicdic.txt</code> 为动态词典</p><p>在此文件配置的词语不需重启服务即可加载进内存中。 以<code>#</code>开头的词语视为注释，将不会加载到内存中。</p></li></ol><h2 id="_4-设置同义词或停止词" tabindex="-1"><a class="header-anchor" href="#_4-设置同义词或停止词" aria-hidden="true">#</a> 4. 设置同义词或停止词</h2><h3 id="_4-1-同义词示例" tabindex="-1"><a class="header-anchor" href="#_4-1-同义词示例" aria-hidden="true">#</a> 4.1 同义词示例</h3><p>例如在利用word分词后，查询“下跌”，得到结果如下：</p><h4 id="_4-1-1-没有同义词的情况" tabindex="-1"><a class="header-anchor" href="#_4-1-1-没有同义词的情况" aria-hidden="true">#</a> 4.1.1 没有同义词的情况</h4><p>查询“下跌”，找到一片文档</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220408163051893.png" alt="image-20220408163051893" tabindex="0" loading="lazy"><figcaption>image-20220408163051893</figcaption></figure><p>查询“下降”是没有结果的：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220408163108228.png" alt="image-20220408163108228" tabindex="0" loading="lazy"><figcaption>image-20220408163108228</figcaption></figure><h4 id="_4-1-2-同义词配置" tabindex="-1"><a class="header-anchor" href="#_4-1-2-同义词配置" aria-hidden="true">#</a> 4.1.2 同义词配置</h4><p>在synonyms.txt配置： <code>下降=&gt;下跌</code> 或者设置为： <code>下降,下跌</code> 前者表示为将下降转换为下跌，后者表示这些词可以相互替换。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Some synonym groups specific to this example
GB,gib,gigabyte,gigabytes
MB,mib,megabyte,megabytes
Television, Televisions, TV, TVs
# 用逗号和=&gt;都可以
# 下降,下跌
下降=&gt;都可以下跌
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，还要记得在相应的fieldType加上对同义词的支持：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fieldType</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text_general<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>solr.TextField<span class="token punctuation">&quot;</span></span> <span class="token attr-name">positionIncrementGap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">multiValued</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>analyzer</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tokenizer</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.apdplat.word.solr.ChineseWordTokenizerFactory<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>analyzer</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>analyzer</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>query<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tokenizer</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.apdplat.word.solr.ChineseWordTokenizerFactory<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>solr.SynonymFilterFactory<span class="token punctuation">&quot;</span></span> <span class="token attr-name">expand</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ignoreCase</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">synonyms</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>synonyms.txt<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>analyzer</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-1-3-重启后生效" tabindex="-1"><a class="header-anchor" href="#_4-1-3-重启后生效" aria-hidden="true">#</a> 4.1.3 重启后生效</h4><p>重启solr之后再查询“下降”：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220408163420536.png" alt="image-20220408163420536" tabindex="0" loading="lazy"><figcaption>image-20220408163420536</figcaption></figure><p>配置同义词转换后，查询“下降”则会返回跟“下跌”一样的结果</p><h2 id="_5-遇到的问题" tabindex="-1"><a class="header-anchor" href="#_5-遇到的问题" aria-hidden="true">#</a> 5. 遇到的问题</h2><h3 id="_5-1-ik搜索不要加" tabindex="-1"><a class="header-anchor" href="#_5-1-ik搜索不要加" aria-hidden="true">#</a> 5.1 ik搜索不要加*</h3><p>如果手动设置加 * 内容 *，那么星号里面的内容将不会被分词</p><h2 id="_5-2-搜索结果问题" tabindex="-1"><a class="header-anchor" href="#_5-2-搜索结果问题" aria-hidden="true">#</a> 5.2 搜索结果问题</h2><p>ik 分词，对于既有文字又有数字的搜索。他的拆词是不合适的</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220408205357892.png" alt="image-20220408205357892" tabindex="0" loading="lazy"><figcaption>image-20220408205357892</figcaption></figure>`,26);function g(m,v){const n=c("ExternalLinkIcon");return o(),l("div",null,[u,a("p",null,[a("a",r,[s("官方文档"),t(n)])]),a("p",null,[a("a",d,[s("下载地址"),t(n)])]),k])}const b=p(i,[["render",g],["__file","solr-j-ik-analyzer.html.vue"]]);export{b as default};
