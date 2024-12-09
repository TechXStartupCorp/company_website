import Image from "next/image";
import { Button, Container, Row, Col } from "react-bootstrap";
import CalloutSection from "../components/CalloutSection/CalloutSection";
import styles from "./page.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import Timeline from "./components/Timeline/Timeline";

export default function Home() {
  return (
    <div>
      <div className="section">
        <Container>
          <CalloutSection
            imageURL="https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg"
            alt="Beautiful landscape"
            title="The ultimate guide to Canada Startup Visa"
            text="Elevate your entrepreneurial journey with Canada’s Startup Visa Program. Our guide covers everything you need to navigate the process, secure resources, and succeed in Canada’s thriving startup ecosystem. Unlock your business's potential today!"
            primaryBtnText="Get started"
            secondBtn={false}
            doSomethingForm={true}
            doSomethingFormBtnText="Get the guide"
          />
        </Container>
      </div>
      <div className="">
        <Container>
          <h4 className="xtraBold mt-2">What is the Startup Visa Program?</h4>
          <p className="mt-4">
            The Canada Startup Visa Program is designed to attract innovative
            entrepreneurs from around the world, offering them the opportunity
            to establish and scale their businesses in Canada. By connecting
            founders with designated organizations like angel investors, venture
            capital funds, or business incubators, the program supports startups
            in accessing resources, funding, and mentorship. This initiative is
            a gateway to permanent residency, fostering innovation and economic
            growth while empowering entrepreneurs to build a strong foundation
            in Canada's dynamic business ecosystem.
          </p>
          <h4 className="xtraBold mt-5">
            What are the Benefits of the Startup Visa Program?
          </h4>
          <p className="mt-4">
            The benefits of the Startup Visa Program are significant, and they
            include:
          </p>
          <div className="mt-4">
            {[
              "Pathway to permanent residency for you and your family.",
              "Access to mentorship, funding, and resources through designated organizations.",
              "Opportunity to scale your business in Canada’s innovation-driven economy with access to global markets.",
            ].map((benefit, index) => (
              <div key={index} className="d-flex align-items-center gap-3 mt-3">
                <span className={styles.bulletPoint}></span>
                <p className="mb-0">{benefit}</p>
              </div>
            ))}
          </div>
          <p className="mt-4">
            The Startup Visa Program offers a prime opportunity for
            entrepreneurs with innovative business ideas to scale globally.
            Applicants must meet eligibility requirements, including securing
            support from a designated organization, demonstrating language
            proficiency, and proving sufficient settlement funds. With Canada's
            commitment to innovation and economic growth, it’s an ideal
            destination for startups. Leveraging expert support and a strong
            business network, entrepreneurs can navigate the program and build
            successful ventures.
          </p>
        </Container>
      </div>
      <div className="section pb-5">
        <Container>
          <h4 className="xtraBold mt-1">
            Steps to the Starter Visa application process
          </h4>
          <p className="mt-4">
            The Startup Visa application process is designed to guide you
            through each stage of launching your business in Canada. By
            following these steps, you'll receive personalized support to ensure
            that you meet all the requirements for success.
          </p>

          <Row className="g-4 mt-2">
            {[
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
                title: "Step 1: Free Eligibility Assessment",
                text: "We’re excited to offer a free assessment to help you determine your eligibility and readiness for the Startup Visa Program.",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
                title: "Step 2: Tailored Innovation Strategy",
                text: "Our approach focuses on personalization, ensuring that the innovative solutions we offer align with your background, interests, and goals.",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
                title:
                  "Step 3: Letter of Support from Designated Organizations",
                text: "A Letter of Support is a document issued by a designated organization, endorsing your innovative business idea and confirming its potential.",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
                title: "Step 4: Customized Immigration Assistance",
                text: "We provide immigration support tailored to your specific needs and circumstances, ensuring a smooth process throughout.",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
                title: "Step 5: Comprehensive Business Plan",
                text: "Our team will help craft a thorough business plan, outlining your strategic objectives, operations, and financial projections for your startup.",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
                title: "Step 6: Complete Technology Support Program",
                text: "This includes project design, road mapping, customer validation, cybersecurity, deployment, and ongoing mentoring to ensure your tech infrastructure is robust.",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
                title: "Step 7: Business Setup and Branding",
                text: "We assist with incorporating your company, building your online presence (website and social media), designing marketing materials, and more to establish your brand.",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
                title: "Step 8: Settlement Services",
                text: "Our team will help you find housing, schools, and connect with local professionals like lawyers, accountants, and banks, providing concierge services as needed when you arrive in Canada.",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
                title: "Step 9: Taking Your Business Public",
                text: "If you wish, our partners can assist in taking your successful business public, helping you secure capital through the public markets.",
              },
            ].map((step, index) => (
              <Col key={index} xs={12} sm={6} lg={4} xl={4} className="rounded">
                <div className="customCard">
                  <div className="imgContainer position-relative">
                    <Image
                      src={step.image}
                      alt={step.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded"
                    />
                  </div>
                  <div>
                    <h5 className="xtraBold mt-3">{step.title}</h5>
                    <p className="text-secondary">{step.text}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className="section lightGreyContainerBG">
        <Container>
          <h4 className="xtraBold mb-1">Timeline</h4>
          <div className="d-flex text-primary gap-3 align-items-center text-uppercase fw-bold">
            <small>Concept</small>
            <FaArrowRightLong />
            <small>Achievement</small>
          </div>
          <div className="d-flex mt-4 flex-column align-items-center">
            {/* <h3 className="xtraBold">Startup Journey Timeline</h3>
            <p className="mt-1">Here’s a clear breakdown of the steps and timelines ahead</p> */}
            <Timeline />
          </div>
        </Container>

      </div>
    </div>
  );
}
