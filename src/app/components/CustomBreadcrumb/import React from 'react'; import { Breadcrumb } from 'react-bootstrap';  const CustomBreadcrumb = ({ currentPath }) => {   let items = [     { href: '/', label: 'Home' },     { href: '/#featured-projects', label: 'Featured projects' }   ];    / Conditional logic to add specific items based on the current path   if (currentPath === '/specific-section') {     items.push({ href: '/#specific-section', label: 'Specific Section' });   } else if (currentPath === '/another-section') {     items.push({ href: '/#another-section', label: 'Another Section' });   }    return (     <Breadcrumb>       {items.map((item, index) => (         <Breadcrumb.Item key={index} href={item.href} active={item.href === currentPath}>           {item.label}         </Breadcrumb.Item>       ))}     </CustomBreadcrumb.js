import React, { useState, useEffect } from "react";
import { Breadcrumb } from "react-bootstrap";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CustomBreadcrumb = () => {
  const router = useRouter();
  const [breadcrumbItems, setBreadcrumbItems] = useState([]);

  console.log(router.pathname, "router path name");

  useEffect(() => {
    if (!router || !router.pathname) return;

    const pathSegments = router.pathname
      .split("/")
      .filter((segment) => segment.length > 0);

    // Create breadcrumb items
    const items = pathSegments.map((segment, index) => {
      const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
      const formattedLabel = segment
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
      const isActive = index === pathSegments.length - 1;

      return {
        href: href,
        label: formattedLabel,
        active: isActive,
      };
    });

    // Add Home as the first item in the breadcrumb
    setBreadcrumbItems([{ href: "/", label: "Home" }, ...items]);
  }, [router.pathname]);

  return (
    <Breadcrumb>
      {breadcrumbItems.map((item, index) => (
        <Breadcrumb.Item key={index} active={item.active}>
          {item.active ? (
            item.label
          ) : (
            <Link href={item.href} passHref>
              <a className="text-dark fw-bold text-decoration-none py-2 px-3 rounded">
                {item.label}
              </a>
            </Link>
          )}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;

// const CustomBreadcrumb = ({ currentPath }) => {
//   const pathSegments = currentPath
//     .split("/")
//     .filter((segment) => segment.length > 0);

//   let items = [{ href: "/", label: "Home" }];

//   pathSegments.forEach((segment, index) => {
//     const formattedLabel = segment
//       .replace(/-/g, " ")
//       .replace(/\b\w/g, (l) => l.toUpperCase()); // Convert dashes to spaces and capitalize each word
//     const href = `/${pathSegments.slice(0, index + 1).join("/")}`;

//     const isActive = index === pathSegments.length - 1;

//     items.push({
//       href: href,
//       label: formattedLabel,
//       active: isActive,
//     });
//   });

//   return (
//     <Breadcrumb>
//       {items.map((item, index) => (
//         <Breadcrumb.Item key={index} href={item.href} active={item.active}>
//           {item.label}
//         </Breadcrumb.Item>
//       ))}
//     </Breadcrumb>
//   );
// };

// export default CustomBreadcrumb;
