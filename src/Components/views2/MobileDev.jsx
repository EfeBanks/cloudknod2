import React from 'react';
import Androidicon from '../../images/android.png';
import Iosic from '../../images/ios.jpg';
import Reacticon from '../../images/react.png';
import {Link} from 'react-router-dom';

export default function MobileDev() {
  return (
    <div>
        <div className="containerSpecial mt-2">
            <div className="row">
                <div className="col-sm-6 px-sm-5 py-sm-5" style={{backgroundColor:'#fafafa'}}>
                    <h1 className='fw-bold'>Mobile App Development</h1>
                    <p className='my-3'>
                    Obtain high-performing mobile software to address your industry-specific challenges, and the result will fully meet your usability, utility, and data safety expectations.
                    </p>
                    <p>What our Mobile App Department has to offer:</p>
                    <ul type="square">
                        <li className='py-2'>70+ Mobile app developers</li>
                        <li className='py-2'>12+ years of experience</li>
                        <li className='py-2'>130+ satisfied customers</li>
                    </ul>
                    <div className="col-sm d-flex align-items-center ">
                    <Link to='/Mobile' className='mega-link'>
                        <button className='btn btn-warning request py-2 px-5 fw-bold'>Explore</button>
                    </Link>
                    </div>

                </div>
                <div className="col-sm-6 p-5">
                    <div className="row">

                    <div className='shadow text-center m-2 col-sm-4'>
                    <div className="items-center p-4 opacity-effect" >
                    <img src={Androidicon} alt="angular" className='img-fluid' />
                    <span className='pt-2'>Android</span>
                    </div>
                    </div>

                    <div className='shadow text-center m-2 col-sm-4'>
                    <div className="items-center p-4 opacity-effect" >
                    <img src={Reacticon} alt="react" className='img-fluid' />
                    <span className='pt-4'>React Native</span>
                    </div>
                    </div>

                    <div className='shadow text-center m-2 col-sm-4'>
                    <div className="items-center p-4 opacity-effect" >
                    <img src={Iosic} alt="vue" className='img-fluid' />
                    <span className='pt-4'>iOS</span>
                    </div>
                    </div>
                   </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

