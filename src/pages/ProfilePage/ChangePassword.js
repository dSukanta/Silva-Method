import React, { useState } from 'react'
import { requestData, requestData2 } from '../../utils/baseUrl'
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AllContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Card } from 'react-bootstrap';

function ChangePassword() {
  const { setUserData, userData, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const [oldpassword, setOldPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [confirmNewPassword2, setConfirmNewPassword2] = useState("");

  const handleSubmit = async () => {
    console.log(newPassword);
    if (!newPassword) {
      toast.error("Password field is required");
      return;
    }
    if (newPassword.length < 5) {
      toast.error("Enter a longer password");
      return;
    }
    if (newPassword !== confirmNewPassword) {
      toast.error("Passwords do not match !");
      return
    }

    const data =
    {
      first_name: userData.first_name,
      last_name: userData.last_name,
      email: userData.email,
      phone: userData.phone,
      password: newPassword
    }
    const res = await requestData("editStudentProfile", "POST", data);

    if (res && res.error === false) {
      toast.success("Password updated successfully, Login again");
      logout();
      navigate("/")
    } else {
      toast.error(res.messages)
    }

  }



  const handleChangePass = async () => {
    if (!oldpassword || !newPassword2 || !confirmNewPassword2) {
      toast.error("Please Enter all required fields");
      return
    }

    if (newPassword2 !== confirmNewPassword2) {
      toast.error("Error!! Passwords do not match");
      return;
    }

    const data = {
      old_password: oldpassword,
      new_password: newPassword2,
      confirm_password: confirmNewPassword2
    }

    const res = await requestData("changePassword", "POST", data);

    if (res && res.error === false) {
      toast.success("Password changed successfully");
      logout();
      navigate("/")
    } else {
      toast.error(res.messages);
    }
  }
  useEffect(() => {
    if (userData) {
      if (!userData.first_name || !userData.last_name || !userData.email || !userData.phone) {
        toast.error("Enter your basic information first !");
        navigate("/store/profile/avijit123/settings/basic_information");
      }
    }
  }, [userData])



  return (
    <Card className='mx-5 my-4' style={{width:"100%"}}>
      <Card.Body>
        <div className='mt-3 mx-3 mb-3'>
          <h3 className='text-center'>Change/Create Password</h3>

          {
            userData && userData.password && (
              <div className="row me-2 mt-5">
                <div className="col-12">
                  <label className='text-dark' htmlFor="oldpass">Old Password</label>
                  <input type="password" value={oldpassword} onChange={(e) => setOldPassword(e.target.value)} id='oldpass' className='orderinput' />
                </div>
                <div className="col-12">
                  <label className='text-dark' htmlFor="newpass">New Password</label>
                  <input type="password" value={newPassword2}
                    onChange={(e) => setNewPassword2(e.target.value)}
                    id='newpass'
                    className='orderinput'
                  />
                </div>
                <div className="col-12">
                  <label className='text-dark' htmlFor="newpass">Confirm New Password</label>
                  <input type="password" id='confirmnewpass' value={confirmNewPassword2}
                    onChange={(e) => setConfirmNewPassword2(e.target.value)}
                    className='orderinput'
                  />
                </div>
                <button className='primary_btn4 mx-2 mb-5' onClick={handleChangePass}>Save Changes</button>
              </div>
            )
          }

          {
            userData && !userData.password && (
              <div className="row me-2 mt-5">
                <div className="col-12">
                  <label className='text-dark' htmlFor="newpass">New Password</label>
                  <input type="password" id='newpass' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className='orderinput' />
                </div>
                <div className="col-12">
                  <label className='text-dark' htmlFor="newpass">Confirm New Password</label>
                  <input type="password" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} id='confirmnewpass' className='orderinput' />
                </div>
                <button className='primary_btn4 mx-2 mb-5' onClick={handleSubmit}>Save Changes</button>
              </div>
            )
          }

        </div>
      </Card.Body>
    </Card>
  )
}

export default ChangePassword