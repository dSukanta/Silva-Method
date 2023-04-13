import React, { useState, useEffect } from 'react';

const MultiCarousel = () => {
   

  return <div>
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="cards-wrapper">
        <div className="card">
          <div className="image-wrapper">
            <img src="https://silvamethod.com/assets/images/steps-to-silva-life-system.webp" alt="..."/>
          </div>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="card">
          <div className="image-wrapper">
            <img src="https://silvamethod.com/assets/images/sis-course.webp" alt="..."/>
          </div>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="card">
          <div className="image-wrapper">
            <img src="https://silvamethod.com/assets/images/mind-body-control.webp" alt="..."/>
          </div>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="cards-wrapper">
        <div className="card">
          <div className="image-wrapper">
            <img src="https://silvamethod.com/assets/images/healing-problem-solving.webp" alt="..."/>
          </div>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="card">
          <div className="image-wrapper">
            <img src="https://silvamethod.com/assets/images/manifesting-silva-method.webp" alt="..."/>
          </div>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="card">
          <div className="image-wrapper">
            <img src="https://silvamethod.com/assets/images/activatin-intution.webp" alt="..."/>
          </div>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </div>;
};

export default MultiCarousel;
