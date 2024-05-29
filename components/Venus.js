import SectionHead from "./SectionHead"
import test from "../images/ven.png"
import Image from "next/image"


export default function Planet() {
    return (
        <section id="venus" className="">
            {/* <div className="customOverlay absolute top-0 left-0 w-full h-full"></div> */}
            <div className="sm:container mx-auto">
                <div className="aboutWrapper w-11/12 m-auto">
                    <SectionHead Title="Planet Venus" subTitle="(The Shrouded Sister)" />

                    <div className="planetWrap">
                        <div className="planetFact glassEf p-8 sm:float-none md:float-none lg:float-left sm:w-full md:w-full lg:w-1/4">
                            <h1 className="multiColorTxt font-black text-3xl mb-12">Planet Venus</h1>
                            <span className="multiColorTxt font-black text-md">Diameter</span>
                            <h1 className="text-white text-3xl mb-7 qsfont">12,104 km</h1>
                            <span className="multiColorTxt font-black text-md">Distance from Sun</span>
                            <h1 className="text-white text-3xl mb-7 qsfont">108,200,000 km</h1>
                            <span className="multiColorTxt font-black text-md">Orbit Velocity</span>
                            <h1 className="text-white text-3xl mb-7 qsfont">126,072  km/h</h1>
                            <span className="multiColorTxt font-black text-md">Length of Year</span>
                            <h1 className="text-white text-3xl qsfont">225 Earth days</h1>
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
                                    <h1 className=" multiColorTxt  font-black"> <span>Venus: </span> The Shrouded Sister</h1><br />
                                    <p className="text-justify text-white">
                                        Venus, our neighboring planet, orbits at an average distance of 108.2 million kilometers from the Sun. With a diameter of 12,104 kilometers, it closely resembles Earth in size and density. However, its thick atmosphere, composed mainly of carbon dioxide with traces of sulfuric acid clouds, creates a runaway greenhouse effect, resulting in surface temperatures exceeding 460°C.<br /><br />

                                        Venus' surface is marked by vast plains, towering volcanoes, and deep impact craters, evidence of its tumultuous geological history. Despite its harsh environment, Venus exhibits intriguing atmospheric dynamics, including super-rotation, where its atmosphere rotates faster than the planet itself.<br /><br />

                                        Understanding Venus' extreme climate and atmospheric composition provides valuable insights into planetary evolution and the potential habitability of exoplanets. Future missions, such as NASA's Venus missions and proposed landers, aim to unravel the mysteries of this enigmatic world, offering glimpses into the complexities of terrestrial planet dynamics.

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
