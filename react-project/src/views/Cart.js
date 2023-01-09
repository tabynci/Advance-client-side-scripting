// used to pass data https://www.kindacode.com/article/react-router-passing-data-states-through-links/

import { useState } from "react";
import {useLocation, Link} from 'react-router-dom'
import Movie from './Movie';
import Style from '../css/Style.css'
function Cart(props){
    
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    
    function handleEmailInput(e){
        e.preventDefault()
        setEmail(e.target.value)
     }

    function handleSubmit(e){
       e.preventDefault()
       setEmail("")
       setMessage("tickets will be sent to an email address")
       }
    function handleError(e){
        e.preventDefault()
        setMessage("please enter an email address")
    }
    // accessing movielist as it is passed from the movie.
    var movielist = useLocation().state 
    if(email !== ""){
        return(
            <div className="cart">
                <h1>Enter email address to get your tickets.</h1>
                <br/><br/>
               <h2> Movie Name: {movielist[0].title}</h2>
               <br/><br/>
               <h3>Total Cost: {movielist[0].price}</h3>
               <br/><br/>
               <label>Email</label><br/>
               <input type='email'value={email} onChange={handleEmailInput} placeholder='Enter Email' required /><br/><br/>
               <button onClick={handleSubmit}>Submit</button><br></br><br></br>
                {/* <div>{cart[0].image}</div> */}
                <h4>{message}</h4>
                </div>
                )
        }
      else{
        return(
            <div className="cart">
                <h1>Enter email address to get your tickets.</h1>
                <br/><br/>
                {/* accesing title from the movielist array */}
               <h2> Movie Name: {movielist[0].title}</h2>
               <br/><br/>
               {/* accesing price from the movielist array */}
               <h3>Total Cost: {movielist[0].price}</h3>
               <br/><br/>
               <label>Email</label><br/>
               <input type='email' onChange={handleEmailInput} placeholder='Enter Email' required /><br/><br/>
               <button onClick={handleError}>Submit</button><br></br><br></br>
               
                {/* <div>{cart[0].image}</div> */}
            
                <h4>{message}</h4>
          </div>
        )
    }
    
}
export default Cart;