import SectionHead from "./SectionHead"
import Mars from "../images/mars.png"
import Image from "next/image"

export default function Planet() {
    return (
        <section id="mars" className="planet  ">
            {/* <div className="customOverlay absolute top-0 left-0 w-full h-full"></div> */}
            <div className="sm:container mx-auto">
                <div className="aboutWrapper w-11/12 m-auto">
                    <SectionHead Title="Planet Mars" subTitle="(The Mysterious Red Planet)" />

                    <div className="planetWrap">
                        <div className="planetFact glassEf p-8 sm:float-none md:float-none lg:float-left sm:w-full md:w-full lg:w-1/4">
                            <h1 className="multiColorTxt font-black text-3xl mb-12">Planet Mars</h1>
                            <span className="multiColorTxt font-black text-md">Diameter</span>
                            <h1 className="text-white text-3xl mb-7 qsfont">6,779 km</h1>
                            <span className="multiColorTxt font-black text-md">Distance from Sun</span>
                            <h1 className="text-white text-3xl mb-7 qsfont">227,900,000 km</h1>
                            <span className="multiColorTxt font-black text-md">Orbit Velocity</span>
                            <h1 className="text-white text-3xl mb-7 qsfont">86,640 km/h</h1>
                            <span className="multiColorTxt font-black text-md">Length of Year</span>
                            <h1 className="text-white text-3xl qsfont">687 Earth days</h1>
                        </div>

                        <div className="wrapImgTxt sm:block md:block lg:grid grid-cols-2">
                            <div className="planetImg">
                                <Image
                                    src={Mars}
                                    quality="100"
                                    alt="Picture of the author"
                                    className=" object-cover mx-auto rounded-2xl "
                                />
                            </div>

                            <div className="planetDesc">
                                <div className="glassEf p-4">
                                    <h1 className=" multiColorTxt  font-black"> <span>Mars: </span> The Mysterious Red Planet</h1><br />
                                    <p className="text-justify text-white">
                                        Mars, the fourth planet from the Sun, has long captivated astrophysicists with its intriguing features. With a diameter of 6,779 kilometers and an average distance from the Sun of 227.9 million kilometers, Mars possesses a thin atmosphere primarily composed of carbon dioxide. Its surface is marked by vast deserts, towering volcanoes, and deep valleys, hinting at a dynamic geological history.<br /><br />

                                        One Mars year lasts approximately 687 Earth days, while its rotational period, or day, is about 24.6 hours. The planet's orbit is elliptical, contributing to significant variations in temperature, with lows of -143 degrees Celsius (-225 degrees Fahrenheit) at the poles and highs of 35 degrees Celsius (95 degrees Fahrenheit) near the equator.<br /><br />

                                        Mars' reddish hue stems from iron oxide, or rust, covering its surface. Recent missions have unveiled evidence of ancient water flows, sparking theories about the planet's potential to host life or sustain future human colonies. Understanding Mars' geology, climate, and potential habitability remains a central focus of astrophysical research, driving ongoing exploration and missions to unravel the mysteries of the Red Planet.


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
