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
        background: `linear-gradient(45deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))
        ,url('${imgUrl}') no-repeat center bottom / cover`
      }
    }
  }
}
</script>

<template>
  <section class="bg-gray-50 dark:bg-teal-950 dark:text-slate-200 text-slate-50" :style="getStyles">
    <div
      class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
    >
      <div class="mx-auto max-w-2xl text-center">
        <h1 class="text-3xl font-extrabold sm:text-5xl">
          <ContentSlot :use="$slots.title" unwrap="p" />
          <strong class="font-extrabold text-red-700 sm:block">
            <ContentSlot :use="$slots.subTitle" unwrap="p" />
          </strong>
        </h1>
        <section class="mt-4 sm:text-xl sm:leading-relaxed">
          <ContentSlot :use="$slots.description" unwrap="p" />
        </section>

        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <SecondaryBtn v-for="btn in heroBtns" :key="btn.link" :text-content="btn.textContent" :link="btn.link ? btn.link : '#'" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>
