import React, { useState } from "react";
import Banner from "@/adapters/ui/components/customs/Banner";
import { reservations } from "@/domain/utils/reservations";

const titles = {
  areaTitle: "Check In-Out",
  sectionTitle: "Section Management",
  contentTitle: "Reactivate Status of Room for renting.",
};

interface Reservation {
  reservationId: string;
  guestName: string;
  roomType: string;
  roomNumber: string;
  status: string;
}

const CheckInOut: React.FC = () => {
  const [disabled, setDisabled] = useState<boolean>(false);

  function activate() {
    setDisabled(!disabled);
  }

  return (
    <div className="bg-brand-300 min-h-screen p-2 flex flex-col space-y-4 text-center">
      <Banner titles={titles} />
      <div className="flex justify-center items-center h-full">
        <div className="overflow-x-auto w-full">
          <table className="table-auto border-collapse border border-gray-300 w-full hidden sm:table">
            <thead className="bg-brand-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-xs sm:text-base">Reservation ID</th>
                <th className="border border-gray-300 px-4 py-2 text-xs sm:text-base">Guest Name</th>
                <th className="border border-gray-300 px-4 py-2 text-xs sm:text-base">Room Type</th>
                <th className="border border-gray-300 px-4 py-2 text-xs sm:text-base">Room Number</th>
                <th className="border border-gray-300 px-4 py-2 text-xs sm:text-base">Status</th>
                <th className="border border-gray-300 px-4 py-2 text-xs sm:text-base">Action</th>
              </tr>
            </thead>
            <tbody className="bg-brand-50 text-brand-300">
              {reservations
                .filter((reservation: Reservation) => reservation.status === "confirmed")
                .map((reservation: Reservation) => (
                  <tr key={reservation.reservationId}>
                    <td className="border border-gray-300 px-4 py-2 text-xs sm:text-base">{reservation.reservationId}</td>
                    <td className="border border-gray-300 px-4 py-2 text-xs sm:text-base">{reservation.guestName}</td>
                    <td className="border border-gray-300 px-4 py-2 text-xs sm:text-base">{reservation.roomType}</td>
                    <td className="border border-gray-300 px-4 py-2 text-xs sm:text-base">{reservation.roomNumber}</td>
                    <td className="border border-gray-300 px-4 py-2 text-xs sm:text-base text-red-500">{reservation.status === "confirmed" ? "Unavailable" : ""}</td>
                    <td className="border border-gray-300 px-4 py-2 text-xs sm:text-base">
                      <button className="bg-brand-300 hover:bg-brand-200 text-white font-bold py-2 px-4 rounded" onClick={activate}>
                        Reactivate
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="sm:hidden">
            {reservations
              .filter((reservation: Reservation) => reservation.status === "confirmed")
              .map((reservation: Reservation) => (
                <div key={reservation.reservationId} className="border border-gray-300 p-2 mb-2 text-xs">
                  <p><strong>Reservation ID:</strong> {reservation.reservationId}</p>
                  <p><strong>Guest Name:</strong> {reservation.guestName}</p>
                  <p><strong>Room Type:</strong> {reservation.roomType}</p>
                  <p><strong>Room Number:</strong> {reservation.roomNumber}</p>
                  <p><strong>Status:</strong>{reservation.status === "confirmed" ? " Unavailable" : ""}</p>
                  <p className="py-2">
                    <button className="bg-brand-300 hover:bg-brand-200 text-green-300 font-bold p-1 rounded">
                      Reactivate
                    </button>
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckInOut;
