import React from 'react'
import Bg from '../../../images/cloudBg.jpg';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Clo1 from '../../../images/clo1.jpg';
import Clo2 from '../../../images/clo2.jpg';
import A3 from '../../../images/a3.jpg'



export default function CloudDevelopment() {
  
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
                <h1 className="container">Unleashing the Power of <span className='text-warning'>Cloud Development </span> </h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

      {/* Statistics */}
      <div className="containerSpecial consultationBg">
        <div className="row py-5 mx-5">
            <div className="col-sm-4">
            <h2 className=' fw-bold py-4 mt-5'>Excellent Cloud Development Services</h2>
            </div>
            <div className="col-sm-8 ps-2">
              
            <div className="row py-4">

              <div className="col-sm me-2 hoverlay-container">
                <img src={Clo1} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>40+ Certified Cloud Engineers</h4>
                  <p>Cloudknod as an expert Cloud Development company offers a rich talent pool to ensure excellent cloud development solutions.</p>
                </div>
              </div>

              <div className="col-sm  me-2 hoverlay-container ">
                <img src={Clo2} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                <h4 className='pt-3'>200+ Cloud Development Projects </h4>
                <p>Cloudknod's team of Cloud engineers is notable for their high level of technology and hands-on experience
                  </p>
                </div>
              </div>

              <div className="col-sm me-2 hoverlay-container ">
                <img src={A3} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                <h4 className='pt-3'>12 Years of Experience</h4>
                  <p>Over the last 12 years, our team has gained experience in providing excellent cloud development software solutions.</p>
               
                 
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
                <h1 className='content-header fw-bold py-4 px-3'>Cloudknod's Guarantee</h1>
                <p className="lead px-3">Cloudknod, a cloud development vendor and consulting partner, our team is notable for:</p>
                
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-5 mx-5">
              <div className="col-sm-6 ">
              
                <div className=" px-3">
                  <h4 className='pt-3 fw-bold'> Expertise and Excellent Service Delivery </h4>
                  <p>At CloudKnod, our cloud development services are geared toward harnessing the full potential of cloud computing to drive innovation and scalability for your business. Our experienced cloud developers work diligently to design, build, and optimize cloud-based solutions that align with your specific needs and goals. </p>
                </div>
              </div>

              <div className="col-sm-6">
              
                <div className=" px-3">
                  <h4 className='pt-3 fw-bold'>Latest Cloud Technologies</h4>
                  <p> Whether you require cloudnative applications, data storage and processing, or cloud migration services, we leverage the latest cloud technologies and best practices to deliver flexible, secure, and cost-effective solutions.</p>
                </div>
              </div>

              <div className="col-sm-6 py-4">
              
                <div className="px-3">
                  <h4 className='pt-3 fw-bold'>Reduce Cost and Improve Performance</h4>
                  <p> With CloudKnod as your cloud development partner, you can unlock the agility and scalability of the cloud, reduce infrastructure costs, and improve accessibility and performance. Let's collaborate to embark on a transformative journey into the cloud, with CloudKnod as your guide to unleashing the full power of cloud development for your business.</p>
                </div>
              </div>

              <div className="col-sm-6  py-4 ">
              
                <div className="px-3">
                  <h4 className='pt-3 fw-bold'>Customer Trust</h4>
                  <p>Thanks to our highly skilled engineers, high professional standards, effective workflows, and focus on quality, we have earned trust and satisfied over 200 customers and still counting.</p>
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



