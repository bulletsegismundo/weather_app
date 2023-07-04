import getUserInput from './getUserInput.js'
import getResults from './getResults.js'
import renderList from './renderList.js'

async function handleOnSearch() {
  const value = await getUserInput()
  const data = await getResults(value)
  renderList(data)
}

export default handleOnSearch
