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
  isForWatch: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button
    v-if="!isForWatch"
    :class="props.bgColor"
    class="flex h-12 w-full items-center justify-center py-4 hover:bg-opacity-80 md:w-56"
  >
    <p class="font-semibold text-kenaiWhite">{{ props.title }}</p>
  </button>
  <button
    v-else
    :class="props.bgColor"
    class="w-full rounded-lg py-3 hover:bg-opacity-80 lg:w-72"
  >
    <p class="font-semibold text-kenaiDark lg:text-xl 2xl:text-2xl">
      {{ props.title }}
    </p>
  </button>
</template>
