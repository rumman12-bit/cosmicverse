import SectionHead from "./SectionHead"
import gl from "../images/gla.jpg"
import mm from "../images/mm.jpg"
import kk from "../images/kk.jpg"
import Image from "next/image"



export default function Galaxy() {
  return (
      <section id="galaxy" className="relative">
        <div className="customOverlay absolute top-0 left-0 w-full h-full"></div>
          <div className="sm:container mx-auto">
              <div className="aboutWrapper w-11/12 m-auto">
                  <SectionHead Title="Cosmic Weavings" subTitle="(Unraveling the Story of Galaxies)" />

                  <div className="bigWrap grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                      <div className="glassEf p-4">
                          <h1 className="multiColorTxt font-black"> <span>Time Range:</span> 100 million to 1 billion years after the Big Bang.</h1><br />
                          <p className="text-justify text-white">
                              Galaxies, vast conglomerations of stars, gas, dust, and dark matter, are the fundamental building blocks of the universe. Understanding their formation and evolution unveils the intricate processes that have shaped cosmic structure over billions of years.<br /><br />

                              Galaxies are believed to form from the gravitational collapse of primordial gas clouds, triggered by small density fluctuations in the early universe. Hierarchical assembly models suggest that galaxies grow through mergers and accretion of smaller galactic building blocks, under the gravitational influence of dark matter.<br /><br />

                              These galaxies come in a variety of shapes and sizes, broadly classified into spiral, elliptical, and irregular types. Spiral galaxies, like our Milky Way, possess rotating disks of stars and gas, while elliptical galaxies exhibit smooth, football-shaped profiles. Irregular galaxies lack defined structure and often arise from interactions between galaxies.

                              Within galaxies, diverse populations of stars exist, categorized by age, metallicity, and spatial distribution. Galactic dynamics, governed by gravitational interactions, manifest in rotating disks, galactic bars, and tidal interactions.<br /><br />

                              At the heart of many galaxies lies a supermassive black hole, surrounded by an active galactic nucleus (AGN) that emits copious amounts of energy. Galactic mergers and interactions can trigger bursts of star formation and fuel AGN activity.

                              As galaxies evolve over cosmic time, they undergo transformations in their structures, star formation rates, and gas content, influenced by internal processes and environmental interactions.<br /><br />

                              Observational techniques across various wavelengths provide insights into galactic properties, while ongoing advancements promise to deepen our understanding of galaxy formation and evolution, unraveling the cosmic tapestry of the universe.


                          </p>
                      </div>

                      <div className="bigbImg sm:ml-0 md:ml-0 lg:ml-12">
                          <div className="new flex  justify-between">
                              <div className="bbimg1 p-2 m-2 rounded-2xl shadow">
                                  <Image
                                      src={kk}
                                      quality="100"
                                      alt="Picture of the author"
                                      className="bbimg1 object-cover mx-auto rounded-2xl"
                                  />
                              </div>
                              <div className="bbimg1 p-2 m-2 rounded-2xl shadow">
                                  <Image
                                      src={mm}
                                      quality="100"
                                      alt="Picture of the author"
                                      className="bbimg1 object-cover mx-auto rounded-2xl"
                                  />
                              </div>
                          </div>
                          <div className="bbimg2 p-2 m-2 rounded-2xl shadow">
                              <Image
                                  src={gl}
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
