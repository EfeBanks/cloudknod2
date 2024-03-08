import React from 'react';
import Reacticon from '../../images/react.png';
import Angularicon from '../../images/angular.jpg';
import Vueicon from '../../images/vue.png';
import Slider from "react-slick";
import './Views.css';


const technologies = [
  {
    // img:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
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
]

export default function Frontend() {
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

      {/* Frontend new row */}
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
      {/* Frontend new row ends */}
           
        
    </div>
  )
}
