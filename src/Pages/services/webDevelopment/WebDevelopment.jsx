import React from 'react'
import Bg from '../../../images/programmingBg2.jpg';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import W1 from '../../../images/w1.jpg';
import W2 from '../../../images/w2.jpg';
import W3 from '../../../images/w3.jpg';
import FoodSite from '../../../images/noblenourish.jpg';
import HealthSite from '../../../images/healthwebsite.jpg';



export default function Services() {
  
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
                <h1 className="container"><span className='text-warning'> Web  </span>Development Company</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

      {/* Statistics */}
      <div className="containerSpecial consultationBg">
        <div className="row py-5 mx-5">
            <div className="col-sm-4">
            <h2 className=' fw-bold py-4 mt-5'>Comprehensive Web Development Services of a high standard </h2>
            </div>
            <div className="col-sm-8 ps-2">
              
            <div className="row py-4">

              <div className="col-sm me-2 hoverlay-container">
                <img src={W1} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>270+ Web Projects</h4>
                  <p>Cloudknod's ability to align all stakeholders and concentrate resources properly is reflected in our extended portfolio of projects related to Custom Web Development Services.</p>
                </div>
              </div>

              <div className="col-sm  me-2 hoverlay-container ">
                <img src={W2} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>200+ Web Experts </h4>
                  <p>Being a trusted web development company, we deliver every aspect of a web project: web design, development, testing, and more. </p>
                </div>
              </div>

              <div className="col-sm me-2 hoverlay-container ">
                <img src={W3} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>100+ UI/UX Web Experts</h4>
                  <p>Working with our Web development experts means getting a state-of-the-art UI covering the overall design with optimized layouts.</p>
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
              <div className="col ">
                <h1 className='content-header fw-bold py-4 px-3'>Cloudknod’s Web Development Services</h1>
          </div>
          

          <div className="row py-4">
                <div className="col-sm-6 fw-bold lead">
                  <div className='p-3 mb-2 yellowBg' style={{backgroundColor:'#fafafa'}}>Web Design</div>
                  <div className='p-3 mb-2 yellowBg' style={{backgroundColor:'#fafafa'}}>Cloud Web</div>
                  <div className='p-3 mb-2 yellowBg' style={{backgroundColor:'#fafafa'}}>Web App Development</div>
                  <div className='p-3 mb-2 yellowBg' style={{backgroundColor:'#fafafa'}}>Web Quality Assurance</div>
                  

                </div>

                <div className="col-sm-6 fw-bold lead">
                  <div className='p-3 mb-2 yellowBg' style={{backgroundColor:'#fafafa'}}>Web Integration</div>
                  <div className='p-3 mb-2 yellowBg' style={{backgroundColor:'#fafafa'}}> Web Optimization</div>
                  <div className='p-3 mb-2 yellowBg' style={{backgroundColor:'#fafafa'}}>Support and Maintenance</div>

                </div>
                
              </div>
          </div>
        </div>

        
        {/* Services we provide ends */}


      {/* Web Dev section */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row py-5 mx-5">
              <div className="col ">
                <h1 className='content-header fw-bold py-4 px-3'>Cloudknod's Web Development Case Studies</h1>
                <p className="lead px-3">As a custom web development company, we provide a full range of services to create best-in-class software solutions for your business that perfectly meet your needs. The results are reflected in our case studies.</p>
                
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-5">
          <div className="col-sm-6">
            <img src={FoodSite} alt="cloudknod" className='img-fluid hover-img' />
            <p className='py-4 lead fw-bold text-center'>Website for a Food Distribution Company</p>

          </div>

          <div className="col-sm-6">
            <img src={HealthSite} alt="cloudknod" className='img-fluid hover-img' />
            <p className='py-4 lead fw-bold text-center'>A Corporate Healthcare Provider Website Design</p>
            
          </div>
       
        </div>
      </div>  
      {/* Web Dev section ends*/}

      
      {/* Request Consultation */}
      <section className='my-5' style={{color: '#fff'}} >
        <div className="container p-5">
          <div className="row">
            <div className="col-sm-9 border-start border-warning development-header">
                <h1 style={{ fontWeight:'bold'}} >Select professional web developers for your software development project.</h1>
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



