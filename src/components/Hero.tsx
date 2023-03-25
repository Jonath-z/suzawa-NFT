import { useParallax } from "react-scroll-parallax";

export default function Hero() {
  const frog = useParallax<HTMLDivElement>({
    scale: [1, 0, "easeInQuad"],
    opacity: [2, 0, "easeIn"],
  });

  const textPrallax = useParallax<HTMLDivElement>({
    scale: [0, 3, "easeIn"],
    opacity: [2, 0, "easeInOutQuad"],
    speed: 200,
  });

  return (
    <div ref={frog.ref}>
      <div className="video-background">
        <div className="video-foreground">
          <iframe
            allow="auto-play"
            title="bg-video"
            src="https://player.vimeo.com/video/792123858?h=263124d14e&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&title=0&byline=0&muted=1&controls=0&transparent=0&loop=1"
          />
        </div>
      </div>

      <div
        ref={textPrallax.ref}
        className="flex flex-col h-screen justify-center items-center bg-black/25"
      >
        <h1 className="font-glich text-[10rem] text-white">SUZAWA</h1>
        <h2 className="text-xl text-center text-white">
          Presented By SAFE-HOUSE
        </h2>
      </div>
    </div>
  );
}
