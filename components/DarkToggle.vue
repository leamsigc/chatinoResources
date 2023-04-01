<script setup lang="ts">
const color = useColorMode()

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button aria-label="Theme toggle " class="!outline-none text-white" @click="toggleDark">
    <div class="dark:i-carbon-moon i-carbon-sun" />
  </button>
</template>
