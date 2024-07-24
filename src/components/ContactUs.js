import React from "react";
import { useTheme } from '../context/ThemeContext';
/*import FormContainer from "../containers/FormContainer";*/
import Form from "./Form";

const ContactUs = () => {
    const { theme } = useTheme();
    return (
      <div id="contact" className="bg-neutral-100 dark:bg-neutral-600 text-neutral-800 dark:text-white py-20">
        <div className="flex flex-col px-3 max-w-5xl mx-auto">
          <h2 className="h-5 border-b border-neutral-400 dark:border-neutral-100 text-2xl text-center">
            <span className="bg-neutral-100 dark:bg-neutral-600 px-5">Contact</span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-stretch gap-4 mt-14">
            <div className="w-full md:w-1/3 border-0 md:border-r border-neutral-500 flex flex-col items-center md:items-start space-y-4">
              <p className="text-lg font-semibold">Tanya Todorova</p>
              <a href="mailto:tanya.t.tech@gmail.com">
                <p className="hover:opacity-80">tanya.t.tech@gmail.com</p>
              </a>
              <p>London, United Kingdom</p>
              <p>+44 [0] 7471 823 334</p>
              <p>+359 [0] 88 661 0875</p>
              <div className="flex flex-row mb-3">
                <a href="https://www.linkedin.com/in/tanya-todorova-46654417a/" target='_blank' rel="noreferrer" className="mr-2">
                  <img src={theme === 'dark' ? './files/linkedin-dark-mode.svg' : './files/linkedin-light-mode.svg'} alt="LinkedIn Icon" className='size-5 hover:opacity-60 flex items-center' />
                </a>
                <a href="https://github.com/tansi-banansi" target='_blank' rel="noreferrer">
                  <img src={theme === 'dark' ? './files/github-dark-mode.svg' : './files/github-light-mode.svg'} alt="GitHub Icon" className='size-5 hover:opacity-60 flex items-center' />
                </a>
              </div>
            </div>
  
            <div className="w-full md:w-2/3">
              <Form />   
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ContactUs;





  