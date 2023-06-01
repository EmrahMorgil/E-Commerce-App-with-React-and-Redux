import React from 'react'
import { mdlProduct } from '../../types/Type'

export interface IAddProductInputs{
    newProduct: mdlProduct;
    setNewProduct: any;
}

const AddProductInputs: React.FC<IAddProductInputs> = ({newProduct, setNewProduct}) => {

    const handleChange = (e: any)=>{
        setNewProduct({...newProduct, [e.target.name] : e.target.value});
    }

    const addPhoto = (e: any)=>{
        e.preventDefault();
        newProduct.photo.push(e.target.value);
        // setNewProduct({...newProduct, ["photo"]})
    }

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
        <div>
        <label>Product Name: </label>
        <input name='name' onChange={handleChange} style={{width: "200px"}}/>
        </div>
        <div>
            <label>Product Price: </label>
        <input name='price' onChange={handleChange} style={{width: "200px"}}/>
        </div>
        <div>
            <label>Product Photos: </label>
            <input name='photo' onChange={handleChange} style={{width: "200px"}} />
            <button className='btn btn-success' onClick={(e)=>addPhoto(e)}>Add</button>
        </div>
    </div>
  )
}

export default AddProductInputs