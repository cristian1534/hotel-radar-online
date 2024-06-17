import React from "react";
import GuideNav from "./GuideNav";
import Banner from "./Banner";

const guideTitles = {
  areaTitle: "Hotel",
  sectionTitle: "Guide Section",
  contentTitle: "Manage the information for the Guests.",
};

const HotelGuideLayout: React.FC = () => {
  return (
    <div className="bg-brand-300">
      <GuideNav />
      <div className="flex justify-center items-center text-center">
        <Banner titles={guideTitles} />
      </div>
    </div>
  );
};

export default HotelGuideLayout;
