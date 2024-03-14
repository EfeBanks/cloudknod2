import React from 'react'
import Bg from '../../../images/itsecure.jpg';
import Consultation from '../../../Components/Consultation';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';




export default function ITSecurity() {
  
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
                <h1 className="container"><span className='text-warning'> IT Security </span>Management</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}        
      
      {/* Security Process section */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row py-sm-5 py-2 mx-sm-5 mx-2">
              <div className="col">
                <h1 className='content-header fw-bold py-4 px-sm-3 px-1'>Protecting Your Digital Assets with IT Security Management </h1>
                <p className=' px-3'>With CloudKnod as your IT security management partner, you can rest assured that your digital assets are protected against threats, vulnerabilities, and data breaches.</p>
            
                
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-sm-5 pb-2 mx-sm-5 mx-2">
              <div className="col-sm-6 ">
                <div className="p-4 gray-bg border-start border-warning">
                  <h4 className='pt-3 fw-bold'> Safe from Threats </h4>
                  <p>CloudKnod's IT security management services are focused on safeguarding your organization's critical data and systems from evolving cyber threats</p>
                </div>
              </div>

              <div className="col-sm-6 ">            
                <div className=" p-4 gray-bg border-start border-warning">
                  <h4 className='pt-3 fw-bold'>Strict Access Control</h4>
                  <p> We conduct comprehensive risk assessments, deploy advanced intrusion detection systems, and establish strict access controls to fortify your defenses. </p>
                </div>
              </div>

              <div className="col-sm-6 py-sm-4 py-0">
              <div className="p-4 gray-bg border-start border-warning">
                  <h4 className='pt-3 fw-bold'> Robust Security Measures </h4>
                  <p> Our team of skilled security experts employs a multi-layered approach to assess, plan, and implement robust security measures that align with your unique business needs and compliance requirements.</p>
                </div>
                
              </div>

              <div className="col-sm-6 py-sm-4 py-0 ">
              
                <div className="p-4 gray-bg border-start border-warning">
                  <h4 className='pt-3 fw-bold'> Customer Trust</h4>
                  <p>
                  Let's collaborate to strengthen your cyber security posture and ensure the confidentiality, integrity, and availability of your IT resources, with CloudKnod as your guardian of IT security excellence. 
                  </p>
                </div>
              </div>

             </div>
             </div>  
      {/* Security Process section ends*/}

    
      {/* Request Consultation */}
      <section className='my-sm-5 my-2' style={{color: '#fff'}} >
        <div className="container p-5">
          <div className="row">
            <div className="col-sm-9 border-start border-warning development-header">
                <h1 style={{ fontWeight:'bold'}} >Select professional IT Security Service for your software development project.</h1>
            </div>
            <div className="col-sm text-center ">
            <Link to='/ContactForm'>
                <button className='btn btn-warning request p-sm-3 p-2'>Request Services</button>
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




