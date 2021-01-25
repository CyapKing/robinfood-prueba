<template>
  <li class="store-card-container" v-on:click="isActiveInfo = true">
    <div class="container">
      <div class="image-store-card" :style="`background-image:url('${require(`@/assets/home/${store.name}.png`)}')`" />
      <span class="title">{{ store.name }}</span>
      <span class="description">{{ store.address }}</span>
    </div>
    <div class="hover-container" />
    <vs-popup v-if="isActiveInfo" title="Pizzería" :active.sync="isActiveInfo">
      <div class="additionalInfo">
        <span class="title">{{ store.name }}</span>
        <span class="normal-text">{{ `Descripción: ${store.description}` }}</span>
        <span class="normal-text">{{ `Dirección: ${store.address}` }}</span>
        <span class="normal-text">{{ `Disfruta de estos platos:` }}</span>
        <vs-images not-border-radius hover="blur">
          <vs-image :key="index" :src="`${require(`@/assets/home/food/${index}.png`)}`" v-for="(image, index) in 7" />
        </vs-images>
      </div>
    </vs-popup>
  </li>
</template>
<script>
export default {
  name: 'StoreCard',
  props: {
    store: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isActiveInfo: false
    }
  },
  methods: {
    getImage() {
      return require(`@/assets/home/${this.store.name}.png`)
    }
  }
}
</script>
<style lang="scss">
.store-card-container {
  list-style: none;
  position: relative;
  width: 250px;
  height: 300px;
  padding: 2%;
  cursor: pointer;

  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    .image-store-card {
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;
      flex: 1;
    }
    .title {
      margin-top: 10px;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-weight: bold;
      line-height: 30px;
      overflow: hidden;
    }
    .description {
      font-size: 11px;
      color: #707070;
    }
  }

  .hover-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: lightgray;
    border-radius: 10px;
    opacity: 0;
  }
  .hover-container:hover {
    opacity: 0.3;
  }
}
.additionalInfo {
  height: 50vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  .title {
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
  }
  .normal-text {
    font-size: 16px;
    color: #707070;
    line-height: 30px;
  }
  .imag-blur {
    opacity: 1;
    filter: inherit;
    border-radius: 0;
  }
}
</style>
