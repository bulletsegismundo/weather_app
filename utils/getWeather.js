import getWeatherDescription from './getWeatherDescription.js'

function getWeatherApiUrl(latitude, longitude) {
  return `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,relativehumidity_2m,weathercode,windspeed_10m&temperature_unit=fahrenheit&forecast_days=1&current_weather=true`
}

async function getWeather(latitude, longitude) {
  const weatherApiUrl = getWeatherApiUrl(latitude, longitude)
  try {
    const result = await fetch(weatherApiUrl)

    const data = await result.json()

    const { temperature, weathercode, time, windspeed } = data.current_weather
    const weather = getWeatherDescription(weathercode)
    const currentTimeIndex = data.hourly.time.indexOf(time)
    const humidity = data.hourly.relativehumidity_2m[currentTimeIndex]

    return { temperature, weather, time, windspeed, humidity }
  } catch (error) {
    console.error(error)
  }
}

export default getWeather
