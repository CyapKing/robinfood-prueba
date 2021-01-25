<template>
  <li class="store-card-container">
    <div class="container">
      <div class="image-store-card" :style="`background-image:url('${require(`@/assets/home/${store.name}.png`)}')`" />
      <p class="title">{{ store.name }}</p>
      <p class="description">{{ store.address }}</p>
    </div>
    <div class="hover-container"></div>
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
      image: require('@/assets/home/Pizzeria Black Widow.png')
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
</style>
