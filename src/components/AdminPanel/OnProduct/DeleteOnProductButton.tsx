import React from 'react'
import { mdlProduct } from '../../../types/Type'
import DeleteIcon from '@mui/icons-material/Delete';

export interface IDeleteOnProductButton{
    item: string;
    newProduct: mdlProduct;
    setNewProduct: React.Dispatch<React.SetStateAction<mdlProduct>>;
}

const DeleteOnProductButton: React.FC<IDeleteOnProductButton> = ({item, newProduct, setNewProduct}) => {

    const removePhoto = (item: string)=>{
        let removedPhoto = newProduct.photo.filter((product: string)=>{
          if(product!==item)
          {
            return product;
          }
        })
    
        setNewProduct({...newProduct, ["photo"]: removedPhoto});
      }

  return (
    <button className="btn btn-danger mt-2" onClick={()=>removePhoto(item)}><DeleteIcon /></button>
  )
}

export default DeleteOnProductButton