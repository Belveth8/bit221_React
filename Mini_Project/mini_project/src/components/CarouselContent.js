import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './CarouselContent.css';
import { dataBestSeller } from './CarouselList.js';



function CarouselContent() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1018,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (

    <div className='Carousel'>
      <Slider {...settings}>
      { dataBestSeller.map(item=>(
        <div className='card'>
          <div className='card-top'>
          <img src={ item.imgurl } alt={ item.title } />
          <h1>{ item.title }</h1></div>
          <div className='card-bottom'>
          <h3>{ item.price }</h3>
          <p className='category'>{ item.category }</p>
          </div>
        </div>        
      )) }
      </Slider>
    </div>





    // <Carousel>
    //   <Carousel.Item interval={1000}>
    //     <img
    //       className="d-block w-100"
    //       src={'holder.js/800x400?text=First slide&bg=373940'}
    //       alt="First slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item interval={500}>
    //     <img
    //       className="d-block w-100"
    //       src={"holder.js/800x400?text=Second slide&bg=282c34"}
    //       alt="Second slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={"holder.js/800x400?text=Third slide&bg=20232a"}
    //       alt="Third slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>Third slide label</h3>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
  );
}

export default CarouselContent