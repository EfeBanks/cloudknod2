import React, { useState } from 'react'
import Bg from '../../../images/bg2.jpg';
import Webimg from '../../../images/web.jpg';
import Community from '../../../images/community.jpg';
import Secured from '../../../images/secured.jpg';
import C1 from '../../../images/c1.jpg';
import C22 from '../../../images/c22.jpg';
import C3 from '../../../images/c3.jpg';
import C4 from '../../../images/c4.jpg';
import C5 from '../../../images/c5.jpg';
import C6 from '../../../images/c6.jpg';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import JavaImg from '../../../images/java3.jpg';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export default function Java() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                <div className="androidBg-inner-content p-5">
                  <h1><span className='text-warning'>Java </span> Development Services</h1>
                </div>
          
              </div>       
          </div>
        </div>
        {/* Banner section ends*/}
  
        {/* content section 1*/}
        <div className="container">
        <div className="row py-5 px-2 mt-3">
            <div className="col-sm-4 text">
                <p>In the ever-evolving world of software development, Java remains a powerhouse, powering a wide array of applications, from enterprise-level systems to mobile and web solutions. We offer Java Development Services that are tailored to harness the full potential of this versatile and reliable programming language. Our expert Java developers are ready to transform your ideas into robust, scalable, and highperformance applications.  </p>
  
              
              </div>
  
              <div className="col-sm-4">
                <img src={JavaImg} alt="android development" className='img-fluid'/>
              </div>
              <div className="col-sm-4 text">
                <p>Our Java development team is well-versed in creating a variety of software solutions. Whether you need a custom Java application, want to enhance an existing system, or require migration to Java, we have the expertise to deliver. 
                </p>   
                <p>We are dedicated to delivering Java applications that exceed your expectations. Our Java Development Services combine the power of Java with industry best practices to create powerful, scalable, and reliable solutions. Contact us today to discuss your project, and let's embark on a journey to turn your ideas into reality with Java. </p>
              </div>
          </div>
        </div>
        {/* content section 1 ends */}
  
          {/* content section 2 */}
          <section className='contentBg p-4'>
            <div className="container py-5">
              <div className="row">
                <div className="col ">
                  <h1 className='content-header fw-bold py-4'>Java App Development Services <br/>We Offer</h1>
                  
                </div>
              </div>
  
              <div className="row">
                <div className="col-sm-4">
                <div className="card shadow mb-4">
                  <img src={Webimg} className="card-img-top img-fluid " alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-center">Platform Independence </h5>
                    <p className="card-text p-3 text-justify">Our design experts create intuitive and visually appealing user interfaces that enhance user engagement and satisfaction, ensuring your app stands out in the crowded app market.  </p>
                    
                  </div>
                </div>
                </div>
  
                <div className="col-sm-4">
                <div className="card shadow mb-4">
                  <img src={Community} className="card-img-top img-fluid" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-center">Large and Active Community </h5>
                    <p className="card-text p-3 text-justify">Java's "Write Once, Run Anywhere" philosophy allows your applications to run on multiple platforms and devices, reducing development time and costs.  </p>
                    
                  </div>
                </div>
                </div>
  
                <div className="col-sm-4">
                <div className="card shadow mb-4">
                  <img src={Secured} className="card-img-top img-fluid " alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-center">Robust and Secure </h5>
                    <p className="card-text p-3 text-justify">Java is known for its robustness and security features, making it a preferred choice for mission-critical applications in industries such as finance, healthcare, and more. </p>
                    
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
                    <p>We start every project with a thorough analysis of your specific requirements, objectives, and target audience. Understanding your unique needs is key to creating a tailored solution.</p>
                  </div>
                </div>
  
                <div className="col-sm  me-2 hoverlay-container shadow">
                  <img src={C22} alt="cloudknod" className='img-fluid hover-image' />
                
                  <div className="hoverlay text-center px-3">
                    <h4 className='pt-3'>Design and Prototyping </h4>
                    <p>Our skilled design team creates wireframes and prototypes to visualize the user interface and user experience. This step ensures that the design aligns with your branding and user expectations. </p>
                  </div>
                </div>
  
                <div className="col-sm me-2 hoverlay-container shadow">
                  <img src={C3} alt="cloudknod" className='img-fluid hover-image' />
                
                  <div className="hoverlay text-center px-3">
                    <h4 className='pt-3'>Development</h4>
                    <p>Our experienced developers utilize industry best practices and the latest technologies to bring your vision to life. Clean, efficient code is at the core of all our development projects.</p>
                  </div>
                </div>
              </div>
  
            
              <div className="row pt-2 pb-4">
                <div className="col-sm me-2 hoverlay-container shadow">
                  <img src={C4} alt="cloudknod" className='img-fluid hover-image' />
                
                  <div className="hoverlay text-center px-3">
                    <h4 className='pt-3'>Testing and Quality Assurance</h4>
                    <p>Quality is a non-negotiable aspect of our development process. Rigorous testing is performed to identify and rectify any bugs or issues, ensuring a product of the highest quality. </p>
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
                    <p>Our commitment to your success doesn't end with deployment. We provide continuous support, updates, and maintenance to keep your application secure and up-to-date. </p>
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
                <Button variant="warning" onClick={handleShow}  className='request'>
                  Request Service
              </Button> 
              </div>
            </div>
          </div>
          {/* </section> */}
           {/* Contact us ends */}
  
            {/* Modal Section */}
  
          <>     
         
         <Modal show={show} onHide={handleClose} className='modal-xl'>
            
             <Modal.Header closeButton>
             <Modal.Title>
              <h2 style={{color: '#001019', paddingLeft: '20px'}}>Request Services
              </h2> </Modal.Title>
             </Modal.Header>
             <Modal.Body>  
             <div className="container"> 
             <div className='row'>            
             <div className='col-sm-7'>    
                 <Form>
                 <Form.Select aria-label="Default select example">
                     <option>Select your Service *</option>
                     <option value="1">Finance</option>
                     <option value="2">Healthcare</option>
                     <option value="3">Media</option>
                     <option value="3">Logistics</option>
                 </Form.Select>
                 <Form.Group className="mb-3" controlId="formGroupUser">
                     <Form.Label>Name</Form.Label>
                     <Form.Control type="text" placeholder="Enter your name" />
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="formGroupEmail">
                     <Form.Label>Email address *</Form.Label>
                     <Form.Control type="email" placeholder="Enter email" />
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="formGroupPhone">
                     <Form.Label>Phone Number *</Form.Label>
                     <Form.Control type="text" placeholder="Phone Number" />
                 </Form.Group>
                 </Form>
             </div>
  
                 <div className="col-sm-5 text-light" style={{backgroundColor: '#001019', padding:'30px'}}>
                     <div className=''>
                         <h5>Reach out to Cloudknod to receive a free consultation and entrust your IT initiative to a company of software experts.</h5>
                     </div>
  
                     <div className="mbody pt-4">
                         <h5>Contact Us</h5>
                         Phone: +01-66677455
                         <br />Email: info@cloudknod.com
                     </div>
  
                     <div className="mfooter">
                         Customers who trust us...
                     </div>
                 </div>     
             </div>
             </div>
                 </Modal.Body> 
   
         <Modal.Footer className='me-auto'>
           <Button variant="warning" onClick={handleClose}>
             Submit
           </Button>
           {/* <Button variant="secondary" onClick={handleClose}>
             Close
           </Button> */}
          
         </Modal.Footer>
         </Modal>
        
       
     </>
           {/* Modal Section ends */}
      </div>
  )
}
