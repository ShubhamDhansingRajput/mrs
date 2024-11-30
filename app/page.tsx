import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LampDemo } from "@/components/AsertinityUI/LampDemo";
import { InfiniteMovingCardsDemo } from "@/components/AsertinityUI/InfiniteMovingCardsDemo";
import Service from "@/components/services/Service";
 

export default function Home() {
  return (
   <> 
<div className="  w-full">
<Header/>
    <Banner/>
      <InfiniteMovingCardsDemo/>
 <Service/>
 
 
</div>
   </>
  );
}
