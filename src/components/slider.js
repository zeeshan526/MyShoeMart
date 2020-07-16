import React from 'react';

import image from './images/index.jpg';
import Carousel from 'nuka-carousel';

function Slider() {

    return (
      <Carousel>
    <img  src={image} alt="Loading..." width='400px' height='250px' />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
      </Carousel>
    )
 
}

export default Slider