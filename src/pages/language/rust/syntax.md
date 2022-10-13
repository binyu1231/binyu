---
title: Syntax
index: Language.Rust.Syntax
---

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

/// 三个斜线换行时 vscode 会自动补充下一行的注释
///
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