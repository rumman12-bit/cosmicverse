import Button from "./Button/Button"
import ExampleComponent from "@/components/Type"



export default function Hero() {
    return (
        // <section>
            <div id="hero">
                <div className="hero min-h-screen ">
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-center text-neutral-content w-full justify-center">
                        <div className="max-w-2xl text-center">
                        
                        {/* <h1 className="mb-5 text-[20px] mt-2 font-black multiColorTxt">(Journey into Astrophysics & Cosmology)</h1> */}
                        <ExampleComponent />

                             {/* <h1 className=" text-5xl font-black leading-normal multiColorTxt">Unveiling the Cosmos</h1> */}
                            <h1 className="mb-5 text-[20px] mt-2 font-black multiColorTxt">(Journey into Astrophysics & Cosmology)</h1>
                        <p className="mb-12 font-medium text-white ">Embark on an awe-inspiring odyssey through the vast realms of astrophysics and cosmology, delving deep into the enigmatic mysteries of the universe. From the cataclysmic origins of the Big Bang to the cosmic phenomena of black holes, join us in the eternal quest to unravel the secrets of existence.</p>
                        
                        
                        <div className="heroBtnWrap sm:block md:block lg:grid grid-cols-2 gap-x-8 gap-y-8">
                            <Button btnVal="Get Started" />
                            <Button btnVal="Explore" />
                        </div>

                       



                        </div>
                    </div>
                </div>
            </div>
        // </section>
    )
}
