import{_ as r,W as i,X as n,Y as e,Z as t,$ as h,a0 as s,D as d}from"./framework-f64bc974.js";const l={},o=s('<h1 id="索引常见的数据结构" tabindex="-1"><a class="header-anchor" href="#索引常见的数据结构" aria-hidden="true">#</a> 索引常见的数据结构</h1><h2 id="_1-顺序查找" tabindex="-1"><a class="header-anchor" href="#_1-顺序查找" aria-hidden="true">#</a> 1. 顺序查找</h2><p><strong>算法复杂度：O(n)</strong></p><p>最基本的查询算法，复杂度O(n),大数据量时此算法效率非常糟糕</p><h2 id="_2-二叉树查找-binary-tree-search" tabindex="-1"><a class="header-anchor" href="#_2-二叉树查找-binary-tree-search" aria-hidden="true">#</a> 2. 二叉树查找(binary tree search)</h2><p><strong>算法复杂度：O(log2n)</strong></p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190904230943376.png" alt="image-20190904230943376" tabindex="0" loading="lazy"><figcaption>image-20190904230943376</figcaption></figure><p>左边是数据表，一共有两列七条记录，最左边的是数据记录的物理地址。（逻辑相邻的记录在磁盘上也并不一定是物理相邻）。</p><p>为了加快col2 的查找，可以维护一个右边所示的二叉查找树，<strong>每个节点分别包含索引键值和一个指向对应数据记录物理地址的指针</strong>，这样就可以运用二叉查找在O(log2n)的复杂度内获取响应的数据</p><h2 id="_3-hash索引" tabindex="-1"><a class="header-anchor" href="#_3-hash索引" aria-hidden="true">#</a> 3. hash索引</h2><ul><li>优点： <ul><li>查询效率高</li></ul></li><li>缺点 <ul><li>无法满足范围查找 <ul><li>仅仅能满足“=”，“in” ,不能使用范围查询</li><li>无法被用来避免数据的排序操作</li><li>不能利用部分索引键查询</li><li>不能避免表扫描</li><li>遇到大量Hash值相等的情况后，性能不一定就会比B-Tree索引高</li></ul></li></ul></li></ul><h2 id="_4-二叉树、红黑树" tabindex="-1"><a class="header-anchor" href="#_4-二叉树、红黑树" aria-hidden="true">#</a> 4. 二叉树、红黑树</h2><p><strong>算法复杂度：O(h)</strong></p><p>这将导致树的高度非常高。（平衡二叉树一个节点只能有左子树和右子树），<strong>逻辑上很近的节点（父子）物理上可能很远，无法利用局部性，IO次数多查找慢，效率低</strong>（逻辑上相邻节点没法直接通过顺序指针关联，可能需要迭代回上层节点重复向下遍历查找对应的节点，效率低）</p><h2 id="_5-b-tree" tabindex="-1"><a class="header-anchor" href="#_5-b-tree" aria-hidden="true">#</a> 5. B-Tree</h2><p>结构：<strong>B-Tree 每个节点都是一个二元数组</strong>，所有的节点都可以存储数据，key为索引key，data为除key 指代的数据。结构如下</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190904234252606.png" alt="image-20190904234252606" tabindex="0" loading="lazy"><figcaption>image-20190904234252606</figcaption></figure><h3 id="_5-1-检索原理" tabindex="-1"><a class="header-anchor" href="#_5-1-检索原理" aria-hidden="true">#</a> 5.1 检索原理：</h3><p>首先从<strong>根节点进行二分查找</strong>，如果找到则返回对应节点的data，否则<strong>对相应区间的指针指向的节点递归</strong>进行查找，直到找到节点或未找到节点返回null指针。</p><h3 id="_5-2-b-tree缺点" tabindex="-1"><a class="header-anchor" href="#_5-2-b-tree缺点" aria-hidden="true">#</a> 5.2 B-Tree缺点</h3><ul><li>插入删除新的数据记录会破坏B-Tree的性质，因此在插入删除时，需要对树进行一个分裂、合并、转移等操作以保持B-Tree性质。造成IO操作频繁</li><li>区间查找可能需要返回上层节点重复遍历，IO操作繁琐。</li></ul><h2 id="_6-b-tree" tabindex="-1"><a class="header-anchor" href="#_6-b-tree" aria-hidden="true">#</a> 6. B+Tree</h2><p>B+Tree 是B-Tree的变种</p><h3 id="_6-1-与b-tree的不同点" tabindex="-1"><a class="header-anchor" href="#_6-1-与b-tree的不同点" aria-hidden="true">#</a> 6.1 与B-Tree的不同点</h3><ul><li>非叶子节点不存储data，只存储索引key；</li><li>只有叶子节点才存储data</li></ul><h3 id="_6-2-b-tree数据结构" tabindex="-1"><a class="header-anchor" href="#_6-2-b-tree数据结构" aria-hidden="true">#</a> 6.2 B+Tree数据结构</h3><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190904235621742.png" alt="image-20190904235621742" tabindex="0" loading="lazy"><figcaption>image-20190904235621742</figcaption></figure><h3 id="_6-3-mysql-中的b-tree" tabindex="-1"><a class="header-anchor" href="#_6-3-mysql-中的b-tree" aria-hidden="true">#</a> 6.3 MySQL 中的B+Tree</h3><h4 id="_6-3-1-概述" tabindex="-1"><a class="header-anchor" href="#_6-3-1-概述" aria-hidden="true">#</a> 6.3.1 概述</h4><p>在经典B+Tree的基础上进行了优化，增加了<strong>顺序访问指针</strong>。</p><h4 id="_6-3-2-详细" tabindex="-1"><a class="header-anchor" href="#_6-3-2-详细" aria-hidden="true">#</a> 6.3.2 详细</h4><p>在B+Tree的每个叶子节点增加一个指向相邻叶子节点的指针，就形成了<strong>带有顺序访问指针的B+Tree</strong>。这样就<strong>提高了区间访问性能</strong>：</p><h4 id="_6-3-3-案例" tabindex="-1"><a class="header-anchor" href="#_6-3-3-案例" aria-hidden="true">#</a> 6.3.3 案例：</h4><p>如果要查询key为从18到49的所有数据记录，当找到18后，只需顺着节点和指针顺序遍历就可以一次性访问到所有数据节点，极大提到了区间查询效率(<strong>无需返回上层父节点重复遍历查找减少IO操作</strong>)。</p><h4 id="_6-3-4-数据结构" tabindex="-1"><a class="header-anchor" href="#_6-3-4-数据结构" aria-hidden="true">#</a> 6.3.4 数据结构</h4><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190905000332979.png" alt="image-20190905000332979" tabindex="0" loading="lazy"><figcaption>image-20190905000332979</figcaption></figure><h3 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h3>',37),g={href:"https://www.jianshu.com/p/486a514b0ded",target:"_blank",rel:"noopener noreferrer"};function c(b,u){const a=d("ExternalLinkIcon");return i(),n("div",null,[o,e("p",null,[e("a",g,[t("MYSQL-B+TREE索引原理"),h(a)])])])}const _=r(l,[["render",c],["__file","mysql-c-index-structure.html.vue"]]);export{_ as default};