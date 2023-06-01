import React from 'react'
import { toast } from "react-toastify";
import { useSelector, useDispatch } from 'react-redux';
import { setUserLoggedIn } from '../redux/users/usersSlice';
import { RootState } from '../redux/store';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const Users: React.FC = () => {

   const dispatch = useDispatch();
   const welcomeUser = useSelector((state:RootState)=>state.users.welcomeUser);
   

  const userLogout = ()=>{
    toast.warning("Çıkış Yapılıyor..");
    dispatch(setUserLoggedIn(false));
  }

  return (
    <div style={{height: "87.5vh", display: "flex", flexDirection: "column", alignItems: "center", marginTop: "5rem"}}>
        <h1 className={`nightTheme`}>Welcome {welcomeUser}</h1>
        <hr style={{border: "1px solid white", width: "10rem"}}/>
        <div style={{textAlign: "center"}}>
      
        <h3 style={{color: "white"}}><button className='userSettingPage'>Orders</button></h3>
        <h3 style={{color: "white"}}><button className='userSettingPage'>My Adress</button></h3>
        <h3 style={{color: "white"}}><button className='userSettingPage'>Settings</button></h3>
        <button className='btn btn-danger' onClick={userLogout}>Logout</button>
        </div>
    </div>
  )
}

export default Users