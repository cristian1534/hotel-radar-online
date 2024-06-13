import React, { ChangeEvent, useState } from "react";
import { reservations } from "@/domain/utils/reservations";
import Table from "@/adapters/ui/components/customs/Table";
import Search from "@/adapters/ui/components/Search";
import RoomAvailabilityTable from "@/adapters/ui/components/AvailableRooms";
import Banner from "@/adapters/ui/components/customs/Banner";

interface TitleReservation {
    areaTitle: string;
    sectionTitle: string;
    contentTitle: string;
}

const titlesReservation:TitleReservation = {
  areaTitle: "Reservations",
  sectionTitle: "Section Management",
  contentTitle: "Status of Reservations coming from the Mobile App.",
};

const subTitlesReservation:TitleReservation = {
  areaTitle: "",
  sectionTitle: "",
  contentTitle: "Find out the availability of the Rooms.",
};

export default function Reservation() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('Search value:', event.target.value); 
    setSearchValue(event.target.value);
  };

  return (
    <div className="bg-brand-300 min-h-screen p-2 flex flex-col space-y-4 text-center">
      <Banner titles={titlesReservation} />
      <Search searchValue={searchValue} handleSearch={handleSearch} />
      <Table reservations={reservations} searchValue={searchValue} />
      <Banner titles={subTitlesReservation} />
      <RoomAvailabilityTable reservations={reservations} />
    </div>
  );
}