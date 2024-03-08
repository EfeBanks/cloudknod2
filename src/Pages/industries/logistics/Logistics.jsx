import React from 'react'
import Bg from '../../../images/logistics22.jpg';
import L1 from '../../../images/l1.jpg';
import L2 from '../../../images/l2.jpg';
import L3 from '../../../images/l3.jpg';
import B1 from '../../../images/b1.jpg';
import B2 from '../../../images/b2.jpg';
import B3 from '../../../images/b3.jpg';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import ForLogistics from '../../../Components/views/ForLogistics';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';



export default function Logistics() {
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
                <h1 className="container"><span className='text-warning'>Logistics </span> Software Development</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

      {/* Statistics */}
      <div className="containerSpecial consultationBg">
        <div className="row py-5 mx-5">
            <div className="col-sm-4">
            <h2 className=' fw-bold py-4 mt-5'>Custom software solutions for the Logistics industry </h2>
            </div>
            <div className="col-sm-8 ps-2">
              
            <div className="row py-4">

              <div className="col-sm me-2 hoverlay-container">
                <img src={L1} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>100+ Successful Projects</h4>
                  <p>Cloudknod makes a significant contribution to the success of some major logistics company, thanks to our deep industry knowledge and vast experience.</p>
                </div>
              </div>

              <div className="col-sm  me-2 hoverlay-container ">
                <img src={L2} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>80+ Industry-focused Engineers </h4>
                  <p>Cloudknod's specialists have accumulated powerful expertise from the logistics and supply chain initiatives we have successfully implemented.</p>
                </div>
              </div>

              <div className="col-sm me-2 hoverlay-container ">
                <img src={L3} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>120+ Satisfied Clients</h4>
                  <p>With our exceptional and functional logistics software solutions, we've gained over a 120 loyal and satisfied customers worldwide.</p>
                </div>
              </div>
            </div>

            </div>
        </div>
      </div>

      {/* Statistics ends */}

      {/* Request Consultation */}
        <section className='mt-5 pb-3' style={{color: '#fff'}} >
        <div className="container p-5 ">
          <div className="row">
            <div className="col-sm-9 border-start border-warning development-header">
                <h1 style={{ fontWeight:'bold'}} >Select professional IT services for your software development project.</h1>
            </div>
            <div className="col-sm ms-4 d-flex align-items-center ">
              <button className='btn btn-warning request p-3'>Request Services</button>
            </div>
          </div>
        </div>
        </section>
        {/* Request Consultation ends */}

      {/* Businesses We Serve  */}
      <div className="containerSpecial consultationBg mt-3 pb-5">
          <div className="row py-5 mx-5">
              <div className="col ">
                <h1 className='content-header fw-bold py-4'>Businesses We Serve </h1> 
              </div>
          </div>

            {/* inner content */}
            <div className=" row pb-5 mx-5">

              <div className="col-sm  me-2 hoverlay-container">
                <img src={B1} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>Parcel and Courier Delivery </h4>
                  <p>Our skilled design team creates wireframes and prototypes to visualize the user interface and user experience. This step ensures that the design aligns with your branding and user expectations. </p>
                </div>
              </div>

              <div className="col-sm me-2 hoverlay-container">
                <img src={B2} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>E-Commerce Service</h4>
                  <p>Our experienced developers utilize industry best practices and the latest technologies to bring your vision to life. Clean, efficient code is at the core of all our development projects.</p>
                </div>
              </div>

              <div className="col-sm me-2 hoverlay-container">
                <img src={B3} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>Carriers and Freight Forwarders</h4>
                  <p>We start every project with a thorough analysis of your specific requirements, objectives, and target audience. Understanding your unique needs is key to creating a tailored solution.</p>
                </div>
              </div>
       
            </div>

            {/* inner content ends*/}
             </div>
        {/* Businesses We Serve ends*/}

          {/* IT Skills section */}
      ` <div className="containerSpecial advantageBg ">
          <div className="row py-5 mx-5">
              <div className="col-sm ">
                <h1 className='content-header fw-bold py-4'>Technologies We Apply to Develop Logistics Software </h1> 
                <p className='lead'>Cloudknod's IT experts in the fields of desktop, web, and mobile software engineering, apply cutting-edge technologies, elements, frameworks, and platforms to build Logistics software solutions with a solidly secured back-end and an adaptive modern design with great user experience.</p>
                <ForLogistics />
              </div>
          </div>

          {/* <div className="row containerSpecial mx-5">
            <div className="col-sm">  
             
            </div>
          </div> */}
          

          </div>
             {/* IT Skills section ends*/}


         {/* Consultation section */}
         <div className="containerSpecial consultationBg">
           <div className="row py-5 mt-4 mx-5 pe-2">
              <div className="col-sm-5">
                <h2 className=' fw-bold py-4'>Schedule a free consultation </h2>
                <p className='fw-bold'>What happens next?</p>
                <ol>
                  <li>An expert contacts you after having analyzed your requirements;</li>
                  <li>If needed, we sign an NDA to ensure the highest privacy level;</li>
                  <li>We submit a comprehensive project proposal with estimates, timelines, CVs, etc.</li>
                </ol>
                <p className='fw-bold'>Customers who trust us</p>
              </div>
             

              <div className="col-sm-7 formBg">
              <Form className='mx-4 px-3 py-4'>
              <Form.Label>Select your service</Form.Label>
               <Form.Select aria-label="Default select example" className='borderless mb-4 mt-2'>
                   <option value="1">Finance</option>
                   <option value="2">Healthcare</option>
                   <option value="3">Media</option>
                   <option value="3">Logistics</option>
                   <option value="3">Automotive</option>
                   <option value="3">Others</option>
               </Form.Select>
               <Form.Group className="mb-4" controlId="formGroupUser" >
                   {/* <Form.Label>Name</Form.Label> */}
                   <Form.Control type="text" placeholder="Name" className='borderless' />
               </Form.Group>
               <Form.Group className="mb-4" controlId="formGroupEmail">
                  
                   <Form.Control type="email" placeholder="Corporate Email *" className='borderless' />
               </Form.Group>
               <Form.Group className="mb-4" controlId="formGroupPhone">
                   
                   <Form.Control type="text" placeholder="Phone *"  className='borderless'/>
               </Form.Group>

              <div className='mb-4'>
                <input className="form-control form-control" id="formFile" type="file"  />
              </div>

              <div className="mb-4 ">
                <label for="exampleFormControlTextarea1" class="form-label">We will call you ASAP or you can schedule a call</label>
                <textarea className="form-control borderless" id="exampleFormControlTextarea1" rows="2" placeholder='Please describe your project requirement*'></textarea>
              </div>

              <Button type="submit" className='btn btn-warning btn-lg fw-bold'>Send Request</Button>
               </Form>
              </div>
            </div>
            </div>
        {/* Consultation section ends*/}


    </div>
  )
}

