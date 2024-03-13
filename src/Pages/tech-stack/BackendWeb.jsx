import React from 'react'
import Bg from '../../images/bg1.jpg';
import Ba1 from '../../images/ba1.jpg';
import Ba2 from '../../images/ba2.jpg';
import Ba3 from '../../images/ba3.jpg';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MusicSite from '../../images/music-site.jpg';
import MusicSite2 from '../../images/music-site2.jpg';
import Carousel from '../../Components/carousel/Carousel';
import Consultation from '../../Components/Consultation';
import { Link } from 'react-router-dom';



export default function BackendWeb() {
  
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
                <h1 className="container"> Work With Top<span className='text-warning'> Back-end </span> Developers </h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

      {/* Statistics */}
      <div className="containerSpecial consultationBg">
        <div className="row py-sm-5 py-1 mx-sm-5 mx-2">
            <div className="col-sm-4">
            <h2 className=' fw-bold py-4 mt-sm-5 mt-2'>Qualified Back-end specialists committed to your success </h2>
            </div>
            <div className="col-sm-8 ps-2">
              
            <div className="row py-4">

              <div className="col-sm me-2 hoverlay-container">
                <img src={Ba1} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-sm-3 px-1">
                  <h4 className='pt-sm-3 pt-2'>80+ Backend Developers</h4>
                  <p>Cloudknod employs high-caliber and certified Back-end software engineers able to build solutions of any complexity for data-intensive industries</p>
                </div>
              </div>

              <div className="col-sm  me-2 hoverlay-container ">
                <img src={Ba2} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-sm-3 pt-2'>12+ Years of Experience </h4>
                  <p>Over the years, we have evolved to become a custom software vendor for challenging Back-end development projects. </p>
                </div>
              </div>

              <div className="col-sm me-2 hoverlay-container ">
                <img src={Ba3} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-sm-3 pt-2'>150+ Satisfied Customers</h4>
                  <p>Each year, Cloudknod delivers IT projects for companies in various industries such as Finance, Media, Healthcare, etc.</p>
                </div>
              </div>
            </div>

            </div>
        </div>
      </div>

      {/* Statistics ends */}

      {/* Project Section */}
      <div className="containerSpecial consultationBg mt-3">
        <div className="row py-4 pb-5 ms-sm-5 ms-2">
            <div className="col-sm pe-5 pb-4">
            <h1 className='content-header fw-bold py-4'>Some of our Projects</h1> 
            <p className='lead-sm'>When it comes to Back-end software development, Cloudknod is in the right position to offer highly qualified software engineers for your initiative and deliver the best possible results</p> 
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
            <Link to='/ContactForm'>
              <button className='btn btn-warning request p-sm-3 fw-bold'>Request Consultation</button>
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


