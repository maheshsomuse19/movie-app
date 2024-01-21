import axios from "axios"
const BASE_URL = "https://api.themoviedb.org/3"
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN

const headers = {
  Authorization:
    "bearer " +
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzNiMzlhYTc5OTk0NjdiNTBmYmFlNTU2MmVjZTc3NSIsInN1YiI6IjY1YWMwNTM2ZDEwMGI2MDEwYzgxMGFhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3uSUMEVPlj1SNdnkkctc1xr2MG6y7OLl9qUSe5ceUX8",
}

export const fetchDataFromApi = async (url, params) => {
  try {
    const response = await axios.get(BASE_URL + url, { headers, params })
    return response?.data
  } catch (err) {
    console.log(err)
  }
}
