"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

const partners = [
  { name: "Partner 1", logo: "https://placehold.co/100x50/E2E8F0/4A5568?text=Partner1", link: "https://partner1.com" },
  { name: "Partner 2", logo: "https://placehold.co/100x50/E2E8F0/4A5568?text=Partner2", link: "https://partner2.com" },
  { name: "Partner 3", logo: "https://placehold.co/100x50/E2E8F0/4A5568?text=Partner3", link: "https://partner3.com" },
  { name: "Partner 4", logo: "https://placehold.co/100x50/E2E8F0/4A5568?text=Partner4", link: "https://partner4.com" },
  { name: "Partner 5", logo: "https://placehold.co/100x50/E2E8F0/4A5568?text=Partner5", link: "https://partner5.com" },
  { name: "Partner 6", logo: "https://placehold.co/100x50/E2E8F0/4A5568?text=Partner6", link: "https://partner6.com" },
];

export default function OurPartners() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-orange-600 mb-8">Our Partners</h2>

      <Carousel
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 300000, stopOnInteraction: false })]}
        className="w-full max-w-6xl mx-auto px-4"
      >
        <CarouselContent className="gap-4 mx-4">
          {partners.map((partner, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 flex justify-center items-center"
            >
              <div className="bg-white p-4 rounded-lg shadow-sm w-full h-full flex justify-center items-center">
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-20 w-auto object-contain hover:scale-105 transition-transform duration-300"
                   
                  />
                </a>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute  left-2 top-1/2 -translate-y-1/2 z-10 text-orange-600 font-bold">
        </CarouselPrevious>
        <CarouselNext className="absolute  right-2 top-1/2 -translate-y-1/2 z-10 text-orange-600 ">
        </CarouselNext>
      </Carousel>
    </section>
  );
}
