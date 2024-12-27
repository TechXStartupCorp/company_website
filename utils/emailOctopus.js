export function handleGetGuideClick() {
    const script = document.createElement("script");
    script.src = "https://eocampaign1.com/form/9aed7d28-c46c-11ef-aac9-3d4a674a74de.js"; // The script URL provided by EmailOctopus
    script.async = true;
    script.setAttribute("data-form", "9aed7d28-c46c-11ef-aac9-3d4a674a74de");  // Your form ID
  
    // Append the script to the document body
    document.body.appendChild(script);
  
    script.onload = () => {
      // After the script is loaded, confirm subscription or show a success message
      alert("Thank you! Your guide will be sent shortly.");
    };
  }
  