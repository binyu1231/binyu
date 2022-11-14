---
title: Setup
index: Framework.Vue.Syntax
---

[[toc]]

## Start Up

1. setup option

```ts
import { Btn } from '@/components'
import { formatDate } from '@/utils'

export default defineComponent({
  components: { Btn },
  setup() {
    function handleClick () {}
    return { handleClick, formatDate }
  }
})
```

2. setup flag

``` html
<script setup>
// auto expose component
import { Btn } from '@/components'
// auto expose variable
import { formatDate } from '@/utils'
function handleClick () {}

</script>
```

## use props

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

``` html
<script setup>
const props = defineProps(['disabled'])

// with default value
const props = defineProps({
  disabled: { type: Boolean, default: false },
})

</script>
```

``` html

<script setup lang="ts">
const props = defineProps<{ disabled?: boolean }>()

// with default value
const props = withDefaults(
  // Note: 
  // disabled? === required: false
  // disabled === required: true
  defineProps<{ disabled?: boolean }>(),
  { disabled: true },
)

// 2
import { PropType } from 'vue'

const props = defineProps({
  disabled: { type: Boolean as PropType<boolean>, default: false },
})

// use
watch(
  () => props.disabled, 
  (newVal) => /* todo */, 
  { immediate: true }
)
```

## use emits

1. setup option

``` ts
// vue2
export default defineComponent({
  setup(_props, context) {
    context.emit('change'/*,  */)
  }
})

export default defineComponent({
  emit: ['change'],
  // or
  emit: {
    change: null,
    delete: (payload) => {
      // TODO: what is payload
      // TODO: how to check?
    }
  }
})
```

2. setup flag 

``` ts
// <script setup>
const emits = defineEmits(['close', 'increase'])

// <script setup lang="ts">
const emits = defineEmits<{
  (e: 'close') :void,
  (e: 'increase', num: number) : void
}>()
// TODO: how to check??


// use
function handleClose () {
	// ... codes
	emits('close')
}

function handleAdd (n: number) {
	// ... codes
	emits('increase', n)
}
```


## define name

``` html
<script setup name="i-button">
```

## use context

``` ts
import { getCurrentInstance } from 'vue'

const instance = getCurrentInstance()
```

## use vuex in vue2

1. setup option OR setup flag

``` ts
// <script setup>
const instance = getCurrentInstance()
instance?.proxy.$store
```

2. useStore

``` ts
export function useStore() {
  return getCurrentInstance().proxy.$router
}

// use
const store = useStore()
```

## use vue-router in vue2

1. setup option OR setup flag

``` ts
// <script setup>
const instance = getCurrentInstance()
instance?.proxy.$router.push('/about')
```

2. useRouter

``` ts
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
