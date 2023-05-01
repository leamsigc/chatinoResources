<script lang="ts" setup>
import { type User } from 'lucia-auth'

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
interface Response {
  user: User
}
 type FetchError = Error & {
  statusCode: number
  statusMessage: string
  data: {
    message: string
  }
}

const userRef = useUser()
const error = ref<FetchError | null>(null)

const userInformation = ref({
  email: '',
  password: ''
})

const HandleUserRegister = async () => {
  try {
    const { user } = await $fetch<Response>('/api/auth/register', {
      method: 'POST',
      body: {
        email: userInformation.value.email,
        password: userInformation.value.password
      }
    })
    console.log(user)

    userRef.value = user
    navigateTo('/')
  } catch (resError) {
    console.log(resError)
    error.value = resError as unknown as FetchError
  }
}

const errorMessage = computed(() => (error.value as FetchError)?.data?.message ?? '')
</script>

<template>
  <div class="min-h-screen bg-green flex justify-center items-center">
    <div class="absolute w-60 h-60 rounded-xl bg-green-2 -top-5 -left-16 z-0 transform rotate-45 hidden md:block" />
    <div class="absolute w-48 h-48 rounded-xl bg-green-2 -bottom-6 -right-10 transform rotate-12 hidden md:block" />
    <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
      <div>
        <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">
          Create An Account
        </h1>
        <p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
          Create an account to enjoy all the services without any ads for free!
        </p>
      </div>
      <p v-if="error" class="text-error">
        {{ errorMessage }}
      </p>
      <div class="space-y-4 text-left">
        <input v-model="userInformation.email" type="email" placeholder="Email Addres" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none">
        <input v-model="userInformation.password" type="password" placeholder="Password" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none">
      </div>
      <div class="text-center mt-6">
        <button class="py-3 w-64 text-xl text-white bg-green rounded-2xl" @click="HandleUserRegister">
          Create Account
        </button>
        <p class="mt-4 text-sm">
          Already Have An Account? <span class="underline  cursor-pointer"> Sign In</span>
        </p>
      </div>
    </div>
    <div class="w-40 h-40 absolute bg-green-2 rounded-full top-0 right-12 hidden md:block" />
    <div class="w-20 h-40 absolute bg-green-2 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block" />
  </div>
</template>
<style scoped>

</style>
