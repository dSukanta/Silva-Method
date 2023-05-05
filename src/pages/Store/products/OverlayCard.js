import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import ReactDOMServer from 'react-dom/server';


function OverlayCard({ data }) {
  //console.log(data);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {data && data.product_name}
    </Tooltip>
  );

  const renderSubTitle = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {""}
    </Tooltip>
  );

  return (
    <div>
      <div class="product-overlay-card">
        <img src={data && data.product_image} class="product-card__image" />
        <div class="product-card__overlay">
          <div class="product-overlay__text">
            {/* <a href="#" class="product-overlay-button">
              <AiOutlineEye size={40} />
              <Link to={`/store/product/${product_id}`}> <AiOutlineEye size={40}/></Link>
            </a> */}
            <Link to={`/store/product/${data && data.product_id}`}>
              <AiOutlineEye size={40} color="white"/>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center p-3">
        <a data-tooltip-id="product-name" data-tooltip-content={data && data.product_name}>
          <h5>{data && data.product_name.split('').splice(0,10)}....</h5>
        </a>

        {/* <b>{data && data.price}</b> */}
      </div>
      <Tooltip id="product-name" />
      <Tooltip id="product-name" />
    </div>
  );
}

export default OverlayCard;
