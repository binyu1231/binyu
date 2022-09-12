---
title: OO
index: Language.Python.Snytax
---

[[toc]]

## class

```python
class Man:
  def __init__ (self, name):
    self.name = name
  
  def hello (self):
    print('Hello ' + self.name + '!')


m = Man('David')
m.hello() # Hello David!
```