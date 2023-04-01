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
    title: 'Aboutus',
    _path: '/about',
    navLabel: 'About',
    layout: 'home'
  },
  ...data.value as NAV_ITEM[]]

const menuState = ref<boolean>(false)

const HandleToggleMenu = () => {
  menuState.value = !menuState.value
}
</script>

<template>
  <header class="header" p-3 lg:p-1>
    <div grid container lg:grid-cols-4 mx-auto>
      <div grid grid-cols-3 gap-x-4 lg:col-span-2>
        <NuxtLink class="nav--link" to="/" col-span-2 text-left>
          <img
            src="/logo/DuckLogo.svg"
            preload
            alt="Wetzlar developers logo"
            width="200px"
            height="100px"
            loading="eager"
            decoding="async"
            class="w-[150px] h-16 lg:h-12"
          >
        </NuxtLink>
        <div grid content-center text-white lg:hidden @click="HandleToggleMenu">
          <button
            aria-label="button"
            class=" d-block w-10 h-10 ml-auto transition-all duration-700 "
            :class="[`${menuState ? ' i-eva:close-outline' : 'i-bx-menu-alt-right'}`]"
          />
        </div>
      </div>
      <nav
        lg:col-span-2
        lg:flex
        lg:translate-0
        :class="[`${menuState ? '-translate-y-0 top-20 opacity-100' : '-translate-y-full opacity-0 '}`]"
        class="absolute lg:static inset-0  overflow-y-scroll lg:overflow-y-unset z-10 w-screen lg:w-auto min-h-screen lg:min-h-auto transform transition-transform bg-[var(--main-color)] p-6 lg:p-unset text-white lg:opacity-100 lg:-translate-y-0 lg:ml-auto "
      >
        <ul class="grid gap-5 text-left lg:grid-cols-6 lg:justify-center ">
          <li v-for="link in nav" :key="link._path" class="grid content-center">
            <NuxtLink
              class="uppercase fw-bold block hover:text-green-400 transition-all lg:text-xs"
              :to="`${link._path}`"
            >
              {{ link.navLabel }}
            </NuxtLink>
          </li>
          <li class="grid content-center" col-span-2>
            <SlackButton />
          </li>
          <li class="grid content-center">
            <DarkToggle />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  background: var(--main-color);
}

</style>
