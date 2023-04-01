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

const { data } = await useAsyncData('footer', () =>
  queryContent('_partials', '_footer').findOne(),
)
</script>

<template>
  <footer class="footer">
    <div class="flex justify-center">
      <ContentRenderer v-if="data" :value="data">
        <ContentRendererMarkdown :value="data" unwrap="p" />
        <template #empty>
          <p>No content found.</p>
        </template>
      </ContentRenderer>
    </div>
    <div class="container">
      <div>
        <img src="/logo/DuckLogo.svg" alt="Wetzlar developers meetup" width="200px" height="100px" loading="lazy" decoding="async" quality="80" class="w-[150px] h-16 lg:h-12">
      </div>
      <DarkToggle />
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  margin-top: 10rem;
  padding: 10rem 0 2rem;
  background: var(--main-color);
  position: relative;
  //   -webkit-clip-path: polygon(0 1%, 100% 23%, 100% 100%, 0% 100%);
  //   clip-path: polygon(0 1%, 100% 23%, 100% 100%, 0% 100%);
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

}

.container::before {
  @apply hidden lg:block;

  content: "";
  padding: 4rem;
  width: 110%;
  background: var(--secondary-color);
  position: absolute;
  right: -5rem;
  top: -3rem;

  transform: rotate(3deg);
}
</style>
