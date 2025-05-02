import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_HOST
})

api.interceptors.request.use((config) => {
  const store = JSON.parse(sessionStorage.getItem("auth-store") as string)
  
  const token = store?.state?.token

  if (!token) {
    return config
  }

  config.headers.Authorization = `Bearer ${token}`
  return config
}, (error) => Promise.reject(error));

export default api