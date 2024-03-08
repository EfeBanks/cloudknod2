import React from 'react'
import Bg from '../../../images/bg1.jpg';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Pr1 from '../../../images/pr1.jpg';
import Pr2 from '../../../images/pr2.jpg';
import A3 from '../../../images/a3.jpg'



export default function ProjectManagement() {
  
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
                <h1 className="container">Agile IT <span className='text-warning'> Project Management </span>Services</h1>
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
                <img src={Pr1} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>70+ Project Managers</h4>
                  <p>Cloudknod’s team provides IT Project Management as a Service to plan your operations, optimize resources, and secure the ultimate success.</p>
                </div>
              </div>

              <div className="col-sm  me-2 hoverlay-container ">
                <img src={Pr2} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                <h4 className='pt-3'>20+ Projects Delivered </h4>
                <p>In order to deliver value, Cloudknod's pool of IT Project Managers apply the best benchmarks and Management 3.0 methodologies.
                  </p>
                </div>
              </div>

              <div className="col-sm me-2 hoverlay-container ">
                <img src={A3} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>12 Years of Experience </h4>
                  <p>Over the last 12 years, our team has been able to manage the Projects of Customers and also increased customers' satisfaction.</p>
                 
                 </div>
              </div>
            </div>

            </div>
        </div>
      </div>

      {/* Statistics ends */}


      {/* PM Services section */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row py-5 mx-5">
              <div className="col ">
                <h1 className='content-header fw-bold py-4 px-3'>Achieve success with IT Project Management Services</h1>
                <p className="lead px-3">Depending on your needs, you can implement or facilitate your corporate IT initiatives via Cloudknod’s Project Management Expertise and Services.</p>
                
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-5 mx-5">
              <div className="col-sm-4 ">
              
                <div className=" px-3">
                  <h4 className='pt-3 fw-bold'> Accurate Assessment of IT Needs </h4>
                  <p>Get exactly what you need to succeed in the extremely competitive environment with our professional outlook to reduce costs and get things done properly.</p>
                </div>
              </div>

              <div className="col-sm-4">
              
                <div className=" px-3">
                  <h4 className='pt-3 fw-bold'>Effective Resource Planning Practices</h4>
                  <p>Enhance your planning processes and transform the way you envision the Agile implementation of your ambitious initiatives in the technology domain.</p>
                </div>
              </div>

              <div className="col-sm-4">
              
                <div className="px-3">
                  <h4 className='pt-3 fw-bold'>Robust Team Assembly and Management</h4>
                  <p>Cloudknod's professionals get things done by assigning well-thought-out tasks and applying elaborate metrics to drive your IT project team performance with Agile Project Management.</p>
                </div>
              </div>

             </div>
             </div>  
      {/* PM Services section ends*/}

      {/* Expert PM section */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row py-5 mx-5">
              <div className="col">
                <h1 className='content-header fw-bold py-4 px-3'>Cloudknod's Expertise in IT Project Management</h1>
                
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-5 mx-5">
              <div className="col-sm-4 ">
                <div className="p-4 gray-bg">
                  <h4 className='pt-3 fw-bold'>Project Management Consultancy</h4>
                  <p>Contact us to get access to a source of excellent project management knowledge, professional advice, methodology guidelines, and more.</p>
                </div>
              </div>

              <div className="col-sm-4 ">            
                <div className=" p-4 gray-bg">
                  <h4 className='pt-3 fw-bold'> Project Portfolio Management </h4>
                  <p>Cloudknod’s IT Project Managers will assist you with concept generation, investment in promising projects, and the delivery of outstanding results via PPM.</p>
                </div>
              </div>

              <div className="col-sm-4">
              <div className="p-4 gray-bg">        
                  <h4 className='pt-3 fw-bold'>Project Management and Process Optimization</h4>
                  <p>Streamline your IT project management processes to save resources and deliver more value with Cloudknod’s top-notch Project Management experts.</p>
                </div>
                
              </div>

              <div className="col-sm-4 py-4 ">
              
                <div className="p-4 gray-bg">
                  <h4 className='pt-3 fw-bold'> Project Scoping and Delivery </h4>
                  <p>Proper and accurate project management estimates are the key prerequisite for cost-effective, competitive, and productive operations.</p>
                </div>
              </div>

              <div className="col-sm-4 py-4">
              <div className="p-4 gray-bg">
                <h4 className='pt-3 fw-bold'>Change Management</h4>
                <p> If you need to transform the way your business operates, delivers value, and meets challenges via IT solutions, our Project Management experts are here to help.</p>
              </div>
                
              </div>

              <div className="col-sm-4 py-4">
              <div className="p-4 gray-bg">
                  <h4 className='pt-3 fw-bold'> PMaaS  </h4>
                  <p>PMaaS is the most expedient and flexible way to ensure proper project implementation with a dedicated IT Project Manager at your disposal.</p>
                </div>
                
              </div>

             </div>
             </div>  
      {/* Expert PM section ends*/}


      
      {/* Request Consultation */}
      <section className='my-5' style={{color: '#fff'}} >
        <div className="container p-5">
          <div className="row">
            <div className="col-sm-9 border-start border-warning development-header">
                <h1 style={{ fontWeight:'bold'}} >Select professional IT services for your software development project.</h1>
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



