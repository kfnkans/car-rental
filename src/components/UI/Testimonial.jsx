import React from 'react'; 
import Slider from 'react-slick'; 
import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg"; 
import ava02 from "../../assets/all-images/ava-2.jpg"; 
import ava03 from "../../assets/all-images/ava-3.jpg"; 
import ava04 from "../../assets/all-images/ava-4.jpg"; 

const Testimonial = () => { 
  const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
  };
  return (
    <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p className="section__description">
            Renting a car from this company was a breeze. The booking process was simple, the vehicle was clean and well-maintained, and the staff were friendly and helpful. I highly recommend this rental service.
            </p>

            <div className="mt-3 d-flex align-items-center gap-4">
                <img src={ava01} alt="" className="w-25 h-25 rounded-2" /> 

                <div>
                    <h6 className="mb-0 mt-3">Ian Miner</h6> 
                    <div className="section__description">Customer</div>
                </div>
            </div>
        </div> 

        <div className="testimonial py-4 px-3">
            <p className="section__description">
            I was impressed with the range of vehicles available for rent. Whether I needed a compact car or a spacious SUV, this company had a great selection. The prices were also very competitive, making it an affordable option for my travels.

            </p>

            <div className="mt-3 d-flex align-items-center gap-4">
                <img src={ava02} alt="" className="w-25 h-25 rounded-2" /> 

                <div>
                    <h6 className="mb-0 mt-3">Joan Smith</h6> 
                    <div className="section__description">Customer</div>
                </div>
            </div>
        </div> 
        <div className="testimonial py-4 px-3">
            <p className="section__description"> I appreciate the outstanding customer service I received from this rental company. The staff went above and beyond to ensure that my rental experience was seamless and stress-free. I will definitely be using this service again in the future.
            </p>

            <div className="mt-3 d-flex align-items-center gap-4">
                <img src={ava03} alt="" className="w-25 h-25 rounded-2" /> 

                <div>
                    <h6 className="mb-0 mt-3">Sam Johnson</h6> 
                    <div className="section__description">Customer</div>
                </div>
            </div>
        </div> 
        <div className="testimonial py-4 px-3">
            <p className="section__description"> I was hesitant to rent a car for the first time, but this company made it so easy and convenient. The online booking process was straightforward, and the pickup and drop-off locations were conveniently located. The car itself was comfortable and reliable, making my trip a success.
            </p>
            <div className="mt-3 d-flex align-items-center gap-4">
                <img src={ava04} alt="" className="w-25 h-25 rounded-2" /> 
                <div>
                    <h6 className="mb-0 mt-3">Michelle Lee</h6> 
                    <div className="section__description">Customer</div>
                </div>
            </div>
        </div> 
    </Slider>
  )
}

export default Testimonial