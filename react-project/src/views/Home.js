//https://www.wallpaperflare.com/search?wallpaper=movie+posters images for carousel
import React from 'react'
import NavCSS from '../css/NavCSS.css'
import nemo from '../images/nemo.jpg'
import insidious from '../images/insidious.jpg'
import johnwick from '../images/johnwick.jpg'
import harrypotter from '../images/harrypotter.jpg'
import lost_in_space from '../images/lost_in_space.jpg'
function Home() {
  
    return (
      <div>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={nemo} class="d-block w-100" alt="Finding nemo" height='500px'/>
            <div class="carousel-caption d-none d-md-block">
              <h5>FInding Nemo</h5>
              <p>Marlin and Dory going to find little Nemo.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={insidious} class="d-block w-100" alt="Insidious" height='500px'/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Insidious</h5>
              <p>Horror.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={harrypotter} class="d-block w-100" alt="HarryPotter" height='500px'/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Harry Potter</h5>
              <p>Magic.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={johnwick} class="d-block w-100" alt="john wick" height='500px'/>
            <div class="carousel-caption d-none d-md-block">
              <h5>John Wick</h5>
              <p>Crime and Thriller.</p>
            </div>
          </div>
          
          <div class="carousel-item">
            <img src={lost_in_space} class="d-block w-100" alt="Lost In Space" height='500px'/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Lost In Space</h5>
              <p>Science Fiction.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        <div className='notes'>
        <p>
         Our website T and S films is a movie website which is one of a kind that will give most of the information about the movie and help viewers to know better about their movie and also purchase tickets for their favourite movies. It was designed by two people Tabasum Kouser and Swaroopa Samanthula who wanted to entertain their viewers.
         </p>
          <p>
          Our website, is like watching movie, that is intended to entertain our viewers. To capture viewers' attention and persuade them to watch the film, it provides them with what they are looking for while also entertaining them. Nowadays, deciding which film to see can be as simple as spending a few minutes browsing a few trailers.
          </p>

         <p>To pique interest and sell tickets, our website typically include the following elements: There general information; an image; description of the movie and online ticket sales.</p>
        
         <br/>
        </div>
      </div>
      </div>

      );
      }
      

export default Home;