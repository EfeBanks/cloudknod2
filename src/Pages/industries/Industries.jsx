import React from 'react'
import './Industries.css'
import Carousel from '../../Components/carousel/Carousel';
import Bg from '../../images/navigate22.jpg';
import Consultation from '../../Components/Consultation';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';



export default function Industries() {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className='IndustryBg'>
      {/* Banner section */}
      <div className="row ">
        <div className='col androidBg-content'>
          <img src={Bg} alt="cloudknod Bg" />
            <div className="container bg-content">
              <div className="androidBg-inner-content p-sm-5 p-2">
                <h1 className="container"> Navigate Your Technology Challenges With <span className='text-warning'>Cloudknod</span></h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

      <Carousel/>

      {/* Cloudknod Advantage section */}
      <div className="containerSpecial advantageBg">
          <div className="row py-sm-5 py-2 mx-sm-5 mx-1">
              <div className="col ">
                <h1 className='content-header fw-bold py-4'>Cloudknod's Advantages </h1>
                
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-sm-5 pb-2 mx-sm-5 mx-2">
              <div className="col-sm-6 ">
              
                <div className=" px-sm-3 px-1">
                  <h4 className='pt-3'>Multi-industry track record</h4>
                  <p>Cloudknod's portfolio of delivered IT projects includes over 1,000 successful tech initiatives in the most demanding and data-driven sectors.</p>
                </div>
              </div>

              <div className="col-sm-6">
              
                <div className=" px-sm-3 px-1">
                  <h4 className='pt-3'>Worldwide reach</h4>
                  <p>Owing to multiple R&D centers and globally distributed IT staff, we are in the right position to help customers from any country.</p>
                </div>
              </div>

              <div className="col-sm-6 py-sm-4">
              
                <div className="px-sm-3 px-1">
                  <h4 className='pt-3'>Extensive IT talent pool</h4>
                  <p>Cloudknod employs over 500 tech experts – including developers,data scientists, DevOps engineers etc. – who are ready to deliver IT projects of any scope and complexity.</p>
                </div>
              </div>

              <div className="col-sm-6  py-sm-4 ">
              
                <div className="px-sm-3 px-1">
                  <h4 className='pt-3'>High customer satisfaction rates</h4>
                  <p>The overwhelming majority of our customers – 98% – are totally content with the results we deliver, stay with us, and refer us to their partners and peers.</p>
                </div>
              </div>
             </div>
             </div>
             {/* Cloudknod Advantage section ends*/}

             {/* Consultation section */}
                <Consultation />
            {/* Consultation section ends*/}
    </div>
  )
}
