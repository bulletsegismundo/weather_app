import extractDataFromText from './extractDataFromText.js'
import getWeather from './getWeather.js'
import hideLists from './hideLists.js'

function createWeatherElement(tag, text) {
  const element = document.createElement(tag)
  element.textContent = text
  return element
}

async function renderWeather(event) {
  const li = event.target.closest('li')
  const weatherResult = document.getElementById('weatherResult')

  if (!li) return

  const { name, admin1, latitude, longitude } = extractDataFromText(li.textContent)
  try {
    const data = await getWeather(latitude, longitude)

    weatherResult.innerHTML = ''

    if (!data) return

    const { humidity, temperature, weather, windspeed } = data

    const weatherFragment = document.createDocumentFragment()

    weatherFragment.appendChild(createWeatherElement('h3', `${name} | ${admin1}`))
    weatherFragment.appendChild(createWeatherElement('h2', `${temperature}°F`))
    weatherFragment.appendChild(createWeatherElement('h4', weather))
    weatherFragment.appendChild(createWeatherElement('p', `Humidity | ${humidity}%`))
    weatherFragment.appendChild(createWeatherElement('p', `Wind | ${windspeed}kph`))

    weatherResult.appendChild(weatherFragment)

    resultLists.innerHTML = ''
    hideLists()
  } catch (error) {
    console.error('Error fetching weather:', error)
  }
}

export default renderWeather
