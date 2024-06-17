import React from 'react';
import Table from '@/adapters/ui/components/Table';
import Banner from '@/adapters/ui/components/customs/Banner';

interface FeedbackProps {
  name: string;
  email: string;
  message: string;
}

const options: FeedbackProps[] = [
  {
    name: "Pedro Gomez",
    email: "pedro.gomez",
    message: "Very good application."
  }, 
  {
    name: "Juan Perez",
    email: "juan.perez",
    message: "Excellent application."
  }, 
];
interface Titles {
  areaTitle: string;
  sectionTitle: string;
  contentTitle: string;
}

const titles: Titles = {
  areaTitle: 'Feedback',
  sectionTitle: 'Section Management',
  contentTitle: 'Check out the current comments.',
};

const Feedback: React.FC = () => {
  return (
    <div className="bg-brand-300 min-h-screen flex flex-col text-center justify-center items-center">
      <Banner titles={titles} />
      <Table options={options}/>
    </div>
  );
};

export default Feedback;