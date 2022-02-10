<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { Asker } from '@coloration/asker'
import { onMounted, ref } from 'vue-demi';

const { name } = useRoute()
const comments = ref([])
const writing = ref({
  name: '',
  mail: '',
  comment: '',
})

const api = new Asker({
  baseUrl: 'https://b.coloration.top/comment',
  after: (res) => res.data,
})

onMounted(() => {
  fetchComments()
})

function fetchComments() {
  api.get(`/${String(name)}`)
    .then(res => {
      comments.value = res
      console.log(res)
    })
}

function handleSubmit(e: Event) {
  e.preventDefault()
  console.log(writing.value)
  api.post(`/${String(name)}`, writing.value)
    .then(() => {
      writing.value = {
        name: '',
        mail: '',
        comment: '',
      }

      fetchComments()
    })
}

onMounted(() => {
  // @ts-ignore
  Waline({
    el: '#waline',
    serverURL: 'https://binyu-comment.vercel.app',
  })
})
</script>
<template>
  <aside>
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pb-12 md:pb-20">
        <div class="max-w-3xl mx-auto">
          <div id="waline"></div>
          <!--

            <h4 class="h4 font-red-hat-display mb-8">Comments</h4>
          <div class="mb-20" v-if="comments.length > 0">
            <div v-for="(cmt, i) in comments" :key="i">
              <article class="mb-2">
                <div
                  class="flex pr-6 py-5 bg-white dark:bg-gray-800 divide-x divide-gray-200 dark:divide-gray-700 shadow"
                >
                  <div class="flex items-center px-4 sm:px-8 font-semibold text-2xl">
                    #{{ i + 1 }}
                  </div>
                  <div class="pl-6 flex-1">
                    <p class="text-gray-600 dark:text-gray-400">{{ cmt.comment }}</p>
                    <footer class="text-sm flex items-center mt-3">
                      <div class="flex flex-shrink-0 mr-3">
                        <a class="relative" href="#0">
                          <div class="w-8 h-8 rounded-full flex items-center justify-center shadow text-white bg-indigo-500 font-bold">
                            {{ String(cmt.name[0]).toUpperCase() }}
                          </div>
                        </a>
                      </div>
                      <div class="text-gray-500">
                        <span>Written by </span>
                        <a
                          class="font-medium text-gray-800 dark:text-gray-400 hover:underline"
                          href="#0"
                        >{{ cmt.name }}</a>
                      </div>

                      <div class="text-gray-500 flex-1 text-right">
                        <span>{{ cmt.date }}</span>
                      </div>
                    </footer>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <form @submit="handleSubmit">
            <div class="flex flex-wrap -mx-3 mb-5">
              <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label
                  class="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
                  for="name"
                >
                  昵称
                  <span class="text-red-600">*</span>
                </label>
                <input
                  id="name"
                  v-model="writing.name"
                  type="text"
                  class="form-input w-full"
                  placeholder="Enter your nickname"
                  required
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
                  for="mail"
                >
                  邮箱
                  <span class="text-red-600">*</span>
                </label>
                <input
                  id="mail"
                  v-model="writing.mail"
                  type="text"
                  class="form-input w-full"
                  placeholder="Enter your mail"
                  required
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-5">
              <div class="w-full px-3">
                <div class="flex justify-between items-center mb-1">
                  <label
                    class="block text-gray-800 dark:text-gray-300 text-sm font-medium"
                    for="message"
                  >
                    想说
                    <span class="text-red-600">*</span>
                  </label>
                </div>
                <textarea
                  id="message"
                  v-model="writing.comment"
                  rows="4"
                  class="form-textarea w-full"
                  placeholder="What do you want to say?"
                  required
                ></textarea>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mt-6">
              <div class="w-full px-3">
                <button
                  type="submit"
                  class="btn text-white bg-teal-500 hover:bg-teal-400 w-full flex items-center"
                >
                  <span>评论</span>
                  <svg
                    class="w-3 h-3 flex-shrink-0 mt-px ml-2"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="fill-current"
                      d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>
          -->
        </div>
      </div>
    </div>
  </aside>
</template>
<style>
#waline label {
  @apply text-sm;
}
#waline .vpanel {
  @apply rounded-none border-none;
}

#waline .vheader {
  @apply border-solid border-b;
}

#waline-edit {
  @apply px-3 box-border;
}
#waline-edit:active,
#waline-edit:focus {
  @apply bg-transparent;
}

#waline .vbtn {
  @apply rounded-none px-6 ml-4 text-sm;
}
#waline .vbtn.primary {
  @apply bg-teal-500 hover:bg-teal-400;
}

#waline .vcontent {
  @apply rounded-none;
}

#waline svg {
  @apply text-gray-800 hover:text-teal-500;
}

#waline .vpower {
  opacity: 0;
}
</style>
