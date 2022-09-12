---
title: Vue 3.2
index: Framework.Vue.Syntax
---

[[toc]]

## 概述

3.2 命名 Quintessential Quintuplets - <五等分的花嫁>


## SFC 新特性


### v-memo



### `<script setup>` 语法糖

简化了 Vue 单文件组件仅使用 Composition API 时的语法.  

1. 声明的变量, 指令和组件可以直接应用到模板中

2. 除 setup 外选项的语法补充



### 动态CSS 

`<style>v-bind<style>`

## WebComponent

### 使用 `defineCustomElement` 自定义 WebComponent 

## SSR

### `@vue/server-renderer` 提供非 Node 运行时构建

## Effect Scope API

解决问题: 不同组件使用同一个组合API时, 因互相持有相同变量, 而无法解耦的情况.


#### `effectScope()`
#### `getCurrentScope()`
#### `onScopeDispose()`


## 性能提升

### Vue 响应式系统

- 更高效的 ref 实现（读取速度快约 260% / 写入速度快约 50%）
- 依赖跟踪速度提高约 40%
- 内存使用量减少约 17%

### 模板编译

- 普通元素 VNode 的创建速度提高了约 200%