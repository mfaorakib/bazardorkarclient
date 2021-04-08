import { AlarmTwoTone } from '@material-ui/icons';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const CheckOut = () => {
    const { id } = useParams();
    const { loggedInUser } = useContext(UserContext)
    const [checkOut, setCheckOut] = useState(false)
    const [productId, setProductId] = useState({})
    const { email } = loggedInUser;
    const { Name, Price, Wight } = productId;
    const date = new Date()
    useEffect(() => {
        fetch(`http://localhost:4000/buyProduct/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProductId(data)
            });
    }, [id]);
    const url = 'http://localhost:4000/orderInfo';
    const handleCheckOut = () => {
        const orderInfo = {
            Name, Price, Wight, email, date
        }
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                setCheckOut(data);
            })
            .catch((err) => {
                console.log(err);
            });

    }

    if (checkOut) {
        alert("Successfully CheckOut");
    }
    return (
        <div>
            <div class="d-flex justify-content-center" >
                <label class='h4' style={{marginLeft:'0rem'}}> Description </label> <label class='h4' style={{paddingLeft:'20px'}}>Quantity </label> <label class='h4' style={{marginLeft:'5px'}}>Price</label>
            </div>
            <div class="d-flex justify-content-center"> <label class='h6' style={{marginLeft:'5rem'}}> {productId.Name} </label>   <label class='h6' style={{marginLeft:'5rem'}}>{productId.Wight} </label>  <label class='h6' style={{marginLeft:'5rem'}}>{productId.Price}</label> </div>
            <div  class="d-flex justify-content-center h4" style={{marginLeft:'0rem'}}>Total Price: {productId.Price} </div>
            <div class="d-flex justify-content-center"> <button class="btn btn-primary" onClick={handleCheckOut}>CheckOut </button> </div>
        </div>
    );
};

export default CheckOut;