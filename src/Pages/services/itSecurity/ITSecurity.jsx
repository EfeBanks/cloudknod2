import React from 'react'
import Bg from '../../../images/itsecure.jpg';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';




export default function ITSecurity() {
  
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
                <h1 className="container"><span className='text-warning'> IT Security </span>Management</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}        
      
      {/* Security Process section */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row py-5 mx-5">
              <div className="col">
                <h1 className='content-header fw-bold py-4 px-3'>Protecting Your Digital Assets with IT Security Management </h1>
                <p className='lead px-3'>With CloudKnod as your IT security management partner, you can rest assured that your digital assets are protected against threats, vulnerabilities, and data breaches.</p>
            
                
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-5 mx-5">
              <div className="col-sm-6 ">
                <div className="p-4 gray-bg border-start border-warning">
                  <h4 className='pt-3 fw-bold'> Safe from Threats </h4>
                  <p>CloudKnod's IT security management services are focused on safeguarding your organization's critical data and systems from evolving cyber threats</p>
                </div>
              </div>

              <div className="col-sm-6 ">            
                <div className=" p-4 gray-bg border-start border-warning">
                  <h4 className='pt-3 fw-bold'>Strict Access Control</h4>
                  <p> We conduct comprehensive risk assessments, deploy advanced intrusion detection systems, and establish strict access controls to fortify your defenses. </p>
                </div>
              </div>

              <div className="col-sm-6 py-4">
              <div className="p-4 gray-bg border-start border-warning">
                  <h4 className='pt-3 fw-bold'> Robust Security Measures </h4>
                  <p> Our team of skilled security experts employs a multi-layered approach to assess, plan, and implement robust security measures that align with your unique business needs and compliance requirements.</p>
                </div>
                
              </div>

              <div className="col-sm-6 py-4 ">
              
                <div className="p-4 gray-bg border-start border-warning">
                  <h4 className='pt-3 fw-bold'> Customer Trust</h4>
                  <p>
                  Let's collaborate to strengthen your cyber security posture and ensure the confidentiality, integrity, and availability of your IT resources, with CloudKnod as your guardian of IT security excellence. 
                  </p>
                </div>
              </div>

             </div>
             </div>  
      {/* Security Process section ends*/}

    
      {/* Request Consultation */}
      <section className='my-5' style={{color: '#fff'}} >
        <div className="container p-5">
          <div className="row">
            <div className="col-sm-9 border-start border-warning development-header">
                <h1 style={{ fontWeight:'bold'}} >Select professional IT Security Service for your software development project.</h1>
            </div>
            <div className="col-sm ms-4 d-flex align-items-center ">
              <button className='btn btn-warning request p-3 fw-bold'>Request Services</button>
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




