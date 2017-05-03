import axios from 'axios'
import auth from 'react-jwt-auth-redux'
import apiConfig from '../../config/auth.config'

console.log(apiConfig)

export const requestAuthInstance = axios.create({
  baseURL: apiConfig.auth_api_url,
  headers: {
    common: {
      'Authorization': auth.getAuthHeader()["Authorization"]
    }
  }
});

export const requestInstance = axios.create({
  baseURL: apiConfig.api_url
})
