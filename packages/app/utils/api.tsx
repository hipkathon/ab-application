import axios from 'axios'

const dispatcher = axios.create({
  // baseURL: 'http://localhost:3500/'
  baseURL: 'https://ab-api.plav.io/'
})

export default dispatcher
