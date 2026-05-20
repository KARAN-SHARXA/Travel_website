import heroDharamshala from '@/assets/hero-dharamshala.jpg';
import heroDelhi from '@/assets/hero-delhi.jpg';
import mataChintpurni from '@/assets/mata-chintpurni.jpg';
import mataBaglamukhi from '@/assets/mata-baglamukhi.jpg';
import mataJwalaji from '@/assets/mata-jwalaji.jpg';
import mataKangra from '@/assets/mata-kangra.jpg';
import mataBajreshwari from '@/assets/mata-bajreshwari.jpg';
import mataChamunda from '@/assets/mata-chamunda.jpg';

import type { FixedPackage } from './types';

export const FIXED_PACKAGES: FixedPackage[] = [
  {
    id: '2',
    slug: 'amb-andaura-to-devi-darshan',
    packageName: 'Amb Andaura Railway Station to Devi Darshan',
    pickupType: 'station',
    pickupLocationId: '1',
    dropLocation: 'Devi Darshan',
    packageMode: 'tour',
    
    price: 0,
    showOnHomepage: true,
    shortDescription:
      'A sacred pilgrimage covering Chintpurni, Baglamukhi, Jwala Ji, Kangra, Brijeshwari, Chamunda Devi, and Naina Devi temples',
    images: [
      mataChintpurni,
      mataBaglamukhi,
      mataJwalaji,
      mataKangra,
      mataBajreshwari,
      mataChamunda,
    ],
    status: 'active',
    priority: 1,
    itinerary: [
  {
    id: '1',
    dayNumber: 1,
    title: 'Arrival & Chintpurni',
    description:
      'Arrive at Amb Andaura Railway Station and enjoy a comfortable transfer to your hotel. After check-in and some rest, proceed to the sacred Chintpurni Temple, a prominent Shakti Peetha, and seek blessings in a serene spiritual setting.',
  },
  {
    id: '2',
    dayNumber: 2,
    title: 'Baglamukhi & Jwala Ji',
    description:
      'After breakfast, visit the powerful Baglamukhi Temple, known for removing obstacles and negative energies. Later, proceed to Jwala Ji Temple, famous for its eternal sacred flames, and experience the divine aura of this unique shrine.',
  },
  {
    id: '3',
    dayNumber: 3,
    title: 'Kangra & Brijeshwari',
    description:
      'Visit the ancient Kangra Temple followed by Brijeshwari Temple, one of the 51 Shakti Peethas. Explore the spiritual and cultural heritage of Kangra Valley while enjoying scenic Himalayan views.',
  },
  {
    id: '4',
    dayNumber: 4,
    title: 'Chamunda Devi',
    description:
      'Proceed to Chamunda Devi Temple, located on the banks of the Baner River. This revered Shakti Peetha offers a peaceful environment and breathtaking surroundings, making it a deeply spiritual experience.',
  },
  {
    id: '5',
    dayNumber: 5,
    title: 'Naina Devi & Departure',
    description:
      'After breakfast, visit the sacred Naina Devi Temple, situated atop a hill and revered as one of the most important Shakti Peethas. After darshan, return to Amb Andaura Railway Station for your onward journey.',
  },
]
,
  },
  {
    id: '1',
    slug: 'amb-andaura-to-dharamshala',
    packageName: 'Amb Andaura Railway Station to Dharamshala',
    pickupType: 'station',
    pickupLocationId: '1',
    dropLocation: 'Dharamshala',
    packageMode: 'tour',
    
    price: 0,
    showOnHomepage: true,
    shortDescription:
      'Complete 5-day Himachal tour covering Dharamshala, McLeodganj, Triund, Kareri Lake, Dalhousie, and Khajjiar, with a fixed itinerary and comfortable hotel accommodation included.',
    images: [heroDharamshala],
    status: 'active',
    priority: 2,
    itinerary: [
  {
    id: '1',
    dayNumber: 1,
    title: 'Amb Andaura Railway Station to Dharamshala (Local Exploration)',
    description:
      'Arrive at Amb Andaura Railway Station and proceed on a scenic drive to Dharamshala. Upon arrival, check in to your hotel and relax. In the evening, visit the Dharamshala Cricket Stadium, one of the most beautiful stadiums in India, and explore the local markets. Enjoy the cool mountain breeze and peaceful surroundings. Overnight stay in Dharamshala.',
  },
  {
    id: '2',
    dayNumber: 2,
    title: 'McLeodganj Exploration',
    description:
      'After breakfast, head to McLeodganj, also known as Little Lhasa. Visit the Tsuglagkhang Complex (Dalai Lama Temple), Bhagsunag Temple and Waterfall, and explore Tibetan monasteries. Spend time at local cafes and souvenir markets, soaking in the vibrant Tibetan culture. Return to Dharamshala for overnight stay.',
  },
  {
    id: '3',
    dayNumber: 3,
    title: 'Triund Trek Adventure',
    description:
      'Early morning departure for the famous Triund Trek, one of the most popular treks in Himachal Pradesh. Trek through scenic forest trails with stunning views of the Dhauladhar range. Reach Triund top, enjoy panoramic mountain views, and spend time soaking in nature before trekking back. Return to Dharamshala for rest and overnight stay.',
  },
  {
    id: '4',
    dayNumber: 4,
    title: 'Kareri Lake , Kareri Village & Naddi Sunset',
    description:
      'After breakfast, proceed towards Kareri Village, known for its pristine beauty, riverside views, and trekking trails leading to Kareri Lake. Explore the village and enjoy the serene Himalayan environment. In the evening, visit Naddi View Point to witness a breathtaking sunset over the Dhauladhar mountains. Return to Dharamshala for overnight stay.',
  },
  {
    id: '5',
    dayNumber: 5,
    title: 'Dharamshala to Amb Andaura Railway Station (Departure)',
    description:
      'After breakfast, check out from the hotel and begin your return journey to Amb Andaura Railway Station. Enjoy scenic mountain views along the way and depart with unforgettable memories of your Dharamshala and Himalayan adventure.',
  },
]
,
  },
  {
    id: '3',
    slug: 'gopipur-to-delhi',
    packageName: 'Dehra Gopipur to Delhi',
    pickupType: 'station',
    pickupLocationId: '7',
    dropLocation: 'Delhi',
    packageMode: 'only-drop',
    duration: '₹9,500',
    price: 0,
    showOnHomepage: true,
    shortDescription:
      'Reliable point-to-point transfer service from Dehra Gopipur to Delhi with a direct drop within 24 hours. No hotel stay included, ensuring a smooth and hassle-free journey',
    images: [heroDelhi],
    status: 'active',
    priority: 3,
    itinerary: [],
  },
];
