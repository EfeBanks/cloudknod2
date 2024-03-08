import React from 'react'
import Bg from '../../../images/BAbg2.jpg';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Ban1 from '../../../images/bana1.jpg';
import Ban2 from '../../../images/bana2.jpg';
import Ban3 from '../../../images/bana3.jpg'



export default function BusinessAnalysis() {
  
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
                <h1 className="container"><span className='text-warning'>Business Analysis </span>Services</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

        {/* Statistics */}
        <div className="containerSpecial consultationBg">
        <div className="row py-5 mx-5">
            <div className="col-sm-4">
            <h2 className=' fw-bold py-4 mt-5'>Optimize your business flows with our Business Analysts</h2>
            </div>
            <div className="col-sm-8 ps-2">
              
            <div className="row py-4">

              <div className="col-sm me-2 hoverlay-container">
                <img src={Ban1} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>100+ BA Specialists</h4>
                  <p>Cloudknod's Business Analysts are experts in major industries – from FinTech and Healthcare to Retail and Logistics.</p>
                </div>
              </div>

              <div className="col-sm  me-2 hoverlay-container ">
                <img src={Ban2} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                <h4 className='pt-3'>15% Cost Reduction </h4>
                <p>Our Business Analysts ensures the continuous work of all team members, compresses the time-to-market cycle, reduces costs, and improves product quality.</p>
                </div>
              </div>

              <div className="col-sm me-2 hoverlay-container ">
                <img src={Ban3} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                <h4 className='pt-3'>99% User-centered Approach</h4>
                  <p>The company's Business Analysis specialists conduct benchmarking and define target audiences, helping to build software that fully meets your needs.</p>
                
                 </div>
              </div>
            </div>

            </div>
        </div>
      </div>

      {/* Statistics ends */}

      {/* Services we provide */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row py-5 mx-5">
                <h1 className='content-header fw-bold py-4 px-3'>Cloudknod's Business Analysis Services</h1>
                <div className="col-sm-6 fw-bold lead">
                  <div className='p-3 mb-2' style={{backgroundColor:'#fafafa'}}>Pre-Development Services</div>
                  <div className='p-3 mb-2' style={{backgroundColor:'#fafafa'}}>Discovery Phase Services</div>
                  <div className='p-3 mb-2' style={{backgroundColor:'#fafafa'}}>Project Documentation</div>
                  <div className='p-3 mb-2' style={{backgroundColor:'#fafafa'}}>Compliance Services</div>
                </div>

                <div className="col-sm-6 fw-bold lead">
                  <div className='p-3 mb-2' style={{backgroundColor:'#fafafa'}}>Project Audit</div>
                  <div className='p-3 mb-2' style={{backgroundColor:'#fafafa'}}>BA Consultancy</div>
                  <div className='p-3 mb-2' style={{backgroundColor:'#fafafa'}}>End-to-End Project Support and Supervision</div>
                </div>
  
          </div>
        </div>

        
        {/* Services we provide ends */}


      {/* BA Roles section */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row pt-5 mx-5">
              <div className="col ">
                <h1 className='content-header fw-bold py-4 px-3'>The variety of Business Analysis roles we provide</h1>
                <p className="lead px-3">Cloudknod offers BA professionals who differ in areas of responsibilities and approaches to solving project issues.</p>
  
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-5 mx-5">
              <div className="col-sm-4 ">
              
                <div className=" px-3">
                  <h4 className='pt-3 fw-bold'> Business Analyst </h4>
                  <p>Cloudknod's Business Analysts have experience with various projects, helping our customers resolve their project issues, perform solution reviews, and ensure business process optimization. You can select appropriate experts and add value to your project in order to reach your business goals.</p>
                  <ul style={{lineHeight:'2.5rem'}}>
                    <li>Requirements Engineers;</li>
                    <li>Technical Writers;</li>
                    <li>Domain Experts.</li>
                    <li>Proxy product owners.</li>
                  </ul>

                  </div>
              </div>

              <div className="col-sm-4">
              
                <div className=" px-3">
                <h4 className='pt-3 fw-bold'> System Analyst </h4>
                <p>Cloudknod's System Analysts assume such responsibilities as support for developers and QA engineers, solution architecture and service integration design, database structure development, backlog filling, and release management.</p>
                  <ul style={{lineHeight:'2.5rem'}}>
                    <li>Technical Solution Analysts;</li>
                    <li>System Design Analysts;</li>
                    <li>Database Analysts;</li>
                    <li>Integration and Microservice Analysts.</li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-4">
              
                <div className="px-3">
                <h4 className='pt-3 fw-bold'> Product Owner </h4>
                <p>Collaborate with our top-notch POs to develop and communicate a clear and consistent product vision, conduct different types of customer and user research, and fill and manage your product backlog.</p>
                  <ul style={{lineHeight:'2.5rem'}}>
                    <li>Technical Product Owners;</li>
                    <li>Product Analysts;</li>
                    <li>Product Manager Assistants.</li>
                  </ul>
                </div>
              </div>

             </div>
             </div>  
      {/* BA Roles ends*/}

      
      {/* Request Consultation */}
      <section className='my-5' style={{color: '#fff'}} >
        <div className="container p-5">
          <div className="row">
            <div className="col-sm-9 border-start border-warning development-header">
                <h1 style={{ fontWeight:'bold'}} >Request a 30-minute Business Analysis and Technology consultation</h1>
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



