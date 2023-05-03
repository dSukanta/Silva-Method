import React from 'react'
import { Alert } from 'react-bootstrap'

function MyOrdersPage() {
  return (
    <div className='mt-5'>
      <Alert key={"danger"} variant={"danger"}>
        No Orders Found...
      </Alert>
      <p>
        If you have a valid order key, you can recover it here.
      </p>
      <p>
        <i>
          When you checkout as a Guest, an order key will be sent to your email. You can use the order key to create an order.
        </i>
      </p>
      <div>
        <input type="text" className='orderinput' placeholder='Order key' />
        <button className='primary_btn4'>
          Recover
        </button>
      </div>

    </div>
  )
}

export default MyOrdersPage