import React from 'react'
import { mdlProduct } from '../../../types/Type'
import { deleteProductsAsync } from '../../../services/productService';
import { useDispatch } from 'react-redux';
import { deleteProducts } from '../../../redux/products/productsSlice';
import DeleteIcon from '@mui/icons-material/Delete';

export interface IDeleteProductButton{
    product: mdlProduct;
}

const DeleteProductButton: React.FC<IDeleteProductButton> = ({product}) => {

    const dispatch = useDispatch();

    const deleteProduct = (product: mdlProduct)=>{
        deleteProductsAsync(product.id);
        dispatch(deleteProducts(product));
    }

  return (
    <button className='btn btn-danger' onClick={()=>deleteProduct(product)}><DeleteIcon /></button>
  )
}

export default DeleteProductButton