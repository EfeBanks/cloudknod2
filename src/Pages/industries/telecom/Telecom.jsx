import React from 'react'
import Bg from '../../../images/telecom.jpg';
import T1 from '../../../images/t1.jpg';
import T2 from '../../../images/t2.jpg';
import T3 from '../../../images/t3.jpg';
import TelecomApp from '../../../images/telecomApp.jpg';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import ForLogistics from '../../../Components/views/ForLogistics';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export default function Telecom() {
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
                <h1 className="container"><span className='text-warning'>Telecom </span> Software Development and Integration Services</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

      {/* Statistics */}
      <div className="containerSpecial consultationBg">
        <div className="row py-5 mx-5">
            <div className="col-sm-4">
            <h2 className=' fw-bold py-4 mt-5'>Accelerate your Connectivity with our Telecom Expertise </h2>
            </div>
            <div className="col-sm-8 ps-2">
              
            <div className="row py-4">

              <div className="col-sm me-2 hoverlay-container">
                <img src={T1} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>50 Successful Projects</h4>
                  <p>Over the years, we have been delivering effective software solutions for businesses to help them benefit from technology with high-quality service delivery.</p>
                </div>
              </div>

              <div className="col-sm  me-2 hoverlay-container ">
                <img src={T2} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>70+ Telecom Experts </h4>
                  <p>As a leading software development company, Cloudknod employs both knowledgeable and skilled experts in Telecom industry. </p>
                </div>
              </div>

              <div className="col-sm me-2 hoverlay-container ">
                <img src={T3} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>40+ Satisfied Clients</h4>
                  <p>We have so far built trust and given high satisfaction to over 40 of our esteemed clients globally.</p>
                </div>
              </div>
            </div>

            </div>
        </div>
      </div>

      {/* Statistics ends */}


      {/* Telecom App */}

      <div className="containerSpecial consultationBg mt-3">
        <div className="row py-4 pb-5 ms-5">
            <div className="col-sm-7 pe-5 pb-4">
            <h2 className=' fw-bold pt-5 mt-5'>IT projects delivered by Cloudknod for Telecom  </h2>
            <p>Cloudknod is a custom software development provider of choice for many Telecom companies hence, have implemented multiple tech initiatives for the telecom industry.</p>
            <Button variant="warning" className='request slider-btn btn btn-lg '>
                  Request Service
              </Button> 
            </div>
            <div className="col-sm-5 ">
                <img src={TelecomApp} alt="cloudknod" className='img-fluid' />
              
            </div>
        </div>
      </div>

      {/* Telecom App ends */}


      {/* IT Skills section */}
      ` <div className="containerSpecial advantageBg ">
          <div className="row py-5 mx-5">
              <div className="col-sm ">
                <h1 className='content-header fw-bold py-4'>Cloudknod's expertise in building telecom solutions </h1> 
                <p className='lead'>Cloudknod's telecom development team can apply state-of-the-art telecom software, the latest frameworks, most effective cloud computing infrastructures and platforms, big data tools, and databases to match your goals.</p>
                <ForLogistics />;
              </div>
          </div>

          <div className="row containerSpecial mx-5">
            <div className="col-sm">  
             
            </div>
          </div>
          

          </div>
             {/* IT Skills section ends*/}


            {/* Request Consultation */}
         <section className='my-5' style={{color: '#fff'}} >
        <div className="container p-5">
          <div className="row">
            <div className="col-sm-9 border-start border-warning development-header">
                <h1 style={{ fontWeight:'bold'}} >Schedule a call to assess and discuss your IT project</h1>
            </div>
            <div className="col-sm ms-4 d-flex align-items-center ">
              <button className='btn btn-warning request p-2'>Request Consultation</button>
            </div>
          </div>
        </div>
        </section>
         {/* Request Consultation ends */}

         {/* Consultation section */}
         <div className="containerSpecial consultationBg">
           <div className="row py-5 mt-3 mx-5 pe-2">
              <div className="col-sm-5">
                <h2 className=' fw-bold py-4'>Book a Free Consultation </h2>
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
