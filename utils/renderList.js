function renderListItem(item) {
  const { name, country_code, admin1, elevation, longitude, latitude } = item
  const flagImageSrc = `https://hatscripts.github.io/circle-flags/flags/${country_code.toLowerCase()}.svg`

  const li = document.createElement('li')
  li.classList.add('result-list-item')

  const img = document.createElement('img')
  img.classList.add('icon-flag')
  img.src = flagImageSrc
  img.width = 25
  img.alt = `${country_code} flag`
  li.appendChild(img)

  const span = document.createElement('span')
  span.textContent = `${name} ${admin1} (${latitude}°E ${longitude}°N ${elevation}m asl)`
  li.appendChild(span)

  return li
}

async function renderList(data) {
  const resultLists = document.getElementById('resultLists')
  const weatherResult = document.getElementById('weatherResult')

  resultLists.innerHTML = ''
  weatherResult.innerHTML = ''

  const fragment = document.createDocumentFragment()
  for (const item of data) {
    const listItem = renderListItem(item)
    fragment.appendChild(listItem)
  }

  resultLists.style.opacity = data.length > 0 ? 1 : 0
  resultLists.appendChild(fragment)
}

export default renderList
