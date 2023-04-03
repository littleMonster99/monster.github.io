import{_ as i,W as l,X as r,Y as e,Z as h,$ as n,a0 as d,D as t}from"./framework-f64bc974.js";const o={},c=d('<h1 id="项目管理-代码走查" tabindex="-1"><a class="header-anchor" href="#项目管理-代码走查" aria-hidden="true">#</a> 项目管理 - 代码走查</h1><h2 id="_1-目的" tabindex="-1"><a class="header-anchor" href="#_1-目的" aria-hidden="true">#</a> 1. 目的</h2><p>代码走查的好处非常多，</p><ul><li>第一个是让新同学快速熟悉代码并了解系统。</li><li>第二个是做资损防控的事前检查，在事前规避引发线上故障。</li><li>第三个是通过一起讨论和审查，加强团队代码阅读和编写能力，让大家编写出优秀的代码。</li></ul><p>代码走查的优点非常多，但是最核心的还是希望通过代码走查提前发现问题并解决问题。</p><p>所以基于以上目的，代码走查不是为了找到代码写的差的程序员加以批评，不是为了找到差的代码，而是一起发现问题共同成长，所以对于写代码的同学不需要过于紧张，但是在代码走查前自己可以先看一次优化一遍，不过所有的变更必须有单元测试覆盖，否则为了优化代码又会引发新的问题。</p><h2 id="_2-什么场景应该做代码走查" tabindex="-1"><a class="header-anchor" href="#_2-什么场景应该做代码走查" aria-hidden="true">#</a> 2. 什么场景应该做代码走查？</h2><p>我认为有几个时机点是需要做代码走查的，</p><ul><li>第一个是定期，每几个月定期做一次代码走查。</li><li>第二个是有重大变更时做代码走查，如代码第一次上线或增加了比较多的代码、再如双11前的代码</li></ul><h2 id="_3-如何进行代码走查" tabindex="-1"><a class="header-anchor" href="#_3-如何进行代码走查" aria-hidden="true">#</a> 3. 如何进行代码走查</h2><h3 id="_3-1-代码走查的角色" tabindex="-1"><a class="header-anchor" href="#_3-1-代码走查的角色" aria-hidden="true">#</a> 3.1 代码走查的角色</h3><ul><li>主持人：负责主持整个走查活动，包括会议邀约和控制时间（一般一小时左右）进度。为了让代码走查高效，需要及时阻止不必要的讨论，比如讲解人讲的太发散、或者大家针对一个点讨论时间过长。</li><li>讲解人：负责对代码进行讲解并跟进修改计划，一般是系统Owner或代码编写者。</li><li>记录人：记录代码走查记录，记录中包括代码走查中发现的问题点、修复方法和最佳实践，问题需要指定到对应的人。</li><li>评审人：对代码进行评审发现问题并找出最佳实践，一般是资深开发和测试同学。</li><li>参与人：参加代码走查，主要以学习为主。</li></ul><h3 id="_3-2-走查前做好充分准备" tabindex="-1"><a class="header-anchor" href="#_3-2-走查前做好充分准备" aria-hidden="true">#</a> 3.2 走查前做好充分准备</h3><p>讲解人整理本次要走读的代码分支、系分设计和代码入口，然后发邮件通知大家，参加代码走查的人提前阅读系分和代码，针对看不懂的代码、有问题的代码和设计复杂的代码全部提交Review记录。</p><p>讲解人必须想好走查哪些代码，一般是主流程或有问题的点，控制整个代码走查的时间，我们第一次代码走查花了三个多小时，由于时间太长，走查的过程中开发都走了几个。</p><h3 id="_3-3-走查中控制节奏" tabindex="-1"><a class="header-anchor" href="#_3-3-走查中控制节奏" aria-hidden="true">#</a> 3.3 走查中控制节奏</h3><p>直接讲代码很多没参与的同学会很晕，所以先大致讲下系分设计，不需要全部讲完设计再讲代码，而是讲一部分设计，再讲一部分代码。讲解人带着大家一行一行读代码，讲解代码的含义和思考，记录人负责记录Review出的问题和最佳实践。</p><p>代码走查的评判标准，主要关注几个点</p><ul><li>编码规范： 可以使用IDEA的插件自动扫描有没有编码问题。</li><li>设计规范</li><li>幂等性</li><li>逻辑问题：是否满足需求。</li><li>一致性问题</li><li>并发和锁：在并发情况下，代码执行结果是否有问题。</li><li>性能问题：代码是否存在性能问题，预计峰值流量能到多少。</li><li>分支覆盖率：是否有分支没有覆盖</li></ul><h3 id="_3-4-走查后总结" tabindex="-1"><a class="header-anchor" href="#_3-4-走查后总结" aria-hidden="true">#</a> 3.4 走查后总结</h3><p>在代码走查之后，要优化代码走查，所以会发一个调查问卷给大家</p><ol><li>参加代码走查有什么收获？</li><li>对代码走查有什么建议？</li></ol><p>我们走查完之后有几个改进点</p><ol><li>时间把控：第一次代码走查主持人和讲解人时间没控制好，走查了三个多小时，后续主讲人讲重点，主持人随时控场，讨论超过几分钟的就记录下面，线下讨论。</li><li>重点优先：大家前面精力比较好后面就分神了，后续主讲人优先走查重点代码。</li></ol><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>',25),s={href:"https://ifeve.com/%E4%BB%A3%E7%A0%81%E8%B5%B0%E6%9F%A5%E5%A6%82%E4%BD%95%E4%BF%9D%E8%AF%81%E8%BD%AF%E4%BB%B6%E8%B4%A8%E9%87%8F/",target:"_blank",rel:"noopener noreferrer"};function _(p,u){const a=t("ExternalLinkIcon");return l(),r("div",null,[c,e("p",null,[e("a",s,[h("代码走查如何保证软件质量"),n(a)])])])}const E=i(o,[["render",_],["__file","peoject-manage-codereview.html.vue"]]);export{E as default};
