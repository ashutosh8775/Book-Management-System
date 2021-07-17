import React, { useState, useEffect } from "react";
import Review from './Reviews/Review';
import { useParams } from "react-router-dom";
import axios from "axios";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function BookInfo(){
    const imageData = {
        "data":[
            {"id":1,"path":"/images/book1.jpg"},
            {"id":2,"path":"/images/book2.jpg"},
            {"id":3,"path":"/images/book3.jpg"},
            {"id":4,"path":"/images/book4.jpg"},
            {"id":5,"path":"/images/book5.jpg"},
            {"id":6,"path":"/images/book6.jpg"},
            {"id":7,"path":"/images/book7.jpg"},
            {"id":8,"path":"/images/book8.jpg"},
            {"id":9,"path":"/images/book9.jpg"},
            {"id":10,"path":"/images/book10.jpg"}
        ]
    }
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    const [bookInfo, getBookInfo] = useState({});
    const [loading,setLoading] = useState(false);
    let { book_id } = useParams();
    const getBookData = async () => {
        setLoading(true)
        const res = await axios.get("http://localhost:3002/books/"+book_id);
        let dataObj = res.data.output[0];
        dataObj.imagesArr = imageData.data;
        getBookInfo(dataObj);
        setLoading(false)
    }
    useEffect(()=>{
        getBookData();
    },[])
    return (
        <div className="wrapper">
            <div className="container">
                <div className="row mt-10">
                    <div className="col-lg-5 col-md-5">
                        <div className="online-course-card">
                        <Carousel
                            swipeable={false}
                            draggable={false}
                            showDots={true}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlaySpeed={1000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                            >
                            {imageData.data.map(ele =>{
                                return (
                                    <img src={ele.path} height="350"/>
                                )
                                 
                            })}
                          {/* <ImageComponent srcData={imageData}/> */}
                            </Carousel>
                        {/* <img src="https://source.unsplash.com/random/600x314" className="img-fluid" alt=""/> */}
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7">
                        <h3>{bookInfo.name}</h3>
                    <p>{bookInfo.description}</p>
                    </div>
                </div>
            </div>
            <Review />
        </div>
    )
}

export default BookInfo;