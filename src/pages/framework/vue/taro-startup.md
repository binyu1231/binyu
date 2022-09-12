---
title: Taro Vue3 Startup
index: Framework.Vue.Practice
---

[[toc]]

## Install

``` bash
$ npm i @tarojs/cli -g
$ taro init taro-practice

## print & input
? 请输入项目介绍！ taro practice
? 请选择框架 Vue3
? 是否需要使用 TypeScript ？ Yes
? 请选择 CSS 预处理器（Sass/Less/Stylus） Less
? 请选择模板源 Github（最新）
√ 拉取远程模板仓库成功！
? 请选择模板 vue3-NutUI（使用 NutUI3.0 的模板）

$ cd taro-practice
<taro-practice>$ npm run dev:weapp
```

**Note**: 需要下载微信开发者工具，目录选择 `taro-practice` 根目录

``` bash
$ taro info

## print
Taro v3.4.2

  Taro CLI 3.4.2 environment info:
    System:
      OS: Windows 10
    Binaries:
      Node: 14.15.0 - D:\software\node\node.EXE
      Yarn: 1.22.11 - ~\AppData\Roaming\npm\yarn.CMD
      npm: 7.21.1 - D:\software\node\npm.CMD
```

## Code

### 列表

#### 1. 首页跳转到列表页

> /src/pages/index/index.vue

``` html
<template>
...
<nut-button @click="goUsers">前往用户列表</nut-button>
...
</template>
<script>
// ...
import { navigateTo } from '@tarojs/taro'
// ...

export default {
  // ...
  setup () {
    // ...
    function goUsers() {
      console.log(router)
      navigateTo({
        url: '/pages/users/index'
      })
    }
    // ...
    
    return {
      // ...
      goUsers
    }
  }

}
</script>
```

#### 2. 添加路由配置

> /src/app.config.ts

``` ts
export default defineAppConfig({
  pages: [
    // ...
    'pages/users/index'
  ],
  // ...
})

```

### 3. 新建文件

> /src/pages/users/index.config.ts

``` ts
export default definePageConfig({
  navigationBarTitleText: '用户列表'
})
```

> /src/pages/users/index.vue

``` html
<script setup lang="ts">
import { useReady, request, navigateTo } from '@tarojs/taro'
import { ref } from 'vue'
import { Cell, Avatar } from '@nutui/nutui-taro'

export type UserDto = { id: number, username: string, email: string }
const users = ref<UserDto[]>([])

useReady(() => {
  request({
    url: 'https://jsonplaceholder.typicode.com/users',
    method: 'GET',
    success: (res) => {
      users.value = res.data
    }
  })
})

function goDetail (u: UserDto) {
  navigateTo({
    url: `/pages/users/detail?id=${u.id}`
  })
}

</script>
<template>
<view class="user-list">
  <Cell v-for="(u, i) in users" :key="'user-list' + i" @click="goDetail(u)">
    <view class="ul-avatar">
      <Avatar shape="round" v-text="u.username[0]"></Avatar>
      <view class="ul-avatar-content">
        <view class="ul-avatar-name" v-text="u.username"></view>
        <view class="ul-avatar-desc" v-text="u.email"></view>
      </view>
    </view>
  </Cell>
</view>
</template>
<style lang="scss">
.ul-avatar {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.ul-avatar-name {
  color: #333;
  font-weight: 600;
  font-size: 1rem;
}

.ul-avatar-desc {
  color: #777;
  font-weight: normal;
  font-size: 0.75rem;
}
</style>
```


