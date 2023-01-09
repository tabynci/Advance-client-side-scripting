import {useState,useEffect } from 'react'
import Cart  from './Cart';
import {Link} from 'react-router-dom'


function Movie(props) {
const [movielist, setMovieList] = useState([])
const [total, setTotal] = useState(0)
const [priceAdult, setAdult] = useState(0)
const [priceKids, setKids] = useState(0)
const [noofAdults, setNoAdult] = useState(0)
const [noofKids, setNoKids] = useState(0)

function handleAddMovies(e, props) {
    e.preventDefault()
    // created a movie list array
    var movie_arr = [...movielist] 
      // creating an object item to push it in movie list
      var item = {
      title: props.movie,
       price: total
   }
   console.log(item);

    movie_arr.push(item);
    console.log(movie_arr);
    setMovieList(movie_arr)
    console.log(movielist);
  }

// function handleNoOfAdults(e){
//   setNoAdult(e.target.value)
//   setAdult(10 * noofAdults)
//   getTotal()
// }
// function handleNoOfKids(e){
//   setNoKids(e.target.value)
//   setKids(7 *noofKids )
//   getTotal()
// }
// function getTotal(){
//   setTotal(priceAdult+priceKids)
// }


useEffect(() => {
  setAdult(10 * noofAdults)
}, [noofAdults]); //dependency value changes

useEffect(() => {
  setKids(8 * noofKids)
}, [noofKids]);

useEffect(() => {
  setTotal(priceAdult + priceKids)
}, [priceAdult, priceKids]);

useEffect(() => {
  setAdult(10*noofAdults)
}, [priceAdult]);


function handleNoOfAdults(e){
  setNoAdult(e.target.value)
}

function handleNoOfKids(e){
  setNoKids(e.target.value)
}
  if(props.movie!=="") {
  return (
        <div>
      <span>
       <h3>Movie: {props.movie}</h3>
       <ul>
          <li>
            No of Adults: <br/>
            <input type="text" width="10px" value={noofAdults} onChange={handleNoOfAdults}></input>: {priceAdult}
          </li>
          <li>
            No of Kids  :<br/> 
            <input type="text" width="10px" value={noofKids} onChange={handleNoOfKids}></input>: {priceKids}
          </li>
          <li>
            Total ticket price: {total}
          </li>
        </ul>

      </span> 
      {/* refered from authorlist file */}
      <button onClick={function(e) {handleAddMovies(e,props)}}>Add Movies</button>
      &nbsp;&nbsp;
      {/* passing a movielist to the cart using state */}
      <Link to="/Cart" state={movielist} loggedIn={'true'}>Go to Cart</Link>  
      {/*we can pass state via the link component by making use of a prop named state */}
      </div>
    )
  } 
}
export default Movie;

