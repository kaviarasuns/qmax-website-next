"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CaseStudyCarouselProps {
  images: string[];
  title: string;
}

export function CaseStudyCarousel({ images, title }: CaseStudyCarouselProps) {
  return (
    <Carousel className="w-full max-w-6xl mx-auto bg-red-50">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className="basis-1/1" // Show one image at a time
          >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img
                    src={image}
                    alt={`${title} - image ${index + 1}`}
                    className="object-contain w-full h-full"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
