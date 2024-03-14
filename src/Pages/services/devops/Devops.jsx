import React from 'react'
import Bg from '../../../images/bg2.jpg';
import Consultation from '../../../Components/Consultation';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Dev1 from '../../../images/Dev1.jpg';
import Dev2 from '../../../images/dev2.jpg';
import Dev3 from '../../../images/dev3.jpg';
import { Link } from 'react-router-dom';



export default function Devops() {
  
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
                <h1 className="container"><span className='text-warning'> DevOps  </span>Services</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

      
      {/* Statistics */}
      <div className="containerSpecial consultationBg">
        <div className="row py-sm-5 py-2 mx-sm-5 mx-2">
            <div className="col-sm-4">
            <h2 className=' fw-bold py-4 mt-sm-5 mt-3'>Excellent quality and delivery with our DevOps Experts</h2>
            </div>
            <div className="col-sm-8 ps-2">
              
            <div className="row py-sm-4 py-2">

              <div className="col-sm me-2 hoverlay-container">
                <img src={Dev1} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>40+ DevOps Specialists</h4>
                  <p>Cloudknod as an expert DevOps company offers a rich talent pool to ensure considerably accelerated software deployment and delivery</p>
                </div>
              </div>

              <div className="col-sm  me-2 hoverlay-container ">
                <img src={Dev2} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                <h4 className='pt-3'>20+ Certified DevOps Engineers </h4>
                <p>Cloudknod's team of DevOps engineers is notable for their high level of technology and process management expertise and hands-on experience
                  </p>
                </div>
              </div>

              <div className="col-sm me-2 hoverlay-container ">
                <img src={Dev3} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>200+ DevOps Projects </h4>
                  <p>Our DevOps services company has helped numerous customers across many industries with their DevOps processes.</p>
                 
                 </div>
              </div>
            </div>

            </div>
        </div>
      </div>

      {/* Statistics ends */}

      {/* Cloudknod's Guarantee section */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row py-sm-5 py-2 mx-sm-5 mx-2">
              <div className="col ">
                <h1 className='content-header fw-bold py-4 px-3'>The Crucial Benefits of DevOps</h1>
                
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-sm-5 pb-2 mx-sm-5 mx-2">
              <div className="col-sm-4 ">
              
                <div className=" px-3">
                  <h4 className='pt-sm-3 pt-1 fw-bold'> Quicker time-to-market </h4>
                  <p>Better performance and greater cost-efficiency of your in-house corporate software development, tuning, and deployment processes;</p>
                  <p>Quicker and simpler implementation of upgrades and new features with seamless and continuous delivery of new versions and releases;</p>
                  <p>Boosted market and business potential of your growing and planned IT projects owing to higher levels of scalability.</p>
                </div>
              </div>

              <div className="col-sm-4">
              
                <div className=" px-3">
                  <h4 className='pt-3 fw-bold'>Dependable hypotheses</h4>
                  <p>Streamlined ways to test your hypotheses to avoid counterproductive risks and unnecessary spending;</p>
                  <p>Cost-effective and timely changes are introduced to your plans as a result of the increased information awareness;</p>
                  <p>Optimized software deployment with well-adjusted timeframes is enabled thanks to proactive actions and valuable insights.</p>
                </div>
              </div>

              <div className="col-sm-4">
              
                <div className="px-3">
                  <h4 className='pt-3 fw-bold'>Improved Testability</h4>
                  <p>Comprehensive and constant QA coverage of your entire software development and deployment cycle ensures the best possible user satisfaction rates;</p>
                  <p>Disaster recovery plans keep you prepared to deal with negative external and internal factors to secure business continuity;</p>
                  <p>DevOps Audit Service is provided to deeply assess the quality of your software engineering practices and infrastructures and generate recommendations.</p>
                </div>
              </div>

             </div>
             </div>  
      {/* Cloudknod's Guarantee section ends*/}

      
      {/* Request Consultation */}
      <section className='my-sm-5 my-3' style={{color: '#fff'}} >
        <div className="container p-5">
          <div className="row">
            <div className="col-sm-9 border-start border-warning development-header">
                <h1 style={{ fontWeight:'bold'}} >Schedule a call to assess and discuss your DevOps development needs.</h1>
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

         {/* Expert Dev section */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row py-sm-5 py-2 mx-sm-5 mx-2">
              <div className="col">
                <h1 className='content-header fw-bold py-4 px-3'>The expertise we offer at our DevOps development company</h1>
                
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-sm-5 pb-2 mx-sm-5 mx-2">
              <div className="col-sm-4 ">
                <div className="p-4 gray-bg">                  
                  <h4 className='pt-3 fw-bold'> Monitoring </h4>
                  <p>Proper monitoring of your technology and business metrics is ensured by our DevOps company so that you are informed about ongoing processes, foresee the system's behavior, and prevent issues.</p>
                </div>
              </div>

              <div className="col-sm-4 ">            
                <div className=" p-4 gray-bg">
                  <h4 className='pt-3 fw-bold'> Disaster Recovery </h4>
                  <p>Assisting you with implementing a business continuity policy so that all recovery plans are in place before incidents occur. In addition, incident response training is held.</p>
                </div>
              </div>

              <div className="col-sm-4">
              <div className="p-4 gray-bg">        
                  <h4 className='pt-3 fw-bold'>Configurations</h4>
                  <p>The Infrastructure as Code approach and version-based configuration management practiced by Cloudknod minimize errors, reduce costs, and automate routines.</p>
                </div>
                
              </div>

              <div className="col-sm-4 py-sm-4 py-0 ">             
                <div className="p-4 gray-bg">
                  <h4 className='pt-3 fw-bold'>Troubleshooting</h4>
                  <p>As a DevOps outsourcing company, we are quick to find and fix any errors in your code and infrastructure and assist your developers with avoiding potential issues.</p>
                </div>
              </div>

              <div className="col-sm-4 py-sm-4 py-0">
              <div className="p-4 gray-bg">
                <h4 className='pt-3 fw-bold'>Continous Integration</h4>
                <p> Organizing and automating the integration and deployment processes to accelerate the deployment timeline and improve product quality.</p>
              </div>
                
              </div>

              <div className="col-sm-4 py-sm-4 py-0">
              <div className="p-4 gray-bg">
                  <h4 className='pt-3 fw-bold'> Security  </h4>
                  <p>By helping you to introduce DevSecOps practices, we enable you to maintain reliable security development lifecycles, reduce costs, and increase safety.</p>
                </div>
                
              </div>

             </div>
             </div>  
      {/* Expert Dev section ends*/}



        {/* Consultation section */}
         <Consultation />
        {/* Consultation section ends*/}

    </div>
  )
}



