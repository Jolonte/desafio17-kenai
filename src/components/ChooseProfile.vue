<script setup>
import { ref } from 'vue'
const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  background: {
    type: String,
    default: ''
  }
})

const textColor = ref('text-kenaiGray')
</script>
<template>
  <router-link
    to="/home"
    class="flex flex-col items-center gap-6 hover:cursor-pointer"
    @mouseover="textColor = 'text-kenaiWhite'"
    @mouseleave="textColor = 'text-kenaiGray'"
  >
    <div :class="props.background" class="h-28 w-28 rounded-full"></div>
    <p :class="textColor" class="text-lg">
      {{ props.name }}
    </p>
  </router-link>
</template>
