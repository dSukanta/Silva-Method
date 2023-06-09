import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Slide() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="img/combo-banner.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="img/slide-2.webp"
          alt="Second slide"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/slide-3.webp"
          alt="Third slide"
        />
        <Carousel.Caption>
        <button className='float-start rounded-3 bg-danger border-0 p-2'>Silva Method Courses</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/slide-4.webp"
          alt="Forth slide"
        />
        <Carousel.Caption>
        <button className='float-start rounded-3 bg-danger border-0 p-2'>Learn More</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/slide-5.webp"
          alt="Fifth slide"
        />
        <Carousel.Caption>
         <button className='float-start rounded-3 bg-danger border-0 p-2'>Buy Now</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slide