import React from 'react';
import HotelServiceForm from '@/adapters/ui/components/HotelServiceForm';
import Banner from '@/adapters/ui/components/customs/Banner';


interface Titles {
  areaTitle: string;
  sectionTitle: string;
  contentTitle: string;
}

const titles: Titles = {
  areaTitle: 'Service',
  sectionTitle: 'Section Management',
  contentTitle: 'Manage the information for the Guests.',
};

const HotelService: React.FC = () => {
  return (
    <div className="bg-brand-300 min-h-screen flex flex-col text-center justify-center items-center">
      <Banner titles={titles} />
      <HotelServiceForm />
    </div>
  );
};

export default HotelService;
