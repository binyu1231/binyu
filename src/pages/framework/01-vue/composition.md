[[toc]]

### usePulldown

依赖 vueuse 的插值 composition. `useTransition`

``` ts
import { ref, watch } from 'vue'
import { TransitionPresets, useTransition } from '@vueuse/core'

export function usePulldown (
  el, 
  option
) {
  const { 
    disabled,
    threshold, 
    maxOffset, 
    backDuration,
    backTimingFunction,
    onPulldownStart,
    onPulldownEnd, 

} = Object.assign({ 
    threshold: 10, 
    maxOffset: 50,
    backDuration: 100,
    disabled: ref(false),
    backTimingFunction: TransitionPresets.easeInBack
  }, option)

  const startY = ref(0)
  const isPulling = ref(false)
  const offsetY = ref(0)
  const _offsetY = useTransition(offsetY, {
    duration: backDuration,
    transition: backTimingFunction,
    disabled: isPulling
  })
  
  let touched = false

  function reset() {
    startY.value = 0
    isPulling.value = false
    offsetY.value = 0
    touched = false
  }

  function _handleTouchstart(e) {
    if (isPulling.value) return
    touched = true
    startY.value = e.changedTouches[0].pageY
  }

  function _handleTouchmove(e) {
    
    const moveY = e.changedTouches[0].pageY
    if (!touched || moveY < startY.value || moveY - startY.value < threshold) return
    let goingOn = true
    if (!isPulling.value) {
      goingOn = !onPulldownStart?.(e)
    }

    if (!goingOn) {
      startY.value = e.changedTouches[0].pageY
      return 
    }
    isPulling.value = true
    const offset = moveY - startY.value
    offsetY.value = offset > maxOffset ? maxOffset : offset
  }

  function _handleTouchend(e) {
    if (!touched || !isPulling.value) return
    onPulldownEnd?.(e)
  }

  function mount() {
    if (!el.value) return
    el.value.addEventListener('touchstart', _handleTouchstart)
    el.value.addEventListener('touchmove', _handleTouchmove)
    el.value.addEventListener('touchend', _handleTouchend)
  }

  function unmount() {
    if (!el.value) return
    el.value.removeEventListener('touchstart', _handleTouchstart)
    el.value.removeEventListener('touchmove', _handleTouchmove)
    el.value.removeEventListener('touchend', _handleTouchend)
  }


  watch([
    () => el.value,
    () => disabled.value
  ], () => {
    if (!el.value) return
    console.log('disabled.value', disabled.value)
    if (disabled.value) {
      unmount()
      return
    }

    mount()
  })

  return {
    startY,
    offsetY: _offsetY,
    isPulling,
    reset,
  }
}
```