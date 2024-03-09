import React from 'react'
import Bg from '../../images/shining2.jpg';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';



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
                <h1 className="container">IT<span className='text-warning'> Services </span>with Sparkling Results</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

      {/* Services we provide */}
      <div className="containerSpecial advantageBg">
          <div className="row py-5 mx-5">
              <div className="col ">
                <h1 className='content-header fw-bold py-4 px-3'>Services We Provide</h1>
                <p className="lead px-3"> Cloudknod, a custom software development vendor and consulting partner. Our custom software development services are designed to create tailored solutions that address your specific needs.</p>
          
                <div className="col-sm-5 fw-bold lead">
                  <div className='p-3 mb-2' style={{backgroundColor:'#fafafa'}}>Custom Software Development</div>
                  <div className='p-3 mb-2' style={{backgroundColor:'#fafafa'}}>Consulting</div>
                  <div className='p-3 mb-2' style={{backgroundColor:'#fafafa'}}>Delivery</div>
                  <div className='p-3 mb-2' style={{backgroundColor:'#fafafa'}}>Support and Maintenance</div>

                </div>

                <div className="col-sm-7">

                </div>
                
              </div>
          </div>
        </div>

        
        {/* Services we provide ends */}


      {/* Cloudknod's Guarantee section */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row py-5 mx-5">
              <div className="col ">
                <h1 className='content-header fw-bold py-4 px-3'>Cloudknod's Guarantee</h1>
                <p className="lead px-3">Cloudknod, a custom software development vendor and consulting partner, our team is known for:</p>
                
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-5 mx-5">
              <div className="col-sm-6 ">
              
                <div className=" px-3">
                  <h4 className='pt-3 fw-bold'> High Quality & Professional practices </h4>
                  <p>In order to practice and maintain up-to-date approaches and implement modern projects, our specialists are regularly skilled and certified by the most trusted and progressive entities.</p>
                </div>
              </div>

              <div className="col-sm-6">
              
                <div className=" px-3">
                  <h4 className='pt-3 fw-bold'>Individual approach</h4>
                  <p>At Cloudknod, we build tailor-made software solutions for our clients. We seek to employ and allocate IT specialists with both the hard and soft skills required to seamlessly integrate with your in-house team.</p>
                </div>
              </div>

              <div className="col-sm-6 py-4">
              
                <div className="px-3">
                  <h4 className='pt-3 fw-bold'>Strategic development partner</h4>
                  <p>The referrals we get from our customers prove our reliability and dedication. After your IT project is completed, we will be happy to provide ongoing support and maintenance, upgrade existing solutions, and implement new ones.</p>
                </div>
              </div>

              <div className="col-sm-6  py-4 ">
              
                <div className="px-3">
                  <h4 className='pt-3 fw-bold'>Customer trust</h4>
                  <p>Thanks to our highly skilled developers, high professional standards, effective workflows, and focus on quality, we have earned trust and satisfied over 500 customers and still counting.</p>
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


