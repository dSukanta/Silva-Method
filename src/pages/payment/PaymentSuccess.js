import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function PaymentSuccess() {
  const navigate= useNavigate();
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Payment Successful',
        showConfirmButton: false,
        timer: 1500
      })

      useEffect(()=>{
        setTimeout(()=>{
            navigate("/")
        },2500)
      },[])



  return (
    <div>
        <div className='d-flex w-50 m-auto text-center'>
            <h5 className='mt-20'>Your last payment was successful!</h5>
        <div>

        </div>
        </div>
        
    </div>
  )
}

export default PaymentSuccess