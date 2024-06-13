import React from "react";

interface TitleReservations {
  areaTitle: string;
  sectionTitle: string;
  contentTitle: string;
}

interface BannerProps {
  titles: TitleReservations;
}

const Banner: React.FC<BannerProps> = ({ titles }) => {
  return (
    <div className="flex-col items-center justify-center m-4">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {titles.areaTitle}{" "}
        <span className="text-brand-200">{titles.sectionTitle}</span>
      </h1>
      <p className="text-lg font-normal text-brand-50 lg:text-xl dark:text-brand-100">
        {titles.contentTitle}
      </p>
    </div>
  );
};

export default Banner;
