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
</script>

<template>
  <div class="container mx-auto relative">
    <div class="hero min-h-screen bg-base-200">
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
          <button class="btn btn-primary">
            Create your first translation card
          </button>
        </div>
      </div>
    </div>
    <section class="py-10 grid  grid-cols-1 md:grid-cols-4 gap-10">
      <div v-for="item in 12" :key="item" class="card w-full bg-base-100 shadow-xl">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes"></figure>
        <div class="card-body">
          <h2 class="card-title">
            Shoes!
            <div class="badge badge-secondary">
              NEW
            </div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">
              Fashion
            </div>
            <div class="badge badge-outline">
              Products
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>

</style>
