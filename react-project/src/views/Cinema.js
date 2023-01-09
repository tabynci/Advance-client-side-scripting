import {useState, useEffect} from 'react'
import axios from 'axios';
import {Navigate} from 'react-router-dom'
import "../css/Style.css";
import Movie from './Movie';

 function Cinema(props){
    const [username, setUsername] = useState('')
    const [genre, setGenre] = useState('')
    const [plot, setPlot] = useState('')
    const [title, setTitle] = useState(''); 
    const [year, setYear] = useState('')
    const [rating, setRating] = useState('')
    const [release, setRelease] = useState('')
    const [message, setMessage] = useState('')
    const [image, setImage] =useState('')
    const [error, setError] = useState("")
    
    function handleSearchTitle(e){ //when user enters value this function is called out
        e.preventDefault()
        setTitle(e.target.value)
    }
    function handleSearchYear(e){ //when user enters value this function is called out
        e.preventDefault()
        setYear(e.target.value)
    }
    function handleError(e){
        e.preventDefault()
        setMessage('Check the title of the movie you have entered')
    }
    function handleAdd(e){
        e.preventDefault()
        setMessage('add items')

    }
    const getUser=async function(){
        const token = localStorage.getItem('token')
        var data = await axios.get("http://localhost:8080/users/user", {params: {token: token}} )
        setUsername(data.data.username)
    } 
    useEffect(() =>{
        getUser();
    })
    
   
    async function searchTitle(e){  
         e.preventDefault()
        try{var response = await axios.get('http://www.omdbapi.com/', //an api to get the data the user has inputed
        {params: {t:title, y:year, apikey:"d7c31c70"}}) 
        setPlot(response.data.Plot)
        setGenre(response.data.Genre) 
        setRating(response.data.imdbRating)
        setRelease(response.data.Released)
        setTitle(response.data.Title)
        setImage(response.data.Poster)
      
    }catch(e){
        setError("Unable to retrieve movie, please try again later")
    }
}
    
 if(props.loggedIn){
    return(  // if true this is displayed
        // <div style={{backgroundImage:'url({$image1})'}}> 
        //image taken from https://www.bing.com/search?q=free+movie+images&cvid=a065197fbf3343308aa468d574aa1d01&aqs=edge..69i57j0l8j69i11004.5490j0j4&FORM=ANAB01&PC=NMTS&ntref=1
        <div >
         
        <div className='conatiner'>
        <div>
         <h3 style={{float: 'left', color: 'white'}}> Hello {username}</h3>
         </div> <br/><br/>
           <div><p className='Movie'>
                Look for the movie details you wish for.
            </p>
            <p className='Movie'>
                Enter movie title and year and click search.
            </p>
        </div> 
            <div className='textbox'>
                <form className='form'>
            <label className='input'>Title</label>
                <br></br>
          <input type="text" value={title} onChange={handleSearchTitle} placeholder="enter title"/>
          <br/>
          <label className='input'>Year</label>
                       <br></br>
          <input type="text" value={year} onChange={handleSearchYear} placeholder="enter year "/>
          <br>
          </br>
          <br>
          </br>
          <button className='regBtn' onClick={searchTitle}>Search</button>
          <br></br>
          </form>
          </div>
          </div>
        <div className={rating!==""?"show":"hide"}>
            <div className='imageLeft'>
            <img src={image}></img>
            </div>
            <div className='container1'>
                <h4>Review and Details</h4>
                <p>Rating:{rating}</p>
                <p>Genre:{genre}</p>
                <p className='plot'>Plot:{plot}</p>
                <p>{message}</p>
           </div>
        
           <div className='ticket'>
           <Movie image={image} movie={title} />
           </div>
        </div>
           
        {/* <MovieList Movie={title} image={props.image} price={price}></MovieList> */}
         </div>
             );
         } else{
       
            return(  // if true this is displayed
            // <div style={{backgroundImage:'url({$image1})'}}> 
            //image taken from https://www.bing.com/search?q=free+movie+images&cvid=a065197fbf3343308aa468d574aa1d01&aqs=edge..69i57j0l8j69i11004.5490j0j4&FORM=ANAB01&PC=NMTS&ntref=1
            <div >
             
            <div className='conatiner'>
            <div>
             <h3 style={{float: 'left', color: 'white'}}> Hello {username}</h3>
             </div> <br/><br/>
               <div><p className='Movie'>
                    Look for the movie details you wish for.
                </p>
                <p className='Movie'>
                    Enter movie title and year and click search.
                </p>
            </div> 
                <div className='textbox'>
                    <form className='form'>
                <label className='input'>Title</label>
                    <br></br>
              <input type="text" value={title} onChange={handleSearchTitle} placeholder="enter title"/>
              <br/>
              <label className='input'>Year</label>
                           <br></br>
              <input type="text" value={year} onChange={handleSearchYear} placeholder="enter year "/>
              <br>
              </br>
              <br>
              </br>
              <button className='regBtn' onClick={searchTitle}>Search</button>
              <br></br>
              </form>
              </div>
              </div>
            <div className={rating!==""?"show":"hide"}>
                <div className='imageLeft'>
                <img src={image}></img>
                </div>
                <div className='container1'>
                    <h4>Review and Details</h4>
                    <p>Rating:{rating}</p>
                    <p>Genre:{genre}</p>
                    <p className='plot'>Plot:{plot}</p>
                    <p>{message}</p>
               </div>
            
               <div className='ticket'>
               <Movie image={image} movie={title} />
               </div>
            </div>
               
            {/* <MovieList Movie={title} image={props.image} price={price}></MovieList> */}
             </div>
                 );
            }
 }
 export default Cinema