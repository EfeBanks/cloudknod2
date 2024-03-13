import React from 'react'
import Bg from '../../../images/BAbg2.jpg';
import { Link } from 'react-router-dom';
import Consultation from '../../../Components/Consultation';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Ban1 from '../../../images/bana1.jpg';
import Ban2 from '../../../images/bana2.jpg';
import Ban3 from '../../../images/bana3.jpg'



export default function BusinessAnalysis() {
  
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
                <h1 className="container"><span className='text-warning'>Business Analysis </span>Services</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

        {/* Statistics */}
        <div className="containerSpecial consultationBg">
        <div className="row py-sm-5 py-2 mx-sm-5 mx-2">
            <div className="col-sm-4">
            <h2 className=' fw-bold py-sm-4 py-2 mt-5'>Optimize your business flows with our Business Analysts</h2>
            </div>
            <div className="col-sm-8 ps-2">
              
            <div className="row py-sm-4 py-2">

              <div className="col-sm me-2 hoverlay-container">
                <img src={Ban1} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>100+ BA Specialists</h4>
                  <p>Cloudknod's Business Analysts are experts in major industries – from FinTech and Healthcare to Retail and Logistics.</p>
                </div>
              </div>

              <div className="col-sm  me-2 hoverlay-container ">
                <img src={Ban2} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                <h4 className='pt-3'>15% Cost Reduction </h4>
                <p>Our Business Analysts ensures the continuous work of all team members, compresses the time-to-market cycle, reduces costs, and improves product quality.</p>
                </div>
              </div>

              <div className="col-sm me-2 hoverlay-container ">
                <img src={Ban3} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                <h4 className='pt-3'>99% User-centered Approach</h4>
                  <p>The company's Business Analysis specialists conduct benchmarking and define target audiences, helping to build software that fully meets your needs.</p>
                
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
                <h1 className='content-header fw-bold py-4 px-3'>Cloudknod's Business Analysis Services</h1>
                <div className="col-sm-6 fw-bold lead">
                  <div className='p-3 mb-2' style={{backgroundColor:'#fafafa'}}>Pre-Development Services</div>
                  <div className='p-3 mb-2' style={{backgroundColor:'#fafafa'}}>Discovery Phase Services</div>
                  <div className='p-3 mb-2' style={{backgroundColor:'#fafafa'}}>Project Documentation</div>
                  <div className='p-3 mb-2' style={{backgroundColor:'#fafafa'}}>Compliance Services</div>
                </div>

                <div className="col-sm-6 fw-bold lead">
                  <div className='p-3 mb-2' style={{backgroundColor:'#fafafa'}}>Project Audit</div>
                  <div className='p-3 mb-2' style={{backgroundColor:'#fafafa'}}>BA Consultancy</div>
                  <div className='p-3 mb-2' style={{backgroundColor:'#fafafa'}}>End-to-End Project Support and Supervision</div>
                </div>
  
          </div>
        </div>
       
        {/* Services we provide ends */}


      {/* BA Roles section */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row pt-sm-5 pt-2 mx-sm-5 mx-2">
              <div className="col ">
                <h1 className='content-header fw-bold py-4 px-sm-3 px-1'>The variety of Business Analysis roles we provide</h1>
                <p className=" px-3">Cloudknod offers BA professionals who differ in areas of responsibilities and approaches to solving project issues.</p>
  
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-sm-5 pb-2 mx-sm-5 mx-2">
              <div className="col-sm-4 ">
              
                <div className=" px-3">
                  <h4 className='pt-3 fw-bold'> Business Analyst </h4>
                  <p>Cloudknod's Business Analysts have experience with various projects, helping our customers resolve their project issues, perform solution reviews, and ensure business process optimization. You can select appropriate experts and add value to your project in order to reach your business goals.</p>
                  <ul style={{lineHeight:'2.5rem'}}>
                    <li>Requirements Engineers;</li>
                    <li>Technical Writers;</li>
                    <li>Domain Experts.</li>
                    <li>Proxy product owners.</li>
                  </ul>

                  </div>
              </div>

              <div className="col-sm-4">
              
                <div className=" px-3">
                <h4 className='pt-3 fw-bold'> System Analyst </h4>
                <p>Cloudknod's System Analysts assume such responsibilities as support for developers and QA engineers, solution architecture and service integration design, database structure development, backlog filling, and release management.</p>
                  <ul style={{lineHeight:'2.5rem'}}>
                    <li>Technical Solution Analysts;</li>
                    <li>System Design Analysts;</li>
                    <li>Database Analysts;</li>
                    <li>Integration and Microservice Analysts.</li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-4">
              
                <div className="px-3">
                <h4 className='pt-3 fw-bold'> Product Owner </h4>
                <p>Collaborate with our top-notch POs to develop and communicate a clear and consistent product vision, conduct different types of customer and user research, and fill and manage your product backlog.</p>
                  <ul style={{lineHeight:'2.5rem'}}>
                    <li>Technical Product Owners;</li>
                    <li>Product Analysts;</li>
                    <li>Product Manager Assistants.</li>
                  </ul>
                </div>
              </div>

             </div>
             </div>  
      {/* BA Roles ends*/}

      
      {/* Request Consultation */}
      <section className='my-sm-5 my-3' style={{color: '#fff'}} >
        <div className="container p-5">
          <div className="row">
            <div className="col-sm-9 border-start border-warning development-header">
                <h1 style={{ fontWeight:'bold'}} >Request a 30-minute Business Analysis and Technology consultation</h1>
            </div>
            <div className="col-sm ms-4 d-flex align-items-center ">
            <Link to='/ContactForm'>
              <button className='btn btn-warning request p-3 fw-bold'>Request Consultation</button>
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



