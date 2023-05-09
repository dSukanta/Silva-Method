import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import OverlayCard from "./OverlayCard";
import ProductOverlayCard from "./ProductOverlayCard";
import { useMediaQuery } from "react-responsive";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import SingleHomeProducts from "./SingleHomeProduct";
import { AuthContext } from "../../../context/AllContext";

function ProductSlide() {
  const { isDesktopOrLaptop, isBigScreen, isTabletOrMobile, isPortrait } =
    useContext(AuthContext);

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const myHeaders = new Headers();
    myHeaders.append("ApiKey", "40bb9d38c66e40a86678979286f4e2b5");
    myHeaders.append("Device", "Android");
    myHeaders.append("Language", "english");

    const formData = new FormData();
    formData.append("start_index", "0");
    formData.append("no_of_records", "15");

    const options = {
      method: "POST",
      headers: myHeaders,
      body: formData,
    };
    const res = await fetch(
      `https://projectsites.in/silvamethod/api/productList`,
      options
    );
    const data = await res.json();
    //console.log(data.data);
    setProducts(data.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  //console.log(products);

  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: isDesktopOrLaptop ? 4 : 2,
  //   slidesToScroll: 1,
  //   centerMode: false,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   pauseOnHover: false,
  //   prevArrow: <GrFormPrevious />,
  //   nextArrow: <GrFormNext />,
  // };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: isDesktopOrLaptop ? "60px" : "0px",
    slidesToShow: isDesktopOrLaptop ? 3 : 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    prevArrow: <GrFormPrevious />,
    nextArrow: <GrFormNext />,
    dots: true,
    autoplay: true,
  };

  return (
    <div className="col-lg-12 gap-3 not-slide-icon text-center">
      <h2
        style={{
          fontWeight: "800",
          fontSize: isDesktopOrLaptop ? "60px" : "30px",
          marginBottom:'50px'
        }}
      >
        Check our Unique Products
      </h2>
      <Slider {...settings}>
        {products &&
          products.map((product) => (
            // <div className="d-flex w-100 row row-cols-2 row-cols-lg-3 justify-content-center align-items-center p-3">
            <SingleHomeProducts
              key={product.product_id}
              data={product && product}
            />
            //  </div>
          ))}
      </Slider>
    </div>
  );
}

export default ProductSlide;
