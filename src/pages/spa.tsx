import React from "react";
import HotelGuideLayout from "@/adapters/ui/components/customs/HotelGuideLayout";
import SpaForm from "@/adapters/ui/components/SpaForm";

const Spa: React.FC = () => {
  return (
    <div className="bg-brand-300 min-h-screen">
      <HotelGuideLayout />
      <div className="flex justify-center items-center">
        <SpaForm />
      </div>
    </div>
  );
};

export default Spa;
