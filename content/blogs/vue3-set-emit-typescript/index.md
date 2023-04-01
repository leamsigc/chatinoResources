---
layout: 'default'
title: 'vue3 how to set a emit defined?'
description: ' vue3 how to set a emit defined?, composition api how to set a emit defined?, typescript vue3  set a emit defined?'
draft: false
navigation: false
readTime: '3 MIN'
tag: vuejs
author: 'WRITTEN BY Ismael Garcia'
publishedAt: '15-06-2022'


image:  
    src: '/image.png'  
    alt: 'vue3 how to set a emit defined? '  
    width: 400  
    height: 300

head:
    htmlAttrs:
        lang: 'en'
    bodyAttrs:
        class: ''
    meta:
        - name: 'description' 
          content: 'Giessen  and Wetzlar developer meetup group,vue3 how to set a emit defined?'
        - name: 'keywords' 
          content: 'Giessen  and Wetzlar developer meetup group,vue3 how to set a emit defined?'
        - name: 'robots'
          content: 'index, follow'    
        - name: 'author'      
          content: 'Leamsigc'

---

::blogHero
---
imageUrl: '/image.png'
imageAlt: 'How to set up and emit event with typescript and the new vue3 composition api'

---

#title
How to set up and emit event with typescript and the new vue3 composition api

#descriptionSmall
In this simple tutorial or less than a tutorial i will explain you how to strongly type your emit event with the ner composition api from vue3

#username
Ismael Garcia

#date
Wed,27,Jul


#description
Question how to set an emit defined?,3. Vue3 composition api how to set an  emit event  defined in setup script?

::

<div class='grid grid-cols-1 mt-4'>

::CardExamples
---
tagLabel: "Vuejs"
---


#contentFront
## Set props interface vue3
While working with vue-3 and typescript we always need to define the props types,like if we have  card and that card component need a couple of porps right like title, sub-title, content
```ts
interface propsInterface {
  bannerLabel: string
  bannerLabelBack: string
  tagLabel: string
}
```

#contentBack
### Here is small an  example

```ts
<script lang="ts" setup>
interface propsInterface {
  bannerLabel: string
  bannerLabelBack: string
  tagLabel: string
}

const props = withDefaults(defineProps<propsInterface>(), {
  bannerLabel: 'Explainer',
  tagLabel: 'Typescript',
  bannerLabelBack: 'Example',
})
const { bannerLabel, tagLabel, bannerLabelBack } = props
</script>

```
::
</div>




<p text-lg font-bold mb-4> Question how to set an emit defined?</p>


> How to declare a emit event in typescript and vue3
> While developing a feature in one of the project that we were working on here at Reflect-media


1. vue3 how to set an emit event  defined?
2. typescript vue3  set a emit defined?
3. Vue3 composition api how to set an  emit event  defined in setup script?

---



```ts
const $emit = defineEmits<{ (e: 'close-edit-form'): void }>()

```


---

```tsx
export default () => {
  console.log('Code block')
}
```
