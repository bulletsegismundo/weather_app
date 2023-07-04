import handleOnSearch from './utils/handleOnSearch.js'
import renderWeather from './utils/renderWeather.js'

const searchBar = document.getElementById('searchBar')
const resultLists = document.getElementById('resultLists')

searchBar.addEventListener('input', handleOnSearch)
resultLists.addEventListener('click', renderWeather)
