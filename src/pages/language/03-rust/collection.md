---
title: Collection
index: Language.Rust.Syntax
---

- `std::collection` doc: <https://doc.rust-lang.org/std/collections/index.html>

[[toc]]

## Vector

### CRUD

``` rust
/// CREATE
let v: Vec<i32> = Vec::new();

// 宏创建
let v = vec![1, 2, 3];

/// READ
// 索引读取 返回的是引用. 适用于严重错误 使程序崩溃 panic
let third: &i32 = &v[2];

// get方法 返回 Option. 适用于越界属于正常情况，加以判断
match v.get(2) {
    Some(third) => third,
    None => println!("There is no third element."),
}

for i in &v {
    println!("{}", i);
}

let mut v = vec![100, 32, 57];
for i in &mut v {
    // 使用 `解引用运算符*` 获取i对应的值, 才可以修改
    *i += 50;
}


/// UPDATE
let mut v: Vec<i32> = Vec::new();

v.push(5);

/// 不能在Vec借用后修改它的值，会引起编译错误
/// vector 的工作方式, 添加元素在内存不足时会重新分配，
/// 第一个元素的引用就指向了被释放的内存
let first = &v[0];
v.push(6);
```

### 利用枚举使Vector可以存储多种类型 

``` rust
enum SpreadsheetCell {
    Int(i32),
    Float(f64),
    Text(String),
}

let row = vec![
    SpreadsheetCell::Int(3),
    SpreadsheetCell::Float(10.12),
    SpreadsheetCell::Text(String::from("blue")),
]
```


## String

Rust 中的字符串是一个对象（一个Vector`<u8>`的封装），我们通常理解的字符串字面量(`"demo"`) 在Rust中被称为`字符串slice`

CRUD

``` rust
/// Create
let s = String::new();

let mut s = String::from("some char");
let s2 = "foo";
/// Update
s.push_str(s2); // 此方法不会获取所有权
s.push('A');    // 接受单独的字符

let s1 = String::from("Hello, ");
let s2 = String::from("world!");
let s3 = s1 + &s2; 
// s1被移动了无法使用，s2可以
// &s2的类型由&String 强制转换(deref coercion)为 &str
// 可以理解为 把 &s2 变成了 &s2[..]

let s = format!("{}-{}-{}", "1949", "10", "01");


/// Read
let firstChar = "नमस्ते".chars().nth(); // Some('न') O(n)
let length = "नमस्ते".chars().count(); // 6 O(n) 注意count 会转移所有权
let length = "नमस्ते".bytes().count(); // 18 O(n)


for c in "नमस्ते".chars() {
    println!("{}", c);
}

```

多行字符串slice表示 

``` rust
"\
abc
def
"
```

## HashMap


CRUD

``` rust
use std::collections:HashMap;

/// Create
let mut scores = HashMap::new();

/// Update
scores.insert(String::from("Blue"), 10);
scores.insert(String::from("Yellow"), 50);

/// Read
let team_name = String::from("Blue");
let score = scores.get(&team_name); // 注意引用

println!("Blue team score: {:?}", score); // Some(10)

scores.insert("Blue", 10);
scores.insert("Yellow", 50);

let score = scores.get("Blue");

println!("Blue team score: {:?}", score); // Some(10)

for (key, value) in &scores {
    println!("{}: {}", key, value);
}

match score {
    Some(v) => *v,
    None => {
        
    }
}

/// update
// 覆盖更新
scores.insert(String::from("Blue"), 10);
scores.insert(String::from("Blue"), 25);

// 没有值时更新
scores.entry(String::from("Yellow")).or_insert(50);
```