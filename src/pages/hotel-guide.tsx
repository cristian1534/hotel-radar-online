import React from "react";
import HotelGuideLayout from "@/adapters/ui/components/customs/HotelGuideLayout";
import UpdateInfoHotelForm from "@/adapters/ui/components/UpdateInfoHotelForm";

const HotelGuide: React.FC = () => {
  return (
    <div className="bg-brand-300 min-h-screen">
      <HotelGuideLayout />
      <div className="flex justify-center">
        <h1 className="uppercase py-10 text-brand-50 dark:text-brand-100 text-center">
          Update information regarding this Hotel
        </h1>
      </div>
      <UpdateInfoHotelForm />
    </div>
  );
};

export default HotelGuide;
