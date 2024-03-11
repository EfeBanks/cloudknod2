import React from 'react'
import Bg from '../../../images/telecom.jpg';
import T1 from '../../../images/t1.jpg';
import T2 from '../../../images/t2.jpg';
import T3 from '../../../images/t3.jpg';
import TelecomApp from '../../../images/telecomApp.jpg';
import Button from 'react-bootstrap/Button'
import Consultation from '../../../Components/Consultation';
import ForLogistics from '../../../Components/views/ForLogistics';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export default function Telecom() {
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
              <div className="androidBg-inner-content p-sm-5 p-3 pb-sm-1 pb-5">
                <h1 className="container"><span className='text-warning'>Telecom </span> Software Development and Integration Services</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

      {/* Statistics */}
      <div className="containerSpecial consultationBg">
        <div className="row py-5 mx-sm-5 mx-2">
            <div className="col-sm-4">
            <h2 className=' fw-bold py-sm-4 py-2 mt-sm-5 mt-2'>Accelerate your Connectivity with our Telecom Expertise </h2>
            </div>
            <div className="col-sm-8 ps-2">
              
            <div className="row py-sm-4 py-2">

              <div className="col-sm me-2 hoverlay-container">
                <img src={T1} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-sm-3 px-1">
                  <h4 className='pt-3'>50 Successful Projects</h4>
                  <p>Over the years, we have been delivering effective software solutions for businesses to help them benefit from technology with high-quality service delivery.</p>
                </div>
              </div>

              <div className="col-sm  me-2 hoverlay-container ">
                <img src={T2} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-sm-3 px-1">
                  <h4 className='pt-3'>70+ Telecom Experts </h4>
                  <p>As a leading software development company, Cloudknod employs both knowledgeable and skilled experts in Telecom industry. </p>
                </div>
              </div>

              <div className="col-sm me-2 hoverlay-container ">
                <img src={T3} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-sm-3 px-1">
                  <h4 className='pt-3'>40+ Satisfied Clients</h4>
                  <p>We have so far built trust and given high satisfaction to over 40 of our esteemed clients globally.</p>
                </div>
              </div>
            </div>

            </div>
        </div>
      </div>

      {/* Statistics ends */}


      {/* Telecom App */}

      <div className="containerSpecial consultationBg mt-3">
        <div className="row py-sm-4 py-2 pb-5 ms-sm-5 ms-2">
            <div className="col-sm-7 pe-5 pb-4">
            <h2 className=' fw-bold pt-5 mt-5'>IT projects delivered by Cloudknod for Telecom  </h2>
            <p>Cloudknod is a custom software development provider of choice for many Telecom companies hence, have implemented multiple tech initiatives for the telecom industry.</p>
            <Button variant="warning" className='request slider-btn btn btn-lg '>
                  Request Service
              </Button> 
            </div>
            <div className="col-sm-5 ">
                <img src={TelecomApp} alt="cloudknod" className='img-fluid' />
              
            </div>
        </div>
      </div>

      {/* Telecom App ends */}


      {/* IT Skills section */}
      ` <div className="containerSpecial advantageBg ">
          <div className="row py-sm-5 py-2 mx-sm-5 mx-2">
              <div className="col-sm ">
                <h1 className='content-header fw-bold py-sm-4 py-2'>Cloudknod's expertise in building telecom solutions </h1> 
                <p className='lead'>Cloudknod's telecom development team can apply state-of-the-art telecom software, the latest frameworks, most effective cloud computing infrastructures and platforms, big data tools, and databases to match your goals.</p>
                <ForLogistics />
              </div>
          </div>
          

          </div>
             {/* IT Skills section ends*/}


            {/* Request Consultation */}
         <section className='my-sm-5 my-2' style={{color: '#fff'}} >
        <div className="container p-5">
          <div className="row">
            <div className="col-sm-9 border-start border-warning development-header">
                <h1 style={{ fontWeight:'bold'}} >Schedule a call to assess and discuss your IT project</h1>
            </div>
            <div className="col-sm ms-4 d-flex align-items-center ">
              <button className='btn btn-warning request1 p-2'>Request Consultation</button>
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
