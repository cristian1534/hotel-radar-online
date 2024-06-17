import React from "react";
import ConciergeForm from "@/adapters/ui/components/ConciergeForm";
import HotelGuideLayout from "@/adapters/ui/components/customs/HotelGuideLayout";

export default function Concierge() {
  return (
    <div className="bg-brand-300 min-h-screen">
      <HotelGuideLayout />
      <div className="flex justify-center items-center">
        <ConciergeForm />
      </div>
    </div>
  );
}
