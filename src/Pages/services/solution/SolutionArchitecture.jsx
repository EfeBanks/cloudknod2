import React from 'react'
import Bg from '../../../images/BAbg.jpg';
import Consultation from '../../../Components/Consultation';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import So1 from '../../../images/so1.jpg';
import So2 from '../../../images/so2.jpg';
import So3 from '../../../images/so3.jpg'



export default function SolutionArchitecture() {
  
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
                <h1 className="container"><span className='text-warning'>Solution Architecture </span>Services</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

        {/* Statistics */}
        <div className="containerSpecial consultationBg">
        <div className="row py-sm-5 py-2 mx-sm-5 mx-2">
            <div className="col-sm-4">
            <h2 className=' fw-bold py-4 mt-5'>Well-designed IT Architecture solutions for business</h2>
            </div>
            <div className="col-sm-8 ps-2">
              
            <div className="row py-sm-4 py-2">

              <div className="col-sm me-2 hoverlay-container">
                <img src={So1} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>20+ Specialists</h4>
                  <p>Cloudknod's Solution Architecture team is made up of skilled experts in different business areas.</p>
                </div>
              </div>

              <div className="col-sm  me-2 hoverlay-container ">
                <img src={So2} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                <h4 className='pt-3'>20% Resources Saved </h4>
                <p>Building a software architecture will help you significantly reduce development costs and rework percentage.</p>
                </div>
              </div>

              <div className="col-sm me-2 hoverlay-container ">
                <img src={So3} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                <h4 className='pt-3'>12+ Projects Delivered</h4>
                  <p>Cloudknod’s team has delivered multiple complex IT architecture projects across various industries.</p>
                
                 </div>
              </div>
            </div>

            </div>
        </div>
      </div>

      {/* Statistics ends */}

      

      {/* IT Architecture Roles section */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row pt-sm-5 pt-2 mx-sm-5 mx-2">
              <div className="col ">
                <h1 className='content-header fw-bold py-sm-4 py-2 px-sm-3 px-1'>Core fields of IT Architecture</h1>
                <p className=" px-sm-3 px-1">Here are the dimensions of your business that a foundational IT architecture can improve.</p>
  
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-sm-5 pb-2 mx-sm-5 mx-2">
              <div className="col-sm-4 ">
              
                <div className=" px-3">
                  <h4 className='pt-3 fw-bold'> Business </h4>
                  <p>The emphasis is on result-driven procedure views and models prepared with us:</p>
                  <ul style={{lineHeight:'2.5rem'}}>
                    <li>Business Architect</li>
                    <li>Enterprise Architect</li>
                    <li>Digital Transformation SME</li>
                  </ul>

                  </div>
              </div>

              <div className="col-sm-4">
              
                <div className=" px-3">
                <h4 className='pt-3 fw-bold'> Application/Operations</h4>
                <p>The focus is on intelligent, powerful, and robust solutions crafted by Cloudknod’s IT Architects: </p>
                  <ul style={{lineHeight:'2.5rem'}}>
                    <li>Solutions Architect</li>
                    <li>Network & Infrastructure designer</li>
                    <li>Security, Risk and Compliance Expert</li>
                    <li>Integration Architect</li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-4">
              
                <div className="px-3">
                <h4 className='pt-3 fw-bold'> Technology</h4>
                <p>Here, the priority is hardware and tech options implemented by Andersen's specialists:</p>
                  <ul style={{lineHeight:'2.5rem'}}>
                    <li>Software Architect</li>
                    <li>AWS, Azure, GSP designer</li>
                    <li>DWH/BI data architect</li>
                    <li>ML and AI Specialist</li>
                  </ul>
                </div>
              </div>

             </div>
             </div>  
      {/* IT Architecture Roles ends*/}

      
      {/* Request Consultation */}
      <section className='my-sm-5 my-2' style={{color: '#fff'}} >
        <div className="container p-5">
          <div className="row">
            <div className="col-sm-9 border-start border-warning development-header">
                <h1 style={{ fontWeight:'bold'}} >Whatever your software challenge is, our Solution Architecture experts are ready to help you with complex processes. Schedule a free consultation.</h1>
            </div>
            <div className="col-sm text-center ">
            <Link to='/ContactForm'>
              <button className='btn btn-warning request p-sm-3 p-2'>Request Consultation</button>
            </Link>
            </div>
          </div>
        </div>
        </section>
         {/* Request Consultation ends */}


        {/* Consultation section */}
            <Consultation />
        {/* Consultation section ends*/}

    </div>
  )
}



