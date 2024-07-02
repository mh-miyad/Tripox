"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
const ProductTittle = () => {
  return (
    <div className="bg-white dark:bg-slate-950 text-center font-bold">
      <Carousel
        className="w-full max-w-xs"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <h2 className="text-2xl pb-3">Adidass {index + 1} </h2>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ProductTittle;
