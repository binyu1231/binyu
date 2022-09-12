---
title: 创建型
index: Thought.Design Pattern.Practice
---

[[toc]]

## 创建型

### (1)单例 Singleton

> 确保一个类只有一个实例，并提供一个全局访问点

* Keywords: Unique Instance, Lazy Instantiate
* Features:
  - 推迟创建对象（不同于静态类），在C++ 中负责隔绝动态初始化的不可预知性
  - 私有化构造器，使外部无法实例化
* Scenes: 当需要一个“协调者”的时候去使用单例。数据库连接，线程池，对话框，缓存，偏好设置，日志，设备驱动。
* implement: 利用静态变量记录实例，每次调用时检查实例

  ``` java
  public class Singleton {
    private volatile static Singleton uniqueInstance;

    private Singleton () {}
    
    public static Singleton getInstance () {
      if (uniqueInstance == null) {
        // 多线程下的单例, 双重检查锁
        sychronized (Singleton.class) {
          if (uniqueInstance == null) {
            uniqueInstance = new Singleton();
          }
        }
      }

      return uniqueInstance;
    }
  }
  ```

* Note
  - 非OO语言可以使用命名空间实现（闭包可以理解为隔离出全局的命名空间）
  - 可以通过与**工厂模式**的结合，提供该单例的子类化拓展
  - 当单例模式出现时，往往表明系统中的模块可能耦合性比较高，或者逻辑过度分散在代码库。使得单例测试更加困难

### (2)工厂方法 Factory Method

**(2.1)简单工厂 Simple Factory**

> 工厂方法用来处理对象的创建并将这些行为封装在子类中

* Implement:

  ``` java
  public class SimplePizzaFactory {
    public Pizza createPizza (String type) {
      Pizza pizza = null;

      if (type.equals("cheese"))
        pizza = new CheesePizza();

      else if (type.equals("pepperoni"))
        pizza = new PepperoinPizza();

      else if (type.equals("veggie"))
        pizza = new VeggiePizza();
    
      return pizza;
    }
  }
  ```

**(2.1.1)静态工厂 Static Factory**

> 利用静态方法定义一个简单工厂

* Notes:
  - 不需要使用创建对象的方法来实例化对象
  - 但不能通过继承来改变创建方法的行为。


**(2.2)工厂方法 Factory Method**

> 定义了一个创建对象的接口，但在编写子类时决定要实例化哪一个。工厂方法让类把实例化推迟到了子类

* Implement: 具体实现时分成两种类别，一是创建者（Creator）PizzaStore及其子类，另一种是产品 Pizza及其子类

``` java
// 创建者
public abstract class PizzaStore {
  
  public Pizza orderPizza(String type) {
    Pizza pizza;

    pizza = createPizza(type);
    
    pizza.prepare();
    pizza.bake();
    // ...
    return pizza;
  }
  // 具体的工厂方法由子类实现
  protected abstract Pizza createPizza (String type);
}

public class NewYorkPizzaStore extends PizzaStore {
  public Pizza createPizza (String type) {
    if (type == "cheese") 
      return new NYStyleCheesePizza();
    else if 
      // ...
  }
}

//  产品
public abstract class Pizza {
  // 属性
  // 方法
  void prepare { /* ... */ }
  void bake { /* ... */ }
}

public class NYStyleCheesePizza extends Pizza {
  // ...
}
```

### (3)抽象工厂 Abstract Factory

> 提供一个接口，用于创建相关或依赖对象的家族，而不明确指定具体类。产品家族集合了相关产品。

* Implements:

  ``` java
  // defind
  public abstract class AbstractDuckFactory {
    public abstract Quackable createMallardDuck();
    public abstract Quackable createRedheadDuck();
  }

  public class Example {
    foo (AbstractDuckFactory duckFactory) {
      Quackable mallardDuck = duckFactory.createMallardDuck();
      Quackable redheadDuck = duckFactory.createRedheadDuck();
    }
  }
  ```

**(2)(3) 工厂模式**

* Keywords: Factory, Creator, Store, no-new

* Scenes: 
  - 当对象或组件设置涉及高复杂性时
  - 当需要根据所在的不同环境轻松生成对象的的不同实例时
  - 当处理很多共享属性的小型对象或组件时，即创建对象时会有很多重复操作
  - 当编写值需要满足一个API契约（鸭子模型）的其他对象的实例对象时。对解耦很有用
  - 编译时不知道具体类型时

* Notes: 
  - 工厂方法将客户代码从需要实例化的具体类中解耦。即使只有一个需要创建的对象，工厂方法依然很有用，因为它帮助我们将产品的“实现”从“使用”中解耦，所以即使**增加产品或改变产品的实现**抽象创建者也不会受到影响。
  - 增加了创建对象的复杂度，也可能对单元测试带来问题

### (4)原型 Prototype

### (5)生成器 Builder
