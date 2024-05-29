import SectionHead from "./SectionHead"
import StarImg1 from "../images/star1.jpg"
import StarImg2 from "../images/star2.jpg"
import StarImg3 from "../images/star3.jpg"
import Image from "next/image"



export default function Star() {
    return (
        <section id="star" className="relative">
            <div className="customOverlay absolute top-0 left-0 w-full h-full"></div>
            <div className="sm:container mx-auto">
                <div className="aboutWrapper w-11/12 m-auto">
                    <SectionHead Title="Inauguration of Stars" subTitle="(The Genesis of Stellar Evolution)" />

                    <div className="bigWrap grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">

                        <div className="bigbImg sm:ml-0 md:ml-0 lg:mr-12">
                           
                            <div className="bbimg2 p-2 m-2 rounded-2xl shadow">
                                <Image
                                    src={StarImg1}
                                    quality="100"
                                    alt="Picture of the author"
                                    className=" object-cover mx-auto rounded-2xl"
                                />
                            </div>
                            <div className="new flex  justify-between">
                                <div className="bbimg1 p-2 m-2 rounded-2xl shadow">
                                    <Image
                                        src={StarImg3}
                                        quality="100"
                                        alt="Picture of the author"
                                        className="csStarImg object-cover mx-auto rounded-2xl"
                                    />
                                </div>
                                <div className="bbimg1 p-2 m-2 rounded-2xl shadow">
                                    <Image
                                        src={StarImg2}
                                        quality="100"
                                        alt="Picture of the author"
                                        className="bbimg1 object-cover mx-auto rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="glassEf p-4">
                            <h1 className="multiColorTxt  font-black"> <span>Time Range:</span> 400 to 500 million years after the Big Bang.</h1><br />
                            <p className="text-justify  text-white">

                                Approximately 400 to 500 million years post-Big Bang, the cosmos experienced a profound transition: the advent of the first stars, signifying the onset of stellar genesis. Within dense regions of primordial gas, gravity commenced its inexorable pull, orchestrating the collapse of matter into luminous entities known as <span className="multiColorTxt font-black"> Population III stars. </span><br /><br />

                                These primordial stars, predominantly composed of hydrogen and helium, blazed with unparalleled luminosity, their nuclear fusion furnaces illuminating the cosmos. Yet, their significance transcended mere brilliance; these cosmic crucibles also acted as alchemical factories, synthesizing heavier elements like carbon, oxygen, and iron—essential components for the formation of planets and the emergence of life.<br /><br />

                                The formation of the first stars instigated monumental transformations in the universe. Their intense radiation permeated the surrounding gas, triggering the epochal event of cosmic reionization, transforming the universe from an opaque, neutral state to one bathed in radiant light. Furthermore, their dramatic demise, in spectacular supernova explosions, dispersed these newly formed elements across the cosmos, enriching future generations of stars, galaxies, and planetary systems.<br /><br />

                                The enduring legacy of the first stars reverberates throughout the cosmos, shaping the evolution of galaxies, the formation of planetary systems, and the cosmic conditions conducive to life. Their emergence serves as a profound testament to the intricate interplay of gravity, nuclear physics, and cosmic evolution that has sculpted the vast and awe-inspiring tapestry of the universe.


                            </p>
                        </div>

                        

                    </div>

                </div>

            </div>
        </section>
    )
}
