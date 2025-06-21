import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function Home() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <h1 className="text-3xl text-indigo-300">Hello, GSAP!</h1>
    </div>
  );
}
