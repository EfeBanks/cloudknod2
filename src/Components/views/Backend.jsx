import React from 'react';
import Javaicon from '../../images/java2.png';
import Neticon from '../../images/net.png';
import Pythonicon from '../../images/python-logo.png';
import Slider from "react-slick";
import './Views.css';



const technologies = [
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
]


export default function Backend() {

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


      {/* Backend new row */}
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
      {/* Backend new row ends */}
       

    </div>
  )
}
