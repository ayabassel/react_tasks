import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from "react-router-dom";

export function Slider() {
    return (
        <Carousel>
            <Carousel.Item className="drk">
                <img
                    className="d-block w-100 customImg"
                    src="https://images.lifestyleasia.com/wp-content/uploads/2019/12/12144154/GettyImages-1080910832.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className="sliderContent ">
                    <h1 className="fw-bolder">SUMMER SALE</h1>
                    <p>DON'T COMPROMISE ON STYLE!GET FLAT 30% OFF FROM NEW ARRIVALS.</p>
                    <NavLink className=" btn btn-light" to="/products">Shop Now</NavLink>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="drk">
                <img
                    className="d-block w-100 customImg"
                    src="https://burst.shopifycdn.com/photos/man-in-suit-bowtie.jpg?width=1200&format=pjpg&exif=0&iptc=0"
                    alt="Second slide"
                />

                <Carousel.Caption className="sliderContent ">
                    <h1 className="fw-bolder">SUMMER SALE</h1>
                    <p>DON'T COMPROMISE ON STYLE!GET FLAT 30% OFF FROM NEW ARRIVALS.</p>
                    <NavLink className=" btn btn-light" to="/products">Shop Now</NavLink>
                 </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="drk">
                <img
                    className="d-block w-100 customImg"
                    src="https://media.istockphoto.com/id/1293366109/photo/this-one-match-perfect-with-me.jpg?s=612x612&w=0&k=20&c=wJ6yYbRrDfdmoViuQkX39s2z_0lCiNQYgEtLU--0EbY="
                    alt="Third slide"
                />

                <Carousel.Caption className="sliderContent">
                    <h1 className="fw-bolder">SUMMER SALE</h1>
                    <p>DON'T COMPROMISE ON STYLE!GET FLAT 30% OFF FROM NEW ARRIVALS.</p>
                    <NavLink className="btn btn-light" to="/products">Shop Now</NavLink>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        
        
    )
}