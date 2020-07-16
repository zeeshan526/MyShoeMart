import React from 'react';
import { Link } from 'react-router-dom';
import Shoes from './../Shoes.json';
import image from './images/shop1.gif';

//import Slider from './slider'

import '../App.css'
import Button from '@material-ui/core/Button';
//import { Slider } from '@material-ui/core';

function Product() {

    return (
        <div>
       <img  src={image} alt="Loading..." width='300px' height='240px' style={{marginTop:'50px'}}/>
            <h1 style={{color:'rgb(102, 0, 102)'}}>Our Best Products</h1>
            <div className="productContainer">
                {Object.keys(Shoes).map(keyName=>{
                    const shoe = Shoes[keyName];
                    return (
                        <Link key={keyName} 
                            className="link" 
                            to={`/product/${keyName}`}>
                                
                                <img src={shoe.img} height={200} alt="shoe" />
                                <h4 className='txt'>{shoe.name}</h4>
                                <h4 >Price: Rs: {shoe.price}</h4>
                                <Button variant="contained" color="primary" style={{textDecoration:'none' , margin:'8px'}}>
                                    Add To Cart
                                    </Button>
                    </Link>
                    
                    )
                })}
            </div>
        </div>
    );
}

export default Product;
