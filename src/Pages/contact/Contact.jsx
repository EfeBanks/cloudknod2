import React from 'react'
import Bg from '../../images/contact.jpg';
import Consultation from '../../Components/Consultation';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";



export default function Contact() {
  
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <div className='home-body'>
        {/* Banner section */}
      <div className="row ">
        <div className='col androidBg-content'>
          <img src={Bg} alt="cloudknod Bg" />
            <div className="container bg-content">
              <div className="androidBg-inner-content p-sm-5 p-2">
                <h1 className="container"><span className='text-warning'> Reach Out </span>To Us</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

         
       {/* Contact us */}
      <section className='my-sm-5 my-3' style={{color: '#fff'}} >
        <div className="containerSpecial p-sm- h5">
          <div className="row">
            <div className="col-sm">
                <h1 className='content-header fw-bold py-4 px-3'>We would love to hear from you</h1>
            </div>
          </div>

          <div className="row">
                <div className="col-sm-6">
                    <h5 className="px-3 py-2">Reach out to us to get free consultation and entrust your IT initiative to a company of software experts.</h5>
                    <div className="phone px-3 py-2">
                    <FaPhoneAlt className='socials' /> <span className='ps-3'>+01-66677455</span>
                    </div>

                    <div className="email px-3 py-2">
                    <IoMdMail className='socials' /> <span className='ps-2'>info@cloudknod.com</span>
                    </div>
                </div>
          </div>
        </div>
        </section>
          {/* Contact us ends */}


        {/* Consultation section */}
             <Consultation />
        {/* Consultation section ends*/}

    </div>
  )
}



