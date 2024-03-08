import React from 'react';
import Androidicon from '../../images/android.png';
import Iosic from '../../images/ios.jpg';
import Reacticon from '../../images/react.png';
import Slider from "react-slick";
import './Views.css';


const technologies = [
  {
    img:Androidicon,
    name:'Android'
  },

  {
    img:Iosic,
    name:'iOS'
  },

  {
    img:Reacticon,
    name:'React Native'
  },
]


export default function Mobile() {
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
          initialSlide: 3,
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

       {/* Mobile row */}

       <div className=" mx-5 px-5 py-5 mb-5">
          
          <Slider {...settings}>
          {technologies.map( (d) => (               
                <div class="shadow text-center cardContainer my-4">
                <img src={d.img} class="imgStyle p-4 img-fluid" alt="cloudknod's techstack" />
                  <h5 class="card-title"> {d.name}</h5>        
                </div>
              
          ))}
          </Slider>

    </div>
       
       {/* Mobile row ends */}

    </div>
  )
}
