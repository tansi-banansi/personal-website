import React from "react";

const Form = ({ formState, handleChange, handleSubmit }) => {
  return (
    <form
      className="flex flex-col space-y-6"
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />

      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
        <div className="flex flex-col space-y-2 flex-1">
          <label htmlFor="name" className="text-lg font-medium text-neutral-700 dark:text-neutral-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="p-2 dark:bg-neutral-700 rounded-lg border border-neutral-300 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-500 shadow-sm"
            value={formState.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col space-y-2 flex-1">
          <label htmlFor="email" className="text-lg font-medium text-neutral-700 dark:text-neutral-300">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Eg. example@email.com"
            className="p-2 dark:bg-neutral-700 rounded-lg border border-neutral-300 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-500 shadow-sm"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="message" className="text-lg font-medium text-neutral-700 dark:text-neutral-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Write me a message"
          className="p-2 dark:bg-neutral-700 rounded-lg border border-neutral-300 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-500 shadow-sm"
          value={formState.message}
          onChange={handleChange}
          required
        />
      </div>

      <button
        type="submit"
        className="py-2 px-4 rounded-lg bg-neutral-800 text-white hover:bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-800 dark:hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-500"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;