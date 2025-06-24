"use client"

import Image from "next/image"
import leftLeaf from "../../public/images/footer-left-leaf.png"
import rightLeaf from "../../public/images/footer-right-leaf.png"
import { openingHours, socials } from "../../constant"
import Link from "next/link"
import { SplitText } from "gsap/all"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"


export function Footer() {


    useGSAP(() => {
        const splitWord = SplitText.create("#contact h2", { type: "words" })

        const footerTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#contact",
                start: "top center",

            },
            ease: "power1.inOut"
        })


            .from(splitWord.words, {
                opacity: 0, yPercent: 100, stagger: 0.02
            })
            .from("#contact h3, #contact p", {
                opacity: 0,
                yPercent: 100,
                stagger: 0.02
            })
            .to("#f-right-leaf", {
                y: -50,
                duration: 1,
                ease: "power1.inOut"
            }).to("#f-left-leaf", {
                y: -50,
                duration: 1,
                ease: "power1.inOut"
            }, '<')
    }, [])

    return (
        <footer id="contact">
            <Image src={rightLeaf} alt="right-leaf" id="f-right-leaf" />
            <Image src={leftLeaf} alt="left-leaf" id="f-left-leaf" />

            <div className="content">
                <h2>Where to find us</h2>
                <div>
                    <h3>Visit our bar</h3>
                    <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
                </div>

                <div>
                    <h3>Contact Us</h3>
                    <p>(555) 987-6543</p>
                    <p>hello@jsmcocktail.com</p>
                </div>

                <div>
                    <p>Open Every Day</p>
                    {openingHours.map((time, index) => (
                        <p key={index}>
                            {time.day} : {time.time}
                        </p>
                    ))}
                </div>


                <div>
                    <h3>Socials</h3>


                    <div className="flex-center gap-5">
                        {socials.map((social, index) => (
                            <Link key={index} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                                <Image width={24} height={24} src={social.icon} alt="Icon" />

                            </Link>
                        ))}

                    </div>
                </div>
            </div>
        </footer>
    )
}