import axios from 'axios';
import React, {useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
 
const AddProduct = () => {
    const {loggedInUser} = useContext(UserContext)
    
    const [imageURL, setImageURL] = useState(null)
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data =>
    
    {
         const productData = {
             Name: data.ProductName,
             Price: data.Price,
             Wight: data.Wight,
             imageURL: imageURL
         }
         const url = 'https://boiling-cliffs-32707.herokuapp.com/addProduct';
         console.log(productData)

         fetch(url,{
             method: 'POST',
             headers:{
                 'Content-Type':'application/json'
             },
             body:JSON.stringify(productData)
         })
         .then(res=> console.log('server side response'))
        console.log(data.ProductName, data.Price,data.Wight);
    }
    const handleImageUpload = event =>{
       console.log(event.target.files[0])
       const imageData = new FormData();
       imageData.set('key','53585abcb313d61236aa90cd04fdbe90')
       imageData.append('image', event.target.files[0])

      
       axios.post('https://api.imgbb.com/1/upload', imageData )
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    console.log(errors);
    return (

        <div style={{width:'95%'}}>
           <div>
           <p  class="h4"> Add Product </p>  
           </div>
        <div class="form-outline mb-4">
            
                
                <form onSubmit={handleSubmit(onSubmit)}>
                <input  class="form-control" type="text"  placeholder="Product Name" name="ProductName" ref={register({ required: true, maxLength: 80 })} />
                <br />
                <input class="form-control" type="number" placeholder="Add Price" name="Price" ref={register} />
                <br />
                <input class="form-control" type="number" placeholder="Wight" name="Wight" ref={register} />
                <br />

                <input  class="form-control" type="file" onChange={handleImageUpload} />
                <br />
                <input class="btn btn-primary" type="submit" />
            </form>
        </div>
        </div>
    );
};

export default AddProduct;