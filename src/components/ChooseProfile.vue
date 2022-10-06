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
    <div class="h-28 w-28 rounded-full bg-purple-600"></div>
    <p :class="textColor" class="text-lg">
      {{ props.name }}
    </p>
  </router-link>
</template>
