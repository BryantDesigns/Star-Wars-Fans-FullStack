import { useState, useEffect } from 'react'

function StarWarsCharacters() {
  const [characters, setCharacters] = useState<any[]>([])

  useEffect(() => {
    fetch('http://localhost:3001/api/people')
      .then((response) => {
        if (!response) {
          console.error('Error fetching data: response is null')
          return null
        }
        return response.json()
      })
      .then((data) => {
        if (!data) {
          console.error('Error fetching data: data is null')
          return
        }
        setCharacters(data.results || [])
      })
      .catch((error) => {
        console.error('Error fetching data: ', error)
      })
  }, [])

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <ul>
        {characters.map((character, index) => {
          if (!character) {
            console.error(`Error rendering character: character is null at index ${index}`)
            return null
          }
          if (!character.name) {
            console.error(`Error rendering character: character name is null at index ${index}`)
            return null
          }
          return (
            <li key={index}>{character.name}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default StarWarsCharacters
