import React, { useState } from 'react'
import './Navbar2.css';
import {Link} from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

export default function NavigationBar2() {
    const [color, setColor] = useState(false);
    const changeColor =() =>{
      if(window.scrollY >= 120){
        setColor(true)
      }
      else{
        setColor(false)
      }
    }
  
    window.addEventListener('scroll', changeColor)

    // function mouseOverEvent(){
    //     document.getElementsByClassName('icon-rotate').style.transform=rotate(180deg);
        
    // };
    
  return (
    <nav>
        <div className={color ?'custom-navbar':'navbar'}>
            <div className="logo fw-bold">
                <Link to='/' className='brand-logo'>CLOUDKNOD</Link>
            </div>

            <input type="radio" name='slide' id='menu-btn' />
            <input type="radio" name='slide' id='cancel-btn' />

            <ul className="nav-links">
                <label htmlFor="cancel-btn" className='btn cancel-btn'><FaTimes /></label>
                <li>
                {/* For Desktop view */}
                <Link to='/Techstack' className="nav-link desktop-item" onmouseover="mouseOverEvent()"> Tech Stack 
                <span className='icon-rotate ms-2'> <IoIosArrowDown /> </span></Link>

                {/* For mobile view */}
                <div className='mobile-separate mobile-item'>
                    <div className='separate1' > 
                        <Link to='/Techstack' className="nav-link">Tech Stack</Link>
                    </div>
                    <div className='separate2' > 
                        <input type="checkbox" id="showMega" /> 
                        <label htmlFor="showMega" className='icon-rotate ms-2 nav-link mobile-item'><IoIosArrowDown /> </label>
                    </div>
                   
                </div>
                {/* For mobile view ends */}

                    <div className="mega-container">
                        <div className="mega-content">
                        <div className="row wider">
                                
                                <div className="mega-links mega-special-container">
                                <header className='header-special'>Techstack</header>
                                    <p>Collaborate with Cloudknod’s IT experts to build outstanding custom software via an extensive selection of frameworks</p>
                                   
                                </div>
                            </div>
                            <div className="row thiner">
                                <header><Link to='/FrontendWeb' className='mega-link'>FRONT-END</Link></header>
                                <ul className="mega-links">
                                    <li><Link to='/Angular' className='mega-link'>Angular</Link></li>
                                    <li><Link to='/JSReact' className='mega-link'>React</Link></li>
                                    <li><Link to='/Vue' className='mega-link'>Vue</Link></li>
                                </ul>
                            </div>

                            <div className="row thiner">
                                <header><Link to='/BackendWeb' className='mega-link'>BACK-END</Link></header>
                                <ul className="mega-links">
                                    <li><Link to='/Java' className='mega-link'>Java</Link></li>
                                    <li><Link to='/Net' className='mega-link'>.Net</Link></li>
                                    <li><Link to='/Python' className='mega-link'>Python</Link></li>
                                </ul>
                            </div>

                            <div className="row thiner">
                                <header><Link to='/MobileApp' className='mega-link'>MOBILE</Link></header>
                                <ul className="mega-links">
                                    <li><Link to='/Android' className='mega-link'>Android</Link></li>
                                    <li><Link to='/iOS' className='mega-link'>iOS</Link></li>
                                    <li><Link to='/ReactNative' className='mega-link'>React Native</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>  
                <li>
                    {/* For Desktop view */}
                <Link to='/Industries' className="nav-link">Industries 
                <span className='icon-rotate ms-2'><IoIosArrowDown /> </span></Link>

                  {/* For mobile view */}
                  <div className='mobile-separate mobile-item'>
                    <div className='separate1' > 
                        <Link to='/Techstack' className="nav-link">Industries</Link>
                    </div>
                    <div className='separate2' > 
                        <input type="checkbox" id="showMega3" /> 
                        <label htmlFor="showMega3" className='icon-rotate ms-2 nav-link mobile-item'><IoIosArrowDown /> </label>
                    </div>
                   
                </div>
                {/* For mobile view ends */}
                <div className="mega-container">
                        <div className="mega-content">
                        <div className="row wider">
                                
                                <div className="mega-links mega-special-container">
                                <header className='header-special'>Industries</header>
                                    <p>Obtain top-class and standard-compliant custom software tailored specifically to your business needs with us.</p>
                                   
                                </div>
                            </div>
                            <div className="row thiner">
                        
                                <ul className="mega-links">
                                    <li><Link to='/Finance' className='mega-link'>Financial Services</Link></li>
                                    <li><Link to='/Media' className='mega-link'>Media & Entertainment</Link></li>
                                </ul>
                            </div>

                            <div className="row thiner">
                            
                                <ul className="mega-links">
                                    <li><Link to='/Healthcare' className='mega-link'>Healthcare</Link></li>
                                    <li><Link to='/Telecom' className='mega-link'>Telecom</Link></li>
                                </ul>
                            </div>

                            <div className="row thiner">
                         
                                <ul className="mega-links">
                                    <li><Link to='/Logistics' className='mega-link'>Logistics</Link></li>
                                    <li><Link to='/Automotive' className='mega-link'>Automotive</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li><Link to='/Services' className="nav-link">Services
                <span className='icon-rotate ms-2'><IoIosArrowDown /> </span> </Link>
                <div className="mega-container">
                        <div className="mega-content">
                        <div className="row wider">
                                
                                <div className="mega-links mega-special-container">
                                <header className='header-special'>Services</header>
                                    <p> Benefit from our top-notch IT services to build efficient tailored-fit software with a high ROI.</p>
                   
                                </div>
                            </div>
                            <div className="row thiner">
                                
                                <ul className="mega-links">
                                    <li><Link to='/MobileAppDevelopment' className='mega-link'>Mobile Development</Link></li>
                                    <li><Link to='/WebDevelopment' className='mega-link'>Web Development</Link></li>
                                    <li><Link to='/CrossPlatform' className='mega-link'>Cross-Platform Development</Link></li>
                                    <li><Link to='/CustomSoftware' className='mega-link'>Custom Software Development</Link></li>
                            
                                </ul>
                            </div>

                            <div className="row thiner">
                               
                                <ul className="mega-links">
                                    <li><Link to='/UiUxDesign' className='mega-link'>UI/UX Design</Link></li>
                                    <li><Link to='CloudDevelopment' className='mega-link'>Cloud Development</Link></li>
                                    <li><Link to='Devops' className='mega-link'>DevOps Services</Link></li>
                                    <li><Link to='ProjectManagement' className='mega-link'>Project Management</Link></li>
                                </ul>
                            </div>

                            <div className="row thiner">
                             
                                <ul className="mega-links">
                                    <li><Link to='QualityAssurance' className='mega-link'>Quality Assurance</Link></li>
                                    <li><Link to='BusinessAnalysis' className='mega-link'>Business Analysis</Link></li>
                                    <li><Link to='ITSecurity' className='mega-link'>IT security Management</Link></li>
                                    <li><Link to='SolutionArchitecture' className='mega-link'>Solution Architecture</Link></li>
                               
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li><Link to='/About' className="nav-link">About Us</Link></li>
                <li><Link to='/Contact' className="nav-link">Contact Us</Link></li>
                
            </ul>
            <label htmlFor="menu-btn" className='btn menu-btn'><FaBars /></label>
        </div>
    </nav>
  )
}
