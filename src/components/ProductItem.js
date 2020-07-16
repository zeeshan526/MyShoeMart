import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Shoes from '../Shoes.json';
import Button from '@material-ui/core/Button';
import '../App.css'
function ProductItem() {
    const { id } = useParams();
    const shoe = Shoes[id];

    if (!shoe)
        return <h2>Product Not Found!</h2>

    return (
        <div >
            <h1 style={{color:'#990099'}}>Welcome to Product Item</h1>
            <div className="link">
                
                <img src={shoe.img} height={250} alt="shoe" />
                <h4>{shoe.name}</h4>
                Price: Rs: {shoe.price}
                <center><Link style={{textDecoration:'none'}} to={'/products'}><Button variant="contained" color="primary" style={{ margin:'10px'}}>
                    Add To Cart
                </Button></Link></center>
            </div>
        </div>
    );
}

export default ProductItem;