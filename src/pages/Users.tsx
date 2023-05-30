import React from 'react'
import { toast } from "react-toastify";
import { useSelector, useDispatch } from 'react-redux';
import { setUserLoggedIn } from '../redux/users/usersSlice';
import { RootState } from '../redux/store';

const Users: React.FC = () => {

   const dispatch = useDispatch();
   const theme = useSelector((state:RootState)=>state.theme.theme);
   const welcomeUser = useSelector((state:RootState)=>state.users.welcomeUser);
   

  const userLogout = ()=>{
    toast.warning("Çıkış Yapılıyor..");
    dispatch(setUserLoggedIn(false));
  }

  return (
    <div style={{height: "87.5vh"}}>
        <h1 className={theme ? `lightTheme` : `nightTheme`}>Welcome {welcomeUser}</h1>
        <hr />
        <button className='btn btn-danger' onClick={userLogout}>Logout</button>
    </div>
  )
}

export default Users