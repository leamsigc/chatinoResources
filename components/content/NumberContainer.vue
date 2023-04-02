<script lang="ts" setup>
/**
 *
 * Component Description:Numbers container
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */

interface Props {
  numbers: {
    numero: string
    Chatino: string
    Espanol:string
    English:string
    example:string
  }[]
}
const props = defineProps<Props>()
const { numbers } = toRefs(props)
</script>

<template>
  <section class="py-10 bg-white dark:bg-slate-950">
    <div
      v-for="(item, index) in numbers"
      :key="index"
      class="h-screen grid place-content-center bg-transparent mt-10"
    >
      <div class="mockup-phone">
        <div class="camera" />
        <div class="display">
          <div
            class="artboard artboard-demo phone-1 rounded-lg shadow-lg text-center indicator custom-bg text-white flex flex-col justify-center items-center"
          >
            <span class="indicator-item badge badge-info" />
            <div class="avatar mb-5">
              <div class="mask mask-squircle w-10">
                <img src="/img/logo-sm.png" alt="chatino podcasts" class="mask">
              </div>
            </div>
            <div class="text-9xl text-blue-500 font-black font-mono">
              {{ item.numero }}
            </div>
            <div class="text-5xl font-semibold">
              {{ item.Chatino }}
            </div>
            <div class="text-sm font-thin text-gray-400 mt-4">
              {{ item.Espanol }}
            </div>
            <div class="text-sm font-light text-gray-400 mb-4">
              {{ item.English }}
            </div>
            <div class="text-xl text-gray-300">
              {{ item.example }}
            </div>
            <div class="text-blue-400 mt-10 text-xs">
              <a href="https://leamsigc.com" target="_blank"> Ismael G. </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.custom-bg {
  background-image: radial-gradient(
    rgba(31, 41, 55, 0.2) 0.5px,
    rgba(242, 242, 242, 0.31) 0.5px
  );
  background-position-x: 50%;
  background-position-y: 0%;
  background-size: 5px 5px;
}
</style>
