import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { FileUploader } from "react-drag-drop-files";


const fileTypes = ["JPG", "PNG", "JPEG"];

function MyAvatar() {
  const [file, setFile] = useState(null);

  const handleChange = (file) => {
    setFile(file);
  };

  useEffect(()=>{
   console.log(file)
  },[file])
  return (
    <div className='mt-4 mx-3 mb-4'>
      <h3 className='my-4'>Upload Avatar</h3>
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
    </div>
  )
}

export default MyAvatar