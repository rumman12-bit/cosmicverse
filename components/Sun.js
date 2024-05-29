import SectionHead from "./SectionHead"
import test from "../images/vv.png"
import Image from "next/image"

export default function Planet() {
    return (
        <section id="sun" className="planet ">
            {/* <div className="customOverlay absolute top-0 left-0 w-full h-full"></div> */}
            <div className="sm:container mx-auto">
                <div className="aboutWrapper w-11/12 m-auto">
                    <SectionHead Title="The Star Sun" subTitle="(The Star of Our Solar System)" />

                    <div className="planetWrap">
                        <div className="planetFact glassEf p-8 sm:float-none md:float-none lg:float-left sm:w-full md:w-full lg:w-1/4">
                            <h1 className="multiColorTxt font-black text-3xl mb-12">Star Sun</h1>
                            <span className="multiColorTxt font-black text-md">Diameter</span>
                            <h1 className="text-white text-3xl mb-7 qsfont">1,390,000 km</h1>
                            <span className="multiColorTxt font-black text-md">Distance from Sun</span>
                            <h1 className="text-white text-3xl mb-7 qsfont">00,000,000 km</h1>
                            <span className="multiColorTxt font-black text-md">Rotational Velocity</span>
                            <h1 className="text-white text-3xl mb-7 qsfont">7,189.2 km/h</h1>
                            <span className="multiColorTxt font-black text-md">Length of Year</span>
                            <h1 className="text-white text-3xl qsfont">(N/A)</h1>
                        </div>

                        <div className="wrapImgTxt sm:block md:block lg:grid grid-cols-2">
                            <div className="planetImg">
                                <Image
                                    src={test}
                                    quality="100"
                                    alt="Picture of the author"
                                    className=" object-cover mx-auto rounded-2xl "
                                />
                            </div>

                            <div className="planetDesc">
                                <div className="glassEf p-4">
                                    <h1 className=" multiColorTxt  font-black"> <span>Sun: </span> The Star of Our Solar System</h1><br />
                                    <p className="text-justify text-white">

                                        The Sun, our radiant star, holds a paramount role in the cosmos. With a diameter of about 1.39 million kilometers, it dwarfs the planets and comprises 99.8% of the solar system's mass. Fueled by nuclear fusion, the Sun's core reaches temperatures exceeding 15 million degrees Celsius. <br /> <br />

                                        Its surface, the photosphere, emits light and heat, with temperatures averaging 5,500 degrees Celsius. <br/>
                                        <br />The Sun's magnetic activity generates phenomena like sunspots, solar flares, and coronal mass ejections, impacting space weather and terrestrial environments.

                                        <br /><br /> Through ongoing research and observation, astrophysicists unravel the Sun's mysteries, deepening our understanding of stellar evolution and the fundamental forces shaping the universe.


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
