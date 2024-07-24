import React from "react";

const About = () =>{
        return(
            <div className=" bg-neutral-100 dark:bg-neutral-600 text-neutral-800  dark:text-white  py-20 ">

                <div id="about" className="flex flex-col px-3 max-w-5xl mx-auto ">

                    <h2 className="h-5 border-b border-neutral-400 dark:border-neutral-100 text-2xl text-center">
                        <span className="bg-neutral-100 dark:bg-neutral-600  px-5">About Me</span>
                    </h2>
            
                    <div className="flex flex-col-reverse md:flex-row items-center gap-4 mt-14">

                        <article className=" w-full text-center md:text-start">
                            <p className="mb-6">An architectural designer with a strong interest in Front-end development, possessing a <span className="font-bold">STEM degree </span> in Architecture that has cultivated the ability to blend design and engineering seamlessly. <br/> <br />Highly adaptable and a quick learner, skilled in mastering complex technologies and software.  <br/> <br />Proven expertise in <span className="font-bold">Front-end development</span> technologies, with experience building both static websites and dynamic web applications.</p>
                            <button className="font-bold border-b-2 border-black dark:border-white pb-2 hover:opacity-70"> <a href="#project"> Check out my work!</a></button>
                        </article>  
{/*

                        <div className=" w-1/2  md:w-1/3 flex justify-center md:justify-end">
                            <img className="object-cover w-4/5 " src="./files/about-photo.jpg"/>
                        </div> 
    
*/}
                    </div>

                </div>
            </div>
        )
}

export default About;