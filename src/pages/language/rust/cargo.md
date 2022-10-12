---
title: Cargo (Rust 包管理)
index: Language.Rust.Practice
---

- 随rust安装


```bash
$ rustc --version
$ cargo --version 

# 创建项目
$ cargo new <project_name>

# 创建库
$ cargo new --lib <library_name>

# 构建项目
<project_name>$ cargo build 
<project_name>$ .\target\debug\hello-cargo.exe

<project_name>$ cargo build --release

# 一步构建并运行项目
<project_name>$ cargo run

# 在不生成二进制文件的情况下构建项目来检查错误
<project_name>$ cargo check

# 更新以来
<project_name>$ cargo update

# 构建所有安装包crate的文档 以查看trait
<project_name>$ cargo doc --open
```