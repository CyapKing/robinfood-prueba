<template>
  <vs-row id="login" vs-w="12">
    <PanelPizza />
    <vs-col id="right-container-login" vs-lg="8" vs-sm="12" vs-xs="12">
      <div id="form-login">
        <div id="logo-company-login" />
        <span class="title">Bienvenido</span>
        <span class="description">A las mejores pizzas del país</span>
        <div class="user-input">
          <vs-input placeholder="Usuario" v-model="email" />
          <img id="icon" src="@/images/login/ic_usuario.png" alt="" />
        </div>
        <div class="user-input margin">
          <vs-input type="password" placeholder="Contraseña" v-model="password" />
          <img id="icon" src="@/images/login/ic_password.png" alt="" />
        </div>
        <a id="forgot-password" href="">¿Olvidaste tu contraseña?</a>
        <div class="user-input">
          <vs-button color="warning" type="filled" @click="login">Iniciar Sesión</vs-button>
        </div>
      </div>
    </vs-col>
  </vs-row>
</template>
<script>
import LoginRequest from '@/api/login/index'
import PanelPizza from '@/components/PanelPizza.vue'
export default {
  components: { PanelPizza },
  name: 'Login',
  data() {
    return {
      email: undefined,
      password: undefined
    }
  },
  methods: {
    login() {
      if (this.email && this.password) {
        LoginRequest.login(this.email, this.password)
          .then(response => {
            this.$store.dispatch('session/setInfoLogin', response)
            this.$router.push('Home')
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
}
</script>
<style lang="scss">
#login {
  height: 100%;
  .vs-col {
    height: 100%;
  }

  #right-container-login {
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-height: 600px) {
      #form-login {
        margin: 5%;
      }
    }
    @media screen and (min-height: 601px) {
      #form-login {
        margin: 10%;
      }
    }
    #form-login {
      display: flex;
      flex-direction: column;
      align-items: center;

      @media screen and (max-height: 600px) {
        #logo-company-login {
          height: 100px;
          margin-bottom: 0;
        }
        .title {
          font-size: 30px;
          line-height: 50px;
        }
        .description {
          font-size: 15px;
          line-height: 30px;
        }
      }
      @media screen and (min-height: 601px) {
        #logo-company-login {
          height: 25vh;
          margin-bottom: 2%;
        }
        .title {
          font-size: 5vh;
          line-height: 10vh;
        }
        .description {
          font-size: 3vh;
        }
      }

      #logo-company-login {
        width: 60%;
        background-image: url('../images/login/Login-Best-Pizza.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
      }

      img {
        width: auto;
        height: auto;
      }
      .title {
        font-weight: bold;
      }
      .description {
        letter-spacing: 1px;
        color: #707070;
        margin-bottom: 12%;
      }

      .user-input {
        position: relative;

        .vs-input {
          width: 500px;
          .vs-con-input {
            .vs-input--input {
              border-color: #cecece;
            }

            span,
            input {
              padding-left: 15px;
              padding-right: 60px;
              font-size: 18px;
            }

            @media screen and (max-height: 600px) {
              input {
                height: 40px;
              }
              span {
                top: 5px;
              }
            }
            @media screen and (min-height: 601px) {
              input {
                height: 80px;
              }
              span {
                top: 30%;
              }
            }
            span {
              letter-spacing: 0.3px;
            }
          }
        }
        @media screen and (max-height: 600px) {
          button {
            height: 40px;
            font-size: 14px;
          }
        }
        @media screen and (min-height: 601px) {
          button {
            height: 80px;
            font-size: 2vh;
          }
        }
        button {
          width: 500px;
          font-weight: bold;
          color: black;
        }

        @media screen and (max-height: 600px) {
          img {
            position: absolute;
            right: 25px;
            top: 5px;
            width: 30px;
            height: 30px;
          }
        }
        @media screen and (min-height: 601px) {
          img {
            position: absolute;
            right: 25px;
            top: 21%;
          }
        }
      }
      .user-input.margin {
        margin-top: 15px;
      }

      @media screen and (max-height: 600px) {
        #forgot-password {
          font-size: 14px;
        }
      }
      @media screen and (min-height: 601px) {
        #forgot-password {
          font-size: 2vh;
        }
      }

      #forgot-password {
        font-weight: bold;
        letter-spacing: 1px;
        color: black;
        margin-top: 10%;
        margin-bottom: 10%;
      }
    }
  }
}
</style>
