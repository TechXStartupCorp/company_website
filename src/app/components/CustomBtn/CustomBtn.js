
import React from "react";
import { Button } from "react-bootstrap";
import Link from "next/link"; // For internal routing with Next.js
import styles from "./CustomBtn.module.css";

const CustomBtn = ({
  text,
  variant,
  fullWidth,
  thickerPadding,
  type,
  link,
  icon,
  onClick, // function
  isLinkExternal, // boolean to differentiate external/internal links
}) => {
  const buttonClasses = `${styles.customBtn} ${
    thickerPadding ? "thickerWideBTN" : "px-3 py-2"
  } fw-bold d-flex justify-content-center align-items-center ${
    fullWidth && "w100BTN"
  }`;

  if (link) {
    if (isLinkExternal) {
      // External link with target="_blank"
      return (
        <a
          className={`text-decoration-none ${buttonClasses}`}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon && icon}
          {text}
        </a>
      );
    } else {
      // Internal link using Next.js Link without nested <a>
      return (
        <Link className="text-decoration-none" href={link} passHref>
          <Button variant={variant} className={buttonClasses}>
            {icon && icon}
            {text}
          </Button>
        </Link>
      );
    }
  }

  // Fallback to rendering just the button
  return (
    <Button
      onClick={onClick}
      type={type ? "submit" : undefined}
      variant={variant}
      className={buttonClasses}
    >
      {icon && icon}
      {text}
    </Button>
  );
};

export default CustomBtn;


// import React from "react";
// import { Button } from "react-bootstrap";
// import styles from "./CustomBtn.module.css";

// const CustomBtn = ({
//   text,
//   variant,
//   fullWidth,
//   thickerPadding,
//   type,
//   link,
//   icon,
//   onClick, 
//   isLinkExternal, 
// }) => {
//   const buttonContent = (
//     <Button
//       onClick={onClick}
//       type={type ? "submit" : undefined}
//       variant={variant}
//       className={`${styles.customBtn} ${
//         thickerPadding ? "thickerWideBTN" : "px-3 py-2"
//       } fw-bold d-flex justify-content-center align-items-center ${
//         fullWidth && "w100BTN"
//       }`}
//     >
//       {icon && icon}
//       {text}
//     </Button>
//   );

//   return link ? (
//     <a
//       className="text-decoration-none"
//       target="_blank"
//       href={link}
//       rel="noopener noreferrer"
//     >
//       {buttonContent}
//     </a>
//   ) : (
//     buttonContent
//   );
// };

// export default CustomBtn;
