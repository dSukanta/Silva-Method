import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { FileUploader } from "react-drag-drop-files";
import { toast } from 'react-hot-toast';
import { requestData, requestData2 } from '../../utils/baseUrl';
import { AuthContext } from '../../context/AllContext';
import { useNavigate } from 'react-router-dom';


const fileTypes = ["JPG", "PNG", "JPEG"];

function MyAvatar() {

  const navigate = useNavigate()

  const {userData,setUserData} = useContext(AuthContext);


  const getProfile = async () => {
    const res = await requestData2("getStudentProfile", "POST", {});
    if (res && res.error === false) {
      setUserData(res.data);
    }
  }

  const handleChange = async(file) => {
    const data = 
    {
      profile_image:file,
      first_name:userData.first_name,
      last_name:userData.last_name,
      email:userData.email,
      phone:userData.phone
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
    <div className='mt-4 mx-3 mb-4'>
      <h3 className='my-4'>Upload Avatar</h3>
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
    </div>
  )
}

export default MyAvatar