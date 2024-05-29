"use client";

import { Exo_2 } from "next/font/google";
const exo_2 = Exo_2({
    subsets: ["latin"],
    display: "swap",
    // variable: "--poppins-font",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal"],
});

import { useEffect, useState } from 'react';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div 
        // className={`navbar w-full ${isSticky ? 'sticky' : ''}` }
        className="fixed w-full z-[99999]"
        >
            <div className="glassEfl">
                <div className={exo_2.className}>
                    <div className="container ">
                        <div className="w-11/12 mx-auto">
                            <div className="navbar justify-between">
                                <div className="navbar-start">
                                    <div className="dropdown">
                                        <div tabIndex={0} role="button" className="btn csBtn btn-ghost lg:hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                        </div>
                                        <ul tabIndex={0} className="menu glassEf menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white font-medium">
                                            <li><a href="#universe">Universe</a></li>
                                            <li><a href="#astro">Astrology</a></li>
                                            <li><a href="#timeline">Cosmos Timeline</a></li>
                                            <li><a href="#bigbang">Big Bang</a></li>
                                            <li><a href="#star">Star</a></li>
                                            <li><a href="#galaxy">Galaxy</a></li>
                                            <li><a href="#meteors">Meteors</a></li>
                                            <li><a href="#nebula">Nebulae</a></li>
                                            <li><a href="#blackHole">BlackHole</a></li>
                                            <li><a href="#darkM">Dark Energy & Matter</a></li>
                                            <li>
                                                <a>Solar System</a>
                                                <ul className="p-2">
                                                    <li><a href="#solarSystem">Our Solar System</a></li>
                                                    <li><a href="#sun">Star Sun</a></li>
                                                    <li><a href="#mercury">Planet Mercury</a></li>
                                                    <li><a href="#venus">Planet Venus</a></li>
                                                    <li><a href="#planet">Planet Earth</a></li>
                                                    <li><a href="#moon">The Moon</a></li>
                                                    <li><a href="#mars">Planet Mars</a></li>
                                                    <li><a href="#jupiter">Planet Jupiter</a></li>
                                                    <li><a href="#saturn">Planet Saturn</a></li>
                                                    <li><a href="#uranus">Planet Uranus</a></li>
                                                    <li><a href="#neptune">Planet Neptune</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <a href="#hero" className="btn btn-ghost csBtn text-3xl font-bold multiColorTxt">Cosmic Verse</a>
                                </div>
                                <div className="navbar-center hidden lg:flex">
                                    <ul className="menu menu-horizontal px-1 text-white font-medium">
                                        <li><a href="#universe">Universe</a></li>
                                        <li><a href="#astro">Astrology</a></li>
                                      {/*  <li><a href="#timeline">Cosmos Timeline</a></li> */}
                                        <li><a href="#bigbang">Big Bang</a></li>
                                        <li><a href="#star">Star</a></li>
                                        <li><a href="#galaxy">Galaxy</a></li>
                                        {/* <li><a href="#meteors">Meteors</a></li> */}
                                        <li><a href="#nebula">Nebulae</a></li>
                                       {/* <li><a href="#blackHole">BlackHole</a></li> */}
                                       {/* <li><a href="#darkM">Dark Energy & Matter</a></li> */}
                                        <li>
                                            <details>
                                                <summary>Solar System</summary>
                                                <ul className="p-2 glassEf z-50 w-40">
                                                    <li><a href="#solarSystem">Our Solar System</a></li>
                                                    <li><a href="#sun">Star Sun</a></li>
                                                    <li><a href="#mercury">Planet Mercury</a></li>
                                                    <li><a href="#venus">Planet Venus</a></li>
                                                    <li><a href="#planet">Planet Earth</a></li>
                                                    <li><a href="#moon">The Moon</a></li>
                                                    <li><a href="#mars">Planet Mars</a></li>
                                                    <li><a href="#jupiter">Planet Jupiter</a></li>
                                                    <li><a href="#saturn">Planet Saturn</a></li>
                                                    <li><a href="#uranus">Planet Uranus</a></li>
                                                    <li><a href="#neptune">Planet Neptune</a></li>

                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
