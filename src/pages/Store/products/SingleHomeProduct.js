import React, { useContext } from 'react'
import { Badge, Button, Card, ProgressBar } from 'react-bootstrap'
import { GrFormNext } from "react-icons/gr";
import { Link } from 'react-router-dom';
import Noimage from '../../../img/noimage.jpg'
import { Tooltip } from 'react-tooltip';
import { AuthContext } from '../../../context/AllContext';

function SingleHomeProducts({data}) {
  //console.log(data);
  const { isDesktopOrLaptop, isBigScreen, isTabletOrMobile, isPortrait } =useContext(AuthContext);

    return (
        
                <div>
                    <Card className="text-start cardbody" style={{ borderRadius: "20px",width:"90%"}}>
                        <Card.Header className='bg-transparent'
                            style={{ borderBottom: "none"}}
                        >
                            <div className='d-flex justify-content-center align-items-center gap-3 mt-3'>
                                {/* <h5><Badge bg="dark">{data && data.delivery_method}</Badge></h5> */}
                                <a
                                data-tooltip-id="product-name-tooltip" 
                                data-tooltip-content={data && data.product_name}
                                data-tooltip-place="top">
                                     <h6 className='text-dark'>{data && data.product_name.substring(0,15)}...</h6>
                                </a>
                               
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Img style={{ width:"100%",height:isDesktopOrLaptop?"300px":"100px"}} src={data && data.product_image? data.product_image:Noimage} />
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex flex-column'>
                                    <Card.Text className='text-dark'>
                                        <b>by</b> <br />  {data && data.author? data.author:"Author Name"}
                                    </Card.Text>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="bg-transparent">View Details 
                        <Link to={`/store/product/${data && data.product_id}`}>
                                <GrFormNext size={30} style={{float:'right'}}/>
                                </Link>
                        </Card.Footer>
                    </Card>
                    <Tooltip id="product-name-tooltip" />
                </div>



    )
}

export default SingleHomeProducts