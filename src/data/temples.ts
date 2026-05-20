import mataChintpurni from '@/assets/mata-chintpurni.jpg';
import mataJwalaji from '@/assets/mata-jwalaji.jpg';
import mataoNaina from '@/assets/mata-naina.jpg';
import mataBaglamukhi from '@/assets/mata-baglamukhi.jpg';

export interface Temple {
  id: string;
  name: string;
  fullName: string;
  image: string;
  subtitle: string;
  overview: string;
  history: string;
  location: string;
  bestTime: string;
  darshanDetails: string;
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
}

export const temples: Temple[] = [
  {
    id: 'chintpurni',
    name: 'Chintpurni Mata',
    fullName: 'Shri Chintpurni Mata Ji Temple',
    image: mataChintpurni,
    subtitle: 'Sacred Shakti Peetha',
    overview: 'One of the most revered 51 Shakti Peethas in India, Chintpurni Temple is dedicated to Goddess Chhinnamastika. The temple is believed to fulfill all wishes of devotees who come with pure hearts.',
    history: 'According to legend, this is where the feet of Goddess Sati fell when Lord Vishnu used his Sudarshan Chakra to cut her body into 51 parts. The temple has been a sacred pilgrimage site for centuries, attracting millions of devotees annually.',
    location: 'Una District, Himachal Pradesh (about 80 km from Jalandhar)',
    bestTime: 'October to March (pleasant weather), Navratri (special celebrations)',
    darshanDetails: 'Morning Aarti: 5:00 AM | Evening Aarti: 7:00 PM | Darshan timings: 4:00 AM to 10:00 PM',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Chintpurni',
        description: 'Pickup from your location and comfortable drive to Chintpurni. Check-in to hotel, freshen up, and attend the divine evening Aarti at the temple. Witness the spiritual atmosphere and peaceful surroundings. Overnight stay.'
      },
      {
        day: 2,
        title: 'Morning Darshan & Local Temples',
        description: 'Early morning Darshan at Chintpurni Temple during the auspicious Brahma Muhurta. After prasad, visit nearby temples including Shiv Mandir and local sacred sites. Enjoy traditional lunch and evening pooja. Overnight stay.'
      },
      {
        day: 3,
        title: 'Una & Amb Sightseeing',
        description: 'After breakfast, explore Una town and Amb Andaura. Visit the beautiful Amb valley, local markets for religious items and souvenirs. Return to temple for evening Aarti and special pooja. Overnight stay.'
      },
      {
        day: 4,
        title: 'Relaxation & Bhajan Sandhya',
        description: 'Day for relaxation and spiritual activities. Participate in Bhajan Sandhya, meditation sessions near the temple. Option for special pooja arrangements. Explore temple history and architecture. Overnight stay.'
      },
      {
        day: 5,
        title: 'Final Darshan & Departure',
        description: 'Early morning final Darshan and receive blessings. After breakfast and check-out, begin return journey with divine memories. Drop at your location with prasad and blessings.'
      }
    ]
  },
  {
    id: 'jwalaji',
    name: 'Jwala Ji Mata',
    fullName: 'Shri Jwalamukhi Mata Ji Temple',
    image: mataJwalaji,
    subtitle: 'Temple of Eternal Flame',
    overview: 'Famous for its eternal natural flames that burn without any fuel, Jwalaji Temple is one of the 51 Shakti Peethas. The sacred flames represent the tongue of Goddess Sati and have been burning for centuries.',
    history: 'Legend says that the tongue of Goddess Sati fell here when Lord Vishnu cut her body. Emperor Akbar tried to extinguish the flames but failed, after which he donated a golden umbrella to the temple as an offering.',
    location: 'Kangra District, Himachal Pradesh (about 30 km from Kangra)',
    bestTime: 'Year-round (pleasant climate), Navratri (grand celebrations)',
    darshanDetails: 'Morning Aarti: 5:00 AM | Evening Aarti: 8:00 PM | Darshan timings: 5:00 AM to 9:00 PM',
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Evening Darshan',
        description: 'Pickup from your location and scenic drive through Kangra Valley to Jwalaji. Check-in to hotel, freshen up. Evening Darshan at the temple to witness the miraculous eternal flames. Overnight stay.'
      },
      {
        day: 2,
        title: 'Morning Aarti & Temple Exploration',
        description: 'Attend the divine early morning Aarti at Jwalamukhi Temple. Explore the temple complex, learn about its history and architecture. Visit the Gorakh Dibbi (sacred pit with continuous flame). Jawalamukhi town exploration. Overnight stay.'
      },
      {
        day: 3,
        title: 'Kangra Devi & Kangra Fort',
        description: 'After breakfast, visit the nearby Kangra Devi Temple (Brajeshwari Devi). Explore the ancient Kangra Fort, one of the oldest and largest forts in India. Return for evening Aarti. Overnight stay.'
      },
      {
        day: 4,
        title: 'Local Markets & Temple Rituals',
        description: 'Participate in special pooja and temple rituals. Explore local markets for religious items, Kangra paintings, and handicrafts. Evening meditation and Bhajan at the temple. Overnight stay.'
      },
      {
        day: 5,
        title: 'Final Darshan & Return',
        description: 'Early morning final Darshan of the eternal flames. Receive blessings and prasad. After breakfast, check-out and begin return journey with spiritual fulfillment.'
      }
    ]
  },
  {
    id: 'baglamukhi',
    name: 'Baglamukhi Mata',
    fullName: 'Shri Baglamukhi Mata Ji Temple',
    image: mataBaglamukhi,
    subtitle: 'Tantric Shakti Peetha',
    overview: 'Baglamukhi Mata is one of the ten Mahavidyas (great wisdom goddesses) in Tantric Hinduism. The temple is renowned for its powerful tantric rituals and the ability to grant victory over enemies.',
    history: 'The temple is believed to possess immense tantric powers. Goddess Baglamukhi is worshipped for protection from enemies, legal matters, and removing obstacles. Devotees perform special havans and tantric pujas here.',
    location: 'Kangra District, Himachal Pradesh (near Jawalamukhi)',
    bestTime: 'Year-round, especially Tuesdays and Saturdays (auspicious for worship)',
    darshanDetails: 'Morning Pooja: 6:00 AM | Evening Aarti: 7:00 PM | Special Havan available on request',
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Temple Visit',
        description: 'Pickup and drive to Baglamukhi Temple area. Check-in to accommodation. Evening visit to the temple for initial Darshan and understanding of the temple\'s tantric significance. Overnight stay.'
      },
      {
        day: 2,
        title: 'Special Pooja & Havan',
        description: 'Participate in the elaborate morning pooja rituals. Option for special Baglamukhi Havan for protection and success. Learn about Mahavidya worship traditions. Evening Aarti. Overnight stay.'
      },
      {
        day: 3,
        title: 'Tantric Rituals & Nearby Temples',
        description: 'Deep dive into tantric worship practices. Visit nearby sacred sites and temples. Participate in evening rituals and meditation sessions. Overnight stay.'
      },
      {
        day: 4,
        title: 'Spiritual Practices',
        description: 'Day dedicated to personal spiritual practices, mantra chanting, and meditation. Option for additional special pujas. Explore local religious culture. Overnight stay.'
      },
      {
        day: 5,
        title: 'Final Blessing & Departure',
        description: 'Early morning final pooja and receive powerful blessings. After prasad and breakfast, begin return journey with spiritual energy and divine protection.'
      }
    ]
  },
  {
    id: 'naina-devi',
    name: 'Naina Devi Mata',
    fullName: 'Shri Naina Devi Ji Temple',
    image: mataoNaina,
    subtitle: 'Hilltop Shakti Peetha',
    overview: 'Perched atop a hillock at 1,219 meters, Naina Devi Temple is one of the 51 Shakti Peethas where the eyes of Goddess Sati are believed to have fallen. The temple offers breathtaking views of the Anandpur Sahib and Bhakra Dam.',
    history: 'The temple derives its name from "Naina" meaning eyes. According to mythology, when Sati\'s body was cut by Vishnu\'s Sudarshan Chakra, her eyes fell at this spot. The temple has been a major pilgrimage site for centuries.',
    location: 'Bilaspur District, Himachal Pradesh (accessible via ropeway or road)',
    bestTime: 'March to June and September to November (clear views and pleasant weather)',
    darshanDetails: 'Ropeway: 8:00 AM to 6:00 PM | Temple Darshan: 5:00 AM to 10:00 PM',
    itinerary: [
      {
        day: 1,
        title: 'Arrival at Naina Devi',
        description: 'Pickup and drive to Naina Devi base. Experience the exciting ropeway ride to the hilltop temple (or drive up). Check-in to hotel near the temple. Evening Darshan with stunning sunset views. Overnight stay.'
      },
      {
        day: 2,
        title: 'Morning Darshan & Temple Complex',
        description: 'Early morning Darshan during the peaceful hours. Explore the entire temple complex, the sacred peepal tree, and viewpoints. Enjoy the panoramic views of Punjab plains. Visit local shops. Overnight stay.'
      },
      {
        day: 3,
        title: 'Bilaspur & Gobind Sagar Lake',
        description: 'After breakfast, visit Bilaspur town and the beautiful Gobind Sagar Lake (Bhakra Dam reservoir). Enjoy boating and scenic beauty. Visit Vyas Cave. Return for evening temple visit. Overnight stay.'
      },
      {
        day: 4,
        title: 'Anandpur Sahib Excursion',
        description: 'Day trip to Anandpur Sahib, the holy city of Sikhs. Visit Takht Sri Kesgarh Sahib and other important Gurdwaras. Return to Naina Devi for evening Aarti. Overnight stay.'
      },
      {
        day: 5,
        title: 'Final Darshan & Return',
        description: 'Early morning final Darshan and blessings. Take the ropeway down after breakfast. Begin return journey with divine memories of the hilltop pilgrimage.'
      }
    ]
  }
];

export const getTempleById = (id: string): Temple | undefined => {
  return temples.find(temple => temple.id === id);
};
