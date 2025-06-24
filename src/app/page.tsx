import { About } from "@/_components/about";
import { Art } from "@/_components/art";
import { Cocktails } from "@/_components/cocktails";
import { Footer } from "@/_components/footer";
import { Hero } from "@/_components/hero";
import { Menu } from "@/_components/menu";
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
      <Art/>
      <Menu/>
      <Footer/>
    </main>
  );
}
