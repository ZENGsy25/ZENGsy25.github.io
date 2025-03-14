## GIT

- 创建仓库
  1、创建一个空文件
  2、在文件中使用 git bash 或者 cmd 或者 vsCode 集成的 powershell 打开命令界面
  3、使用 git init 命令初始化一个仓库配置文件（.git 隐藏文件）
- 拉取远程仓库代码(克隆)

```js
git clone + 地址
git remote add origin + 地址 //关联远程仓库地址到本地
git remote -v  // 查询关联的远程仓库地址
git remote set-url origin + 地址 //修改远程仓库地址
git add .或者-A //（保存当前所有变化的文件到本地临时仓库）
git add + 文件名 //（保存指定变化的文件到本地临时仓库,git status会看到保存后的文件变绿色）
git status //(查看当前分支所有文件变更的文件状态，修改的文件会变成红色)
git commit -m"注释" //保存本地仓库的代码并添加注释，会形成一次提交记录
git cherry-pick e5d42522f16163e01f42d4161fbbd5821f9a0690 //局部代码合并：合并其他分支某一次commit的代码
git push origin + 分支名 // 把本地仓库的分支提交到远程仓库
git push -f origin + 分支名 //强制提交
git pull //把远程的分支同步到本地仓库并且变更，相当于同时使用了git fetch + git megre命令
git fetch //把所有远程的分支信息同步到本地
git merge + 分支名 //把其他分支合并到当前分支
```

- 分支

```js
git checkout + 分支名 //（切换分支）
git branch //（查找分支名）
git branch -D 分支名 //（删除本地分支）
git push origin --delete 远程分支名 //（删除远程分支）
git push origin :分支名 //(删除远程分支、origin 后面有空格)
```

- 创建分支

```js
git checkout -b 分支名 //在当前分支基础上创建分支
git clone + 地址 -b 分支名 //克隆的时候直接拉去对应的分支
```

- 撤销（回滚）

```js
//git代码库回滚: 指的是将代码库某分支退回到以前的某个commit id

//【本地代码库回滚】：
git reset --hard commit-id //回滚到commit-id，讲commit-id之后提交的commit都去除
git reset --hard HEAD~3 //将最近3次的提交回滚,可以是1或者2
git checkout + 文件名或者.或者-A //撤销git add所有保存的本地仓库文件
git log //查看所有的提交日志，也就是git commit之后生成的ID记录
git reset --hard id //撤销到指定id的操作记录
```

- 提交、查看

```js
 加-f是强制
  git push -u origin master -f

克隆某个分支
  git clone -b b1 https://github.com/...
  git命令：全局设置用户名邮箱配置

查看git用户名
  git config user.name

查看邮箱配置
  git config user.email

全局配置用户名
  git config --global user.name "nameVal"

全局配置邮箱
  git config --global user.email "eamil@qq.com"

```

- 初始化项目

```js
npx create-react-app myReact
npm init react-app myReact
yarn create react-app myReact
```

- 安装 nvm

```js
//yarn add nvm -g
```

- nvm 切换 node 版本切换

```js
/**
 * - nvm list // 显示已安装的版本（同 nvm list installed）
  - nvm list installed // 显示已安装的版本
  - nvm list available // 显示所有可以下载的版本
  - nvm install 命令 - 安装指定版本 nodejs
  - nvm install 14.5.0 // 安装 14.5.0 版本 node
  - nvm install latest // 安装最新版本 node
  - nvm use 命令 - 使用指定版本 node
  - nvm use 14.5.0 // 使用 14.5.0 版本 node
  - nvm uninstall 命令 - 卸载指定版本 node
 * 
*/
```
