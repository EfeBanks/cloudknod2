import React from 'react'
import Bg from '../../../images/programmingBg2.jpg';
import Consultation from '../../../Components/Consultation';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import W1 from '../../../images/w1.jpg';
import W2 from '../../../images/w2.jpg';
import W3 from '../../../images/w3.jpg';
import FoodSite from '../../../images/noblenourish.jpg';
import HealthSite from '../../../images/healthwebsite.jpg';
import { Link } from 'react-router-dom';



export default function Services() {
  
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
                <h1 className="container"><span className='text-warning'> Web  </span>Development Company</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

      {/* Statistics */}
      <div className="containerSpecial consultationBg">
        <div className="row py-5 mx-sm-5 mx-2">
            <div className="col-sm-4">
            <h2 className=' fw-bold py-sm-4 py-2 mt-sm-5 mt-2'>Comprehensive Web Development Services of a high standard </h2>
            </div>
            <div className="col-sm-8 ps-2">
              
            <div className="row py-sm-4 py-2">

              <div className="col-sm me-2 hoverlay-container">
                <img src={W1} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-sm-3 px-1">
                  <h4 className='pt-3'>270+ Web Projects</h4>
                  <p>Cloudknod's ability to align all stakeholders and concentrate resources properly is reflected in our extended portfolio of projects related to Custom Web Development Services.</p>
                </div>
              </div>

              <div className="col-sm  me-2 hoverlay-container ">
                <img src={W2} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-sm-3 px-1">
                  <h4 className='pt-3'>200+ Web Experts </h4>
                  <p>Being a trusted web development company, we deliver every aspect of a web project: web design, development, testing, and more. </p>
                </div>
              </div>

              <div className="col-sm me-2 hoverlay-container ">
                <img src={W3} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-sm-3 px-1">
                  <h4 className='pt-3'>100+ UI/UX Web Experts</h4>
                  <p>Working with our Web development experts means getting a state-of-the-art UI covering the overall design with optimized layouts.</p>
                </div>
              </div>
            </div>

            </div>
        </div>
      </div>

      {/* Statistics ends */}

      {/* Services we provide */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row py-sm-5 py-2 mx-sm-5 mx-2">
              <div className="col ">
                <h1 className='content-header fw-bold py-4 px-3'>Cloudknod’s Web Development Services</h1>
          </div>
          

          <div className="row py-sm-4 py-2">
                <div className="col-sm-6 fw-bold lead">
                  <div className='p-3 mb-2 ' style={{backgroundColor:'#fafafa'}}>Web Design</div>
                  <div className='p-3 mb-2 ' style={{backgroundColor:'#fafafa'}}>Cloud Web</div>
                  <div className='p-3 mb-2 ' style={{backgroundColor:'#fafafa'}}>Web App Development</div>
                  <div className='p-3 mb-2 ' style={{backgroundColor:'#fafafa'}}>Web Quality Assurance</div>
                  

                </div>

                <div className="col-sm-6 fw-bold lead">
                  <div className='p-3 mb-2 ' style={{backgroundColor:'#fafafa'}}>Web Integration</div>
                  <div className='p-3 mb-2 ' style={{backgroundColor:'#fafafa'}}> Web Optimization</div>
                  <div className='p-3 mb-2 ' style={{backgroundColor:'#fafafa'}}>Support and Maintenance</div>

                </div>
                
              </div>
          </div>
        </div>

        
        {/* Services we provide ends */}


      {/* Web Dev section */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row py-sm-5 py-2 mx-sm-5 mx-2">
              <div className="col ">
                <h1 className='content-header fw-bold py-4 px-3'>Cloudknod's Web Development Case Studies</h1>
                <p className="lead px-3">As a custom web development company, we provide a full range of services to create best-in-class software solutions for your business that perfectly meet your needs. The results are reflected in our case studies.</p>
                
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-sm-5 pb-2">
          <div className="col-sm-6">
            <img src={FoodSite} alt="cloudknod" className='img-fluid hover-img' />
            <p className='py-4 lead fw-bold text-center'>Website for a Food Distribution Company</p>

          </div>

          <div className="col-sm-6">
            <img src={HealthSite} alt="cloudknod" className='img-fluid hover-img' />
            <p className='py-4 lead fw-bold text-center'>A Corporate Healthcare Provider Website Design</p>
            
          </div>
       
        </div>
      </div>  
      {/* Web Dev section ends*/}

      
      {/* Request Consultation */}
      <section className='my-5' style={{color: '#fff'}} >
        <div className="container p-5">
          <div className="row">
            <div className="col-sm-9 border-start border-warning development-header">
                <h1 style={{ fontWeight:'bold'}} >Select professional web developers for your software development project.</h1>
            </div>
            <div className="col-sm ms-4 d-flex align-items-center ">
              <Link to='/ContactForm'>
                <button className='btn btn-warning request p-sm-3 p-2 fw-bold ms-2'>Request Services</button>
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



