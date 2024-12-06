import Image from "next/image";
import { Button, Container, Row, Col } from "react-bootstrap";
import CalloutSection from "../components/CalloutSection/CalloutSection";
import CTAWithImage from "../components/CTAWithImage/CTAWithImage";
import SectionWithHeaderAndText from "../components/SectionWithHeaderAndText/SectionWithHeaderAndText";

export default function Home() {
  return (
    <div>
      <CalloutSection
        imageURL="https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg"
        alt="Beautiful landscape"
        title="Our Mission: Empowering Innovation and Growth"
        text="We are committed to providing the resources, guidance, and community support needed to navigate the complex journey of building a successful startup. From expert mentorship to exclusive insights on the Canada Startup Visa Program, we are your partner in success. Become part of a community that’s shaping the future of innovation."
        primaryBtnText="Join our team"
        secondBtn={false}
      />
      <div className="section">
        <Container>
          <h2 className="xtraBold mt-3">A brief history of Tech X Startup</h2>
          <p className="mt-4">
            Tech X Startup began with a mission to empower aspiring
            entrepreneurs worldwide. Since our inception, we’ve grown from a
            small team of passionate innovators to a thriving network of startup
            enthusiasts, mentors, and industry experts. Over the years, we’ve
            helped countless startups navigate the complexities of the Canada
            Startup Visa Program, establish strong foundations, and scale their
            ideas into successful ventures. Our journey is fueled by a
            commitment to innovation, collaboration, and supporting the next
            generation of visionary leaders.
          </p>
          <Row className="g-4 mt-2">
            {[
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
                title: "2021",
                text: "Tech X Startup is born.",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
                title: "2022",
                text: "First successful startup mentorship.",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
                title: "2023",
                text: "Expanded global reach.",
              },
            ].map((item, index) => (
              <Col key={index} xs={12} sm={6} lg={4} xl={4} className="rounded">
                <div className="customCard">
                  <div className="imgContainer position-relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded"
                    />
                  </div>
                  <div>
                    <h5 className="xtraBold mt-3">{item.title}</h5>
                    <p className="text-secondary">{item.text}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <SectionWithHeaderAndText
        header="Our Approach: How We Work Closely With Our Clients to Drive Success"
        textAlign="right"
        btnText="Get started"
        text="At Tech X Startup, we partner with you at every step of your startup’s journey. From Pre-LOS training for the Canada Startup Visa to refining business ideas, crafting solid plans, and designing pitch decks, we equip you with the tools and expertise for success. Our team ensures compliance, builds financial models, and supports your growth with strategic marketing, prototyping, and IP protection. We’re here to help you turn your vision into reality."
      />
      <div className="section">
        <Container>
          <h3 className="xtraBold mt-3">Meet our team</h3>
          <Row className="g-4 mt-2">
            {[
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
                name: "Name X",
                text: "Position at company",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
                name: "Name X",
                text: "Position at company",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
                name: "Name X",
                text: "Position at company",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
                name: "Name X",
                text: "Position at company",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
                name: "Name X",
                text: "Position at company",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
                name: "Name X",
                text: "Position at company",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
                name: "Name X",
                text: "Position at company",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
                name: "Name X",
                text: "Position at company",
              },
            ].map((item, index) => (
              <Col key={index} xs={12} sm={6} lg={3} xl={3} className="rounded">
                <div className="customCard">
                  <div className="imgContainer position-relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded"
                    />
                  </div>
                  <div>
                    <h5 className="xtraBold mt-3">{item.name}</h5>
                    <p className="text-secondary">{item.text}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className="section pb-5">
        <Container>
          <h3 className="xtraBold mt-3">Our immigration partners</h3>
          <p className="mt-4">
            With decades of experience working alongside top immigration firms,
            we have honed our expertise in the intricacies of the immigration
            process. Our strong partnerships enable us to provide our clients
            with comprehensive, tailored solutions that address every aspect of
            their journey. From initial consultations to securing the necessary
            visas, we work hand-in-hand with our immigration partners to ensure
            a smooth and efficient experience.
          </p>
          <Row className="g-4 mt-2">
            {[
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
                name: "Partner X",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
                name: "Partner Y",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
                name: "Partner Z",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
                name: "Name X",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
                name: "Name X",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
                name: "Name X",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
                name: "Name X",
              },
              {
                image:
                  "https://res.cloudinary.com/dq8ii6nbc/image/upload/v1732137929/sydney-rae-i0kQM6OdeVc-unsplash_cmtw8i.jpg",
                name: "Name X",
              },
            ].map((item, index) => (
              <Col key={index} xs={12} sm={6} lg={3} xl={3} className="rounded">
                <div className="customCard">
                  <div className="imgContainer position-relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded"
                    />
                  </div>
                  <div>
                    <h5 className="xtraBold mt-3">{item.name}</h5>
                    <p className="text-secondary">{item.text}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        <CTAWithImage
          header="Build, Launch, and Scale with Tech X Startup"
          text="Partner with Tech X Startup to navigate the Canada Startup Visa
                process. Book a call today and start your journey to building a
                successful business in Canada."
          img="https://res.cloudinary.com/dq8ii6nbc/image/upload/v1733164292/sketch-man-office-working-on-260nw-207966388_tixfjk.webp"
          alt="guy on computer"
          btnText="Book via Calendy"
          imageAlign="left"
        />
      </div>
    </div>
  );
}
