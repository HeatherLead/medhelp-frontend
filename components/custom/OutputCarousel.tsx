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
import { Button } from "../ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogTitle,
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogFooter,
  DialogDescription,
} from "../ui/dialog";

interface MedicineProps {
  _id: string;
  "Medicine Name": string;
  Composition: string;
  Uses: string;
  Side_effects: string;
  "Image URL": string;
  Manufacturer: string;
  "Excellent Review %": number;
  "Average Review %": number;
  "Poor Review %": number;
}
const OutputCarousel = ({ medicines }: { medicines: MedicineProps[] }) => {
  console.log("Received Medicines Data:", medicines);

  return (
    <div className="w-[80%]">
      <Carousel>
        <CarouselContent>
          {medicines.map((medicine) => {
            return (
              <CarouselItem key={medicine._id}>
                <Card className=" flex gap-4 p-4 items-center">
                  <Image
                    className="w-1/3 h-full aspect-square rounded-lg border-2 border-gray-200 object-cover"
                    src={medicine["Image URL"]}
                    alt={medicine["Medicine Name"]}
                    width={200}
                    height={200}
                  />

                  <div className="h-full w-2/3 flex flex-col gap-4">
                    <CardContent>
                      <ItemValueContainer
                        label="Medicine Name"
                        value={medicine["Medicine Name"]}
                      />
                      <ItemValueContainer
                        label="Composition"
                        value={medicine["Composition"]}
                      />
                      <ItemValueContainer
                        label="Uses"
                        value={medicine["Uses"]}
                      />
                      <ItemValueContainer
                        label="Side Effects"
                        value={medicine["Side_effects"]}
                      />
                    </CardContent>
                    <div className=" flex gap-5 justify-end ">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant={"secondary"} className="w-fit">
                            Open Review Chart
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Medicine Analysis</DialogTitle>
                          </DialogHeader>
                          <div className="flex items-center w-full gap-2">
                            <div className="">
                              <PieChart
                                labels={[
                                  "Excellent Review",
                                  "Average Review",
                                  "Poor Review",
                                ]}
                                data={[
                                  Number(medicine["Excellent Review %"]) || 0,
                                  Number(medicine["Average Review %"]) || 0,
                                  Number(medicine["Poor Review %"]) || 0,
                                ]}
                                pieChartLabel="Review Distribution"
                              />
                            </div>
                            <div>
                              {(() => {
                                const excellent =
                                  Number(medicine["Excellent Review %"]) || 0;
                                const average =
                                  Number(medicine["Average Review %"]) || 0;
                                const poor =
                                  Number(medicine["Poor Review %"]) || 0;
                                const positiveReview = excellent + average;

                                if (positiveReview >= 80) {
                                  return (
                                    <h1 className="text-green-600 font-bold">
                                      ✅ Highly Recommended! Most users had a
                                      great experience with this medicine.
                                    </h1>
                                  );
                                } else if (positiveReview >= 60) {
                                  return (
                                    <h1 className="text-yellow-600 font-bold">
                                      ⚠️ Good Choice. Works well for many, but
                                      results may vary.
                                    </h1>
                                  );
                                } else {
                                  return (
                                    <h1 className="text-red-600 font-bold">
                                      ❌ Not Recommended. Many users reported
                                      poor results or side effects.
                                    </h1>
                                  );
                                }
                              })()}
                            </div>
                          </div>

                          <DialogFooter>
                            <DialogClose asChild>
                              <Button>Back</Button>
                            </DialogClose>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                      <Button className=" w-fit">Buy Now</Button>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default OutputCarousel;
