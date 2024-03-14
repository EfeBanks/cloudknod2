import React from 'react'
import Bg from '../../../images/movie-poster.jpg';
import M1 from '../../../images/m1.jpg';
import M2 from '../../../images/m2.jpg';
import M3 from '../../../images/m3.jpg';
import MusicSite from '../../../images/music-site.jpg';
import MusicSite2 from '../../../images/music-site2.jpg';
import Consultation from '../../../Components/Consultation';
import ForLogistics from '../../../Components/views/ForLogistics';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';



export default function Media() {
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
                <h1 className="container"><span className='text-warning'>Media & Entertainment </span> Software Development</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

      {/* Statistics */}
      <div className="containerSpecial consultationBg">
        <div className="row py-sm-5 py-2 mx-sm-5 mx-2">
            <div className="col-sm-4">
            <h2 className=' fw-bold py-sm-4 py-2 mt-sm-5 mt-2'>Work with an expert Media & Entertainment IT company </h2>
            </div>
            <div className="col-sm-8 ps-2">
              
            <div className="row py-sm-4 py-2">

              <div className="col-sm me-2 hoverlay-container">
                <img src={M1} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-sm-3 px-1">
                  {/* <h4 className='pt-3'>30+ Successful IT Projects</h4> */}
                  <p className='pt-3'>Over the years, we have been delivering Media Entertainment Software solutions for some large companies as well as SMEs.</p>
                </div>
              </div>

              <div className="col-sm  me-2 hoverlay-container ">
                <img src={M2} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-sm-3 px-1">
                  <p className='pt-3'>As a top-ranked Media & Entertainment app development company, Cloudknod employs IT experts with a wide tech stack to build the best solutions for our Customers.</p>
                </div>
              </div>

              <div className="col-sm me-2 hoverlay-container ">
                <img src={M3} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-sm-3 px-1">
                  <p className='pt-3'>Over the last 12 years, our team has gained experience and vast knowledge in creating Media and Entertainment Software Solutions for our Customers.</p>
                </div>
              </div>
            </div>

            </div>
        </div>
      </div>

      {/* Statistics ends */}

      {/* Media App */}
      <div className="containerSpecial consultationBg mt-3">
        <div className="row py-sm-4 py-2 pb-sm-5 pb-1 ms-sm-5 ms-2">
            <div className="col-sm pe-sm-5 pe-2 pb-sm-4 pb-2">
            <h1 className='content-header fw-bold py-4'>Cloudknod's case studies in Media & Entertainment Software Development</h1> 
            <p className=''>Cloudknod, as a Media & Entertainment app development company, helps to create best-in-class software tools for your business to perfectly fit your needs. See our best results reflected in our delivered projects.</p>
            
            </div>
        </div>

        <div className="row pb-sm-5 pb-2">
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

      {/* Media App ends */}


      {/* Software Dev. section */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row py-sm-5 py-2 mx-sm-5 mx-2">
              <div className="col ">
                <h1 className='content-header fw-bold py-4 '>Media & Entertainment Software Development </h1> 
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-sm-5 pb-2 mx-sm-5 mx-0">
              <div className="col-sm-6 ">
                <div className="p-4 gray-bg">
                  <h4 className='pt-3 fw-bold'>Social Media Software Development</h4>
                  <p>Our Experts will assume responsibility for any aspect of Social Media Platform Software Development Projects, including social networking and dating apps, to establish new ways of communication.</p>
                </div>
              </div>

              <div className="col-sm-6 ">            
                <div className=" p-4 gray-bg">
                  <h4 className='pt-3 fw-bold'>Live Streaming App Development</h4>
                  <p> Cloudknod builds the best Live Video Streaming software to enable you to create, extend and manage your streaming channels or apps effectively and with the highest quality.</p>
                 
                </div>
              </div>

              <div className="col-sm-6 py-sm-4 py-0">
              <div className="p-4 gray-bg">
                  <h4 className='pt-3 fw-bold'> Digital Asset Management Solutions </h4>
                  <p>Implementing a Digital Asset Management System is not a problem with Cloudknod, as we know how to help enterprises automate media lifecycle processes and deliver content via custom DAM tools.</p>
                </div>
                
              </div>

              <div className="col-sm-6 py-sm-4 py-0 ">
              
                <div className="p-4 gray-bg">
                  <h4 className='pt-3 fw-bold'>Video on Demand App Development</h4>
                  <p>At Cloudknod, we specialize in Video on Demand App Development. We not only build top-class VOD solutions but, also enhances existing products via the best technologies.</p>
                </div>
              </div>

          

             </div>
             </div>
             {/* Software Dev. section ends*/}

            {/* Request Consultation */}
         <section className='my-5' style={{color: '#fff'}} >
        <div className="container p-5">
          <div className="row">
            <div className="col-sm-9 border-start border-warning development-header">
                <h1 style={{ fontWeight:'bold'}} >Select professional IT services for your software development project.</h1>
            </div>
            <div className="col-sm text-center ">
              <Link to='/ContactForm'>
                <button className='btn btn-warning request p-sm-3 p-2'>Request Services</button>
              </Link>
            </div>
          </div>
        </div>
        </section>
         {/* Request Consultation ends */}

          {/* IT Skills section */}
      ` <div className="containerSpecial advantageBg mt-3">
          <div className="row py-sm-5 py-2 mx-sm-5 mx-2">
              <div className="col-sm ">
                <h1 className='content-header fw-bold py-4'>Cloudknod’s tech stack for Media & Entertainment Software Development </h1> 
                <p className=''>Benefit from highly experienced specialists in web and mobile development with a trusted Media & Entertainment software development company. Cloudknod employs the latest technologies, frameworks, and components to create solutions that combine a strong back-end with easy to use design.</p>
                <ForLogistics />
              </div>
            </div>
          </div>
             {/* IT Skills section ends*/}


          {/* Consultation section */}
          <Consultation />
        {/* Consultation section ends*/}

    </div>
  )
}

