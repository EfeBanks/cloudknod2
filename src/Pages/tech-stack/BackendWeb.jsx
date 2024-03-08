import React from 'react'
import Bg from '../../images/bg1.jpg';
import Ba1 from '../../images/ba1.jpg';
import Ba2 from '../../images/ba2.jpg';
import Ba3 from '../../images/ba3.jpg';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MusicSite from '../../images/music-site.jpg';
import MusicSite2 from '../../images/music-site2.jpg';
import Carousel from '../../Components/carousel/Carousel';
// import FrontendDev from '../../Components/views2/FrontendDev';
// import BackendDev from '../../Components/views2/BackendDev';
// import MobileDev from '../../Components/views2/MobileDev';



export default function BackendWeb() {
  // const [active, setActive] = React.useState(1);
  // const SetView = (active) => {
  //   setActive(active);
  // };

  // const ActiveView = () => {
  //   switch (active) {
  //     case 1:
  //       return <FrontendDev/>;
  //     case 2:
  //       return <BackendDev />;
  //     case 3:
  //       return <MobileDev />;
  //     default:
  //       return <FrontendDev />;
  //   }
  // };
  
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
                <h1 className="container"> Work With Top<span className='text-warning'> Back-end </span> Developers </h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

      {/* Statistics */}
      <div className="containerSpecial consultationBg">
        <div className="row py-5 mx-5">
            <div className="col-sm-4">
            <h2 className=' fw-bold py-4 mt-5'>Qualified Back-end specialists committed to your success </h2>
            </div>
            <div className="col-sm-8 ps-2">
              
            <div className="row py-4">

              <div className="col-sm me-2 hoverlay-container">
                <img src={Ba1} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>80+ Backend Developers</h4>
                  <p>Cloudknod employs high-caliber and certified Back-end software engineers able to build solutions of any complexity for data-intensive industries</p>
                </div>
              </div>

              <div className="col-sm  me-2 hoverlay-container ">
                <img src={Ba2} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>12+ Years of Experience </h4>
                  <p>Over the years, we have evolved to become a custom software vendor for challenging Back-end development projects. </p>
                </div>
              </div>

              <div className="col-sm me-2 hoverlay-container ">
                <img src={Ba3} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>150+ Satisfied Customers</h4>
                  <p>Each year, Cloudknod delivers IT projects for companies in various industries such as Finance, Media, Healthcare, etc.</p>
                </div>
              </div>
            </div>

            </div>
        </div>
      </div>

      {/* Statistics ends */}


      {/* Techstack section */}
      {/* <div className="containerSpecial consultationBg mt-3">
        <div className="row py-4 pb-5 ms-5">
            <div className="col-sm pe-5 pb-4">
            <h1 className='content-header fw-bold py-4'>Technologies We Use</h1> 
            <div className="row containerSpecial">
            <div className="col-sm show-btns">
              <div className='fw-bold row'>
                <div className='col-sm-3 mb-3'>
                <span className='dev-hover py-1 ' onClick={()=> SetView(1)}>FRONT-END DEVELOPMENT</span> 
                </div>

                <div className='col-sm-3 mb-3'>
                <span className='dev-hover py-1 col-sm-4' onClick={()=> SetView(2)}>BACK-END DEVELOPMENT</span> 
                </div>

                <div className='col-sm-3 mb-3'>
                <span className='dev-hover py-1' onClick={()=> SetView(3)}>MOBILE APP DEVELOPMENT</span>
                </div>
                </div> 
            </div>
          </div>
          {ActiveView()}
            
            </div>

        </div>
      </div> */}

      {/* Techstack section ends */}

      {/* Project Section */}
      <div className="containerSpecial consultationBg mt-3">
        <div className="row py-4 pb-5 ms-5">
            <div className="col-sm pe-5 pb-4">
            <h1 className='content-header fw-bold py-4'>Some of our Projects</h1> 
            <p className='lead'>When it comes to Back-end software development, Cloudknod is in the right position to offer highly qualified software engineers for your initiative and deliver the best possible results</p> 
            </div>

        </div>

        <div className="row pb-5">
          <div className="col-sm-6">
            <img src={MusicSite} alt="cloudknod" className='img-fluid hover-img' />
            <p className='py-4 lead fw-bold text-center'>A Music Site for an Entertainment Company</p>

          </div>

          <div className="col-sm-6">
            <img src={MusicSite2} alt="cloudknod" className='img-fluid hover-img' />
            <p className='py-4 lead fw-bold text-center'>A Body Fitness and Training School in Ireland</p>
          </div>
       
        </div>
      </div>


      {/* Project Section ends */}
      
            {/* Request Consultation */}
            <section className='my-5' style={{color: '#fff'}} >
        <div className="container p-5">
          <div className="row">
            <div className="col-sm-9 border-start border-warning development-header">
                <h1 style={{ fontWeight:'bold'}} >

            Collaborate with Cloudknod to apply the latest Back-end Development technologies to carry out your software initiative.</h1>
            </div>
            <div className="col-sm ms-4 d-flex align-items-center ">
              <button className='btn btn-warning request p-3 fw-bold'>Request Consultation</button>
            </div>
          </div>
        </div>
        </section>
         {/* Request Consultation ends */}


        {/* Area of Expertise */}
        <Carousel/>
        {/* Area of Expertise ends */}


         {/* Consultation section */}
         <div className="containerSpecial consultationBg">
           <div className="row py-5 mt-3 mx-5 pe-2">
              <div className="col-sm-5">
                <h2 className=' fw-bold py-4'>Get a free IT consultation</h2>
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


