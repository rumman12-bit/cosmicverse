import SectionHead from "./SectionHead"
import dark from "../images/dark.jpg"
import dark1 from "../images/dark0.jpg"
import dark2 from "../images/dark11.png"
import Image from "next/image"



export default function Galaxy() {
    return (
        <section id="darkM" className="relative">
            <div className="customOverlay absolute top-0 left-0 w-full h-full"></div>
            <div className="sm:container mx-auto">
                <div className="aboutWrapper w-11/12 m-auto">
                    <SectionHead Title="Unveiling the Enigma" subTitle="(Dark Energy and Dark Matter in the Cosmos)" />

                    <div className="bigWrap grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                        <div className="glassEf p-4">
                            <h1 className="multiColorTxt text-center font-black"> <span>Unveiling the Enigma :</span> Dark Energy and Dark Matter in the Cosmos</h1><br />
                            <p className="text-justify text-white">
                                Dark energy and dark matter, elusive entities pervading the cosmos, hold the keys to understanding the universe's structure and evolution. Dark matter, comprising about 27% of the universe's total mass-energy content, reveals its presence through gravitational effects on galaxies and galaxy clusters. Despite its abundance, dark matter does not emit or interact with electromagnetic radiation, remaining invisible to traditional observation methods.
                                <br /><br />
                                Dark energy, constituting approximately 68% of the universe's energy density, drives the accelerated expansion of the universe. This phenomenon was discovered through observations of distant supernovae, indicating that the universe's expansion is not slowing down but instead speeding up. The nature of dark energy remains a profound mystery, with theories ranging from a cosmological constant to a dynamic field permeating space.<br /><br />

                                While dark matter acts as the cosmic scaffold, forming structures like galaxies and galaxy clusters, dark energy counteracts gravity's pull, propelling the universe's expansion. Together, they shape the large-scale structure of the cosmos and influence its fate. Understanding the properties and roles of dark energy and dark matter is a paramount challenge in astrophysics, driving ongoing research and exploration into the deepest mysteries of the universe.


                            </p>
                        </div>

                        <div className="bigbImg sm:ml-0 md:ml-0 lg:ml-12">
                            <div className="new flex  justify-between">
                                <div className="bbimg1 p-2 m-2 rounded-2xl shadow">
                                    <Image
                                        src={dark1}
                                        quality="100"
                                        alt="Picture of the author"
                                        className="bbimg1 object-cover mx-auto rounded-2xl"
                                    />
                                </div>
                                <div className="bbimg1 p-2 m-2 rounded-2xl shadow">
                                    <Image
                                        src={dark}
                                        quality="100"
                                        alt="Picture of the author"
                                        className="bbimg1 object-cover mx-auto rounded-2xl"
                                    />
                                </div>
                            </div>
                            <div className="bbimg2 p-2 m-2 rounded-2xl shadow">
                                <Image
                                    src={dark2}
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
