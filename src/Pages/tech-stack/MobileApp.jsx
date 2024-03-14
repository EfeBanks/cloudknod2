import React from 'react'
import Bg from '../../images/bg1.jpg';
import Mo1 from '../../images/mo1.jpg';
import Mo2 from '../../images/mo2.jpg';
import Mo3 from '../../images/mo3.jpg';
import Consultation from '../../Components/Consultation';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//import Elearn from '../../images/elearn.jpg';
import Eflight from '../../images/telecomApp.jpg'
import Ecomm from '../../images/ecom.png';
import Carousel from '../../Components/carousel/Carousel';
import { Link } from 'react-router-dom';


export default function MobileApp() {
  
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
              <div className="androidBg-inner-content p-sm-5 p-2">
                <h1 className="container"><span className='text-warning'> Mobile Application </span> Development Services </h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

      {/* Statistics */}
      <div className="containerSpecial consultationBg">
        <div className="row py-m-5 py-2 mx-sm-5 mx-2">
            <div className="col-sm-4">
            <h2 className=' fw-bold py-sm-4 py-2 mt-sm-5 mt-2'>Your Mobile App Users will like the great UX delivered by Cloudknod </h2>
            </div>
            <div className="col-sm-8 ps-2">
              
            <div className="row py-sm-4 py-2">

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

      {/* Project Section */}
      <div className="containerSpecial consultationBg mt-3">
        <div className="row py-sm-4 py-2 pb-sm-5 pb-2 ms-sm-5 ms-2">
            <div className="col-sm pe-5 pb-4">
            <h1 className='content-header fw-bold py-sm-4 py-2'>Some of our Projects</h1> 
            <p className='lead'>When it comes to Back-end mobile software development, Cloudknod is in the right position to offer highly qualified software engineers for your initiative and deliver the best possible results</p> 
            </div>

        </div>

        <div className="row pb-sm-5 pb-2">

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

      {/* Cloudknod's Guarantee section */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row py-sm-5 py-2 mx-sm-5 mx-2">
              <div className="col ">
                <h1 className='content-header fw-bold py-4 px-3'>Mobile self-service apps for you</h1>
                <p className="lead px-sm-3 px-1">With us, your User Experience will be intuitive, purposeful, and comfortable. Such custom mobile apps enable end-users to access products, manage their accounts, and resolve tasks on their own. </p>
                
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-sm-5 pb-2 mx-sm-5 mx-2">
              <div className="col-sm-6 ">
              
                <div className=" px-sm-3 px-1">
                  <h4 className='pt-3 fw-bold'> Finance </h4>
                  <p>With our expertise in mobile banking, we guarantee that your clients will be able to manage their funds securely and with ease. This includes depositing, exchanging, converting, transferring, paying, viewing records, investment banking etc.</p>
                </div>
              </div>

              <div className="col-sm-6">
              
                <div className=" px-sm-3 px-1">
                  <h4 className='pt-3 fw-bold'>Healthcare</h4>
                  <p>Having Cloudknod as your tech partner, you can be sure that the patients of your medical facility can order consultations, schedule appointments, make payments, rate doctors, view health history, see medicines etc. </p>
                </div>
              </div>

              <div className="col-sm-6 py-sm-4 py-1">
              
                <div className="px-sm-3 px-1">
                  <h4 className='pt-3 fw-bold'>eCommerce</h4>
                  <p>When it comes to eCommerce, be rest assured of the best possible and seamless shopping experiences via our self-service mobile apps. Buyers can make orders, make payments with options and create account etc in your tailor-made app.</p>
                </div>
              </div>

              <div className="col-sm-6  py-sm-4 py-1 ">
              
                <div className="px-sm-3 px-1">
                  <h4 className='pt-3 fw-bold'>Logistics</h4>
                  <p>When it comes to transportation, mobility, and logistics, we will make sure that your clients are content with the services they get via your apps – be it ticket booking and purchase, car-sharing, cargo delivery and tracking, etc. </p>
                </div>
              </div>

              <div className="col-sm-6  py-sm-4 py-1">
              
                <div className="px-sm-3 px-1">
                  <h4 className='pt-3 fw-bold'>Telecom</h4>
                  <p>At Cloudknod, we will provide the clients of your telecom services with seamless experiences so that they can easily manage their packages, subscribe to and modify their plans, top up their balances, etc. via intuitive user accounts with a streamlined UI. </p>
                </div>
              </div>

              <div className="col-sm-6  py-sm-4 py-1">
              
                <div className="px-sm-3 px-1">
                  <h4 className='pt-3 fw-bold'>Media & Entertainment</h4>
                  <p>Provide your end-clients with bespoke solutions for enjoying the content of your various multimedia apps – offline modes included – with the highest possible quality and interactiveness. Let us be your tech partner in multimedia.</p>
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
                <h1 style={{ fontWeight:'bold'}} >
                Discover our innovation-driven expertise and cost-effective App Development Services.</h1>
            </div>
            <div className="col-sm text-center ">
            <Link to='/ContactForm'>
              <button className='btn btn-warning request p-sm-3 p-2'>Request Consultation</button>
            </Link>
            </div>
          </div>
        </div>
        </section>
         {/* Request Consultation ends */}


        {/* Area of Expertise */}
        <Carousel/>
        {/* Area of Expertise ends */}

       {/* Consultation section */}
        <Consultation />
        {/* Consultation section ends*/}
      


    </div>
  )
}



