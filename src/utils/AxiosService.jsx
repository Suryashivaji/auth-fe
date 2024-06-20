import axios from "axios"


const AxiosService = axios.create({
  baseURL:"http://localhost:8000"
})


AxiosService.interceptors.request.use((config)=>{

  const token = sessionStorage.getItem('token')
  if(config.authenticate && token)
      config.headers.Authorization = `Bearer ${token}`

  return config
},(error)=>{
  return Promise.reject(error);
})



export default AxiosService