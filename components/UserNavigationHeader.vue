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
const handleSignOut = async () => {
  try {
    await authLogout()
    // user.value = null
    navigateTo('/auth/login')
  } catch {}
}
</script>

<template>
  <div class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle">
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="navbar bg-white dark:bg-green-9">
        <div class="flex-none lg:hidden">
          <label for="my-drawer-3" class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </label>
        </div>
        <div class="container mx-auto">
          <div class="flex-1">
            <a class="btn btn-ghost normal-case text-xl px-0">CH</a>
          </div>
          <div class="flex-none flex justify-center items-center">
            <div class="dropdown dropdown-end">
              <label tabindex="0" class="btn btn-ghost btn-circle">
                <div class="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  <span class="badge badge-sm indicator-item">8</span>
                </div>
              </label>
              <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div class="card-body">
                  <span class="font-bold text-lg">8 Items</span>
                  <span class="text-info">Subtotal: $999</span>
                  <div class="card-actions">
                    <button class="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="dropdown dropdown-end">
              <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                  <img src="/img/logo-sm.png">
                </div>
              </label>
              <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-1">
                <li>
                  <a class="justify-between">
                    Profile
                    <span class="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li>
                  <n-button type="default" @click="handleSignOut">
                    Logout
                  </n-button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <main class="px-4 md:px-0">
        <!-- Breadcrumbs -->
        <div class="text-sm breadcrumbs container mx-auto my-2">
          <ul>
            <li><a>Home</a></li>
            <li><a>Feeds</a></li>
            <li>News</li>
          </ul>
        </div>
        <!-- Page content here -->
        <slot />
      </main>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" class="drawer-overlay" />
      <ul class="menu p-4 w-80 bg-base-100">
        <!-- Sidebar content here -->
        <li><a>Home</a></li>
        <li><a>Profile</a></li>
      </ul>
    </div>
  </div>
</template>
<style scoped>

</style>
