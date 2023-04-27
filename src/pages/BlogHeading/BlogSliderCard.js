import React from 'react'
import { useMediaQuery } from 'react-responsive'

function BlogSliderCard({ data }) {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    return (
        <div className="row align-items-center" style={{ width: "100%", marginTop: "30px", marginLeft: "0px" }}>
            <div className="col-sm-12 col-md-6 mb-4">
                <img src={data?.img} style={{ width: "100%", minHeight: "100%" }} />
            </div>
            <div className="col-sm-12 col-md-6">
                <div className='d-flex flex-column justify-content-start'>
                    <button className='primary_btn' style={{ width: "150px", height: "60px" }}>
                        {data.category}
                    </button>
                    {
                        isDesktopOrLaptop && (
                            <h2 className='text-start mt-3' style={{ width: "350px" }}>
                                {data.title}
                            </h2>
                        )
                    }

                    {
                        !isDesktopOrLaptop && (
                            <h4 className='text-start mt-3' style={{ width: "350px" }}>
                                {data.title}
                            </h4>
                        )
                    }
                    <p className='text-start'>
                        By <span style={{ color: "blue", fontWeight: "bold", marginRight: "5px" }}>
                            {data.author}
                        </span>
                        | {data.date}
                    </p>

                </div>
            </div>
        </div>
    )
}

export default BlogSliderCard