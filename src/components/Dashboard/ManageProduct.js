import React, { useEffect, useState } from 'react';
 

const ManageProduct = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('https://boiling-cliffs-32707.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [])
const removeProduct =()=>{
    fetch('https://boiling-cliffs-32707.herokuapp.com/products')
    .then(res => res.json())
    .then(data => setProduct(data))
}
const deleteProduct=(id)=>{
    
    fetch(`https://boiling-cliffs-32707.herokuapp.com/Delete/${id}`,{
        method:'DELETE'
    })
       .then(res=>res.json())
       .then(result=>{
          if(result){
              removeProduct()
          }
       })
}
    return (
        <div>
            <div>
                <h1>Manage Product</h1>
            </div>
            <div className='header-manage' style={{display:'flex', justifyContent:'space-between',marginBottom:'10px'}}> 
            <span> Product Name</span>
            <span>Quantity </span>
            <span>Price </span>
            <span>Action </span>
            </div>
            {
                product.map(product => <div style={{display:'flex', justifyContent:'space-between',marginBottom:'10px'}}>
                      
                    <span> {product.Name}</span>
                    <span> {product.Wight}</span>
                    <span> {product.Price}</span>
                    <button class="btn btn-outline-success" onClick={()=>deleteProduct(product._id)}> Delete</button>
                    </div>
                )
            }

        </div>

    );
};

export default ManageProduct;