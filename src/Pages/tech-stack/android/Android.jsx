import React, { useState } from 'react'
import Bg from '../../../images/bg3.jpg';
import AndroidImg from '../../../images/androidImg.jpg';
//import Ui from '../../../images/uiux.jpg';
import Approved from '../../../images/approved.jpg';
import Optimize from '../../../images/optimize.jpg';
import AndroidImg2 from '../../../images/androidImg2.jpg';
import C1 from '../../../images/c1.jpg';
import C22 from '../../../images/c22.jpg';
import C3 from '../../../images/c3.jpg';
import C4 from '../../../images/c4.jpg';
import C5 from '../../../images/c5.jpg';
import C6 from '../../../images/c6.jpg';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//import { Link } from 'react-router-dom';



export default function Android() {
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
    <div>
       {/* Banner section */}
       <div className="row ">
        <div className='col androidBg-content'>
          <img src={Bg} alt="cloudknod Bg" />
            <div className="container bg-content">
              <div className="androidBg-inner-content p-sm-5 p-2">
                <h1><span className='text-warning'>Android </span> Development Services</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

      {/* content section 1*/}
      <div className="container">
      <div className="row py-sm-5 py-2 px-2 mt-3">
          <div className="col-sm-4 text">
              <p>We recognize that mobile applications are now at the forefront of digital engagement. To meet the growing demand for innovative and feature-rich Android applications, we proudly offer our Android Development Services. Leveraging the power of the Android platform, we bring your unique app ideas to life, providing a seamless user experience and staying ahead in the competitive mobile landscape. </p>

              <p>
              We are dedicated to delivering Android applications that not only meet but exceed your expectations. Our Android Development Services combine creativity, innovation, and technical excellence to create powerful, user-centric mobile applications. Contact us today to discuss your project, and let's embark on a journey to turn your app vision into a reality that resonates with users across the Android ecosystem. 
              </p>
            </div>

            <div className="col-sm-4">
              <img src={AndroidImg} alt="android development" className='img-fluid'/>
            </div>
            <div className="col-sm-4 text">
              <p>We begin by thoroughly understanding your project goals, target audience, and specific requirements. This deep understanding forms the foundation of your app's development. Our designers create wireframes and prototypes that visualize the app's user interface and experience, ensuring alignment with your branding and user expectations. Our seasoned Android developers write clean and efficient code, implementing the latest technologies and best practices to bring your app to life. 
              </p>   
              <p>We conduct rigorous testing to identify and rectify any issues or bugs, ensuring that your app is of the highest quality and performance. We deploy your Android app to the Google Play Store or your preferred distribution platform, making it accessible to your target audience.</p>
            </div>
        </div>
      </div>
      {/* content section 1 ends */}

        {/* content section 2 */}
        <section className='contentBg p-sm-4 p-2'>
          <div className="container py-sm-5 py-2">
            <div className="row">
              <div className="col ">
                <h1 className='content-header fw-bold py-sm-4 py-2'>Android App Development Services <br/>We Offer</h1>
                
              </div>
            </div>

            <div className="row">
              <div className="col-sm-4">
              <div className="card shadow mb-4">
                <img src={AndroidImg2} className="card-img-top img-fluid " alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center">UI/UX Design</h5>
                  <p className="card-text p-3 text-justify">Our design experts create intuitive and visually appealing user interfaces that enhance user engagement and satisfaction, ensuring your app stands out in the crowded app market.  </p>
                  
                </div>
              </div>
              </div>

              <div className="col-sm-4">
              <div className="card shadow mb-4">
                <img src={Approved} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center">App Testing and Quality Assurance</h5>
                  <p className="card-text p-3 text-justify">Quality is paramount to us. Rigorous testing and quality assurance processes are followed to identify and rectify any issues, guaranteeing a bug-free and user-friendly app.   </p>
                  
                </div>
              </div>
              </div>

              <div className="col-sm-4">
              <div className="card shadow mb-4">
                <img src={Optimize} className="card-img-top img-fluid " alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center">App Optimization</h5>
                  <p className="card-text p-3 text-justify">We continuously monitor and optimize your app's performance, ensuring it operates at peak efficiency and remains competitive in the ever-evolving mobile landscape.  </p>
                  
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>
          {/* content section 2 ends */}

          {/* content section 3*/}
        <div className="container py-sm-5 py-2">
          <div className="row">
              <div className="col ">
                <h1 className='content-header fw-bold py-sm-4 py-2'>Our Development Process </h1>
                <p>We follow a well-defined development process that ensures the success of your projects. This standardized approach guarantees consistency and quality, regardless of the service you choose. </p>
                
              </div>
            </div>

            {/* inner content */}
            <div className="row pt-4 pb-2">
              <div className="col-sm me-sm-2 me-0 hoverlay-container shadow">
                {/* <h2>Requirement Analysis</h2> */}
                <img src={C1} alt="cloudknod" className='img-fluid hover-image' />
                {/* <div className='front-text'><h2>Requirement Analysis</h2></div> */}
              
                <div className="hoverlay text-center px-sm-3 px-1">
                  <h4 className='pt-3'>Requirement Analysis</h4>
                  <p>We start every project with a thorough analysis of your specific requirements, objectives, and target audience. Understanding your unique needs is key to creating a tailored solution.</p>
                </div>
              </div>

              <div className="col-sm  me-sm-2 me-0 hoverlay-container shadow">
                <img src={C22} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay text-center px-sm-3 px-1">
                  <h4 className='pt-3'>Design and Prototyping </h4>
                  <p>Our skilled design team creates wireframes and prototypes to visualize the user interface and user experience. This step ensures that the design aligns with your branding and user expectations. </p>
                </div>
              </div>

              <div className="col-sm me-sm-2 me-0 hoverlay-container shadow">
                <img src={C3} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay text-center px-sm-3 px-1">
                  <h4 className='pt-3'>Development</h4>
                  <p>Our experienced developers utilize industry best practices and the latest technologies to bring your vision to life. Clean, efficient code is at the core of all our development projects.</p>
                </div>
              </div>
            </div>

          
            <div className="row pt-2 pb-4">
              <div className="col-sm me-sm-2 me-0 hoverlay-container shadow">
                <img src={C4} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay text-center px-sm-3 px-1">
                  <h4 className='pt-3'>Testing and Quality Assurance</h4>
                  <p>We start every project with a thorough analysis of your specific requirements, objectives, and target audience. Understanding your unique needs is key to creating a tailored solution.</p>
                </div>
              </div>

              <div className="col-sm  me-sm-2 me-0 hoverlay-container shadow">
                <img src={C5} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay text-center px-sm-3 px-1">
                  <h4 className='pt-3'>Deployment </h4>
                  <p>Our skilled design team creates wireframes and prototypes to visualize the user interface and user experience. This step ensures that the design aligns with your branding and user expectations. </p>
                </div>
              </div>

              <div className="col-sm me-sm-2 me-0 hoverlay-container shadow">
                <img src={C6} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay text-center px-sm-3 px-1">
                  <h4 className='pt-3'>Ongoing Support</h4>
                  <p>Our experienced developers utilize industry best practices and the latest technologies to bring your vision to life. Clean, efficient code is at the core of all our development projects.</p>
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
            <div className="col-sm text-center ">
            
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
                      
                   </div>
               </div>     
           </div>
           </div>
               </Modal.Body> 
 
       <Modal.Footer className='me-auto'>
         <Button variant="warning" onClick={handleClose}>
           Submit
         </Button>
         <Button variant="secondary" onClick={handleClose}>
           Close
         </Button>
        
       </Modal.Footer>
       </Modal>
      
     
   </>
         {/* Modal Section ends */}
    </div>
  )
}
