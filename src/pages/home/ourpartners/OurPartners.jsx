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
import ShemuLogo from "../../../assets/partners/SHEMLOGO.jpg"
import PepsicoLogo from "../../../assets/partners/PEPSICOLogo.jpg"
import Nedamco from "../../../assets/partners/LOGO-Nedamco-Africa-ZWART.png"
import DagLogo from "../../../assets/partners/dagLogo.jpg"
import CBELogo from "../../../assets/partners/CBELogo.jpg"
import EtioTelecomLogo from "../../../assets/partners/EthioTelecom.jpg"
import AwashBanklogo from "../../../assets/partners/AwashLogo.jpg"

const partners = [
  {name:"Pepsico",logo:PepsicoLogo},
   { name: "Shemu", logo: ShemuLogo },
  { name: "Nedamco Africa", logo: Nedamco },
  {name:"cbe",logo:CBELogo},
  {name:"ethioTelecom",logo:EtioTelecomLogo},
  {name:"awashBank",logo:AwashBanklogo},
 
  
  {name:"DagEngineering",logo:DagLogo},
  

   
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
                
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-20 w-auto object-contain hover:scale-105 transition-transform duration-300"
                   
                  />
                
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
