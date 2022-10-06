<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  bgColor: {
    type: String,
    default: ''
  },
  isWatch: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button
    :class="props.bgColor"
    class="flex h-12 w-full items-center justify-center py-4 md:w-56"
  >
    <p class="font-semibold text-kenaiWhite">{{ props.title }}</p>
  </button>
</template>
