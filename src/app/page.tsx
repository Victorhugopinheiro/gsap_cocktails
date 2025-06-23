import { About } from "@/_components/about";
import { Cocktails } from "@/_components/cocktails";
import { Hero } from "@/_components/hero";
import { Navbar } from "@/_components/navBar";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Cocktails/>
      <About/>
    </main>
  );
}
