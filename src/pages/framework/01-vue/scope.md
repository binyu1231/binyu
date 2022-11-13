---
title: Scope
index: Framework.Vue.Syntax
---

[[toc]]

## 使用局部变量

### 使用组件提供局部变量

- Use:

``` html
<div class="list">
  <scope-toggle
    v-for="n in 4"
    :key="n"
    :defaultValue="false"
    v-slot="{ toggle, value }"
  >
    <div>
      <div class="item-panel" :expand="value">{{ value }}</div>
      <button @click="toggle">toggle</button>
      <button @click="toggle(false)">close</button>
    </div>
  </scope-toggle>
</div>
```

- Implement:

``` ts
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  name: 'ScopeToggle',
  props: {
    defaultValue: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    const val = ref(props.defaultValue)

    function toggle(nextVal) {
      val.value = (typeof nextVal === 'boolean') ? nextVal : !val.value
    }

    const data = reactive({
      value: val,
      toggle,
    })
    // 防止在最外层产生 DOM 节点
    return () => slots.default && slots.default(data)
  }
})
```


## 防止 composition scope 冲突

### `effectScope()`
### `getCurrentScope()`
### `onScopeDispose()`



