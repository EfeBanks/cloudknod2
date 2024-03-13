import React from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Bg from '../images/bg2.jpg';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export default function ContactForm() {
   // Extracts pathname property(key) from an object
   const { pathname } = useLocation();

   // Automatically scrolls to top whenever pathname changes
   useEffect(() => {
     window.scrollTo(0, 0);
   }, [pathname]);
   
  return (
    <div className='home-body'>
      {/* Banner section */}
      <div className="row">
        <div className='contactformBg'>
          <img src={Bg} alt="cloudknod Bg" />
            <div className="bg-content">
              <div className="androidBg-inner-content p-sm-5 p-0">
                <h1 className="container"><span className='text-warning'>Schedule</span> a free consultation</h1>
              </div>
        
            </div>       
        </div>
      </div>
        {/* Banner section ends */}
        
        {/* Consultation section*/}
      <div className="containerSpecial consultationBg">
           <div className="row py-5 mx-sm-5 mx-2 pe-2">
              <div className="col-sm-5">
                <h2 className=' fw-bold py-sm-4 py-2'>Schedule a free consultation</h2>
                <p className='fw-bold'>What happens next?</p>
                <ol>
                  <li>An expert contacts you after having analyzed your requirements;</li>
                  <li>If needed, we sign an NDA to ensure the highest privacy level;</li>
                  <li>We submit a comprehensive project proposal with estimates, timelines, CVs, etc.</li>
                </ol>
                <p className='fw-bold'>Customers who trust us</p>
              </div>
             

              <div className="col-sm-7 formBg">
              <Form className='mx-4 px-sm-3 py-4'>
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

