import React, { useState } from 'react'
import { mdlProduct } from '../../../types/Type'
import UpdateProductInputs from './UpdateProductInputs';
import { updateProductsAsync } from '../../../services/productService';
import { RootState } from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../../redux/products/productsSlice';
import DeleteOnProductButton from '../DeleteProduct/DeleteOnProductButton';

export interface IUpdateProductModal{
    product: mdlProduct;
}

const UpdateProductModal: React.FC<IUpdateProductModal> = ({product}) => {

  const products = useSelector((state: RootState)=>state.products.products);
  const dispatch = useDispatch();

  const [updateProduct, setUpdateProduct] = useState<mdlProduct>({
    id: product.id,
    photo: product.photo,
    name: product.name,
    price: product.price,
    amount: product.amount
});

const updatedProducts = ()=>{

  let updatedProducts = products.map((item: mdlProduct)=>{
    if(product.id==item.id)
        {
          return updateProduct;
        }else{
          return item;
        }
    });
  
  dispatch(setProducts(updatedProducts));

  updateProductsAsync(updateProduct);
}

  return (
    <div className="modal fade" id={"update"+product.id} tabIndex={-1} role="dialog" >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <UpdateProductInputs updateProduct={updateProduct} setUpdateProduct={setUpdateProduct}/>
            </div>
            <div style={{display: "flex",flexDirection: "column" , margin: "2rem 8rem", gap: "1rem", justifyContent: "center"}}>

          {updateProduct.photo.map((i)=>{
            if(i)
            {
              return <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <img src={i} width="100px" height="150px" />
                <input className="mt-2" value={i} />
                <DeleteOnProductButton item={i} newProduct={updateProduct} setNewProduct={setUpdateProduct}/>
                </div>
            }
          })}
          </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={updatedProducts} data-dismiss="modal">Save changes</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default UpdateProductModal