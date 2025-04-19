import { client } from "./client";

export const fetchLandingPage = async () => {
  const query = `*[_type == "landingPage"][0]{
    heroSection {
      imageUrl, 
      title,
      text,
      primaryBtnText,
      primaryBtnLink,
      isThereSecondBtn,
      lightBtnText,
      lightBtnLink
    },
    missionStatement,
    servicesSection {
      header,
      services[] {
        title,
        icon,
        text
      }
    },
    sellingPointsIntro {
      header,
      text
    },
    sellingPoints[] {
      icon,
      title,
      text
    },
    partnersSection {
      header,
      partners[] {
        alt,
        image
      }
    },
    ctaSection {
      header,
      text,
      btnText,
      link, 
      imageAlign, 
      image, 
      alt
    }, 
    getTheGuideSection { 
      imageUrl,
      alt, 
      title, 
      text, 
      doSomethingForm, 
      doSomethingFormBtnText
    }
   
  }`;

  const landingPageData = await client.fetch(query);
  return landingPageData;
};
