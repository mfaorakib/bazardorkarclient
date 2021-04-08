import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
 
const Product = (props) => {

  const { Name, imageURL, Price, Wight,_id } = props.ProductName;

  const history = useHistory()
  
  const handleAddCart=(id)=>{
       history.push('/CheckOut/'+id )  
  }
  return (
    <div> 
    <Col style={{ paddingBottom: '10px',paddingLeft: '20px',paddingTop: '20px'}} md='3'>
      <Card style={{ width: '18rem'}}>
        <Card.Img style={{ objectFit: 'contain', height: '200px'}} variant="top" src={imageURL} />
        <Card.Body>
          <Card.Title style={{fontWeight: 'bold'}}>{Name} <lebel>-{Wight}</lebel> </Card.Title>
          <Card.Text style= {{fontWeight: 'bold',color:'#46A049'}}>
            <label>${Price}</label>
            <Button onClick= {()=>handleAddCart(_id)} style={{color:'white', backgroundColor:'#46A049',marginLeft:'20px'}}  variant="primary"> Buy Now</Button>
          </Card.Text>

        </Card.Body>
      </Card>
    </Col>
    </div>

  );
};

export default Product;