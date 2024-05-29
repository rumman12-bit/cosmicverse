"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Rocket from "../images/rocket.png"

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div style={{ display: isVisible ? 'block' : 'none', position: 'fixed', bottom: '20px', right: '20px', zIndex: '1000' }}>
            <button onClick={scrollToTop} style={{ border: 'none', width: '60px', height: '60px', cursor: 'pointer' }}>
                {/* <FaArrowCircleUp className='ml-2' /> */}
                <Image
                    src={Rocket}
                    quality="100"
                    alt="Picture of the author"
                    className=" object-cover mx-auto rounded-2xl "
                />
            </button>
        </div>
    );
};

export default ScrollToTopButton;
