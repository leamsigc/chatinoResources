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
  queryContent('_partials', '_footer').findOne()
)
</script>

<template>
  <footer aria-label="Site Footer" class="bg-white dark:bg-slate-900">
    <div class="max-w-screen-xl px-4 pt-16 pb-8 mx-auto sm:px-6 lg:px-8 lg:pt-24">
      <div class="text-center flex justify-center">
        <ContentRenderer v-if="data" :value="data">
          <ContentRendererMarkdown :value="data" unwrap="p" />
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </div>

      <div
        class="pt-8 mt-16 border-t border-gray-100 sm:flex sm:items-center sm:justify-between lg:mt-24"
      >
        <nav aria-label="Footer Navigation - Support">
          <ul class="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
            <li>
              <a href="#" class="text-gray-500 transition hover:opacity-75">
                Terms & Conditions
              </a>
            </li>

            <li>
              <a href="#" class="text-gray-500 transition hover:opacity-75">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#" class="text-gray-500 transition hover:opacity-75">
                Cookies
              </a>
            </li>
          </ul>
        </nav>

        <section class="flex justify-center gap-6 mt-8 sm:mt-0 lg:justify-end">
          <div>
            <img
              src="/img/logo-sm.png"
              preload
              alt="Chatino Podcast logo"
              width="100px"
              height="100px"
              loading="eager"
              decoding="async"
              class=" h-12 w-12 rounded-full"
            >
          </div>
          <DarkToggle />
        </section>
      </div>
    </div>
  </footer>
</template>
