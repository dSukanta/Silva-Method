import React from "react";
import { Link } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const HomeSingleProduct = ({ data }) => {
  console.log(data);

  const {
    product_image,
    product_name,
    product_type,
    buy_now_link,
    product_id,
    author,
  } = data;

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {product_name}
    </Tooltip>
  );

  const renderSubTitle = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {""}
    </Tooltip>
  );
  return (
    <>
      <div>
        <div>
          <div>
            <img src={`${product_image}`} alt="" height="300px" />
            {/* <Link className="team-link" to="/doctorDetails">+</Link> */}
          </div>
          <div>
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <h6
                style={{
                  width: "150px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  marginTop: "10px",
                }}
              >
                {product_name}
              </h6>
            </OverlayTrigger>
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={renderSubTitle}
            >
              <p
                style={{
                  width: "150px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {""}
              </p>
            </OverlayTrigger>
          </div>
          <div>
            {/* {product_type==='Internal' ?
                  <Link to={`/store/product/${product_id}`}><button className='buy-now-btn'>Buy Now</button></Link> :
                  <a href={buy_now_link} className='buy-now-link'>Buy Now</a>
                  } */}

            
              <Link to={`/store/product/${product_id}`}>
                <button className="buy-now-btn">View Details</button>
              </Link>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSingleProduct;
