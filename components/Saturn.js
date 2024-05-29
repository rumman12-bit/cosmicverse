import SectionHead from "./SectionHead"
import test from "../images/Saturn.png"
import Image from "next/image"

export default function Planet() {
    return (
        <section id="saturn" className="planet  ">
            {/* <div className="customOverlay absolute top-0 left-0 w-full h-full"></div> */}
            <div className="sm:container mx-auto">
                <div className="aboutWrapper w-11/12 m-auto">
                    <SectionHead Title="Planet Saturn" subTitle="(The Ringed Planet)" />

                    <div className="planetWrap">
                        <div className="planetFact glassEf p-8 sm:float-none md:float-none lg:float-left sm:w-full md:w-full lg:w-1/4">
                            <h1 className="multiColorTxt font-black text-3xl mb-12">Planet Saturn</h1>
                            <span className="multiColorTxt font-black text-md">Diameter</span>
                            <h1 className="text-white text-3xl mb-7 qsfont">120,536 km</h1>
                            <span className="multiColorTxt font-black text-md">Distance from Sun</span>
                            <h1 className="text-white text-3xl mb-7 qsfont">1,400,000,000 km</h1>
                            <span className="multiColorTxt font-black text-md">Orbit Velocity</span>
                            <h1 className="text-white text-3xl mb-7 qsfont">34,884 km/h</h1>
                            <span className="multiColorTxt font-black text-md">Length of Year</span>
                            <h1 className="text-white text-3xl">29.5 Earth years</h1>
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
                                    <h1 className=" multiColorTxt  font-black"> <span>Saturn: </span> The Ringed Planet</h1><br />
                                    <p className="text-justify text-white">
                                        Saturn, the sixth planet from the Sun, captivates astronomers with its enchanting rings and intriguing features. With a diameter of approximately 116,460 kilometers and an average distance from the Sun of 1.4 billion kilometers, Saturn is primarily composed of hydrogen and helium. Its atmosphere showcases prominent bands of clouds and a distinct hexagonal storm at its north pole.<br /><br />

                                        Saturn's rings, consisting of icy particles ranging in size from micrometers to meters, extend thousands of kilometers in width but are remarkably thin. The planet's rapid rotation, completing a day in approximately 10.7 hours, contributes to its flattened shape and dynamic atmospheric patterns.<br /><br />

                                        Saturn's diverse moons, including Titan and Enceladus, offer valuable insights into planetary formation and evolution. Titan's thick atmosphere and methane lakes, along with Enceladus' geysers of water vapor, intrigue researchers and inspire further exploration. Saturn remains a celestial marvel, shedding light on the mysteries of our solar system and beyond.


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
