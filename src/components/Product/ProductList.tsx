import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getProductsAsync } from '../../services/productService';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import Product from './Product';
import { mdlProduct } from '../../types/Type';

const ProductList: React.FC = () => {

    const products = useSelector((state: RootState) => state.products.products);
    const status = useSelector((state: RootState) => state.products.status);
    const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(getProductsAsync());
    }
  }, [dispatch, status]);

  if(status === "loading")
  {
    return <div className="loading"><HourglassBottomIcon className="loadingIcon"/></div>
  }

  return (
    <div className='cards'>
        {products.map((item: mdlProduct, index: number) => {
        return <Product product={item} key={index} />;
      })}
    </div>
  )
}

export default ProductList