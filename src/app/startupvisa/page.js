import Image from "next/image";
import { Container, Row, Col, Badge } from "react-bootstrap";
import CalloutSection from "../components/CalloutSection/CalloutSection";
import styles from "./page.module.css";
import SectionWithHeaderAndText from "../components/SectionWithHeaderAndText/SectionWithHeaderAndText";
import { FaArrowRightLong } from "react-icons/fa6";
import Timeline from "./components/Timeline/Timeline";
import CTAWithImage from "../components/CTAWithImage/CTAWithImage";
import { calendlyLink } from "../data/CalendlyLink";

export default function Home() {
  return (
    <div>
      <div>
        <CalloutSection
          imageURL="https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733946921/sigmund-Fa9b57hffnM-unsplash_vexrzz.jpg"
          alt="Tech office team"
          title="The ultimate guide to Canada Startup Visa"
          text="Elevate your entrepreneurial journey with Canada's Startup Visa Program. Our guide covers everything you need to navigate the process, secure resources, and succeed in Canada's thriving startup ecosystem. Unlock your business's potential today!"
          primaryBtnText="Get started"
          secondBtn={false}
          doSomethingForm={true}
          doSomethingFormBtnText="Get the guide"
        />
      </div>
      <div className="section">
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
            in Canada&apos;s dynamic business ecosystem.
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
              "Opportunity to scale your business in Canada's innovation-driven economy with access to global markets.",
            ].map((benefit, index) => (
              <div key={index} className="d-flex align-items-center gap-3 mt-3">
                <span className="bulletPoint"></span>
                <p className="mb-0">{benefit}</p>
              </div>
            ))}
          </div>
          <p className="mt-4">
            The Startup Visa Program offers a prime opportunity for
            entrepreneurs with innovative business ideas to scale globally.
            Applicants must meet eligibility requirements, including securing
            support from a designated organization, demonstrating language
            proficiency, and proving sufficient settlement funds. With
            Canada&apos;s commitment to innovation and economic growth,
            it&apos;s an ideal destination for startups. Leveraging expert
            support and a strong business network, entrepreneurs can navigate
            the program and build successful ventures.
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
            following these steps, you&apos;ll receive personalized support to
            ensure that you meet all the requirements for success.
          </p>

          <Row className="g-4 mt-2">
            {[
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733946288/usman-yousaf-qlkOZY-5dZ8-unsplash_hra5oa.jpg",
                title: "Step 1: Free Eligibility Assessment",
                text: "We are excited to offer a free assessment to help you determine your eligibility and readiness for the Startup Visa Program.",
                tags: ["Eligibility", "Assessment", "Free Consultation"],
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1734027613/startae-team-7tXA8xwe4W4-unsplash_mzlkjh.jpg",
                title: "Step 2: Tailored Innovation Strategy",
                text: "Our approach focuses on personalization, ensuring that the innovative solutions we offer align with your background, interests, and goals.",
                tags: ["Innovation", "Personalization", "Strategy"],
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1734025762/pexels-olly-3756678_wf0x82.jpg",
                title:
                  "Step 3: Letter of Support from Designated Organizations",
                text: "A Letter of Support is a document issued by a designated organization, endorsing your innovative business idea and confirming its potential.",
                tags: ["Endorsement", "Support Letter", "Validation"],
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1734026121/pexels-valentinantonucci-1275393_nss2do.jpg",
                title: "Step 4: Customized Immigration Assistance",
                text: "We provide immigration support tailored to your specific needs and circumstances, ensuring a smooth process throughout.",
                tags: ["Immigration Support", "Customization"],
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1734026552/pexels-mikael-blomkvist-6476799_h5uo2k.jpg",
                title: "Step 5: Comprehensive Business Plan",
                text: "Our team will help craft a thorough business plan, outlining your strategic objectives, operations, and financial projections for your startup.",
                tags: ["Business Plan", "Strategy", "Financial Projections"],
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1734026660/pexels-pixabay-416405_yetmwo.jpg",
                title: "Step 6: Complete Technology Support Program",
                text: "This includes project design, road mapping, customer validation, cybersecurity, deployment, and ongoing mentoring to ensure your tech infrastructure is robust.",
                tags: ["Project Design", "Road Mapping", "Validation"],
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1734026969/pexels-pixabay-39284_jvvaor.jpg",
                title: "Step 7: Business Setup and Branding",
                text: "We assist with incorporating your company, building your online presence (website and social media), designing marketing materials, and more to establish your brand.",
                tags: ["Incorporation", "Marketing", "Branding"],
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1734027078/pexels-cottonbro-4569340_ip3cht.jpg",
                title: "Step 8: Settlement Services",
                text: "Our team will help you find housing, schools, and connect with local professionals like lawyers, accountants, and banks, providing concierge services as needed when you arrive in Canada.",
                tags: ["Housing", "School Placement", "Settlement"],
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1734027382/pexels-jamalyahyayev-3671394_isukyn.jpg",
                title: "Step 9: Taking Your Business Public",
                text: "If you wish, our partners can assist in taking your successful business public, helping you secure capital through the public markets.",
                tags: ["Expansion", "Public Markets", "Partnerships"],
              },
            ].map((step, index) => (
              <Col key={index} xs={12} sm={6} lg={4} xl={4} className="rounded">
                <div className="d-flex flex-column">
                  <div className="customCard">
                    <div className="imgContainer position-relative">
                      <Image
                        src={step.image}
                        alt={step.title}
                        layout="fill"
                        // objectFit="cover"
                        className="rounded"
                      />
                    </div>
                    <div>
                      <h5 className="xtraBold mt-3">{step.title}</h5>
                      <p className="text-secondary mt-3">{step.text}</p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className="section lightGreyContainerBG">
        <Container>
          <h5 className="xtraBold mb-1 mt-3">Timeline</h5>
          <div className="d-flex text-primary gap-3 align-items-center mt-2 fw-bold mt-1">
            <p className="mb-0">Concept</p>
            <FaArrowRightLong />
            <p className="mb-0">Achievement</p>
          </div>
          <div className="d-flex mt-4 flex-column align-items-center">
            <h3 className="xtraBold">Startup Journey Timeline</h3>
            <p className="mt-1">
              Here&apos;s a clear breakdown of the steps and timelines ahead
            </p>
            <div className="mt-5 pb-5">
              <Timeline />
            </div>
          </div>
        </Container>
      </div>
      <div className="section">
        <Container>
          <h4 className="mt-3 xtraBold">What industries are accepted?</h4>
          <p className="mt-4">
            The Canada Startup Visa Program is open to a variety of industries,
            including but not limited to information technology, healthcare,
            manufacturing processes, agriculture, and consumer goods. This
            diverse acceptance allows for a wide range of innovative ideas and
            business models to be considered. If your startup is in one of these
            sectors or another promising industry, we encourage you to apply and
            explore the opportunities available through the Canada Startup Visa
            Program
          </p>
          <Row className="g-4 mt-4">
            {[
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1734034154/pexels-cottonbro-5483064_kvts1q.jpg",
                alt: "Information technology industry",
                title: "Information technology",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1734034320/hush-naidoo-jade-photography-ZCO_5Y29s8k-unsplash_vnc9rq.jpg",
                alt: "Healthcare industry",
                title: "Healthcare",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1734034440/cemrecan-yurtman-ox5Dv5QD3-8-unsplash_px2bpf.jpg",
                alt: "Manufacturing",
                title: "Manufacturing",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1734034470/pexels-timmossholder-974314_qzc2gb.jpg",
                alt: "Agriculture industry",
                title: "Agriculture",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1734034541/pexels-phaseexit-3028500_s8owo8.jpg",
                alt: "Consumer goods industry",
                title: "Consumer goods",
              },
            ].map((industry, index) => (
              <Col key={index} xs={12} sm={6} lg={2} xl={2} className="rounded">
                <div className="customCard">
                  <div className="imgContainer position-relative">
                    <Image
                      src={industry.image}
                      alt={industry.alt}
                      layout="fill"
                      objectFit="cover"
                      className="rounded"
                    />
                  </div>
                  <div>
                    <h5 className="xtraBold mt-3">{industry.title}</h5>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      {/* //// testimonial section, to be finished later */}
      {/* <div className="section lightGreyContainerBG">
        <Container className="d-flex flex-column align-items-center justify-content-center">
          <h3 className="xtraBold mt-3">What People Are Saying About Us</h3>
          <p className="mt-1">
            Discover what makes us special through the words of those who know
            us best.
          </p>
          <Row className="g-4 mt-3">
            {[
              {
                text: "Absolutely amazing experience! Everything exceeded my expectations, and I couldn't be happier with the results.",
                name: "John Smith, Founder of XYZ Startup",
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
              },
              {
                text: "The team was incredibly professional and delivered beyond my expectations. I’m thrilled with the outcome!",
                name: "Jane Doe, CEO of ABC Corporation",
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
              },
              {
                text: "A wonderful experience from start to finish. The quality and attention to detail were outstanding.",
                name: "Robert Brown, Creative Director at LMN Agency",
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
              },
            ].map((testimonial, index) => (
              <Col
                key={index}
                xs={12}
                sm={6}
                lg={4}
                className="d-flex align-items-center"
              >
                <div
                  className={`${styles.testimonialBox} d-flex flex-column align-items-center`}
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <p className="fw-semibold">{testimonial.text}</p>
                  </div>
                  <span></span>
                  <Image
                    className="mt-3 rounded-circle"
                    src={testimonial.image}
                    alt={testimonial.name}
                    width="50"
                    height="50"
                  />
                  <p className="mt-2 text-secondary">{testimonial.name}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div> */}
      <div className="section pb-5">
        <CTAWithImage
          header="Apply for the Startup Visa today"
          text="Apply for the Startup Visa today! You don't have to wait—start your application process directly through the Tech X Startup platform. Take the next step towards realizing your entrepreneurial vision by applying now."
          img="https://res.cloudinary.com/dq8ii6nbc/image/upload/v1734035019/headway-jfR5wu2hMI0-unsplash_y5u9fa.jpg"
          alt="guy on computer"
          btnText="Apply now"
          imageAlign="left"
          // link={calendlyLink}
        />
      </div>
    </div>
  );
}
