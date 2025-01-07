import "bootstrap/dist/css/bootstrap.min.css";
import { Mulish } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { Row, Col } from "react-bootstrap";

export const metadata = {
  title: "Startup Consulting for Global Founders - Your Launchpad",
  description:
    "Expert consulting for early-stage startups, from business planning to funding, product development, and global expansion. Specialized services for founders navigating international growth and visa programs.",
  keywords:
    "startup, angel investors, fintech companies, startup consulting, business plan, unicorn startup, venture capital, seed funding, Canada Startup Visa, product development, business development, global expansion, startup funding, startup visa programs, product market fit",
};

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["200", "400", "700", "1000"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content="TechX Startup" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@200..1000&display=swap"
          rel="preload"
          as="style"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@200..1000&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
        <link rel="preload" href="/globals.css" as="style" />
        <link rel="stylesheet" href="/globals.css" />
        <title>{metadata.title}</title>
      </head>
      <body className={mulish.className}>
        <main>
          <Row className="h-100">
            {/* Main Content Column */}
            <Col
              className={`h-100 mainSection position-relative d-flex flex-column`}
              xs={9}
            >
              <NavBar />

              <>{children}</>
            </Col>

            {/* Sidebar Column */}
            <Col className={`newsfeedSection`} xs={3}>
              <div className="bg-warning h-100"> NEWSFEED</div>
            </Col>
          </Row>
        </main>
        <Footer />
      </body>
    </html>
  );
}
