import { reactive } from './competit.js'

function loadStore() {
  try {
    return JSON.parse(localStorage.getItem('store'))
  } catch {
    return {}
  }
}

export function saveStore() {
  localStorage.setItem('store', JSON.stringify(store))
}

const store = reactive({
  todos: [],
  ...loadStore(),
})

export default store
