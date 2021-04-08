
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddProduct from '../Dashboard/AddProduct';
import EditProduct from '../Dashboard/EditProduct';
import ManageProduct from '../Dashboard/ManageProduct';
import "./Admin.css" 
const Admin = () => {
    
  const [role, setRole] = useState({
      action:'addProduct'
  })
return (
 
    <div style={{width: '99%',marginTop:'20px'}}>
 
          <Row>
          <Col class="col-6" style={{padding:'20px'}} sm={4}> 
          <Link  style={{Color:'White',textDecoration:'none'}} onClick ={()=>setRole({action:'addProduct'})} > 
          
        
        <span><strong>AddProduct</strong></span>            
  
          </Link>
          <br/>
          <Link style={{Color:'White',textDecoration:'none'}} onClick ={()=>setRole({action:'manageProduct'})}   > 
        
        <span><strong>ManageProduct</strong></span>            
 
          </Link>
          <br/>
          <Link style={{Color:'White',textDecoration:'none'}} onClick ={()=>setRole({action:'editProduct'})}>  
        
       
        <span><strong>EditProduct</strong></span>            

          </Link>
          
          
          </Col>
           
    <Col sm={8}> 
    {
             role.action ==='addProduct' && ( <div> <AddProduct></AddProduct></div>)
            }
            {
             role.action ==='manageProduct' && (<div> <ManageProduct></ManageProduct></div>)
            }
            {
               role.action ==='editProduct' && (<div> <EditProduct></EditProduct>    </div>)       
            }
    
    </Col>
 
       
        </Row>
        </div>
    );
};

export default Admin;