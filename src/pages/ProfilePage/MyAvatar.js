import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { FileUploader } from "react-drag-drop-files";
import { toast } from 'react-hot-toast';
import { requestData } from '../../utils/baseUrl';


const fileTypes = ["JPG", "PNG", "JPEG"];

function MyAvatar() {

  const handleChange = async(file) => {
    const data = {profile_image:file}
    const res = await requestData("editStudentProfile","POST",data);

    if(res && res.error===false){
      toast.success("Profile updated successfully");
    
    }else{
      toast.error(res.messages)
    }

  };

  return (
    <div className='mt-4 mx-3 mb-4'>
      <h3 className='my-4'>Upload Avatar</h3>
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
    </div>
  )
}

export default MyAvatar