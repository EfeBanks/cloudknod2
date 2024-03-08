import React from 'react'
import Bg from '../../../images/health2.jpg';
import S1 from '../../../images/s1.jpg';
import S2 from '../../../images/s2.jpg';
import S3 from '../../../images/s3.jpg';
import TeleHealth from '../../../images/telehealth.jpg';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export default function Healthcare() {
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
                <h1 className="container"><span className='text-warning'>Healthcare</span> Software Solutions</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

      {/* Statistics */}
      <div className="containerSpecial consultationBg">
        <div className="row py-5 mx-5">
            <div className="col-sm-4">
            <h2 className=' fw-bold py-4 mt-5'>Expert healthcare software development company </h2>
            </div>
            <div className="col-sm-8 ps-2">
              
            <div className="row py-4">

              <div className="col-sm me-2 hoverlay-container">
                <img src={S1} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>100+ Delivered Projects</h4>
                  <p>Being a trusted vendor of Healthcare Software Development Services, Cloudknod builds patient portals, TeleHealth, tools for Healthcare analytics,  etc.</p>
                </div>
              </div>

              <div className="col-sm  me-2 hoverlay-container ">
                <img src={S2} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>50+ Healthcare Engineers </h4>
                  <p>As a leading software development company, Cloudknod employs both knowledgeable and skilled experts with industry-specific expertise. </p>
                </div>
              </div>

              <div className="col-sm me-2 hoverlay-container ">
                <img src={S3} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>200+ Satisfied Customers</h4>
                  <p>Over the years, we have built trust and given satisfaction to our esteemed clients with our unmatched and reliable healthcare software service.</p>
                </div>
              </div>
            </div>

            </div>
        </div>
      </div>

      {/* Statistics ends */}

      {/* Telehealth App */}
      <div className="containerSpecial consultationBg mt-3">
        <div className="row py-4 pb-5 ms-5">
            <div className="col-sm-7 pe-5 pb-4">
            <h2 className=' fw-bold pt-5 mt-5'>Cloudknod's Custom TeleHealth Application </h2>
            <p>Reduce your time to market with our Professional Custom TeleHealth App Development Services.</p>
            <Button variant="warning" className='request slider-btn btn btn-lg '>
                  Request Service
              </Button> 
            </div>
            <div className="col-sm-5 ">
                <img src={TeleHealth} alt="cloudknod" className='img-fluid' />
              
            </div>
        </div>
      </div>

      {/* Telehealth App ends */}


      {/* Why Healthcare choose section */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row py-5 mx-5">
              <div className="col ">
                <h1 className='content-header fw-bold py-4'>Why healthcare businesses choose Cloudknod </h1>
                <p className="lead">At Cloudknod, we help boost your value by collaborating with a custom healthcare software development company focused on the best outcomes. Leverage Cloudknod’s expertise, network, technology, and data-driven insights to surpass your goals.</p>
                
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-5 mx-5">
              <div className="col-sm-6 ">
              
                <div className=" px-3">
                  <h4 className='pt-3 fw-bold'> Expertise in healthcare </h4>
                  <p>Over the years, Healthcare businesses have been powered by Andersen’s digital solutions. With the help of AI, IoMT, and data-driven applications, Andersen creates a technology foundation for care providers, payers, pharmacies, PBMs, and Healthcare software vendors in their mission to save lives and nurture health.</p>
                </div>
              </div>

              <div className="col-sm-6">
              
                <div className=" px-3">
                  <h4 className='pt-3 fw-bold'>Great UI/UX Design</h4>
                  <p>While a lot of attention is focused on functionality, the role of UI/UX design in Healthcare software often remains undervalued. Andersen's Healthcare-specific design solutions can help avoid life-threatening medical errors, personnel burnout, and improve patient centricity and safety.</p>
                </div>
              </div>

              <div className="col-sm-6 py-4">
              
                <div className="px-3">
                  <h4 className='pt-3 fw-bold'>Improved efficiency</h4>
                  <p>With expert back-office teams and automation, Cloudknod takes on your administrative work at speed, at scale, and more efficiently than any other organization possibly could, so you can focus on the higher-value work you went into Healthcare to do.</p>
                </div>
              </div>

              <div className="col-sm-6  py-4 ">
              
                <div className="px-3">
                  <h4 className='pt-3 fw-bold'>Best value for money</h4>
                  <p>The majority of healthcare software products require more money than initially assumed. They also add less value than expected. Cloudknod software development company, is an investment that drives returns.</p>
                </div>
              </div>

              <div className="col-sm-6  py-4 ">
              
              <div className="px-3">
                <h4 className='pt-3 fw-bold'>Information Security</h4>
                <p>As a leading healthcare software development vendor, Cloudknod guarantees the stability of Healthcare applications against digital threats and attacks ensuring an increased level of security and Healthcare regulatory compliance.</p>
              </div>
            </div>

            <div className="col-sm-6  py-4 ">
              
              <div className="px-3">
                <h4 className='pt-3 fw-bold'>Interoperability</h4>
                <p>Cloudknod makes it possible to follow care across different settings, with all of the relevant information you need in easy reach. Seamless integration of custom applications with installed third-party systems, whether it’s an EHR, LIS, RIS, claim management or revenue cycle management systems..</p>
              </div>
            </div>

             </div>
             </div>
             {/* Why Healthcare choose section ends*/}

            {/* Request Consultation */}
         <section className='my-5' style={{color: '#fff'}} >
        <div className="container p-5">
          <div className="row">
            <div className="col-sm-9 border-start border-warning development-header">
                <h1 style={{ fontWeight:'bold'}} >Entrust your IT initiatives to our Tech Experts</h1>
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
