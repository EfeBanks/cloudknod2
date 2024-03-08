import React from 'react'
import Bg from '../../../images/bg2.jpg';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Dev1 from '../../../images/Dev1.jpg';
import Dev2 from '../../../images/dev2.jpg';
import Dev3 from '../../../images/dev3.jpg'



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
              <div className="androidBg-inner-content p-5">
                <h1 className="container"><span className='text-warning'> DevOps  </span>Services</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

      
      {/* Statistics */}
      <div className="containerSpecial consultationBg">
        <div className="row py-5 mx-5">
            <div className="col-sm-4">
            <h2 className=' fw-bold py-4 mt-5'>Excellent quality and delivery with our IT Project Management Experts</h2>
            </div>
            <div className="col-sm-8 ps-2">
              
            <div className="row py-4">

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
          <div className="row py-5 mx-5">
              <div className="col ">
                <h1 className='content-header fw-bold py-4 px-3'>The Crucial Benefits of DevOps</h1>
                
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-5 mx-5">
              <div className="col-sm-4 ">
              
                <div className=" px-3">
                  <h4 className='pt-3 fw-bold'> Quicker time-to-market </h4>
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
      <section className='my-5' style={{color: '#fff'}} >
        <div className="container p-5">
          <div className="row">
            <div className="col-sm-9 border-start border-warning development-header">
                <h1 style={{ fontWeight:'bold'}} >Schedule a call to assess and discuss your DevOps development needs.</h1>
            </div>
            <div className="col-sm ms-4 d-flex align-items-center ">
              <button className='btn btn-warning request p-3 fw-bold'>Request Consultation</button>
            </div>
          </div>
        </div>
        </section>
         {/* Request Consultation ends */}

         {/* Expert PM section */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row py-5 mx-5">
              <div className="col">
                <h1 className='content-header fw-bold py-4 px-3'>The expertise we offer at our DevOps development company</h1>
                
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-5 mx-5">
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

              <div className="col-sm-4 py-4 ">             
                <div className="p-4 gray-bg">
                  <h4 className='pt-3 fw-bold'>Troubleshooting</h4>
                  <p>As a DevOps outsourcing company, we are quick to find and fix any errors in your code and infrastructure and assist your developers with avoiding potential issues.</p>
                </div>
              </div>

              <div className="col-sm-4 py-4">
              <div className="p-4 gray-bg">
                <h4 className='pt-3 fw-bold'>Continous Integration</h4>
                <p> Organizing and automating the integration and deployment processes to accelerate the deployment timeline and improve product quality.</p>
              </div>
                
              </div>

              <div className="col-sm-4 py-4">
              <div className="p-4 gray-bg">
                  <h4 className='pt-3 fw-bold'> Security  </h4>
                  <p>By helping you to introduce DevSecOps practices, we enable you to maintain reliable security development lifecycles, reduce costs, and increase safety.</p>
                </div>
                
              </div>

             </div>
             </div>  
      {/* Expert PM section ends*/}



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



