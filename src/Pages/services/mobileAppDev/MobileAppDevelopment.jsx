import React from 'react'
import Bg from '../../../images/uiBg3.jpg';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Mo1 from '../../../images/mo1.jpg';
import Mo2 from '../../../images/mo2.jpg';
import Mo3 from '../../../images/mo3.jpg';
import Eflight from '../../../images/telecomApp.jpg'
import Ecomm from '../../../images/ecom.png';


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
                <h1 className="container"><span className='text-warning'> Mobile App  </span>Development Services</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

       {/* Statistics */}
       <div className="containerSpecial consultationBg">
        <div className="row py-5 mx-5">
            <div className="col-sm-4">
            <h2 className=' fw-bold py-4 mt-5'>Your Mobile App Users will like the great UX delivered by Cloudknod on time and within budget</h2>
            </div>
            <div className="col-sm-8 ps-2">
              
            <div className="row py-4">

              <div className="col-sm me-2 hoverlay-container">
                <img src={Mo3} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>80+ Delivered Projects</h4>
                  <p>Cloudknod has implemented tens of Mobile application development projects, building great solutions and meeting Client's needs.</p>
                </div>
              </div>

              <div className="col-sm  me-2 hoverlay-container ">
                <img src={Mo2} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>70+ Mobile App Developers </h4>
                  <p>
                  Cloudknod's Mobile app developers are fully prepared with the required skills and experience to implement complex initiatives following robust delivery practices. 
                  </p>
                </div>
              </div>

              <div className="col-sm me-2 hoverlay-container ">
                <img src={Mo1} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>130+ Satisfied Customers</h4>
                  <p>Over the years, we have successfully delivered to our customers custom mobile app solution to meet their needs.</p>
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
                <h1 className='content-header fw-bold py-4 px-3'>Cloudknod’s Mobile App Development Services</h1>
          </div>

            <div className="row py-4">   
                <div className="col-sm-6 fw-bold lead">
                  <div className='p-3 mb-2 yellowBg' style={{backgroundColor:'#fafafa'}}>Mobile UI/UX Design</div>
                  <div className='p-3 mb-2 yellowBg' style={{backgroundColor:'#fafafa'}}>Native Mobile App Development</div>
                  <div className='p-3 mb-2 yellowBg' style={{backgroundColor:'#fafafa'}}>Cross Platform Mobile App Development</div>
                  

                </div>

                <div className="col-sm-6 fw-bold lead">
                <div className='p-3 mb-2 yellowBg' style={{backgroundColor:'#fafafa'}}>Automated QA and Testing</div>
                  <div className='p-3 mb-2 yellowBg' style={{backgroundColor:'#fafafa'}}>Mobile Team Augmentation</div>
                  <div className='p-3 mb-2 yellowBg' style={{backgroundColor:'#fafafa'}}>Support and Maintenance</div>
                </div>
                
              </div>
          </div>
        </div>

        
        {/* Services we provide ends */}

        {/* Project Section */}
      <div className="containerSpecial consultationBg mt-3">
        <div className="row py-4 pb-5 ms-5">
            <div className="col-sm pe-5 pb-4">
            <h1 className='content-header fw-bold py-4'>Cloudknod's mobile case studies</h1> 
            <p className='lead'>Software engineers employed by our mobile app development company apply state-of-the-art technologies and the best industry practices to help businesses. With us, you will upgrade the way you serve your end-users and boost their trust via world-class solutions built for the mobile-first world.</p> 
            </div>

        </div>

        <div className="row pb-5">

          <div className="col-sm-6">
            <img src={Ecomm} alt="cloudknod" className='img-fluid hover-img' />
            <p className='py-4 lead fw-bold text-center'>An online store mobile App</p> 
            {/* <p className='py-4 lead fw-bold text-center'>An E-Learning App for an Art School</p> */}
            
          </div>

          <div className="col-sm-6">
            <img src={Eflight} alt="cloudknod" className='img-fluid hover-img' />
            <p className='py-4 lead fw-bold text-center'>An online flight booking app</p>
          </div>
       
        </div>
      </div>


      {/* Project Section ends */}


      {/* Mobile self-service section */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row py-5 mx-5">
              <div className="col">
                <h1 className='content-header fw-bold py-4 px-3'>Mobile Self-Service Apps For You</h1>
                <p className="lead px-3">With our custom mobile app, end-users are able to access products, manage their accounts, resolve tasks on their own and receive notifications. With us, your UX will be intuitive, purposeful, and comfortable. Cloudknod grows our body of knowledge with each project and reuses it to cut costs and time needed for similar initiatives.</p>
                
              </div>
          </div>

            
            {/* inner content */}
            <div className="row mx-5">
              <div className="col-sm m-3 " style={{backgroundColor:'#fafafa'}}>
              
                <div className="px-3">
                  <h4 className='pt-3 fw-bold'> Finance </h4>
                  <p>With our expertise in mobile banking, we guarantee that your clients will be able to manage their funds securely and with ease. This includes depositing, exchanging, converting, transferring, paying, viewing records, investment banking etc.</p>
                </div>
              </div>

              <div className="col-sm m-3" style={{backgroundColor:'#fafafa'}}>
              
                <div className=" px-3">
                  <h4 className='pt-3 fw-bold'>Healthcare</h4>
                  <p>Having Cloudknod as your tech partner, you can be sure that the patients of your medical facility can order consultations, schedule appointments, make payments, rate doctors, view health history, see medicines etc. </p>
                </div>
              </div>

              </div>

              <div className='row mx-5'>

              <div className="col-sm m-3 py-4" style={{backgroundColor:'#fafafa'}}>
              
                <div className="px-3">
                  <h4 className='pt-3 fw-bold'>eCommerce</h4>
                  <p>When it comes to eCommerce, be rest assured of the best possible and seamless shopping experiences via our self-service mobile apps. Buyers can make orders, make payments with options and create account etc in your tailor-made app.</p>
                </div>
              </div>

              <div className="col-sm  m-3 py-4 " style={{backgroundColor:'#fafafa'}}>
              
                <div className="px-3">
                  <h4 className='pt-3 fw-bold'>Logistics</h4>
                  <p>When it comes to transportation, mobility, and logistics, we will make sure that your clients are content with the services they get via your apps – be it ticket booking and purchase, car-sharing, cargo delivery and tracking, etc. </p>
                </div>
              </div>

              </div>

              <div className='row mx-5 pb-5'>

              <div className="col-sm  py-4 m-3" style={{backgroundColor:'#fafafa'}}>
              
                <div className="px-3">
                  <h4 className='pt-3 fw-bold'>Telecom</h4>
                  <p>At Cloudknod, we will provide the clients of your telecom services with seamless experiences so that they can easily manage their packages, subscribe to and modify their plans, top up their balances, etc. via intuitive user accounts with a streamlined UI. </p>
                </div>
              </div>

              <div className="col-sm  py-4 m-3" style={{backgroundColor:'#fafafa'}}>
              
                <div className="px-3">
                  <h4 className='pt-3 fw-bold'>Media & Entertainment</h4>
                  <p>Provide your end-clients with bespoke solutions for enjoying the content of your various multimedia apps – offline modes included – with the highest possible quality and interactiveness. Let us be your tech partner in multimedia.</p>
                </div>
              </div>

             </div>
             </div>  
      {/* Mobile Self-service section ends*/}

      
      {/* Request Consultation */}
      <section className='my-5' style={{color: '#fff'}} >
        <div className="container p-5">
          <div className="row">
            <div className="col-sm-9 border-start border-warning development-header">
                <h1 style={{ fontWeight:'bold'}} >Discover our innovation-driven expertise and cost-effective App Development Services.</h1>
            </div>
            <div className="col-sm ms-4 d-flex align-items-center ">
              <button className='btn btn-warning request p-3 fw-bold'>Request Consultaion</button>
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



