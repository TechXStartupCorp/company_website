'use client'; // Ensure this component runs on the client side

import React, { useState } from 'react';

const SubscribeButton = () => {
  const [formLoaded, setFormLoaded] = useState(false);

  const loadEmailOctopusForm = () => {
    if (formLoaded) return; 

    if (typeof window !== 'undefined') {
     
      const formContainer = document.createElement('div');
      document.body.appendChild(formContainer); 

      console.log('Form container created:', formContainer);

      // Dynamically load the EmailOctopus script (Only on the client)
      const script = document.createElement('script');
      script.src = 'https://eocampaign1.com/form/9aed7d28-c46c-11ef-aac9-3d4a674a74de.js'; // Update with your form URL
      script.async = true;
      script.setAttribute('data-form', '9aed7d28-c46c-11ef-aac9-3d4a674a74de'); // Your unique form ID
      // script.setAttribute('crossorigin', 'anonymous'); 
      document.body.appendChild(script); // Script inserted

      // Log the script loading process
      script.onload = () => {
        console.log('EmailOctopus script loaded!');
        alert('Thank you for subscribing! Your guide will be sent shortly.');
        setFormLoaded(true); // Only set form loaded once script finishes loading
      };

      script.onerror = () => {
        console.error('Error loading the EmailOctopus script!');
        alert('There was an issue loading the form. Please try again.');
      };
    }
  };

  const handleButtonClick = () => {
    console.log('Button clicked - Get the Guide clicked!');
    loadEmailOctopusForm(); // Trigger form loading on button click
  };

  return (
    <button onClick={handleButtonClick}>
      Get the Guide
    </button>
  );
};

export default SubscribeButton;
