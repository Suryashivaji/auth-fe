import React, { useEffect, useState } from 'react'
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'
import TopBar from './TopBar'
import {useLogout}  from '../hooks/UseLogout'
import {toast} from 'react-toastify'
import { Button } from 'react-bootstrap'

function UserDashboard() {
  
  let[user,setUser]=useState([])
  let logout = useLogout()

  let id = sessionStorage.getItem('id')

 const getData =async()=>{

      try {
        
        let res = await AxiosService.get(`${ApiRoutes.GET_USERS.path}/${id}`,{
          authenticate:ApiRoutes.GET_USERS.authenticate
        })

        if(res.status===200){
          toast.success(res.data.message)
          setUser(res.data.user)

        }
        
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message || error.message) 
        if(error.response.status===402){
          logout()
        }
      }
 }
  useEffect(()=>{
    getData()
  },[])
  return  <div>
  <TopBar/>
  <div className='container-fluid'>

  <div>Name - {user.name}</div>
  <div>Email - {user.email}</div>
  <div>Status - {user.status?"Active":"Inactive"}</div>
  <div>Role - {user.role}</div>

  <Button onClick={getData}>Refresh</Button>
  </div>
</div>

}

export default UserDashboard
