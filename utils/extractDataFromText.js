function extractDataFromText(text) {
  const regex = /^([^ ]+)\s([^()]+)\s\(([^°]+)°E ([^°]+)°N/i
  const match = text.match(regex)

  if (match) {
    const [, name, admin1, latitude, longitude] = match
    return { name, admin1, latitude, longitude }
  }

  return null
}

export default extractDataFromText
