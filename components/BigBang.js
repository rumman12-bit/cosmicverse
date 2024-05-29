import SectionHead from "./SectionHead"
import bbi1 from "../images/bb.jpg"
import bbi2 from "../images/bigb.jpg"
import bbg from "../images/bbg.jpg"
import Image from "next/image"


export default function BigBang() {
    return (
        <section id="bigbang" className="relative">
            <div className="customOverlay absolute top-0 left-0 w-full h-full"></div>
            <div className="sm:container mx-auto">
                <div className="aboutWrapper w-11/12 m-auto">
                    <SectionHead Title="The Big Bang Theory" subTitle="(Unveiling the Origins of the Universe)" />

                    <div className="bigWrap grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                        <div className="glassEf p-4">
                            <h1 className=" multiColorTxt  font-black"> <span>Date:</span> Approximately 13.8 billion years ago. (13.8 Ga)</h1><br />
                            <p className="text-justify text-white">
                                The Big Bang Theory revolutionized our understanding of the cosmos, explaining the universe's origin and evolution. Let's explore its key aspects succinctly.<br /><br />

                                The Big Bang Theory is a cornerstone of modern cosmology, proposing that the universe began as a hot, dense singularity around 13.8 billion years ago. This explosion initiated rapid expansion, shaping the cosmos as we know it.<br /><br />

                                Key facts include the discovery of cosmic microwave background radiation in 1965, which provides compelling evidence supporting the theory. Cosmic inflation, occurring within a fraction of a second after the Big Bang, smoothed out irregularities and laid the groundwork for galaxy formation.<br /><br />

                                As the universe cooled, subatomic particles formed, leading to nucleosynthesis and the creation of elements like hydrogen and helium. This cosmic phenomenon fundamentally transformed our understanding of space, time, and matter, unlocking profound insights into the universe's origin and evolution.<br /><br />

                                Moreover, observational data from astronomical observations, such as the redshift of distant galaxies, corroborates the expanding universe model proposed by the Big Bang Theory. The theory continues to be refined and validated through ongoing research and observations, shaping our comprehension of the cosmos and our place within it.<br /><br />

                                The Big Bang Theory unveils the universe's grand narrative, fueling our quest to comprehend its deepest mysteries.


                            </p>
                        </div>

                        <div className="bigbImg sm:ml-0 md:ml-0 lg:ml-12">
                            <div className="new flex  justify-between">
                                <div className="bbimg1 p-2 m-2 rounded-2xl shadow">
                                    <Image
                                        src={bbi1}
                                        quality="100"
                                        alt="Picture of the author"
                                        className="bbimg1 object-cover mx-auto rounded-2xl"
                                    />
                                </div>
                                <div className="bbimg1 p-2 m-2 rounded-2xl shadow">
                                    <Image
                                        src={bbg}
                                        quality="100"
                                        alt="Picture of the author"
                                        className="bbimg1 object-cover mx-auto rounded-2xl"
                                    />
                                </div>
                            </div>
                            <div className="bbimg2 p-2 m-2 rounded-2xl shadow">
                                <Image
                                    src={bbi2}
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
