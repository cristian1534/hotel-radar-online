import React from "react";
import HotelGuideLayout from "@/adapters/ui/components/customs/HotelGuideLayout";
import RoomsForm from "@/adapters/ui/components/RoomsForm";

const rooms: React.FC = () =>  {
  return (
    <div className="bg-brand-300 min-h-screen">
      <HotelGuideLayout />
      <div className="flex justify-center items-center mt-5">
        <RoomsForm />
      </div>
    </div>
  );
}

export default rooms;