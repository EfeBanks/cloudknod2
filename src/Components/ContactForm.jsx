import React from 'react';
import Bg from '../images/bg2.jpg';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Consultation from './Consultation';


export default function ContactForm() {
   // Extracts pathname property(key) from an object
   const { pathname } = useLocation();

   // Automatically scrolls to top whenever pathname changes
   useEffect(() => {
     window.scrollTo(0, 0);
   }, [pathname]);
   
  return (
    <div className='home-body'>
      {/* Banner section */}
      <div className="row">
        <div className='contactformBg'>
          <img src={Bg} alt="cloudknod Bg" />
            <div className="bg-content">
              <div className="androidBg-inner-content p-sm-5 p-0">
                <h1 className="container"><span className='text-warning'>Schedule</span> a free consultation</h1>
              </div>
        
            </div>       
        </div>
      </div>
        {/* Banner section ends */}
        
       <Consultation/>
    </div>
  )
}

