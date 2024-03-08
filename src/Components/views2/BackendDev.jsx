import React from 'react';
import Javaicon from '../../images/java2.png';
import Neticon from '../../images/net.png';
import Pythonicon from '../../images/python-logo.png';
import {Link} from 'react-router-dom';

export default function BackendDev() {
  return (
    <div>
        <div className="containerSpecial mt-2">
            <div className="row">
                <div className="col-sm-6 px-sm-5 py-sm-5" style={{backgroundColor:'#fafafa'}}>
                    <h1 className='fw-bold'>Back-end Development</h1>
                    <p className='my-3'>
                    Cloudknod’s Back-end development experts will help you obtain properly functioning and secure solutions, ensuring seamless data flows with the most suitable technologies. 
                    </p>
                    <p>Our Back-end development Department has:</p>
                    <ul type="square">
                        <li className='py-2'>80+ Back-end developers</li>
                        <li className='py-2'>12+ years of experience</li>
                        <li className='py-2'>150+ satisfied customers</li>
                    </ul>
                    <div className="col-sm d-flex align-items-center ">
                    <Link to='/Backend' className='mega-link'>
                        <button className='btn btn-warning request py-2 px-5 fw-bold'>Explore</button>
                    </Link>
                    </div>

                </div>
                <div className="col-sm-6 p-5">
                    <div className="row">

                    <div className='shadow text-center m-2 col-sm-4'>
                    <div className="items-center p-4 opacity-effect" >
                    <img src={Javaicon} alt="angular" className='img-fluid' />
                    <span className='pt-2'>Java</span>
                    </div>
                    </div>

                    <div className='shadow text-center m-2 col-sm-4'>
                    <div className="items-center p-4 opacity-effect" >
                    <img src={Neticon} alt="react" className='img-fluid' />
                    <span className='pt-4'>.Net</span>
                    </div>
                    </div>

                    <div className='shadow text-center m-2 col-sm-4'>
                    <div className="items-center p-4 opacity-effect" >
                    <img src={Pythonicon} alt="vue" className='img-fluid' />
                    <span className='pt-4'>Php</span>
                    </div>
                    </div>
                   </div> 
                </div>
            </div>
        </div>
    </div>
  )
}
