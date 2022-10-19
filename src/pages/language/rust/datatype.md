---
title: 数据类型 data type
index: Language.Rust.Syntax
---

[[toc]]

## 标量 scalar

- 整型
- 浮点型
- 布尔类型
- 字符类型

### 整型

i8, i16, i32, i64, i128, isise 以及对应的无符号整型 u8 ..

字面量表示

```rust
const DECIMAL: u32 = 89_222; // 自定义下划线位置方便读数
const HEX: u8 = 0xff;
const OCTAL: u8 = 0o77;
const BINARY: u8 = 0b1111_0000;
const BYTE = u8 = b'A'; // 仅限 u8

```

Note: 整型溢出时与 % 运算结果相同(即 256 => 0), 如果需要这种功能最好使用标准库 Wrapping 显式调用

### 浮点型

f32, f64 现代浏览器中速度几乎一样，默认为f64

``` rust
let x = 2.0;
let y: f32: 3.0;
```

### 布尔类型

bool

``` rust
let loading = true;
let initialize: bool = false;
```

### 字符类型

char 四个字节，可以表示

``` rust
let foo = 'z';
let bar: char = 'ℤ';
let baz = '😻';
```

## 复合 compound

- 原生复合类型
    - 元组 tuple
    - 数组 array

### 元组 tuple

``` rust
let bar: (i32. f64, u8) = (500, 6.4, 1);
let baz = (500, 6.4, 1);
// 解构 
let (x, y, z) = baz;

baz.0; // 500
baz.1; // 6.4
baz.2; // 1

// 单元 unit 特殊的元组
let foo: () = ();
```

### 数组

``` rust
let weekends = ["Sat.", "Sun."];
let foo: [i32; 5] = [1, 2, 3, 4, 5];
let bar = [3; 5]; // [3, 3, 3, 3, 3];

weekends[0]; // "Sat."
weekends[1]; // "Sun."

```