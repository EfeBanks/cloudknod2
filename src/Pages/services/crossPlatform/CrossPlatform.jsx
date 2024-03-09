import React from 'react'
import Bg from '../../../images/uiBg3.jpg';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Cr1 from '../../../images/cr1.jpg';
import Cr2 from '../../../images/cr2.jpg';
import A3 from '../../../images/a3.jpg';
import Carousel from '../../../Components/carousel/Carousel';


export default function CrossPlatform() {
  
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
                <h1 className="container"><span className='text-warning'> Cross-Platform App </span>Development Services</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

       {/* Statistics */}
       <div className="containerSpecial consultationBg">
        <div className="row py-5 mx-5">
            <div className="col-sm-4">
            <h2 className=' fw-bold py-4 mt-5'>High quality Cross-Platform Mobile App Development Services</h2>
            </div>
            <div className="col-sm-8 ps-2">
              
            <div className="row py-4">

              <div className="col-sm me-2 hoverlay-container">
                <img src={Cr1} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>50+ Cross-Platform Developers</h4>
                  <p>We employ skilled and experienced IT talent to carry out projects to ensure maximum satisfaction of our customers.</p>
                </div>
              </div>

              <div className="col-sm  me-2 hoverlay-container ">
                <img src={Cr2} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>25+ Cross-Platform Projects </h4>
                  <p>
                    Over the years, we have successfully implemented dozens of complex initiatives.
                  </p>
                </div>
              </div>

              <div className="col-sm me-2 hoverlay-container ">
                <img src={A3} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>12 Years of Experience</h4>
                  <p>Over the last 12 years, our team has gained experience in Cross-Platform App Solutions.</p>
                 </div>
              </div>
            </div>

            </div>
        </div>
      </div>

      {/* Statistics ends */}

      
      {/* Cross Platform service section */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row py-5 mx-5">
              <div className="col">
                <h1 className='content-header fw-bold py-4 px-3'>All Cross-Platform Development Services for Modern Businesses</h1>
                
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-5 mx-5">
              <div className="col-sm-4 ">
                <div className="p-4 gray-bg">
                  <h4 className='pt-3 fw-bold'>Custom Cross-Platform Development</h4>
                  <p>Contact us to develop a Cross-Platform app for any purpose and within any industry.</p>
                </div>
              </div>

              <div className="col-sm-4 ">            
                <div className=" p-4 gray-bg">
                  <h4 className='pt-3 fw-bold'> Cross-Platform App Quality Assurance </h4>
                  <p>Reach out to our Cross-Platform App Testing experts to identify any possible bugs proactively and on time.</p>
                </div>
              </div>

              <div className="col-sm-4">
              <div className="p-4 gray-bg">
                  <h4 className='pt-3 fw-bold'> Cross-Platform App Migration </h4>
                  <p>Cloudknod is the safe way to convert your app to cross-platform with minimum difficulties.</p>
                </div>
                
              </div>

              <div className="col-sm-4 py-4 ">
              
                <div className="p-4 gray-bg">
                  <h4 className='pt-3 fw-bold'>Cross-Platform App Design</h4>
                  <p>Cross-platform app development can be problematic when it comes to design. Cloudknod's experts will address this challenge.</p>
                </div>
              </div>

              <div className="col-sm-4 py-4">
              <div className="p-4 gray-bg">
                <h4 className='pt-3 fw-bold'>Cross-Platform App Development Consulting</h4>
                <p> Cloudknod will serve as a source of expertise and professional advice for your Cross-Platform Mobile Application Development.</p>
              </div>
                
              </div>

              <div className="col-sm-4 py-4">
              <div className="p-4 gray-bg">
                  <h4 className='pt-3 fw-bold'> Support and Maintenance </h4>
                  <p>Cloudknod's skilled Cross-Platform Support engineers ensure your app always functions perfectly and with the highest possible uptime.</p>
                </div>
                
              </div>

             </div>
             </div>  
      {/* Cross Platform service section ends*/}

         {/* Project Section */}
         <div className="containerSpecial consultationBg mt-3">
        <div className="row pt-4 ms-5">
            <div className="col-sm pe-5">
            <h1 className='content-header fw-bold py-4'>Expert Custom Software Solutions </h1> 
            <p className='lead'>Cloudknod's tech team regularly implements Cross-Platform Web App Development and Cross-Platform Mobile Development projects for a variety of industries.</p> 
            </div>

        </div>
          <Carousel />
           
      </div>

      {/* Project Section ends */}

      
      {/* Request Consultation */}
      <section className='my-5' style={{color: '#fff'}} >
        <div className="container p-5">
          <div className="row">
            <div className="col-sm-9 border-start border-warning development-header">
                <h1 style={{ fontWeight:'bold'}} >Avail yourself of Cloudknod's Cross-Platform Application Development Services to match your technology and business goals.</h1>
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


