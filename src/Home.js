import React from 'react'
// import Dashbord from '../pages/Dashbord'
import"./Home.css"
import { Link } from "react-router-dom";
import slide1 from"./images/mi1.png"
import slide2 from"./images/mi2.png"
import slide3 from"./images/mi3.png"

import Nav from './Nav'
import Recommend from './Recommend'
function Home(){
  return(
    <>
      <Nav/>
      <div className="home">
        
        <div id="carouselExampleIndicators" className="carousel slide">
         <div className="carousel-indicators">
           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
         <div className="carousel-inner">
          <div className="carousel-item">
           <img src={slide3} className="d-block w-100" alt="./images/mi3.png"/>
          </div>
          <div className="carousel-item active">
            <img src={slide1} className="d-block w-100" alt="./images/mi1.png"/>
          </div>
          <div className="carousel-item">
           <img src={slide2} className="d-block w-100" alt="./images/mi2.png"/>
             </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
         <span className="visually-hidden">Previous</span>
        </button>
         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
         <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
   

    </>
  );
}
export default Home;