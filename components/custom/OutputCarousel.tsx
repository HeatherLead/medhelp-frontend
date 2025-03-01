import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import ItemValueContainer from "./ItemValueContainer";
import PieChart from "./PieChart";
const OutputCarousel = () => {
  return (
    <div className="w-[80%] ">
      <Carousel className="">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card className="h-96 flex gap-2 p-2 items-center">
                <Image
                  className="w-1/3 h-full aspect-square rounded-lg border-2 border-gray-200"
                  src="/logo.svg"
                  alt="medicine"
                  width={376}
                  height={376}
                />
                <div className=" h-full w-full rounded-lg border-2 border-gray-200 p-4">
                  <ItemValueContainer
                    label="Medicine Name"
                    value="paracetamol"
                  />
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default OutputCarousel;
