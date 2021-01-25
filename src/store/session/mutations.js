const mutations = {
  setInfoLogin(state, userInfo) {
    state.userInfo = userInfo
  },
  deleteData(state) {
    state.userInfo = undefined
  }
}

export default mutations
