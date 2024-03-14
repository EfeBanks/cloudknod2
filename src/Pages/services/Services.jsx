import React from 'react'
import Bg from '../../images/shining2.jpg';
import Consultation from '../../Components/Consultation';
import { Link } from 'react-router-dom';
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
              <div className="androidBg-inner-content p-sm-5 p-2">
                <h1 className="container">IT<span className='text-warning'> Services </span>with Sparkling Results</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

      {/* Services we provide */}
      <div className="containerSpecial advantageBg">
          <div className="row py-sm-5 py-2 mx-sm-5 mx-2">
              <div className="col ">
                <h1 className='content-header fw-bold py-sm-4 py-2 px-3'>Services We Provide</h1>
                <p className=" px-3"> Cloudknod, a custom software development vendor and consulting partner. Our custom software development services are designed to create tailored solutions that address your specific needs.</p>
          
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
          <div className="row py-sm-5 py-2 mx-sm-5 mx-2">
              <div className="col ">
                <h1 className='content-header fw-bold py-sm-4 py-2 px-sm-3 px-1'>Cloudknod's Guarantee</h1>
                <p className=" px-sm-3 px-1">As a custom software development vendor and consulting partner, our team is known for:</p>
                
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-5 mx-sm-5 mx-2">
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

              <div className="col-sm-6 py-sm-4">
              
                <div className="px-3">
                  <h4 className='pt-3 fw-bold'>Strategic development partner</h4>
                  <p>The referrals we get from our customers prove our reliability and dedication. After your IT project is completed, we will be happy to provide ongoing support and maintenance, upgrade existing solutions, and implement new ones.</p>
                </div>
              </div>

              <div className="col-sm-6  py-sm-4 ">
              
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
            <div className="col-sm text-center">
            <Link to='/ContactForm'>
              <button className='btn btn-warning request p-sm-3 p-2'>Request Services</button>
            </Link>
            </div>
          </div>
        </div>
        </section>
         {/* Request Consultation ends */}


        {/* Consultation section */}
          <Consultation />
        {/* Consultation section ends*/}


    </div>
  )
}



