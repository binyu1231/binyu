---
title: 枚举 enum
index: Language.Rust.Syntax
---

## 定义与使用

``` rust
enum IpAddrKind {
    V4, V6 // 成员 variants
}

let four = IpAddrKind::V4;
let six = IpAddrKind::V6;

fn route(ip_kind: IpAddrKind) {}

route(IpAddrKind::V4);
route(IpAddrKind::V6);
```

## 类型枚举


``` rust
enum IpAddr {
    V4(u8, u8, u8, u8), V6(String),
}

let home = IpAddr::V4(127, 0, 0, 1);
let loopback = IpAddr::V6(String::from("::1"));

```

Features:
- 省略了一个额外的构造体声明 `struct IpAddr { type: IpAddrKind }`
- 每个枚举成员可以声明为不同的类型, 数字，字符串，结构体甚至是另一个枚举


``` rust
enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}
```

Note:
- 如果枚举成员的类型各不相同，就很难定义一个可以处理所有成员的函数

## 在枚举上定义方法

``` rust
impl Message {
    fn call(&self) {

    }
}

let msg = Message::Write(String::from("hello"));
msg.call();

```

## 内置枚举 Option

该成员可以不适用前缀 `Option::` 调用, `Option::None` 用来代替其他语言中的 `Null` 值

``` rust
// 标准库定义
enum Option<T> {
    None, 
    Some(T),
}

// use
let some_number = Some(5);
let some_char = Some('e');

let absent_number: Option<i32> = None;
let absent_number = Option<i32>::None;
```

`Some<T>` 在未转换为 `T` 之前是无法做为 `T` 操作的。这样就会避免很多空值误操作带来的问题。

- Option 文档: <https://doc.rust-lang.org/std/option/enum.Option.html>


## match 控制流结构

`match <condition> {}` 

与 `if` 不同 `match` 的条件可以是任意类型，不限于 `bool`

``` rust
enum Coin {
    Penny, Nickel, Dime, Quarter,
}

fn value_in_cents(coin: Coin) -> u8 {
    match coin {
        Coin::Penny => 1,
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter => 25,
    }
}
```

### 绑定值模式

``` rust
#[derive(Debug)]
enum UsState {
    Alabama, Alaska,
}

enum Coin {
    Penny, Nickel, Dime, Quarter(UsState),
}

fn value_in_cents(coin: Coin) -> u8 {
    match coin {
        Coin::Penny => 1,
        Coin::Penny => 1,
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter(state) => {
            println!("State quarter from {:?}!", state);
            25
        },
    }
}

value_in_cents(Coin::Quarter(UsState::Alaska));
value_in_cents(Coin::Penny);
```

### 匹配 Option

``` rust
fn plus_one(x: Option<i32>)  -> Option<i32> {
    match x {
        None => None,
        Some(i) => Some(i + 1),
    }
}

let five = Some(5);
let six = plus_one(five);
let none = plus_one(None);
``` 

### 匹配是穷尽的

必须覆盖所有枚举情况

``` rust
match x {
    // None => None,        // Compile Error
    Some(i) => Some(i + 1),
}


```

### 通配模式和 `_` 占位符

通配模式: 对一些值做特殊处理，而其他值采取默认操作
占位符: 如果不想使用其他值，可以使用 `_` 通过编译

``` rust
match dice_roll {
    3 => add_fancy_hat(),
    7 => remove_fancy_hat(),
    other => move_player(other), // 通配模式必须放在最后

    // or
    _ => (), // 返回空元组，不执行任何操作
}
```

### `if let` 简化 `match` 控制流结构

使用 `if let` 会丧失 `match` 的穷尽性, 所以需要做好取舍

``` rust
// demo1
let config_max = Some(3u8);
match config_max {
    Some(max) => println!("The maximum is configured to be {}", max),
    _ => (),
}

// 等同于
let config_max = Some(3u8);
if let Some(max) = config_max {
    println!("The maximum is configured to be {}", max);
}
// 没有else
```


``` rust

let mut count = 0;
match coin {
    Coin::Quarter(state) => println!("State quarter from {:?}!", state),
    _ => count + 1;
}

// 等同于
let mut count = 0;
if let Coin::Quarter(state) = coin {
    println!("State quarter from {:?}!", state);
}
else {
    count += 1;
}

```

