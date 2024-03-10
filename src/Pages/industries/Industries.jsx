import React from 'react'
import './Industries.css'
import Carousel from '../../Components/carousel/Carousel';
import Bg from '../../images/navigate22.jpg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Form';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';



export default function Industries() {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className='IndustryBg'>
      {/* Banner section */}
      <div className="row ">
        <div className='col androidBg-content'>
          <img src={Bg} alt="cloudknod Bg" />
            <div className="container bg-content">
              <div className="androidBg-inner-content p-5">
                <h1 className="container"> Navigate Your Technology Challenges With <span className='text-warning'>Cloudknod</span></h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

      <Carousel/>

      {/* Cloudknod Advantage section */}
      <div className="containerSpecial advantageBg">
          <div className="row py-5 mx-sm-5 mx-2">
              <div className="col ">
                <h1 className='content-header fw-bold py-4'>Cloudknod's Advantages </h1>
                
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-5 mx-sm-5 mx-2">
              <div className="col-sm-6 ">
              
                <div className=" px-3">
                  <h4 className='pt-3'>Multi-industry track record</h4>
                  <p>Cloudknod's portfolio of delivered IT projects includes over 1,000 successful tech initiatives in the most demanding and data-driven sectors.</p>
                </div>
              </div>

              <div className="col-sm-6">
              
                <div className=" px-3">
                  <h4 className='pt-3'>Worldwide reach</h4>
                  <p>Owing to multiple R&D centers and globally distributed IT staff, we are in the right position to help customers from any country.</p>
                </div>
              </div>

              <div className="col-sm-6 py-sm-4">
              
                <div className="px-3">
                  <h4 className='pt-3'>Extensive IT talent pool</h4>
                  <p>Cloudknod employs over 500 tech experts – including developers,data scientists, DevOps engineers etc. – who are ready to deliver IT projects of any scope and complexity.</p>
                </div>
              </div>

              <div className="col-sm-6  py-sm-4 ">
              
                <div className="px-3">
                  <h4 className='pt-3'>High customer satisfaction rates</h4>
                  <p>The overwhelming majority of our customers – 98% – are totally content with the results we deliver, stay with us, and refer us to their partners and peers.</p>
                </div>
              </div>
             </div>
             </div>
             {/* Cloudknod Advantage section ends*/}

             {/* Consultation section */}
          <div className="containerSpecial consultationBg ">
           <div className="row py-5 mt-3 mx-sm-5 mx-2 pe-2">
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
