import React from 'react'
import Bg from '../../../images/uiBg.jpg';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MusicSite from '../../../images/music-site.jpg';
import HealthSite from '../../../images/healthwebsite.jpg';
import TeleHealth from '../../../images/telehealth.jpg';
import Telecom from '../../../images/telecomApp.jpg';



export default function UiUxDesign() {
  
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
                <h1 className="container"><span className='text-warning'> Design Services </span>to Grow Your Business</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}        
      
      {/* Design Process section */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row py-5 mx-5">
              <div className="col">
                <h1 className='content-header fw-bold py-4 px-3'>We streamline the design process for you</h1>
                
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-5 mx-5">
              <div className="col-sm-6 ">
                <div className="p-4 gray-bg border-start border-warning">
                  <h4 className='pt-3 fw-bold'>1) Business and User Research</h4>
                  <p>Cloudknod prioritizes product development areas, building on the needs of markets, users, and businesses.</p>
                </div>
              </div>

              <div className="col-sm-6 ">            
                <div className=" p-4 gray-bg border-start border-warning">
                  <h4 className='pt-3 fw-bold'>2) Problem Identification </h4>
                  <p>Cloudknod analyzes revealed problems and documents solutions to ensure process transparency.</p>
                </div>
              </div>

              <div className="col-sm-6 py-4">
              <div className="p-4 gray-bg border-start border-warning">
                  <h4 className='pt-3 fw-bold'>3) Designing and Testing with Users </h4>
                  <p>In order to save customers money, we conduct tests during the design stage rather than during the development stage.</p>
                </div>
                
              </div>

              <div className="col-sm-6 py-4 ">
              
                <div className="p-4 gray-bg border-start border-warning">
                  <h4 className='pt-3 fw-bold'>4) Product Support and Development</h4>
                  <p>Cloudknod creates a framework to ensure the iterative growth of your product.</p>
                </div>
              </div>

             </div>
             </div>  
      {/* Design Process section ends*/}

    
         {/* Project Section */}
         <div className="containerSpecial consultationBg mt-3">
        <div className="row pt-4 ms-5">
            <div className="col-sm pe-5">
            <h1 className='content-header fw-bold py-5'>Some of our Projects</h1>  
            </div>

        </div>
        <div className="row py-5">
          <div className="col-sm-6">
            <img src={MusicSite} alt="cloudknod" className='img-fluid hover-img' />
            <p className='py-4 lead fw-bold text-center'>A Music Site for an Entertainment Company</p>

          </div>

          <div className="col-sm-6">
            <img src={HealthSite} alt="cloudknod" className='img-fluid hover-img' />
            <p className='py-4 lead fw-bold text-center'>A Corporate Healthcare Provider Website Design</p>
          </div>

          <div className="col-sm-6">
          <img src={Telecom} alt="cloudknod" className='img-fluid hover-img' />
            <p className='py-4 lead fw-bold text-center'>A Telecommunication Project Design</p> 
          </div>

          <div className="col-sm-6">
            <img src={TeleHealth} alt="cloudknod" className='img-fluid hover-img' />  
            <p className='py-4 lead fw-bold text-center'>A TeleHealth App for a Medical Healthcare Institute</p>
            </div>
       
        </div>
        
           
      </div>

      {/* Project Section ends */}
      
      {/* Request Consultation */}
      <section className='my-5' style={{color: '#fff'}} >
        <div className="container p-5">
          <div className="row">
            <div className="col-sm-9 border-start border-warning development-header">
                <h1 style={{ fontWeight:'bold'}} >Select professional Design Services for your software project.</h1>
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




