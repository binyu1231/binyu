---
title: 使用Axios adapter 包装自定义请求(微信小程序)
date: 2022-02-22
desc: 
---

用 Taro.request 举例。微信小程序和Uniapp 同理。

## Axios

### 实现

> /apis/request.ts

``` ts
import axios from 'axios'
import settle from 'axios/lib/core/settle'
import buildURL from 'axios/lib/helpers/buildURL'
import createError from 'axios/lib/core/createError'

import { request } from '@tarojs/taro'

axios.defaults.adapter = (conf) => {
  return new Promise((resolve, reject) => {
    request({
      // 这里需要手动拼接 url
      url: buildURL(
        conf.baseURL || '' + conf.url || '', 
        conf.params, 
        conf.paramsSerializer
      ).replace(/^\?/, ''),
      method: String(conf.method).toLowerCase() as any,
      responseType: conf.responseType as any,
      data: conf.data,
      success (response) {
        const defResponse = {
          data: response.data,
          status: response.statusCode,
          statusText: 'sucess',
          headers: response.header,
          config: conf,
        }
        // 这里需要手动调用 settle 保证 validateStatus 可以生效
        settle(resolve, reject, defResponse)
        
      },
      fail: (response) => {
        reject(createError(
          response.errMsg,
          conf,
          null,
          null,
          response
        ))
      }
    })
  })
}

export const Request = axios
```

Note: 如果你需要访问 request 对象，需要重新包装 axios.create 函数。这里为了方便直接赋值给了 `axios.defaults.adapter`

### 使用

> /apis/users.ts

``` ts
import { Request } from './request'

const userApi = Request.create({
  baseURL: 'http://jsonplaceholder.typicode.com/users',
})

export function getUsers() {
  // 这里不传无法通过类型校验
  return userApi.get('')
}

getUsers().then(res => {
  users = res.data
})
```

## @coloration/asker

下面介绍一个自己写的一个客户端请求工具，也可以使用 adapter 方式实现包装

### 安装

``` bash
$ npm install @coloration/asker
```

### 实现

``` ts
import { AskerAdapterConf, AskerResponse, Asker, AskerConf } from '@coloration/asker'
import { request } from '@tarojs/taro'

function requestAdapter (conf: AskerAdapterConf, defRes: AskerResponse) {
  return new Promise((resolve, reject) => {
    request({
      // Asker 会在 adapter 调用之前拼接好 uri 并保存到 conf 对象中
      url: conf.uri,
      method: String(conf.method).toLowerCase() as any,
      responseType: conf.responseType as any,
      data: conf.body,
      success (response) {
        defRes.status = response.statusCode
        defRes.data = response.data
        defRes.statusText = 'success'
        resolve(defRes)
        // validateStatus  Asker会在adapter 之后自动处理 validateStatus 这里不用手动调用
      },
      fail: reject
    })
  })
}

// 这里也是使用全局覆盖的方法
Object.assign<AskerConf, AskerConf>(Asker.conf, {
  adapter: requestAdapter,
  // 这里需要注意 Asker 默认的 responseType 是 'json', 
  // Taro.request 方法只支持 'text' 和 'arrayBuffer' 所以需要手动设置
  responseType: 'text',
  // Asker 中的 after方法相当于 transResponse 
  // 但 axios 不能直接返回数据最少需要调用 res.data
  // 而 Asker 则可以直接通过这种方式格式化数据
  after: (res) => res.data
})

export const Request = Asker

```

### 使用

``` ts
const userApi = new Request({
  baseUrl: 'http://jsonplaceholder.typicode.com/users',
})

export function getUsers() {
  return userApi.get()
}
// 可以直接拿到data
getUsers.then(data => {
  users = data
})
```

更多关于 Asker的功能可查看文档 [coloration.github.io](https://coloration.github.io/#/asker) 欢迎提出优化建议

