<script lang="ts" setup>
/**
 *
 * Home after login
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */

const user = useUser()
async function handleSignOut () {
  try {
    await authLogout()
    user.value = null
    navigateTo('/auth/login')
  } catch {}
}

definePageMeta({
  auth: true
})
</script>

<template>
  <div>
    <p>This page is protected and can only be accessed by authenticated users.</p>
    <pre class="code">{{ JSON.stringify(user, null, 2) }}</pre>
    <button @click="handleSignOut">
      Sign out
    </button>
  </div>
</template>
<style scoped>

</style>
