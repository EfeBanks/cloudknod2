import React from 'react'
import Bg from '../../../images/automotive.jpg';
import A1 from '../../../images/a1.jpg';
import A2 from '../../../images/a2.jpg';
import A3 from '../../../images/a3.jpg';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Consultation from '../../../Components/Consultation';
import Button from 'react-bootstrap/Button';


export default function Automotive() {
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
                <h1 className="container"><span className='text-warning'>Automotive</span> Software Development</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

      {/* Statistics */}
      <div className="containerSpecial consultationBg">
        <div className="row py-sm-5 py-2 mx-sm-5 mx-2">
            <div className="col-sm-4">
            <h2 className=' fw-bold py-sm-4 py-2 mt-sm-5 mt-2'>Advanced Automotive Software Development Services </h2>
            </div>
            <div className="col-sm-8 ps-2">
              
            <div className="row py-sm-4 py-2">

              <div className="col-sm me-2 hoverlay-container">
                <img src={A1} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-sm-3 px-1">
                  <h4 className='pt-3'>20+ Successful Projects</h4>
                  <p>Being a trusted vendor of Automotive Software Development Services, Cloudknod builds Automotive IT softwares, IoT and Connectivity apps etc.</p>
                </div>
              </div>

              <div className="col-sm  me-2 hoverlay-container ">
                <img src={A2} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-sm-3 px-1">
                  <h4 className='pt-3'>30+ Automotive Software Engineers </h4>
                  <p>As a leading software development company, Cloudknod employs both knowledgeable and skilled experts with industry-specific expertise. </p>
                </div>
              </div>

              <div className="col-sm me-2 hoverlay-container ">
                <img src={A3} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-am-3 px-1">
                  <h4 className='pt-3'>12 Years of Experience</h4>
                  <p>Over the last 12 years, our team has gained experience in Automotive Software Solutions.</p>
                </div>
              </div>
            </div>

            </div>
        </div>
      </div>

      {/* Statistics ends */}

      {/* Request Consultation */}
      <div className="containerSpecial consultationBg mt-3">
        <div className="row py-4 pb-5 ms-sm-5 ms-2">
            <div className="col-sm-9 pe-sm-5 pe-2 pb-sm-4 pb-2">
            <h2 className=' fw-bold pt-5 mt-sm-5 mt-2'>Whatever your software challenge is, our IT solution experts are ready to help you. Schedule a free online consultation. </h2>
    
            <Button variant="warning" className='request slider-btn btn btn-lg mt-sm-4 mt-1'>
                  Request Consultation
              </Button> 
            </div>
        </div>
      </div>

      {/* Request Consultation ends */}


      {/* Why Automotive section */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row py-sm-5 py-2 mx-sm-5 mx-2">
              <div className="col ">
                <h1 className='content-header fw-bold py-sm-4 py-2'>Why do Automotive customers choose Cloudknod</h1>
                
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-sm-5 pb-2 mx-sm-5 mx-2">
              <div className="col-sm-6 ">
              
                <div className=" px-sm-3 px-1">
                  <h4 className='pt-3 fw-bold'>In-depth Automotive expertise </h4>
                  <p className='justify-text'>At Cloudknod, we pride ourselves on our deep understanding of the automotive industry. Andersen's team is comprised of experts with extensive knowledge of the sector and its needs, which allows our company to develop solutions tailored to the unique challenges and opportunities you face in your Automotive business.</p>
                </div>
              </div>

              <div className="col-sm-6">
              
                <div className=" px-sm-3 px-1">
                  <h4 className='pt-3 fw-bold'>Robust data security</h4>
                  <p className='justify-text'> For security reasons, we maintain restricted access to labs exclusively for particular project employees, ensuring the utmost confidentiality of customer info within Andersen. All our automotive solutions are fortified with state-of-the-art security measures.</p>
                </div>
              </div>

              <div className="col-sm-6">
              
                <div className="px-sm-3 px-1">
                  <h4 className='pt-3 fw-bold'>Tailored solutions</h4>
                  <p className='justify-text'>At Cloudknod, we take pride in our personalized approach to crafting adaptable solutions, collaborating with you to meet your current needs and future-proof your business in the constantly changing automotive landscape.</p>
                </div>
              </div>

              <div className="col-sm-6 ">
              
                <div className="px-sm-3 px-1">
                  <h4 className='pt-3 fw-bold'>Effective onboarding</h4>
                  <p className='justify-text'>At Cloudknod, our expert onboarding practices ensure seamless integration of IT specialists into Automotive tech projects. Clear guidelines, thorough training, and access to the right resources make our staff members valuable and high-performing contributors. This efficiency saves you time and resources, propelling your initiatives to more ambitious heights.</p>
                </div>
              </div>

             </div>
             </div>
             {/* Why Automotive section ends*/}

            {/* Request Consultation */}
         <section className='my-5' style={{color: '#fff'}} >
        <div className="container p-5">
          <div className="row">
            <div className="col-sm-9 border-start border-warning development-header">
                <h1 style={{ fontWeight:'bold'}} >Select professional IT services for your software development project.</h1>
            </div>
            <div className="col-sm ms-4 d-flex align-items-center ">
              <button className='btn btn-warning request p-2 btn btn-lg'>Request Services</button>
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
