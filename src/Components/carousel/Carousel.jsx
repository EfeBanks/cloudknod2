import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {Swiper, SwiperSlide} from 'swiper/react';
import { register } from "swiper/element/bundle";

//import {EffectCoverFlow } from 'swiper';
import { Autoplay,Pagination } from 'swiper/modules';
import "swiper/css/navigation";
import 'swiper/css';
import './Carousel.css';


register();
const slider = [
    {
        title: "Financial Software",
        description: " Our expertise and track record in Finance, are a cost-effective and custom-built software for companies of different sizes and in different jurisdictions.",
        url: "https://img.freepik.com/free-vector/banking-industry-concept-illustration_114360-17354.jpg?w=740&t=st=1707210282~exp=1707210882~hmac=976c2e2975b6a189bf6dd1e3f9fd102eaed127480a7ac380bd02bb403815fc49",
        goto:'/Finance'
    },

    {
        title: "Healthcare",
        description: " We are a team of HealthTech experts, ensuring usability, data security, improved efficiency, interoperability, and the best value for money for healthcare providers and medical researchers.",
        url: "https://img.freepik.com/free-photo/doctor-diagnosing-cervical-vertebra-injury-neck-pain-x-ray-ct-scan-tablet-patient-during-appointment-medic-wearing-protective-gloves-face-mask-medical-check-up-sterile-clean-hospital_482257-64620.jpg?w=740&t=st=1707210395~exp=1707210995~hmac=3d56291f4342defda463e58e93f48c51de0feeaeeb1bcf018d5d43f42fbc1700",
        goto:'/Healthcare'
    }, 

    {
        title: "Media & Entertainment",
        description: " Our innovative software solutions are tailored to the unique needs of media companies, offering a wealth of services that drive growth and success.",
        url: "https://img.freepik.com/free-photo/man-holds-copy-space-sign_482257-76491.jpg?w=740&t=st=1707223066~exp=1707223666~hmac=b5873cdaeeb4519aa5785c2fa3ed2e0249a45c5f037f4d9a9518f4d4ccc8de9c",
        goto:'/Media'
    },

    {
        title: "Telecom",
        description: " Cloudknod's dedicated Telecom software developers and other experts are ready to help you with telecom-specific web and mobile apps, performance tracking tools, etc.",
        url: "https://img.freepik.com/free-photo/6g-internet-connection_23-2150909449.jpg?w=740&t=st=1707223219~exp=1707223819~hmac=648db5d4fd137e9b44ebfbdb6f59a7a7ab2a943ac5c86b6dfac40816117a31a0",
        goto:'/Telecom'
    },

    {
        title: "Logistics Software",
        description: " Cloudknod's custom software development expertise in Logistics, Supply Chain and Transportationenables us to handle projects of a wide scope, giving you leverage to grow and succeed.",
        url: "https://img.freepik.com/free-vector/delivery-service-isometric-composition-with-laptop-surrounded-by-parcel-boxes-shipping-company-employees-cargo-vehicles-vector-illustration_1284-69331.jpg?w=740&t=st=1707223391~exp=1707223991~hmac=073bafbf0ea36f47de27427b52481dcf6546d8e1aa78a00a0f011434483ab083",
        goto:'/Logistics'
    },

    {
        title: "Automotive Software",
        description: "We are a custom software vendor, well-prepared to assist you with tackling technology challenges in the Automotive industry via our modern and productive approaches to engineering.",
        url: "https://img.freepik.com/free-photo/mechanic-working-laptop_1170-1611.jpg?w=740&t=st=1707223487~exp=1707224087~hmac=d3ccf2b57abe19a7cb60e0122436c69534cdb68a7e9475687ed8ce8a6cfa25a0",
        goto:'Automotive'
    },

]

export default function Carousel() {
  return (
    <div className='containerSpecial'>
        <div  className='carousel mt-3 mb-3 py-3'>
        <div>
            <div className="carousel-content py-5 ps-2 mx-sm-5 mx-2">
                <span>Discover</span>
                <h1 className='fw-bold fs-1'>Our Areas of Expertise</h1>
                <hr/>
                <p>We offer a wide range of services to meet all your company's needs.</p>
                <Link to='/ContactForm'>
                    <Button variant="warning" className='request slider-btn'>
                        Request Service
                    </Button> 
                </Link>
            </div>
        </div>
        
        {/* Carousel section */}
        <Swiper className='myswiper' navigation={true} pagination={true}  modules={[Pagination, Autoplay]} effect={'coverflow'} grabCursor={true} centeredSlides={true} coverflowEffect={{
            rotate:0,
            stretch:0,
            depth: 100,
            modifier:3,
            slideShadows: true
        }}
        loop={true}
        // pagination={{
        //     clickable:true,
        
        // }}
        // slidesPerView={2}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            
        }}
        breakpoints={{
            640: {
                slidesPerView:2
            },
            768: {
                slidesPerView:1
            },
            1024: {
                slidesPerView:2
            },
            1560: {
                slidesPerView:3
            },
        }}>
            {
                slider.map(data => (
                    <SwiperSlide style={{ backgroundImage: `url(${data.url})` }} className='myswiper-slider'>
                        <div>
                            <h2>{data.title}</h2>
                            <p>{data.description}</p>
                            {/* <a href={`${data.url}`} target='_blank' rel="noreferrer" className='slider-btn'>See More</a> */}
                            <Link to={`${data.goto}`}>
                                <Button variant="warning" className='request slider-btn'>
                                 See More
                                </Button></Link>

                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
        </div>


     </div>
  )
}
