import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import ProductList from '../components/Product/ProductList';
import AddProductModal from '../components/AdminPanel/AddProductModal';
import Logout from '../components/Logout';

const AdminPanel: React.FC = () => {

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h3 style={{color: "white"}}>Admin Panel</h3>
        <hr style={{borderTop: "10px dotted white", width: "10rem"}}/>
        <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addproduct" style={{margin: "2rem 0rem 3rem 0rem"}}>
          Add New Product
        </button>
        <AddProductModal />
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "3rem"}}>
        <Logout />

        </div>
      </div>
    <ProductList page="adminpanel"/>
    </div>
  )
}

export default AdminPanel