import React from 'react'
import { mdlProduct } from '../../types/Type'

export interface IAddProductInputs{
    newProduct: mdlProduct;
    setNewProduct: any;
    productPhoto: string;
    setProductPhoto: React.Dispatch<React.SetStateAction<string>>;
}

const AddProductInputs: React.FC<IAddProductInputs> = ({newProduct, setNewProduct, productPhoto, setProductPhoto}) => {

    const handleChange = (e: any)=>{
        setNewProduct({...newProduct, [e.target.name] : e.target.value});
    }

    const addPhoto = (e: any)=>{
            e.preventDefault();
            newProduct.photo.push(productPhoto);
            setNewProduct({...newProduct});
    }

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
        <div>
        <label>Product Name: </label>
        <input name='name' onChange={handleChange} style={{width: "200px"}} value={newProduct.name}/>
        </div>
        <div>
            <label>Product Price: </label>
        <input name='price' onChange={handleChange} style={{width: "200px"}} value={newProduct.price}/>
        </div>
        <div>
            <label>Product Photos: </label>
            <input name='photo' onChange={(e)=>setProductPhoto(e.target.value)} style={{width: "200px"}} value={productPhoto}/>
            <button className='btn btn-success' onClick={(e)=>addPhoto(e)}>Add</button>
        </div>
    </div>
  )
}

export default AddProductInputs