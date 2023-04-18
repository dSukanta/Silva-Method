import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";
import { Alert, Button, Spinner } from 'react-bootstrap';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { axiosinstance, baseUrl } from '../../../utils/axioscall';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../context/AllContext';
import OtpModal from '../../../components/OtpModal/OtpModal';
import SendOTP from './SendOTP';
import VerifyOTP from './VerifyOTP';
import FacebookLogin from '@greatsumini/react-facebook-login';


const LoginArea = () => {

   const [otpsent, setOtpSent] = useState(() => {
      if (localStorage.getItem("otpsent")) {
         return true
      } else {
         return false;
      }
   });
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate()
   // const { loginUser, passwordResetWithEmail, googleSignIn } = useAuth();
   const [showPass, setShowPass] = useState(false);
   const { isUserLoggedIn, setIsUserLoggedIn, userData } = useContext(AuthContext)

   const { register, handleSubmit, formState: { errors } } = useForm();
   const onSubmit = async (data) => {
      // console.log(data)

      console.log(data)
      // console.log(errors)
      // const res = await axiosinstance.post("login", {
      //    email: data.email,
      //    password: data.password
      // })

      loginfetch(data.email, data.password)



      // loginUser(email, password,reset)
   };

   const loginfetch = async (email, password) => {
      var myHeaders = new Headers();
      myHeaders.append("ApiKey", "40bb9d38c66e40a86678979286f4e2b5");
      myHeaders.append("Device", "Android");
      myHeaders.append("Language", "english");
      myHeaders.append("DeviceId", "{{asdfwedfgdasfds}}");
      // myHeaders.append("Token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzaWx2YW1ldGhvZC5jb20iLCJhdWQiOiJUaGVfQXVkIiwiaWF0IjoxNjgxNDQ0MzI3LCJuYmYiOjE2ODE0NDQzMzcsImV4cCI6NTM1MjE0NDQzMjcsImRhdGEiOiIxIn0.D-p1cFH0rSYBWN1tGnDG1UUvRejaEdwkcoxgcWAlwmo");

      var formdata = new FormData();
      formdata.append("email", email);
      formdata.append("password", password);

      var requestOptions = {
         method: 'POST',
         headers: myHeaders,
         body: formdata,
         redirect: 'follow'
      };

      setLoading(true)
      const res = await fetch("https://projectsites.in/silvamethod/api/login", requestOptions);
      setLoading(false)
      const data = await res.json();
      if (data.error === false) {
         localStorage.setItem("token", data.data.token)
         setIsUserLoggedIn(true)
         toast.success(data.messages)
         navigate("/")
      } else {
         toast.error(data.messages)
      }
      console.log(data)

   }

   const fetchSocialLogin = async (email, firstname, lastname, image) => {
      var myHeaders = new Headers();
      myHeaders.append("ApiKey", "40bb9d38c66e40a86678979286f4e2b5");
      myHeaders.append("Device", "Android");
      myHeaders.append("Language", "english");
      myHeaders.append("DeviceId", "{{asdfwedfgdasfds}}");
      // myHeaders.append("Token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzaWx2YW1ldGhvZC5jb20iLCJhdWQiOiJUaGVfQXVkIiwiaWF0IjoxNjgxNDQ0MzI3LCJuYmYiOjE2ODE0NDQzMzcsImV4cCI6NTM1MjE0NDQzMjcsImRhdGEiOiIxIn0.D-p1cFH0rSYBWN1tGnDG1UUvRejaEdwkcoxgcWAlwmo");

      var formdata = new FormData();
      formdata.append("email", email);
      formdata.append("first_name", firstname)
      formdata.append("last_name", lastname)
      formdata.append("profile_image", image)


      var requestOptions = {
         method: 'POST',
         headers: myHeaders,
         body: formdata,
         redirect: 'follow'
      };

      const res = await fetch(baseUrl + "loginWithSocial", requestOptions);
      const data = await res.json();
      if (data && data.error === false) {
         localStorage.setItem("token", data.data.token)
         localStorage.setItem("google_login", true)
         setIsUserLoggedIn(true)
         toast.success(data.messages)
         navigate("/")
      } else {
         toast.error(data.messages)
      }
      console.log(data)
   }

   const responseFacebook = (response) => {
      console.log(response);
   }


   return (
      <>
         <section className="login-area pt-100 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                     <div className="basic-login">
                        <h3 className="text-center mb-60">Login From Here</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                           <label htmlFor="name" className='mb-2'>Email Address <span>**</span></label>
                           <input {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g })} required id="name" type="text"
                              placeholder="Enter Email address..." />

                           {
                              errors.email && (
                                 <Alert variant={"danger"}>
                                    Invalid Email ! Please enter a valid email address
                                 </Alert>
                              )
                           }

                           <label htmlFor="pass" className='mb-2'>Password <span>**</span></label>

                           <div style={{ position: "relative" }}>
                              <input {...register("password", { required: true, minLength: 3 })}
                                 required id="pass" type={showPass ? "text" : "password"} placeholder="Enter password..."
                              />
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
                                    Invalid Password ! Please enter a valid password
                                 </Alert>
                              )
                           }
                           <div className="login-action mb-20 fix">
                              <span className="log-rem f-left">
                                 <input id="remember" type="checkbox" />
                                 <label htmlFor="remember">Remember me!</label>
                              </span>
                              {/* <span className="forgot-login f-right">
                                 <span onClick={() => passwordResetWithEmail(email)}>Lost your password?</span>
                              </span> */}

                           </div>
                           <button type="submit" className="primary_btn btn-icon-green w-100">
                              {
                                 loading ? (
                                    <Spinner animation="border" variant="light" />
                                 ) : "Login Now"
                              }
                           </button>
                           <div className="or-divide"><span>or</span></div>
                           <Link to="/register"><button className="primary_btn theme-btn w-100">Register Now</button></Link>
                        </form>
                        <div className="or-divide or-login"><span>or login with </span></div>
                        {/* <button onClick={() => googleSignIn()} className="login_btn">
                           <img src="img/icon/google_icon.svg" alt="" /> </button> */}
                        <div className='d-flex justify-content-center align-items-center flex-column gap-3'>
                           <GoogleLogin
                              theme='filled_black'
                              onSuccess={credentialResponse => {
                                 console.log(credentialResponse);
                                 const res = jwt_decode(credentialResponse.credential)
                                 console.log(res, "Ress")
                                 fetchSocialLogin(res.email, res.given_name, res.family_name, res.picture)
                                 // localStorage.setItem("google_login", true)
                                 // localStorage.setItem("token", credentialResponse.credential)
                                 // setIsUserLoggedIn(true)
                                 // navigate("/")
                              }}
                              onError={() => {
                                 toast.error("Login with google failed")
                              }}
                           />

                           <FacebookLogin
                              appId="772726314457754"
                              onSuccess={(response) => {
                                 console.log('Login Success!', response);
                              }}
                              onFail={(error) => {
                                 console.log('Login Failed!', error);
                              }}
                              onProfileSuccess={(response) => {
                                 console.log('Get Profile Success!', response);
                              }}
                           />


                           <Button style={{ backgroundColor: "#e12454", border: "none" }} onClick={handleShow}>
                              Login with OTP
                           </Button>
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

export default LoginArea;