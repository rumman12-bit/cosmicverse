import ScrollToTopButton from "@/components/ScrollTop"
import Astrology from "@/components/Astrology";
import BigBang from "@/components/BigBang";
import Galaxy from "@/components/Galaxy";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SolarSystem from "@/components/SolarSystem";
import Star from "@/components/Star";
import Timeline from "@/components/Timeline";
import Sun from "@/components/Sun";
import Planet from "@/components/Planet";
import Mercury from "@/components/Mercury";
import Venus from "@/components/Venus";
import Mars from "@/components/Mars";
import Jupiter from "@/components/Jupiter"
import Saturn from "@/components/Saturn"
import Uranus from "@/components/Uranus"
import Neptune from "@/components/Neptune"
import Moon from "@/components/Moon"
import BlackHole from "@/components/BlackHole"
import Dark from "@/components/DarkME"
import Nebula from "@/components/Nebula"
import Meteors from "@/components/Meteors"
import Universe from "@/components/Universe"
import Footer from "@/components/Footer";


import { Exo_2 } from "next/font/google";
const exo_2 = Exo_2({
  subsets: ["latin"],
  display: "swap",
  // variable: "--poppins-font",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
});


export default function Home() {
  return (
    <main className={exo_2.className}>
      
      <Navbar />
      <ScrollToTopButton/>
      <Hero/>
      <Universe/>
      <Astrology />
      <Timeline/>
      <BigBang />
      <Star/>
      <Galaxy/>
      <Meteors/>
      <Nebula/>
      <BlackHole />
      <Dark/>
      <SolarSystem/>
      <Sun/>
      <Mercury />
      <Venus/>
      <Planet/>
      <Moon/>
      <Mars/>
      <Jupiter />
      <Saturn />
      <Uranus />
      <Neptune />
      <Footer/>
      
    </main>
  );
}
