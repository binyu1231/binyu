---
title: DOM 操作
index: Language.JavaScript.Practice
---

---

## 1.  获取元素

### 1.1 通过属性获取元素

``` js
document.body

document.documentElement 
```  

body,html只能从document下被获取到 

```
[SelectElement].options
```

获取某个select下的一组options

```
[FormName]

[FormName][InputName]
```

获取一个name="formName"的form元素, 还获取啥! 这就是变量名直接用就行啦

有一点需要注意，在使用最后一种方式获取元素时，如果被定位的表单元素为一则返回一个元素(不是数组)，如果表单元素为多个则返回一组元素


### 1.2 通过方法获取元素

``` js
document.getElementById()
```

该方法只能从document下获取id属性为对应参数的单个元素

``` js
document.getElementsByName()
```

该方法只能从document下获取name属性为对应参数的一组元素

``` js
[Element].getElementsByTagName()
```

获取标签名为对应参数的一组元素

``` js
[Element].getElementsByClassName()
```

返回class属性中包含对应参数的一组元素 IE8+ 

``` js
[Element].querySelector()
```

返回一个元素 IE8+ 用法类似JQuery 

``` js
[Element].querySelectorAll()
```

 返回一组元素 IE8+ 用法类似JQuery 


通过class获取元素的封装函数，为了兼容IE8以下浏览器
话说这年头还有用自己封的函数解决兼容问题么，大jquery不是力抗泰山了么 =。= ，不想看就别看了。

``` js
function getByClass(parent, classStr) {
    
    if(parent.getElementsByClassName) {
        
        return parent.getElementsByClassName(classStr)
    
    }
    else {
        var arr = []
        var elements = parent.getElementsByTagName('*')
        var hasClass = false

        for(var i = 0; i<elements.length; i++) {

            var tmp = element[i].class.split(/\s+/)
            
            for(var j = 0; j<tmp.length; j++) {
               if(classStr === tmp[i]) hasClass = true 
           }
           
           if(hasClass) arr.push(element[i])
        }
    }
    
    return arr
}
```

---

## 2. 创建元素

### 2.1 通过属性创建元素 

``` js
[element].innerHTML

// eg:
div.innerHTML = '<h1>Hello</h1>'
```
该属性被赋予的值会直接渲染到页面上，对单标签元素无效
### 2.2 通过方法创建元素 

``` js
document.createElement()
```
只有document元素可以使用该方法，参数是你想创建的标签名。不过我们还需要调用 *[element].appendChild(createElement)* 方法将创建好的元素插入到DOM🌲中

---

## 3. 元素的属性

### 3.1 一般属性

一般的属性值我们都可以通过 **.** 运算和 **[]** 运算来获取到，例如

``` html
<html>
    <a id="link" href="http://www.jianshu.com/"></a>
</html>

<script>
    document.getElementById('link').href
    // => "http://www.jianshu.com/"
</script>
```

我们还可以通过一些方法来操作自定义属性，当然他们对一般属性也是有效的

``` js
[Element].getAttribute([attributeName])
[Element].setAttribute([attributeName],[attributeValue])
[Element].removeAttribute([attributeName]) 
```

需要说明的有特殊的几个

### 3.2 [Element].className

className实际上就是元素的class，我们可以通过直接修改他的值来改变class

``` js
div.className = 'col-xs-6 col-md-4'
``` 

也可以通过**[element].classList**返回的类数组进行操作，这个属性只在ie10以上的浏览器才被支持

``` js
div.classList
// => ['col-xs-6', 'col-md-4']

div.classList.add('col-offset-2')
// => ['col-xs-6', 'col-md-4', 'col-offset-2']

div.classList.remove('col-md-4')
// => ['col-xs-6', 'col-offset-2']

div.classList.contains('col-xs-6')
// => true
```

### 3.3 [Element].style

通常我们会得到一个名为 **CSSStyleDeclaration** 的对象，最基础最直接的DOM操作是通过修改它来完成的

```javascript
div.style.color  = 'orange'
```

就这样，当我们使用 **CSSStyleDeclaration** 这个对象的时候，还有一个神奇的功能，我们在行内设置的样式会被添加到这个对象中并附上索引值，如

``` html
<html>
    <div style="width: 100px; color: red">
</html>
<script>

</script>
```

这个对象里面的属性值大概变态多到300+，囊括了所有的样式在内，有的我也不知道有个鸟用，大家闲着蛋疼可以撸撸文档

