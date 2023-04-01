<script lang="ts">
import SecondaryBtn from './SecondaryBtn.vue'
export default {
  name: 'HeroComponent',
  components: {
    SecondaryBtn
  },
  props: {
    heroBtns: {
      type: Array<{ link: string; textContent:string}>,
      default: () => ([])
    }
  },
  data () {
    return {
      heroStyle: {
        background: `linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6))
        ,url(Wetzlar.jpg) no-repeat center bottom / cover`
      }
    }
  },
  computed: {
    getStyles (): any {
      const imgUrl = 'Wetzlar.jpg'
      return {
        background: `linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6))
        ,url('${imgUrl}') no-repeat center bottom / cover`
      }
    }
  }
}
</script>

<template>
  <section class="section-hero " :style="getStyles">
    <div class="container">
      <div class="hero-title">
        <h1 class="title">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h1>
        <slot name="description" />
      </div>
      <div class="btn-container">
        <SecondaryBtn v-for="btn in heroBtns" :key="btn.link" :text-content="btn.textContent" :link="btn.link ? btn.link : '#'" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-hero {
  color: var(--secondary-color);
  padding: 2rem 1rem;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-align: left;

  @media (max-width: 800px) {
    flex-direction: column;
    min-height: 50vh;
  }
}
.btn-container {
  flex: 1 1 1;
  margin: 4rem 0 5rem;
  display: flex;
  @media (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;
    .btn {
      margin-bottom: 1rem;
      margin-left: 0;
    }
  }
}
.btn-container .btn:not(:first-child) {
  margin-left: 1rem;
}
</style>
