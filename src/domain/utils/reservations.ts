
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

export const reservations:Reservations[] = [
    {
      reservationId: 'RES123456',
      guestName: 'Juan Pérez',
      checkInDate: '2024-05-20',
      checkOutDate: '2024-05-25',
      roomType: 'Suite',
      roomNumber: '101',
      status: 'confirmed',
      specialRequests: 'Early check-in, extra pillows',
      contactInfo: {
        email: 'juan.perez@example.com',
        phone: '+123456789'
      }
    },
    {
      reservationId: 'RES123457',
      guestName: 'María González',
      checkInDate: '2024-06-01',
      checkOutDate: '2024-06-05',
      roomType: 'Deluxe',
      roomNumber: '202',
      status: 'pending',
      specialRequests: 'Late check-out',
      contactInfo: {
        email: 'maria.gonzalez@example.com',
        phone: '+987654321'
      }
    },
    {
      reservationId: 'RES123458',
      guestName: 'Carlos Martínez',
      checkInDate: '2024-06-10',
      checkOutDate: '2024-06-15',
      roomType: 'Standard',
      roomNumber: '303',
      status: 'confirmed',
      specialRequests: 'Vegan meals',
      contactInfo: {
        email: 'carlos.martinez@example.com',
        phone: '+192837465'
      }
    }
  ];
 
  