import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://burger-builder-de827.firebaseio.com/',
})

export default instance
