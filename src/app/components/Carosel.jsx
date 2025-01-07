import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { site_data } from "@/lib/site_data";

export function CarouselDemo() {
  const {
    testimonial: { clientInfo },
  } = site_data;

  return (
    <Carousel className=" w-full mx-auto my-6  py-16 px-4 bg-white rounded-xl  mb-4">
      <CarouselContent className="w-[500px] ">
        {clientInfo.map((item, i) => {
          return (
            <CarouselItem key={i} c>
              <div className="p-1 ">
                <Card className="p-1 border-none rounded-none">
                  <CardContent className="  p-4   md:m-2 my-2 text-gray-500  rounded-md text-center mx-auto">
                    <Image
                      src={item.client_image}
                      width={70}
                      height={50}
                      className="mx-auto mb-3"
                      alt="client image"
                    ></Image>
                    <p className="text-yellow-400  text-4xl">
                      {item.ratig == "5"
                        ? "*****"
                        : item.ratig === 4
                        ? "****"
                        : item.ratig == 3
                        ? "***"
                        : item.ratig == 3
                        ? "****"
                        : "**"}
                    </p>
                    <h1 className="capitalize">{item.message}</h1>
                    <h1 className="text-lg font-semibold py-2 capitalize text-[#00bc91]">
                      {item.name}
                    </h1>
                    <h1>{item.status}</h1>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
