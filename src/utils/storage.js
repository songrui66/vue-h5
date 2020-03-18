export default {
  set (key, value) {
    if (typeof value === 'object') {
      localStorage.setItem(key, JSON.stringify(value))
    } else {
      localStorage.setItem(key, value)
    }
  },
  get (key) {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch (err) {
      return localStorage.getItem(key)
    }
  },
  deleted (key) {
    localStorage.removeItem(key)
  }
}
