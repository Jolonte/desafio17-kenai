<script setup>
import { ref } from 'vue'
import TheButton from '../components/TheButton.vue'
const emits = defineEmits(['close-modal', 'form-data'])

const closeModal = () => {
  emits('close-modal')
}

const title = ref('')

const sendForms = () => {
  emits('form-data', { titleData: title.value })
}
</script>

<template>
  <div
    class="fixed inset-0 m-auto flex h-screen items-center justify-center bg-neutral-900 bg-opacity-60"
  >
    <div
      class="flex h-full w-full flex-col items-end justify-center gap-4 rounded bg-kenaiDark p-10 lg:h-80 lg:w-2/4"
    >
      <i class="ri-close-line ri-xl text-kenaiWhite" @click="closeModal"></i>
      <form class="flex w-full flex-col items-center gap-10">
        <div class="flex w-full flex-col gap-2">
          <label for="input_name" class="text-neutral-300">Nome</label>
          <input
            id="input_name"
            v-model="title"
            class="h-12 grow-0 bg-neutral-700 p-4 text-kenaiWhite hover:bg-opacity-80 focus:bg-opacity-60 focus:outline-none"
            type="text"
            required
          />
        </div>
        <TheButton
          title="Enviar"
          bg-color="bg-kenaiGrayDark"
          @click="sendForms"
        />
      </form>
    </div>
  </div>
</template>
