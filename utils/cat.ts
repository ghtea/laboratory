import axios from "axios"

export const THE_CAT_API_KEY = "90348635-a996-4494-8b7e-ef54acbc2841"

export const catAxios = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: {'x-api-key': THE_CAT_API_KEY}
});

export type CatImage = {
  id: string
  url: string
  breeds: any[]
  width: number
  height: number
}