"use client"

import Link from "next/link";
import { navLinks } from "../../constant/index"
import Image from "next/image";
import logo from "../../public/images/logo.png"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Navbar() {

    useGSAP(() => {


        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: "bottom top"
            }
        })


        navTween.fromTo("nav", {
            backgroundColor: "transparent"
        }, {
            backgroundColor: "#00000050",
            backgroundFilter: 'blur(10px)',
            duration: 1,
            ease: "power1.inOut"
        })



    }, [])


    return (
        <nav className="container p-2">
            <div className="">
                <Link className="flex items-center gap-2" href={"#home"}>
                    <Image src={logo} alt="Logo site" />
                    <p className="text-2xl">Velvet pour</p>
                </Link>

                <ul className="flex gap-2">
                    {navLinks.map((item) => (
                        <li key={item.id}>
                            <a href={`${item.id}`}>{item.title}</a>
                        </li>
                    ))}
                </ul>

            </div>
        </nav>
    )
}

