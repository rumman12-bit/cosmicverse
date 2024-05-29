import SectionHead from "./SectionHead"
import test from "../images/mercury.png"
import Image from "next/image"

export default function Planet() {
    return (
        <section id="mercury" className="planet  ">
            {/* <div className="customOverlay absolute top-0 left-0 w-full h-full"></div> */}
            <div className="sm:container mx-auto">
                <div className="aboutWrapper w-11/12 m-auto">
                    <SectionHead Title="Planet Mercury" subTitle="(The Swift Messenger)" />

                    <div className="planetWrap">
                        <div className="planetFact glassEf p-8 sm:float-none md:float-none lg:float-left sm:w-full md:w-full lg:w-1/4">
                            <h1 className="multiColorTxt font-black text-3xl mb-12">Planet Mercury</h1>
                            <span className="multiColorTxt font-black text-md">Diameter</span>
                            <h1 className="text-white text-3xl mb-7 qsfont">4,880 km</h1>
                            <span className="multiColorTxt font-black text-md">Distance from Sun</span>
                            <h1 className="text-white text-3xl mb-7 qsfont">57,900,000 km</h1>
                            <span className="multiColorTxt font-black text-md">Orbit Velocity</span>
                            <h1 className="text-white text-3xl mb-7 qsfont">172,632  km/h</h1>
                            <span className="multiColorTxt font-black text-md">Length of Year</span>
                            <h1 className="text-white text-3xl qsfont">88 Earth days</h1>
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
                                    <h1 className=" multiColorTxt  font-black"> <span>Mercury: </span> The Swift Messenger</h1><br />
                                    <p className="text-justify text-white">
                                        Mercury, the closest planet to the Sun, orbits at an average distance of 57.9 million kilometers. With a diameter of 4,880 kilometers, it is the smallest planet in our solar system. Despite its proximity to the Sun, Mercury experiences extreme temperature variations, ranging from -173°C at night to 427°C during the day.<br /><br />

                                        This scorched world boasts a surface marked by craters, cliffs, and smooth plains, shaped by intense volcanic activity and impacts from meteoroids. Mercury's thin atmosphere, primarily composed of oxygen, sodium, hydrogen, helium, and potassium, offers little protection from the solar wind, resulting in rapid atmospheric escape.<br /><br />

                                        Mercury's peculiarities, including its high density and eccentric orbit, challenge astronomers' understanding of its formation and evolution. Future missions, such as NASA's MESSENGER and ESA's BepiColombo, aim to unravel the mysteries of this enigmatic world, shedding light on the dynamics of planetary formation and the evolution of our solar system.


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
