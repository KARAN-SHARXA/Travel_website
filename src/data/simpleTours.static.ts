import destBirbilling from '@/assets/dest-birbilling.jpg';
import destShimla from '@/assets/dest-shimla.jpg';
import destManali from '@/assets/dest-manali.jpg';
import heroDharamshala from '@/assets/hero-dharamshala.jpg';
import destDalhousie from '@/assets/dest-dalhousie.jpg';
import destKasol from '@/assets/dest-kasol.jpg';
import destChamba from '@/assets/dest-chamba.jpg';
import destLehLadakh from '@/assets/dest-lehladakh.jpg';
import destSpitiValley from '@/assets/dest-spitivally.jpg';
import destGoldenTemple from '@/assets/dest-goldentemple.jpg';

import type { SimpleTour } from './types';

export const SIMPLE_TOURS: SimpleTour[] = [
  {
    id: '1',
    slug: 'bir-billing-paragliding',
    tourName: 'Palampur & Bir Billing Paragliding',
    location: 'Palampur , Bir Billing , Gopalpurzoo , Tea Gardens , Saurabh Van Vihar etc',
    
   
    description:
      "Bir Billing gained global fame after hosting 2015 Paragliding World Cup and is now India's top adventure destination. Along with thrilling paragliding, this package also covers Palampur, known for its tea estates, nature walks, and calm mountain lifestyle—offering a perfect mix of adventure and relaxation.",
    images: [destBirbilling],
    priority: 1,
    active: true,
    highlights: [
      'World-Class Paragliding at Bir Billing',
      'Palampur Tea Gardens & Nature Walks',
      'Tibetan Monasteries & Spiritual Calm',
      'Gopalpur Zoo & Wildlife Experience',
      'Cafe Culture, Camping & Scenic Valleys',
      'Baijnath Temple (Nearby)',
    ],
    special:
      'Soar above the Kangra Valley during a tandem paragliding flight at Billing and later unwind amidst the lush tea gardens of Palampur, enjoying panoramic views of the Dhauladhar mountains.',
    inclusions: [
      'Comfortable AC vehicle',
      'Accommodation (hotel/camp)',
      'Driver allowances',
      'All tolls & taxes',
      'Sightseeing as per itinerary',
    ],
    exclusions: ['Meals', 'Paragliding charges', 'Adventure activities', 'Personal expenses', 'Tips'],
    itinerary: [
      {
        id: '1',
        dayNumber: 1,
        title: 'Arrival in Bir – Bir Billing Paragliding Adventure',
        description:
          'Arrive in Bir and check in to your hotel or camp. Later, head to Bir Billing to witness the famous paragliding adventure and enjoy stunning views of the Kangra Valley. Spend the evening exploring the peaceful surroundings and local cafes. Overnight stay in Bir.',
      },
      {
        id: '2',
        dayNumber: 2,
        title: 'Bir to Palampur (Baijnath Temple)',
        description:
          'After breakfast, travel from Bir to Palampur and enjoy the scenic mountain views along the way. Visit Baijnath Temple, a historic shrine dedicated to Lord Shiva, known for its beautiful architecture and spiritual atmosphere. After darshan, continue to Palampur and check in to your hotel. Evening free for leisure and relaxation. Overnight stay in Palampur.',
      },
      {
        id: '3',
        dayNumber: 3,
        title: 'Palampur to Saurabh Van Vihar & Tea Garden',
        description:
          'After breakfast, explore Saurabh Van Vihar and enjoy a peaceful walk amidst lush greenery and scenic surroundings. Later, visit the famous Palampur Tea Gardens and spend time walking through the plantations while enjoying beautiful mountain views. Return to hotel in the evening for relaxation and overnight stay in Palampur.',
      },
      {
        id: '4',
        dayNumber: 4,
        title: 'Palampur – Gopalpur Zoo & Nature Garden',
        description:
          'After breakfast, visit Gopalpur Zoo to see Himalayan wildlife in a natural forest setting. Later, spend some relaxing time at a nearby nature garden, enjoying peaceful surroundings and fresh mountain air. Return to hotel in the evening for rest and overnight stay in Palampur.',
      },
      {
        id: '5',
        dayNumber: 5,
        title: 'Palampur to Departure',
        description:
          'Morning at leisure in Palampur. Enjoy the fresh mountain air or a short walk through nearby tea estates. After breakfast, check out from the hotel and begin your return journey with beautiful memories of adventure, nature, and peace.',
      },
    ],
  },
  {
    id: '2',
    slug: 'shimla-queen-of-hills',
    tourName: 'Shimla - Queen of Hills',
    location: 'Mall Road , The Ridge , Jakhu Temple , Kufri , Green valley , Summer Hill etc',
    
    
    description:
      'Shimla captivates visitors with its colonial architecture, charming Mall Road, and the iconic Christ Church. The city offers a perfect blend of natural beauty and historical significance.',
    images: [destShimla],
    priority: 2,
    active: true,
    highlights: [
      'Famous Toy Train (UNESCO World Heritage)',
      'The Mall Road & Ridge',
      'Jakhu Temple & Hanuman Statue',
      'Colonial Architecture & Museums',
      'Kufri for Snow Activities',
    ],
    special:
      "Shimla's Kalka-Shimla Railway, a UNESCO World Heritage Site, offers one of the most scenic train journeys in India through 102 tunnels and over 800 bridges.",
    inclusions: [
      'Comfortable AC vehicle',
      'Hotel accommodation',
      'Driver allowances',
      'All tolls & taxes',
      'Sightseeing as per itinerary',
    ],
    exclusions: ['Meals', 'Entry tickets', 'Personal expenses', 'Adventure activities', 'Tips'],
   itinerary: [
  {
    id: '1',
    dayNumber: 1,
    title: 'Arrival in Shimla',
    description:
      'Pickup from your location and scenic drive to Shimla through beautiful Himalayan landscapes. Upon arrival, check-in to the hotel and relax. In the evening, enjoy a leisurely walk on the famous Mall Road and The Ridge, visit Lakkar Bazaar for wooden souvenirs, and admire the colonial architecture. Experience the cool mountain air and vibrant local vibe. Overnight stay in Shimla.',
  },
  {
    id: '2',
    dayNumber: 2,
    title: 'Kufri, Jakhu Temple & Local Sightseeing',
    description:
      'After breakfast, proceed to Kufri, known for its panoramic views and adventure activities like horse riding and yak riding. Visit Green Valley and Himalayan Nature Park. Later, visit the famous Jakhu Temple (Jakhu Mandir), home to the world’s tallest Hanuman statue, offering breathtaking views of Shimla town. In the evening, visit Christ Church and Scandal Point. Overnight stay in Shimla.',
  },
  {
    id: '3',
    dayNumber: 3,
    title: 'Excursion to Chail & Naldehra',
    description:
      'After breakfast, enjoy a full-day excursion to Chail, the former summer capital of Patiala State. Visit Chail Palace and explore the world’s highest cricket ground. Continue to Naldehra, famous for its lush green landscapes and one of India’s oldest golf courses. Enjoy scenic drives through pine and cedar forests before returning to Shimla. Overnight stay.',
  },
  {
    id: '4',
    dayNumber: 4,
    title: 'Leisure Day, Shopping & Culture',
    description:
      'A relaxed day to explore Shimla at your own pace. Shop on Mall Road for traditional shawls, handicrafts, woollen clothes, and local souvenirs. Visit Gaiety Theatre, State Museum, and Kali Bari Temple. Spend time at popular cafes and enjoy Himachali cuisine. Evening free for leisure. Overnight stay in Shimla.',
  },
  {
    id: '5',
    dayNumber: 5,
    title: 'Departure',
    description:
      'After breakfast, check-out from the hotel. Optional experience of the UNESCO-listed toy train from Shimla to Kalka (subject to availability). Drive back to your destination with unforgettable memories of Shimla, the Queen of Hills.',
  },
],

  },
  {
    id: '3',
    slug: 'manali-valley-of-gods',
    tourName: 'Manali - Valley of the Gods',
    location: ' Rohtang Pass Solang Valley , Hadimba Temple , Old Manali , Vashisht Hot Springs etc',
    
    description:
      'Manali is the ultimate destination for adventure seekers and nature lovers alike. From the snow-covered Rohtang Pass to the ancient Hadimba Temple, every corner tells a story.',
    images: [destManali],
    priority: 3,
    active: true,
    highlights: [
      'Rohtang Pass & Solang Valley',
      'Hadimba Temple',
      'Old Manali & Hippie Culture',
      'River Rafting & Paragliding',
      'Hot Springs at Vashisht',
    ],
    special:
      "Manali's Solang Valley transforms into a winter wonderland offering skiing, snowboarding, and cable car rides with panoramic views of snow-capped peaks.",
    inclusions: [
      'Comfortable AC vehicle',
      'Hotel accommodation',
      'Driver allowances',
      'All tolls & taxes',
      'Sightseeing as per itinerary',
    ],
    exclusions: ['Meals', 'Entry tickets', 'Rohtang permit', 'Adventure activities', 'Tips'],
    itinerary: [
      {
        id: '1',
        dayNumber: 1,
        title: 'Arrival in Manali',
        description:
          'Pickup from your location and enjoy a scenic drive to Manali through the beautiful Kullu Valley. Upon arrival, check in to the hotel and take some rest. In the evening, enjoy a relaxed walk on Mall Road, explore local markets, and soak in the fresh mountain air. Overnight stay in Manali',
      },
      {
        id: '2',
        dayNumber: 2,
        title: 'Solang Valley Adventure',
        description:
          'After breakfast, head to Solang Valley for adventure activities - paragliding, zorbing, and ropeway. In winter, enjoy skiing and snowboarding. Amazing photo opportunities with snow-capped mountains. Return to hotel. Overnight stay.',
      },
      {
        id: '3',
        dayNumber: 3,
        title: 'Rohtang Pass / Atal Tunnel',
        description:
          "Early morning departure for Rohtang Pass (subject to permit availability) or Atal Tunnel - the world's longest highway tunnel. Experience snow, stunning landscapes, and breathtaking views. Return by evening. Overnight stay.",
      },
      {
        id: '4',
        dayNumber: 4,
        title: 'Local Sightseeing',
        description:
          'Visit the ancient Hadimba Temple (Dhungri Temple), Manu Temple, and Vashisht Hot Springs. Explore Old Manali with its charming cafes. Optional river rafting in Kullu. Evening at Club House. Overnight stay.',
      },
      {
        id: '5',
        dayNumber: 5,
        title: 'Departure',
        description:
          'Leisurely breakfast and check-out. Visit Naggar Castle if time permits. Begin return journey with stops at Kullu for shawl shopping and the scenic viewpoints along the way.',
      },
    ],
  },
  {
    id: '4',
    slug: 'dharamshala-little-lhasa',
    tourName: 'Dharamshala & McLeod Ganj',
    location: 'Triund , McLeod  Ganj , Naddi , Church , Stadium , Dal Lake , Bhagsu etc',
    
    
    description:
      'Dharamshala offers a unique cultural experience with its blend of Indian and Tibetan traditions. McLeod Ganj, the upper town, is the heart of the Tibetan community.',
    images: [heroDharamshala],
    priority: 4,
    active: true,
    highlights: [
      'Dalai Lama Temple Complex',
      'Triund Trek',
      'Bhagsu Waterfall & Cafe Culture',
      'Tibetan Monasteries & Culture',
      'Cricket Stadium with Mountain Views',
    ],
    special:
      "The Tsuglagkhang Complex houses the Dalai Lama's residence and offers a profound spiritual experience with Buddhist teachings, meditation sessions, and Tibetan art.",
    inclusions: [
      'Comfortable AC vehicle',
      'Hotel accommodation',
      'Driver allowances',
      'All tolls & taxes',
      'Sightseeing as per itinerary',
    ],
    exclusions: ['Meals', 'Entry tickets', 'Trekking gear', 'Meditation courses', 'Tips'],
    itinerary: [
      {
        id: '1',
        dayNumber: 1,
        title: 'Arrival in Dharamshala',
        description:
          'Drive through scenic Kangra Valley to Dharamshala/McLeod Ganj. Check-in to hotel with stunning Dhauladhar views. Evening walk around McLeod Ganj, explore cafes and Tibetan markets. Overnight stay.',
      },
      {
        id: '2',
        dayNumber: 2,
        title: 'Spiritual Exploration',
        description:
          'Visit the Tsuglagkhang Complex (Dalai Lama Temple), Namgyal Monastery, and Tibet Museum. Attend morning prayers if available. Explore Tibetan handicraft shops. Visit the Church of St. John in the Wilderness. Overnight stay.',
      },
      {
        id: '3',
        dayNumber: 3,
        title: 'Triund Trek / Bhagsu',
        description:
          'For trekkers: Day trek to Triund (9 km) with stunning 360° views of the Himalayas. For leisure: Visit Bhagsu Temple, Bhagsu Waterfall, and the famous Shiva Cafe. Enjoy the natural beauty. Overnight stay.',
      },
      {
        id: '4',
        dayNumber: 4,
        title: 'Dharamshala & Kangra Sightseeing',
        description:
          'Visit Dharamshala Cricket Stadium (HPCA), War Memorial, and Tea Gardens. Excursion to Chamunda Devi Temple or Masroor Rock Cut Temple. Evening meditation session. Overnight stay.',
      },
      {
        id: '5',
        dayNumber: 5,
        title: 'Departure',
        description:
          'Early morning visit to Dalai Lama Temple for final blessings. Breakfast and check-out. Begin return journey with optional stop at Kangra Fort. Carry home Tibetan souvenirs and spiritual memories.',
      },
    ],
  },
  {
    id: '5',
    slug: 'dalhousie-mini-switzerland',
    tourName: 'Dalhousie and Khajjiar',
    location: 'Dalhousie , Khajjiar , Chamba , Dainkund , Kalatop etc',

    description:
      'Dalhousie retains its old-world charm with Victorian architecture, pine-covered valleys, and snow-capped peaks. Perfect for those seeking tranquility away from crowds.',
    images: [destDalhousie],
    priority: 5,
    active: true,
    highlights: [
      "Khajjiar - India's Mini Switzerland",
      "St. John's & St. Francis Churches",
      'Kalatop Wildlife Sanctuary',
      'Dainkund Peak Trek',
      'Chamba Valley Views',
    ],
    special:
      'Khajjiar, just 24km from Dalhousie, is a small plateau surrounded by meadows and forests, often called "Mini Switzerland" for its stunning resemblance to Swiss landscapes.',
    inclusions: [
      'Comfortable AC vehicle',
      'Hotel accommodation',
      'Driver allowances',
      'All tolls & taxes',
      'Sightseeing as per itinerary',
    ],
    exclusions: ['Meals', 'Entry tickets', 'Adventure activities', 'Personal expenses', 'Tips'],
    itinerary: [
      {
        id: '1',
        dayNumber: 1,
        title: 'Arrival in Dalhousie',
        description:
          'Drive through the picturesque hills to Dalhousie. Check-in to hotel with valley views. Evening walk at Gandhi Chowk and Mall Road. Enjoy the colonial charm and pine-scented air. Overnight stay.',
      },
      {
        id: '2',
        dayNumber: 2,
        title: 'Khajjiar Excursion',
        description:
          'After breakfast, full day excursion to Khajjiar - the Mini Switzerland of India. Enjoy the lush green meadow, lake, and dense forests. Adventure activities like horse riding and zorbing available. Return by evening. Overnight stay.',
      },
      {
        id: '3',
        dayNumber: 3,
        title: 'Dainkund Peak & Kalatop',
        description:
          'Trek to Dainkund Peak (highest point near Dalhousie at 2,755m) for panoramic views. Visit Pholani Devi Temple. Explore Kalatop Wildlife Sanctuary for nature walks and wildlife spotting. Overnight stay.',
      },
      {
        id: '4',
        dayNumber: 4,
        title: 'Chamba Town',
        description:
          'Day trip to ancient Chamba town (60 km). Visit Lakshmi Narayan Temple complex, Chaugan (famous for Minjar Mela), and Bhuri Singh Museum. Explore local handicrafts - Chamba Rumals and paintings. Return to Dalhousie. Overnight stay.',
      },
      {
        id: '5',
        dayNumber: 5,
        title: 'Departure',
        description:
          "Morning visit to St. John's Church and St. Francis Church. Breakfast and check-out. Visit Subhash Baoli if time permits. Begin return journey with memories of the colonial hill station.",
      },
    ],
  },
  {
    id: '6',
    slug: 'kasol-backpackers-paradise',
    tourName: "Kasol - Backpacker's Paradise",
    location: 'Kasol',
    
    description:
      'Kasol offers a unique bohemian atmosphere with its riverside cafes, Israeli cuisine, and laid-back vibe. It serves as a base camp for treks to Kheerganga, Tosh, and Malana.',
    images: [destKasol],
    priority: 6,
    active: true,
    highlights: [
      'Kheerganga Hot Springs Trek',
      'Riverside Cafes & Israeli Food',
      'Tosh & Malana Villages',
      'Nature Walks & Camping',
      'Parvati Valley Exploration',
    ],
    special:
      'The Kheerganga trek rewards you with natural hot springs at 2,960 meters, where you can soak in warm waters surrounded by snow and mountains.',
    inclusions: [
      'Comfortable AC vehicle',
      'Accommodation (hotel + camping)',
      'Driver allowances',
      'All tolls & taxes',
      'Sightseeing as per itinerary',
    ],
    exclusions: ['Meals', 'Trekking guide', 'Camping gear', 'Personal expenses', 'Tips'],
    itinerary: [
      {
        id: '1',
        dayNumber: 1,
        title: 'Arrival in Kasol',
        description:
          "Scenic drive through Kullu and along the Parvati River to Kasol. Check-in to riverside camp or hotel. Evening walk along the river, explore local cafes and shops. Experience the unique vibe of this backpacker's paradise. Overnight stay.",
      },
      {
        id: '2',
        dayNumber: 2,
        title: 'Kheerganga Trek (Day 1)',
        description:
          'After early breakfast, start the famous Kheerganga trek (12 km). Trail passes through beautiful villages, forests, and waterfalls. Reach Kheerganga by afternoon. Relax in the natural hot springs with mountain views. Camping overnight at Kheerganga.',
      },
      {
        id: '3',
        dayNumber: 3,
        title: 'Kheerganga to Kasol',
        description:
          'Early morning sunrise views from Kheerganga. After breakfast, trek back down to Kasol. The descent is easier and offers different perspectives. Reach Kasol by afternoon. Rest and explore riverside cafes. Overnight in Kasol.',
      },
      {
        id: '4',
        dayNumber: 4,
        title: 'Tosh & Manikaran',
        description:
          'Visit the charming village of Tosh with panoramic valley views. Experience local Himachali culture. Later, visit Manikaran Sahib - famous for hot springs and Gurudwara. Take a holy dip in the hot springs. Return to Kasol. Overnight stay.',
      },
      {
        id: '5',
        dayNumber: 5,
        title: 'Departure',
        description:
          'Morning at leisure by the Parvati River. Optional visit to Chalal village for a short nature walk. After breakfast, check-out and begin return journey with memories of the magical Parvati Valley.',
      },
    ],
  },
  {
    id: '7',
    slug: 'chamba-valley-experience',
    tourName: 'Chamba Valley Heritage',
    location: 'Chamba',
   
    description:
      'Chamba is one of the oldest towns in Himachal Pradesh, known for its ancient temples, preserved colonial architecture, and breathtaking valley views. This hidden gem offers authentic Himalayan culture away from commercial crowds.',
    images: [destChamba],
    priority: 7,
    active: true,
    highlights: [
      'Chamunda Devi Temple',
      'Champavati River',
      'Ancient Chamba Palace',
      'Bhuri Singh Museum',
      'Manimahesh Temple',
    ],
    special:
      "Chamba's isolated location has preserved its ancient culture and traditions, offering visitors a glimpse into untouched Himalayan heritage.",
    inclusions: [
      'Comfortable AC vehicle',
      'Hotel accommodation',
      'Driver allowances',
      'All tolls & taxes',
      'Sightseeing as per itinerary',
    ],
    exclusions: ['Meals', 'Entry tickets', 'Personal expenses', 'Adventure activities', 'Tips'],
    itinerary: [
      {
        id: '1',
        dayNumber: 1,
        title: 'Arrival in Chamba',
        description:
          'Pickup from your location and scenic drive to Chamba. Upon arrival, check in to your hotel and take some time to relax. Evening visit to the famous Chamunda Devi Temple. Overnight stay in Chamba.',
      },
      {
        id: '2',
        dayNumber: 2,
        title: 'Chamba Local Sightseeing',
        description:
          'After breakfast, explore the ancient Chamba Palace and Bhuri Singh Museum. Walk through the local markets and experience the authentic Himalayan culture. Visit the famous Lakshmi Narayan Temple. Overnight stay in Chamba.',
      },
      {
        id: '3',
        dayNumber: 3,
        title: 'Manimahesh & Champavati',
        description:
          'Full day excursion to Manimahesh Temple, one of the most revered Shiva temples in the region. Later, enjoy the scenic beauty of Champavati River and surrounding valleys. Return to Chamba for overnight stay.',
      },
      {
        id: '4',
        dayNumber: 4,
        title: 'Khajjiar Excursion',
        description:
          'Day trip to the famous Khajjiar Lake and meadow. Enjoy the stunning natural beauty and optional activities like horse riding. Experience the pristine mountain environment. Return to Chamba for overnight stay.',
      },
      {
        id: '5',
        dayNumber: 5,
        title: 'Departure',
        description:
          "After breakfast, check out from the hotel. Begin your return journey with beautiful memories of ancient Chamba's cultural heritage and natural beauty.",
      },
    ],
  },
  {
    id: '8',
    slug: 'leh-ladakh-adventure',
    tourName: 'Leh Ladakh - Land of High Passes',
    location: 'Leh Ladakh',
    description:
      'Leh Ladakh is a high-altitude desert known for its stunning landscapes, ancient monasteries, and adventure opportunities. From the magnetic hill to Pangong Lake, every moment in Ladakh is unforgettable.',
    images: [destLehLadakh],
    priority: 8,
    active: true,
    highlights: [
      'Pangong Tso Lake',
      'Khardungla Pass',
      'Hemis Monastery',
      'Thiksey Monastery',
      'Nubra Valley',
    ],
    special:
      'At over 11,000 feet, Leh is one of the highest permanently inhabited towns in the world, offering a unique high-altitude experience.',
    inclusions: [
      'Comfortable AC vehicle',
      'Hotel accommodation',
      'Driver allowances',
      'All tolls & taxes',
      'Sightseeing as per itinerary',
    ],
    exclusions: ['Meals', 'Entry tickets', 'Personal expenses', 'Adventure activities', 'Tips'],
    itinerary: [
      {
        id: '1',
        dayNumber: 1,
        title: 'Arrival & Leh Local',
        description:
          'Arrive at Leh airport and transfer to your hotel. Rest and acclimatize to the high altitude. Evening visit to Shanti Stupa and Leh Market. Overnight stay in Leh.',
      },
      {
        id: '2',
        dayNumber: 2,
        title: 'Hemis & Thiksey',
        description:
          'Full day excursion to Hemis Monastery, the largest Buddhist monastery in Ladakh. Later visit Thiksey Monastery with its stunning location and architecture. Return to Leh for overnight stay.',
      },
      {
        id: '3',
        dayNumber: 3,
        title: 'Khardungla Pass',
        description:
          'Drive over the famous Khardungla Pass (18,380 feet) - one of the highest motorable roads in the world. Enjoy breathtaking views of the Nubra Valley. Return to Leh for overnight stay.',
      },
      {
        id: '4',
        dayNumber: 4,
        title: 'Pangong Lake',
        description:
          'Full day excursion to the stunning Pangong Tso Lake (14,270 feet). Enjoy the crystal clear waters and changing colors of this high-altitude lake. Return to Leh for overnight stay.',
      },
      {
        id: '5',
        dayNumber: 5,
        title: 'Departure',
        description:
          'After breakfast, check out from the hotel. Transfer to Leh airport for your onward journey, carrying memories of the magnificent Himalayan landscapes.',
      },
    ],
  },
  {
    id: '9',
    slug: 'spiti-valley-exploration',
    tourName: 'Spiti Valley - Cold Desert Mountain',
    location: 'Spiti Valley',
    
    description:
      'Spiti Valley is a remote Himalayan valley known for its stark landscapes, ancient monasteries, and unique culture. This high-altitude desert offers adventure seekers and spiritual seekers an unforgettable experience.',
    images: [destSpitiValley],
    priority: 9,
    active: true,
    highlights: [
      'Key Monastery',
      'Kibber Village',
      'Pin Valley',
      'Dhankar Lake',
      'Tabo Monastery',
    ],
    special:
      'Spiti Valley remains cut off from the world for 6 months due to heavy snowfall, preserving its ancient Buddhist culture and traditions.',
    inclusions: [
      'Comfortable AC vehicle',
      'Hotel accommodation',
      'Driver allowances',
      'All tolls & taxes',
      'Sightseeing as per itinerary',
    ],
    exclusions: ['Meals', 'Entry tickets', 'Personal expenses', 'Adventure activities', 'Tips'],
    itinerary: [
      {
        id: '1',
        dayNumber: 1,
        title: 'Arrival in Kaza',
        description:
          'Arrive at Kaza, the headquarters of Spiti Valley. Check in to your hotel and rest. Evening visit to the famous Key Monastery with its stunning location. Overnight stay in Kaza.',
      },
      {
        id: '2',
        dayNumber: 2,
        title: 'Kibber & Pin Valley',
        description:
          'Full day excursion to Kibber Village, one of the highest villages in Asia. Later visit the beautiful Pin Valley and enjoy the scenic mountain landscapes. Return to Kaza for overnight stay.',
      },
      {
        id: '3',
        dayNumber: 3,
        title: 'Dhankar Lake & Tabo',
        description:
          'Visit Dhankar Lake, a high-altitude freshwater lake. Later explore the ancient Tabo Monastery, known as the Ajanta of the Himalayas. Return to Kaza for overnight stay.',
      },
      {
        id: '4',
        dayNumber: 4,
        title: 'Langza & Hikkim',
        description:
          'Excursion to Langza Village for fossil hunting and Hikkim Village with its unique monastery. Experience the local Spiti culture and traditions. Return to Kaza for overnight stay.',
      },
      {
        id: '5',
        dayNumber: 5,
        title: 'Departure',
        description:
          'After breakfast, check out from the hotel. Begin your return journey with memories of the pristine Spiti Valley and its ancient Buddhist heritage.',
      },
    ],
  },
 
];
