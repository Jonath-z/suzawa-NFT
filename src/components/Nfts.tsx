import nft_2 from "../../public/assets/Fnt.jpeg";
import nft_3 from "../../public/assets/nft-10.jpg";
import nft_4 from "../../public/assets/nft-4.jpg";
import nft_5 from "../../public/assets/nft-6.jpg";
import nft_6 from "../../public/assets/nft-9.jpg";
import AutoScrollBanner from "./AutoScrollBanner";
import { useParallax } from "react-scroll-parallax";

const collection = [nft_2, nft_3, nft_4, nft_5, nft_6];

export default function Nfts() {
  const { ref: nftContainerRef } = useParallax<HTMLDivElement>({
    translateX: [-200, 200],
    opacity: [0, 2],
  });

  return (
    <div ref={nftContainerRef} className="relative bg-black w-full h-screen">
      <h1 className="text-[10rem] text-white font-glich absolute z-20 left-0 top-10">
        What we do
      </h1>
      <AutoScrollBanner images={collection} speed={19000} />
    </div>
  );
}
