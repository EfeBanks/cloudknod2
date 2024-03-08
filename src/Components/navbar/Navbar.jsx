import React, { useState } from 'react';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';



function NavigationBar() {
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
  return (
    <Navbar expand="lg" className={color ?'custom-navbar':'original-navbar'} sticky='top' style={{transition:'.8s ease-in'}}>
     {/* <Navbar expand="md"  className="bg-body-dark or navbar-dark" sticky='top' >
    */}
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-5">
          <Link to='/' className="dropdown-item">CLOUDKNOD </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* <Nav.Link href="#home" className='p-4'>Home</Nav.Link> */}

            {/* Tech Stack dropdown */}
            <NavDropdown title="Tech Stack" id="basic-nav-dropdown" className="p-4 navbar-light" >
              {/* <NavDropdown.Item href="#action/3.1" className='dropdown-item-wrapper'> */}
              <div  className='dropdown-item-wrapper'>
              {/* <ul style={{width: '40%', backgroundColor: '#fafafa', padding:'20px'}}> */}
                <ul style={{ width: '40%',backgroundColor: '#fafafa'}}>
                    <li>
                        <h1 className="fw-bold hide-this">Tech Stack</h1>
                    </li>
                    <li className="hide-this">
                        <p>Collaborate with our IT experts to build outstanding custom software via an extensive selection of frameworks.</p>
                    </li>     
                </ul>
               
            
                <ul style={{width: '20%'}}>
                    <li><Link to='/' className="dropdown-item heading fw-bold">FRONT-END</Link></li>
                    <li><Link to='/JSReact' className="dropdown-item"><span>React</span></Link></li>
                    <li><Link to='/Angular' className="dropdown-item"><span>Angular</span></Link></li>
                    <li><Link to='/Vue' className="dropdown-item"><span>Vue</span></Link></li>
                    
                    
                </ul>               
                <ul style={{width: '20%'}}>
                    <li><Link to='/' className="dropdown-item heading fw-bold">BACK-END</Link></li>
                    <li><Link to='/Java' className="dropdown-item"><span>Java</span></Link></li>
                    <li><Link to='/Net' className="dropdown-item"><span>.Net</span></Link></li>
                    <li><Link to='/Php' className="dropdown-item"><span>Php</span></Link></li>
                    
                </ul>
              
                <ul style={{width: '20%'}}> 
                    <li><Link to='/' className="dropdown-item heading fw-bold">MOBILE</Link></li>
                    <li><Link to='/Android' className="dropdown-item"><span>Android</span></Link></li>
                    <li><Link to='/Ios' className="dropdown-item"><span>iOS</span></Link></li>
                    <li><Link to='/ReactNative' className="dropdown-item"><span>React Native</span></Link></li>
                </ul>
              {/* </NavDropdown.Item> */}
              </div>
            </NavDropdown>
            {/* Tech stack dropdown ends */}

            {/* Industries dropdown starts */}
            <NavDropdown title="Industries" id="basic-nav-dropdown" className="p-4" > 
              {/* <NavDropdown.Item href="#action/3.1" className='dropdown-item-wrapper'> */}
              <div  className='dropdown-item-wrapper'>
                <ul style={{width: '40%', backgroundColor: '#fafafa'}}>
                    <li>
                        <h1 className="fw-bold hide-this">Industries </h1>
                    </li>
                    <li className="hide-this">
                        <p>Obtain top-class and standard-compliant custom software tailored specifically to your business needs with us.</p>
                    </li>     
                </ul>
               
            
                <ul style={{width: '20%'}}>  
                    <li><Link to='/Industries' className="dropdown-item"><span>Financial Services</span></Link></li>
                    <li><Link to='/Media' className="dropdown-item"><span>Media & Entertainment</span></Link></li>   
                </ul>
               
                <ul style={{width: '20%'}}>
                    <li><Link to='/Healthcare' className="dropdown-item"><span>Healthcare</span></Link></li>
                    <li><Link to='/Telecom' className="dropdown-item"><span>Telecom</span></Link></li>     
                </ul>
              
                <ul style={{width: '20%'}}> 
                    <li><Link to='/Logistics' className="dropdown-item"><span>Logistics</span></Link></li>
                    <li><Link to='/Automotive' className="dropdown-item"><span>Automotive</span></Link></li>
                    
                </ul>
              {/* </NavDropdown.Item> */}
              </div>
            </NavDropdown>
            {/* Industries dropdown ends */}

            {/* Services dropdown starts */}
            <NavDropdown title="Services" id="basic-nav-dropdown" className="p-4" >
              {/* <NavDropdown.Item href="#action/3.1" className='dropdown-item-wrapper'> */}
              <div  className='dropdown-item-wrapper'>
                <ul style={{width: '40%', backgroundColor: '#fafafa'}}>
                    <li>
                        <h1 className="fw-bold hide-this">Services</h1>
                    </li>
                    <li className="hide-this">
                        <p>Benefit from our top-notch IT services to build efficient tailored-fit software with a high ROI.</p>
                    </li>     
                </ul>
               
            
                <ul style={{width: '20%'}}>
                    <li><Link to='/' className="dropdown-item"><span>Mobile Development</span></Link></li>
                    <li><Link to='/Pricing' className="dropdown-item"><span>Web Development</span></Link></li>
                    <li><Link to='/Pricing' className="dropdown-item"><span>Cross-Platform Development</span></Link></li>
                    <li><Link to='/Pricing' className="dropdown-item"><span>Custom Software Development</span></Link></li>
                </ul>

                <ul style={{width: '20%'}}> 
                    <li><Link to='/' className="dropdown-item">UI/UX Design</Link></li>
                    <li><Link to='/Pricing' className="dropdown-item">Cloud Development</Link></li>
                    <li><Link to='/Pricing' className="dropdown-item">DevOps Services</Link></li>
                    <li><Link to='/Pricing' className="dropdown-item">Project Management</Link></li>
                </ul>
               
                <ul style={{width: '20%'}}>
                  
                    <li><Link to='/' className="dropdown-item"><span>Quality Assurance</span></Link></li>
                    <li><Link to='/' className="dropdown-item"><span>Business Analysis</span></Link></li>
                    <li><Link to='/' className="dropdown-item"><span>IT security Management</span></Link></li>
                    <li><Link to='/Pricing' className="dropdown-item"><span>Solution Architecture</span></Link></li>
                </ul>
            
              {/* </NavDropdown.Item> */}
              </div>
            </NavDropdown>
            {/* Services dropdown ends */}

            <Nav.Link href="#home" className='p-4 mt-2'>About Us</Nav.Link>
            <Nav.Link href="#home" className='p-4 mt-2 get-pricing'>Contact Us</Nav.Link>

             
            {/* Company dropdown ends */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

// function NavigationBar() {
//   return (
//     <div>
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div class="container-fluid">
//         <a class="navbar-brand" href="#">Navbar</a>
//         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Link</a>
//         </li>
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul class="dropdown-menu">
//             <li><a class="dropdown-item" href="#">Action</a></li>
//             <li><a class="dropdown-item" href="#">Another action</a></li>
            
//             <li><a class="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//           {/*<div class="dropdown-menu">
          
//              <ul>
//                 <li><a class="dropdown-item" href="#">Action</a></li>
//                 <li><a class="dropdown-item" href="#">Mega menu</a></li>
//                 <li><a class="dropdown-item" href="#">Mega menu</a></li>
//                 <li><a class="dropdown-item" href="#">Mega menu</a></li>
                
//             </ul>
//             <ul>
//                 <li><a class="dropdown-item" href="#">Action again</a></li>
//                 <li><a class="dropdown-item" href="#">Mega menu</a></li>
//                 <li><a class="dropdown-item" href="#">Mega menu</a></li>
//                 <li><a class="dropdown-item" href="#">Mega menu</a></li>
//             </ul>
//             <ul>
//                 <li><a class="dropdown-item" href="#">Something else here</a></li>
//                 <li><a class="dropdown-item" href="#">Mega menu</a></li>
//                 <li><a class="dropdown-item" href="#">Mega menu</a></li>
//                 <li><a class="dropdown-item" href="#">Mega menu</a></li>
//             </ul>
//             <ul>
//                 <li><a class="dropdown-item" href="#">Yet Something else</a></li>
//                 <li><a class="dropdown-item" href="#">Mega menu</a></li>
//                 <li><a class="dropdown-item" href="#">Mega menu</a></li>
//                 <li><a class="dropdown-item" href="#">Mega menu</a></li>
//             </ul>
//           </div> */}
//         </li>
//       </ul>
      
//     </div>
//   </div>
// </nav>
//     </div>
//   );
// }
//export default NavigationBar;

