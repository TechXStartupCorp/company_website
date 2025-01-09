export const handleCopyClick = (textToCopy) => {
    if (typeof window !== "undefined") {
      if (navigator.clipboard) {
        if (window.location.protocol === "https:") {
          navigator.clipboard
            .writeText(textToCopy)
            .then(() => {
              alert("Text copied to clipboard!");
            })
            .catch((err) => {
              console.error("Error copying text: ", err);
            });
        } else {
          alert("Clipboard API requires a secure context (https).");
        }
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand("copy");
          alert("Text copied to clipboard!");
        } catch (err) {
          console.error("Error copying text: ", err);
        }
        document.body.removeChild(textArea);
      }
    }
  };