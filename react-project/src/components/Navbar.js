import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import NavCss from '../css/NavCSS.css'
import logo from '../images/logo.png'

function Navbar(props){
    const [loggedIn, setLoggedIn] = useState(false)
    useEffect(function(){
        if(props.loggedIn){
            setLoggedIn(true)
        } else{
            setLoggedIn(false)
        }
    }, [props.loggedIn])

    if(loggedIn){
   return(
    <nav className='links'>
        <img className='logo' src={logo} alt="Logo" width='150px' height='75px'/> 
        <Link className='navLinks' to="/user">User</Link> 
        <Link className='navLinks' to="/logout">Logout</Link> 
        <Link className='navLinks' to="/Cinema">Cinema</Link> 
        <Link className='navLinks' to="/Contact">Contact</Link> 
        </nav>
   )
    } else{
        return(
            <nav className='links'>
                <img className='logo' src={logo} alt="Logo" width='150px' height='75px'/>
                <Link className='navLinks' to="/">Home</Link> 
                <Link className='navLinks' to="/register">Register</Link> 
                <Link className='navLinks' to="/login">Login</Link> 
                <Link className='navLinks' to="/Contact">Contact</Link> 
            </nav>
           )
    }


  
}
export default Navbar;