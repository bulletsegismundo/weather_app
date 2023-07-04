import hideLists from './hideLists.js'

let debounceTimer

function debounce(func, delay) {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(func, delay)
}

function getUserInput() {
  return new Promise(resolve => {
    debounce(() => {
      const { value } = searchBar
      const lettersOnly = value.match(/[a-zA-Z]/g)

      if (lettersOnly && lettersOnly.length >= 2) {
        resolve(lettersOnly.join(''))
      } else {
        hideLists()
      }
    }, 500)
  })
}

export default getUserInput
