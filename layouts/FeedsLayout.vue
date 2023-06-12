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
const isMobile = useIsMobile()()
useHead({ htmlAttrs: { 'data-theme': 'cupcake' } })
</script>

<template>
  <MainProvider>
    <MainViewer>
      <n-layout :position="isMobile ? 'static' : 'absolute'" class="root-layout dark:bg-slate-950 bg-white dark:text-slate-50 text-slate-9">
        <UserNavigationHeader>
          <slot />
        </UserNavigationHeader>
      </n-layout>
    </MainViewer>
  </MainProvider>
</template>
<style scoped>

</style>
