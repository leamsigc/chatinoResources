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
import { ThumbsUp, ChatBot, ThumbsDown } from '@vicons/carbon'
import { NIcon } from 'naive-ui'
const icons = {
  like: ThumbsUp,
  dislike: ThumbsDown,
  comment: ChatBot
}

type IconTypes = keyof typeof icons;

const props = defineProps({
  ...NIcon.props,
  type: {
    type: String,
    default: 'fallback'
  }
})

const icon = icons[props.type as IconTypes]
</script>

<template>
  <n-icon v-bind="props">
    <icon />
  </n-icon>
</template>
<style scoped></style>
