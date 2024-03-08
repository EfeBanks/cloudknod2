import React from 'react'
import Bg from '../../../images/BAbg.jpg';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import So1 from '../../../images/so1.jpg';
import So2 from '../../../images/so2.jpg';
import So3 from '../../../images/so3.jpg'



export default function SolutionArchitecture() {
  
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
                <h1 className="container"><span className='text-warning'>Solution Architecture </span>Services</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

        {/* Statistics */}
        <div className="containerSpecial consultationBg">
        <div className="row py-5 mx-5">
            <div className="col-sm-4">
            <h2 className=' fw-bold py-4 mt-5'>Well-designed IT Architecture solutions for business</h2>
            </div>
            <div className="col-sm-8 ps-2">
              
            <div className="row py-4">

              <div className="col-sm me-2 hoverlay-container">
                <img src={So1} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>20+ Specialists</h4>
                  <p>Cloudknod's Solution Architecture team is made up of skilled experts in different business areas.</p>
                </div>
              </div>

              <div className="col-sm  me-2 hoverlay-container ">
                <img src={So2} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                <h4 className='pt-3'>20% Resources Saved </h4>
                <p>Building a software architecture will help you significantly reduce development costs and rework percentage.</p>
                </div>
              </div>

              <div className="col-sm me-2 hoverlay-container ">
                <img src={So3} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                <h4 className='pt-3'>12+ Projects Delivered</h4>
                  <p>Cloudknod’s team has delivered multiple complex IT architecture projects across various industries.</p>
                
                 </div>
              </div>
            </div>

            </div>
        </div>
      </div>

      {/* Statistics ends */}

      

      {/* IT Architecture Roles section */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row pt-5 mx-5">
              <div className="col ">
                <h1 className='content-header fw-bold py-4 px-3'>Core fields of IT Architecture</h1>
                <p className="lead px-3">Here are the dimensions of your business that a foundational IT architecture can improve.</p>
  
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-5 mx-5">
              <div className="col-sm-4 ">
              
                <div className=" px-3">
                  <h4 className='pt-3 fw-bold'> Business </h4>
                  <p>The emphasis is on result-driven procedure views and models prepared with us:</p>
                  <ul style={{lineHeight:'2.5rem'}}>
                    <li>Business Architect</li>
                    <li>Enterprise Architect</li>
                    <li>Digital Transformation SME</li>
                  </ul>

                  </div>
              </div>

              <div className="col-sm-4">
              
                <div className=" px-3">
                <h4 className='pt-3 fw-bold'> Application/Operations</h4>
                <p>The focus is on intelligent, powerful, and robust solutions crafted by Cloudknod’s IT Architects: </p>
                  <ul style={{lineHeight:'2.5rem'}}>
                    <li>Solutions Architect</li>
                    <li>Network & Infrastructure designer</li>
                    <li>Security, Risk and Compliance Expert</li>
                    <li>Integration Architect</li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-4">
              
                <div className="px-3">
                <h4 className='pt-3 fw-bold'> Technology</h4>
                <p>Here, the priority is hardware and tech options implemented by Andersen's specialists:</p>
                  <ul style={{lineHeight:'2.5rem'}}>
                    <li>Software Architect</li>
                    <li>AWS, Azure, GSP designer</li>
                    <li>DWH/BI data architect</li>
                    <li>ML and AI Specialist</li>
                  </ul>
                </div>
              </div>

             </div>
             </div>  
      {/* IT Architecture Roles ends*/}

      
      {/* Request Consultation */}
      <section className='my-5' style={{color: '#fff'}} >
        <div className="container p-5">
          <div className="row">
            <div className="col-sm-9 border-start border-warning development-header">
                <h1 style={{ fontWeight:'bold'}} >Whatever your software challenge is, our Solution Architecture experts are ready to help you with complex processes. Schedule a free consultation.</h1>
            </div>
            <div className="col-sm ms-4 d-flex align-items-center ">
              <button className='btn btn-warning request p-3 fw-bold'>Request Consultation</button>
            </div>
          </div>
        </div>
        </section>
         {/* Request Consultation ends */}


         {/* Consultation section */}
         <div className="containerSpecial consultationBg">
           <div className="row py-5 mt-3 mx-5 pe-2">
              <div className="col-sm-5">
                <h2 className=' fw-bold py-4'>Book a free consultation</h2>
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



