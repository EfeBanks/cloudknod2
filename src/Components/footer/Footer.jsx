import React from 'react';
import './Footer.css';
import {BsFacebook, BsInstagram, BsTwitter, BsYoutube, BsLinkedin  } from 'react-icons/bs';
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
//import { BsFillArrowUpCircleFill } from "react-icons/bs";
import {Link} from 'react-router-dom';

export default function Footer() {
  return (
    <>
    <section className='footer pt-5 pb-5' >
        <div className="container">
             {/* first row */}
            <div className="row mt-4 mb-5 border-bottom">
                <div className="col-sm pt-3">
                    <h5>ABOUT CLOUDKNOD</h5>
                    <p>Cloudknod is a software development company providing services designed to create tailored solutions that address Businesses' specific needs.</p>

                    <h5>Headquarters</h5>
                    <p>795 Folsom Avenue, Suite 600 <br />Sanfrancisco, CA 94107</p>
                </div>
                <div className="col-sm pt-3">
                <h5><Link to='/Techstack' className='link-class'>TECHSTACK</Link></h5>
                    <ul className='footer-list pt-2'>
                        <li><Link to='JSReact' className='link-class'>React</Link></li>
                        <li><Link to='/Angular' className='link-class'> Angular </Link></li>
                        <li><Link to='/Vue' className='link-class'>Vue</Link></li>
                        <li><Link to='/Java' className='link-class'>Java</Link></li>
                        {/* <li><Link to='/Php' className='link-class'>PHP</Link></li> */}
                        <li><Link to='/Python' className='link-class'>Python</Link></li>
                        <li><Link to='/Net' className='link-class'>.Net</Link></li>
                        <li><Link to='/Android' className='link-class'>Android</Link></li>
                        <li><Link to='/Ios' className='link-class'>iOS</Link></li>
                        <li><Link to='/ReactNative' className='link-class'>React Native</Link></li>
                    </ul>
                    
                </div>
                <div className="col-sm pt-3">
                <h5><Link to='/Industries' className='link-class'>INDUSTRIES</Link></h5>
                <ul className='footer-list pt-2'>
                        <li><Link to='/Healthcare' className='link-class'>Healthcare</Link></li>
                        <li><Link to='/Finance' className='link-class'>Financial Services</Link></li>
                        <li><Link to='/Media' className='link-class'>Media & Entertainment</Link></li>
                        <li><Link to='/Logistics' className='link-class'>Logistics</Link></li>
                        <li><Link to='/Telecom' className='link-class'>Telecom</Link></li>
                        <li><Link to='/Automotive' className='link-class'>Automotive</Link></li>
                        
                </ul>
                    
                </div>
                <div className="col-sm pt-3">
                <h5><Link to='/Services' className='link-class'>SERVICES</Link></h5>
                <ul className='footer-list pt-2'>
                        <li><Link to='/MobileAppDevelopment' className='link-class'>Mobile Development</Link></li>
                        <li><Link to='/WebDevelopment' className='link-class'>Web Development</Link></li>
                        <li><Link to='/CloudDevelopment' className='link-class'>Cloud Development</Link></li>
                        <li><Link to='/UiUxDesign' className='link-class'>UI/UX Design</Link></li>
                        <li><Link to='/Devops' className='link-class'>DevOps Services</Link></li>
                        <li><Link to='ProjectManagement' className='link-class'>Project Management</Link></li>
                        <li><Link to='/QualityAssurance' className='link-class'>Quality Assurance</Link></li>
                        <li><Link to='/BusinessAnalysis' className='link-class'>Business Analysis</Link></li>
                        <li><Link to='/ITSecurity' className='link-class'>IT Security Management</Link></li>
                        
                        
                </ul>
                    
                </div>
            </div>
            {/* first row ends */}

            {/* second row */}
            <div className="row">
                <div className="col-sm-6">
                    <h5>CONTACT US</h5>
                    <div className="phone">
                    <FaPhoneAlt className='socials' /> <span className='ps-2'>+01-66677455</span>
                    </div>

                    <div className="email">
                    <IoMdMail className='socials' /> <span className='ps-2'>info@cloudknod.com</span>
                    </div>
                </div>

                    {/* To Top */}
                {/* <div className="col-sm-6 d-flex justify-content-end"> 
                    <a href='#' style={{color:'white'}}>
                        <BsFillArrowUpCircleFill className='h1'/>
                        </a>
                </div> */}
            </div>

            {/* second row ends */}

             
        </div>
    </section>
    <section className='footer-end pt-3 pb-3 '>
        <div className="container">
        {/* last row */}
        <div className="row">
                <div className="col-sm-6">
                    &copy; 2024 Cloudknod Inc. All Rights Reserved. <span className='fw-bold'>Terms of Use / Privacy Policy</span>
                </div>
                <div className="col-sm-6 d-flex justify-content-end">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className='socials'>
                    <BsFacebook className='me-3 h5' /></a>

                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className='socials' >
                    <BsInstagram className='me-3 h5'/></a> 
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className='socials'>
                    <BsTwitter className='me-3 h5'/></a> 
                    <a href="https://youtube.com" target="_blank" rel="noreferrer" className='socials'>
                    <BsYoutube className='me-3 h5'/></a>
                    <a href="https://youtube.com" target="_blank" rel="noreferrer" className='socials'>
                    <BsLinkedin className='me-3 h5'/></a>
                    
                </div>
             </div>
              {/* last row ends */}
        </div>
    </section>
    </>
  )
}
