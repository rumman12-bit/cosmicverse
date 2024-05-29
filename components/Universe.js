import React from 'react'
import SectionHead from './SectionHead'

export default function Astrology() {
    return (
        <section id="universe" className='relative'>
            <div className="customOverlay absolute top-0 left-0 w-full h-full"></div>
            <div className="sm:container mx-auto">
                <div className="aboutWrapper w-11/12 m-auto">
                    <SectionHead Title="Voyage Across the Cosmos" subTitle="(Exploring the Depths of the Universe)" />
                    <div className="astroWrap">
                        <div className="astroTxt glassEf p-6">
                            <p className='text-justify text-white'>
                                Embark on a journey beyond the confines of our world and into the boundless expanse of the cosmos. As we gaze into the night sky, we are captivated by the wonders that lie beyond, beckoning us to explore and unravel the mysteries of the universe.<br /><br />

                                <span className='multiColorTxt font-black'> Scale and Structure:</span><br />
                                The universe, spanning over 93 billion light-years in diameter, is a vast and intricate tapestry of cosmic structures. At its largest scales, the universe exhibits a cosmic web-like structure, with galaxies and galaxy clusters interconnected by vast cosmic voids. Dark matter, comprising about 27% of the universe's total mass-energy content, plays a crucial role in shaping this cosmic architecture through its gravitational influence.<br /><br />

                                <span className=' multiColorTxt font-black'>Galactic Communities:</span><br />
                                Galaxies, the building blocks of the universe, come in a variety of shapes and sizes, from spiral and elliptical galaxies to irregular formations. The Milky Way, our home galaxy, contains billions of stars and is just one of billions of galaxies in the observable universe. Understanding the formation and evolution of galaxies provides insights into the cosmic history and the distribution of matter in the universe.<br /><br />

                                <span className=' multiColorTxt font-black'> Celestial Dynamics:</span><br />
                                Within galaxies, stars dance in complex orbits under the influence of gravity. Supernovae, the explosive deaths of massive stars, seed the cosmos with heavy elements essential for the formation of planets and life. Black holes, cosmic phenomena with gravitational pulls so strong that nothing, not even light, can escape, serve as cosmic laboratories for testing the limits of our understanding of physics.<br /><br />

                                <span className=' multiColorTxt font-black'>Cosmic Mysteries and Discoveries:</span><br />
                                The universe is teeming with mysteries yet to be unraveled. Dark energy, comprising about 68% of the universe's mass-energy content, drives the universe's accelerated expansion, but its origin and nature remain elusive. The cosmic microwave background radiation, a faint glow permeating the universe, provides a snapshot of the universe's early history, offering clues to its origins and evolution.<br /><br />
                                <span className=' multiColorTxt font-black'>Future Exploration and Discovery:</span><br />

                                As technology advances, astronomers continue to explore the cosmos, pushing the boundaries of our knowledge of the universe. From the search for exoplanets and habitable worlds to the study of cosmic phenomena like gravitational waves and gamma-ray bursts, each new discovery brings us closer to understanding the mysteries of the cosmos and our place within it.<br /><br />

                                In our quest to understand the cosmos, we have glimpsed the grandeur of galaxies, witnessed the birth and death of stars, and pondered the enigmatic forces that govern the universe. Yet, our journey is far from over. With each new discovery, we inch closer to unlocking the secrets of the cosmos and gaining a deeper appreciation for the vastness and complexity of the universe we call home.
                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
