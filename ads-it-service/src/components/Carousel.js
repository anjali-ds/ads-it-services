import React from 'react';
import { useState } from 'react';
import './Carousel.css'
import Carousel from 'react-bootstrap/Carousel';
import c1 from '../images/Carousel/2.adaptive.png'
import c2 from '../images/Carousel/3.adaptive.png'
import c3 from '../images/Carousel/1.adaptive.png'
import c4 from '../images/Carousel/adaptive.png'
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Carousels(props) {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={c1} height="400px" width="100%"/>
       
      </Carousel.Item>
      <Carousel.Item>
      <img src={c2} height="400px"  width="100%"/>
      
      </Carousel.Item>
      <Carousel.Item>
      <img src={c3} height="400px"  width="100%"/>
        
      </Carousel.Item>
      <Carousel.Item>
      <img src={c4} height="400px"  width="100%"/>
       
      </Carousel.Item>
    </Carousel>
        </div>
    );
}

export default Carousels;