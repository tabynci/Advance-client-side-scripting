//https://www.pngkey.com/download/u2w7u2o0o0e6e6i1_contact-me-contact-button-for-website/  image for contact us
import {useState} from 'react'
import contact1 from '../images/contact1.jpg'

function Contact(){
    
   const [message, setMessage] = useState('')
   const [username, setUsername] = useState('')
   const [email, setEmail] = useState('')
   const [text, setText] = useState('')

   function handleUsernameInput(e){
      e.preventDefault()
      setUsername(e.target.value)
  }
  function handleEmailInput(e){
      e.preventDefault()
      setEmail(e.target.value)
  }
  function handleTextInput(e){
    e.preventDefault()
    setText(e.target.value)
}
 function handleSubmit(e){
      e.preventDefault()
      setMessage("We will contact you soon")
      setUsername("")
      setEmail("")
      setText("")
    
  }
  function handleError(e){
    e.preventDefault()
    setMessage("Please enter all the details")
    setUsername("")
    setEmail("")
    setText("")
  
}
  if(!username == "" && !email == "" && !text == ""){
      return(
        <div className='App'>
           
           <header>
            <form style={{padding: '10px', paddingBottom: '100px'}}>
            <img src={contact1} width='23%' alt="contact" height='80px'/>
                <h4>Contact Form</h4>
                <br></br>
                <h4>{message}</h4>
           <label>UserName</label> <br/><br/>
           <input type="text" value={username} onChange={handleUsernameInput} />
           <br/><br />
           <label>Email</label> <br/><br/> 
           <input type='email' value={email} onChange={handleEmailInput} />
           <br/> <br /> 
           <label>Message</label> <br/><br/>
           <textarea rows = "3" cols = "50" value={text} name = "description" onChange={handleTextInput}>
         </textarea> <br/><br/>
           <br/> <br />
           <button onClick={handleSubmit}>Submit</button>
           <br/> <br />
            </form>
           </header>
           </div>
         
      )
  } else{
      return(
          <div className='App'>
           <header>
            <form style={{padding: '10px', paddingBottom: '100px'}}>
            <img src={contact1} width='23%' alt="contact" height='80px'/>
                <h1>Contact Form</h1>
                <h4 style={{color:'red'}}> {message} </h4>
           <br/>
           <label>UserName</label> <br/><br/>
           <input type="text" value={username} onChange={handleUsernameInput} />
           <br/><br />
           <label>Email</label> <br/><br/> 
           <input type='email' value={email} onChange={handleEmailInput} />
           <br/> <br />
         <label>Message</label> <br/><br/>
           <textarea rows = "5" cols = "50" value={text} name = "description" onChange={handleTextInput}>
         </textarea> <br/><br/>
           <button onClick={handleError}>Submit</button>
           <br/> <br />
            </form>
           </header>
           
          </div>
          
          
      )
  }
 }
 export default Contact;