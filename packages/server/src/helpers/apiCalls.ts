import axios from 'axios'
export async function fetchAllCharacters(
  url = 'https://swapi.dev/api/people/',
  characters = []
) {
  try {
    const response = await axios.get(url)
    const data = response.data

    characters = characters.concat(data.results)

    if (data.next) {
      return fetchAllCharacters(data.next, characters)
    }
    return characters
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
