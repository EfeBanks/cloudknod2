import React from 'react'
import Bg from '../../../images/finance2.jpg';
import F1 from '../../../images/f1.jpg';
import F2 from '../../../images/f2.jpg';
import F3 from '../../../images/f3.jpg';
import FinanceApp from '../../../images/bank-app.jpg';
import Button from 'react-bootstrap/Button'
import Consultation from '../../../Components/Consultation';
import ForLogistics from '../../../Components/views/ForLogistics';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';



export default function Finance() {
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
                <h1 className="container"><span className='text-warning'>Financial</span> Software Development</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

      {/* Statistics */}
      <div className="containerSpecial consultationBg">
        <div className="row py-5 mx-sm-5 mx-2">
            <div className="col-sm-4">
            <h2 className=' fw-bold py-4 mt-sm-5 mt-2'>Entrust your project to Cloudknod </h2>
            </div>
            <div className="col-sm-8 ps-2">
              
            <div className="row py-4">

              <div className="col-sm me-2 hoverlay-container">
                <img src={F3} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>200+ Delivered Projects</h4>
                  <p>We've built a significant number of financial APIs, mobile banking and insurance apps, trading platforms, and other financial software solutions.</p>
                </div>
              </div>

              <div className="col-sm  me-2 hoverlay-container ">
                <img src={F2} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>80+ Industry-focused Engineers </h4>
                  <p>About 65% of our developers have more than four years of experience with FinTech products.</p>
                </div>
              </div>

              <div className="col-sm me-2 hoverlay-container ">
                <img src={F1} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>100+ Satisfied Clients</h4>
                  <p>With our exceptional and functional fintech software service, we've gained over a 100 loyal and satisfied customers worldwide.</p>
                </div>
              </div>
            </div>

            </div>
        </div>
      </div>

      {/* Statistics ends */}

      {/* Finance App */}
      <div className="containerSpecial consultationBg mt-3">
        <div className="row py-4 pb-5 ms-sm-5 ms-2">
            <div className="col-sm-7 pe-5 pb-4">
            <h2 className=' fw-bold pt-sm-5 pt-2 mt-sm-5 mt-2'>Cloudknod's Digital Banking App for Financial Service Companies </h2>
            <p>See the advantages offered by our white-label digital wallet and mobile banking app for traditional banks and FinTech service providers.</p>
            <Button variant="warning" className='request slider-btn btn btn-lg '>
                  Request Service
              </Button> 
            </div>
            <div className="col-sm-5 ">
                <img src={FinanceApp} alt="cloudknod" className='img-fluid' />
              
            </div>
        </div>
      </div>

      {/* Finance App ends */}


      {/* Software Dev. section */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row py-5 mx-sm-5 mx-2">
              <div className="col ">
                <h1 className='content-header fw-bold py-sm-4 py-2'>Software development scope available with us </h1> 
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-5 mx-sm-5 mx-2">
              <div className="col-sm-6 ">
                <div className="p-sm-4 p-2 gray-bg">
                  <h4 className='pt-3 fw-bold'>FinTech Software Development</h4>
                  <p>Benefit from Cloudknod's expertise to grow in the competitive Finance industry environment in conformity with applicable regulations.</p>
                </div>
              </div>

              <div className="col-sm-6 ">            
                <div className=" p-sm-4 p-2 gray-bg">
                  <h4 className='pt-3 fw-bold'>Insurance Software Development</h4>
                  <p> In our insurance softwares, we make correct projections and calculations while mitigating underwriting risks with software designed and built by Cloudknod.</p>
                </div>
              </div>

              <div className="col-sm-6 py-sm-4 py-2">
              <div className="p-4 gray-bg">
                  <h4 className='pt-3 fw-bold'> Banking Software Development </h4>
                  <p>Make your banking business modern and digitized by relying on Cloudknod's expertise in custom products, SaaS approaches and ability to make the most of off-the-shelf software.</p>
                </div>
                
              </div>

              <div className="col-sm-6 py-sm-4 py-2 ">
              
                <div className="p-4 gray-bg">
                  <h4 className='pt-3 fw-bold'>Investment Software Development</h4>
                  <p>Ensure effective portfolio management, profitability and client satisfaction with smart and feature-rich investment tools developed by Cloudknod.</p>
                </div>
              </div>

          

             </div>
             </div>
             {/* Software Dev. section ends*/}

            {/* Request Consultation */}
         <section className='my-sm-5 my-2' style={{color: '#fff'}} >
        <div className="container p-sm-5 p-2">
          <div className="row">
            <div className="col-sm-9 border-start border-warning development-header">
                <h1 style={{ fontWeight:'bold'}} >Select professional IT services for your software development project.</h1>
            </div>
            <div className="col-sm ms-4 d-flex align-items-center ">
              <button className='btn btn-warning request p-3'>Request Services</button>
            </div>
          </div>
        </div>
        </section>
         {/* Request Consultation ends */}

          {/* IT Skills section */}
      ` <div className="containerSpecial advantageBg mt-3">
          <div className="row py-sm-5 py-2 mx-sm-5 mx-2">
              <div className="col-sm ">
                <h1 className='content-header fw-bold py-4'>Cloudknod’s IT skills and experience in Finance </h1> 
                <p>Employing the latest technologies, frameworks, and components, our engineers create solutions that combine a strong easy-to-use modern design with high performance.</p>
                <ForLogistics />
              </div>
          </div>
{/* 
          <div className="row containerSpecial mx-5">
            <div className="col-sm">  
             
            </div>
          </div> */}
          

          </div>
             {/* IT Skills section ends*/}


         {/* Consultation section */}
         <Consultation />
        {/* Consultation section ends*/}

    </div>
  )
}

