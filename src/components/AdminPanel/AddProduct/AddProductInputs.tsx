import React from 'react'
import AddOnProductButton from '../OnProduct/AddOnProductButton';
import { mdlProduct } from '../../../types/Type';

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

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div style={{display: "flex", flexDirection: "column"}}>
        <label style={{textAlign: "center"}}>Product Name: </label>
        <input name='name' onChange={handleChange} style={{width: "200px"}} value={newProduct.name}/>
        </div>
        <div style={{display: "flex", flexDirection: "column"}}>
            <label style={{textAlign: "center"}}>Product Price: </label>
        <input name='price' onChange={handleChange} style={{width: "200px"}} value={newProduct.price}/>
        </div>
        <div style={{display: "flex", flexDirection: "column"}}>
            
            <label style={{textAlign: "center"}}>Product Photos: </label>
            
            <input name='photo' onChange={(e)=>setProductPhoto(e.target.value)} style={{width: "200px"}} value={productPhoto}/>
            {/* <button className='btn btn-success mt-1' onClick={(e)=>addPhoto(e)}>Add Photo</button> */}
            
        </div>
    </div>
  )
}

export default AddProductInputs