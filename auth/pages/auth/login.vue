<script lang="ts" setup>
// import { type User } from 'lucia-auth'

/**
 *
 * Component Description:Desc
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */

 type FetchError = Error & {
  statusCode: number
  statusMessage: string
  data: {
    message: string
  }
}

const error = ref<FetchError | null>(null)

const userInformation = ref({
  email: '',
  password: ''
})

const HandleUserLogin = async () => {
  try {
    await authLogin({
      email: userInformation.value.email,
      password: userInformation.value.password
    })
  } catch (resError) {
    error.value = resError as unknown as FetchError
  }
}

const errorMessage = computed(() => (error.value as FetchError)?.data?.message ?? '')

</script>

<template>
  <div class="min-h-screen bg-green flex justify-center items-center overflow-hidden relative">
    <div class="absolute w-60 h-60 rounded-xl bg-green-2 -top-5 -left-16 z-0 transform rotate-45 hidden md:block" />
    <div class="absolute w-48 h-48 rounded-xl bg-green-2 -bottom-6 -right-10 transform rotate-12 hidden md:block" />
    <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
      <div>
        <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">
          Login
        </h1>
      </div>
      <div class="space-y-4">
        <input v-model="userInformation.email" type="text" placeholder="Email Addres" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none">
        <input v-model="userInformation.password" type="text" placeholder="Password" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none">
      </div>
      <div class="text-center mt-6">
        <button class="py-3 w-64 text-xl text-white bg-green rounded-2xl" @click="HandleUserLogin">
          login
        </button>
        <p class="mt-4 text-sm">
          Not Account? <NuxtLink :to="{path:'/auth/register'}" class="underline  cursor-pointer">
            Create Account
          </NuxtLink>
        </p>
      </div>
      <p v-if="error" class="text-error">
        {{ errorMessage }}
      </p>
    </div>
    <div class="w-40 h-40 absolute bg-green-2 rounded-full top-0 right-12 hidden md:block" />
    <div class="w-20 h-40 absolute bg-green-2 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block" />
  </div>
</template>
<style scoped>

</style>
