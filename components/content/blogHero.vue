<script lang="ts" setup>
/**
 *
 * Component Description:Blog hero
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */

interface PropsInterface {
  imageUrl: ''
  imageAlt: ''
}
const props = defineProps<PropsInterface>()
const { imageUrl, imageAlt } = toRefs(props)
</script>

<template>
  <div grid text-center>
    <h1 class="max-w-lg mx-auto">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h1>
    <div class="blog-description-small py-4 max-w-lg mx-auto">
      <ContentSlot :use="$slots.descriptionSmall" unwrap="p" />
    </div>
    <div class="blog-author grid  grid-cols-2 my-4">
      <div class="profile-image bg-blue-900 w-16 h-16  rounded-full ml-auto" />
      <div class="profile-details text-left pl-4 pt-2">
        <div class="username">
          <ContentSlot :use="$slots.username" unwrap="p" />
        </div>
        <div class="date">
          <ContentSlot :use="$slots.date" unwrap="p" />
        </div>
      </div>
    </div>
    <div class="blog-image w-full h-[500px]">
      <img
        class="object-cover w-full shadow-sm h-full rounded"
        :src="imageUrl"
        :alt="imageAlt"
      >
    </div>
    <div class="blog-description text-left py-4">
      <ContentSlot :use="$slots.description" unwrap="p" />
    </div>
    <div class="line w-full h-[.5px] bg-gray-500 rounded" />
  </div>
</template>

<style scoped>

</style>
