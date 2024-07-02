"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import img1 from "../../Assets/img-1.png";
import img2 from "../../Assets/img-2.png";
import img3 from "../../Assets/img-3.png";
import img4 from "../../Assets/img-4.png";
import img5 from "../../Assets/img-5.png";

const ProductCarousel = () => {
  const carouselData = [img1, img2, img3, img4, img5];
  return (
    <div className=" min-h-80 max-h-80">
      <h2 className="text-2xl font-bold py-3 px-5 bg-gradient-to-br from-indigo-500 to-pink-500 text-transparent bg-clip-text ">
        Trending Now{" "}
      </h2>
      <Carousel
        className="w-full max-w-xs"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {carouselData.map((image, index) => (
            <CarouselItem key={index}>
              <div className="min-h-52 h-full  max-h-80 rounded-md  flex justify-center">
                <Image
                  src={image}
                  alt="image"
                  priority
                  quality={100}
                  className="w-full min-h-52 max-h-80 h-full object-cover rounded-md"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
