"use client"
import Image from "next/image";
import leftLeaf from "../../public/images/slider-left-leaf.png"
import rightLeaf from "../../public/images/slider-right-leaf.png"
import { sliderLists } from "../../constant";
import { useRef, useState } from "react";
import leftArrow from "../../public/images/left-arrow.png"
import rightArrow from "../../public/images/right-arrow.png"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


export function Menu() {

    const divRef = useRef<HTMLDivElement | null>(null)

    const [currentIndex, setCurrentIndex] = useState(0)

    const totalCocktails = sliderLists.length

    function changeIndex(index: number) {
        const newIndex = (index + totalCocktails) % totalCocktails




        setCurrentIndex(newIndex)
    }

    const getCocktail = (cocktailIndex: number) => {
        return (
            sliderLists[(cocktailIndex + currentIndex + totalCocktails) % totalCocktails]
        )
    }

    const prevCocktail = getCocktail(currentIndex - 1)
    const actualCocktail = getCocktail(currentIndex)
    const nextCocktail = getCocktail(currentIndex + 1)


    useGSAP(() => {

        gsap.fromTo("#title", {

            opacity: 0
        }, {
            opacity: 1,
            duration: 1
        }),
            gsap.fromTo(".cocktail img", {
                opacity: 0,
                x: -100
            }, {
                opacity: 1,
                x: 100,
                duration: 1,
                ease: "power1.inOut"
            }),
            gsap.fromTo(".details h2", {
                opacity: 0,
                y: 100
            }, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power1.inOut"
            }),
            gsap.fromTo(".details p", {
                opacity: 0,
                y: 100
            }, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power1.inOut"
            })

    }, [currentIndex])



    return (
        <section id="menu" aria-labelledby="menu-heading">
            <Image src={leftLeaf} alt="left-leaf" id="m-left-leaf" />
            <Image src={rightLeaf} alt="right-leaf" id="m-right-leaf" />


            <h2 id="menu-heading" className="sr-only" >
                Cocktail Menu
            </h2>

            <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
                {sliderLists.map((cocktail, index) => {
                    const isActive = index === currentIndex;


                    return (
                        <button onClick={() => changeIndex(index)} key={cocktail.id} className={`${isActive ? 'text-white border-white' : ' text-white/50 border-white/50'}`}>
                            {cocktail.name}
                        </button>
                    )
                })}

            </nav>


            <div className="content">

                <div className="arrows">
                    <button onClick={() => changeIndex(currentIndex - 1)}>
                        <span>{prevCocktail.name}</span>
                        <Image src={rightArrow} alt="left-arrow" aria-hidden="true" />
                    </button>

                    <button onClick={() => changeIndex(currentIndex + 1)}>
                        <span>{nextCocktail.name}</span>
                        <Image src={leftArrow} alt="left-arrow" aria-hidden="true" />
                    </button>
                </div>



                <div className="cocktail">
                    <Image width={400} height={400} src={actualCocktail.image} alt="cocktail-image" className=" object-contain mr-48" />
                </div>


                <div className="recipe">

                    <div ref={divRef} className="info">
                        <p>Receip for: </p>
                        <p id="title">{actualCocktail.name}</p>
                    </div>

                    <div className="details">
                        <h2>{actualCocktail.title}</h2>
                        <p>{actualCocktail.description}</p>
                    </div>

                </div>
            </div>
        </section>
    )
}