import React from 'react';
import Reacticon from '../../images/react.png';
import Angularicon from '../../images/angular.jpg';
import Vueicon from '../../images/vue.png';
import {Link} from 'react-router-dom';

export default function FrontendDev() {
  return (
    <div>
        <div className="containerSpecial mt-2">
            <div className="row">
                <div className="col-sm-6 px-sm-5 py-sm-5" style={{backgroundColor:'#fafafa'}}>
                    <h1 className='fw-bold'>Front-end Development</h1>
                    <p className='my-3'>
                        Equip your company with reliable and user-friendly front-ends for your solutions to cost-effectively and swiftly resolve your industry-specific business challenges. 
                    </p>
                    <p>Cloudknod's Front-end Department has:</p>
                    <ul type="square">
                        <li className='py-2'>100+ Front-end developers</li>
                        <li className='py-2'>12+ years of experience</li>
                        <li className='py-2'>150+ satisfied customers</li>
                    </ul>
                    <div className="col-sm d-flex align-items-center ">
                    <Link to='/FrontendWeb' className='mega-link'>
                        <button className='btn btn-warning request py-2 px-5 fw-bold'>Explore</button>
                    </Link>
                    </div>

                </div>
                <div className="col-sm-6 p-5">
                    <div className="row">

                    <div className='shadow text-center m-2 col-sm-4'>
                    <div className="items-center p-4 opacity-effect" >
                    <img src={Angularicon} alt="angular" className='img-fluid' />
                    <span className='pt-2'>Angular</span>
                    </div>
                    </div>

                    <div className='shadow text-center m-2 col-sm-4'>
                    <div className="items-center p-4 opacity-effect" >
                    <img src={Reacticon} alt="react" className='img-fluid' />
                    <span className='pt-4'>React</span>
                    </div>
                    </div>

                    <div className='shadow text-center m-2 col-sm-4'>
                    <div className="items-center p-4 opacity-effect" >
                    <img src={Vueicon} alt="vue" className='img-fluid' />
                    <span className='pt-4'>Vue</span>
                    </div>
                    </div>
                   </div> 
                </div>
            </div>
        </div>
    </div>
  )
}
