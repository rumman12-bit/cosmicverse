import SectionHead from "./SectionHead"
import Moon from "../images/moon.png"
import Image from "next/image"

export default function Planet() {
    return (
        <section id="moon" className="planet  ">
            {/* <div className="customOverlay absolute top-0 left-0 w-full h-full"></div> */}
            <div className="sm:container mx-auto">
                <div className="aboutWrapper w-11/12 m-auto">
                    <SectionHead Title="The Moon" subTitle="(Earth's Celestial Companion and Gateway to the Cosmos)" />

                    <div className="planetWrap">
                        <div className="planetFact glassEf p-8 sm:float-none md:float-none lg:float-left sm:w-full md:w-full lg:w-1/4">
                            <h1 className="multiColorTxt font-black text-3xl mb-12">The Moon</h1>
                            <span className="multiColorTxt font-black text-md">Diameter</span>
                            <h1 className="text-white text-3xl mb-7 qsfont">3,474 km</h1>
                            <span className="multiColorTxt font-black text-md">Distance from Earth</span>
                            <h1 className="text-white text-3xl mb-7 qsfont">384,400 km</h1>
                            <span className="multiColorTxt font-black text-md">Orbit Velocity</span>
                            <h1 className="text-white text-3xl mb-7 qsfont">3,680 km/h</h1>
                            <span className="multiColorTxt font-black text-md">Length of Year</span>
                            <h1 className="text-white text-3xl qsfont">27.3 Earth days</h1>
                        </div>

                        <div className="wrapImgTxt sm:block md:block lg:grid grid-cols-2">
                            <div className="planetImg">
                                <Image
                                    src={Moon}
                                    quality="100"
                                    alt="Picture of the author"
                                    className=" object-cover mx-auto rounded-2xl "
                                />
                            </div>

                            <div className="planetDesc">
                                <div className="glassEf p-4">
                                    <h1 className=" multiColorTxt  font-black"> <span>The Moon: </span> Earth's Celestial Companion and Gateway to the Cosmos</h1><br />
                                    <p className="text-justify text-white">
                                        The Moon, Earth's only natural satellite, orbits at an average distance of about 384,400 kilometers from our planet. With a diameter of approximately 3,474 kilometers, it's much smaller than Earth but plays a significant role in our planet's dynamics. Its gravitational pull influences the ocean tides and affects Earth's axial tilt, contributing to climate stability.<br /><br />

                                        The Moon's surface is marked by impact craters, lava plains, and rugged mountains, providing a window into the history of the solar system. It completes a full orbit around Earth in approximately 27.3 days, known as a sidereal month. Interestingly, due to its synchronous rotation, the same side of the Moon always faces Earth, creating the phenomena of the near side and far side.<br /><br />

                                        Exploration of the Moon, including manned missions like Apollo and robotic probes, has yielded invaluable scientific data. Understanding lunar geology, its magnetic field, and potential resources not only sheds light on the Moon's formation but also informs future space exploration endeavors, including crewed missions to Mars and beyond.


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
