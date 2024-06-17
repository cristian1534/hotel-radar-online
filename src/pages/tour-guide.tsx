import React from 'react';
import TourForm from '@/adapters/ui/components/TourGuideForm';
import Banner from '@/adapters/ui/components/customs/Banner';


interface Titles {
  areaTitle: string;
  sectionTitle: string;
  contentTitle: string;
}

const titles: Titles = {
  areaTitle: 'Tours',
  sectionTitle: 'Section Management',
  contentTitle: 'Manage the information for the Guests.',
};

const TourGuide: React.FC = () => {
  return (
    <div className="bg-brand-300 min-h-screen flex flex-col text-center justify-center items-center">
      <Banner titles={titles} />
      <TourForm />
    </div>
  );
};

export default TourGuide;
