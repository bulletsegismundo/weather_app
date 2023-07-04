import getGeoLocation from './getGeoLocation.js'
import hideLists from './hideLists.js'

function roundOff(number) {
  return parseFloat(number.toFixed(2))
}

async function getResults(value) {
  const locations = await getGeoLocation(value)

  if (!locations) hideLists()

  return locations.map(data => {
    const { name, country_code, admin1, elevation } = data
    const latitude = roundOff(data.latitude)
    const longitude = roundOff(data.longitude)

    return { name, country_code, admin1, elevation, latitude, longitude }
  })
}

export default getResults
