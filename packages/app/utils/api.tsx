import axios from 'axios'

const dispatcher = axios.create({
  baseURL: 'https://ab-api.plav.io/'
})

export default dispatcher
