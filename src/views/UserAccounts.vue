<script setup>
import { ref, computed } from 'vue'
import ChooseProfile from '../components/ChooseProfile.vue'
import TheButton from '../components/TheButton.vue'
import TheModal from '../components/TheModal.vue'

const showHours = computed(() => {
  const date = new Date()
  return `${date.getHours()}:${date.getMinutes()}`
})

const saves = computed(() => {
  return JSON.parse(localStorage.getItem('accounts'))
})

const accounts = ref([])
const accountsSaved = ref(saves)

const modal = ref(false)

function addToStorage(value) {
  const strg = JSON.stringify(value)
  localStorage.setItem('accounts', strg)
}

function getData(itemData) {
  accounts.value.push(itemData)
  addToStorage(accounts.value)
  window.location.reload()
}

const clock = ref(showHours)
</script>

<template>
  <header class="bg-kenaiDark pt-6 lg:px-12 lg:pt-10">
    <nav class="flex w-full flex-row justify-center lg:justify-between">
      <h1
        class="logo bg-gradient-to-r from-kenaiGradient1 to-kenaiGradient2 bg-clip-text text-transparent lg:text-2xl 2xl:text-4xl"
      >
        Kenai
      </h1>
      <h1
        class="hidden text-2xl font-light text-kenaiWhite lg:block 2xl:text-4xl"
      >
        {{ clock }}
      </h1>
    </nav>
  </header>
  <main
    class="flex h-full flex-col bg-kenaiDark px-6 pt-20 pb-16 lg:pb-20 2xl:h-full"
  >
    <section class="flex flex-col items-center gap-4 lg:gap-6 2xl:mt-16">
      <h1 class="text-xl text-kenaiWhite lg:text-3xl 2xl:text-6xl">
        Bem-vindo de volta ao Kenai
      </h1>
      <h2 class="text-lg font-light text-kenaiWhite lg:text-2xl 2xl:text-4xl">
        Quem está usando?
      </h2>
    </section>
    <section
      class="mt-12 flex flex-col justify-center gap-8 lg:mt-24 lg:flex-row lg:gap-16 2xl:mt-52 2xl:gap-32"
    >
      <ChooseProfile
        v-for="item in accountsSaved"
        :key="item.length"
        :name="item.titleData"
        background="bg-gradient-to-bl from-purple-600 to-purple-900"
      />
    </section>
    <div class="mt-14 flex justify-center lg:mt-16 2xl:mt-36">
      <TheButton
        title="Adicionar perfil"
        bg-color="bg-kenaiGrayDark"
        @click="modal = true"
      />
    </div>
  </main>
  <!-- modal -->
  <TheModal v-if="modal" @close-modal="modal = false" @form-data="getData" />
</template>
