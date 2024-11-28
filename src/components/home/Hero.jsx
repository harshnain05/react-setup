import React, { useState } from 'react';
import DinoImg from '../../assets/image/png/dino.png';

const Hero = () => {
    const [value, setValue] = useState(0); 

    const handClicker = () => {
        setValue(value + 1);
    };

    return (
        <div className="bg-black min-h-screen">
            <h2 className='text-white text-center text-[72px] godzilla'>UseState</h2>
            <p className="text-white text-center pt-10 text-2xl">Count: {value}</p>
            <button
                onClick={handClicker}
                className="bg-red-500 text-white px-16 mt-[20px] py-4 rounded mx-auto block"
            >
                Add
            </button>
            <div className="container mx-auto lg:flex mt-10">
                <div className="mx-auto lg:mx-0 lg:w-6/12">
                    <img src={DinoImg} alt="Dinosaur" className="w-full" />
                </div>
                <div className="text-center lg:text-left lg:w-6/12 mt-10 lg:mt-0">
                    <h1 className="text-[72px] leading-[62px] text-center godzilla mt-[60px] text-[#FF002A] font-normal">
                        Story
                    </h1>
                    <p className="text-white font-normal oswald mt-[29px] px-10 text-[14px] lg:text-[22px] max-w-[648px] leading-[20px] lg:leading-[33px] mx-auto">
                        It was popularised in the 1960s with the release of Letraset sheets
                        containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem
                        Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
