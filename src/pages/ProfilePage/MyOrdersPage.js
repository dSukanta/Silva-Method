import React from 'react'
import { Alert } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'

function MyOrdersPage() {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })

  return (
    <div className='mt-5 mb-4 px-4' style={{marginLeft:isDesktopOrLaptop?"80px":"0px"}}>
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