<script setup lang="ts">
interface PropsInterface {
  textContent: string
  link?: string
}
const prop = defineProps<PropsInterface>()

const { textContent, link } = toRefs(prop)
</script>

<template>
  <a :href="link ? link : '#'" class="btn btn-secondary">{{ textContent }}</a>
</template>

<style></style>
