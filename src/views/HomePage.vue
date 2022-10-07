<script setup>
import TheButton from '../components/TheButton.vue'
import MoovieBanner from '../components/MoovieBanner.vue'
</script>
<template>
  <header class="absolute z-10 w-full p-6">
    <nav class="flex w-full flex-row items-center justify-between">
      <h1
        class="logo bg-gradient-to-r from-kenaiGradient1 to-kenaiGradient2 bg-clip-text text-transparent"
      >
        Kenai
      </h1>
      <i class="ri-menu-3-line ri-xl text-kenaiWhite lg:hidden"></i>
      <div class="hidden gap-10 text-kenaiWhite lg:flex 2xl:gap-20">
        <i class="ri-search-line ri-xl"></i>
        <p>Início</p>
        <p>Minha lista</p>
        <i class="ri-notification-3-line ri-xl"></i>
        <i class="ri-user-line ri-xl"></i>
      </div>
    </nav>
  </header>
  <main
    class="absolute z-10 flex w-full flex-col bg-gradient-to-t from-kenaiGrayDark via-kenaiDark px-6 pt-20 2xl:h-full"
  >
    <!-- rating -->
    <section class="pt-16 lg:pt-14">
      <div
        class="h-fit w-fit rounded-tr-lg rounded-bl-lg bg-kenaiGrayDark py-1 px-2"
      >
        <p class="font-semibold text-kenaiYellow">Ação</p>
      </div>
      <div class="mt-6 flex gap-7">
        <div class="flex gap-1.5">
          <i class="ri-star-fill text-kenaiYellow"></i>
          <i class="ri-star-fill text-kenaiYellow"></i>
          <i class="ri-star-fill text-kenaiYellow"></i>
          <i class="ri-star-fill text-kenaiYellow"></i>
          <i class="ri-star-fill text-kenaiYellow"></i>
        </div>
        <div class="flex items-center gap-2.5">
          <i class="ri-time-line text-kenaiWhite"></i>
          <p class="text-sm font-semibold text-kenaiWhite">1h 57m</p>
        </div>
      </div>
    </section>
    <!-- title and subtitle -->
    <section class="mt-4 flex flex-col gap-8 lg:gap-14">
      <div class="flex flex-col gap-4 lg:gap-6">
        <h1 class="text-4xl font-semibold text-kenaiWhite 2xl:text-5xl">
          Batman
        </h1>
        <p class="text-kenaiWhite lg:w-[33.5rem] 2xl:text-xl">
          Após dois anos espreitando as ruas como Batman, Bruce Wayne se
          encontra nas profundezas mais sombrias de Gotham City. Com poucos
          aliados confiáveis, o vigilante solitário se estabelece como a
          personificação da vingança para a população.
        </p>
      </div>
      <TheButton
        title="Assistir agora"
        bg-color="bg-kenaiYellow"
        :is-for-watch="true"
      />
    </section>
    <!-- treading -->
    <section class="mt-14 flex flex-col gap-6">
      <div class="flex flex-col gap-1">
        <h2 class="text-2xl font-semibold text-kenaiWhite">Populares</h2>
        <hr class="h-0 w-14 border-2 border-solid border-kenaiYellow" />
      </div>
      <div class="flex gap-4 overflow-x-auto">
        <MoovieBanner
          title="Alice Através do Espelho "
          bg-img="bg-img1"
          categorie="Ação"
        />
        <MoovieBanner
          title="Angry Birds - O Filme"
          bg-img="bg-img2"
          categorie="Comédia"
        />
        <MoovieBanner title="Homem-Formiga" bg-img="bg-img3" categorie="Ação" />
        <MoovieBanner
          title="Batman vs Superman"
          bg-img="bg-img4"
          categorie="Ação"
        />
        <MoovieBanner
          title="Mogli: O Menino Lobo"
          bg-img="bg-img5"
          categorie="Aventura"
        />
      </div>
    </section>
    <footer
      class="flex w-full items-center justify-center py-11 lg:justify-between lg:pt-20 lg:pb-10"
    >
      <h1 class="logo hidden text-kenaiWhite lg:block">Kenai</h1>
      <div class="flex gap-12">
        <i class="ri-instagram-line ri-xl text-kenaiWhite"></i>
        <i class="ri-twitter-line ri-xl text-kenaiWhite"></i>
        <i class="ri-facebook-line ri-xl text-kenaiWhite"></i>
      </div>
    </footer>
  </main>
  <div class="absolute top-0 left-0 z-0 h-full w-full bg-cover"></div>
</template>
