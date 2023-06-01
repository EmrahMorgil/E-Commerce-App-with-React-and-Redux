import React from 'react'
import { mdlProduct } from '../../types/Type'
import UpdateProductInputs from './UpdateProductInputs';

export interface IUpdateProductModal{
    product: mdlProduct;
}

const UpdateProductModal: React.FC<IUpdateProductModal> = ({product}) => {
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
              <UpdateProductInputs product={product}/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default UpdateProductModal