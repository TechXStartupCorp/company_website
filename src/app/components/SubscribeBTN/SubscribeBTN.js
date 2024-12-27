"use client"
import React, { useState, useEffect } from 'react';

const SubscribeButton = () => {
  const [formLoaded, setFormLoaded] = useState(false);

  useEffect(() => {
    if (formLoaded) return; // Avoid reloading the form multiple times

    const loadEmailOctopusForm = () => {
      // Create the form container (without using ID)
      const formContainer = document.createElement('div');
      document.body.appendChild(formContainer); // Form container inserted

      console.log('Form container created:', formContainer);

      // Dynamically load the EmailOctopus script (Only on the client)
      const script = document.createElement('script');
      script.src = 'https://eocampaign1.com/form/9aed7d28-c46c-11ef-aac9-3d4a674a74de.js'; // Update with your form URL
      script.async = true;
      script.setAttribute('data-form', '9aed7d28-c46c-11ef-aac9-3d4a674a74de'); // Your unique form ID
      document.body.appendChild(script); // Script inserted

      // Log the script loading process
      script.onload = () => {
        console.log('EmailOctopus script loaded!'); 
        setFormLoaded(true); // Only set form loaded once script finishes loading
      };
     
      script.onerror = () => {
        console.error('Error loading the EmailOctopus script!');
        alert('There was an issue loading the form. Please try again.');
      };
    };

    // Load form only once on the client side after component mounts
    loadEmailOctopusForm();

  }, [formLoaded]); // Empty array ensures this only runs once

  return (
    <button onClick={() => { console.log('Button clicked - Get the Guide clicked!') }}>
      Get the Guide
    </button>
  );
};

export default SubscribeButton;
