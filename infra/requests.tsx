import axios from 'axios'
import * as urls from './urls'

export const getFlights = async (url = null) => {
    const urlToSend = url ? url : urls.FLIGHTS_URL
    const response = await axios.get(urlToSend)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return response.data
}

export const login = async (username: string, password: string) => {
    const response = await axios.post(urls.LOGIN_URL, {username, password})
    return response.data
}

const getAuthHeader = () => {
    const token = localStorage.getItem('token')
    return {Authorization: `Bearer ${token}`}
}

export const getUserData = async () => {

    const response = await axios.get(urls.USER_DATA_URL, {
        headers: getAuthHeader()
    })
    return response
}

export const flightsFetcher = async () => await axios.get(urls.FLIGHTS_URL)

export const getFlightDetials = async (flightId: number) => {
    console.log('inside getFlightDetials', flightId)
    return await axios.get(`${urls.FLIGHTS_URL}/${flightId}`)
}