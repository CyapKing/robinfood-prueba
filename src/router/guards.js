import store from '../store'

export function requiresAuth(to, from, next) {
  if (store.getters['session/getToken']) {
    return next()
  } else {
    return next({ name: 'Login' })
  }
}

export function requiresAnonymous(to, from, next) {
  if (!store.getters['session/getToken']) {
    return next()
  } else {
    return next({ name: 'Home' })
  }
}
