<script lang="ts" setup>
/**
 *
 * Component Description:Card item example
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
interface propsInterface {
  bannerLabel?: string
  bannerLabelBack?: string
  tagLabel?: string
}

const props = withDefaults(defineProps<propsInterface>(), {
  bannerLabel: 'Explainer',
  tagLabel: 'Typescript',
  bannerLabelBack: 'Example'
})
const { bannerLabel, tagLabel, bannerLabelBack } = toRefs(props)

</script>

<template>
  <div class="card">
    <div class="card__container">
      <div class="card__front" data-js="card__front">
        <div class="card__container--banner">
          <p>{{ bannerLabel }}</p>
        </div>
        <div class="card__front--tab">
          <p>{{ tagLabel }}</p>
        </div>
        <div class="card__front--main">
          <ContentSlot :use="$slots.contentFront" />
        </div>
      </div>
      <div class="card__back" data-js="back__card">
        <div class="card__container--banner">
          <p>{{ bannerLabelBack }}</p>
        </div>
        <div class="card__back--tab">
          <p>{{ tagLabel }}</p>
        </div>
        <div class="card__back--main">
          <ContentSlot :use="$slots.contentBack" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {

--secondary-color: var(--lt-color-gray-600);
  position: relative;
  overflow: hidden;
  &__container {
    position: relative;
    min-height: 40rem;
    transform-style: preserve-3d;
    transform: perspective(500px) rotateY(0deg);
    transition: all ease-in-out 0.5s;
    &--banner {
      // background: var(--main--strongColor);

      padding: 0.5rem 6rem;
      position: absolute;
      top: 10px;
      right: -5rem;

      transform: rotate(45deg);
    }
  }
  &:hover &__container {
    transform: perspective(500px) rotateY(180deg);
    // transform: rotateY(180deg);
    .card__front {
      opacity: 0;
    }
    .card__back {
      opacity: 1;

    }
  }
  &__front.active {
    z-index: -1;
  }
  &__front,
  &__back {
    position: absolute;
    inset: 0;
    opacity: 1;

    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transition: all 0.5s ease-in-out;
    font-weight: 400;
    box-shadow: 0.5rem 0.5rem var(--main-color);

    border: 2px solid var(--main--strongColor);
    border-top-color: transparent;
    border-radius: 0.5rem;

    // overflow: hidden;

    &--banner {
      background: var(--main--strongColor);

      padding: 0.5rem 6rem;
      position: absolute;
      top: 10px;
      right: -5rem;

      transform: rotate(45deg);
    }
    &--tab {
      background: var(--secondary-color);
      color: var(--color--white);
      padding: 0.5rem 1rem;

      font-weight: 300;
    }
    &--main {
      padding: 2rem 1rem;
      line-height: 1.5;
    }
  }
  &__back {
    transform: perspective(500px) rotateY(180deg);
    z-index: 1;
    transition: all 0.5s ease-in-out;
    opacity:0;
    code {
      display: block;
      background: var(--secondary-color);
      padding: 1rem 0.5rem;
      font-weight: 900;
      font-size: inherit;
      font-style: italic;
    }
    &--main {

      overflow: scroll;
      // padding: unset;
      &___comment {
        color: rgba(#000, 0.6);
      }
    }
  }
  &__back.active,
  &__front {
    opacity: 1;
    z-index: 200;
  }
}
</style>
