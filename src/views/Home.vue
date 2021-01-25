<template>
  <vs-row id="home">
    <PanelPizza />
    <HomeComponent />
  </vs-row>
</template>

<script>
import HomeComponent from '@/components/Home.vue'
import PanelPizza from '@/components/PanelPizza.vue'

export default {
  name: 'Home',
  components: {
    HomeComponent,
    PanelPizza
  },
  mounted() {
    console.log('mounted')
  }
}
</script>
<style lang="scss">
#home {
  height: 100%;
}
</style>
