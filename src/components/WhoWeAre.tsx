import React from "react";
import { useParallax } from "react-scroll-parallax";
import homeSuzawa from "../../public/assets/home-suzawa.gif";
import Image from "next/image";
import Atropos from "atropos/react";

export default function WhoWeAre() {
  const { ref: whoWeAreImageRef } = useParallax<HTMLDivElement>({
    translateX: [-200, 200],
    // speed: 200,
  });

  const { ref: whoWeAreTextRef } = useParallax<HTMLDivElement>({
    opacity: [0, 5, "easeInCubic"],
  });

  return (
    <div className="bg-black w-full h-screen flex justify-between items-center overflow-hidden">
      <div className="text-xl text-white max-w-xl pl-20">
        <div>
          <h1 className="flex flex-col gap-20 font-bold font-glich relative">
            <span className="text-[10rem]">Who</span>
            <span className="text-[5rem]">we are</span>
          </h1>
        </div>
        <div ref={whoWeAreTextRef} className="mt-16">
          <p className="mt-5 leading-8">
            In the middle of rage and destruction through the world by viruses
            and corruption , all ancient monuments, artefacts, pyramids and
            palaces are restored by a misterious power called MASHISHI. Kings,
            emperor, warriors from greats ancient africans Kingdoms are alive
            and ready to guide their descendantes
          </p>
          <p className="mt-5 leading-8">
            Before being a collection of NFT, SURA ZA WAFALME is first of all an
            ideology (a mindset) where you and I are Kings, takes on a new
            identity. that of an ancient African king, emperor or warrior of
            your choice. Secondly historical and educational, our project aims
            to educate and teach the history of so many kingdoms and aspects of
            africa.
          </p>
        </div>
      </div>
      <div ref={whoWeAreImageRef} className="w-1/2 relative h-full">
        <Atropos
          className="h-full w-full"
          rotateXMax={1}
          rotateYMax={1}
          activeOffset={50}
          highlight={true}
        >
          <Image src={homeSuzawa} fill alt="egypt king" />
        </Atropos>
      </div>
    </div>
  );
}
