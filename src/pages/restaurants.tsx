import HotelGuideLayout from "@/adapters/ui/components/customs/HotelGuideLayout";
import UpdateRestaurantInfoForm from "@/adapters/ui/components/RestaurantForm";
import React from "react";

const restaurants: React.FC = () => {
  return (
    <div className="bg-brand-300 min-h-screen">
      <HotelGuideLayout />
      <UpdateRestaurantInfoForm />
    </div>
  );
};
export default restaurants;
