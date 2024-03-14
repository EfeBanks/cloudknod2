import React from 'react'
import Bg from '../../images/bg1.jpg';
import Fr1 from '../../images/fr1.jpg';
import Fr2 from '../../images/fr2.jpg';
import Fr3 from '../../images/fr3.jpg';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MusicSite from '../../images/music-site.jpg';
import MusicSite2 from '../../images/music-site2.jpg';
import Carousel from '../../Components/carousel/Carousel';
import Consultation from '../../Components/Consultation';
import { Link } from 'react-router-dom';
// import FrontendDev from '../../Components/views2/FrontendDev';
// import BackendDev from '../../Components/views2/BackendDev';
// import MobileDev from '../../Components/views2/MobileDev';



export default function FrontendWeb() {
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
              <div className="androidBg-inner-content p-sm-5 p-2">
                <h1 className="container"> <span className='text-warning'> Front-end</span> Development Services</h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

      {/* Statistics */}
      <div className="containerSpecial consultationBg">
        <div className="row py-sm-5 py-2 mx-sm-5 mx-2">
            <div className="col-sm-4">
            <h2 className=' fw-bold py-sm-4 py-2 mt-sm-5 mt-2'>Enhance your team with skilled Front-end development experts </h2>
            </div>
            <div className="col-sm-8 ps-2">
              
            <div className="row py-sm-4 py-2">

              <div className="col-sm me-2 hoverlay-container">
                <img src={Fr3} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>180+ Delivered Projects</h4>
                  <p>Cloudknod applies the latest interface development technologies taking full advantage of web browsers' capabilities for top UI/UX.</p>
                </div>
              </div>

              <div className="col-sm  me-2 hoverlay-container ">
                <img src={Fr2} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>100+ Front-end Developers </h4>
                  <p>To solve your business problems, our front-end developers use a complete set of tools, from HTML5 to the latest JavaScript frameworks </p>
                </div>
              </div>

              <div className="col-sm me-2 hoverlay-container ">
                <img src={Fr1} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-3'>12 Years of Experience</h4>
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
        <div className="row py-sm-4 py-2 pb-sm-5 pb-2 ms-sm-5 ms-2">
            <div className="col-sm pe-5 pb-4">
            <h1 className='content-header fw-bold py-4'>Some of our Projects</h1> 
            <p className='lead-sm'>At Cloudknod, we help to create functional and visually stunning websites for your business that leaves a lasting impression on your visitors and turns them to returning customers. See our best results reflected in our delivered projects.</p> 
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
                <h1 style={{ fontWeight:'bold'}} >Collaborate with Cloudknod to apply the latest Front-end Development technologies to carry out your software initiative.</h1>
            </div>
            <div className="col-sm text-center ">
            <Link to='/ContactForm'>
              <button className='btn btn-warning request p--sm-3 p-2'>Request Consultation</button>
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


