<script setup>
useSchemaOrg([
  // https://vue-schema-org.netlify.app/guide/guides/identity.html
  // @todo select appropriate identity
  // https://vue-schema-org.netlify.app/schema/website.html
  defineWebSite({
    name: 'Chatino language resources and other interesting or related items to the chatino language'
  }),
  // https://vue-schema-org.netlify.app/schema/webpage.html
  defineWebPage()
])
</script>
<template>
  <main>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>
