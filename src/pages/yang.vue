<route lang="yaml">
meta:
  layout: empty
</route>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue-demi'
const angle = 120
const width = ref(320)
const sheepRotate = ref(0)

let timer = 0
let dayStart = 0
const baseTime = 1522425600000 // 2018-03-31 白班1
const rotateMap = {
  // 0
}

function getWidth() {
  width.value = Math.min(window.screen.availWidth, 320)
}

function tick() {
  if (!dayStart) {
    dayStart = new Date().setHours(0, 0, 0, 0)
    const dayOffset = (dayStart - baseTime) / 86400000 % 8
    console.log(dayOffset)
  }
  const daySpend = Date.now() - dayStart
  sheepRotate.value = daySpend * 360 / 86400000
}

onMounted(() => {
  getWidth()
  tick()
  timer = setInterval(tick, 1000 * 1)
  window.addEventListener('resize', getWidth, false)
})

onBeforeUnmount(() => {
  clearInterval(timer)
  window.removeEventListener('resize', getWidth, false)
})
</script>
<script>
export default {
  mounted() {
    const iconContent = '<img id="dot" src="/e255.gif"></img>'
    function getRatio(d) { return `${d / 24 * 100}%` }
    function toDbl(n) { return parseFloat(n) > 9 ? n : `0${n}` }
    const disStr = ['夜班', '休息', '白班', '中班']
    const divStr = ['23.5|0.5', '0|7.75,23.5|0.5', '0|7.75', '', '7.5|8', '7.5|8', '15.5|8', '15.5|8']
    const baseTime = 1522080000000 // 2018-03-27 夜班
    function initialize(nowDate) {
      const distance = (nowDate.getTime() - baseTime) / (1000 * 60 * 60 * 24)
      const distanceDay = Math.floor(distance) % 8
      const workName = disStr[Math.floor(distanceDay / 2)] + (distanceDay % 2 + 1) // 1 or 2
      const divContainer = document.getElementById('process')

      divContainer.innerHTML = iconContent
      document.getElementById('dot').style.left = getRatio(nowDate.getHours() + nowDate.getMinutes() / 60)
      // setting working
      const workDiv = divStr[distanceDay].split(',').forEach((workTimeStr) => {
        const workTimeInfo = workTimeStr.split('|') // [start, during]
        const workTimeBlock = document.createElement('span')
        workTimeBlock.style.left = getRatio(workTimeInfo[0])
        workTimeBlock.style.width = getRatio(workTimeInfo[1])

        divContainer.appendChild(workTimeBlock)
      })
      // date
      document.getElementById('display').innerHTML
        = `${nowDate.getUTCFullYear()} 年 ${
          nowDate.getMonth() + 1} 月 ${
          nowDate.getDate()} 日 ${
          workName}`
    }

    // clock
    const clock = document.getElementById('clock')
    let lastDay = 0
    function setTime() {
      const t = new Date()
      clock.innerHTML
        = `${toDbl(t.getHours())} : ${
          toDbl(t.getMinutes())} : ${
          toDbl(t.getSeconds())}`
      if (t.getDate() !== lastDay) {
        initialize(t)
        lastDay = t.getDate()
      }
    }
    setTime()
    setInterval(setTime, 1000)
  },
}
</script>
<template>
  <div class="mail-container">
    <br>
    <div id="clock">
      23:39:22
    </div>
    <span id="display"></span>
    <div id="process">
    </div>
  </div>
</template>

<style>

.thr-circle {
  background-image: radial-gradient();
}
#process {
  width: 360px;
  max-width: calc(100vw - 100px);
  height: 30px;
  margin: 50px auto 50px;
  background-color: #58a;
  position: relative;
  box-shadow: 0 1px 3px #bbb;
}
#process span {
  position: absolute; top: 0; bottom: 0; background: red;
}
#process img {
  position: absolute; top: -30px;
  margin-left: -13px; width: 24px; height: 24px;
  transform: rotateY(180deg);
}
#clock {
  color: #58a; font-size: 1.5em;
  text-shadow: 0 1px 2px #ccc;
}
#display {
  color: #58a; font-size: 0.9em;
}
</style>
