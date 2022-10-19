---
title: 泛型 Generic, 注解 Trait, 生命周期 Lifetime
index: Langugage.Rust.Syntax
---

[[toc]]

## 泛型

### 函数泛型

``` rust
let number_list = vec![30, 50, 25];
let char_list = vec!['y', 'm', 'c', 'a'];

max(number_list);
max(char_list);

min(number_list);
min(char_list);

fn max<T: PartialOrd + Copy>(list: &[T]) -> T {
    let mut max = list[0];
    for &item in list { // &
        if item > max {
            max = item;
        }
    }
    max
}

fn min<T: PartialOrd>(list: &[T]) -> &T {
    // min 变量保存索引值就无须实现 Copy Trait
    let mut min = &list[0]; // &
    for item in list {
        if item < min {
            min = &item // &
        }
    }

    return min
}
```

### 结构体泛型

``` rust
struct Point<T> {
    x: T, y: T,
}
```

### 枚举泛型

``` rust
enum Option<T> {
    Some(T), None,
}
```

### 方法中定义泛型

``` rust

struct Point<T> {
    x: T, y: T,
}

impl<T> Point<T> {
    fn x(&self) -> &T {
        &self.x
    }
}
```

## 注解 trait

定义抽象功能，有点像其他语言的接口 `interface`

``` rust
pub trait Summary {
    fn summarize(&self) -> String;
}

pub struct NewsArticle {
    pub headline: String,
    pub location: String,
    pub author: String,
    pub content: String,
}

impl Summary for NewsArticle {
    fn summarize(&self) -> String {
        format!("{} by {} ({})", self.headline, self.author, self.location)
    }
}

pub struct Tweet {
    pub username: String,
    pub content: String,
    pub reply: bool,
    pub retweet: bool,
}

impl Summary for Tweet {
    fn summarize(&self) -> String {
        format!("{} : {}", self.username, self.content)
    }
}
```

``` rust
let tweet = Tweet {
    username: String::from("horse_ebooks"),
    content: String::from("of course, as you probably already know, people"),
    reply: false,
    retweet: false,
};

println!("1 new tweet: {}", tweet.summarize());
```

默认实现

``` rust
pub trait Summary {
    fn summarize(&self) -> String {
        format!("Read more ...")
    }
}

impl Summary for NewsArticle {}
```

默认实现允许调用相同 trait 中的其他方法，哪怕这些方法没有默认实现。

``` rust
pub trait Summary {
    fn summarize(&self) -> String {
        format!("Read more from {}...", self.summarize_author())
    }

    fn summarize_author(&self) -> String;
}

impl Summary for Tweet {
    // 实现未定义的方法即可
    fn summarize_author(&self) -> String {
        format!("@{}", self.username)
    }
}
```

### trait 作为参数

``` rust
pub fn notify(item: &impl Summary) {
    println!("Breaking news! {}", item.summarize());
}
```

### Trait Bound 语法

默认写法是 Trait Bound 另一种形式，各有优势

``` rust
pub fn notify<T: Summary>(item: &T) {
    println!("Breaking news! {}", item.summarize());
}

pub fn notify(item1: &impl Summary, item2: &Summary) {}

pub fn notify<T: Summary>(item1: &T, item2: &T) {}
```

### 指定多个 Trait Bound 

``` rust
pub fn notify(item: &(impl Summary + Display)) {}
pub fn notify<T: Summary + Display>(item: &T) {}
```

### 通过 where 简化 trait bound

``` rust
fn foo<T: Display + Clone, U: Clone + Debug>(t: &T, u: &U) -> i32 {}

fn foo<T, U>(t: &T, u: &U) -> i32
    where T: Display + Clone, U: Clone + Debug 
{
    
}
```

### 返回 Trait

``` rust
fn returns_summarizable() -> impl Summary {
    Tweet { /* */ }
}

// WRANING: compile error
fn returns_summarizable(switch: bool) -> impl Summary {
    if switch {
        NewArticle {}
    }
    else {
        Tweet {}
    }
}
``` 

### 使用 trait bound 有条件地实现方法

``` rust
use std::fmt::Display;

struct Pair<T> {
    x: T, y: T
}

impl<T> Pair<T> {
    fn new(x: T, y: T) -> Self {
        Self { x, y }
    }
}

impl<T: Display + PartialOrd> Pair<T> {
    fn cmp_display(&self) {
        if self.x >= self.y {
            println!("The largest member is x = {}", self.x);
        }
        else {
            println!("The largest member is y = {}", self .y);
        }
    }
}
```

### blanket implementation

> 对任何实现了特定 trait 的类型有条件地实现 trait 

例如，标准库为任何实现了 Display trait 的类型实现了 ToString trait

``` rust
impl<T: Display> ToString for T {
    // --snip--
}
``` 

blanket implementation 会出现在 trait 文档的 “Implementers” 部分。


## 生命周期 lifetime

### 生命周期注解语法 

生命周期注解并不会改变生命周期，只是为了rust可以完成推断

``` rust
&i32
&'a i32
&'a mut i32
```

### 函数声明中的生命周期注解

``` rust
/// WRANING: Compile Error
/// 代码并不能推测出 &str 持有谁的引用，也就无法推测出对应的生命周期
fn longest(x: &str, y: &str) -> &str {}

/// OK
/// 习惯性以 'a 'b 命名
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {}
```

它的实际含义是 longest 函数返回的引用的生命周期与传入该函数的引用的生命周期的较小者一致。

生命周期注解只存在签名中，不会存在于代码中

`'a` 可以成为 x,y 的泛型生命周期。它代表的含义是 x,y生命周期较短的那一个

### 结构体定义中的生命周期注解

``` rust
struct ImportantExcerpt<'a> {
    part: &'a str,
}
``` 
`ImportantExcerpt` 的实例不能比其 `part` 字段中的引用存在的更久

### 生命周期省略规则 lifetime elision rules

- 输入生命周期 input lifetimes 函数或方法的参数的生命周期
- 输出生命周期 output lifetimes 返回值的生命周期

``` rust
fn first_word<'a>(s: &'a str) -> &'a str {}
fn first_word(s: &str) -> &str {}
```

可以省略的三中情况
- 每一个是引用的参数都有自己的生命周期时(输入生命周期)
    - `fn foo<'a>(x: &'a i32)`
    - `fn foo<'a, 'b>(x: &'a i32, y: &'b i32)`
- 只有一个输入生命周期参数，它会被赋予所有输出生命周期
- 如果有 `&self`, `&mut self` 所有输出生命周期都会被赋予 `self` 的生命周期

### 静态生命周期

`'static` 所有字符串都拥有，会存在于整个程序运行期间 

``` rust
let s: &'static str = "I have a static lifetime.";
```

只是补完Rust的逻辑，不应该在程序里使用

### 结合泛型类型参数、trait bounds 和生命周期

```rust
use std::fmt::Display;

fn longest_with_an_announcement<'a, T>(
    x: &'a str,
    y: &'a str,
    ann: T,
) -> &'a str
where T: Display {
    println!("Announcement! {}", ann);
    if x.len() > y.len() { x } else { y }
}
```

