import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Sliders = ({ sliderList }) => {
  return (
    <Carousel>
      <CarouselContent>
        {sliderList.map((item, index) => {
          return <CarouselItem className='rounded-2xl '> 
            <img
              key={index}
              src={`http://localhost:1337${item.image[0].formats.large.url}`}
              alt="Slider Image"
              className="w-full h-[200px] md:h-[400px] object-cover rounded-2xl"
            />
           
          </CarouselItem>;
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Sliders;
