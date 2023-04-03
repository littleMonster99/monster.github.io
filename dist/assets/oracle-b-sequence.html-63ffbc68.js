import{_ as a,W as s,X as p,Y as e,Z as l,$ as t,a0 as r,D as c}from"./framework-f64bc974.js";const i={},d=r(`<h1 id="oracle基础-序列" tabindex="-1"><a class="header-anchor" href="#oracle基础-序列" aria-hidden="true">#</a> Oracle基础-序列</h1><p>create sequence SEQ_TEST</p><p>minvalue 1 --最小值</p><p>nomaxvalue --不设置最大值</p><p>start with 1 --从1开始计数</p><p>increment by 1 --每次加1个</p><p>nocycle --一直累加，不循环</p><p>nocache; --不建缓冲区</p><h2 id="_1-创建序列" tabindex="-1"><a class="header-anchor" href="#_1-创建序列" aria-hidden="true">#</a> 1. 创建序列</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create sequence seq_user
  increment by 1
  minvalue 1
  nomaxvalue
  start with 1
  nocycle 
  cache 20;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-修改序列的当前值的3种方式" tabindex="-1"><a class="header-anchor" href="#_2-修改序列的当前值的3种方式" aria-hidden="true">#</a> 2. 修改序列的当前值的3种方式</h2><h3 id="_2-1-方式一-使用plsql" tabindex="-1"><a class="header-anchor" href="#_2-1-方式一-使用plsql" aria-hidden="true">#</a> 2.1 <strong>方式一：使用plsql；</strong></h3><p>打开plsql，找到sequences</p><p>找到要修改的序列--》右键--》编辑--》更改：下一个数字的值即可。</p><h3 id="_2-2-方式二-重建序列" tabindex="-1"><a class="header-anchor" href="#_2-2-方式二-重建序列" aria-hidden="true">#</a> 2.2 <strong>方式二：重建序列；</strong></h3><p>错误方式：</p><p>具体步骤是：删除原来的序列，重新创建。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 删除序列</span>
<span class="token keyword">DROP</span> SEQUENCE seq_sys_dept<span class="token punctuation">;</span>
<span class="token comment">-- 重建序列</span>
<span class="token comment">-- 其中，start with 后面跟的就是起始值（下次调用此序列时，将会出现的值）</span>
<span class="token keyword">CREATE</span> SEQUENCE seq_sys_dept
    minvalue <span class="token number">1</span>
    maxvalue <span class="token number">9999999999999999999</span>
    INCREMENT <span class="token keyword">BY</span> <span class="token number">1</span>
    <span class="token keyword">START</span> <span class="token keyword">WITH</span> <span class="token number">23725</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>start with 后面跟的就是起始值（下次调用此序列时，将会出现的值） 。</p><h3 id="_2-3-方式三-使用sql。" tabindex="-1"><a class="header-anchor" href="#_2-3-方式三-使用sql。" aria-hidden="true">#</a> 2.3 <strong>方式三：使用sql。</strong></h3><p>这一个，是本文的重点；</p><p>我们由方式一可以知道：通过plsql的可视化操作界面，是可以修改的。</p><p>那plsql到底是怎么实现的？一起来看下：</p><p>选中序列--》右键--》编辑</p><p>第一步：修改起始值；</p><p>第二步：点击右下角的“查看SQL”。</p><p>说明：</p><p>起初，这里的起始值是300，我给它改成了30，实现的效果就是：</p><p>将序列的下一个值改成了30，以后序列将会从30往后叠加。</p><p>然后，看下面这张图，要实现序列起始值的修改，需要3步。</p><p>第一步：更改序列的步长；</p><p>alter sequence SEQ_META_THEME_TABLE increment by -271 nocache;</p><p>我们需要明白一个前提：</p><p>序列的值是怎么来的？</p><p>当前值+步长（增量）</p><p>所以，我们想要修改序列的当前值，就必须自改序列的增量。</p><p>第二步：查询序列值；</p><p>select SEQ_META_THEME_TABLE.nextval from dual;</p><p>这一步的目的是：改变序列的当前值，让其按照自己预设的增量来完成序列当前值的修改工作。</p><p>到这一步，该序列返回的当前值已经改成了300-271=29（下次调用将会返回30）。</p><p>第三步：将序列的增量改成1。</p><p>alter sequence SEQ_META_THEME_TABLE increment by 1 cache 20;</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- Modify the last number </span>
<span class="token keyword">alter</span> sequence SEQ_META_THEME_TABLE increment <span class="token keyword">by</span> <span class="token operator">-</span><span class="token number">271</span> nocache<span class="token punctuation">;</span>
<span class="token keyword">select</span> SEQ_META_THEME_TABLE<span class="token punctuation">.</span>nextval <span class="token keyword">from</span> dual<span class="token punctuation">;</span>
<span class="token keyword">alter</span> sequence SEQ_META_THEME_TABLE increment <span class="token keyword">by</span> <span class="token number">1</span> cache <span class="token number">20</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不信？我们把SQL复制出来，执行一下。</p><p>把序列值变大（30--&gt;300）</p><p>关于增量的计算：</p><p>如果更改后值(afterNum)&gt;现在序列的下一个值(nextNum)，增量(step)=afterNum - nextNum；</p><p>如果更改后值(afterNum)&lt;现在序列的下一个值(nextNum)，增量(step)=afterNum - nextNum - 1；</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,49),o={href:"http://www.manongjc.com/detail/28-blnqrnlyhtnlqul.html",target:"_blank",rel:"noopener noreferrer"};function u(m,h){const n=c("ExternalLinkIcon");return s(),p("div",null,[d,e("p",null,[e("a",o,[l("Oracle 修改序列的当前值的3种方式"),t(n)])])])}const _=a(i,[["render",u],["__file","oracle-b-sequence.html.vue"]]);export{_ as default};
