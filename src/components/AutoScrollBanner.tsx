import Image, { StaticImageData } from "next/image";
import { CSSProperties } from "react";

export default function AutoScrollBanner({
  images,
  speed = 5000,
}: {
  images: StaticImageData[];
  speed?: number;
}) {
  const sectionStyle: CSSProperties = {
    display: "flex",
    animation: `swipe ${speed}ms linear infinite backwards`,
  };

  return (
    <div className="relative w-full overflow-hidden h-full flex items-center">
      <div className="absolute flex">
        <section style={sectionStyle}>
          {images.map((image, index) => (
            <div
              className="relative w-[40rem] h-[40rem]"
              key={`collection_1-${index}`}
            >
              <Image src={image} alt="image" />
            </div>
          ))}
        </section>
        <section style={sectionStyle}>
          {images.map((image, index) => (
            <div
              className="relative w-[40rem] h-[40rem]"
              key={`collection_2-${index}`}
            >
              <Image src={image} alt="image" />
            </div>
          ))}
        </section>
        <section style={sectionStyle}>
          {images.map((image, index) => (
            <div
              className="relative w-[40rem] h-[40rem]"
              key={`collection_2-${index}`}
            >
              <Image src={image} alt="image" />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
