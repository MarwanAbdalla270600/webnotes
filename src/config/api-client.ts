import axios from 'axios'

const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    params: {
        key: import.meta.env.VITE_SECRET_KEY
    }
})

export default client