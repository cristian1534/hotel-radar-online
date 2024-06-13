import React from "react";

interface ContactInfo {
  email: string;
  phone: string;
}

interface Reservation {
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

interface TableProps {
  reservations: Reservation[];
  searchValue: string;
}

const Table: React.FC<TableProps> = ({ reservations, searchValue }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="overflow-x-auto w-full">
        <table className="table-auto border-collapse border border-gray-300 w-full hidden sm:table">
          <thead className="bg-brand-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-xs sm:text-base">Reservation ID</th>
              <th className="border border-gray-300 px-4 py-2 text-xs sm:text-base">Guest Name</th>
              <th className="border border-gray-300 px-4 py-2 text-xs sm:text-base">Check-In Date</th>
              <th className="border border-gray-300 px-4 py-2 text-xs sm:text-base">Check-Out Date</th>
              <th className="border border-gray-300 px-4 py-2 text-xs sm:text-base">Room Type</th>
              <th className="border border-gray-300 px-4 py-2 text-xs sm:text-base">Room Number</th>
              <th className="border border-gray-300 px-4 py-2 text-xs sm:text-base">Status</th>
              <th className="border border-gray-300 px-4 py-2 text-xs sm:text-base">Special Requests</th>
              <th className="border border-gray-300 px-4 py-2 text-xs sm:text-base">Contact Email</th>
              <th className="border border-gray-300 px-4 py-2 text-xs sm:text-base">Contact Phone</th>
            </tr>
          </thead>
          <tbody className="bg-brand-50 text-brand-300">
            {reservations.filter((reservation) => {
              return searchValue.toLowerCase() === "" ? reservation : reservation.reservationId.includes(searchValue);
            }).map((reservation) => (
              <tr key={reservation.reservationId}>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-base">{reservation.reservationId}</td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-base">{reservation.guestName}</td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-base">{reservation.checkInDate}</td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-base">{reservation.checkOutDate}</td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-base">{reservation.roomType}</td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-base">{reservation.roomNumber}</td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-base">{reservation.status}</td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-base">{reservation.specialRequests}</td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-base">{reservation.contactInfo.email}</td>
                <td className="border border-gray-300 px-4 py-2 text-xs sm:text-base">{reservation.contactInfo.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="sm:hidden">
          {reservations.map((reservation) => (
            <div key={reservation.reservationId} className="border border-gray-300 p-2 mb-2 text-xs">
              <p><strong>Reservation ID:</strong> {reservation.reservationId}</p>
              <p><strong>Guest Name:</strong> {reservation.guestName}</p>
              <p><strong>Check-In Date:</strong> {reservation.checkInDate}</p>
              <p><strong>Check-Out Date:</strong> {reservation.checkOutDate}</p>
              <p><strong>Room Type:</strong> {reservation.roomType}</p>
              <p><strong>Room Number:</strong> {reservation.roomNumber}</p>
              <p><strong>Status:</strong> {reservation.status}</p>
              <p><strong>Special Requests:</strong> {reservation.specialRequests}</p>
              <p><strong>Contact Email:</strong> {reservation.contactInfo.email}</p>
              <p><strong>Contact Phone:</strong> {reservation.contactInfo.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Table;
