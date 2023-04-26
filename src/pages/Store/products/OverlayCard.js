import React from "react";
import {AiOutlineEye} from 'react-icons/ai'

function OverlayCard() {
  return (
    <div>
      <div class="product-overlay-card">
        <img
          src="https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          class="product-card__image"
        />
        <div class="product-card__overlay">
          <div class="product-overlay__text">
            <a href="#" class="product-overlay-button">
              <AiOutlineEye size={40}/>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center p-3">
      <h5>Product Name</h5>
      <b>Price</b>
      <p>Description</p>
      </div>
    </div>
  );
}

export default OverlayCard;
