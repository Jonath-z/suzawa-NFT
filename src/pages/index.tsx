import Hero from "@/components/Hero";
import Nfts from "@/components/Nfts";
import WhoWeAre from "@/components/WhoWeAre";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <WhoWeAre />
      <Nfts />
    </main>
  );
}
