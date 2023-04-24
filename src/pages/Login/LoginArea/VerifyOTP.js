import React, { useState } from 'react'
import { Alert, Spinner } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { baseUrl } from '../../../utils/axioscall';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function VerifyOTP({setOtpSent,handleClose,setIsUserLoggedIn}) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const verifyOTP = async (phone,otp) => {
    var myHeaders = new Headers();
    myHeaders.append("ApiKey", "40bb9d38c66e40a86678979286f4e2b5");
    myHeaders.append("Device", "Android");
    myHeaders.append("Language", "english");
    // myHeaders.append("DeviceId", "{{asdfwedfgdasfds}}");
    // myHeaders.append("Token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzaWx2YW1ldGhvZC5jb20iLCJhdWQiOiJUaGVfQXVkIiwiaWF0IjoxNjgxNDQ0MzI3LCJuYmYiOjE2ODE0NDQzMzcsImV4cCI6NTM1MjE0NDQzMjcsImRhdGEiOiIxIn0.D-p1cFH0rSYBWN1tGnDG1UUvRejaEdwkcoxgcWAlwmo");

    var formdata = new FormData();
    formdata.append("phone", phone);
    formdata.append("otp", otp);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    setLoading(true)
    const res = await fetch(baseUrl + "verifyOTP", requestOptions);
    setLoading(false)
    const data = await res.json();
    if (data.error === false) {
        handleClose()
        localStorage.removeItem("otpsent")
        localStorage.removeItem("phone")
        localStorage.setItem("token",data.data.token)
        setIsUserLoggedIn(true)
        setOtpSent(false)
        toast.success(data.messages)
        navigate("/")

    } else {
        toast.error(data.messages)
    }
    console.log(data)

}


   const onSubmit = (data)=>{
     const otp = data.phone;
     const phone = localStorage.getItem("phone")

     verifyOTP(phone,otp)
   }
  return (
    <div className='login-area'>
    <div className="basic-login2">
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="phone" className='mb-2'>Verify OTP <span>**</span></label>
            <input {...register("phone", { required: true, maxLength: 5 })} required id="phone" name="phone" type="number"
                placeholder="Enter OTP" />
            {
                errors.phone && (
                    <Alert variant={"danger"}>
                        Invalid OTP !
                    </Alert>
                )
            }
            <button className='btn btn-success'>
                {
                    loading ? (
                        <Spinner animation="border" variant="light" />
                    ) : "Verify OTP"
                }
            </button>
        </form>
    </div>
</div>
  )
}

export default VerifyOTP