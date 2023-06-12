<script lang="ts" setup>
/**
 *
 * Home after login
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */

const user = useUser()

definePageMeta({
  auth: true,
  layout: 'feeds-layout'
})

const modalState = ref(false)
</script>

<template>
  <div class="container mx-auto relative">
    <div class="hero min-h-screen dark:bg-slate-8 dark:text-slate-1">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 v-if="user" class="text-3xl md:text-4xl font-bold mb-10 md:mb-0">
            <span>
              {{ user.username }}
            </span> <br> Welcome  to chatino resources
          </h1>
          <p class="md:py-6 mb-5 md:mb-0">
            This is a chatino resources for the chatino people. We are really happy to have you here.
          </p>
          <button class="btn btn-primary px-10" @click="modalState = !modalState">
            Create your first translation card
          </button>
        </div>
      </div>
    </div>
    <section class="py-10 grid  grid-cols-1 md:grid-cols-4 gap-10">
      <div v-for="item in 12" :key="item" class="card w-full bg-base-100 shadow-xl">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes"></figure>
        <div class="card-body">
          <span class="text-11px">Chatino:</span>
          <h2 class="card-title">
            <span class="">Ska skia</span>
            <div class="badge badge-secondary text-11px">
              NEW
            </div>
          </h2>
          <div class="flex flex-col">
            <span class="text-11px">Explication:</span>
            <span>If a dog chews shoes whose shoes does he choose?</span>
          </div>
          <div class="card-actions justify-end">
            <n-badge :value="10" :max="15">
              <n-button tertiary circle type="success">
                <template #icon>
                  <MainIcons type="like" />
                </template>
              </n-button>
            </n-badge>
            <n-badge :value="1" :max="15">
              <n-button tertiary circle type="success">
                <template #icon>
                  <MainIcons type="dislike" />
                </template>
              </n-button>
            </n-badge>
            <n-badge :value="100" :max="15">
              <n-button tertiary circle type="success">
                <template #icon>
                  <MainIcons type="comment" />
                </template>
              </n-button>
            </n-badge>
          </div>
        </div>
      </div>
    </section>
  </div>
  <CreateNewTranslation :modal-state="modalState" />
</template>
<style scoped>

</style>
