import React, {useState} from 'react';
import Form from '../components/Form';

const FormContainer = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString()
    })
      .then(() => setIsSubmitted(true))
      .catch((error) => alert(error));
  };

  if (isSubmitted) {
    return <p className="text-center text-lg font-medium">Thank you! Your message has been sent.</p>;
  }

  return (
    <Form 
      formState={formState} 
      handleChange={handleChange} 
      handleSubmit={handleSubmit} 
    />
  );




};

export default FormContainer;