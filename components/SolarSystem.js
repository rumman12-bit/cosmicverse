import SectionHead from "./SectionHead"
import eimg from "../images/eeee.jpg"
import ssImg from "../images/ff.jpg"
import px from "../images/pxfuel.jpg"
import Image from "next/image"


export default function SolarSystem() {
  return (
    <section id="solarSystem" className='relative'>
      <div className="customOverlay absolute top-0 left-0 w-full h-full"></div>
      <div className="sm:container mx-auto">
        <div className="aboutWrapper w-11/12 m-auto">
          <SectionHead Title="Cosmic Dawn" subTitle="(The Formation of Our Solar System)" />

          <div className="bigWrap grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">

            <div className="bigbImg sm:ml-0 md:ml-0 lg:mr-12">

              <div className="bbimg2 p-2 m-2 rounded-2xl shadow">
                <Image
                  src={px}
                  quality="100"
                  alt="Picture of the author"
                  className=" object-cover mx-auto rounded-2xl"
                />
              </div>
              <div className="new flex  justify-between">
                <div className="bbimg1 p-2 m-2 rounded-2xl shadow">
                  <Image
                    src={ssImg}
                    quality="100"
                    alt="Picture of the author"
                    className="bbimg1 object-cover mx-auto rounded-2xl"
                  />
                </div>
                <div className="bbimg1 p-2 m-2 rounded-2xl shadow">
                  <Image
                    src={eimg}
                    quality="100"
                    alt="Picture of the author"
                    className="csStarImg object-cover mx-auto rounded-2xl"
                  />
                </div>
                
              </div>
            </div>
            <div className="glassEf p-4">
              <h1 className="multiColorTxt  font-black"> <span>Time Range:</span> Approximately 4.6 billion years ago.</h1><br />
              <p className="text-justify  text-white">

                Our solar system, situated within the Milky Way galaxy, presents a rich tapestry of celestial bodies that beckon exploration and study. Dominating the cosmic stage is the Sun, a colossal star whose gravitational influence shapes the orbits and dynamics of the planets that orbit it.<br /><br />

                Spanning a diverse range of compositions and environments, the eight planets of our solar system offer insights into the processes of planetary formation and evolution. From the rocky, terrestrial worlds of Mercury, Venus, Earth, and Mars to the gas giants of Jupiter, Saturn, Uranus, and Neptune, each planet holds clues to the conditions that prevailed during the early stages of our solar system's history.<br /><br />

                Accompanying these planets are an array of moons, some of which rival the planets themselves in complexity and intrigue. Moons such as Europa, Enceladus, and Titan boast subsurface oceans, tantalizing scientists with the possibility of habitable environments beyond Earth.

                

                In addition to planets and moons, our solar system harbors a multitude of smaller bodies, including asteroids and comets, which provide valuable insights into the processes of planetary accretion and migration.<br /><br />

                Through a combination of robotic exploration missions and astronomical observations, scientists endeavor to unlock the secrets of our solar system's formation and evolution, shedding light on fundamental questions about the origins of our cosmic neighborhood and the potential for life beyond Earth.


              </p>
            </div>



          </div>

        </div>
      </div>
    </section>
  )
}
