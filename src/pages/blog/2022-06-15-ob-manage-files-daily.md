---
title: 在Ob中使用 Calendar, Periodic Notes 按时间周期管理文件
date: 2022-06-15
cover: https://xinghe-blog-bucket.oss-cn-beijing.aliyuncs.com/img/2022-06-15-ob-manage-files-daily.png
desc: 
---

## 效果展示

### 目录结构

``` bash
/
|-Template/
	|- daily
	|- weekly
|- Todo/
	|- 2022/
		|- Week-24
		|- Week-25
	|- 2022-06/
		|- 2022-06-15
		|- 2022-06-16
		
```

## 使用方法

1. 点击日历上的日期，或周
2. 使用快捷命令 (`ctrl` + `p`) open daily(weekly) note

## 用到的插件

- Calendar 1.5.10 https://github.com/liamcain/obsidian-calendar-plugin
- Periodic Notes 0.0.17 https://github.com/liamcain/obsidian-periodic-notes

## 相关的配置

1. 关闭核心插件中的**日记**插件，防止与**Periodic Notes**产生冲突
2. 打开 **Calendar** 中的Show week number 开关，(可选)关闭 Confirm before creating new note 
3. 配置 **Periodic Notes** 中的文件名，使用的模板以及存放的目录。日周月季年可以分别配置。模板路径可以指定为 `Template/daily.md`
