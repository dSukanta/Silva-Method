import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import OverlayCard from "./OverlayCard";
import ProductOverlayCard from "./ProductOverlayCard";
import { useMediaQuery } from "react-responsive";
import {GrFormPrevious,GrFormNext} from "react-icons/gr";

function ProductSlide() {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })

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

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile? 1: isTablet?2:4,
        slidesToScroll: 1,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        prevArrow: <GrFormPrevious />,
        nextArrow: <GrFormNext />,
      };
  return (
    <div className="col-lg-12 gap-3">
      <h3 style={{color: "#7a12d4",padding:'10px 10px 10px 0'}}>Check our Unique Peoducts</h3>
    <Slider {...settings}>
      {products && products.map(product=>
        <ProductOverlayCard data={product && product}/>
        )}
    </Slider>
    </div>
  )
}

export default ProductSlide