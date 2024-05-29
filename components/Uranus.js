import SectionHead from "./SectionHead"
import Uranus from "../images/abcd.png"

import Image from "next/image"

export default function Planet() {
    return (
        <section id="uranus" className="">
            {/* <div className="customOverlay absolute top-0 left-0 w-full h-full"></div> */}
            <div className="sm:container mx-auto">
                <div className="aboutWrapper w-11/12 m-auto">
                    <SectionHead Title="Planet Uranus" subTitle="(The Sideways Planet)" />

                    <div className="planetWrap">
                        <div className="planetFact glassEf p-8 sm:float-none md:float-none lg:float-left sm:w-full md:w-full lg:w-1/4">
                            <h1 className="multiColorTxt font-black text-3xl mb-12">Planet Uranus</h1>
                            <span className="multiColorTxt font-black text-md">Diameter</span>
                            <h1 className="text-white text-3xl mb-7 qsfont">50,724 km</h1>
                            <span className="multiColorTxt font-black text-md">Distance from Sun</span>
                            <h1 className="text-white text-3xl mb-7 qsfont">2,900,000,000 km</h1>
                            <span className="multiColorTxt font-black text-md">Orbit Velocity</span>
                            <h1 className="text-white text-3xl mb-7 qsfont">24,480 km/h</h1>
                            <span className="multiColorTxt font-black text-md">Length of Year</span>
                            <h1 className="text-white text-3xl qsfont">84 Earth years</h1>
                        </div>

                        <div className="wrapImgTxt sm:block md:block lg:grid grid-cols-2">
                            <div className="planetImg">
                                <Image
                                    src={Uranus}
                                    quality="100"
                                    alt="Picture of the author"
                                    className=" object-cover mx-auto rounded-2xl "
                                />
                            </div>

                            <div className="planetDesc">
                                <div className="glassEf p-4">
                                    <h1 className=" multiColorTxt  font-black"> <span>Uranus: </span> The Sideways Planet</h1><br />
                                    <p className="text-justify text-white">
                                        Nestled beyond the realms of Saturn lies Uranus, the seventh planet from the Sun. A behemoth gas giant, it possesses a diameter of approximately 50,724 kilometers, making it the third largest planet in our celestial neighborhood. What sets Uranus apart is its peculiar axial tilt, causing it to rotate almost perpendicular to its orbit, resulting in extreme seasonal variations.<br /><br />

                                        Composed primarily of hydrogen and helium, Uranus also hosts icy compounds such as water, methane, and ammonia in its atmosphere. Despite its immense size, its distance from the Sun leads to frigid temperatures, averaging around -224 degrees Celsius (-371 degrees Fahrenheit).<br /><br />

                                        This icy giant completes a single orbit around the Sun in approximately 84 Earth years, offering astronomers a unique opportunity to study its enigmatic atmosphere and intriguing magnetic field. Uranus remains a captivating subject of study, offering insights into the dynamics and evolution of gas giants in our solar system.


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
