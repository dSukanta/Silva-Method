import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { AuthContext } from '../../context/AllContext';
import bgImg from "../../img/backgroundImg2.png";

function NewReviewsCard() {
    const { isDesktopOrLaptop, isBigScreen, isTabletOrMobile, isPortrait } = useContext(AuthContext);

    return (
        <Card style={{ width: isDesktopOrLaptop ? '96%' : "98%", height: isDesktopOrLaptop?"300px":"250px", borderRadius: "10px" }} className='customcard222'>
            <Card.Body className={isDesktopOrLaptop ? "d-flex justify-content-start align-items-center gap-4" : "d-flex justify-content-start align-items-center"}>
                {
                    isDesktopOrLaptop && (
                        <div style={{ paddingRight: isDesktopOrLaptop ? "20px" : "10px", borderRight: "5px solid #801cb6", marginRight: isDesktopOrLaptop ? "0px" : "10px" }}>
                            <Card.Img
                                src='https://storyblok-cdn.mindvalley.com/f/60579/420x420/af86d8f361/mvcom_hp_quotes-bianca-loana.jpg?trans?quality=40&auto=webp&dpr=1&width=1903'
                                style={{ width: isDesktopOrLaptop ? "240px" : "180px", height: isDesktopOrLaptop ? "230px" : "160px", objectFit: "cover", borderRadius: "10px" }}
                            />
                        </div>
                    )
                }
                <div className='text-start mt-3'>

                    <div>
                        <Card.Title style={{ color: "black", fontWeight: "bolder", fontSize: isDesktopOrLaptop ? "2.2rem" : "1.2rem",textAlign:isDesktopOrLaptop?"start":"center" }}>
                            "Silva Courses Are amazing ,learned a lot"
                        </Card.Title>
                    </div>
                    <div className={isDesktopOrLaptop?'d-flex':"d-flex justify-content-around align-items-center align-content-center"}>
                        {
                            !isDesktopOrLaptop && (
                                <div>
                                    <Card.Img
                                        src='https://storyblok-cdn.mindvalley.com/f/60579/420x420/af86d8f361/mvcom_hp_quotes-bianca-loana.jpg?trans?quality=40&auto=webp&dpr=1&width=1903'
                                        style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "10px" }}
                                    />
                                </div>
                            )
                        }
                       <div style={{marginBottom:isDesktopOrLaptop?"0px":"20px"}}>
                       <Card.Subtitle style={{ color: "black", fontWeight: "bold", marginBottom: "10px", marginTop: "30px", fontSize: isDesktopOrLaptop ? "1.2rem" : "0.8rem" }}>
                            Avijit Chakraborty
                        </Card.Subtitle>
                        <Card.Subtitle style={{ color: "black", fontSize: isDesktopOrLaptop ? "1rem" : "0.7rem" }}>
                            Software Engineer
                        </Card.Subtitle>
                       </div>
                    </div>


                </div>


            </Card.Body>
        </Card>
    )
}

export default NewReviewsCard