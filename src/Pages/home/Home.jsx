import React from 'react';
import './Home.css';
import home2 from '../../videos/home2.mp4';
import BrandLogo from '../../images/cloudknod-logo2.png';
import Web from '../../images/web.jpg';
import App from '../../images/mobile.jpg';
import Cloud from '../../images/cloud1.jpg';
import Devops from '../../images/devops.jpg';
import Ui from '../../images/uiux.jpg';
import It from '../../images/desktop.jpg';
import Finance from '../../images/finance.jpg'
import Health from '../../images/health.jpg';
import Media from '../../images/media.jpg';
import Logistics from '../../images/logistics.jpg';
import Showall from '../../Components/views/Showall';
import Frontend from '../../Components/views/Frontend';
import Backend from '../../Components/views/Backend';
import Mobile from '../../Components/views/Mobile';
import Carousel from '../../Components/carousel/Carousel';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Consultation from '../../Components/Consultation';




function Home() {
  // const [toggle, setToggle] = useState(false);
  const [active, setActive] = React.useState(1);
  const SetView = (active) => {
    setActive(active);
  };

  const ActiveView = () => {
    switch (active) {
      case 1:
        return <Showall/>;
      case 2:
        return <Frontend />;
      case 3:
        return <Backend />;
      case 4:
        return <Mobile />;
      default:
        return <Showall />;
    }
  };
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
 

  return (
    <div className='home-body'>

      {/* Banner section */}
      <div className="row">
        <div className='col videoBg'>
            <video src={home2} autoPlay loop muted />
            {/* <img src={PictureBg} alt="cloudknod bg" className='hide-pic'/> */}
            <div className="container bg-content">
              <div className="bg-inner-content mt-sm-5 mt-2 p-sm-5 p-4">
                <h1>Empowering Business Through Innovation</h1>
                <div>
                  <Link to='/ContactForm'>
                    <span className='bg-button btn btn-warning ms-sm-5 ms-3'>Let's discuss your project now</span>
                  </Link>
                 
                  </div>
              </div>
              <div className="bg-inner-content"></div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

    {/* At CloudKnod... */}
      <div className="containerSpecial consultationBg">
        <div className="row align-items-center mx-sm-5 mx-3">
            <div className="col-sm-8 m-sm-4 m-2 mt-3 p-2 ps-0 "  >
              <p className='border-end p-sm-4 p-2 at-cloudknod'>At CloudKnod, we understand that every business is unique, and so are their software requirements. Our custom software development services are designed to create tailored solutions that address your specific needs. Whether you need a web application, mobile app, desktop software, or any other software solution, our team is ready to bring your vision to life.</p>
            </div>
            <div className="col-sm-3 cloudknod-image">
            <img src={BrandLogo} alt="cloudknod award" className='img-fluid' />
            </div>
        </div>
      </div>  
        {/* At CloudKnod... ends */}

        {/* Our services */}
        <div className="containerSpecial consultationBg mt-3 pt-5">
          <div className="row mt-3 mx-5">
            <div className="col">
              <h1 className='services-header fw-bold text-center'>We Provide the Best Services for You</h1>
              
            </div>
          </div>

          <div className="row mt-5 mx-sm-5 mx-2">
              <div className="col-sm-2">
              <img src={App} alt="cloudknod" className='img-fluid'/>
              </div>
              <div className="col-sm-4 border-end services">
                <h5 className='fw-bold'>MOBILE APP DEVELOPMENT</h5>
                <p>At CloudKnod, we specialize in mobile development services that redefine user experiences and drive digital innovation</p>
              </div>
              <div className="col-sm-2">
              <img src={Web} alt="cloudknod" className='img-fluid'/>
              </div>
              <div className="col-sm-4 services">
                <h5 className='fw-bold'>WEB DEVELOPMENT</h5>
                <p>At CloudKnod, we excel in web development services that go beyond just creating websites. </p>
              </div>
          </div>

          <div className="row mx-sm-5 mx-2">
              <div className="col-sm-2">
              <img src={Cloud} alt="cloudknod" className='img-fluid'/>
              </div>
              <div className="col-sm-4 border-end services">
                <h5 className='fw-bold'>CLOUD DEVELOPMENT</h5>
                <p>At CloudKnod, our cloud development services are geared toward harnessing the full potential of cloud computing to drive innovation and scalability for your business. </p>
              </div>
              <div className="col-sm-2">
              <img src={Devops} alt="cloudknod" className='img-fluid'/>
              </div>
              <div className="col-sm-4 services">
                <h5 className='fw-bold'>DEVOPS SERVICES</h5>
                <p>CloudKnod's DevOps services are designed to optimize your software development and delivery processes, ensuring speed, efficiency, and reliability.  </p>
              </div>
          </div>

          <div className="row mb-5 mx-sm-5 mx-2">
              <div className="col-sm-2">
              <img src={Ui} alt="cloudknod" className='img-fluid'/>
              </div>
              <div className="col-sm-4 border-end services">
                <h5 className='fw-bold'> UI/UX DESIGN</h5>
                <p>At CloudKnod, we specialize in UI/UX design services that transform digital interactions into captivating, intuitive experiences. </p>
              </div>
              <div className="col-sm-2">
              <img src={It} alt="cloudknod" className='img-fluid'/>
              </div>
              <div className="col-sm-4 services">
                <h5 className='fw-bold'>IT SECURITY MANAGEMENT</h5>
                <p>CloudKnod's IT security management services are focused on safeguarding your organization's critical data and systems from evolving cyber threats. </p>
              </div>
          </div>
        </div>
         {/* Our services ends*/}

         {/* Contact us */}
         <section className='my-5' style={{color: '#fff'}} >
        <div className="container p-5">
          <div className="row">
            <div className="col-sm-9 border-start border-warning development-header">
                <h1 style={{ fontWeight:'bold'}} >Looking for Development Services?</h1>
            </div>
            <div className="col-sm ms-4 d-flex align-items-center">
              <button className='btn btn-warning contact-btn'>Contact Us</button>
            </div>
          </div>
        </div>
        </section>
         {/* Contact us ends */}

         {/* Industries we serve */}
         <div className="containerSpecial consultationBg pt-5">
          <div className="row mx-5">
            <div className="col">
            <h1 className='services-header fw-bold text-center'>Industries We Serve</h1>
            </div>
          </div>
         
         <div className="row mx-sm-5 mx-2 pb-3">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card shadow">
                <img src={Finance} className="card-img-top img-fluid " alt="..." style={{width:'100%'}} />
                <div className="card-body">
                  <h5 className="card-title text-center">Financial Services</h5>
                  <p className="card-text p-2 industries-text">CloudKnod is dedicated to driving growth within the financial sector. Our cutting-edge cloud-based solutions offer financial institutions streamlined operations, reduced costs, and enhanced agility. </p>
                  
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card shadow">
                <img src={Health} className="card-img-top img-fluid" alt="..."  style={{width:'100%'}}/>
                <div className="card-body">
                  <h5 className="card-title text-center">Healthcare</h5>
                  <p className="card-text p-2 industries-text">In the ever-evolving realm of healthcare, CloudKnod is your strategic partner for transformation. Our innovative software solutions are designed to catapult the healthcare industry into a new era of digital excellence.</p>
                  
                </div>
              </div>
            </div>
          </div>

          <div className="row mx-sm-5 mx-2 pb-3">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card shadow">
                <img src={Media} className="card-img-top img-fluid" alt="..."  style={{width:'100%'}} />
                <div className="card-body">
                  <h5 className="card-title text-center">Media & Entertainment</h5>
                  <p className="card-text p-2 industries-text">Win an era defined by rapid digitalization and evolving consumer preferences, CloudKnod is at the forefront of empowering the Media and Entertainment industry. </p>
                  
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card shadow">
                <img src={Logistics} className="card-img-top img-fluid" alt="..."  style={{width:'100%'}} />
                <div className="card-body">
                  <h5 className="card-title text-center">Logistics</h5>
                  <p className="card-text p-2 industries-text">In the world of logistics, CloudKnod stands as your strategic partner for transformative solutions. Our innovative software offerings are purpose-built to meet the unique demands of the logistics.  </p>
                  
                </div>
              </div>
            </div>
          </div>

         </div>

          {/* Industries we serve ends */}

            {/* Consultation */}
         <section className='my-5 text-light text-center' style={{color:'#fff'}} >
        <div className="container p-4">
          <div className="row">
            <div className="col-sm ">
                <h1 className="consultation-header services-header">Get Free Consultation</h1>    
            <p>Discuss your project with our Experts and get a free quote.</p>
            <button className='btn btn-warning request'>Contact Us</button>
            </div>
           
          </div>
        </div>
        </section>
         {/* Consultation ends */}

         {/* Set of Technologies */}
         <div className="containerSpecial consultationBg pt-sm-5 pt-1">
          <div className="row mt-5 mx-sm-5 mx-2">
            <div className="col-sm">
            <h1 className='services-header fw-bold text-center'>CloudKnod's set of technologies for software development</h1>
            <p className='sm-lead mt-3 mb-3 text-justify make-small'>Cooperate with competent and knowledgeable IT experts in web and mobile software engineering. As a trusted tech and business partner, we apply the most advanced technologies, frameworks, and components to build software notable for both its solid and effective back-end with intuitive UI/UX.</p>
            </div>
          </div>

         <div className="row containerSpecial mx-sm-5 mx-2 show-btns">
            <div className="col">
            
        {/* <div className={`btn btn-secondary me-2 ${active === 1 ? 'styleActive active' : 'styleActive'}`} onClick={() => SetView(1) }>Show All</div>  */}
        <div className={`btn btn-secondary me-2 div-hover ${active === 1 ? 'styleActive' : ''}`} onClick={() => SetView(1) }>Show All</div> 
        <div className={`btn btn-secondary me-2 div-hover ${active === 2 ? 'styleActive' : ''}`} onClick={()=> SetView(2)}> Frontend</div>
        <div className={`btn btn-secondary me-2 div-hover ${active === 3 ? 'styleActive' : ''}`} onClick={()=> SetView(3)}>Backend</div>
        <div className={`btn btn-secondary me-2 div-hover ${active === 4 ? 'styleActive' : ''}`} onClick={()=> SetView(4)}>Mobile</div>
        </div>

          </div>
          {ActiveView()}

         </div>

          {/* Set of Technologies ends*/}

          {/* Area of Expertise*/}
            <Carousel />

          {/* Area of Expertise ends*/}

          {/* Consultation section */}
             <Consultation />
          {/* Consultation section ends*/}        
    </div>
  )
}

export default Home