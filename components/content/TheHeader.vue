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
interface NAV_ITEM {
  title: string
  _path: string
  navLabel: string
  layout: string
}
const nav = ref<NAV_ITEM[]>([])
const { data }: { data: { value: unknown | NAV_ITEM[] } } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
})
nav.value = [
  {
    title: 'Home',
    _path: '/',
    navLabel: 'Home',
    layout: 'home'
  },
  {
    title: 'Feeds',
    _path: '/feeds/home',
    navLabel: 'Feeds',
    layout: 'home'
  },
  {
    title: 'Aboutus',
    _path: '/about',
    navLabel: 'About',
    layout: 'home'
  },
  ...data.value as NAV_ITEM[]]

</script>

<template>
  <header aria-label="Site Header" class="bg-white dark:bg-green-9">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="md:flex md:items-center md:gap-12">
          <NuxtLink class="block text-teal-800 dark:text-white " to="/">
            <span class="sr-only">Home</span>
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
          </NuxtLink>
        </div>

        <div class="hidden md:block">
          <nav aria-label="Site Nav">
            <ul class="flex items-center gap-6 text-sm">
              <li v-for="link in nav" :key="link._path">
                <NuxtLink
                  class="text-gray-500 dark:text-white transition hover:text-gray-500/75"
                  :to="`${link._path}`"
                >
                  {{ link.navLabel }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>

        <div class="flex items-center gap-4">
          <div class="sm:flex sm:gap-4">
            <SlackButton class="rounded-md bg-green px-5 py-2.5 text-sm font-medium text-white shadow" />

            <div class="hidden sm:flex">
              <NuxtLink class="rounded-md dark:bg-gray-100 text-gray-950 px-5 py-2.5 text-sm font-medium" :to="{path:'/auth/login'}">
                Login
              </NuxtLink>
              <NuxtLink class="rounded-md dark:bg-gray-100 text-gray-950 px-5 py-2.5 text-sm font-medium ml-5" :to="{path:'/auth/register'}">
                Register
              </NuxtLink>
            </div>
            <div class="hidden sm:flex">
              <DarkToggle class="rounded-md dark:bg-gray-100 text-gray-950 px-5 py-2.5 text-sm font-medium " />
            </div>
          </div>

          <div class="block md:hidden">
            <button
              aria-label="Menu toggle"
              class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">

</style>
