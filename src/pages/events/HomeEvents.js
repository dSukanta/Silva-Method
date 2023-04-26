import React, { useEffect, useState } from 'react';
import HomeSingleEvents from './HomeSignleEvents';
import Slider from 'react-slick';

const HomeEvents = () => {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               dots: true,
               infinite: true,
               speed: 500,
               slidesToShow: 3,
               slidesToScroll: 1,
               autoplay: true,
               autoplaySpeed: 3000,
            }
         },
         {
            breakpoint: 600,
            settings: {
               dots: true,
               infinite: true,
               speed: 500,
               slidesToShow: 1,
               slidesToScroll: 1,
               autoplay: true,
               autoplaySpeed: 3000,
            }
         },
         {
            breakpoint: 480,
            settings: {
               dots: true,
               infinite: true,
               speed: 500,
               slidesToShow: 1,
               slidesToScroll: 1,
               autoplay: true,
               autoplaySpeed: 3000,
            }
         }
      ]
   };

   const [classes, setClasses] = useState([]);

   const getData = async () => {
      const myHeaders = new Headers();
      myHeaders.append("ApiKey", "40bb9d38c66e40a86678979286f4e2b5");
      myHeaders.append("Device", "Android");
      myHeaders.append("Language", "english");

      const formData = new FormData();
      formData.append("start_index", "0");
      formData.append("no_of_records", "100");

      const options = {
         method: 'POST',
         headers: myHeaders,
         body: formData
      }
      const res = await fetch(`https://projectsites.in/silvamethod/api/home`, options)
      const data = await res.json();
      //console.log(data.data.classes);
      setClasses(data.data.classes);
   }

   useEffect(() => {
      getData();
   }, []);

   //console.log(classes);

   return (
      <>
         <section className="servcies-area gray-bg pt-50 pb-20">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section-title text-center pos-rel mb-15">
                        {/* <div className="section-icon">
                           <img className="section-back-icon" src="img/section/section-back-icon.png" alt=""/>
                        </div> */}
                        <div className="section-text pos-rel home_ser_title">
                           {/* <h5>Upcoming Live & Online Classes</h5> */}
                           <h2>Upcoming Live & Online Classes</h2>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt="" />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row py-3">
                  <Slider {...settings}>
                  {classes && classes.map((classes) =>
                     <HomeSingleEvents key={classes.class_id} data={classes} />
                  )}
                  </Slider>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeEvents;