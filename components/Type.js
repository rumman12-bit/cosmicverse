"use client"

import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Unveiling the Universe',
                1000, 
                 // wait 1s before replacing "Mice" with "Hamsters"
                'Unveiling the Cosmic Timeline',
                1000,
                'Unveiling the Big Bang',
                1000,
                'Unveiling the Galaxy',
                1000,
                'Unveiling the Nebulae',
                1000,
                'Unveiling the Black Hole',
                1000,
                'Unveiling the Dark Energy & Dark Matter',
                1000,
                'Unveiling the Solar System',
                1000
            ]}
            wrapper="span"
            speed={50}
            // style={{ fontSize: '2em', display: 'inline-block' }}
            className='multiColorTxt font-black text-5xl'
            repeat={Infinity}
        />
    );
};

export default ExampleComponent;