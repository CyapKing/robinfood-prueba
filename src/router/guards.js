import store from '../store'

export function requiresAuth(to, from, next) {
  console.log(store.getters['session/userInfo'])
  if (store.getters['session/userInfo']) {
    return next()
  } else {
    return next({ name: 'Login' })
  }
}

export function requiresAnonymous(to, from, next) {
  if (!store.getters['session/userInfo']) {
    return next()
  } else {
    return next({ name: 'Home' })
  }
}
