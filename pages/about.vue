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
const { data } = await useAsyncData('about', () =>
  queryContent('_partials', '_about').findOne()
)
useContentHead(data)

definePageMeta({
  documentDriven: false
})
</script>

<template>
  <main v-if="data" class="dark:bg-slate-900">
    <ContentRenderer :value="data">
      <ContentRendererMarkdown :value="data" unwrap="p" />
      <template #empty>
        <p>No content found.</p>
      </template>
    </ContentRenderer>
  </main>
</template>
