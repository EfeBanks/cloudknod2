import React, { useState} from 'react'
import './Navbar2.css';
import {Link} from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import BrandLogo from '../../images/cloudknod-logo.png';

export default function NavigationBar2({menuOpen, setMenuOpen}) {
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

    // Making the links close Navbar on click
    const [megaOpen, setMegaOpen] = useState(false);
    const [megaShow, setMegaShow] = useState(false);
    const [showMega, setShowMega] = useState(false);


   
  return (
    <nav>
        <div className={color ?'custom-navbar ':'navbar'}>
            <div className="logo fw-bold">
                <Link to='/' className='brand-logo mb-5'><img src={BrandLogo} alt="Cloudknod logo" className='mb-2'/></Link>
            </div>

            <ul className= {"nav-links " + (menuOpen && "show")}>               
                <div className='btn cancel-btn ms-2'>
                    <FaTimes  onClick={() => setMenuOpen (false)}/>
                </div>

                <li>
                {/* For Desktop view */}
                <Link to='/Techstack' className="nav-link desktop-item" > Tech Stack 
                <span className='icon-rotate ms-2'> <IoIosArrowDown /> </span></Link>

                 {/* For mobile view */}                
                <div className='mobile-separate mobile-item'>
                <div className='separate1' > 
                    <Link to='/Techstack' className="nav-link" onClick={() => setMenuOpen (false)}> Tech Stack </Link>
                </div>

                <div className='separate2' > 
                <div className=" ms-2 nav-link"><span className=' ms-2' onClick={() => setMegaOpen (!megaOpen)}> <IoIosArrowDown /> </span></div>
                </div>

                </div>
                {/* For mobile view ends */}
               

                    <div className= {"mega-container " + (megaOpen && "open")}>
                        <div className="mega-content">
                        <div className="row wider">
                                
                                <div className="mega-links mega-special-container">
                                <header className='header-special'>Techstack</header>
                                    <p>Collaborate with Cloudknod’s IT experts to build outstanding custom software via an extensive selection of frameworks</p>
                                   
                                </div>
                            </div>
                            <div className="row thiner">
                                <header onClick={() => setMenuOpen (false)}>
                                    <Link to='/FrontendWeb' className='mega-link'>FRONT-END</Link>
                                </header>
                                <ul className="mega-links">
                                    <li onClick={() => setMenuOpen (false)}><Link to='/Angular' className='mega-link'>Angular</Link></li>
                                    <li onClick={() => setMenuOpen (false)}><Link to='/JSReact' className='mega-link'>React</Link></li>
                                    <li onClick={() => setMenuOpen (false)}><Link to='/Vue' className='mega-link'>Vue</Link></li>
                                </ul>
                            </div>

                            <div className="row thiner">
                                <header onClick={() => setMenuOpen (false)}><Link to='/BackendWeb' className='mega-link'>BACK-END</Link></header>
                                <ul className="mega-links">
                                    <li onClick={() => setMenuOpen (false)}><Link to='/Java' className='mega-link'>Java</Link></li>
                                    <li onClick={() => setMenuOpen (false)}><Link to='/Net' className='mega-link'>.Net</Link></li>
                                    <li onClick={() => setMenuOpen (false)}><Link to='/Python' className='mega-link'>Python</Link></li>
                                </ul>
                            </div>

                            <div className="row thiner">
                                <header onClick={() => setMenuOpen (false)}><Link to='/MobileApp' className='mega-link'>MOBILE</Link></header>
                                <ul className="mega-links">
                                    <li onClick={() => setMenuOpen (false)}><Link to='/Android' className='mega-link'>Android</Link></li>
                                    <li onClick={() => setMenuOpen (false)}><Link to='/iOS' className='mega-link'>iOS</Link></li>
                                    <li onClick={() => setMenuOpen (false)}><Link to='/ReactNative' className='mega-link'>React Native</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li> 

                <li>
                     {/* For Desktop view */}
                     <Link to='/Industries ' className="nav-link desktop-item"> Industries  
                <span className='icon-rotate ms-2'> <IoIosArrowDown /> </span></Link>

                    {/* For mobile view */}
                        <div className='mobile-separate mobile-item'>
                        <div className='separate1' > 
                            <Link to='/Industries' className="nav-link" onClick={() => setMenuOpen (false)}> Industries </Link>
                        </div>

                        <div className='separate2' > 
                           <div className=" ms-2 nav-link"><span className=' ms-2' onClick={() => setMegaShow (!megaShow)}> <IoIosArrowDown /> </span></div>
                        </div>

                        </div>

                        {/* For mobile view ends */}
                    <div className={"mega-container " + (megaShow && "open")}>
                        <div className="mega-content">
                        <div className="row wider">
                                
                                <div className="mega-links mega-special-container">
                                <header className='header-special'>Industries</header>
                                    <p>Obtain top-class and standard-compliant custom software tailored specifically to your business needs with us.</p>
                                   
                                </div>
                            </div>
                            <div className="row thiner">
                        
                                <ul className="mega-links">
                                    <li onClick={() => setMenuOpen (false)}><Link to='/Finance' className='mega-link'>Financial Services</Link></li>
                                    <li onClick={() => setMenuOpen (false)}><Link to='/Media' className='mega-link'>Media & Entertainment</Link></li>
                                </ul>
                            </div>

                            <div className="row thiner">
                            
                                <ul className="mega-links">
                                    <li onClick={() => setMenuOpen (false)}><Link to='/Healthcare' className='mega-link'>Healthcare</Link></li>
                                    <li onClick={() => setMenuOpen (false)}><Link to='/Telecom' className='mega-link'>Telecom</Link></li>
                                </ul>
                            </div>

                            <div className="row thiner">
                         
                                <ul className="mega-links">
                                    <li onClick={() => setMenuOpen (false)}><Link to='/Logistics' className='mega-link'>Logistics</Link></li>
                                    <li onClick={() => setMenuOpen (false)}><Link to='/Automotive' className='mega-link'>Automotive</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li>

                     {/* For Desktop view */}
                     <Link to='/Services ' className="nav-link desktop-item"> Services  
                <span className='icon-rotate ms-2'> <IoIosArrowDown /> </span></Link>

                    {/* For mobile view */}
                        <div className='mobile-separate mobile-item'>
                        <div className='separate1' > 
                            <Link to='/Services' className="nav-link" onClick={() => setMenuOpen (false)}> Services </Link>
                        </div>

                        <div className='separate2' > 
                            <div className=" ms-2 nav-link"><span className=' ms-2' onClick={() => setShowMega (!showMega)}> <IoIosArrowDown /> </span>
                            </div>
                        </div>

                        </div>

                        {/* For mobile view ends */}

              
                <div className={"mega-container " + (showMega && "open")}>
                        <div className="mega-content">
                        <div className="row wider">
                                
                                <div className="mega-links mega-special-container">
                                <header className='header-special'>Services</header>
                                    <p> Benefit from our top-notch IT services to build efficient tailored-fit software with a high ROI.</p>
                   
                                </div>
                            </div>
                            <div className="row thiner">
                                
                                <ul className="mega-links">
                                    <li onClick={() => setMenuOpen (false)}><Link to='/MobileAppDevelopment' className='mega-link'>Mobile Development</Link></li>
                                    <li onClick={() => setMenuOpen (false)}><Link to='/WebDevelopment' className='mega-link'>Web Development</Link></li>
                                    <li onClick={() => setMenuOpen (false)}><Link to='/CrossPlatform' className='mega-link'>Cross-Platform Development</Link></li>
                                    <li onClick={() => setMenuOpen (false)}><Link to='/CustomSoftware' className='mega-link'>Custom Software Development</Link></li>
                            
                                </ul>
                            </div>

                            <div className="row thiner">
                               
                                <ul className="mega-links">
                                    <li onClick={() => setMenuOpen (false)}><Link to='/UiUxDesign' className='mega-link'>UI/UX Design</Link></li>
                                    <li onClick={() => setMenuOpen (false)}><Link to='CloudDevelopment' className='mega-link'>Cloud Development</Link></li>
                                    <li onClick={() => setMenuOpen (false)}><Link to='Devops' className='mega-link'>DevOps Services</Link></li>
                                    <li onClick={() => setMenuOpen (false)}><Link to='ProjectManagement' className='mega-link'>Project Management</Link></li>
                                </ul>
                            </div>

                            <div className="row thiner">
                             
                                <ul className="mega-links">
                                    <li onClick={() => setMenuOpen (false)}><Link to='QualityAssurance' className='mega-link'>Quality Assurance</Link></li>
                                    <li onClick={() => setMenuOpen (false)}><Link to='BusinessAnalysis' className='mega-link'>Business Analysis</Link></li>
                                    <li onClick={() => setMenuOpen (false)}><Link to='ITSecurity' className='mega-link'>IT security Management</Link></li>
                                    <li onClick={() => setMenuOpen (false)}><Link to='SolutionArchitecture' className='mega-link'>Solution Architecture</Link></li>
                               
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li><Link to='/About' className="nav-link" onClick={() => setMenuOpen (false)}>About Us</Link></li>
                <li><Link to='/Contact' className="nav-link" onClick={() => setMenuOpen (false)}>Contact Us</Link> </li>
                
                
            </ul>
          
            <div className='btn menu-btn ms-2 mb-2'>
            <FaBars  onClick={() => setMenuOpen (!menuOpen)} />
            </div>
        </div>
    </nav>
  )
}
