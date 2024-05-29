import SectionHead from "./SectionHead"
export default function Timeline() {
    return (
        <section id="timeline" className="timeline">
            <div className="sm:container mx-auto">
                <div className="aboutWrapper w-11/12 m-auto">
                    <SectionHead Title="From Big Bang to Biosphere" subTitle="(A Journey Through Cosmic Time)" />
                    <ul className="timeline timeline-vertical">
                        <li>
                            <div className="timeline-start timeline-box text-right glassEf border-none outline-none">
                                <h1 className='font-black multiColorTxt text-xl'>Big Bang</h1>
                                <h1 className='text-white'><span className='font-bold '>Date:</span> Approximately 13.8 billion years ago. (13.8 Ga)</h1>
                                <p className='text-white'><span className='font-bold '>Description:</span> The universe begins with a rapid expansion from an infinitely dense and hot state, initiating space, time, and matter.</p>
                            </div>
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#00b0ff" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                            </div>
                            <hr className="customAqua" />
                        </li>
                        <li>
                            <hr className="customAqua" />
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#00b0ff" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                            </div>
                            <div className="timeline-end timeline-box text-left glassEf border-none outline-none">
                                <h1 className='font-black multiColorTxt text-xl'>Formation of the First Atoms<br />  (Cosmic Reassembly)</h1>
                                <h1 className='text-white'><span className='font-bold '>Time Range:</span> 380,000 to 1 million years after the Big Bang.</h1>
                                <p className='text-white'><span className='font-bold '>Description:</span> Protons and electrons combine to form hydrogen and helium atoms, allowing light to travel freely through the universe.</p>
                            </div>
                            <hr className="customAqua" />
                        </li>
                        <li>
                            <hr className="customAqua" />
                            <div className="timeline-start timeline-box text-right glassEf border-none outline-none">
                                <h1 className='font-black multiColorTxt text-xl'>Formation of the First Stars<br/> (Cosmic Dawn)</h1>
                                <h1 className='text-white'><span className='font-bold '>Time Range:</span>  400 to 500 million years after the Big Bang.</h1>
                                <p className='text-white'><span className='font-bold '>Description:</span> The first generation of stars, made primarily of hydrogen and helium, begins to form, marking the beginning of the cosmic dawn.</p>
                            </div>
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#00b0ff" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                            </div>
                            <hr className="customAqua" />
                        </li>
                        <li>
                            <hr className="customAqua" />
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#00b0ff" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                            </div>
                            <div className="timeline-end timeline-box text-left glassEf border-none outline-none">
                                <h1 className='font-black multiColorTxt text-xl'>Galaxy Formation and Reionization</h1>
                                <h1 className='text-white'><span className='font-bold '>Time Range:</span> 100 million to 1 billion years after the Big Bang.</h1>
                                <p className='text-white'><span className='font-bold '>Description:</span> The first galaxies, along with black holes and quasars, form and release intense radiation, ionizing the surrounding gas in the universe.</p>
                            </div>
                            <hr className="customAqua" />
                        </li>
                        <li>
                            <hr className="customAqua" />
                            <div className="timeline-start timeline-box text-right glassEf border-none outline-none">
                                <h1 className='font-black multiColorTxt text-xl'>Formation of the Milky Way Galaxy</h1>
                                <h1 className='text-white'><span className='font-bold '>Date:</span> Approximately 13.6 billion years ago to the present.</h1>
                                <p className='text-white'><span className='font-bold '>Description:</span> Our galaxy, the Milky Way, forms from the gravitational collapse of gas and dust, eventually becoming home to our solar system and Earth.</p>
                            </div>
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#00b0ff" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                            </div>
                            <hr className="customAqua" />
                        </li>
                        <li>
                            <hr className="customAqua" />
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#00b0ff" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                            </div>
                            <div className="timeline-end timeline-box text-left glassEf border-none outline-none">
                                <h1 className='font-black multiColorTxt text-xl'>Formation of the Solar System & Earth</h1>
                                <h1 className='text-white'><span className='font-bold '>Time Range:</span> (4.6 - 4.5) billion years ago.</h1>
                                <p className='text-white'><span className='font-bold '>Description:</span> A molecular cloud collapses, forming a protostar at its center. Surrounding material flattens into a rotating disk, giving rise to the Sun and planets, including Earth.<br />
                                    Earth forms from dust and gas orbiting the young Sun. Intense heat and impacts reshape the planet, leading to the differentiation of its layers.</p>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </section>
    )
}
