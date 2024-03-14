import React from 'react'
import Bg from '../../../images/uiBg.jpg';
import Consultation from '../../../Components/Consultation';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MusicSite from '../../../images/music-site.jpg';
import HealthSite from '../../../images/healthwebsite.jpg';
import TeleHealth from '../../../images/telehealth.jpg';
import Telecom from '../../../images/telecomApp.jpg';
import { Link } from 'react-router-dom';



export default function UiUxDesign() {
  
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
                <h1 className="container"><span className='text-warning'> Design Services </span>to Grow Your Business</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}        
      
      {/* Design Process section */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row py-sm-5 py-2 mx-sm-5 mx-2">
              <div className="col">
                <h1 className='content-header fw-bold py-sm-4 py-2 px-sm-3 px-1'>We streamline the design process for you</h1>
                
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-sm-5 pb-2 mx-sm-5 mx-2">
              <div className="col-sm-6 ">
                <div className="p-4 gray-bg border-start border-warning">
                  <h4 className='pt-3 fw-bold'>1) Business and User Research</h4>
                  <p>Cloudknod prioritizes product development areas, building on the needs of markets, users, and businesses.</p>
                </div>
              </div>

              <div className="col-sm-6 ">            
                <div className=" p-4 gray-bg border-start border-warning">
                  <h4 className='pt-3 fw-bold'>2) Problem Identification </h4>
                  <p>Cloudknod analyzes revealed problems and documents solutions to ensure process transparency.</p>
                </div>
              </div>

              <div className="col-sm-6 py-sm-4 py-0">
              <div className="p-4 gray-bg border-start border-warning">
                  <h4 className='pt-3 fw-bold'>3) Designing and Testing with Users </h4>
                  <p>In order to save customers money, we conduct tests during the design stage rather than during the development stage.</p>
                </div>
                
              </div>

              <div className="col-sm-6 py-sm-4 py-0 ">
              
                <div className="p-4 gray-bg border-start border-warning">
                  <h4 className='pt-3 fw-bold'>4) Product Support and Development</h4>
                  <p>Cloudknod creates a framework to ensure the iterative growth of your product.</p>
                </div>
              </div>

             </div>
             </div>  
      {/* Design Process section ends*/}

    
         {/* Project Section */}
         <div className="containerSpecial consultationBg mt-3">
        <div className="row pt-4 ms-sm-5 ms-2">
            <div className="col-sm pe-sm-5 pe-2">
            <h1 className='content-header fw-bold py-sm-5 py-2'>Some of our Projects</h1>  
            </div>

        </div>
        <div className="row py-sm-5 py-2">
          <div className="col-sm-6">
            <img src={MusicSite} alt="cloudknod" className='img-fluid hover-img' />
            <p className='py-4 lead fw-bold text-center'>A Music Site for an Entertainment Company</p>

          </div>

          <div className="col-sm-6">
            <img src={HealthSite} alt="cloudknod" className='img-fluid hover-img' />
            <p className='py-4 lead fw-bold text-center'>A Corporate Healthcare Provider Website Design</p>
          </div>

          <div className="col-sm-6">
          <img src={Telecom} alt="cloudknod" className='img-fluid hover-img' />
            <p className='py-4 lead fw-bold text-center'>A Telecommunication Project Design</p> 
          </div>

          <div className="col-sm-6">
            <img src={TeleHealth} alt="cloudknod" className='img-fluid hover-img' />  
            <p className='py-4 lead fw-bold text-center'>A TeleHealth App for a Medical Healthcare Institute</p>
            </div>
       
        </div>
        
           
      </div>

      {/* Project Section ends */}
      
      {/* Request Consultation */}
      <section className='my-sm-5 my-2' style={{color: '#fff'}} >
        <div className="container p-sm-5 p-4">
          <div className="row">
            <div className="col-sm-9 border-start border-warning development-header">
                <h1 style={{ fontWeight:'bold'}} >Select professional Design Services for your software project.</h1>
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




