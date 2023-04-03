import{_ as s,W as n,X as i,Y as e,Z as r,$ as t,a0 as o,D as c}from"./framework-f64bc974.js";const p={},l=o(`<h1 id="git-merge的三种操作" tabindex="-1"><a class="header-anchor" href="#git-merge的三种操作" aria-hidden="true">#</a> git merge的三种操作</h1><h2 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景" aria-hidden="true">#</a> 1. 背景</h2><p>git merge的三种操作merge, squash merge, 和rebase merge</p><p>举例来说： 假设在master分支的B点拉出一个新的分支dev，经过一段时间开发后：</p><ul><li>master分支上有两个新的提交M1和M2</li><li>dev分支上有三个提交D1，D2，和D3</li></ul><p>如下图所示：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211210215256075.png" alt="image-20211210215256075" tabindex="0" loading="lazy"><figcaption>image-20211210215256075</figcaption></figure><p>现在我们完成了dev分支的开发测试工作，需要把dev分支合并回master分支。</p><h2 id="_2-merge-的三种操作" tabindex="-1"><a class="header-anchor" href="#_2-merge-的三种操作" aria-hidden="true">#</a> 2. merge 的三种操作</h2><h3 id="_2-1-merge" tabindex="-1"><a class="header-anchor" href="#_2-1-merge" aria-hidden="true">#</a> 2.1 merge</h3><p>这是最基本的merge，就是把提交历史原封不动的拷贝过来，包含完整的提交历史记录。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout master
<span class="token function">git</span> merge dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211210215426765.png" alt="image-20211210215426765" tabindex="0" loading="lazy"><figcaption>image-20211210215426765</figcaption></figure><p><strong>此时还会生产一个merge commit (D4&#39;)</strong>，这个merge commit不包含任何代码改动，而包含在dev分支上的几个commit列表(D1, D2和D3)。查看git的提交历史(git log)可以看到所有的这些提交历史记录。</p><h3 id="_2-2-squash-merge" tabindex="-1"><a class="header-anchor" href="#_2-2-squash-merge" aria-hidden="true">#</a> 2.2 squash merge</h3><p>根据字面意思，这个操作完成的是压缩的提交；解决的是什么问题呢，由于在dev分支上执行的是开发工作，有一些很小的提交，或者是纠正前面的错误的提交，对于这类提交对整个工程来说不需要单独显示出来一次提交，不然导致项目的提交历史过于复杂；所以基于这种原因，我们可以把dev上的所有提交都合并成一个提交；然后提交到主干。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">git</span> checkout master
 <span class="token function">git</span> merge <span class="token parameter variable">--squash</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211210215937039.png" alt="image-20211210215937039" tabindex="0" loading="lazy"><figcaption>image-20211210215937039</figcaption></figure><p>在这个例子中，我们把D1，D2和D3的改动合并成了一个D。</p><p>注意，squash merge并不会替你产生提交，它只是把所有的改动合并，然后放在本地文件，需要你再次手动执行git commit操作；此时又要注意了，因为你要你手动commit，也就是说这个commit是你产生的，不是有原来dev分支上的开发人员产生的，提交者本身发生了变化。也可以这么理解，就是你把dev分支上的所有代码改动一次性porting到master分支上而已。</p><h3 id="_2-3-rebase-merge" tabindex="-1"><a class="header-anchor" href="#_2-3-rebase-merge" aria-hidden="true">#</a> 2.3 rebase merge</h3><p>由于squash merge会变更提交者作者信息，这是一个很大的问题，后期问题追溯不好处理(当然也可以由分支dev的所有者来执行squash merge操作，以解决部分问题)，rebase merge可以保留提交的作者信息，同时可以合并commit历史，完美的解决了上面的问题。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">git</span> checkout dev
 <span class="token function">git</span> rebase <span class="token parameter variable">-i</span> master
 <span class="token function">git</span> checkout master
 <span class="token function">git</span> merge dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rebase merge分两步完成： 第一步：执行rebase操作，结果是看起来dev分支是从M2拉出来的，而不是从B拉出来的，然后使用-i参数手动调整commit历史，是否合并如何合并。例如下rebase -i命令会弹出文本编辑框：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pick <span class="token operator">&lt;</span>D<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> Message <span class="token keyword">for</span> commit <span class="token comment">#1</span>
pick <span class="token operator">&lt;</span>D<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> Message <span class="token keyword">for</span> commit <span class="token comment">#2</span>
pick <span class="token operator">&lt;</span>D<span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span> Message <span class="token keyword">for</span> commit <span class="token comment">#3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设D2是对D1的一个拼写错误修正，因此可以不需要显式的指出来，我们把D2修改为fixup：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pick <span class="token operator">&lt;</span>D<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> Message <span class="token keyword">for</span> commit <span class="token comment">#1</span>
fixup <span class="token operator">&lt;</span>D<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> Message <span class="token keyword">for</span> commit <span class="token comment">#2</span>
pick <span class="token operator">&lt;</span>D<span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span> Message <span class="token keyword">for</span> commit <span class="token comment">#3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rebase之后的状态变为：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211210220238914.png" alt="image-20211210220238914" tabindex="0" loading="lazy"><figcaption>image-20211210220238914</figcaption></figure><p>D1&#39;是D1和D2的合并。</p><p>第二步：再执行merge操作，把dev分支合并到master分支：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211210220256208.png" alt="image-20211210220256208" tabindex="0" loading="lazy"><figcaption>image-20211210220256208</figcaption></figure><p>注意：在执行rebase的时候可能会出现冲突的问题，此时需要手工解决冲突的问题，然后执行(git add)命令；所有冲突解决完之后，这时不需要执行(git commit)命令，而是运行(git rebase --continue)命令，一直到rebase完成；如果中途想放弃rebase操作，可以运行(git rebase --abort)命令回到rebase之前的状态。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,34),g={href:"https://www.jianshu.com/p/ff1877c5864e",target:"_blank",rel:"noopener noreferrer"};function m(d,u){const a=c("ExternalLinkIcon");return n(),i("div",null,[l,e("p",null,[e("a",g,[r("git merge的三种操作merge, squash merge, 和rebase merge"),t(a)])])])}const b=s(p,[["render",m],["__file","git-x-merge.html.vue"]]);export{b as default};
