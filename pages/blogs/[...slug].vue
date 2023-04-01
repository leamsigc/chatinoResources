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
const r = useRoute()
const layout = ref<string>('blog')

layout.value = r.params.slug ? 'blog' : 'default'

definePageMeta({
  documentDriven: false,
  layout: false,
})
</script>

<template>
  <main>
    <NuxtLayout :name="layout">
      <ContentDoc :path="$route.params.slug ? `/blogs/${$route.params.slug[0]}` : '/blogs'"  >
        <template #not-found>
          <page-not-found />
        </template>
      </ContentDoc>
    </NuxtLayout>
  </main>
</template>
