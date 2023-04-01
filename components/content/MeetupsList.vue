<script lang="ts">
import Meetups from './Meetup.vue'
export default {
  name: 'MeetupList',
  components: {
    Meetups,
  },
  data() {
    return {
      allMeetups: [
        {
          title: 'Vuejs for php devs',
          date: '09/08/2020',
          imgUrl: '/javascriptImage.png',
        },
        {
          title: 'Vuejs vs Reactjs',
          date: '01/08/2020',
          imgUrl: '/vuejsvsreact.png',
        },
        {
          title: 'Job search',
          date: '03/08/2020',
          imgUrl: '/jobSearch.png',
        },
        {
          title: 'Docker game changer',
          date: '04/08/2020',
          imgUrl: '/docker.png',
        },
        {
          title: 'Kubernetes the new way',
          date: '05/08/2020',
          imgUrl: '/kubernetes.png',
        },
      ],
    }
  },
}
</script>

<template>
  <main class="main">
    <h2 class="title">
      <slot name="title" />
    </h2>
    <section class="container">
      <div class="meetup--container">
        <Meetups
          v-for="meetups in allMeetups"
          :key="meetups.title"
          :item="meetups"
        />
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
.main {
  padding: 2rem;
  background: #fff;
}
.meetup--container {
  margin-top: 4rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, minmax(150px, 200px));
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, minmax(150px, 200px));
  }
}
</style>
