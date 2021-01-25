const actions = {
  setInfoLogin(context, userInfo) {
    delete userInfo.password
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
    context.commit('setInfoLogin', userInfo)
  },
  logout(context) {
    localStorage.removeItem('userInfo')
    context.commit('deleteData')
  }
}

export default actions
