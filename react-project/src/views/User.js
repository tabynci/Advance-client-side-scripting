//styling in style.css
import {useEffect, useState} from 'react'
import axios from 'axios';
import {Navigate} from 'react-router-dom'
import pennywise from '../images/pennywise.jpg'
import predator from '../images/predator.jpg'
import OIP from '../images/OIP.jpg'
import madmax from '../images/madmax.jpg'
import spiderman from '../images/spiderman.jpg'
// taken images https://www.bing.com/images/search?q=Buzz+Lightyear+of+Star+Command+Movie&form=IRBPRS&first=1&tsc=ImageHoverTitle
function User(props){
    const [username, setUsername] = useState('')
    const getUser=async function(){
        const token = localStorage.getItem('token')
        var data = await axios.get("http://localhost:8080/users/user", {params: {token: token}} )
        setUsername(data.data.username)
    } 
    useEffect(() =>{
        getUser();
    })
    if(props.loggedIn){
        return(
            <div>
               <h2>Welcome back {username}</h2>
               <div>
               <div className='left'>
                <img src={madmax} alt="MadMAx" width='100%' height='500px'/>
               </div>
              
            <div className='user'>
               <div className='Home-alone'>
                <img src={OIP} alt="home alone"  width="500px" height="400px"/>
              
                <div className='matter'>
                <h3>Director : Chris Columbus</h3>
                <h3> Writer: John Hughes</h3>
                <h3>Stars: Macaulay Culkin, Joe Pesci, Danieal Stern</h3>
                <h5 className="wraper">When his family unintentionally leaves him at home alone during the Christmas break, an eight-year-old troublemaker must defend his home from two robbers. </h5>
                </div>
                </div>
               <div className='spiderman' >
                <img src={spiderman} alt="Spiderman" width="500px" height="400px" />
                <div className='matter1'>
                <h3>Director : Marc Webb </h3>
                <h3> Writer: Alex,Roberto,Jeff Pinkner  </h3>
                <h3>Stars: Andrew, Emma, Jamie </h3>
                <h5 className="wraper">Peter Parker (Andrew Garfield) accepts his new job as a hero and spends time with Gwen Stacy while feeling confident in his abilities as Spider-Man.</h5>
                </div>
                </div>
                <div className='predator'>
                <img src={predator} alt="Predator"  width="500px" height="400px"/>
                <div className='matter'>
                <h3>Director : 	John McTiernan</h3>
                <h3> Writer : Jim Thomas, John Thomas</h3>
                <h3>Stars: 	Arnold Schwarzenegger, Carl Weathers</h3>
                <h5 className="wraper">An alien spacecraft deploys a shuttle to Earth, where Vietnam War veteran Major Alan "Dutch" and his military rescue team, consisting of Mac, Poncho, Blain, Billy, and Hawkins, are tasked with rescuing a foreign cabinet minister and his aide from insurgents. </h5>
                </div>
                </div> 
               <div className='pennywise' >
                <img src={pennywise} alt="IT" width="500px" height="400px" />
                <div className='matter1'>
                <h3>Director : 	Andy Muschietti </h3>
                <h3> Writer: Chase Palmer, Cary Fukunaga, Gary Dauberman  </h3>
                <h3>Stars: Jaeden Lieberher, Bill Skarsgård </h3>
                <h5 className="wraper">In October 1988, twelve-year-old Bill Denbrough crafts a paper sailboat for Georgie, his six-year-old brother. Georgie sails the boat along the rainy streets of small town Derry, Maine, only to have it fall down a storm drain. As he attempts to retrieve it, Georgie sees a clown in the drain, who introduces himself as "Pennywise the Dancing Clown". Pennywise entices Georgie to come closer, then rips his arm off and drags him into the sewer.</h5>
                </div>
                </div>

                </div>
                </div>
               </div>
           )
    } else{
        return(
            <Navigate to="/login" />
           )
    }
   
 }
 export default User;
