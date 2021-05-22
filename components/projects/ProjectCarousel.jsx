import React from "react";
import { Carousel } from "react-responsive-carousel";

export default function ProjectCarousel({ images }) {
  return (
    <Carousel
      showArrows
      infiniteLoop={images.length > 1}
      centerMode
      centerSlidePercentage={60}
      showStatus={false}
      showIndicators={false}
      transitionTime={1000}
    >
      {images.map((imgSrc, i) => (
        <div key={i}>
          <img src={`/resources/projects/${imgSrc}`} />
        </div>
      ))}
    </Carousel>
  );
}
