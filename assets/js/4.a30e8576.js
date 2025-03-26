(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{170:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git","aria-hidden":"true"}},[t._v("#")]),t._v(" GIT")]),t._v(" "),a("ul",[a("li",[t._v("创建仓库\n1、创建一个空文件\n2、在文件中使用 git bash 或者 cmd 或者 vsCode 集成的 powershell 打开命令界面\n3、使用 git init 命令初始化一个仓库配置文件（.git 隐藏文件）")]),t._v(" "),a("li",[t._v("拉取远程仓库代码(克隆)")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git clone "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" 地址\ngit remote add origin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" 地址 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//关联远程仓库地址到本地")]),t._v("\ngit remote "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("v  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查询关联的远程仓库地址")]),t._v("\ngit remote "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("url origin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" 地址 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//修改远程仓库地址")]),t._v("\ngit add "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("或者"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//（保存当前所有变化的文件到本地临时仓库）")]),t._v("\ngit add "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" 文件名 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//（保存指定变化的文件到本地临时仓库,git status会看到保存后的文件变绿色）")]),t._v("\ngit status "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//(查看当前分支所有文件变更的文件状态，修改的文件会变成红色)")]),t._v("\ngit commit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"注释"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//保存本地仓库的代码并添加注释，会形成一次提交记录")]),t._v("\ngit cherry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pick e5d42522f16163e01f42d4161fbbd5821f9a0690 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//局部代码合并：合并其他分支某一次commit的代码")]),t._v("\ngit push origin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" 分支名 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把本地仓库的分支提交到远程仓库")]),t._v("\ngit push "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f origin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" 分支名 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//强制提交")]),t._v("\ngit pull "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//把远程的分支同步到本地仓库并且变更，相当于同时使用了git fetch + git megre命令")]),t._v("\ngit fetch "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//把所有远程的分支信息同步到本地")]),t._v("\ngit merge "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" 分支名 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//把其他分支合并到当前分支")]),t._v("\n")])])]),a("ul",[a("li",[t._v("分支")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" 分支名 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//（切换分支）")]),t._v("\ngit branch "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//（查找分支名）")]),t._v("\ngit branch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),t._v(" 分支名 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//（删除本地分支）")]),t._v("\ngit push origin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" 远程分支名 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//（删除远程分支）")]),t._v("\ngit push origin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("分支名 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//(删除远程分支、origin 后面有空格)")]),t._v("\n")])])]),a("ul",[a("li",[t._v("创建分支")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("b 分支名 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在当前分支基础上创建分支")]),t._v("\ngit clone "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" 地址 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("b 分支名 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//克隆的时候直接拉去对应的分支")]),t._v("\n")])])]),a("ul",[a("li",[t._v("撤销（回滚）")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//git代码库回滚: 指的是将代码库某分支退回到以前的某个commit id")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//【本地代码库回滚】：")]),t._v("\ngit reset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("hard commit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//回滚到commit-id，讲commit-id之后提交的commit都去除")]),t._v("\ngit reset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("hard "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将最近3次的提交回滚,可以是1或者2")]),t._v("\ngit checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" 文件名或者"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("或者"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//撤销git add所有保存的本地仓库文件")]),t._v("\ngit log "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//查看所有的提交日志，也就是git commit之后生成的ID记录")]),t._v("\ngit reset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("hard id "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//撤销到指定id的操作记录")]),t._v("\n")])])]),a("ul",[a("li",[t._v("提交、查看")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" 加"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f是强制\n  git push "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("u origin master "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f\n\n克隆某个分支\n  git clone "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("b b1 https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/github.com/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  git命令：全局设置用户名邮箱配置\n\n查看git用户名\n  git config user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name\n\n查看邮箱配置\n  git config user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email\n\n全局配置用户名\n  git config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("global user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nameVal"')]),t._v("\n\n全局配置邮箱\n  git config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("global user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eamil@qq.com"')]),t._v("\n\n")])])]),a("ul",[a("li",[t._v("初始化项目")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npx create"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("react"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("app myReact\nnpm init react"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("app myReact\nyarn create react"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("app myReact\n")])])]),a("ul",[a("li",[t._v("安装 nvm")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//yarn add nvm -g")]),t._v("\n")])])]),a("ul",[a("li",[t._v("nvm 切换 node 版本切换")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * - nvm list // 显示已安装的版本（同 nvm list installed）\n  - nvm list installed // 显示已安装的版本\n  - nvm list available // 显示所有可以下载的版本\n  - nvm install 命令 - 安装指定版本 nodejs\n  - nvm install 14.5.0 // 安装 14.5.0 版本 node\n  - nvm install latest // 安装最新版本 node\n  - nvm use 命令 - 使用指定版本 node\n  - nvm use 14.5.0 // 使用 14.5.0 版本 node\n  - nvm uninstall 命令 - 卸载指定版本 node\n * \n*/")]),t._v("\n")])])])])}],!1,null,null,null);s.default=e.exports}}]);