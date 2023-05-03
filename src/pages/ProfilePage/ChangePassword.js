import React from 'react'
import { requestData, requestData2 } from '../../utils/baseUrl'
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AllContext';

function ChangePassword() {
  const { setUserData, userData } = useContext(AuthContext);
  
  return (
    <div className='mt-3 mx-3 mb-3'>
      <h3 className='text-center'>Change/Create Password</h3>

      {
        userData && userData.password && (
          <div className="row me-2 mt-5">
            <div className="col-12">
              <label className='text-dark' htmlFor="oldpass">Old Password</label>
              <input type="password" id='oldpass' className='orderinput' />
            </div>
            <div className="col-12">
              <label className='text-dark' htmlFor="newpass">New Password</label>
              <input type="password" id='newpass' className='orderinput' />
            </div>
            <div className="col-12">
              <label className='text-dark' htmlFor="newpass">Confirm New Password</label>
              <input type="password" id='confirmnewpass' className='orderinput' />
            </div>
            <button className='primary_btn4 mx-2 mb-5'>Save Changes</button>
          </div>
        )
      }

      {
        userData && !userData.password && (
          <div className="row me-2 mt-5">
            <div className="col-12">
              <label className='text-dark' htmlFor="newpass">New Password</label>
              <input type="password" id='newpass' className='orderinput' />
            </div>
            <button className='primary_btn4 mx-2 mb-5'>Save Changes</button>
          </div>
        )
      }

    </div>
  )
}

export default ChangePassword