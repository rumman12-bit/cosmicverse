import React from 'react'
import Image from "next/image"
import Author from "../images/rumman.jpg"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import CopyRight from './CopyRight';





export default function Footer() {
  return (
    <footer id="footer" className="relative">
      <div className="customOverlay2 absolute top-0 left-0 w-full h-full"></div>
      <div className="sm:container mx-auto">
        <div className="aboutWrapper w-11/12 m-auto">
         <div className="footerWrapper grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4">
            <div className="footerPara w-11/12 mt-8">
            <div className="relative">
                <h1 className='text-white font-black text-left mb-3'>At the End of Our Cosmic Journey :</h1>
            </div>
            <div className="glassEf p-2">
              <p className='text-white p-4 text-justify'>
                  As our exploration of the universe comes to an end, we're mesmerized by its vastness and complexity. Each discovery fuels our curiosity, propelling us to delve deeper into the mysteries of the cosmos. From the birth of stars to the enigmatic depths of black holes, we're captivated by the wonders that surround us, forever inspired by the boundless beauty and infinite possibilities of the universe.
              </p>
            </div>
          </div>
            <div className="footerLinks w-11/12 relative mt-8">
              <h1 className='text-white font-black text-left mb-3'>Quick Links :</h1>
              <ul className='glassEf p-6 font-bold'>
                <li className='text-white mb-2 border-b-2 border-dashed'><a className='cursor-pointer mb-4' href="#universe">Our Universe</a></li>
                <li className='text-white mb-2 border-b-2 border-dashed'><a className='cursor-pointer mb-4' href="#astro">Astrology</a></li>
                <li className='text-white mb-2 border-b-2 border-dashed'><a className='cursor-pointer mb-4' href="#timeline">Cosmic Time-Line</a></li>
                <li className='text-white mb-2 border-b-2 border-dashed'><a className='cursor-pointer mb-4' href="#bigbang">Big Bang</a></li>
                <li className='text-white mb-2 border-b-2 border-dashed'><a className='cursor-pointer mb-4' href="#galaxy">Galaxy</a></li>
                <li className='text-white mb-2 border-b-2 border-dashed'><a className='cursor-pointer mb-4' href="#star">Star</a></li>
                <li className='text-white mb-2 border-b-2 border-dashed'><a className='cursor-pointer mb-4' href="#darkM">Dark Energy & Matter </a></li>
                <li className='text-white mb-2 border-b-2 border-dashed'><a className='cursor-pointer mb-4' href="#blackHole">Black Hole</a></li>
                <li className='text-white border-b-2 border-dashed'><a className='cursor-pointer' href="#solarSystem">Our Solar System</a></li>
              </ul>
            </div>
            
            <div className="footerAcc mt-8">
              <h1 className='text-white font-black text-left mb-3 relative'>
                Frequently Asked Question About Universe :
              </h1>
              <div className="join join-vertical w-full glassEf text-white">
                
                <div className="collapse collapse-arrow join-item">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title text-md font-bold">
                    01. What is the area of universe ?
                  </div>
                  <div className="collapse-content text-justify text-sm">
                    <p><span className="font-bold">Answer:</span> The exact size or area of the universe is currently unknown and may be infinite. The observable universe, which is the part of the universe we can observe, has a radius of about 46.5 billion light-years. </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item ">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-md font-bold">
                    02. What are black holes, and how do they form ?
                  </div>
                  <div className="collapse-content text-justify text-sm">
                    <p><span className="font-bold">Answer:</span> Black holes are regions of space where gravity is so strong that nothing, not even light, can escape. They form when massive stars collapse under their own gravity at the end of their life cycle. The intense gravitational pull creates a singularity, a point of infinite density at the center, surrounded by an event horizon beyond which nothing can escape.</p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item ">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-md font-bold">
                    03. Is there life beyond Earth, and how do scientists search for it ?
                  </div>
                  <div className="collapse-content text-justify text-sm">
                    <p><span className="font-bold">Answer:</span> The search for extraterrestrial life is a fundamental question in astrobiology. While no direct evidence has been found yet, scientists explore various avenues, including studying extremophiles on Earth to understand potential life forms in extreme environments, searching for habitable exoplanets, and listening for signals from intelligent civilizations through programs like SETI (Search for Extraterrestrial Intelligence).</p>
                  </div>
                </div>
              </div>
          </div>
            <div className="footerRes w-11/12 relative right sm:ml-0 md:ml-0 lg:ml-8 mt-8">
              <h1 className='text-white font-black text-left mb-3'>About The Author : </h1>
              <div className="authorWrap glassEf p-4">
                <div className="authorImg w-6/12 mx-auto">
                  <Image
                    src={Author}
                    quality="100"
                    alt="Picture of the author"
                    className="object-cover mx-auto rounded-2xl"
                  />
                </div>
                <div className="authorTxt text-white mt-4">
                  <h1 className=""><span className='text-md font-bold'>Name:</span> Rumman Jami </h1>
                  <h1><span className='text-md font-bold'>Institute:</span><span> BCIC College Dhaka </span> </h1>
                  <div className="icoH font-bold mt-3 text-center">
                    Find Me On Social Media :
                  </div>
                  <div className="authorIcon flex justify-around mt-4 mb-4">
                    <a href="https://www.facebook.com/rumman.jami" target="_blank"><FaFacebook className='text-2xl' /></a>
                    <a href="https://www.instagram.com/rumman_jami/" target="_blank"><RiInstagramFill className='text-2xl' /></a>
                    <a href="https://github.com/rumman12-bit" target="_blank"><FaGithub className='text-2xl' /></a>
                    

                  </div>
                </div>
              </div>
            </div>
            
         </div>
        </div>
      </div>
      <CopyRight/>
    </footer>
  )
}
