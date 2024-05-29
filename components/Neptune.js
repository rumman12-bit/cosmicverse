import SectionHead from "./SectionHead"
import test from "../images/Neptune.png"
import Image from "next/image"

export default function Planet() {
    return (
        <section id="neptune" className="planet  ">
            {/* <div className="customOverlay absolute top-0 left-0 w-full h-full"></div> */}
            <div className="sm:container mx-auto">
                <div className="aboutWrapper w-11/12 m-auto">
                    <SectionHead Title="Planet Neptune" subTitle="(The Icy Giant)" />

                    <div className="planetWrap">
                        <div className="planetFact glassEf p-8 sm:float-none md:float-none lg:float-left sm:w-full md:w-full lg:w-1/4">
                            <h1 className="multiColorTxt font-black text-3xl mb-12">Planet Neptune</h1>
                            <span className="multiColorTxt font-black text-md">Diameter</span>
                            <h1 className="text-white text-3xl mb-7 qsfont">49,244 km</h1>
                            <span className="multiColorTxt font-black text-md">Distance from Sun</span>
                            <h1 className="text-white text-3xl mb-7 qsfont">4,500,000,000 km</h1>
                            <span className="multiColorTxt font-black text-md">Orbit Velocity</span>
                            <h1 className="text-white text-3xl mb-7 qsfont">19,548 km/h</h1>
                            <span className="multiColorTxt font-black text-md">Length of Year</span>
                            <h1 className="text-white text-3xl qsfont">165 Earth years</h1>
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
                                    <h1 className=" multiColorTxt  font-black"> <span>Neptune: </span> The Ice Giant</h1><br />
                                    <p className="text-justify text-white">
                                        Neptune, the eighth and farthest known planet from the Sun, stands as a testament to the wonders of our solar system. With a diameter of about 49,244 kilometers, it ranks as the fourth largest planet, boasting a vibrant blue hue due to methane in its atmosphere. Its average distance from the Sun, approximately 4.5 billion kilometers, places it in the icy realms of the outer solar system.<br /><br />

                                        Composed primarily of hydrogen, helium, and water, Neptune harbors turbulent storms and powerful winds, with the fastest recorded wind speeds in the solar system. Its orbital period, or year, spans a staggering 165 Earth years, a testament to its distant orbit.<br /><br />

                                        Neptune's magnetic field is tilted relative to its rotation axis, resulting in unique auroras dancing across its icy atmosphere. Despite its remoteness, Neptune remains a focal point for astrophysical research, offering insights into the dynamics of gas giants and the mysteries of our solar system's outer reaches.


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
