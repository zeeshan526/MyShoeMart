import React from 'react';
import image from './images/index.jpg';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Icon from '@material-ui/core/Icon';
function Home() {

  return (
	<div>
		 <Link style={{textDecoration:"none"}} to={'/products'}><Button  
        style={{ marginTop:'50px' }}
        variant="contained"
        color="primary"
        endIcon={<Icon>send</Icon>}>
        Shop Now 
       </Button></Link>
        <div><img  src={image} alt="Loading..." width='320px' height='230px' style={{marginTop:'100px'}}/></div>
       
	</div>
  );
}

export default Home;