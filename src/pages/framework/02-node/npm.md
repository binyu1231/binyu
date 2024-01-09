---
title: npm
index: Framework.Node.Syntax
---


## 常用命令

- 查看配置: `npm config get`
- 删除配置: `npm config delete electron_mirror`
- 查看全局安装地址: `npm root -g`

``` 
```

## 修改全局安装路径和缓存路径

- 修改全局安装路径 需要添加到环境变量中
- 单独配置全局安装路径后，切换node版本也不需要重新安装全局包

``` bash
PATH/node$ mkdir node_global node_cache
$ npm config set prefix "PATH/node/node_global"
$ npm config set cache "PATH/node/node_cache"


$ pnpm config set global-bin-dir "PATH/node/node_global"

```


## 修改个别项目的下载路径


``` bash
$ npm config set electron_mirror https://npm.taobao.org/mirrors/electron/
$ npm config set cypress_mirror https://npm.taobao.org/mirrors/cypress/

npm config set node_sass_mirror https://npm.taobao.org/mirrors/node-sass/
```

## 切换镜像源

``` bash
$ npm i -g nrm

$ nrm ls
# npm ---------- https://registry.npmjs.org/
# yarn --------- https://registry.yarnpkg.com/
# tencent ------ https://mirrors.cloud.tencent.com/npm/
# cnpm --------- https://r.cnpmjs.org/
# taobao ------- https://registry.npmmirror.com/
# npmMirror ---- https://skimdb.npmjs.com/registry/

$ nrm use taobao
```

## 切换 Node 版本

### Windows NVM

下载安装: <https://github.com/coreybutler/nvm-windows>

- 先删除原始安装的 node
- 1.1.9 自定义目录无效

``` bash
# 安装
$ nvm install 16

# 查看安装版本
$ nvm ls
# 16.18.0
# 14.20.1

# 查看当前使用版本
$ nvm current

# 使用某版本 必须用完整版本号
$ nvm use 16.18.0

```

- windows 设置环境变量
    1. `win` + `r`
    2. `sysdm.cpl`
    3. 高级 - 环境变量

### Mac Linux N

``` bash
# 安装
$ npm i -g n
```


