const actions = {
  setInfoLogin(context, userInfo) {
    localStorage.setItem('userInfo', userInfo)
    context.commit('setInfoLogin', userInfo)
  },
  logout(context) {
    localStorage.removeItem('userInfo')
    context.commit('deleteData')
  }
}

export default actions
