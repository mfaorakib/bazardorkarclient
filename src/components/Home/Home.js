import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Header from '../Header/Header';
import Product from './Product';


const Home = () => {
    const [product, setProduct] = useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/products')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div>
             <div>
                <Header></Header>
            </div>
            <div>

                <Row>
             {
                 product.length===0?
                 <div class='Spinner'>
                 <Spinner  animation="border" role="status">
                 <span className="sr-only">Loading...</span>
                </Spinner>
               </div>:
                 product.map(product=><Product ProductName ={product}></Product>)
             }
             </Row>
            </div>
        </div>
    );
};

export default Home;