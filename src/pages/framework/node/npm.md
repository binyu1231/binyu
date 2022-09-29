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
```