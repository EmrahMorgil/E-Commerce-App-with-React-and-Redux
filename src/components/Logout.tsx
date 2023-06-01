import React from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { RootState } from '../redux/store';
import { setActiveUser, setAdminLoggedIn, setUserLoggedIn } from '../redux/users/usersSlice';

const Logout: React.FC = () => {

    const dispatch = useDispatch();

    const userLogout = ()=>{
        toast.warning("Çıkış Yapılıyor..");
        dispatch(setUserLoggedIn(false));
        dispatch(setAdminLoggedIn(false));
        dispatch(setActiveUser({}));
      }

  return (
    <button className='btn btn-danger' onClick={userLogout}>Logout</button>
  )
}

export default Logout