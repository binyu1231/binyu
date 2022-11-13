---
title: Transition
index: Framework.Vue.Practice
---

[[toc]]

### Collapse Transition

``` html
<script name="collapse-transition" setup>
import { nextTick } from 'vue';

// enter-from
function handleBeforeEnter(el) {
    el.style.height = 0;
    el.style.overflow = 'hidden';
}

// enter-to
function handleEnter(el) {
    el.style.transition = 'height .3s ease';
    nextTick(() => {
        el.style.height = el.scrollHeight + 'px';
    });
}

function handleAfterEnter(el) {
    el.style.transition = 'none';
}

// leave-form
function handleBeforeLeave(el) {
    el.style.transition = 'height .3s ease';
}

function handleLeave(el) {
    el.style.height = 0;
}

function handleAfterLeave(el) {
    el.style.transition = 'none';
}


</script>
<template>
<Transition
    @before-enter="handleBeforeEnter"
    @enter="handleEnter"
    @after-enter="handleAfterEnter"
    @before-leave="handleBeforeLeave"
    @leave="handleLeave"
    @after-leave="handleAfterLeave"
>
    <slot></slot>
</Transition>
</template>

```