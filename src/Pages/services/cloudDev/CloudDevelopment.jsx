import React from 'react'
import Bg from '../../../images/cloudBg.jpg';
import Consultation from '../../../Components/Consultation';
import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Clo1 from '../../../images/clo1.jpg';
import Clo2 from '../../../images/clo2.jpg';
import A3 from '../../../images/a3.jpg';
import Clw1 from '../../../images/clw1.jpg';
import Clw2 from '../../../images/clw2.jpg';
import Clw3 from '../../../images/clw3.jpg';
import Clw4 from '../../../images/clw4.jpg';
import Clw5 from '../../../images/clw5.jpg';
import Clw6 from '../../../images/clw6.jpg';



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
              <div className="androidBg-inner-content p-sm-5 p-2">
                <h1 className="container">Unleashing the Power of <span className='text-warning'>Cloud Development </span> </h1>
              </div>
        
            </div>       
        </div>
      </div>
      {/* Banner section ends*/}

      {/* Statistics */}
      <div className="containerSpecial consultationBg">
        <div className="row py-sm-5 py-2 mx-sm-5 mx-2">
            <div className="col-sm-4">
            <h2 className=' fw-bold py-sm-4 py-2 mt-sm-5 mt-2'>Excellent Cloud Development Services</h2>
            </div>
            <div className="col-sm-8 ps-2">
              
            <div className="row py-sm-4 py-2">

              <div className="col-sm me-2 hoverlay-container">
                <img src={Clo1} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                  <h4 className='pt-sm-3 pt-1'>40+ Certified Cloud Engineers</h4>
                  <p>Cloudknod as an expert Cloud Development company offers a rich talent pool to ensure excellent cloud development solutions.</p>
                </div>
              </div>

              <div className="col-sm  me-2 hoverlay-container ">
                <img src={Clo2} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                <h4 className='pt-sm-3 pt-1'>200+ Cloud Development Projects </h4>
                <p>Cloudknod's team of Cloud engineers is notable for their high level of technology and hands-on experience
                  </p>
                </div>
              </div>

              <div className="col-sm me-2 hoverlay-container ">
                <img src={A3} alt="cloudknod" className='img-fluid hover-image' />
                <div className="hoverlay2 text-center px-3">
                <h4 className='pt-sm-3 pt-1'>12 Years of Experience</h4>
                  <p>Over the last 12 years, our team has gained experience in providing excellent cloud development software solutions.</p>              
                 
                 </div>
              </div>
            </div>

            </div>
        </div>
      </div>

      {/* Statistics ends */}

      {/* IT Architecture Roles section */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row pt-sm-5 pt-2 mx-sm-5 mx-2">
              <div className="col ">
                <h1 className='content-header fw-bold py-sm-4 py-2 px-sm-3 px-1'>Cloud Application Services</h1>
  
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-sm-5 pb-2 mx-sm-5 mx-2">
              <div className="col-sm-4 ">
              
                <div className="px-sm-3 px-1">
                  <h4 className='pt-3 fw-bold'> Development </h4>
                  <p>Build and run your serverless application to obtain greater capacity and flexibility:</p>
                  <ul style={{lineHeight:'2.5rem'}}>
                    <li>IaaS/SaaS/PaaS;</li>
                    <li>Big Data;</li>
                    <li>AI/ML;</li>
                    <li>IoT;</li>
                    <li>Multicloud.</li>
                  </ul>

                  </div>
              </div>

              <div className="col-sm-4">
              
                <div className="px-sm-3 px-1">
                <h4 className='pt-3 fw-bold'> Migration </h4>
                <p>Cloudknod determines and implements the best migration strategy to conduct a transition to the cloud:</p>
                  <ul style={{lineHeight:'2.5rem'}}>
                    <li>Security strategy creation;</li>
                    <li>Large databases migration;</li>
                    <li>Application re-hosting;</li>
                    <li>Application re-architecting.</li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-4">
              
                <div className="px-sm-3 px-1">
                <h4 className='pt-3 fw-bold'> Support and optimization </h4>
                <p>To reduce overall cloud expenses, we evaluate your existing cloud infrastructure and identify overprovisioning or under-utilized resources:</p>
                  <ul style={{lineHeight:'2.5rem'}}>
                    <li>Architecture audit;</li>
                    <li>Security audit;</li>
                    <li>Cost optimization;</li>
                    <li>Legacy infrastructure upgrade.</li>
                  </ul>
                </div>
              </div>

             </div>
             </div>  
      {/* IT Architecture Roles ends*/}

      
       {/* What we do */}
       <div className="containerSpecial consultationBg mt-3">
          <div className="row py-sm-5 py-2 mx-sm-5 mx-2">
              <div className="col ">
                <h1 className='content-header fw-bold py-4 px-3'>What We Do </h1>
                
              </div>
            </div>

            {/* inner content */}
            <div className="row pt-4 pb-2">
              <div className="col-sm me-2 hoverlay-container shadow">
                <img src={Clw2} alt="cloudknod" className='img-fluid hover-image' />            
                <div className="hoverlay text-center px-3">
                  <h4 className='pt-3'>Cloud Hybrid Development</h4>
                  <p>Cloud engineers combine public clouds, private clouds, and on-premises resources to achieve the agility required for a competitive advantage.</p>
                </div>
              </div>

              <div className="col-sm  me-2 hoverlay-container shadow">
                <img src={Clw3} alt="cloudknod" className='img-fluid hover-image' />         
                <div className="hoverlay text-center px-3">
                  <h4 className='pt-3'>Cloud Migration</h4>
                  <p>Cloudknod will help your business migrate from on-premises infrastructure to the cloud, ensuring security, flexibility, and confidentiality of your data. </p>
                </div>
              </div>

              <div className="col-sm me-2 hoverlay-container shadow">
                <img src={Clw1} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay text-center px-3">
                  <h4 className='pt-3'>Cloud Native Development</h4>
                  <p>Cloudknod's experts optimize project workloads, govern usage of existing cloud resources, build microservices, devise behavior-driven design, etc. </p>
                </div>
              </div>
            </div>

          
            <div className="row pt-2 pb-5">
              <div className="col-sm me-2 hoverlay-container shadow">
                <img src={Clw5} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay text-center px-3">
                  <h4 className='pt-3'>Application Re-architecting</h4>
                  <p>Cloudknod provides a sophisticated approach to re-architecting processes and applications by using service-oriented or serverless architectures.</p>
                </div>
              </div>

              <div className="col-sm  me-2 hoverlay-container shadow">
                <img src={Clw6} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay text-center px-3">
                  <h4 className='pt-3'>Cloud Consulting </h4>
                  <p>Cloudknod's engineers organize business transformations with innovative cloud applications and provide detailed advice at every stage of the transition. </p>
                </div>
              </div>

              <div className="col-sm me-2 hoverlay-container shadow">
                <img src={Clw4} alt="cloudknod" className='img-fluid hover-image' />
              
                <div className="hoverlay text-center px-3">
                  <h4 className='pt-3'>SaaS/PaaS/IaaS</h4>
                  <p>Experts work with SaaS, PaaS, and IaaS, allowing you to save on equipment and protect your confidential information from hacking and stealing.</p>
                </div>
              </div>
            </div>

            {/* inner content ends*/}
          </div>

      {/* What we do ends */}


      {/* Cloudknod's Guarantee section */}
      <div className="containerSpecial advantageBg mt-3">
          <div className="row py-sm-5 py-2 mx-sm-5 mx-2">
              <div className="col ">
                <h1 className='content-header fw-bold py-4 px-3'>Cloudknod's Guarantee</h1>
                <p className=" px-sm-3 px-1">Cloudknod, a cloud development vendor and consulting partner, our team is notable for:</p>
                
              </div>
          </div>

            {/* inner content */}
            <div className="row pb-sm-5 pb-2 mx-sm-5 mx-2">
              <div className="col-sm-6 ">
              
                <div className=" px-sm-3 px-1">
                  <h4 className='pt-3 fw-bold'> Expertise and Excellent Service Delivery </h4>
                  <p>At CloudKnod, our cloud development services are geared toward harnessing the full potential of cloud computing to drive innovation and scalability for your business. Our experienced cloud developers work diligently to design, build, and optimize cloud-based solutions that align with your specific needs and goals. </p>
                </div>
              </div>

              <div className="col-sm-6">
              
                <div className=" px-sm-3 px-1">
                  <h4 className='pt-3 fw-bold'>Latest Cloud Technologies</h4>
                  <p> Whether you require cloudnative applications, data storage and processing, or cloud migration services, we leverage the latest cloud technologies and best practices to deliver flexible, secure, and cost-effective solutions.</p>
                </div>
              </div>

              <div className="col-sm-6 py-sm-4 py-0">
              
                <div className="px-sm-3 px-1">
                  <h4 className='pt-3 fw-bold'>Reduce Cost and Improve Performance</h4>
                  <p> With CloudKnod as your cloud development partner, you can unlock the agility and scalability of the cloud, reduce infrastructure costs, and improve accessibility and performance. Let's collaborate to embark on a transformative journey into the cloud, with CloudKnod as your guide to unleashing the full power of cloud development for your business.</p>
                </div>
              </div>

              <div className="col-sm-6  py-sm-4 py-0 ">
              
                <div className="px-sm-3 px-1">
                  <h4 className='pt-3 fw-bold'>Customer Trust</h4>
                  <p>Thanks to our highly skilled engineers, high professional standards, effective workflows, and focus on quality, we have earned trust and satisfied over 200 customers and still counting.</p>
                </div>
              </div>

             </div>
             </div>  
      {/* Cloudknod's Guarantee section ends*/}

      
      {/* Request Consultation */}
      <section className='my-sm-5 my-2' style={{color: '#fff'}} >
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


        {/* Consultation section */}
              <Consultation />
        {/* Consultation section ends*/}

    </div>
  )
}



