"use client"
import Image from "next/image"
import cocktailLeftLeaf from "../../public/images/cocktail-left-leaf.png"
import cocktailRightLeaf from "../../public/images/cocktail-right-leaf.png"
import { cocktailLists, mockTailLists } from "../../constant"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"


export function Cocktails() {


    useGSAP(() => {

        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#cocktails",
                start: "top 30%",
                end: "bottom 80%",
                scrub: true
            }
        })

            .from("#c-left-leaf", {
                x: -100, y: 100
            })

            .from("#c-right-leaf", {
                x: 100, y: 100
            })


    }, [])


    return (
        <section id="cocktails" className="noisy">
            <Image src={cocktailLeftLeaf} alt="Cocktail-left" id="c-left-leaf" />
            <Image src={cocktailRightLeaf} alt="Cocktail-left" id="c-right-leaf" />


            <div className="list">
                <div className="popular">
                    <h2>Most populars cocktails:</h2>

                    <ul>
                        {cocktailLists.map((drink) => (
                            <li key={drink.name}>
                                <div className="md:me-28">
                                    <h3>{drink.name}</h3>
                                    <p>{drink.country} | {drink.detail}</p>
                                </div>
                                <span>- {drink.price}</span>
                            </li>
                        ))}
                    </ul>

                </div>


                <div className="loved">
                    <h2>Most populars mocktails:</h2>

                    <ul>
                        {mockTailLists.map((drink) => (
                            <li key={drink.name}>
                                <div className="me-28">
                                    <h3>{drink.name}</h3>
                                    <p>{drink.country} | {drink.detail}</p>
                                </div>
                                <span>- {drink.price}</span>
                            </li>
                        ))}
                    </ul>

                </div>

            </div>
        </section>
    )
}