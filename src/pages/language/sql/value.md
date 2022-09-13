---
title: 数值处理
index: Language.SQL.Syntax
---

### 计算平均值

`null` 值会被忽略，10，20，null => 15

```sql
select avg(sal) as avg_sal
from emp

-- deptno 每个编号下的平均工资

select deptno, avg(sal) as avg_sal
from emp
group by deptno
```

### 最大值和最小值

```sql
select min(sal) as min_sal, max(sal) as max_sal
from emp
```

### 求和

```sql
select deptno, sum(sal) as total_for_dept
from emp
group by deptno
```

### 计算行数

遇到 Null 则不计数

```sql
select deptno, count(*)
from emp
group by deptno
```