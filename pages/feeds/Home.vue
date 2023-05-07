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

definePageMeta({
  auth: true,
  layout: 'feeds-layout'
})

const modalState = ref(false)
const model = ref({
  language: null,
  example: null,
  label: null,
  chatino: null,
  english: null,
  spanish: null,
  rate: null,
  audioUrl: null,
  videoUrl: null,
  imageUrl: null

})

const langOptions = ['Chatino San Juan ', 'Chatino Panixtlahuaca', 'Chatino Others'].map(
  v => ({
    label: v,
    value: v
  })
)
const HandleCreateTranslation = () => {
  console.log('model', model.value)
  modalState.value = false
}
</script>

<template>
  <div class="container mx-auto relative">
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 v-if="user" class="text-3xl md:text-4xl font-bold mb-10 md:mb-0">
            <span>
              {{ user.username }}
            </span> <br> Welcome  to chatino resources
          </h1>
          <p class="md:py-6 mb-5 md:mb-0">
            This is a chatino resources for the chatino people. We are really happy to have you here.
          </p>
          <button class="btn btn-primary px-10" @click="modalState = !modalState">
            Create your first translation card
          </button>
        </div>
      </div>
    </div>
    <section class="py-10 grid  grid-cols-1 md:grid-cols-4 gap-10">
      <div v-for="item in 12" :key="item" class="card w-full bg-base-100 shadow-xl">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes"></figure>
        <div class="card-body">
          <span class="text-11px">Chatino:</span>
          <h2 class="card-title">
            <span class="">Ska skia</span>
            <div class="badge badge-secondary text-11px">
              NEW
            </div>
          </h2>
          <div class="flex flex-col">
            <span class="text-11px">Explication:</span>
            <span>If a dog chews shoes whose shoes does he choose?</span>
          </div>
          <div class="card-actions justify-end">
            <n-badge :value="10" :max="15">
              <n-button tertiary circle type="success">
                <template #icon>
                  <MainIcons type="like" />
                </template>
              </n-button>
            </n-badge>
            <n-badge :value="1" :max="15">
              <n-button tertiary circle type="success">
                <template #icon>
                  <MainIcons type="dislike" />
                </template>
              </n-button>
            </n-badge>
            <n-badge :value="100" :max="15">
              <n-button tertiary circle type="success">
                <template #icon>
                  <MainIcons type="comment" />
                </template>
              </n-button>
            </n-badge>
          </div>
        </div>
      </div>
    </section>
    <!-- Create translation modal -->
    <n-modal
      v-model:show="modalState"
      :trap-focus="false"
    >
      <main class="p-10 bg-light max-w-6xl rounded-lg">
        <h3 class="text-2xl">
          Create new translation
        </h3>
        <div class="my-10 grid grid-cols-2 gap-3">
          <n-form
            :model="model"
            label-placement="left"
            require-mark-placement="right-hanging"
            label-width="auto"
            :style="{
              maxWidth: '640px'
            }"
          >
            <n-form-item label="Language">
              <n-select
                v-model:value="model.language"
                placeholder="Select a language"
                :options="langOptions"
              />
            </n-form-item>
            <n-form-item label="Translation in chatino">
              <n-input
                v-model:value="model.chatino"
                placeholder="Translation in chatino go here..."
                type="textarea"
                :autosize="{
                  minRows: 3,
                  maxRows: 5
                }"
              />
            </n-form-item>
            <n-form-item label="Label">
              <n-input
                v-model:value="model.label"
                placeholder="Label ..."
                type="textarea"
              />
            </n-form-item>
            <n-form-item label="Translation in Spanish">
              <n-input
                v-model:value="model.spanish"
                placeholder="Translation in Spanish go here..."
                type="textarea"
                :autosize="{
                  minRows: 3,
                  maxRows: 5
                }"
              />
            </n-form-item>
            <n-form-item label="Translation in English">
              <n-input
                v-model:value="model.english"
                placeholder="Translation in English go here..."
                type="textarea"
                :autosize="{
                  minRows: 3,
                  maxRows: 5
                }"
              />
            </n-form-item>
            <n-form-item label="Example in chatino">
              <n-input
                v-model:value="model.example"
                placeholder="Example in chatino go here..."
                type="textarea"
                :autosize="{
                  minRows: 3,
                  maxRows: 5
                }"
              />
            </n-form-item>
            <n-form-item label="Rate your translation 1-100">
              <n-slider v-model:value="model.rate" :step="10" />
            </n-form-item>
            <div>
              <!-- <p class="py-5">
                Image
              </p> -->
              <n-form-item label="Image Url">
                <n-input
                  v-model:value="model.imageUrl"
                  placeholder="Image url"
                  type="text"
                />
              </n-form-item>
              <n-form-item label="Audio Url">
                <n-input
                  v-model:value="model.audioUrl"
                  placeholder="Image url"
                  type="text"
                />
              </n-form-item>
              <n-form-item label="Video Url">
                <n-input
                  v-model:value="model.videoUrl"
                  placeholder="Image url"
                  type="text"
                />
              </n-form-item>
            </div>
            <div style="display: flex; justify-content: flex-end">
              <n-button round type="primary" @click="HandleCreateTranslation">
                Create
              </n-button>
            </div>
          </n-form>
          <div class="p-10  bg-emerald bg-opacity-20 rounded-xl">
            <h3 class="text-2xl mb-5">
              Preview
            </h3>
            <div class="card w-full bg-base-100 shadow-xl">
              <figure>
                <img :src="model.imageUrl ? model.imageUrl :'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'" alt="Chatino">
              </figure>
              <div class="card-actions">
                <n-button-group>
                  <n-button type="success">
                    Image
                  </n-button>
                  <n-button ghost>
                    Video
                  </n-button>
                  <n-button ghost>
                    Audio
                  </n-button>
                </n-button-group>
              </div>
              <div class="card-body">
                <span class="text-11px">Chatino: {{ model.language }}</span>
                <h2 class="card-title">
                  <span class="">{{ model.chatino }}</span>
                  <div class="badge badge-secondary text-11px">
                    {{ model.rate }}
                  </div>
                </h2>
                <div class="flex flex-col">
                  <span class="text-11px">Example:</span>
                  <span>{{ model.example }}</span>
                </div>
                <div class="flex flex-col">
                  <span class="text-11px">Spanish:</span>
                  <span>{{ model.spanish }}</span>
                </div>
                <div class="flex flex-col">
                  <span class="text-11px">English:</span>
                  <span>{{ model.english }}</span>
                </div>
                <div class="card-actions justify-end">
                  <n-badge :value="0" :max="15">
                    <n-button tertiary circle type="success">
                      <template #icon>
                        <MainIcons type="like" />
                      </template>
                    </n-button>
                  </n-badge>
                  <n-badge :value="0" :max="15">
                    <n-button tertiary circle type="success">
                      <template #icon>
                        <MainIcons type="dislike" />
                      </template>
                    </n-button>
                  </n-badge>
                  <n-badge :value="0" :max="15">
                    <n-button tertiary circle type="success">
                      <template #icon>
                        <MainIcons type="comment" />
                      </template>
                    </n-button>
                  </n-badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </n-modal>
  </div>
</template>
<style scoped>

</style>
