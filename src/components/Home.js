import React from 'react'

export default function Home() {
    return (
        

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
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


        
    )
}
