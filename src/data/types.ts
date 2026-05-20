export interface Station {
  id: string;
  name: string;
  type: 'station' | 'airport';
  active: boolean;
}

export interface ItineraryDay {
  id: string;
  dayNumber: number;
  title: string;
  description: string;
}

export interface FixedPackage {
  id: string;
  slug: string;
  packageName: string;
  pickupType: 'station' | 'airport';
  pickupLocationId: string;
  dropLocation: string;
  packageMode: 'only-drop' | 'tour';
  duration?: string;
  price: number;
  specialPrice?: number;
  showOnHomepage: boolean;
  shortDescription: string;
  images: string[];
  status: 'draft' | 'active' | 'inactive';
  itinerary: ItineraryDay[];
  priority: number;
}

export interface SimpleTour {
  id: string;
  slug: string;
  tourName: string;
  location: string;
  
 
  description: string;
  duration?: string;
  startingPrice?: number;
  images: string[];
  priority: number;
  active: boolean;
  itinerary: ItineraryDay[];
  highlights?: string[];
  special?: string;
  inclusions?: string[];
  exclusions?: string[];
}

export interface BookingLog {
  id: string;
  bookingType: 'station' | 'fixed-package' | 'custom' | 'simple-tour';
  packageName?: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  travelDate?: string;
  passengers?: number;
  createdAt: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  message?: string;
  pickup?: string;
  drop?: string;
}
