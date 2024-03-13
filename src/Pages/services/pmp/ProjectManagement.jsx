import React from 'react'
import Bg from '../../../images/bg1.jpg';
import Consultation from '../../../Components/Consultation';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Pr1 from '../../../images/pr1.jpg';
import Pr2 from '../../../images/pr2.jpg';
import A3 from '../../../images/a3.jpg'
import { Link } from 'react-router-dom';



export default function ProjectManagement() {
  
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
                <h1 className="container">Agile IT <span className='text-warning'> Project Management </span>Services</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

      {/* Statistics */}
      <div className="containerSpecial consultationBg">
        <div className="row py-sm-5 py-2 mx-sm-5 mx-2">
            <div className="col-sm-4">
            <h2 className=' fw-bold py-4 mt-sm-5 mt-3'>Excellent quality and delivery with our IT Project Management Experts</h2>
            </div>
            <div className="col-sm-8 ps-2">
              
            <div className="row py-4">

              <div className="col-sm me-2 hoverlay-container">
                <img src={Pr1} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>70+ Project Managers</h4>
                  <p>Cloudknod’s team provides IT Project Management as a Service to plan your operations, optimize resources, and secure the ultimate success.</p>
                </div>
              </div>

              <div className="col-sm  me-2 hoverlay-container ">
                <img src={Pr2} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                <h4 className='pt-3'>20+ Projects Delivered </h4>
                <p>In order to deliver value, Cloudknod's pool of IT Project Managers apply the best benchmarks and Management 3.0 methodologies.
                  </p>
                </div>
              </div>

              <div className="col-sm me-2 hoverlay-container ">
                <img src={A3} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>12 Years of Experience </h4>
                  <p>Over the last 12 years, our team has been able to manage the Projects of Customers and also increased customers' satisfaction.</p>
                 
                 </div>
              </div>
            </div>

            </div>
        </div>
      </div>

      {/* Statistics ends */}


      {/* PM Services section */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row py-sm-5 py-2 mx-sm-5 mx-2">
              <div className="col ">
                <h1 className='content-header fw-bold py-4 px-sm-3 px-1'>Achieve success with IT Project Management Services</h1>
                <p className="px-sm-3 px-1">Depending on your needs, you can implement or facilitate your corporate IT initiatives via Cloudknod’s Project Management Expertise and Services.</p>
                
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-sm-5 pb-2 mx-sm-5 mx-2">
              <div className="col-sm-4 ">
              
                <div className="px-sm-3 px-1">
                  <h4 className='pt-3 fw-bold'> Accurate Assessment of IT Needs </h4>
                  <p>Get exactly what you need to succeed in the extremely competitive environment with our professional outlook to reduce costs and get things done properly.</p>
                </div>
              </div>

              <div className="col-sm-4">
              
                <div className=" px-sm-3 px-1">
                  <h4 className='pt-3 fw-bold'>Effective Resource Planning Practices</h4>
                  <p>Enhance your planning processes and transform the way you envision the Agile implementation of your ambitious initiatives in the technology domain.</p>
                </div>
              </div>

              <div className="col-sm-4">
              
                <div className="px-sm-3 px-1">
                  <h4 className='pt-3 fw-bold'>Robust Team Assembly and Management</h4>
                  <p>Cloudknod's professionals get things done by assigning well-thought-out tasks and applying elaborate metrics to drive your IT project team performance with Agile Project Management.</p>
                </div>
              </div>

             </div>
             </div>  
      {/* PM Services section ends*/}

      {/* Expert PM section */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row py-sm-5 py-2 mx-sm-5 mx-2">
              <div className="col">
                <h1 className='content-header fw-bold py-4 px-sm-3 px-1'>Cloudknod's Expertise in IT Project Management</h1>
                
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-sm-5 pb-2 mx-sm-5 mx-2">
              <div className="col-sm-4 ">
                <div className="p-4 gray-bg">
                  <h4 className='pt-sm-3 pt-1 fw-bold'>Project Management Consultancy</h4>
                  <p>Contact us to get access to a source of excellent project management knowledge, professional advice, methodology guidelines, and more.</p>
                </div>
              </div>

              <div className="col-sm-4 ">            
                <div className=" p-4 gray-bg">
                  <h4 className='pt-3 fw-bold'> Project Portfolio Management </h4>
                  <p>Cloudknod’s IT Project Managers will assist you with concept generation, investment in promising projects, and the delivery of outstanding results via PPM.</p>
                </div>
              </div>

              <div className="col-sm-4">
              <div className="p-4 gray-bg">        
                  <h4 className='pt-3 fw-bold'>Project Management and Process Optimization</h4>
                  <p>Streamline your IT project management processes to save resources and deliver more value with Cloudknod’s top-notch Project Management experts.</p>
                </div>
                
              </div>

              <div className="col-sm-4 py-sm-4 py-0 ">
              
                <div className="p-4 gray-bg">
                  <h4 className='pt-3 fw-bold'> Project Scoping and Delivery </h4>
                  <p>Proper and accurate project management estimates are the key prerequisite for cost-effective, competitive, and productive operations.</p>
                </div>
              </div>

              <div className="col-sm-4 py-sm-4 py-0">
              <div className="p-4 gray-bg">
                <h4 className='pt-3 fw-bold'>Change Management</h4>
                <p> If you need to transform the way your business operates, delivers value, and meets challenges via IT solutions, our Project Management experts are here to help.</p>
              </div>
                
              </div>

              <div className="col-sm-4 py-sm-4 py-0">
              <div className="p-4 gray-bg">
                  <h4 className='pt-3 fw-bold'> PMaaS  </h4>
                  <p>PMaaS is the most expedient and flexible way to ensure proper project implementation with a dedicated IT Project Manager at your disposal.</p>
                </div>
                
              </div>

             </div>
             </div>  
      {/* Expert PM section ends*/}


      
      {/* Request Consultation */}
      <section className='my-5' style={{color: '#fff'}} >
        <div className="container p-5">
          <div className="row">
            <div className="col-sm-9 border-start border-warning development-header">
                <h1 style={{ fontWeight:'bold'}} >Select professional IT services for your software development project.</h1>
            </div>
            <div className="col-sm ms-5 d-flex align-items-center ">
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



