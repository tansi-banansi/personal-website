import React from "react";

const Journey = () =>{
    return(
        <div  id="journey" className=" bg-neutral-100 dark:bg-neutral-600  text-neutral-800 dark:text-white  py-20 ">
            <div  className="flex flex-col px-3 max-w-5xl mx-auto "> 

                <h2 className="h-5 border-b border-neutral-400 dark:border-neutral-100 text-2xl text-center">
                    <span className="bg-neutral-100 dark:bg-neutral-600 px-5">Journey</span>
                </h2>

                <div className="flex flex-col">


                    <div className="flex flex-col md:flex-row mt-14 gap-4">
                            <div className="w-full md:w-1/5 flex  justify-center md:justify-end  md:border-r border-neutral-500">
                                <p className="md:px-4 italic" >Aug 2023 - Present</p>
                            </div>

                            <div className="w-full md:w-4/5 text-center md:text-start">
                                <p className="font-bold ">Front-End Engineer</p>
                                <p className="italic">Codecademy | Career Path</p>
                                <br/>
                                <p>Completed the Front-End Engineer career path on Codecademy, gaining comprehensive knowledge in HTML, CSS, and JavaScript. Developed expertise in building responsive websites and web applications, utilizing frameworks like React and tools such as Git and GitHub. The program also emphasized best practices in user experience (UX) and web performance optimization.</p>
                                <br/>
                            </div>
                    </div>

                    <div className="flex flex-col md:flex-row mt-14 gap-4">
                            <div className="w-full md:w-1/5 flex  justify-center md:justify-end  md:border-r border-neutral-500">
                                <p className="md:px-4 italic" >April 2023</p>
                            </div>

                            <div className="w-full md:w-4/5 text-center md:text-start">
                                <p className="font-bold ">AWS Certified Cloud Practitioner</p>
                                <p className="italic">Amazon Web Services</p>
                                <br/>
                                <p>Achieved the AWS Certified Cloud Practitioner certification, demonstrating a solid understanding of AWS Cloud concepts, core services, security, architecture, pricing, and support.</p>
                                <br/>
                            </div>
                    </div>



                     <div className="flex flex-col md:flex-row mt-14 gap-4">
                        <div className="w-full md:w-1/5 flex  justify-center md:justify-end  md:border-r border-neutral-500">
                            <p className="md:px-4 italic" >Oct 2021 - Jan 2024</p>
                        </div>

                        <div className="w-full md:w-4/5 text-center md:text-start">
                            <p className="font-bold ">Architectural Assistant</p>
                            <p className="italic">MortonScarr Architects</p>
                            <br/>
                            <p>Worked on a variety of projects leveraging industry-standard software tools, developing transferable skills such as problem-solving, attention to detail, and multitasking. Collaborated with various stakeholders, enhancing my communication and teamwork abilities.</p>
                            <br/>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row mt-14 gap-4">
                        <div className="w-full md:w-1/5 flex justify-center md:justify-end md:border-r border-neutral-500">
                            <p className="md:px-4 italic">Sep 2018 - June 2021</p>
                        </div>

                        <div className="w-full md:w-4/5 text-center md:text-start">
                            <p className="font-bold">Bachelor of Architecture</p>
                            <p className="italic">The University of Nottingham</p>
                            <br/>
                            <p>Completed a Bachelor of Architecture at the University of Nottingham. The program offered a comprehensive education in architectural design, technical skills, and project management, emphasizing both theoretical knowledge and practical application.</p>
                            <br/>
                        </div>
                    </div>

                   

            
                </div>

            </div>
        </div>
    )

}

export default Journey;