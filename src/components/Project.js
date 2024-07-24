import React from 'react';
import OpenInNewButton from './OpenInNewButton'

const Project = () =>{
    return (
        <div id="project" className=" bg-neutral-200 dark:bg-neutral-700  text-neutral-800 dark:text-white  py-20" >
            
            <div className="flex flex-col px-3 max-w-5xl mx-auto ">
                <h2 className="h-5 border-b border-neutral-400 dark:border-neutral-100 text-2xl text-center">
                    <span className="bg-neutral-200 dark:bg-neutral-700 px-5">Projects</span>
                </h2>

                <div className="flex flex-col-reverse md:flex-row items-stretch gap-4 mt-14">

                    <div className=" w-full md:w-2/3 text-center md:text-end flex flex-col mb-16 md:mb-0">
                        <div className='my-4'>
                            <h2 className='text-xl font-bold mb-2'>Jammming</h2>
                            <p>A web application that serves as a third-party platform for users to search for songs on Spotify, add them to playlists, and save these playlists directly to their Spotify account. The application demonstrates expertise in API calls integration, state management, and authentication.</p>
                        </div>

                        <hr className='border-1 border-neutral-500 mb-2'/>
                        <div className='flex flex-row md:flex-col items-center md:items-end justify-between w-full'>
                            <div className='flex flex-row mx-auto md:mx-0'>
                                <p className='px-3'>HTML</p>
                                <p className='px-3'>CSS</p>
                                <p className='px-3'>JS</p>
                                <p className='px-3'>Figma</p>
                                <p className='px-3'>React</p>
                                <p className='pl-3'>Bootstrap</p>
                            </div>
                            <div className='md:mt-2'>
                                <a href='https://jammming-by-tans.netlify.app/authenticate ' target='_blank' rel="noreferrer"><OpenInNewButton /></a>
                            </div>

                        </div>

                    </div>

                    <div className="flex justify-center md:justify-end items-stretch">
                        <img className="object-cover w:4/5 md:w-full h-60 " src="./files/jammming-project.svg" alt='Jammming website screenshot'/>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row items-stretch gap-4 mt-14 mb-16 md:mb-0">

                    <div className="flex justify-center md:justify-start items-stretch">
                        <img className="object-cover w:4/5 md:w-full h-60 " src="./files/business-website-project.svg" alt='Business website screenshot'/>
                    </div>

                    <div className=" w-full md:w-2/3 text-center md:text-start flex flex-col">
                        <div className='my-4'>
                            <h2 className='text-xl font-bold mb-2'>Business Website</h2>
                            <p>Designed and developed a static website for a business, initially prototyping in Figma and then creating a fully responsive website using front-end development technologies. Leveraged Bootstrap to ensure the site is compatible with all devices, providing an optimal user experience across various screen sizes.</p>
                        </div>

                        <hr className='border-1 border-neutral-500 mb-2'/>
                        <div className='flex flex-row md:flex-col items-center md:items-start justify-between w-full'>
                            <div className='flex flex-row mx-auto md:mx-0'>
                                <p className='pr-3'>HTML</p>
                                <p className='px-3'>CSS</p>
                                <p className='px-3'>JS</p>
                                <p className='px-3'>Figma</p>
                                <p className='px-3'>React</p>
                                <p className='px-3'>Bootstrap</p>
                            </div>
                            <div className='md:mt-2'>
                                <a href='https://tans-architecture.netlify.app/' target='_blank' rel="noreferrer"><OpenInNewButton /></a>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="flex flex-col-reverse md:flex-row items-stretch gap-4 mt-14">

                    <div className=" w-full md:w-2/3 text-center md:text-end flex flex-col mb-16 md:mb-0">
                        <div className='my-4'>
                            <h2 className='text-xl font-bold mb-2'>Appointment Planner</h2>
                            <p>A simple web application for managing contacts and appointments, featuring two pages: one for viewing and adding contacts, and another for viewing and adding appointments. Designed and developed as an exercise in utilizing React Hooks, the application demonstrates efficient state management and a robust component-based architecture.</p>
                        </div>

                        <hr className='border-1 border-neutral-500 mb-2'/>
                        <div className='flex flex-row md:flex-col items-center md:items-end justify-between w-full'>
                            <div className='flex flex-row mx-auto md:mx-0'>
                                <p className='px-3'>HTML</p>
                                <p className='px-3'>CSS</p>
                                <p className='px-3'>JS</p>
                                <p className='px-3'>Figma</p>
                                <p className='pl-3'>React</p>
                            </div>
                            <div className='md:mt-2'>
                                <a href='https://appointment-planner-by-tans.netlify.app/' target='_blank'rel="noreferrer"><OpenInNewButton /></a>
                            </div>

                        </div>

                    </div>

                    <div className="flex justify-center md:justify-end items-stretch">
                        <img className="object-cover w:4/5 md:w-full h-60 " src="./files/appointment-project.svg" alt='Appointment website screenshot'/>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Project;