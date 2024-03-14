import React from 'react'
import BrandLogo from '../../images/cloudknod-logo2.png';
import Bg from '../../images/building.jpg';
//import MusicSite from '../../images/music-site.jpg';
//import MusicSite2 from '../../images/music-site2.jpg';
//import ForLogistics from '../../Components/views/ForLogistics';
import Consultation from '../../Components/Consultation';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Carousel from '../../Components/carousel/Carousel';
import { Link } from 'react-router-dom';



export default function About() {
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
                <h1 className="container"><span className='text-warning'>Get to Know </span> Your Software Experts</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

       {/* At CloudKnod... */}
       <div className="containerSpecial consultationBg">
        <div className="row align-items-center mx-sm-5 mx-2">
            <div className="col-sm-8 m-sm-4 p-sm-4 "  >
              {/* <h2 className='border-end p-4 fw-bold'>At CloudKnod, we empower businesses through innovation offering custom software development services tailored to meet specific needs through professional and efficient processes. </h2> */}
              <p className='border-end p-4 '>CloudKnod is a leading technology company that specializes in providing comprehensive software development and cloud services across a wide range of technology stacks. </p>
            </div>
            <div className="col-sm cloudknod-image">
            <img src={BrandLogo} alt="cloudknod award" className='img-fluid p-2' style={{height:'200px', width:"200px"}}/>
            </div>
        </div>
      </div>  
        {/* At CloudKnod... ends */}

        {/* Get to know us section */}
      <div className="containerSpecial advantageBg mt-3 pb-4">
          <div className="row py-5 mx-sm-5 mx-2">
              <div className="col ">
                <h1 className='content-header fw-bold py-sm-4 py-2 pb-2'>Get to Know Us</h1> 
              </div>
          </div>

          <div className="row pb-5 mx-sm-5 mx-2">
          <div className="col-sm-4">
            <h4 className='pt-3 fw-bold'>CLOUD<span className='text-warning'>KNOD</span></h4>
            <p>With a commitment to innovation, efficiency, and client satisfaction, we empower businesses to transform their ideas into robust digital solutions. Our team of skilled engineers, developers, and cloud architects is dedicated to delivering cuttingedge solutions tailored to meet the unique needs of our clients. </p>
          </div>

          <div className="col-sm-4">
            <h4 className='pt-3 fw-bold'>OUR<span className='text-warning'> MISSION</span></h4>
            <p>At CloudKnod, our mission is to empower businesses with innovative software solutions and cloud services that drive growth, efficiency, and digital transformation. We are dedicated to delivering excellence through our technical expertise, client-centric approach, and commitment to advancing the technology landscape.  </p>
          </div>

          <div className="col-sm-4">
            <h4 className='pt-3 fw-bold'>OUR<span className='text-warning'> VISION</span></h4>
            <p>Our vision at CloudKnod is to be the foremost provider of software development and cloud services globally, recognized for our unwavering commitment to quality, innovation, and client success. We aspire to shape the future of technology, enabling businesses of all sizes to thrive in the digital age by harnessing the power of cuttingedge solutions and cloud technologies.  </p>
          </div>
          </div>

        </div>

      {/* Get to know us section ends*/}


      {/* Software Dev. section */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row py-5 mx-sm-5 mx-2">
              <div className="col ">
                <h1 className='content-header fw-bold py-4 pb-2'>CloudKnod's Areas of Tech Expertise</h1> 
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-5 mx-sm-5 mx-2">
              <div className="col-sm-6 ">
                <div className="p-4 gray-bg">
                  <h4 className='pt-3 fw-bold'>Custom Software Development</h4>
                  <p>Our Experts will bring your idea to life with our diverse expertise and a deep understanding of customers' business goals across a wide variety of industries.</p>
                </div>
              </div>

              <div className="col-sm-6 ">            
                <div className=" p-4 gray-bg">
                <h4 className='pt-3 fw-bold'>Managed Delivery</h4>
                  <p>Entrust your IT project to Cloudknod. We will help relieve you of daily management pains and efforts as well as keep your software products up-to-date and maintained.</p>
                 
                </div>
              </div>

              <div className="col-sm-6 py-sm-4">
              <div className="p-4 gray-bg">
                  <h4 className='pt-3 fw-bold'> Mobile Development </h4>
                  <p>With Cloudknod, you can obtain a top-class custom mobile application of any complexity. We possess deep expertise and knowledge of the latest mobile development frameworks and designs.</p>
                </div>
                
              </div>

              <div className="col-sm-6 py-sm-4 ">
              
                <div className="p-4 gray-bg">
                  <h4 className='pt-3 fw-bold'>Web Development</h4>
                  <p> At Cloudknod, we will help you design and create a web app that will resolve your industry-specific business challenges, boost your efficiency, win new clients and increase the rate of your users satisfaction.</p>
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

          {/* Our Services */}

          <Carousel/>

          {/* Our Services ends */}

        {/* Consultation section */}
          <Consultation />
        {/* Consultation section ends*/}


    </div>
  )
}

