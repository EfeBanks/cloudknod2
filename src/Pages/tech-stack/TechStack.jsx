import React from 'react'
import Bg from '../../images/techstack2.jpg';
import Consultation from '../../Components/Consultation';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FrontendDev from '../../Components/views2/FrontendDev';
import BackendDev from '../../Components/views2/BackendDev';
import MobileDev from '../../Components/views2/MobileDev';



export default function Media() {
  const [active, setActive] = React.useState(1);
  const SetView = (active) => {
    setActive(active);
  };

  const ActiveView = () => {
    switch (active) {
      case 1:
        return <FrontendDev/>;
      case 2:
        return <BackendDev />;
      case 3:
        return <MobileDev />;
      default:
        return <FrontendDev />;
    }
  };
  
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
              <div className="androidBg-inner-content p-5">
                <h1 className="container"> A Wide<span className='text-warning'> Tech Stack </span> Software Selection</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

      {/* Techstack section */}
      <div className="containerSpecial consultationBg">
        <div className="row py-4 pb-5 ms-sm-5 ms-2">
            <div className="col-sm pe-5 pb-4">
            <h1 className='content-header fw-bold py-4'>Technologies We Use</h1> 
            <div className="row containerSpecial">
            <div className="col-sm show-btns">
            {/* <div className='btn btn-secondary me-2' onClick={()=> setToggle(!toggle)}> Frontend</div> */}
              <div className='fw-bold row'>
                <div className='col-sm-3 mb-3'>
                <span className='dev-hover py-1 ' onClick={()=> SetView(1)}>FRONT-END DEVELOPMENT</span> 
                </div>

                <div className='col-sm-3 mb-3'>
                <span className='dev-hover py-1 col-sm-4' onClick={()=> SetView(2)}>BACK-END DEVELOPMENT</span> 
                </div>

                <div className='col-sm-3 mb-3'>
                <span className='dev-hover py-1' onClick={()=> SetView(3)}>MOBILE APP DEVELOPMENT</span>
                </div>
                </div> 
            </div>
          </div>
          {ActiveView()}
            
            </div>

        </div>
      </div>

      {/* Techstack section ends */}
      
            {/* Request Consultation */}
            <section className='my-5' style={{color: '#fff'}} >
        <div className="container p-5">
          <div className="row">
            <div className="col-sm-9 border-start border-warning development-header">
                <h1 style={{ fontWeight:'bold'}} >Select professional IT services for your software development project.</h1>
            </div>
            <div className="col-sm ms-4 d-flex align-items-center ">
              <button className='btn btn-warning request2 p-sm-3 p-2 fw-bold'>Request Services</button>
            </div>
          </div>
        </div>
        </section>
         {/* Request Consultation ends */}

      {/* Cloudknod's Guarantee section */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row py-5 mx-sm-5 mx-2">
              <div className="col ">
                <h1 className='content-header fw-bold py-4 px-3'>Cloudknod's Guarantee</h1>
                <p className="lead px-3">Cloudknod, a custom software development vendor and consulting partner, our team is known for:</p>
                
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-5 mx-sm-5 mx-2">
              <div className="col-sm-6 ">
              
                <div className=" px-sm-3">
                  <h4 className='pt-3 fw-bold'> Professional practices </h4>
                  <p>In order to practice and maintain up-to-date approaches and implement modern projects, our specialists are regularly skilled and certified by the most trusted and progressive entities.</p>
                </div>
              </div>

              <div className="col-sm-6">
              
                <div className=" px-sm-3">
                  <h4 className='pt-3 fw-bold'>Individual approach</h4>
                  <p>At Cloudknod, we build tailor-made software solutions for our clients. We seek to employ and allocate IT specialists with both the hard and soft skills required to seamlessly integrate with your in-house team.</p>
                </div>
              </div>

              <div className="col-sm-6 py-sm-4">
              
                <div className="px-sm-3">
                  <h4 className='pt-3 fw-bold'>Strategic development partner</h4>
                  <p>The referrals we get from our customers prove our reliability and dedication. After your IT project is completed, we will be happy to provide ongoing support and maintenance, upgrade existing solutions, and implement new ones.</p>
                </div>
              </div>

              <div className="col-sm-6  py-sm-4 ">
              
                <div className="px-sm-3">
                  <h4 className='pt-3 fw-bold'>Customer trust</h4>
                  <p>Thanks to our highly skilled developers, high professional standards, effective workflows, and focus on quality, we have earned trust and satisfied over 500 customers and still counting.</p>
                </div>
              </div>

             </div>
             </div>  
      {/* Cloudknod's Guarantee section ends*/}

        {/* Consultation section */}
        <Consultation />
        {/* Consultation section ends*/}


    </div>
  )
}


