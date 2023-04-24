import React from 'react'
import {ShareSocial} from 'react-share-social' 

function SocialShareButtons() {
    const style = {
        root: {
          background: 'transparent',
          padding:"0"
        },
      };
  return (
    <div className='mt-4'>
     <h4 className='white-color'>Share: </h4>
     <ShareSocial 
     url ="https://silvamethod.com/store/course/silva-method-manifesting-program-complete/"
     socialTypes={['facebook','twitter','reddit','linkedin','telegram']}
     style={style}
   />
    </div>
  )
}

export default SocialShareButtons