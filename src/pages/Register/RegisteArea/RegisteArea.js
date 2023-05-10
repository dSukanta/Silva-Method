import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
// import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { Alert, Spinner } from 'react-bootstrap';
import { axiosinstance, baseUrl } from '../../../utils/axioscall';
import { AuthContext } from '../../../context/AllContext';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { toast } from 'react-hot-toast';
import OtpModal from '../../../components/OtpModal/OtpModal';
import SendOTP from '../../Login/LoginArea/SendOTP';
import VerifyOTP from '../../Login/LoginArea/VerifyOTP';

const RegisteArea = ({RegPageState}) => {
   //console.log(RegPageState,"subscribeId");

   const [otpsent, setOtpSent] = useState(() => {
      if (localStorage.getItem("otpsent")) {
         return true
      } else {
         return false;
      }
   });
   const [loading,setLoading] = useState(false)
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const navigate = useNavigate()
   // const { registerUser, googleSignIn } = useAuth();
   const [showPass, setShowPass] = useState(false);
   const [showConfirmPass, setShowConfirmPass] = useState(false);

   const {setIsUserLoggedIn} = useContext(AuthContext)

   const { register, handleSubmit, formState: { errors }, reset } = useForm();
   const onSubmit = async(data) => {
      // console.log(data)

      if(data.password !==data.confirmpass){
         Swal.fire({
            icon: 'error',
            text: 'Passwords do not match',
         })
         return
      }else{
         registerFetch(data.firstname,data.lastname,data.email,data.phone,data.password,data.confirmpass)
         // console.log(res)
      }
   };

  

   const registerFetch = async(firstname,lastname,email,phone,password,confirmpass) => {
      var myHeaders = new Headers();
      myHeaders.append("ApiKey", "40bb9d38c66e40a86678979286f4e2b5");
      myHeaders.append("Device", "Android");
      myHeaders.append("Language", "english");
      myHeaders.append("DeviceId", "{{asdfwedfgdasfds}}");
      // myHeaders.append("Token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzaWx2YW1ldGhvZC5jb20iLCJhdWQiOiJUaGVfQXVkIiwiaWF0IjoxNjgxNDQ0MzI3LCJuYmYiOjE2ODE0NDQzMzcsImV4cCI6NTM1MjE0NDQzMjcsImRhdGEiOiIxIn0.D-p1cFH0rSYBWN1tGnDG1UUvRejaEdwkcoxgcWAlwmo");

      var formdata = new FormData();
      formdata.append("email", email);
      formdata.append("first_name",firstname)
      formdata.append("last_name",lastname)
      formdata.append("phone",phone)
      formdata.append("confirm_password",confirmpass)
      formdata.append("password",password);

      var requestOptions = {
         method: 'POST',
         headers: myHeaders,
         body: formdata,
         redirect: 'follow'
      };

      setLoading(true)
      const res = await fetch("https://projectsites.in/silvamethod/api/register", requestOptions);
      setLoading(false)
      const data = await res.json();

      if(data.error===false){
         toast.success(data.data)
         if(RegPageState){
            //navigate("/login",{state:{planId:RegPageState}})
            
         }else{
            navigate("/login")
         }
      }else{
         toast.error(data.messages)
      }
      console.log(data)
         
   }


   const fetchSocialLogin = async(email,firstname,lastname,image)=>{
      var myHeaders = new Headers();
      myHeaders.append("ApiKey", "40bb9d38c66e40a86678979286f4e2b5");
      myHeaders.append("Device", "Android");
      myHeaders.append("Language", "english");
      myHeaders.append("DeviceId", "{{asdfwedfgdasfds}}");
      // myHeaders.append("Token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzaWx2YW1ldGhvZC5jb20iLCJhdWQiOiJUaGVfQXVkIiwiaWF0IjoxNjgxNDQ0MzI3LCJuYmYiOjE2ODE0NDQzMzcsImV4cCI6NTM1MjE0NDQzMjcsImRhdGEiOiIxIn0.D-p1cFH0rSYBWN1tGnDG1UUvRejaEdwkcoxgcWAlwmo");
  
      var formdata = new FormData();
      formdata.append("email", email);
      formdata.append("first_name",firstname)
      formdata.append("last_name",lastname)
      formdata.append("profile_image",image)
  
  
      var requestOptions = {
         method: 'POST',
         headers: myHeaders,
         body: formdata,
         redirect: 'follow'
      };
  
      const res = await fetch(baseUrl+"loginWithSocial", requestOptions);
      const data = await res.json();
      if(data.error===false){
         localStorage.setItem("token",data.data.token)
         localStorage.setItem("google_login",true)
         setIsUserLoggedIn(true)
         toast.success(data.messages)
         navigate("/")
      }else{
         toast.error(data.messages)
      }
      console.log(data)
  }

   return (
      <>
         <section className="login-area pt-120 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                     <div className="basic-login">
                        <h3 className="text-center mb-60">Signup From Here</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                           <label htmlFor="firstname" className='mb-2' >First Name <span>**</span></label>
                           <input {...register("firstname", { required: true, minLength: 2 })} required id="firstname" type="text" placeholder="Enter First name..." />

                           {
                              errors.firstname && (
                                 <Alert variant={"danger"}>
                                    Please enter a valid first name
                                 </Alert>
                              )
                           }

                           <label htmlFor="lastname" className='mb-2' >Last Name <span>**</span></label>
                           <input {...register("lastname", { required: true, minLength: 2 })} required id="lastname" type="text" placeholder="Enter Last name..." />

                           {
                              errors.lastname && (
                                 <Alert variant={"danger"}>
                                    Please enter a valid last name
                                 </Alert>
                              )
                           }



                           <label htmlFor="email-id" className='mb-2'>Email Address <span>**</span></label>
                           <input {...register("email",{ required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g })} required id="email-id" name="email" type="text"
                              placeholder="Enter Username or Email address..." />

                           {
                              errors.email && (
                                 <Alert variant={"danger"}>
                                    Invalid Email ! Please enter a valid email address
                                 </Alert>
                              )
                           }

                           {/* phone number */}

                           <label htmlFor="phone" className='mb-2'>Phone Number <span>**</span></label>
                           <input {...register("phone", { required: true, pattern: /^\d*[.]?\d*$/,maxLength:13 })} required id="phone" name="phone" type="text"
                              placeholder="Enter Phone number" />

                           {
                              errors.phone && (
                                 <Alert variant={"danger"}>
                                    Invalid Phone number !
                                 </Alert>
                              )
                           }




                           {/* paassword */}


                           <label htmlFor="pass" className='mb-2'>Password <span>**</span></label>
                           <div style={{ position: "relative" }}>

                           <input {...register("password", { required: true, minLength: 3 })} required id="pass" name="password"
                              type={showPass ? "text" : "password"}
                              placeholder="Enter password..." />

                           {
                              !showPass && (
                                 <AiFillEye size={30} style={{ position: "absolute", right: "10px", top: "12px" }} onClick={() => {
                                    setShowPass(!showPass)
                                 }} />
                              )
                           }
                           {
                              showPass && (
                                 <AiFillEyeInvisible size={30} style={{ position: "absolute", right: "10px", top: "12px" }} onClick={() => {
                                    setShowPass(!showPass)
                                 }} />
                              )

                           }
                           </div>



                           {
                              errors.password && (
                                 <Alert variant={"danger"}>
                                    Invalid Password ! Please enter a valid email address
                                 </Alert>
                              )
                           }


                           {/* confirm pass */}




                           <label htmlFor="confirmpass" className='mb-2'>Confirm Password <span>**</span></label>
                           <div style={{ position: "relative" }}>

                           <input {...register("confirmpass", { required: true, minLength: 3 })} required id="confirmpass" name="confirmpass"
                              type={showConfirmPass ? "text" : "password"}
                              placeholder="Confirm password..." />

                           {
                              !showConfirmPass && (
                                 <AiFillEye size={30} style={{ position: "absolute", right: "10px", top: "12px" }} onClick={() => {
                                    setShowConfirmPass(!showConfirmPass)
                                 }} />
                              )
                           }
                           {
                              showConfirmPass && (
                                 <AiFillEyeInvisible size={30} style={{ position: "absolute", right: "10px", top: "12px" }} onClick={() => {
                                    setShowConfirmPass(!showConfirmPass)
                                 }} />
                              )

                           }
                           </div>


                           {
                              errors.confirmpass && (
                                 <Alert variant={"danger"}>
                                    Invalid Password ! Please enter a valid email address
                                 </Alert>
                              )
                           }


                           <div className="mt-10"></div>
                           <button type='submit' className="primary_btn theme-btn-2 w-100">
                           {
                                 loading ? (
                                    <Spinner animation="border" variant="light" />
                                 ):"Register Now"
                              }
                           </button>
                           <div className="or-divide"><span>or</span></div>
                           <Link to="/login"><button className="primary_btn btn-icon-green w-100">login Now</button></Link>
                        </form>
                        <div className="or-divide or-login"><span>or login with </span>
                        <div className='d-flex justify-content-center mb-4 mt-4'>
                         <GoogleLogin
                          theme='filled_black'
                          onSuccess={credentialResponse => {
                             console.log(credentialResponse);
                             const res = jwt_decode(credentialResponse.credential)
                             fetchSocialLogin(res.email,res.given_name,res.family_name,res.picture)
                          }}
                          onError={() => {
                             toast.error("Login with google failed")
                          }}
                       />
                         </div>
                       <button className="primary_btn2 theme-btn" onClick={handleShow}>
                         Login with OTP
                       </button>
                        </div>
                        
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <OtpModal show={show} setShow={setShow} handleClose={handleClose}>
            {
               !otpsent ? (
                  <SendOTP setOtpSent={setOtpSent} />
               ) : (
                  <VerifyOTP setOtpSent={setOtpSent} handleClose={handleClose} setIsUserLoggedIn={setIsUserLoggedIn} />
               )
            }
         </OtpModal>
      </>
   );
};

export default RegisteArea;