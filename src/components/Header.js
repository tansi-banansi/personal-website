import React, { useState } from "react";
import ThemeContainer from "../containers/ThemeContainer";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-10 text-neutral-800 dark:text-neutral-100 bg-neutral-200 dark:bg-neutral-700 shadow-lg">
      <section className="max-w-5xl mx-auto p-3 flex justify-between items-center">
        <div className="flex-shrink-0">
          <a href="#hero" className="text-2xl font-bold">Todorova</a>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="w-5 h-5 mx-4 md:hidden">
            <ThemeContainer />
          </div>
          <button
            id="hamburger-button"
            className="text-2xl md:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            &#9776;
          </button>
          <nav className="hidden md:block space-x-8 text-lg" aria-label="main">
            <a className="hover:opacity-80" href="#about">about</a>
            <a className="hover:opacity-80" href="#skills">skills</a>
            <a className="hover:opacity-80" href="#journey">journey</a>
            <a className="hover:opacity-80" href="#project">project</a>
            <a className="hover:opacity-80" href="#contact">contact</a>
          </nav>
        </div>
        <div className="hidden md:flex items-center text-lg">
          <div className="w-5 h-5 mx-4">
            <ThemeContainer />
          </div>
          <a href="./files/TanyaTodorova_CV.pdf" download="TT_Resume">
            <button
              type="button"
              className="py-1 px-5 rounded-lg bg-neutral-800 text-white hover:bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-800 dark:hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-500"
            >
              Resume
            </button>
          </a>
        </div>
      </section>
      {isOpen && (
        <nav className="md:hidden bg-neutral-200 dark:bg-neutral-700">
          <ul className="flex flex-col space-y-2 px-4">
            <li><a className="hover:opacity-80" href="#about">about</a></li>
            <li><a className="hover:opacity-80" href="#skills">skills</a></li>
            <li><a className="hover:opacity-80" href="#journey">journey</a></li>
            <li><a className="hover:opacity-80" href="#project">project</a></li>
            <li><a className="hover:opacity-80" href="#contact">contact</a></li>
            <li><a href="./files/TanyaTodorova_CV.pdf" download="TT_Resume" className="hover:opacity-80">resume</a></li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Header;