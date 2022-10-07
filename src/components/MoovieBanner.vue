<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  categorie: {
    type: String,
    default: ''
  },
  bgImg: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div
    :class="props.bgImg"
    class="flex h-60 w-40 shrink-0 bg-cover bg-center bg-no-repeat hover:cursor-pointer lg:h-[27.5rem] lg:w-[18.75rem]"
  >
    <div
      class="flex h-full w-full flex-col justify-end gap-2 bg-gradient-to-t from-kenaiGrayDark p-3"
    >
      <div
        class="h-fit w-fit rounded-tr-lg rounded-bl-lg bg-kenaiGrayDark py-1 px-2"
      >
        <p class="text-xs font-semibold text-kenaiYellow">
          {{ props.categorie }}
        </p>
      </div>
      <div class="flex gap-1.5">
        <i class="ri-star-fill ri-xs text-kenaiWhite"></i>
        <i class="ri-star-fill ri-xs text-kenaiWhite"></i>
        <i class="ri-star-fill ri-xs text-kenaiWhite"></i>
        <i class="ri-star-fill ri-xs text-kenaiWhite"></i>
        <i class="ri-star-fill ri-xs text-kenaiWhite"></i>
      </div>
      <p class="text-sm font-semibold text-kenaiWhite">{{ props.title }}</p>
    </div>
  </div>
</template>
