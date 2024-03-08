import React from 'react'
import Bg from '../../../images/QABg.jpg';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Qa1 from '../../../images/qa1.jpg';
import Qa2 from '../../../images/qa2.jpg';
import Qa3 from '../../../images/qa3.jpg'



export default function QualityAssurance() {
  
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
                <h1 className="container"><span className='text-warning'>Quality Assurance </span>Services</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

        {/* Statistics */}
        <div className="containerSpecial consultationBg">
        <div className="row py-5 mx-5">
            <div className="col-sm-4">
            <h2 className=' fw-bold py-4 mt-5'>A certified QA team to build your testing processes</h2>
            </div>
            <div className="col-sm-8 ps-2">
              
            <div className="row py-4">

              <div className="col-sm me-2 hoverlay-container">
                <img src={Qa1} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>40+ Developed Test Strategies</h4>
                  <p>Regarding your project challenges and needs, our Center of Excellence experts define and develop custom test strategies.</p>
                </div>
              </div>

              <div className="col-sm  me-2 hoverlay-container ">
                <img src={Qa2} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                <h4 className='pt-3'>20+ Projects Being Managed </h4>
                <p>As of now, our QA managers are successfully running an entire range of complex projects across a variety of industries</p>
                </div>
              </div>

              <div className="col-sm me-2 hoverlay-container ">
                <img src={Qa3} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                <h4 className='pt-3'>100+ Projects Automated</h4>
                  <p>QA automation teams set up test automation to speed up testing and time to market.</p>
                
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
                <h1 className='content-header fw-bold py-4 px-3'>QA Services and Solutions</h1>
                <p className="lead px-3"> Our QA services and solutions team of wexperts ensure that your expectations are met with the highest form of service delivery.</p>
          
                <div className="col-sm-5 fw-bold lead">
                  <div className='p-3 mb-2' style={{backgroundColor:'#fafafa'}}>Automation Testing Services</div>
                  <div className='p-3 mb-2' style={{backgroundColor:'#fafafa'}}>Consultancy and Audit Services</div>
                  <div className='p-3 mb-2' style={{backgroundColor:'#fafafa'}}>Managed Testing Services</div>
                  <div className='p-3 mb-2' style={{backgroundColor:'#fafafa'}}>Custom Testing Services</div>
                  <div className='p-3 mb-2' style={{backgroundColor:'#fafafa'}}>Performance Testing Services</div>

                </div>

                <div className="col-sm-7">

                </div>
                
              </div>
          </div>
        </div>

        
        {/* Services we provide ends */}


      {/* Cloudknod's Guarantee section */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row pt-5 mx-5">
              <div className="col ">
                <h1 className='content-header fw-bold py-4 px-3'>The most common testing issues that affect software</h1>
                
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-5 mx-5" style={{lineHeight:'2.5rem'}}>
              <div className="col-sm-4 ">
              
                <div className=" px-3">
                  <h4 className='pt-3 fw-bold'> Low product quality: </h4>
                  <ul>
                    <li>Loss of users and revenue;</li>
                    <li>Product instability;</li>
                    <li>Low product rating from users.</li>
                  </ul>

                  </div>
              </div>

              <div className="col-sm-4">
              
                <div className=" px-3">
                <h4 className='pt-3 fw-bold'> Testing Process Immaturity: </h4>
                  <ul>
                    <li>Test strategy is not defined;;</li>
                    <li>Insufficient test management and control;</li>
                    <li>QA specialists are not involved in the development.</li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-4">
              
                <div className="px-3">
                <h4 className='pt-3 fw-bold'> Shortage of QA resources: </h4>
                  <ul>
                    <li>Missed deadlines;</li>
                    <li>A growing number of defects;</li>
                    <li>Poor testing and coverage.</li>
                  </ul>
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
                <h1 style={{ fontWeight:'bold'}} >Assess your product and processes to find out the causes of any problems</h1>
            </div>
            <div className="col-sm ms-4 d-flex align-items-center ">
              <button className='btn btn-warning request p-3 fw-bold'>Order a QA Audit</button>
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



