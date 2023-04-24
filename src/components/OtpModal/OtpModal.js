import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

function OtpModal({show,setShow,handleClose,children}) {
    return (
      <>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header>
            <Modal.Title>Login with OTP</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {children}
          </Modal.Body>
        </Modal>
      </>
    );
}

export default OtpModal