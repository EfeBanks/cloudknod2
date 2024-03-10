import React from 'react';
import Bg from '../../../images/bg3.jpg';
import Iosimg from '../../../images/ios.jpg'
import Ios3 from '../../../images/ios3.jpg'
import Ios4 from '../../../images/ios4.jpg'
import C1 from '../../../images/c1.jpg';
import C22 from '../../../images/c22.jpg';
import C3 from '../../../images/c3.jpg';
import C4 from '../../../images/c4.jpg';
import C5 from '../../../images/c5.jpg';
import C6 from '../../../images/c6.jpg';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export default function Ios() {
   // Extracts pathname property(key) from an object
   const { pathname } = useLocation();

   // Automatically scrolls to top whenever pathname changes
   useEffect(() => {
     window.scrollTo(0, 0);
   }, [pathname]);
  return (
    <div className='androidBg'>
       {/* Banner section */}
       <div className="row ">
        <div className='col androidBg-content'>
          <img src={Bg} alt="cloudknod Bg" />
            <div className="container bg-content">
              <div className="androidBg-inner-content p-sm-5 p-2">
                <h1><span className='text-warning'>iOS </span>App Development Services</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

      {/* content section 1*/}
      <div className="container">
      <div className="row py-5 px-2 mt-3">
          <div className="col-sm-4 text">
              <p>In the ever-evolving landscape of mobile technology, iOS remains a premium platform that demands exceptional user experiences. We proudly offer iOS Development Services that are tailored to create captivating and high-performance iOS applications. Leveraging the power of Apple's ecosystem, we are here to turn your app vision into a reality that captivates users and meets your business objectives. 
                 </p>

              <p>
              We have a dedicated team of iOS developers who are passionate about crafting exceptional mobile experiences. We publish your iOS app on the Apple App Store, ensuring that it meets all Apple guidelines and is accessible to your target audience. Our commitment to your success extends beyond launch. 
              </p>
            </div>

            <div className="col-sm-4">
              <img src={Ios3} alt="android development" className='img-fluid'/>
            </div>
            <div className="col-sm-4 text">
              <p>We provide continuous support, updates, and optimization to keep your app secure and up-to-date.
              </p> 
              <p>We are dedicated to delivering iOS applications that not only meet but exceed your expectations. Our iOS Development Services combine creativity, innovation, and technical excellence to create powerful, user-centric mobile applications. Contact us today to discuss your project, and let's embark on a journey to turn your iOS app vision into a reality that resonates with users across the Apple ecosystem. 
              </p>  
              
            </div>
        </div>
      </div>
      {/* content section 1 ends */}

        {/* content section 2 */}
        <section className='contentBg p-4'>
          <div className="container py-5">
            <div className="row">
              <div className="col ">
                <h1 className='content-header fw-bold py-4'>iOS App Development Services <br/>We Offer</h1>
                
              </div>
            </div>

            <div className="row">
              <div className="col-sm-4">
              <div className="card shadow mb-4">
                <img src={Iosimg} className="card-img-top img-fluid " alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Native iOS App Development  </h5>
                  <p className="card-text px-2 py-3 text-justify">Our team specializes in developing native iOS applications that leverage the platform's capabilities fully. This results in high-performance, responsive, and feature-rich apps. </p>
                  
                </div>
              </div>
              </div>

              <div className="col-sm-4">
              <div className="card shadow mb-4">
                <img src={Ios3} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center">App Testing and Quality Assurance </h5>
                  <p className="card-text p-3 text-justify">Quality is paramount to us. Rigorous testing and quality assurance processes are followed to identify and rectify any issues, guaranteeing a bug-free and user-friendly app. </p>
                  
                </div>
              </div>
              </div>

              <div className="col-sm-4">
              <div className="card shadow mb-4">
                <img src={Ios4} className="card-img-top img-fluid " alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center">App Optimization  </h5>
                  <p className="card-text p-3 text-justify">We continuously monitor and optimize your app's performance, ensuring it operates at peak efficiency and remains competitive in the iOS ecosystem. </p>
                  
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>
          {/* content section 2 ends */}

          {/* content section 3*/}
        <div className="container py-5">
          <div className="row">
              <div className="col ">
                <h1 className='content-header fw-bold py-4'>Our Development Process </h1>
                <p>We follow a well-defined development process that ensures the success of your projects. This standardized approach guarantees consistency and quality, regardless of the service you choose. </p>
                
              </div>
            </div>

            {/* inner content */}
            <div className="row pt-4 pb-2">
              <div className="col-sm me-2 hoverlay-container shadow">
                {/* <h2>Requirement Analysis</h2> */}
                <img src={C1} alt="cloudknod" className='img-fluid hover-image' />
                {/* <div className='front-text'><h2>Requirement Analysis</h2></div> */}
              
                <div className="hoverlay text-center px-3">
                  <h4 className='pt-3'>Requirement Analysis</h4>
                  <p>We start every project with a thorough analysis of your specific requirements, objectives, and target audience. Understanding your unique needs is key to creating a tailored solution. </p>
                </div>
              </div>

              <div className="col-sm  me-2 hoverlay-container shadow">
                <img src={C22} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay text-center px-3">
                  <h4 className='pt-3'>Design and Prototyping </h4>
                  <p>Our skilled design team creates wireframes and prototypes to visualize the user interface and user experience. This step ensures that the design aligns with your branding and user expectations.  </p>
                </div>
              </div>

              <div className="col-sm me-2 hoverlay-container shadow">
                <img src={C3} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay text-center px-3">
                  <h4 className='pt-3'>Development</h4>
                  <p>Our experienced developers utilize industry best practices and the latest technologies to bring your vision to life. Clean, efficient code is at the core of all our development projects. </p>
                </div>
              </div>
            </div>

          
            <div className="row pt-2 pb-4">
              <div className="col-sm me-2 hoverlay-container shadow">
                <img src={C4} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay text-center px-3">
                  <h4 className='pt-3'>Testing and Quality Assurance</h4>
                  <p>Quality is a non-negotiable aspect of our development process. Rigorous testing is performed to identify and rectify any bugs or issues, ensuring a product of the highest quality.</p>
                </div>
              </div>

              <div className="col-sm  me-2 hoverlay-container shadow">
                <img src={C5} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay text-center px-3">
                  <h4 className='pt-3'>Deployment </h4>
                  <p>We deploy your application to a secure and reliable hosting environment, guaranteeing optimal performance and accessibility to your users.  </p>
                </div>
              </div>

              <div className="col-sm me-2 hoverlay-container shadow">
                <img src={C6} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay text-center px-3">
                  <h4 className='pt-3'>Ongoing Support</h4>
                  <p>Our commitment to your success doesn't end with deployment. We provide continuous support, updates, and maintenance to keep your application secure and up-to-date.</p>
                </div>
              </div>
            </div>


            {/* inner content ends*/}
          </div>

          {/* content section 3 ends */}

           {/* Contact us */}
         {/* <section className='my-5'  > */}
        <div className="container my-5 p-5 shadow" >
          <div className="row">
            <div className="col-sm-9 border-start border-warning development-header">
                <h1 style={{ fontWeight:'bold'}} >Select professional IT services for your software development project.</h1>
            </div>
            <div className="col-sm ms-4 d-flex align-items-center ">
              <button className='btn btn-warning request'>Request Service</button>
            </div>
          </div>
        </div>
        {/* </section> */}
         {/* Contact us ends */}
    </div>

  )
}
