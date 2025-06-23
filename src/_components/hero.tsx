"use client"
import Image from "next/image"
import leftLeaf from "../../public/images/hero-left-leaf.png"
import rightLeaf from "../../public/images/hero-right-leaf.png"
import { useGSAP } from "@gsap/react"
import { SplitText, ScrollTrigger } from "gsap/all"
import gsap from "gsap"
import { useEffect, useRef } from "react"
import { useMediaQuery } from "react-responsive"


/**
 * Hero component with GSAP animations
 * Features:
 * - Text animations using SplitText
 * - Leaf animations on scroll
 * - Video animations on scroll:
 *   - Scale, opacity, position and rotation changes
 *   - Play/pause based on scroll position
 *   - Playback rate control based on scroll progress
 */
export function Hero() {

    const videoRef = useRef<HTMLVideoElement | null>(null)

    const isMobile = useMediaQuery({ maxWidth: 767 })


    useGSAP(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger)
        const heroSplit = new SplitText('.title', { type: "chars, words" })


        const subTitleSplit = new SplitText(".subtitle", { type: "lines" })

        heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06
        })

        gsap.from(subTitleSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
            delay: 1
        })




        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        })
            .to('.right-leaf', { y: 200 }, 0)
            .to('.left-leaf', { y: -200 }, 0)


        const startValue = isMobile ? "top 50%" : "center 60%"

        const endValue = isMobile ? "120% top" : "bottom top"

        // Create a timeline for video animation on scroll
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "video",
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
            },
        });


        tl.to(videoRef.current, {
            currentTime: videoRef?.current?.duration,
        });


        // Animate video properties as user scrolls




    }, [])





    return (

        <>

            <section id="hero" className="noisy">
                <h1 className="title">MOJITO</h1>
                <Image src={leftLeaf} alt="left-leaf" className="left-leaf" />
                <Image src={rightLeaf} alt="right-leaf" className="right-leaf" />



                <div className="body">
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p>Cool. Crisp. Classic.</p>
                            <p className="subtitle">Sip the spirit <br /> of Summer</p>

                        </div>
                        <div className="view-cocktails">
                            <p className="subtitle">
                                Every cocktail on our menu is a blend of premium
                                ingredients, creative flair, and timeless recipes
                                — designed to delight your senses.
                            </p>
                            <a href="#cocktails">
                                View Cocktails
                            </a>
                        </div>

                    </div>
                </div>

            </section>

            <div className="video absolute inset-0">
                <video
                    ref={videoRef}
                    muted
                    playsInline

                    preload="auto"
                    src="/videos/output.mp4"
                />
            </div>
        </>

    )
}
