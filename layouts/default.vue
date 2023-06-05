<script lang="ts" setup>
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
</script>

<template>
  <main text-center class="bg-white dark:bg-slate-9 text-slate-9 dark:text-slate-3">
    <TheHeader />
    <section class="dark:bg-transparent">
      <slot />
    </section>
    <TheFooter />
  </main>
</template>
