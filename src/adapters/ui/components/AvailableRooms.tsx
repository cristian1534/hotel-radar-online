import React from "react";

interface ContactInfo {
    email: string;
    phone: string;
}
interface Reservations {
    reservationId: string;
    guestName: string;
    checkInDate: string;
    checkOutDate: string;
    roomType: string;
    roomNumber: string;
    status: string;
    specialRequests: string;
    contactInfo: ContactInfo;
}
interface RoomAvailabilityTableProps {
    reservations: Reservations[];
}



const RoomAvailabilityTable:React.FC<RoomAvailabilityTableProps> = ({ reservations }) => {
  const options = ["Status", "Until"];

  return (
    <div className="flex justify-center items-center h-full">
      <table className="overflow-x-auto border-collapse border border-gray-300">
        <thead className="bg-brand-200">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Room</th>
            {options.map((option, index) => (
              <th key={index} className="border border-gray-300 px-4 py-2">
                {option}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-brand-50">
          {reservations.map((reservation, index) => (
            <tr key={index} className="text-brand-300">
              <td className="border border-gray-300 px-4 py-2">
                {reservation.roomNumber}
              </td>
              <td
                className={`${
                  reservation.status === "confirmed"
                    ? "text-red-500"
                    : "text-green-500"
                } border border-gray-300 px-4 py-2`}
              >
                {reservation.status}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {reservation.checkOutDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoomAvailabilityTable;
