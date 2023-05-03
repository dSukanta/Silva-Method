import React from 'react'
import { useState } from 'react'

function MyBasicInfo() {
  const [values,setValues] = useState({
    first_name:"",
    last_name:"",
    email:"",
    phone:"",
    biographical_info:"",
  })

  return (
    <div className='mt-5 mx-5'>
      <h2 className='text-center'>General Settings</h2>
      <div className="row me-2">
        <div className="col-sm-12 col-md-6">
          <label className='text-dark' htmlFor="firstname">First Name</label>
          <input type="text" id='firstname' name='first_name' className='orderinput' />
        </div>
        <div className="col-sm-12 col-md-6">
          <label className='text-dark' htmlFor="lastname">Last Name</label>
          <input type="text" id='lastname' name='last_name' className='orderinput' />
        </div>
        <div className="col-sm-12 col-md-6">
          <label className='text-dark' htmlFor="displayname">Phone Number</label>
          <input type="text" id='displayname' className='orderinput' />
        </div>
        <div className="col-sm-12 col-md-6">
          <label className='text-dark' htmlFor="emailaddress">Email Address</label>
          <input type="text" id='emailaddress' className='orderinput' />
        </div>
        <div className="col-12 mb-3">
          <label className='text-dark' htmlFor="bio">Biographical Info</label>
          <textarea type="text" id='bio' className='orderinput2' rows={5} />
          <i>
          Share a little biographical information to fill out your profile. This may be shown publicly.
          </i>
        </div>

        <button className='primary_btn4 mx-2 mb-5'>Save Changes</button>
      </div>

    </div>
  )
}

export default MyBasicInfo