<script>
export default {
  name: 'HeroBlog',
  props: {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
  },
}
</script>

<template>
  <section class="hero-blog">
    <div class="container">
      <h2 class="title">
        {{ title }}
      </h2>
      <p class="subtitle" v-html="subtitle" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero-blog {
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to right top,
    #130ae7,
    #3c07dd,
    #5007d2,
    #5d0ac9,
    #660fbf,
    #691dc1,
    #6b27c4,
    #6e30c6,
    #6c3fd4,
    #694de1,
    #645aee,
    #5f66fb
  );
  color: var(--secondary-color);
}
</style>
