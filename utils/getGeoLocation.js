function getGeoApiUrl(value) {
  return `https://geocoding-api.open-meteo.com/v1/search?name=${value}&count=10&language=en&format=json`
}

async function getGeoLocation(value) {
  const geoApiUrl = getGeoApiUrl(value)

  try {
    const response = await fetch(geoApiUrl)

    const data = await response.json()

    return data.results
  } catch (error) {
    console.error(error)
    return error
  }
}

export default getGeoLocation
