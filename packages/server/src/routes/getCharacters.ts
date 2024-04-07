import { fetchAllCharacters } from "../helpers/apiCalls"
import express from 'express'

const app = express()
// Get all people from starwars api
app.get('/api/people', async (req, res) => {
  try {
    const characters = await fetchAllCharacters();
    if (!characters) {
      throw new Error("Received null characters from fetchAllCharacters()");
    }
    res.json(characters);
  } catch (error) {
    console.error("Error in /api/people", error);
    //@ts-ignore
    res.status(500).send(`Error: ${error?.message ?? "<no error message>"}`);
  }
});
