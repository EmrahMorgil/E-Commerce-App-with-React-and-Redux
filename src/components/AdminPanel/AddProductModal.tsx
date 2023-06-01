import React, { useState } from "react";
import AddProductInputs from "./AddProductInputs";
import AddProductButton from "./AddProductButton";

const AddProductModal: React.FC = () => {
  const [newProduct, setNewProduct] = useState({
    id: "",
    photo: [""],
    name: "",
    price: "",
    amount: 0,
  });
  const [productPhoto, setProductPhoto] = useState("");

  return (
    <div
      className="modal fade"
      id="addproduct"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add Product
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <AddProductInputs
              newProduct={newProduct}
              setNewProduct={setNewProduct}
              productPhoto={productPhoto}
              setProductPhoto={setProductPhoto}
            />
          </div>
          <div style={{display: "flex",flexDirection: "column" , margin: "2rem 8rem", gap: "1rem", justifyContent: "center"}}>

          {newProduct.photo.map((i)=>{
            if(i)
            {
              return <div><img src={i} width="100px" height="150px" /></div>
            }
          })}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <AddProductButton
              newProduct={newProduct}
              setNewProduct={setNewProduct}
              setProductPhoto={setProductPhoto}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;