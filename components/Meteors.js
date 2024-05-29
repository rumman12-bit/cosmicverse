import SectionHead from "./SectionHead"
import Comet from "../images/comet.jpg"
import Ast from "../images/asteroide.jpg"
import Sh from "../images/un.jpg"
import Image from "next/image"



export default function Star() {
    return (
        <section id="meteors" className="relative">
            <div className="customOverlay absolute top-0 left-0 w-full h-full"></div>
            <div className="sm:container mx-auto">
                <div className="aboutWrapper w-11/12 m-auto">
                    <SectionHead Title="Tracing the Celestial Path" subTitle="(Asteroids, Meteors & Comets)" />

                    <div className="bigWrap grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">

                        <div className="bigbImg sm:ml-0 md:ml-0 lg:mr-12">

                            <div className="bbimg2 p-2 m-2 rounded-2xl shadow">
                                <Image
                                    src={Comet}
                                    quality="100"
                                    alt="Picture of the author"
                                    className=" object-cover mx-auto rounded-2xl"
                                />
                            </div>
                            <div className="new flex  justify-between">
                                <div className="bbimg1 p-2 m-2 rounded-2xl shadow">
                                    <Image
                                        src={Ast}
                                        quality="100"
                                        alt="Picture of the author"
                                        className="csStarImg object-cover mx-auto rounded-2xl"
                                    />
                                </div>
                                <div className="bbimg1 p-2 m-2 rounded-2xl shadow">
                                    <Image
                                        src={Sh}
                                        quality="100"
                                        alt="Picture of the author"
                                        className="bbimg1 object-cover mx-auto rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="glassEf p-4">
                            <h1 className="multiColorTxt text-center font-black"> <span>Tracing the Celestial Path :</span> Asteroids, Meteors & Comets</h1><br />
                            <p className="text-justify  text-white">

                                Asteroids, Meteors, and Comets are small celestial bodies that populate our solar system, each with its own unique characteristics and origins. Asteroids are rocky remnants from the early solar system, primarily found in the asteroid belt between Mars and Jupiter. Comets, on the other hand, are icy bodies that originate from the outer regions of the solar system, often characterized by their tails of gas and dust when they approach the Sun. Meteors are asteroids or comet fragments that enter Earth's atmosphere, creating streaks of light known as shooting stars.<br /><br />

                                Asteroids vary in size, with some reaching hundreds of kilometers across, while others are just a few meters in diameter. Notable examples include Ceres, the largest asteroid and dwarf planet, and Vesta, one of the largest asteroids in the asteroid belt.<br /><br />

                                Comets typically consist of ice, dust, and organic compounds, and they develop tails when heated by the Sun, releasing gas and dust particles into space. Famous comets like Halley's Comet have periodic orbits, returning to the inner solar system at regular intervals.<br /><br />
                                
                                Meteors, also known as shooting stars, are often fragments of asteroids or comets that burn up upon entering Earth's atmosphere due to friction. Meteor showers occur when Earth passes through the debris trails left by comets, resulting in an increased number of meteors visible in the night sky.<br /><br />

                                Studying these small bodies provides insights into the early solar system's formation and evolution and helps scientists understand the potential hazards they pose to Earth and other celestial bodies.

                            </p>
                        </div>



                    </div>

                </div>

            </div>
        </section>
    )
}
