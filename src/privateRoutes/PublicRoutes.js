import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function PublicRoutes() {
   if(localStorage.getItem("token")){
     return <Navigate to="/" />
   }
  return (
    <>
    <Outlet />
    </>
  )
}

export default PublicRoutes