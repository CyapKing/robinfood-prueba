<template>
  <vs-col vs-lg="8" vs-sm="12" vs-xs="12">
    <div id="home-container">
      <vs-button id="logout-home" color="dark" type="flat" icon="lock" @click="logout">Salir</vs-button>
      <div id="tab-selected">
        <vs-button color="warning" text-color="#000000" type="line">Pizzerías</vs-button>
        <vs-input placeholder="Buscar" v-model="search" />
      </div>
      <div id="header-list-home">
        <span class="title">Tiendas</span>
        <span class="description">Escoge tu pizzería favorita</span>
      </div>
      <ul id="store-list-home">
        <StoreCard v-for="(store, index) in storesFiltered" :key="index" :store="store" />
      </ul>
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
import HomeRequest from '@/api/home'
import StoreCard from './StoreCard.vue'

export default {
  components: {
    StoreCard
  },
  name: 'Home',
  data() {
    return {
      stores: [],
      search: undefined,
      storesFiltered: []
    }
  },
  watch: {
    search(value) {
      if (value) {
        this.storesFiltered = this.stores.filter(store => store.name.toLowerCase().includes(value.toLowerCase()))
      } else {
        this.storesFiltered = this.stores
      }
    }
  },
  mounted() {
    HomeRequest.getStores().then(response => {
      const stores = response.data.response.stores
      if (stores) {
        this.stores = stores
        this.storesFiltered = stores
      }
    })
  },
  methods: {
    logout() {
      this.$store.dispatch('session/logout')
      this.$router.push({ name: 'Login' })
    }
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

  #logout-home,
  #tab-selected,
  #header-list-home {
    margin-right: 50px;
    margin-left: 50px;
  }

  #tab-selected {
    display: flex;
    justify-content: space-between;
  }

  #header-list-home {
    display: flex;
    flex-direction: column;
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
    flex-basis: 0;
    flex-wrap: wrap;
    overflow-y: auto;
    margin-right: 30px;
    margin-left: 30px;
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
