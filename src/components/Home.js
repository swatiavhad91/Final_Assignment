import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Men from './Men';
import Footer from './Footer';

export default function Home() {

      return (
        
<div>
<Header/>
  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <ol className="carousel-indicators">
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="../Assets/banner_1.jpeg" className="d-block w-100  " alt="Online Shopping Image_1" />
    </div>
    <div className="carousel-item">
      <img src="../Assets/banner_2.jpeg" className="d-block w-100" alt="Online Shopping Image_2"/>
    </div>
    <div className="carousel-item">
      <img src="../Assets/banner_3.jpeg" className="d-block w-100" alt="Online Shopping Image_3"/>
    </div>
    <div className="carousel-item">
      <img src="../Assets/banner_4.jpeg" className="d-block w-100" alt="Online Shopping Image_4"/>
    </div>
    <div className="carousel-item">
      <img src="../Assets/banner_5.jpg" className="d-block w-100" alt="Online Shopping Image5"/>
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

<div className="advantages">
      
<section>
<br></br>
<h1 style={{textAlign:"center"}}>Our Advantages</h1>
<br></br>
<p>Lorem ipsum dolor sit,amet consectetur adipisicing elit. Nostrum ullam vel sequi nemo. 
        Quae natus tempora nihil ducimus reprehenderit recusandae saepe, 
        consectetur magni possimus nemo architecto nostrum minima odio sit.</p>


</section>
</div>

<div className="high_quality">

  <div className="quality1">
    <div style={{marginTop:"7%"}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="rgb(196,196,196)" className="bi bi-circle-fill" viewBox="0 0 16 16">
  <circle cx="8" cy="8" r="8"/>
</svg>
</div>
  <h4 style={{marginTop:"7%"}}>High Quality</h4>

  <p style={{textAlign:"justify", padding:"5%"}}>Lorem ipsum dolor sit,amet consectetur adipisicing elit. Nostrum ullam vel sequi nemo. 
        Quae natus tempora nihil ducimus reprehenderit recusandae saepe, 
        consectetur magni possimus nemo architecto nostrum minima odio sit.
        </p>
  </div>

  <div className="quality2">
    <div style={{marginTop:"7%"}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="rgb(196,196,196)" className="bi bi-circle-fill" viewBox="0 0 16 16">
  <circle cx="8" cy="8" r="8"/>
</svg>
</div>
  <h4 style={{marginTop:"7%"}}>High Quality</h4>
  <p style={{textAlign:"justify", padding:"5%"}}>Lorem ipsum dolor sit,amet consectetur adipisicing elit. Nostrum ullam vel sequi nemo. 
        Quae natus tempora nihil ducimus reprehenderit recusandae saepe, 
        consectetur magni possimus nemo architecto nostrum minima odio sit.
        </p>
  </div>
  
  <div className="quality3">
    <div style={{marginTop:"7%"}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="rgb(196,196,196)" className="bi bi-circle-fill" viewBox="0 0 16 16">
  <circle cx="8" cy="8" r="8"/>
</svg>
</div>
  <h4 style={{marginTop:"7%"}}>High Quality</h4>
  <p style={{textAlign:"justify", padding:"5%"}}>Lorem ipsum dolor sit,amet consectetur adipisicing elit. Nostrum ullam vel sequi nemo. 
        Quae natus tempora nihil ducimus reprehenderit recusandae saepe, 
        consectetur magni possimus nemo architecto nostrum minima odio sit.
        </p>
  </div>
</div>

<h3 style={{marginTop:"3%",textAlign:"center"}}>Some top products for you</h3>
<div className="top_products">

<div className="tabbed_component">
<ul className="nav nav-tabs">
  <Link to="men">Men</Link>
  
  </ul>
  </div>
  

  <div className="tabbed_component">
<ul className="nav nav-tabs">
<Link to="women">Women</Link>
  </ul>
  </div>

  <div className="tabbed_component">
<ul className="nav nav-tabs">
<Link to="jewelery">Jewelery</Link>

  </ul>
  </div>
 </div>
{/* <div className="shoes_container" style={{marginTop:"5%"}}>

  <img src="../Assets/shoes1.png"></img>
  <img src="../Assets/shoes2.jpg" ></img>
  </div> */}
<Footer/>
</div>

        
    )
}
