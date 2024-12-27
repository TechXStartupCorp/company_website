export function handleGetGuideClick() {
    console.log('Button clicked');
  
    // Check if form already exists to prevent adding it multiple times
    const existingFormContainer = document.getElementById('email-octo-form-container');
    if (existingFormContainer) {
      console.log('Form container already exists.');
      return; // Skip loading if form already exists
    }
  
    // Create and add the form container
    const formContainer = document.createElement('div');
    formContainer.id = 'email-octo-form-container';
    document.body.appendChild(formContainer);
    console.log('Form container created and added to the body');
  
    // Create the script tag that will load the form
    const script = document.createElement('script');
    script.src = 'https://eocampaign1.com/form/9aed7d28-c46c-11ef-aac9-3d4a674a74de.js'; // Use the exact URL provided by EmailOctopus
    script.async = true;
    script.setAttribute('data-form', '9aed7d28-c46c-11ef-aac9-3d4a674a74de'); // Ensure this matches your form ID
  
    // Log the script creation for debugging
    console.log('Script element created', script);
  
    // Append the script to load the form into the container
    document.body.appendChild(script);
    console.log('Script added to the DOM');
  
    // Monitor script load
    script.onload = () => {
      console.log('EmailOctopus script successfully loaded.');
      alert("Thank you! Your guide will be sent shortly.");
    };
  
    // Error handling for the script
    script.onerror = () => {
      console.error('Error loading the EmailOctopus script');
      alert("There was an issue loading the guide form. Please try again later.");
    };
  }
  
