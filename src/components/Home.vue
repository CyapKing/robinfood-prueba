<template>
  <vs-col vs-lg="8" vs-sm="12" vs-xs="12">
    <div id="home-container">
      <vs-button id="logout-home" color="dark" type="flat" icon="lock">Salir</vs-button>
      <div>
        <vs-button color="warning" text-color="#000000" type="line">Pizzerías</vs-button>
      </div>
      <div id="header-list-home">
        <span class="title">Tiendas</span>
        <span class="description">Escoge tu pizzería favorita</span>
      </div>
      <div id="store-list-home">
        <StoreCard />
      </div>
      <div id="footer-home">
        <div>
          <vs-button color="#ffffff" type="flat" icon="facebook" size="large"></vs-button>
          <vs-button color="#ffffff" type="flat" icon="pages" size="large"></vs-button>
        </div>
        <img id="footer-logo-home" src="@/images/login/Best Pizza.png" alt="Logo" />
      </div>
    </div>
  </vs-col>
</template>

<script>
import StoreCard from './StoreCard.vue'

export default {
  components: {
    StoreCard
  },
  name: 'Home',
  mounted() {
    console.log('home')
  }
}
</script>

<style lang="scss">
#home-container {
  display: flex;
  flex-direction: column;
  height: 100%;

  #logout-home {
    align-self: flex-end;
  }
  #header-list-home {
    display: flex;
    flex-direction: column;
    margin-top: 3%;
    margin-bottom: 3%;
    .title {
      font-weight: bold;
      font-size: 30px;
      line-height: 50px;
    }
    .description {
      font-size: 15px;
      line-height: 30px;
      color: #707070;
    }
  }
  #store-list-home {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
  }
  #footer-home {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 40px;
    padding-right: 80px;

    background-color: rgb(26, 26, 26);
    height: 80px;

    #footer-logo-home {
      height: 50px;
    }
  }
}
</style>
