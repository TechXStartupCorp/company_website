"use client";

import React, { useState, useEffect } from "react";
import { Form, Alert, Toast, ToastContainer } from "react-bootstrap";
import { MdOutlineEmail } from "react-icons/md";
import CustomBtn from "@/app/components/CustomBtn/CustomBtn";
import { send } from "emailjs-com";
import styles from "./DoSomethingForm.module.css";

const DoSomethingForm = ({ text }) => {
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [statusVariant, setStatusVariant] = useState("success");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage(""); // Reset status message

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_SUBSCRIBE_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      console.error("Missing EmailJS configuration.");
      alert("Email configuration is missing. Please contact support.");
      return;
    }

    const templateParams = {
      to_name: "TechX Startup", // Name of the business or your email recipient
      from_email: email,
    };

    try {
      const result = await send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );
      console.log("Email sent successfully:", result.text);
      setStatusMessage("Successfully subscribed!");
      setStatusVariant("success");
      setEmail(""); // Clear the email input after submission
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatusMessage("Subscription failed. Please try again.");
      setStatusVariant("danger");
    }
  };

  // Auto-dismiss alert after 3 seconds
  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => {
        setStatusMessage(""); // Clear the message after 3 seconds
      }, 4000); // 3 seconds delay
      return () => clearTimeout(timer); // Cleanup timeout on unmount or change
    }
  }, [statusMessage]);

  return (
    <>
      <Form className={`${styles.form}`} onSubmit={handleSubmit}>
        <div className={`${styles.formContainer} position-relative`}>
          <MdOutlineEmail
            className={`${styles.emailIcon} fs-5 text-secondary position-absolute`}
          />
          <Form.Control
            type="email"
            placeholder="Your email"
            value={email}
            onChange={handleEmailChange}
            className={`${styles.customInput}`}
            required
          />
          {/* ps-5 pt-2 pb-2 pe-2 */}
          <div className={`${styles.btnContainer}`}>
            <CustomBtn variant="primary" text={text} />
          </div>
        </div>
      </Form>
      {/* <Form className={`${styles.form} d-flex`} onSubmit={handleSubmit}>
        <div className={`${styles.formContainer} position-relative d-flex`}>
          <MdOutlineEmail
            className={`${styles.emailIcon} fs-5 text-secondary position-absolute`}
            style={{ top: "50%", left: "10px", transform: "translateY(-50%)" }}
          />
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            className={`${styles.customInput} ps-5 pt-2 pb-2 pe-2`}
            required
          />
          <div className={`${styles.btnContainer} position-absolute`}>
            <CustomBtn variant="primary" text={text} />
          </div>
        </div>
      </Form> */}
      {statusMessage && (
        <Alert className={`${styles.alert} mt-3`} ariant={statusVariant}>
          {statusMessage}
        </Alert>
      )}
    </>
  );
};

export default DoSomethingForm;

// "use client";

// import React, { useState } from "react";
// import { Form, Alert } from "react-bootstrap";
// import { MdOutlineEmail } from "react-icons/md";
// import CustomBtn from "@/app/components/CustomBtn/CustomBtn";
// import styles from "./DoSomethingForm.module.css";

// const DoSomethingForm = ({ text }) => {
//   const [email, setEmail] = useState("");
//   const [statusMessage, setStatusMessage] = useState("");
//   const [statusVariant, setStatusVariant] = useState("success");

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatusMessage("");

//     const response = await fetch("http://192.168.0.11:3001/api/subscribe", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email }),
//     });

//     const result = await response.json();

//     if (response.ok) {
//       setStatusMessage("Successfully subscribed!");
//       setStatusVariant("success");
//     } else {
//       setStatusMessage(
//         result.message || "Subscription failed. Please try again."
//       );
//       setStatusVariant("danger");
//     }
//   };

//   return (
//     <>
//       <Form className={`${styles.form} d-flex`} onSubmit={handleSubmit}>
//         <div className={`${styles.formContainer} position-relative d-flex`}>
//           <MdOutlineEmail
//             className={`${styles.emailIcon} fs-5 text-secondary position-absolute`}
//             style={{ top: "50%", left: "10px", transform: "translateY(-50%)" }}
//           />
//           <Form.Control
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={handleEmailChange}
//             className={`${styles.customInput} ps-5 pt-2 pb-2 pe-2`}
//             required
//           />
//           <div className={`${styles.btnContainer} position-absolute`}>
//             <CustomBtn variant="primary" text={text} />
//           </div>
//         </div>
//       </Form>
//       {statusMessage && (
//         <Alert variant={statusVariant} className="mt-3">
//           {statusMessage}
//         </Alert>
//       )}
//     </>
//   );
// };

// export default DoSomethingForm;
