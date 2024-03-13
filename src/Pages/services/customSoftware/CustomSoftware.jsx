import React from 'react'
import Bg from '../../../images/programming2.jpg';
import Consultation from '../../../Components/Consultation';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Cu1 from '../../../images/cu1.jpg';
import Cu2 from '../../../images/cu2.jpg';
import Cu3 from '../../../images/cu3.jpg';
import MusicSite from '../../../images/music-site.jpg';
import MusicSite2 from '../../../images/music-site2.jpg';
import TeleHealth from '../../../images/telehealth.jpg';
import Ecomm from '../../../images/ecom.png';
import { Link } from 'react-router-dom';


export default function CustomSoftware() {
  
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
                <h1 className="container"><span className='text-warning'> Custom Software </span>Development Services</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

       {/* Statistics */}
       <div className="containerSpecial consultationBg">
        <div className="row py-5 mx-sm-5 mx-2">
            <div className="col-sm-4">
            <h2 className=' fw-bold py-sm-4 py-2 mt-sm-5 mt-2'>Custom software development partner for complex tech needs</h2>
            </div>
            <div className="col-sm-8 ps-2">
              
            <div className="row py-sm-4 py-2">

              <div className="col-sm me-2 hoverlay-container">
                <img src={Cu1} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-sm-3 px-1">
                <h4 className='pt-3'>800+ IT Projects Delivered </h4>
                <p>Cloudknod's custom software delivery expertise has delivered software solutions to various industries such as Healthcare, Finance, Logistics, and more.
                  </p>
                </div>
              </div>

              <div className="col-sm  me-2 hoverlay-container ">
                <img src={Cu2} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-sm-3 px-1">
                <h4 className='pt-3'>500+ IT Experts </h4>
                <p>Cloudknod's team has over 500 IT professionals who are experienced and certified delivering custom software solutions to meet our clients' needs.
                  </p>
                </div>
              </div>

              <div className="col-sm me-2 hoverlay-container ">
                <img src={Cu3} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-sm-3 px-1">
                  <h4 className='pt-3'>700+ Satisfied Customers</h4>
                  <p>Let us be your trusted custom software development partner. Over the years, we have successfully delivered custom software solutions to customers worldwide.</p>
                 </div>
              </div>
            </div>

            </div>
        </div>
      </div>

      {/* Statistics ends */}

      {/* Your needs section */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row py-5 mx-sm-5 mx-2">
              <div className="col ">
                <h1 className='content-header fw-bold py-4'>We Know your Needs </h1>
                <p className="">Cloudknod understands and caters to the unique needs of its diverse customers. Our vast record of projects across all possible setups has given us the knowledge that the challenges and risks to be tackled via a custom development project will vary significantly.</p>
                
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-sm-5 pb-2 mx-sm-5 mx-2" style={{textAlign:"justify"}}>
              <div className="col-sm-4">
              
                <div className=" px-sm-3 px-1">
                  <h4 className='pt-3 fw-bold'> Startups </h4>
                  <p>Launching a digital product takes a toll in both business and tech terms. If you want to focus on more meaningful aspects, working with a dependable IT partner for tech tasks is a must. Cloudknod's team will build your MVP and validate the product hypothesis on time and within budget.</p>
                </div>
              </div>

              <div className="col-sm-4">
              
                <div className=" px-sm-3 px-1">
                  <h4 className='pt-3 fw-bold'>Small and Midsize Enterprises</h4>
                  <p>SME customers approach Cloudknod to get help with robust workplaces for agents, self-service solutions, legacy systems to continue doing business effectively, user interfaces for great UX and high client satisfaction rates, etc.</p>
                </div>
              </div>

              <div className="col-sm-4">
              
                <div className="px-sm-3 px-1">
                  <h4 className='pt-3 fw-bold'>Enterprises</h4>
                  <p>Cloudknod helps customers with legacy software issues, creates outstanding user interfaces for UX to outcompete your rivals, adds new product capabilities to existing environments, and ensures continuity, cost optimization, and modernization, thus revealing new opportunities.</p>
                </div>
              </div>

             </div>
             </div>
             {/* Your needs section ends*/}

      
      {/* Cross Platform service section */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row py-sm-5 py-2 mx-sm-5 mx-2">
              <div className="col">
                <h1 className='content-header fw-bold py-4 px-sm-3 px-1'>We are Experts in the following Software types</h1>
                
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-sm-5 pb-2 mx-sm-5 mx-2">
              <div className="col-sm-4 ">
                <div className="p-sm-4 p-2 gray-bg">
                  <h4 className='pt-sm-3 pt-1 fw-bold'> Website Development </h4>
                  <p>We provide Clients with modern mobile solutions featuring convenient UI to interact with your company. Cloudknod will build great software solutions to meet your needs.</p>
                  
                </div>
              </div>

              <div className="col-sm-4 ">            
                <div className=" p-sm-4 p-2 gray-bg">
                  <h4 className='pt-3 fw-bold'>Web Apps and Portals</h4>
                  <p>Web portals and apps enabling your clients to consume products and services with a great UX, client representatives to work with clients, and back office teams to perform their functions.</p>
                </div>
              </div>

              <div className="col-sm-4">
              <div className="p-sm-4 p-2 gray-bg">
                  <h4 className='pt-3 fw-bold'> Back-end </h4>
                  <p>Cloudknod will help you shape the core business logic of your company and provide dependable Back-end systems for it – either fully custom or partially ready platform-based.</p>
                </div>
                
              </div>

              <div className="col-sm-4 py-sm-4 py-0 ">
              
                <div className="p-sm-4 p-2 gray-bg">
                  <h4 className='pt-3 fw-bold'>UI/UX Design</h4>
                  <p>Your end-clients will like the visually stunning and user-friendly designs of your software products with Cloudknod's experts.</p>
                </div>
              </div>

              <div className="col-sm-4 py-sm-4 py-0">
              <div className="p-sm-4 p-2 gray-bg">
                <h4 className='pt-3 fw-bold'>Data Platforms</h4>
                <p> Cloudknod's end-to-end expertise in Big Data, Data Science, ML, and popular Cloud Data Platforms is a guarantee that your data is properly gathered, cleansed, transformed and stored.</p>
              </div>
                
              </div>

              <div className="col-sm-4 py-sm-4 py-0">
              <div className="p-sm-4 p-2 gray-bg">
                  <h4 className='pt-3 fw-bold'> Adapters for Legacy Software </h4>
                  <p>In case your legacy systems lag behind and do not function adequately, the custom adapters provided by our team will make sure that all the operating IT systems still meet modern standards.</p>
                </div>
                
              </div>

             </div>
             </div>  
      {/* Cross Platform service section ends*/}

         {/* Project Section */}
         <div className="containerSpecial consultationBg mt-3">
        <div className="row pt-sm-4 pt-2 ms-sm-5 ms-2">
            <div className="col-sm pe-sm-5 pe-3">
            <h1 className='content-header fw-bold py-5'>Some of our Projects</h1>  
            </div>

        </div>
        <div className="row py-sm-5 py-3">
          <div className="col-sm-6">
            <img src={MusicSite} alt="cloudknod" className='img-fluid hover-img' />
            <p className='py-4 lead fw-bold text-center'>A Music Site for an Entertainment Company</p>

          </div>

          <div className="col-sm-6">
            <img src={MusicSite2} alt="cloudknod" className='img-fluid hover-img' />
            <p className='py-4 lead fw-bold text-center'>A Body Fitness and Training School in Ireland</p>
          </div>

          <div className="col-sm-6">
          <img src={Ecomm} alt="cloudknod" className='img-fluid hover-img' />
            <p className='py-4 lead fw-bold text-center'>An online store mobile App</p> 
          </div>

          <div className="col-sm-6 pb-sm-0 pb-3">
            <img src={TeleHealth} alt="cloudknod" className='img-fluid hover-img' style={{height:"80%", width:"100%"}} />  
            <p className='py-4 lead fw-bold text-center'>A TeleHealth App for a Medical Healthcare Institute</p>
            </div>
       
        </div>
        
           
      </div>

      {/* Project Section ends */}

      
      {/* Request Consultation */}
      <section className='my-sm-5 my-3' style={{color: '#fff'}} >
        <div className="container p-5">
          <div className="row">
            <div className="col-sm-9 border-start border-warning development-header">
                <h1 style={{ fontWeight:'bold'}} >Select professional Custom Software Services to match your technology and business goals.</h1>
            </div>
            <div className="col-sm ms-sm-4 ms-2 d-flex align-items-center ">
            <Link to='/ContactForm'>
              <button className='btn btn-warning request p-sm-3 p-2 ms-sm-0 ms-4'>Request Service</button>
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



