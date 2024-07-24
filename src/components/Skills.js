import React from "react";
import { useTheme } from '../context/ThemeContext';
import { iconsDark, iconsLight } from "../utilities/icons";

const Skills = () => {
    const {theme} = useTheme();
    return(
    <div id="project" className="bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-white py-16">
        <div className="grid grid-cols-4  md:grid-cols-5 lg:grid-cols-7 gap-3 max-w-5xl mx-auto">
            {theme === 'dark' ? iconsDark.map(icon => (
                <div className="flex flex-col justify-center items-center">
                    <img src={icon.path} alt={icon.alt} className="w-1/2 " />
                    <p>{icon.title}</p>
                </div>
            )) : iconsLight.map(icon => (
                <div className="flex flex-col justify-center items-center ">
                    <img src={icon.path} alt={icon.alt} className="w-1/2 mb-2 text-red-500 opacity-80"/>
                    <p>{icon.title}</p>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Skills;


