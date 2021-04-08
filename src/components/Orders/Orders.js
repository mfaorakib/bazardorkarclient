import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const { loggedInUser } = useContext(UserContext)
    const [order, setOrder] = useState([])

   
    const email = loggedInUser.email;
    useEffect(() => {

        fetch('https://boiling-cliffs-32707.herokuapp.com/Order?email=' + email)
            .then(res => res.json())
            .then(result => setOrder(result))

    }, [])

    return (
        <div>
     <table class="table">
     <thead>
         <tr>
             <th scope="col">Item Name</th>
             <th scope="col">Price</th>
             <th scope="col">Wight</th>
         </tr>
     </thead>
     </table>
     <div>
      {
     order.map(OrderList=>
        <table class="table">
        <tbody>
         <tr>
             <td>{OrderList.Name}</td>
             <td>{OrderList.Price}</td>
             <td>{OrderList.Wight}</td>
         </tr>
         </tbody>
         </table>
     )}
 
 </div>

        </div>
    );
};

export default Orders;