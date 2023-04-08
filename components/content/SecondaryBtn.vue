<script setup lang="ts">
interface PropsInterface {
  textContent: string
  link?: string
}
const prop = defineProps<PropsInterface>()

const { textContent, link } = toRefs(prop)
</script>

<template>
  <a :href="link ? link : '#'" class="block w-full rounded  bg-teal-700  px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto">{{ textContent }}</a>
</template>

<style></style>
