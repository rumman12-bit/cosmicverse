import SectionHead from "./SectionHead"
import Jupiter from "../images/jj.png"
import Image from "next/image"

export default function Planet() {
    return (
        <section id="jupiter" className="planet ">
            {/* <div className="customOverlay absolute top-0 left-0 w-full h-full"></div> */}
            <div className="sm:container mx-auto">
                <div className="aboutWrapper w-11/12 m-auto">
                    <SectionHead Title="Planet Jupiter" subTitle="(The Gas Giant)" />

                    <div className="planetWrap">
                        <div className="planetFact glassEf p-8 sm:float-none md:float-none lg:float-left sm:w-full md:w-full lg:w-1/4">
                            <h1 className="multiColorTxt font-black text-3xl mb-12">Planet Jupiter</h1>
                            <span className="multiColorTxt font-black text-md">Diameter</span>
                            <h1 className="text-white text-3xl mb-7 qsfont">139,822 km</h1>
                            <span className="multiColorTxt font-black text-md">Distance from Sun</span>
                            <h1 className="text-white text-3xl mb-7 qsfont">778,500,000 km</h1>
                            <span className="multiColorTxt font-black text-md">Orbit Velocity</span>
                            <h1 className="text-white text-3xl mb-7 qsfont">169,200 km/h</h1>
                            <span className="multiColorTxt font-black text-md">Length of Year</span>
                            <h1 className="text-white text-3xl qsfont">11.86 Earth years</h1>
                        </div>

                        <div className="wrapImgTxt sm:block md:block lg:grid grid-cols-2">
                            <div className="planetImg">
                                <Image
                                    src={Jupiter}
                                    quality="100"
                                    alt="Picture of the author"
                                    className=" object-cover mx-auto rounded-2xl "
                                />
                            </div>

                            <div className="planetDesc">
                                <div className="glassEf p-4">
                                    <h1 className=" multiColorTxt  font-black"> <span>Jupiter: </span> The Gas Giant</h1><br />
                                    <p className="text-justify text-white">
                                        Jupiter, the largest planet in our solar system, commands attention with its immense size and captivating features. With a diameter of approximately 139,822 kilometers and an average distance from the Sun of 778.5 million kilometers, Jupiter is a gas giant composed mainly of hydrogen and helium. Its iconic Great Red Spot, a colossal storm, dominates its turbulent atmosphere, while swirling bands of clouds encircle the planet.<br /><br />

                                        Jupiter's rapid rotation completes a day in just 9.9 hours, contributing to its flattened shape and powerful magnetic field. This magnetic field interacts with charged particles in the solar wind, creating intense radiation belts and dazzling auroras.<br /><br />

                                        Jupiter's diverse system of moons, including the four largest known as the Galilean moons, provides valuable insights into planetary formation and evolution. Europa, Ganymede, Callisto, and Io showcase a variety of geological features, from icy plains to volcanic eruptions, sparking intrigue and exploration. As a cornerstone of astrophysical research, Jupiter continues to unveil its secrets, shaping our understanding of planetary dynamics and the broader cosmos.


                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
