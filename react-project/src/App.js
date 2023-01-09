import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import User from './views/User'
import Logout from './views/Logout'
import Cinema from './views/Cinema';
import ForgotPassword from './views/ForgotPassword';
import Footer from './components/Footer';
import Cart from './views/Cart'
import { useState, useEffect } from 'react';
import Contact from './views/Contact'

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const getLoggedIn=async function fetchData(){
    const token = localStorage.getItem("token")
    if(token){
       var data = await axios.get("http://localhost:8080/users/user", {params: {token: token}})
       if(data.status === 200){
        setLoggedIn(true)
       }
    } else {
        setLoggedIn(false)
    } 
   }
  useEffect(() => {
    getLoggedIn();
  }, [])

   return (
    <Router>
     <div>
       <Navbar loggedIn={loggedIn} />
      
         <Routes>
         <Route className='home' path='/' element={<Home/>}  />
         <Route  path='Login' element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}  />
         <Route className='register' path='Register' element={<Register loggedIn={loggedIn} />}  />
         <Route className='user' path='User' element={<User loggedIn={loggedIn}/>}  />
         <Route className='home' path='Cinema' element={<Cinema loggedIn={loggedIn} setLoggedIn={loggedIn}/>} />
         <Route className='home' path='Logout' element={<Logout setLoggedIn={setLoggedIn}/>} />
         <Route className='home' path='ForgotPassword' element={<ForgotPassword setLoggedIn={setLoggedIn}/>} />
         <Route className='home' path='Cart' element={<Cart loggedIn={loggedIn} setLoggedIn={loggedIn} />} />
         <Route className='home' path='Contact' element={<Contact loggedIn={loggedIn} />} />
         </Routes>
       <Footer />
        </div>
       </Router>
   );
 
 

}

export default App;
