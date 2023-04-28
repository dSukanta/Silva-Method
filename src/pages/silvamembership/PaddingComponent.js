import React from 'react'
import { useMediaQuery } from 'react-responsive'

function PaddingComponent() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
    const isMobile = useMediaQuery({minWidth: 320, maxWidth:480  })
  return (
    <div style={{marginBottom:isMobile?"150px":"0px"}}>
        
    </div>
  )
}

export default PaddingComponent