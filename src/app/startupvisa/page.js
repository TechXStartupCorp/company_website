import Image from "next/legacy/image";
import { Container, Row, Col } from "react-bootstrap";
import CalloutSection from "../components/CalloutSection/CalloutSection";
import { FaArrowRightLong } from "react-icons/fa6";
import Timeline from "./components/Timeline/Timeline";
import CTAWithImage from "../components/CTAWithImage/CTAWithImage";
import { startupVisaFormLink } from "../data/Links";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div>
        <CalloutSection
          imageURL="https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733946921/sigmund-Fa9b57hffnM-unsplash_vexrzz.jpg"
          alt="Tech office team"
          title="The Ultimate Guide to Canada's Startup Visa Program"
          text="Explore how to successfully apply for Canada's Startup Visa and transform your entrepreneurial dreams into reality. Our comprehensive guide provides step-by-step instructions, essential resources, and insights on the Canada Startup Visa process. Start your journey to success in Canada's dynamic startup ecosystem today!"
          primaryBtnText="Get started"
          secondBtn={false}
          doSomethingForm={true}
          doSomethingFormBtnText="Get the guide"
        />
      </div>
      <div className="section">
        <Container>
          <h4 className="xtraBold mt-2">
            What is the Canada Startup Visa Program?
          </h4>
          <p className="mt-4">
            The Canada Startup Visa Program is designed to attract innovative
            entrepreneurs and help them build successful startups in Canada. By
            connecting founders with designated organizations, including angel
            investors, venture capital funds, and business incubators, the
            program provides access to essential resources, mentorship, and
            funding. As a pathway to permanent residency, it enables
            entrepreneurs to grow their businesses and contribute to Canada
            &apos;s vibrant startup ecosystem. Leverage this opportunity to turn
            your vision into a thriving venture in one of the world&apos;s most
            entrepreneurial countries.
          </p>
          <h4 className="xtraBold mt-5">
            What Are the Key Benefits of the Canada Startup Visa Program?
          </h4>
          <p className="mt-4">
            The Canada Startup Visa Program offers numerous advantages for
            entrepreneurs looking to establish and scale their businesses. Key
            benefits include:
          </p>
          <div className="mt-4">
            {[
              "Pathway to permanent residency in Canada for you and your family through the Startup Visa Program.",
              "Access to expert mentorship, funding, and invaluable resources through Canada's designated organizations.",
              "Opportunity to scale your startup in Canada’s innovation-driven economy, with access to global markets and growth potential.",
            ].map((benefit, index) => (
              <div key={index} className="d-flex align-items-center gap-3 mt-3">
                <span className="bulletPoint"></span>
                <p className="mb-0">{benefit}</p>
              </div>
            ))}
          </div>
          &apos;
          <p className="mt-4">
            The Canada Startup Visa Program presents a prime opportunity for
            entrepreneurs with innovative business ideas to scale globally. To
            qualify, applicants must meet key eligibility criteria, including
            securing backing from a designated organization, proving language
            proficiency, and demonstrating sufficient settlement funds. As
            Canada continues to foster innovation and economic growth, it serves
            as an ideal destination for startups. With expert guidance and
            access to a robust business network, entrepreneurs can navigate the
            Startup Visa Program and build successful, scalable ventures in
            Canada
          </p>
        </Container>
      </div>
      <div className="section pb-5">
        <Container>
          <h4 className="xtraBold mt-1">
            Steps to the Canada Startup Visa Application Process
          </h4>
          <p className="mt-4">
            The Canada Startup Visa application process is designed to guide
            entrepreneurs through each stage of launching their business in
            Canada. By following these steps, you&apos;ll receive personalized
            support to meet all requirements, ensuring a smooth and successful
            application. This process connects you with the right resources and
            opportunities to build your startup in Canada&apos;s thriving
            economy.
          </p>

          <Row className="g-4 mt-2">
            {[
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733946288/usman-yousaf-qlkOZY-5dZ8-unsplash_hra5oa.jpg",
                title: "Step 1: Free Eligibility Assessment",
                text: "Start your journey with a free eligibility assessment for the Canada Startup Visa program, designed to evaluate your readiness to join the global startup ecosystem.",
                tags: [
                  "Eligibility",
                  "Canada Startup Visa",
                  "Free Consultation",
                ],
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1734027613/startae-team-7tXA8xwe4W4-unsplash_mzlkjh.jpg",
                title: "Step 2: Tailored Innovation Strategy",
                text: "We create a personalized innovation strategy to ensure alignment with your background and goals, paving the way for success in the Canada Startup Visa program.",
                tags: ["Innovation", "Startup Company", "Personalization"],
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1734025762/pexels-olly-3756678_wf0x82.jpg",
                title:
                  "Step 3: Letter of Support from Designated Organizations",
                text: "Secure your Letter of Support from designated organizations, a critical step in validating your startup idea for the Canada Startup Visa process.",
                tags: ["Support Letter", "Canada Startup Visa", "Validation"],
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1734026121/pexels-valentinantonucci-1275393_nss2do.jpg",
                title: "Step 4: Customized Immigration Assistance",
                text: "Receive tailored immigration assistance to navigate the Canada Startup Visa application process smoothly and efficiently.",
                tags: [
                  "Immigration Support",
                  "Startup Visa Program",
                  "Customization",
                ],
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1734026552/pexels-mikael-blomkvist-6476799_h5uo2k.jpg",
                title: "Step 5: Comprehensive Business Plan",
                text: "Develop a comprehensive business plan that outlines strategic objectives, financial projections, and operations, crucial for startup success and funding.",
                tags: ["Business Plan", "Startup Funding", "Strategy"],
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1734026660/pexels-pixabay-416405_yetmwo.jpg",
                title: "Step 6: Complete Technology Support Program",
                text: "Leverage robust technology support, including road mapping, customer validation, and cybersecurity, to ensure your startup thrives.",
                tags: [
                  "Technology Support",
                  "Validation",
                  "Product Development",
                ],
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1734026969/pexels-pixabay-39284_jvvaor.jpg",
                title: "Step 7: Business Setup and Branding",
                text: "Incorporate your startup, build your brand with effective marketing strategies, and establish your online presence to attract investors and customers.",
                tags: ["Startup Company", "Branding", "Marketing"],
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1734027078/pexels-cottonbro-4569340_ip3cht.jpg",
                title: "Step 8: Settlement Services",
                text: "Simplify your transition to Canada with settlement services, including housing, school placement, and professional networking support.",
                tags: ["Settlement Services", "Canada Startup Visa", "Housing"],
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1734027382/pexels-jamalyahyayev-3671394_isukyn.jpg",
                title: "Step 9: Taking Your Business Public",
                text: "Explore opportunities to take your startup public, securing capital and growth through partnerships with expert advisors.",
                tags: ["Startup Funding", "Public Markets", "Partnerships"],
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
                      <p className="textBlue mt-3">{step.text}</p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      {/* <div
        className={`${styles.timeLineContainer} section lightGreyContainerBG`}
      >
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
      </div> */}
      <div className="section">
        <Container>
          <h4 className="mt-3 xtraBold">
            Which Industries Qualify for the Canada Startup Visa Program?
          </h4>
          <p className="mt-4">
            The Canada Startup Visa Program welcomes startups from a diverse
            range of industries, including information technology, healthcare,
            manufacturing, agriculture, and consumer goods. This broad
            eligibility supports innovative business ideas across various
            sectors. Whether your startup specializes in one of these fields or
            operates in another high-potential industry, the program offers
            opportunities to bring your vision to life in Canada. Apply today
            and discover how the Canada Startup Visa Program can help turn your
            entrepreneurial dreams into reality.
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
          header="Apply for the Canada Startup Visa Today"
          text="Take the first step toward launching your innovative startup in Canada through the Canada Startup Visa Program. With Tech X Startup's seamless application platform, you can begin your journey to business success and permanent residency. Don't wait—apply now and turn your entrepreneurial vision into reality."
          img="https://res.cloudinary.com/dq8ii6nbc/image/upload/v1734035019/headway-jfR5wu2hMI0-unsplash_y5u9fa.jpg"
          alt="Entrepreneur working on a computer"
          btnText="Apply now"
          imageAlign="left"
          link={startupVisaFormLink}
        />
      </div>
    </div>
  );
}
