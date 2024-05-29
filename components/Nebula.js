import SectionHead from "./SectionHead"
import nebula1 from "../images/nnv.jpg"
import nebula2 from "../images/hhl.jpg"
import nebula3 from "../images/nn.jpg"
import Image from "next/image"



export default function Galaxy() {
    return (
        <section id="nebula" className="relative">
            <div className="customOverlay absolute top-0 left-0 w-full h-full"></div>
            <div className="sm:container mx-auto">
                <div className="aboutWrapper w-11/12 m-auto">
                    <SectionHead Title="Unveiling the Cosmic Tapestry" subTitle="(Exploring the Mysteries of Nebulae)" />

                    <div className="bigWrap grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                        <div className="glassEf p-4">
                            <h1 className="multiColorTxt text-center font-black"> <span>Unveiling the Cosmic Tapestry :</span> Exploring the Mysteries of Nebulae</h1><br />
                            <p className="text-justify text-white">
                                Nebulae, the celestial nurseries of the universe, are vast clouds of gas and dust scattered throughout space. These enigmatic structures serve as the birthplaces of stars and planets, where gravity gradually pulls together the surrounding material to form new celestial objects. Nebulae come in various shapes and sizes, ranging from small, dense regions to expansive clouds spanning hundreds of light-years across.
                                <br /><br />
                                One of the most iconic types of nebulae is the emission nebula, where hot, young stars ionize the surrounding gas, causing it to emit light in vibrant colors. The Orion Nebula, located in the constellation Orion, is a prime example of this type, showcasing intricate filaments and pillars of gas illuminated by nearby stars.<br /><br />

                                Another type of nebula is the reflection nebula, which reflects the light of nearby stars off of its dust grains, creating a blueish glow. The Pleiades, or Seven Sisters, is a famous star cluster surrounded by reflection nebulae, adding to its ethereal beauty.<br /><br />

                                Nebulae also include dark nebulae, dense clouds of gas and dust that obscure the light from background stars, and planetary nebulae, the remnants of dying stars shedding their outer layers. These diverse structures offer astronomers invaluable insights into the processes of star formation, stellar evolution, and the dynamics of the interstellar medium.<br /><br />

                                By studying nebulae across different wavelengths of light, from visible to infrared and beyond, scientists unravel the intricacies of these cosmic phenomena, shedding light on the complex tapestry of the universe's evolution.


                            </p>
                        </div>

                        <div className="bigbImg sm:ml-0 md:ml-0 lg:ml-12">
                            <div className="new flex  justify-between">
                                <div className="bbimg1 p-2 m-2 rounded-2xl shadow">
                                    <Image
                                        src={nebula2}
                                        quality="100"
                                        alt="Picture of the author"
                                        className="bbimg1 object-cover mx-auto rounded-2xl"
                                    />
                                </div>
                                <div className="bbimg1 p-2 m-2 rounded-2xl shadow">
                                    <Image
                                        src={nebula1}
                                        quality="100"
                                        alt="Picture of the author"
                                        className="bbimg1 object-cover mx-auto rounded-2xl"
                                    />
                                </div>
                            </div>
                            <div className="bbimg2 p-2 m-2 rounded-2xl shadow">
                                <Image
                                    src={nebula3}
                                    quality="100"
                                    alt="Picture of the author"
                                    className=" object-cover mx-auto rounded-2xl"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
