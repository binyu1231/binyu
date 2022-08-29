[[toc]]

### Start Up

1. setup option

```ts
import { Btn } from '@/components'

export default defineComponent({
  components: { Btn },
  setup() {
    function handleClick () {}
    return { handleClick }
  }
})
```

2. setup flag

``` html
<script setup>
// auto expose component
import { Btn } from '@/components'
// auto expose variable
function handleClick () {}
</script>
```

### use props

1. setup option

```js
export default defineComponent({
  props: {
    disabled: { type: Boolean, default: false },
  },
  setup(props) {
    watch(
      () => props.disabled, 
      (newVal) => { /* todo */ }, 
      { immediate: true }
    )
  }
})
```

2. setup flag  

``` ts
// <script setup>
import { defineProps } from 'vue'

const props = defineProps({
  disabled: { type: Boolean, default: false },
})

watch(
  () => props.disabled, 
  (newVal) => /* todo */, 
  { immediate: true }
)
```

3. setup flag with ts

``` ts
// <script setup lang="ts">
import { defineProps, watch, withDefaults } from 'vue'

const props = withDefaults(
  // Note: 
  // disabled? === required: false
  // disabled === required: true
  defineProps<{ disabled?: boolean }>(),
  { disabled: true },
)
```

### use emits

```
```


### define name

```
```

### use context

``` ts
import { getCurrentInstance } from 'vue'

const instance = getCurrentInstance()
```

### use vuex in vue2

```
```

### use vue-router in vue2

1. setup option OR setup flag

``` ts
import { getCurrentInstance } from 'vue'

const instance = getCurrentInstance()
instance?.proxy.$router.push('/about')
```

2. useRouter

``` ts
import { getCurrentInstance } from 'vue'

export function useRouter () {
  return getCurrentInstance().proxy.$router
}

export function useRoute () {
  return getCurrentInstance().proxy.$route
}

// use
const router = useRouter()
router.push('/about')
```
