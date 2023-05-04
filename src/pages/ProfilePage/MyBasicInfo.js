import React from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { requestData, requestData2 } from '../../utils/baseUrl'
import { useContext } from 'react'
import { AuthContext } from '../../context/AllContext'
import { useEffect } from 'react'
import { FileUploader } from 'react-drag-drop-files'
import { useNavigate } from 'react-router-dom'
import { Card } from 'react-bootstrap'



const fileTypes = ["JPG", "PNG", "JPEG"];

function MyBasicInfo() {
  const navigate = useNavigate()
  const {userData,setUserData} = useContext(AuthContext);
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    biographical_info: "",
    profile_image:""
  })

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    const name = e.target.name;
    if (name === "phone") {
      const isValidNumber = /^[0-9]{0,13}$/.test(e.target.value);
      console.log(isValidNumber)
      if (!isValidNumber) {
        return
      }
    }
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    let data={};
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(values.email);
    

    if((!values.first_name || values.first_name.length<2)){
      toast.error("Please enter a valid first name ...");
      return
    }

    if((!values.last_name || values.last_name.length<2)){
      toast.error("Please enter a valid last name ...");
      return
    }

    if(!isEmailValid){
      toast.error("Please enter a valid email Id ...");
      return
    }

    if(values.first_name){
      data.first_name = values.first_name
    }
    if(values.last_name){
      data.last_name = values.last_name
    }
    if(values.email){
      data.email = values.email
    }
    if(values.phone){
      data.phone = values.phone
    }

    if(values.biographical_info){
      data.biographical_info = values.biographical_info
    }

    


    console.log(data);

    const res = await requestData("editStudentProfile","POST",data);

    if(res && res.error===false){
      toast.success("Profile updated successfully");
    
    }else{
      toast.error(res.messages)
    }


    console.log(data);
  }


  useEffect(()=>{

    const data = {
      first_name:"",
      last_name:"",
      phone:"",
      email:"",
      biographical_info:""
    }

    if(userData){
      console.log(userData)
      if(userData.first_name){
        data.first_name = userData.first_name
      }
      if(userData.last_name){
        data.last_name = userData.last_name
      }
      if(userData.phone){
        data.phone = userData.phone
      }
      if(userData.email){
        data.email = userData.email
      }
      if(userData.biographical_info){
        data.biographical_info = userData.biographical_info
      }
      if(userData.profile_image){
        data.profile_image = userData.profile_image
      }
      setValues(data)
    }
  },[userData])


  const getProfile = async () => {
    const res = await requestData2("getStudentProfile", "POST", {});
    if (res && res.error === false) {
      setUserData(res.data);
    }
  }

  const handleChange2 = async(file) => {
    const data = 
    {
      profile_image:file,
      first_name:values.first_name,
      last_name:values.last_name,
      email:values.email,
      phone:values.phone
    }
    const res = await requestData("editStudentProfile","POST",data);

    if(res && res.error===false){
      toast.success("Profile updated successfully");
      getProfile()
    }else{
      toast.error(res.messages)
    }

  };

  useEffect(()=>{
   if(userData){
     if(!userData.first_name || !userData.last_name || !userData.email || !userData.phone){
       toast.error("Enter your basic information first !");
       navigate("/store/profile/avijit123/settings/basic_information");
     }
   }
  },[userData])

  return (
    <Card style={{width:"100%"}} className='mx-5 my-4'>
      <Card.Body>
      <div className='mt-5'>
      <h2 className='text-center'>General Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="row me-2">
          <div className="col-sm-12 col-md-6">
            <label className='text-dark' htmlFor="firstname">First Name</label>
            <input type="text" id='firstname' value={values.first_name} name='first_name' onChange={handleChange} className='orderinput' />
          </div>
          <div className="col-sm-12 col-md-6">
            <label className='text-dark' htmlFor="lastname">Last Name</label>
            <input type="text" id='lastname' value={values.last_name} name='last_name' onChange={handleChange} className='orderinput' />
          </div>
          <div className="col-sm-12 col-md-6">
            <label className='text-dark' htmlFor="displayname">Phone Number</label>
            <input type="text" id='displayname' value={values.phone} name='phone' onChange={handleChange} className='orderinput' />
          </div>
          <div className="col-sm-12 col-md-6">
            <label className='text-dark' htmlFor="emailaddress">Email Address</label>
            <input type="text" id='emailaddress' value={values.email} name='email' onChange={handleChange} className='orderinput' />
          </div>
          <div className="col-12 mb-3">
            <label className='text-dark' htmlFor="bio">Biographical Info</label>
            <textarea type="text" id='bio' name='biographical_info' value={values.biographical_info} onChange={handleChange} className='orderinput2' rows={5} />
            <i>
              Share a little biographical information to fill out your profile. This may be shown publicly.
            </i>
          </div>
          <div className="col-12 mb-3">
            <FileUploader handleChange={handleChange2} name="file" types={fileTypes} />
          </div>

          <button type='submit' className='primary_btn4 mx-2 mb-5'>Save Changes</button>
        </div>
      </form>

    </div>
      </Card.Body>

    </Card>
  )
}

export default MyBasicInfo