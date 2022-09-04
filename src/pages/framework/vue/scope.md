[[toc]]

### 使用组件提供局部变量

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

使用 `slots.default` 创建无DOM组件

``` js
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
    
    return () => slots.default && slots.default(data)
  }
})
```


### 防止 composition scope 冲突

#### `effectScope()`
#### `getCurrentScope()`
#### `onScopeDispose()`



