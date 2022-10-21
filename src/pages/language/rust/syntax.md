---
title: Syntax
index: Language.Rust.Syntax
---

[[toc]]

## 变量

``` rust
let apples = 5;      // 不可变
let mut bananas = 5; // 可变

// 变量遮蔽
let x = 5;
let x = x + 1; // 声明一个同名变量 而不是赋值旧变量
{
    let x = x * 2;
    println!("The value of x in the inner scope is: {x}"); // 12
}
println!("The value of x is: {x}"); // 6

const FOO_BAZ: u32 = 12; // 常量必须注明类型

```


## 注释

``` rust
// abc
/* def */
 
```

### 文档注释 documentation comments

他们会生成 HTML 文档。这些 HTML 展示公有 API 文档注释的内容, 使用 [cargo](./cargo) 命令查看生成的文档

- `# Example` 创建名为 `Example` 的标题
- Panics: 这个函数可能会 panic! 的场景。并不希望程序崩溃的函数调用者应该确保他们不会在这些情况下调用此函数。
- Errors：如果这个函数返回 Result，此部分描述可能会出现何种错误以及什么情况会造成这些错误，这有助于调用者编写代码来采用不同的方式处理不同的错误。
- Safety：如果这个函数使用 unsafe 代码（这会在第十九章讨论），这一部分应该会涉及到期望函数调用者支持的确保 unsafe 块中代码正常工作的不变条件（invariants）。

``` rust
/// Adds one to the number given.
///
/// # Examples
///
/// ```
/// let arg = 5;
/// let answer = my_crate::add_one(arg);
///
/// assert_eq!(6, answer);
/// ```
pub fn add_one(x: i32) -> i32 {
    x + 1
}
```

以 `//!` 开头的注释后面不会接代码，编译后会出现在文档的顶部。所以一般用在项目说明，即 `/src/lib.rs` 的头部。

``` rust
//! # My Crate
//!
//! `my_crate` is a collection of utilities to make performing certain
//! calculations more convenient.
```


## 控制流

### 条件控制

``` rust
if number < 5 {

}
else if number == 5 {

}
else {

}

let foo = if true { 5 } else { 6 }; // 需要分号
```

### 循环

``` rust
loop {
    continue;

    break;
}

while foo != 0 {
    foo -= 1;
}

for baz in [10, 20, 30] {

}

for (i, &item) in bytes.iter().enumerate() {

}

```

## 范围表达式

``` rs
// start..=end
1..=100 // 包含100
1..4 // 不包含4

use rand::Rng;

rand::thread_rng().gen_range(1..=100); // 生成1-100的随机数

for bar in (1..4).rev() { println!(bar); } // 3, 2, 1
```


## 函数 fn

``` rust
fn foo(x: 32) {}
fn bar() -> i32 {
    5
}
fn bar() -> i32 {
    return 5;
}

bar(); // 5;

// 不能通过编译，需要删除分号
fn baz() -> i32 {
    5;
}

```

## println

``` rust
println();  // 函数调用
println!(); // 宏调用

let apples = 5;
println!("Your apples {apples}"); // "Your apples 5"

let x = 5; 
let y = 10;
println!("x = {} and y = {}", x, y); // "x = 5 and y = 10"
```

## 使用标准库

``` rust
use std::io;
use rand::Rng; // cargo install
use std::cmp::Ordering; 
```