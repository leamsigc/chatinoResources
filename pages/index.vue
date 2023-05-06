<script lang="ts" setup>
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
/**
 *
 * Component Description:Desc
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [useSeoMeta ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
const blogs = await queryContent('blogs').limit(5).find()
const { data } = await useAsyncData('hero', () =>
  queryContent<ParsedContent>('_partials', '_hero').findOne()
)

useContentHead(data as unknown as ParsedContent)
definePageMeta({ layout: 'home' })
</script>

<template>
  <main>
    <ContentRenderer v-if="data" :value="data">
      <ContentRendererMarkdown :value="data" unwrap="p" />
      <template #empty>
        <p>No content found.</p>
      </template>
    </ContentRenderer>
    <main class="bg-slate-900 p-3 md:p-10 text-slate-50">
      <div class="mx-auto max-w-7xl">
        <div class="md:grid grid-cols-1 gap-20 md:grid-cols-12">
          <Nuxt-link
            :to="blogs[0]._path"
            :title="blogs[0].title"
            class="hover:bg-transparent hover:text-green hover:shadow-none mt-10 col-span-1 md:col-span-12 grid grid-cols-1 gap-20 md:grid-cols-12"
          >
            <div class="p-4 md:col-span-5">
              <header class="flex font-mono text-xl font-medium uppercase opacity-80">
                <h2 class="text-teal-500">
                  {{ blogs[0].tag }}
                </h2>
                <span class="ml-3 text-slate-200">{{ blogs[0].readTime }}</span>
              </header>
              <h3 class="mt-6 text-2xl font-bold leading-tight">
                {{ blogs[0].title }}
              </h3>
              <section class="mt-10 text-lg leading-relaxed">
                {{ blogs[0].description }}
              </section>
              <footer class="mt-5 font-mono font-medium uppercase text-slate-400">
                <section>{{ blogs[0].author }}</section>
                <section class="">
                  {{ blogs[0].publishedAt }}
                </section>
              </footer>
            </div>
            <div class="md:col-span-7">
              <picture
                v-if="blogs[0].image"
                :src="blogs[0].image.src"
                quality="80"
                rounded
                :img-attrs="{ class: 'object-cover  w-full' }"
              >
                <source :srcset="blogs[0].image.src" media="(min-width: 600px)">
                <img
                  object-contain
                  w-full
                  class="h-[300px] md:h-[500px]"
                  :src="blogs[0].image.src"
                  :alt="blogs[0].title"
                  height="600"
                  width="600"
                  loading="lazy"
                  decoding="async"
                  role="presentation"
                >
              </picture>
            </div>
          </Nuxt-link>
          <div class="mt-10 md:col-span-12">
            <h4 class="text-4xl leading-loose tracking-tighter">
              Latest Articles
            </h4>
          </div>

          <article v-for="blog in blogs" :key="blog._path" class="col-span-4">
            <Nuxt-link :to="blog._path" :title="blog.title" class="hover:bg-transparent hover:text-green hover:shadow-none">
              <picture
                v-if="blog.image"
                :src="blog.image.src"
                quality="80"
                rounded
                :img-attrs="{ class: 'object-cover  w-full' }"
              >
                <source :srcset="blog.image.src" media="(min-width: 600px)">
                <img
                  object-contain
                  w-full
                  h-45
                  :src="blog.image.src"
                  :alt="blog.title"
                  height="600"
                  width="600"
                  loading="lazy"
                  decoding="async"
                  role="presentation"
                >
              </picture>
              <header class="flex font-mono font-medium uppercase opacity-80 mt-10">
                <h2 class="text-teal-500">
                  <span>{{ blog.tag }}</span>
                  <span class="ml-3 text-slate-400">{{ blog.readTime }}</span>
                </h2>
              </header>
              <h3 class="mt-6 text-lg font-bold leading-tight">
                {{ blog.title }}
              </h3>
              <footer class="mt-5 font-mono font-medium uppercase text-slate-400">
                <section>
                  {{ blog.author }}
                </section>
                <section class="">
                  {{ blog.publishedAt }}
                </section>
              </footer>
            </Nuxt-link>
          </article>
        </div>
      </div>
    </main>
  </main>
</template>

<style scoped></style>
