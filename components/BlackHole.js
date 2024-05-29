import SectionHead from "./SectionHead"
import BlackHole1 from "../images/black.jpg"
import BlackHole2 from "../images/blackhole.jpg"
import BlackHole3 from "../images/blackblack.jpg"
import Image from "next/image"



export default function Star() {
    return (
        <section id="blackHole" className="blackHole relative">
            <div className="customOverlay absolute top-0 left-0 w-full h-full"></div>
            <div className="sm:container mx-auto">
                <div className="aboutWrapper w-11/12 m-auto">
                        <SectionHead Title="Exploring the Enigmatic Depths" subTitle="(Unveiling the Mysteries of Black Holes)" />

                    <div className="bigWrap grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">

                        <div className="bigbImg sm:ml-0 md:ml-0 lg:mr-12">

                            <div className="bbimg2 p-2 m-2 rounded-2xl shadow">
                                <Image
                                    src={BlackHole1}
                                    quality="100"
                                    alt="Picture of the author"
                                    className=" object-cover mx-auto rounded-2xl"
                                />
                            </div>
                            <div className="new flex  justify-between">
                                <div className="bbimg1 p-2 m-2 rounded-2xl shadow">
                                    <Image
                                        src={BlackHole3}
                                        quality="100"
                                        alt="Picture of the author"
                                        className="csStarImg object-cover mx-auto rounded-2xl"
                                    />
                                </div>
                                <div className="bbimg1 p-2 m-2 rounded-2xl shadow">
                                    <Image
                                        src={BlackHole2}
                                        quality="100"
                                        alt="Picture of the author"
                                        className="bbimg1 object-cover mx-auto rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="glassEf p-4">
                            <h1 className="multiColorTxt text-center font-black"> <span>Exploring the Enigmatic Depths :</span> Unveiling the Mysteries of Black Holes</h1><br />
                            <p className="text-justify  text-white">

                                Black holes, celestial anomalies born from the collapse of massive stars, stand as some of the most intriguing objects in the universe. Their gravitational pull is so intense that not even light can escape, making them invisible to traditional telescopes. At the heart of a black hole lies the singularity, a point of infinite density, surrounded by the event horizon, the boundary beyond which nothing can return.<br /><br />

                                Black holes come in various sizes, from stellar-mass black holes to supermassive ones at the centers of galaxies. Sagittarius A*, the supermassive black hole residing at the center of our Milky Way galaxy, has a mass of approximately 4 million times that of the Sun. In contrast, the supermassive black hole in the galaxy M87, imaged by the Event Horizon Telescope, boasts a mass equivalent to 6.5 billion Suns.<br /><br />

                                Despite being invisible, black holes betray their presence through gravitational effects on nearby objects and emissions of radiation. <br /><br />By studying these phenomena, astronomers gain insights into the nature of spacetime, galaxy formation, and the laws of physics governing the universe's extremes.<br /><br />

                                The exploration of black holes continues to push the boundaries of astrophysics, with ongoing research focusing on understanding their properties, evolution, and interactions with their surroundings. As we delve deeper into the mysteries of these cosmic behemoths, we uncover fundamental truths about the nature of space, time, and the cosmos itself.

                            </p>
                        </div>



                    </div>

                </div>

            </div>
        </section>
    )
}
