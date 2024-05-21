import { Route, Routes } from 'react-router-dom';
// import './App.css';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import UserPage from './pages/UserPage/UserPage';
import Admin from './pages/AdminPage/Admin';
import ChefPage from './pages/ChefPage/ChefPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import StaffPage from './pages/StaffPage/StaffPage';
import ReceptionPage from './pages/ReceptionPage/ReceptionPage';




function App() {

  const userInfor = useSelector(state=>state.user)
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        {userInfor.userName !== '' && userInfor.auth === 'user' && <Route path='/' element={<UserPage />}/>}
        {userInfor.userName !== '' && userInfor.auth === 'admin' && <Route path='/' element={<Admin />}/>}
        {userInfor.userName !== '' && userInfor.auth === 'chef' && <Route path='/' element={<ChefPage />}/>}
        {userInfor.userName !== '' && userInfor.auth === 'staff' && <Route path='/' element={<ReceptionPage />}/>}
        {userInfor.userName !== '' && userInfor.auth === 'reception' && <Route path='/' element={<StaffPage />}/>}
        

        <Route path='*' element={<LoginPage />} />
      </Routes>
      <ToastContainer
      className='toast_container'
        hideProgressBar
        transition={Slide}
        limit={5}
      />
    </div>
  );
}

export default App;
