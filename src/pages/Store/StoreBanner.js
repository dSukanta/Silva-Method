import React from 'react'

function StoreBanner({src}) {
    return (
        <div className='container text-center mb-5'>
            <img src={src} style={{ width: "80%", marginTop: "30px" }} />
        </div>
    )
}

export default StoreBanner