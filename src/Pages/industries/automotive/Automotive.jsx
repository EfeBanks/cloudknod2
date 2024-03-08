import React from 'react'
import Bg from '../../../images/automotive.jpg';
import A1 from '../../../images/a1.jpg';
import A2 from '../../../images/a2.jpg';
import A3 from '../../../images/a3.jpg';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export default function Automotive() {
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
                <h1 className="container"><span className='text-warning'>Automotive</span> Software Development</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

      {/* Statistics */}
      <div className="containerSpecial consultationBg">
        <div className="row py-5 mx-5">
            <div className="col-sm-4">
            <h2 className=' fw-bold py-4 mt-5'>Advanced Automotive Software Development Services </h2>
            </div>
            <div className="col-sm-8 ps-2">
              
            <div className="row py-4">

              <div className="col-sm me-2 hoverlay-container">
                <img src={A1} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>20+ Successful Projects</h4>
                  <p>Being a trusted vendor of Automotive Software Development Services, Cloudknod builds Automotive IT softwares, IoT and Connectivity apps etc.</p>
                </div>
              </div>

              <div className="col-sm  me-2 hoverlay-container ">
                <img src={A2} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>30+ Automotive Software Engineers </h4>
                  <p>As a leading software development company, Cloudknod employs both knowledgeable and skilled experts with industry-specific expertise. </p>
                </div>
              </div>

              <div className="col-sm me-2 hoverlay-container ">
                <img src={A3} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>12 Years of Experience</h4>
                  <p>Over the last 12 years, our team has gained experience in Automotive Software Solutions.</p>
                </div>
              </div>
            </div>

            </div>
        </div>
      </div>

      {/* Statistics ends */}

      {/* Request Consultation */}
      <div className="containerSpecial consultationBg mt-3">
        <div className="row py-4 pb-5 ms-5">
            <div className="col-sm-9 pe-5 pb-4">
            <h2 className=' fw-bold pt-5 mt-5'>Whatever your software challenge is, our IT solution experts are ready to help you. Schedule a free online consultation. </h2>
    
            <Button variant="warning" className='request slider-btn btn btn-lg mt-4 fw-bold'>
                  Request Consultation
              </Button> 
            </div>
        </div>
      </div>

      {/* Request Consultation ends */}


      {/* Why Automotive section */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row py-5 mx-5">
              <div className="col ">
                <h1 className='content-header fw-bold py-4'>Why do Automotive customers choose Cloudknod</h1>
                
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-5 mx-5">
              <div className="col-sm-6 ">
              
                <div className=" px-3">
                  <h4 className='pt-3 fw-bold'>In-depth Automotive expertise </h4>
                  <p className='justify-text'>At Cloudknod, we pride ourselves on our deep understanding of the automotive industry. Andersen's team is comprised of experts with extensive knowledge of the sector and its needs, which allows our company to develop solutions tailored to the unique challenges and opportunities you face in your Automotive business.</p>
                </div>
              </div>

              <div className="col-sm-6">
              
                <div className=" px-3">
                  <h4 className='pt-3 fw-bold'>Robust data security</h4>
                  <p className='justify-text'> For security reasons, we maintain restricted access to labs exclusively for particular project employees, ensuring the utmost confidentiality of customer info within Andersen. All our automotive solutions are fortified with state-of-the-art security measures.</p>
                </div>
              </div>

              <div className="col-sm-6">
              
                <div className="px-3">
                  <h4 className='pt-3 fw-bold'>Tailored solutions</h4>
                  <p className='justify-text'>At Cloudknod, we take pride in our personalized approach to crafting adaptable solutions, collaborating with you to meet your current needs and future-proof your business in the constantly changing automotive landscape.</p>
                </div>
              </div>

              <div className="col-sm-6 ">
              
                <div className="px-3">
                  <h4 className='pt-3 fw-bold'>Effective onboarding</h4>
                  <p className='justify-text'>At Cloudknod, our expert onboarding practices ensure seamless integration of IT specialists into Automotive tech projects. Clear guidelines, thorough training, and access to the right resources make our staff members valuable and high-performing contributors. This efficiency saves you time and resources, propelling your initiatives to more ambitious heights.</p>
                </div>
              </div>

             </div>
             </div>
             {/* Why Automotive section ends*/}

            {/* Request Consultation */}
         <section className='my-5' style={{color: '#fff'}} >
        <div className="container p-5">
          <div className="row">
            <div className="col-sm-9 border-start border-warning development-header">
                <h1 style={{ fontWeight:'bold'}} >Select professional IT services for your software development project.</h1>
            </div>
            <div className="col-sm ms-4 d-flex align-items-center ">
              <button className='btn btn-warning request p-2 btn btn-lg fw-bold'>Request Services</button>
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
