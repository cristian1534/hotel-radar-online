import HotelGuideLayout from "@/adapters/ui/components/customs/HotelGuideLayout";
import LoungeForm from "@/adapters/ui/components/LoungeForm";

const Lounge: React.FC = () => {
  return (
    <div className="bg-brand-300 min-h-screen">
      <HotelGuideLayout />
      <div className="flex justify-center items-center">
        <LoungeForm />
      </div>
    </div>
  );
};
export default Lounge;
