import SectionHead from "./SectionHead"
import test from "../images/ttest.png"
import Image from "next/image"

export default function Planet() {
    return (
        <section id="planet" className="planet  ">
            {/* <div className="customOverlay absolute top-0 left-0 w-full h-full"></div> */}
            <div className="sm:container mx-auto">
                <div className="aboutWrapper w-11/12 m-auto">
                    <SectionHead Title="Planet Earth" subTitle="(Our Blue Oasis in the Cosmos)" />

                    <div className="planetWrap">
                        <div className="planetFact glassEf p-8 sm:float-none md:float-none lg:float-left sm:w-full md:w-full lg:w-1/4">
                            <h1 className="multiColorTxt font-black text-3xl mb-12">Planet Earth</h1>
                            <span className="multiColorTxt font-black text-md">Diameter</span>
                            <h1 className="text-white text-3xl mb-7 qsfont">12,742 km</h1>
                            <span className="multiColorTxt font-black text-md">Distance from Sun</span>
                            <h1 className="text-white text-3xl mb-7 qsfont">150,780,000 km</h1>
                            <span className="multiColorTxt font-black text-md">Orbit Velocity</span>
                            <h1 className="text-white text-3xl mb-7 qsfont">107,218 km/h</h1>
                            <span className="multiColorTxt font-black text-md">Length of Year</span>
                            <h1 className="text-white text-3xl qsfont">365 Days</h1>
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
                                    <h1 className=" multiColorTxt  font-black"> <span>Earth: </span> Our Blue Oasis in the Cosmos</h1><br />
                                    <p className="text-justify text-white">
                                        Earth, the third planet from the Sun in our solar system, boasts a diameter of approximately 12,742 kilometers and orbits at an average distance of 150 million kilometers from our star. With a surface predominantly covered by oceans, Earth is often referred to as the  <span className="multiColorTxt font-black">"Blue Planet".</span> Its atmosphere, composed primarily of nitrogen and oxygen, sustains life and shields the planet from harmful solar radiation.<br /><br />

                                        Dynamic geological processes, driven by Earth's internal heat and tectonic activity, shape its surface features, including mountains, valleys, and plate boundaries. These processes also contribute to the formation of terrestrial phenomena like earthquakes and volcanic eruptions.<br /><br />

                                        However, Earth faces significant challenges, including climate change, habitat loss, and pollution, threatening the delicate balance of its ecosystems. As stewards of our planet, it is imperative that we prioritize sustainable practices and environmental conservation efforts to ensure the longevity of Earth's biodiversity and the well-being of future generations.


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
