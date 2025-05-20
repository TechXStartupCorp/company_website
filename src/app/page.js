import React from "react";
import LandingPage from "./landingPageComponents/LandingPage";
import { fetchLandingPage } from "../../sanity/lib/fetchLandingPage";
export default async function LandingPageContent() {
  const content = await fetchLandingPage();

  return <LandingPage content={content} />;
}
