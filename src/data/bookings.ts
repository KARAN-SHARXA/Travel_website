import type { BookingLog } from './types';

export type { BookingLog };

export const addBookingLog = (
  booking: Omit<BookingLog, 'id' | 'createdAt' | 'bookingType'>,
  bookingType: BookingLog['bookingType']
): BookingLog => {
  const newBooking: BookingLog = {
    ...booking,
    bookingType,
    id: generateBookingId(),
    createdAt: new Date().toISOString(),
  };

  return newBooking;
};

// Helper function to generate booking ID
export const generateBookingId = (): string => {
  return `KTT${Date.now().toString().slice(-8)}`;
};

// Helper function to generate unique ID
export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Helper function to generate slug from name
export const generateSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

// Helper function to generate WhatsApp message for station booking
export const generateStationBookingMessage = (
  booking: Omit<BookingLog, 'id' | 'createdAt' | 'bookingType'> & {
    travelTime?: string;
    notes?: string;
  }
): string => {
  return `Hello,

I want to book *Station/Airport Transfer*.

*Booking Number:* BOOKING_PLACEHOLDER
*Pickup:* ${booking.pickup || 'To be decided'}
*Drop:* ${booking.drop || 'To be decided'}
*Travel Date:* ${booking.travelDate || 'To be decided'}
*Pickup Time:* ${booking.travelTime || 'To be decided'}
*Number of Passengers:* ${booking.passengers || 1}

*Notes:* ${booking.notes || 'None'}

*Name:* ${booking.customerName}
*Phone:* ${booking.customerPhone}

Please share price & details.`;
};

// Helper function to generate WhatsApp message for fixed package booking
export const generateFixedPackageBookingMessage = (booking: Omit<BookingLog, 'id' | 'createdAt' | 'bookingType'>, packageName: string, duration?: string): string => {
  return `Hello,

I want to book *${packageName} Fixed Tour Package*.

*Booking Number:* BOOKING_PLACEHOLDER
*Package:* ${packageName}
*Pickup:* ${booking.pickup || 'Fixed'}
*Duration:* ${duration || 'To be confirmed'}

*Name:* ${booking.customerName}
*Phone:* ${booking.customerPhone}
*Travel Date:* ${booking.travelDate || 'To be decided'}
*Passengers:* ${booking.passengers || 1}

Please share price & details.`;
};

// Helper function to generate WhatsApp message for simple tour enquiry
export const generateSimpleTourEnquiryMessage = (booking: Omit<BookingLog, 'id' | 'createdAt' | 'bookingType'>, tourName: string): string => {
  return `Hello,

I am interested in the *${tourName}* tour.

*Booking Number:* BOOKING_PLACEHOLDER
*Tour:* ${tourName}
*Pickup Location:* ${booking.pickup || 'To be specified'}

*Name:* ${booking.customerName}
*Phone:* ${booking.customerPhone}
*Preferred Travel Date:* ${booking.travelDate || 'To be decided'}
*Number of People:* ${booking.passengers || 1}

Please share more details about this tour package including pricing and availability.`;
};
