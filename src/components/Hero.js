import React from "react";
import DownArrowButton from "./DownArrowButton";

const Hero = ({theme}) =>{
    return (
        <div className="bg-neutral-200 dark:bg-neutral-700 ">
            <div id="hero" className="h-[calc(100vh-56px)] mx-auto max-w-5xl flex flex-col justify-center items-center text-center text-neutral-800 dark:text-white">
                <h1 class="text-4xl mb-4">Hi,<br className="md:hidden"/> I'm Tanya Todorova</h1>
                <p class="text-lg mb-6"> I am a designer & Front-end developer.</p>

                <a href="#about">
                <DownArrowButton theme={theme}/>
                </a>
        
            </div>
        </div>
    )
}

export default Hero;