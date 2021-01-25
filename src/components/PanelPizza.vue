<template>
  <vs-col id="left-container-login" vs-lg="4" vs-sm="0" vs-xs="0">
    <img id="icon" src="@/images/login/pizza.png" alt="" />
  </vs-col>
</template>
<script>
export default {
  name: 'PanelPizza'
}
</script>
<style lang="scss">
#left-container-login {
  display: flex;
  align-items: center;
  background-image: url('../images/login/imagebkg.png');
  background-repeat: no-repeat;
  background-size: cover;
  #icon {
    width: 100%;
  }
}
</style>
