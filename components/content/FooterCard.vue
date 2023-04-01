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
</script>

<template>
  <div class="card prose text-center mb-5">
    <h2 class="subtitle mt-unset">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h2>
    <p class="card-content">
      <ContentSlot :use="$slots.content" unwrap="p" />
    </p>
    <div class="container-btn text-center">
      <SlackButton />
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  padding: 1rem;
  border-radius: 0.5rem;
  max-width: 600px;
  width: 100%;

  top: -8rem;
  z-index: 100;
  background: var(--secondary-color);
  box-shadow: 0px 1px 1px rgba(10, 10, 10, 0.1);
  transition: all 0.3s ease-in-out;
}
.container-btn {
  margin-top: 2rem;
  --secondary-color: var(--main-color);
  --main-color: var(--secondary-color);
}
.card:hover {
  box-shadow: 0px 5px 40px rgba(10, 10, 10, 0.1);
  transform: translateY(-0.3rem) scale(1.01);
}
strong {
    font-weight: 500;
  }
</style>
