import React from 'react';
import Reacticon from '../../images/react.png';
import Angularicon from '../../images/angular.jpg';
import Vueicon from '../../images/vue.png';
import Javaicon from '../../images/java2.png';
import Neticon from '../../images/net.png';
import Pythonicon from '../../images/python-logo.png';
import Androidicon from '../../images/android.png';
import Iosic from '../../images/ios.jpg';
import Slider from "react-slick";
import './Views.css';


const technologies = [
  {
    img:Reacticon,
    name:'React'
  },

  {
    img:Angularicon,
    name:'Angular'
  },

  {
    img:Vueicon,
    name:'Vue'
  },

  {
    img:Javaicon,
    name:'Java'
  },

  {
    img:Neticon,
    name:'.Net'
  },

  {
    img:Pythonicon,
    name:'Python'
  },

  {
    img:Reacticon,
    name:'React Native'
  },

  {
    img:Androidicon,
    name:'Android'
  },

  {
    img:Iosic,
    name:'iOS'
  }
]

export default function Showall() {
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
  ]
};

  
  return (
    <div>

      {/* ShowAll new row */}
      <div className=" mx-sm-5 mx-2 px-5 py-5 mb-5">
          
            <Slider {...settings}>
            {technologies.map( (d) => (               
                  <div class="shadow text-center cardContainer my-4">
                  <img src={d.img} class="imgStyle p-4 img-fluid" alt="cloudknod's techstack" />
                    <h5 class="card-title"> {d.name}</h5>        
                  </div>
                
            ))}
            </Slider>

      </div>
      
        {/* ShowAll new row ends */}

    </div>
  )
}
