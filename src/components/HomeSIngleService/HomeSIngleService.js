import React from 'react';
import { Link } from 'react-router-dom';

const HomeSIngleService = ({ src}) => {
   return (
      <>
        <div className='p-2'>
        <div>
            <img src={src}/>
         </div>
         <div>
            <div>
                  Instructor Name
                  <p>Gabriel Ostend</p>
                  <a href='https://silvamethod.com/events/livedetails/3004'>View Details</a>
            </div>
         </div>
        </div>
      </>
   );
};

export default HomeSIngleService;