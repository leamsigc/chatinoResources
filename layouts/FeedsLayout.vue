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
const user = useUser()

if (!user.value?.id) {
  await getUser()
}
</script>

<template>
  <MainProvider>
    <MainViewer>
      <slot />
    </MainViewer>
  </MainProvider>
</template>
<style scoped>

</style>
