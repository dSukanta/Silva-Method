import React, { useContext, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AllContext'

function PrivateSubscribeRoute() {
    const {userData} = useContext(AuthContext)


   if(!userData || (userData && userData.strip_payment_status!=="paid")){
     return <Navigate to="/" />
   }
  return (
    <>
    <Outlet />
    </>
  )
}

export default PrivateSubscribeRoute