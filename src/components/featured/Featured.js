import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Slider from 'react-slick'

function Featured() {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: isDesktopOrLaptop?5:isTablet?3:2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
      <Slider {...settings}>
        <div>
          <img src='https://res.cloudinary.com/mindvalley/image/fetch/c_scale,dpr_1,f_auto,fl_lossy,q_auto,w_auto/https://a.storyblok.com/f/60579/x/897dfd4eaa/new-york-times_logo.svg?trans' className='featured-images' />
        </div>
        <div>
          <img src='https://res.cloudinary.com/mindvalley/image/fetch/c_scale,dpr_1,f_auto,fl_lossy,q_auto,w_128/https://a.storyblok.com/f/60579/x/aa9aca6abc/wf_lp_aso-forbes.svg?trans' className='featured-images' />
        </div>
        <div>
          <img src='https://res.cloudinary.com/mindvalley/image/fetch/c_scale,dpr_1,f_auto,fl_lossy,q_auto,w_256/https://a.storyblok.com/f/60579/x/39787ddf00/logo_usa-today.svg?trans' className='featured-images' />
        </div>
        <div>
          <img src='https://res.cloudinary.com/mindvalley/image/fetch/c_scale,dpr_1,f_auto,fl_lossy,q_auto,w_192/https://a.storyblok.com/f/60579/x/e62bd7181d/logo_entrepreneur.svg?trans' className='featured-images' />
        </div>
        <div>
          <img src='https://res.cloudinary.com/mindvalley/image/fetch/c_scale,dpr_1,f_auto,fl_lossy,q_auto,w_auto/https://a.storyblok.com/f/60579/x/5bfdb57592/logo-bbc.svg?trans' className='featured-images' />
        </div>
        <div>
          <img src='https://res.cloudinary.com/mindvalley/image/fetch/c_scale,dpr_1,f_auto,fl_lossy,q_auto,w_auto/https://a.storyblok.com/f/60579/x/0c6e870d22/logo-inc.svg?trans' className='featured-images' />
        </div>
        <div>
          <img src='https://storyblok-cdn.mindvalley.com/f/60579/137x63/bb261f0aca/wf_lp_aso_cnn_2x.png?trans?quality=40&auto=webp&dpr=1&width=auto' className='featured-images' />
        </div>
      </Slider>
    // </div>

  )
}

export default Featured

{/* <Slider {...settings}> */ }


{/* </Slider> */ }
    // </div>