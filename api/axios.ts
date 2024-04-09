import Axios from 'Axios'

const axios = Axios.create({
    baseURL: 'https://fakestoreapi.com'
})

export default axios