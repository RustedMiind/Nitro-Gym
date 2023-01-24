import React, { Component, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

function ImagesSlider(props) {
  const [images, setImages] = useState(props.images);
  useEffect(() => {
    setImages(props.images);
    console.log(props.images);
  });
  return images ? (
    <div className="container">
      <div className="slider">
        <div className="title">
          {props.name} {props.female ? "Ladies" : "Men"} Branch
        </div>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
        >
          {images.map((image) => {
            return (
              <SwiperSlide>
                <img
                  className="branch-image-preview"
                  src={`images/${image}`}
                  alt="Branch"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  ) : (
    <>Error Occured while compliling</>
  );
}

export default ImagesSlider;
