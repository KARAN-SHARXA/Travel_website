import destShimla from "@/assets/dest-shimla.jpg";
import destManali from "@/assets/dest-manali.jpg";
import heroDharamshala from "@/assets/hero-dharamshala.jpg";
import destDalhousie from "@/assets/dest-dalhousie.jpg";
import destKasol from "@/assets/dest-kasol.jpg";
import destBirbilling from "@/assets/dest-birbilling.jpg";
import destChamba from "@/assets/dest-chamba.jpg";
import destLehLadakh from "@/assets/dest-lehladakh.jpg";
import destSpitiValley from "@/assets/dest-spitivally.jpg";
import destKufri from "@/assets/dest-kufri.jpg";
import destGoldenTemple from "@/assets/dest-goldentemple.jpg";

export interface Destination {
  id: string;
  name: string;
  image: string;
  subtitle: string;
  intro: string;
  description: string;
  highlights: string[];
  special: string;
  duration: string;
  type: string;
  priority: number; // Lower numbers = higher priority
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  inclusions: string[];
  exclusions: string[];
}

export const destinations: Destination[] = [
  {
    id: "bir-billing",
    name: "Bir Billing & Palampur",
    image: destBirbilling,
    subtitle: "Paragliding Capital & Tea Garden Town of Himachal",
    intro:
      "Bir Billing is known worldwide for paragliding, while Palampur is a peaceful hill town famous for lush tea gardens, colonial charm, and scenic views of Dhauladhar range.",
    description:
      "Bir Billing gained global fame after hosting 2015 Paragliding World Cup and is now India's top adventure destination. Along with thrilling paragliding, this package also covers Palampur, known for its tea estates, nature walks, and calm mountain lifestyle—offering a perfect mix of adventure and relaxation.",
    highlights: [
      "World-Class Paragliding at Bir Billing",
      "Palampur Tea Gardens & Nature Walks",
      "Tibetan Monasteries & Spiritual Calm",
      "Gopalpur Zoo & Wildlife Experience",
      "Cafe Culture, Camping & Scenic Valleys",
      "Baijnath Temple (Nearby)",
    ],
    special:
      "Soar above the Kangra Valley during a tandem paragliding flight at Billing and later unwind amidst the lush tea gardens of Palampur, enjoying panoramic views of the Dhauladhar mountains.",
    duration: "5 Days",
    type: "Adventure & Nature",
    priority: 1,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bir – Bir Billing Paragliding Adventure",
        description:
          "Arrive in Bir and check in to your hotel or camp. Later, head to Bir Billing to witness the famous paragliding adventure and enjoy stunning views of the Kangra Valley. Spend the evening exploring the peaceful surroundings and local cafes. Overnight stay in Bir.",
      },
      {
        day: 2,
        title: "Bir to Palampur (Baijnath Temple)",
        description:
          "After breakfast, travel from Bir to Palampur and enjoy the scenic mountain views along the way. Visit Baijnath Temple, a historic shrine dedicated to Lord Shiva, known for its beautiful architecture and spiritual atmosphere. After darshan, continue to Palampur and check in to your hotel. Evening free for leisure and relaxation. Overnight stay in Palampur.",
      },
      {
        day: 3,
        title: "Palampur to Saurabh Van Vihar & Tea Garden",
        description:
          "After breakfast, explore Saurabh Van Vihar and enjoy a peaceful walk amidst lush greenery and scenic surroundings. Later, visit the famous Palampur Tea Gardens and spend time walking through the plantations while enjoying beautiful mountain views. Return to hotel in the evening for relaxation and overnight stay in Palampur.",
      },
      {
        day: 4,
        title: "Palampur – Gopalpur Zoo & Nature Garden",
        description:
          "After breakfast, visit Gopalpur Zoo to see Himalayan wildlife in a natural forest setting. Later, spend some relaxing time at a nearby nature garden, enjoying peaceful surroundings and fresh mountain air. Return to hotel in the evening for rest and overnight stay in Palampur.",
      },
      {
        day: 5,
        title: "Palampur to Departure",
        description:
          "Morning at leisure in Palampur. Enjoy the fresh mountain air or a short walk through nearby tea estates. After breakfast, check out from the hotel and begin your return journey with beautiful memories of adventure, nature, and peace.",
      },
    ],
    inclusions: [
      "Comfortable AC vehicle",
      "Accommodation (hotel/camp)",
      "Driver allowances",
      "All tolls & taxes",
      "Sightseeing as per itinerary",
    ],
    exclusions: [
      "Meals",
      "Paragliding charges",
      "Adventure activities",
      "Personal expenses",
      "Tips",
    ],
  },
  {
    id: "shimla",
    name: "Shimla",
    image: destShimla,
    subtitle: "Queen of Hills",
    intro:
      "The former summer capital of British India, Shimla is perched on the foothills of the Himalayas at an altitude of 2,276 meters.",
    description:
      "Shimla captivates visitors with its colonial architecture, charming Mall Road, and the iconic Christ Church. The city offers a perfect blend of natural beauty and historical significance.",
    highlights: [
      "Famous Toy Train (UNESCO World Heritage)",
      "The Mall Road & Ridge",
      "Jakhu Temple & Hanuman Statue",
      "Colonial Architecture & Museums",
      "Kufri for Snow Activities",
    ],
    special:
      "Shimla's Kalka-Shimla Railway, a UNESCO World Heritage Site, offers one of the most scenic train journeys in India through 102 tunnels and over 800 bridges.",
    duration: "5 Days",
    type: "Hill Station",
    priority: 2,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Shimla",
        description:
          "Pickup from your location and scenic drive to Shimla. Upon arrival, check-in to hotel and rest. Evening leisure walk on the famous Mall Road and Ridge. Enjoy the colonial charm and cool mountain air. Overnight stay in Shimla.",
      },
      {
        day: 2,
        title: "Kufri & Local Sightseeing",
        description:
          "After breakfast, visit Kufri for adventure activities like horse riding and yak riding. Explore Green Valley and Himalayan Nature Park. Return to Shimla and visit Jakhu Temple (world's tallest Hanuman statue). Evening at Christ Church. Overnight stay.",
      },
      {
        day: 3,
        title: "Excursion to Chail / Naldehra",
        description:
          "Full day excursion to Chail Palace (former summer capital of Patiala state) and the world's highest cricket ground. Visit Naldehra with India's oldest golf course. Enjoy scenic mountain drives through pine forests. Return to Shimla. Overnight stay.",
      },
      {
        day: 4,
        title: "Leisure Day & Shopping",
        description:
          "Free day for personal activities. Explore local markets on Mall Road for Shimla-famous shawls, handicrafts, and woolen items. Visit cafes and enjoy local cuisine. Optional visit to Gaiety Theatre and State Museum. Overnight stay.",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "After breakfast, check-out from hotel. Optional toy train experience (Shimla to Kalka). Drive back to your destination with wonderful memories of the Queen of Hills.",
      },
    ],
    inclusions: [
      "Comfortable AC vehicle",
      "Hotel accommodation",
      "Driver allowances",
      "All tolls & taxes",
      "Sightseeing as per itinerary",
    ],
    exclusions: [
      "Meals",
      "Entry tickets",
      "Personal expenses",
      "Adventure activities",
      "Tips",
    ],
  },
  {
    id: "manali",
    name: "Manali",
    image: destManali,
    subtitle: "Valley of Gods",
    intro:
      "Nestled in Kullu Valley along the Beas River, Manali is a high-altitude Himalayan resort town known for adventure and natural beauty.",
    description:
      "Manali is the ultimate destination for adventure seekers and nature lovers alike. From the snow-covered Rohtang Pass to the ancient Hadimba Temple, every corner tells a story.",
    highlights: [
      "Rohtang Pass & Solang Valley",
      "Hadimba Temple",
      "Old Manali & Hippie Culture",
      "River Rafting & Paragliding",
      "Hot Springs at Vashisht",
    ],
    special:
      "Manali's Solang Valley transforms into a winter wonderland offering skiing, snowboarding, and cable car rides with panoramic views of snow-capped peaks.",
    duration: "5 Days",
    type: "Adventure",
    priority: 3,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Manali",
        description:
          "Pickup from your location and enjoy a scenic drive to Manali through the beautiful Kullu Valley. Upon arrival, check in to the hotel and take some rest. In the evening, enjoy a relaxed walk on Mall Road, explore local markets, and soak in the fresh mountain air. Overnight stay in Manali",
      },
      {
        day: 2,
        title: "Solang Valley Adventure",
        description:
          "After breakfast, head to Solang Valley for adventure activities - paragliding, zorbing, and ropeway. In winter, enjoy skiing and snowboarding. Amazing photo opportunities with snow-capped mountains. Return to hotel. Overnight stay.",
      },
      {
        day: 3,
        title: "Rohtang Pass / Atal Tunnel",
        description:
          "Early morning departure for Rohtang Pass (subject to permit availability) or Atal Tunnel - the world's longest highway tunnel. Experience snow, stunning landscapes, and breathtaking views. Return by evening. Overnight stay.",
      },
      {
        day: 4,
        title: "Local Sightseeing",
        description:
          "Visit the ancient Hadimba Temple (Dhungri Temple), Manu Temple, and Vashisht Hot Springs. Explore Old Manali with its charming cafes. Optional river rafting in Kullu. Evening at Club House. Overnight stay.",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Leisurely breakfast and check-out. Visit Naggar Castle if time permits. Begin return journey with stops at Kullu for shawl shopping and the scenic viewpoints along the way.",
      },
    ],
    inclusions: [
      "Comfortable AC vehicle",
      "Hotel accommodation",
      "Driver allowances",
      "All tolls & taxes",
      "Sightseeing as per itinerary",
    ],
    exclusions: [
      "Meals",
      "Entry tickets",
      "Rohtang permit",
      "Adventure activities",
      "Tips",
    ],
  },
  {
    id: "dharamshala",
    name: "Dharamshala & McLeod Ganj",
    image: heroDharamshala,
    subtitle: "Little Lhasa of India",
    intro:
      "Home to His Holiness the Dalai Lama and the Tibetan Government-in-Exile, Dharamshala is a spiritual haven set against the majestic Dhauladhar range.",
    description:
      "Dharamshala offers a unique cultural experience with its blend of Indian and Tibetan traditions. McLeod Ganj, the upper town, is the heart of the Tibetan community.",
    highlights: [
      "Dalai Lama Temple Complex",
      "Triund Trek",
      "Bhagsu Waterfall & Cafe Culture",
      "Tibetan Monasteries & Culture",
      "Cricket Stadium with Mountain Views",
    ],
    special:
      "The Tsuglagkhang Complex houses the Dalai Lama's residence and offers a profound spiritual experience with Buddhist teachings, meditation sessions, and Tibetan art.",
    duration: "5 Days",
    type: "Hill Station",
    priority: 4,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Dharamshala",
        description:
          "Drive through scenic Kangra Valley to Dharamshala/McLeod Ganj. Check-in to hotel with stunning Dhauladhar views. Evening walk around McLeod Ganj, explore cafes and Tibetan markets. Overnight stay.",
      },
      {
        day: 2,
        title: "Spiritual Exploration",
        description:
          "Visit the Tsuglagkhang Complex (Dalai Lama Temple), Namgyal Monastery, and Tibet Museum. Attend morning prayers if available. Explore Tibetan handicraft shops. Visit the Church of St. John in the Wilderness. Overnight stay.",
      },
      {
        day: 3,
        title: "Triund Trek / Bhagsu",
        description:
          "For trekkers: Day trek to Triund (9 km) with stunning 360° views of the Himalayas. For leisure: Visit Bhagsu Temple, Bhagsu Waterfall, and the famous Shiva Cafe. Enjoy the natural beauty. Overnight stay.",
      },
      {
        day: 4,
        title: "Dharamshala & Kangra Sightseeing",
        description:
          "Visit Dharamshala Cricket Stadium (HPCA), War Memorial, and Tea Gardens. Excursion to Chamunda Devi Temple or Masroor Rock Cut Temple. Evening meditation session. Overnight stay.",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Early morning visit to Dalai Lama Temple for final blessings. Breakfast and check-out. Begin return journey with optional stop at Kangra Fort. Carry home Tibetan souvenirs and spiritual memories.",
      },
    ],
    inclusions: [
      "Comfortable AC vehicle",
      "Hotel accommodation",
      "Driver allowances",
      "All tolls & taxes",
      "Sightseeing as per itinerary",
    ],
    exclusions: [
      "Meals",
      "Entry tickets",
      "Trekking gear",
      "Meditation courses",
      "Tips",
    ],
  },
  {
    id: "dalhousie",
    name: "Dalhousie",
    image: destDalhousie,
    subtitle: "Mini Switzerland of India",
    intro:
      "Spread across five hills, Dalhousie is a charming colonial-era hill station named after Lord Dalhousie, the British Governor-General.",
    description:
      "Dalhousie retains its old-world charm with Victorian architecture, pine-covered valleys, and snow-capped peaks. Perfect for those seeking tranquility away from crowds.",
    highlights: [
      "Khajjiar - India's Mini Switzerland",
      "St. John's & St. Francis Churches",
      "Kalatop Wildlife Sanctuary",
      "Dainkund Peak Trek",
      "Chamba Valley Views",
    ],
    special:
      'Khajjiar, just 24km from Dalhousie, is a small plateau surrounded by meadows and forests, often called "Mini Switzerland" for its stunning resemblance to Swiss landscapes.',
    duration: "5 Days",
    type: "Hill Station",
    priority: 5,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Dalhousie",
        description:
          "Drive through the picturesque hills to Dalhousie. Check-in to hotel with valley views. Evening walk at Gandhi Chowk and Mall Road. Enjoy the colonial charm and pine-scented air. Overnight stay.",
      },
      {
        day: 2,
        title: "Khajjiar Excursion",
        description:
          "After breakfast, full day excursion to Khajjiar - the Mini Switzerland of India. Enjoy the lush green meadow, lake, and dense forests. Adventure activities like horse riding and zorbing available. Return by evening. Overnight stay.",
      },
      {
        day: 3,
        title: "Dainkund Peak & Kalatop",
        description:
          "Trek to Dainkund Peak (highest point near Dalhousie at 2,755m) for panoramic views. Visit Pholani Devi Temple. Explore Kalatop Wildlife Sanctuary for nature walks and wildlife spotting. Overnight stay.",
      },
      {
        day: 4,
        title: "Chamba Town",
        description:
          "Day trip to ancient Chamba town (60 km). Visit Lakshmi Narayan Temple complex, Chaugan (famous for Minjar Mela), and Bhuri Singh Museum. Explore local handicrafts - Chamba Rumals and paintings. Return to Dalhousie. Overnight stay.",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Morning visit to St. John's Church and St. Francis Church. Breakfast and check-out. Visit Subhash Baoli if time permits. Begin return journey with memories of the colonial hill station.",
      },
    ],
    inclusions: [
      "Comfortable AC vehicle",
      "Hotel accommodation",
      "Driver allowances",
      "All tolls & taxes",
      "Sightseeing as per itinerary",
    ],
    exclusions: [
      "Meals",
      "Entry tickets",
      "Adventure activities",
      "Personal expenses",
      "Tips",
    ],
  },
  {
    id: "kasol",
    name: "Kasol",
    image: destKasol,
    subtitle: "Backpacker's Paradise",
    intro:
      "Located in Parvati Valley along the banks of the Parvati River, Kasol is a small hamlet that has become a favorite destination for backpackers.",
    description:
      "Kasol offers a unique bohemian atmosphere with its riverside cafes, Israeli cuisine, and laid-back vibe. It serves as a base camp for treks to Kheerganga, Tosh, and Malana.",
    highlights: [
      "Kheerganga Hot Springs Trek",
      "Riverside Cafes & Israeli Food",
      "Tosh & Malana Villages",
      "Nature Walks & Camping",
      "Parvati Valley Exploration",
    ],
    special:
      "The Kheerganga trek rewards you with natural hot springs at 2,960 meters, where you can soak in warm waters surrounded by snow and mountains.",
    duration: "5 Days",
    type: "Adventure",
    priority: 6,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kasol",
        description:
          "Scenic drive through Kullu and along the Parvati River to Kasol. Check-in to riverside camp or hotel. Evening walk along the river, explore local cafes and shops. Experience the unique vibe of this backpacker's paradise. Overnight stay.",
      },
      {
        day: 2,
        title: "Kheerganga Trek (Day 1)",
        description:
          "After early breakfast, start the famous Kheerganga trek (12 km). Trail passes through beautiful villages, forests, and waterfalls. Reach Kheerganga by afternoon. Relax in the natural hot springs with mountain views. Camping overnight at Kheerganga.",
      },
      {
        day: 3,
        title: "Kheerganga to Kasol",
        description:
          "Early morning sunrise views from Kheerganga. After breakfast, trek back down to Kasol. The descent is easier and offers different perspectives. Reach Kasol by afternoon. Rest and explore riverside cafes. Overnight in Kasol.",
      },
      {
        day: 4,
        title: "Tosh & Manikaran",
        description:
          "Visit the charming village of Tosh with panoramic valley views. Experience local Himachali culture. Later, visit Manikaran Sahib - famous for hot springs and Gurudwara. Take a holy dip in the hot springs. Return to Kasol. Overnight stay.",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Morning at leisure by the Parvati River. Optional visit to Chalal village for a short nature walk. After breakfast, check-out and begin return journey with memories of the magical Parvati Valley.",
      },
    ],
    inclusions: [
      "Comfortable AC vehicle",
      "Accommodation (hotel + camping)",
      "Driver allowances",
      "All tolls & taxes",
      "Sightseeing as per itinerary",
    ],
    exclusions: [
      "Meals",
      "Trekking guide",
      "Camping gear",
      "Personal expenses",
      "Tips",
    ],
  },
  {
    id: "chamba",
    name: "Chamba",
    image: destChamba,
    subtitle: "Ancient Capital & Valley of Temples",
    intro: "Nestled in the Himalayan foothills, Chamba is an ancient town with rich cultural heritage and stunning natural beauty.",
    description: "Chamba is one of the oldest towns in Himachal Pradesh, known for its ancient temples, preserved colonial architecture, and breathtaking valley views. This hidden gem offers authentic Himalayan culture away from commercial crowds.",
    highlights: [
      "Chamunda Devi Temple",
      "Champavati River",
      "Ancient Chamba Palace",
      "Bhuri Singh Museum",
      "Manimahesh Temple",
    ],
    special: "Chamba's isolated location has preserved its ancient culture and traditions, offering visitors a glimpse into untouched Himalayan heritage.",
    duration: "5 Nights / 4 Days",
    type: "Cultural Heritage",
    priority: 7,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Chamba",
        description: "Pickup from your location and scenic drive to Chamba. Upon arrival, check in to your hotel and take some time to relax. Evening visit to the famous Chamunda Devi Temple. Overnight stay in Chamba.",
      },
      {
        day: 2,
        title: "Chamba Local Sightseeing",
        description: "After breakfast, explore the ancient Chamba Palace and Bhuri Singh Museum. Walk through the local markets and experience the authentic Himalayan culture. Visit the famous Lakshmi Narayan Temple. Overnight stay in Chamba.",
      },
      {
        day: 3,
        title: "Manimahesh & Champavati",
        description: "Full day excursion to Manimahesh Temple, one of the most revered Shiva temples in the region. Later, enjoy the scenic beauty of Champavati River and surrounding valleys. Return to Chamba for overnight stay.",
      },
      {
        day: 4,
        title: "Khajjiar Excursion",
        description: "Day trip to the famous Khajjiar Lake and meadow. Enjoy the stunning natural beauty and optional activities like horse riding. Experience the pristine mountain environment. Return to Chamba for overnight stay.",
      },
      {
        day: 5,
        title: "Departure",
        description: "After breakfast, check out from the hotel. Begin your return journey with beautiful memories of ancient Chamba's cultural heritage and natural beauty.",
      },
    ],
    inclusions: [
      "Comfortable AC vehicle",
      "Hotel accommodation",
      "Driver allowances",
      "All tolls & taxes",
      "Sightseeing as per itinerary",
    ],
    exclusions: [
      "Meals",
      "Entry tickets",
      "Personal expenses",
      "Adventure activities",
      "Tips",
    ],
  },
  {
    id: "leh-ladakh",
    name: "Leh Ladakh",
    image: destLehLadakh,
    subtitle: "Land of High Passes & Buddhist Monasteries",
    intro: "Leh Ladakh, the land of high mountain passes and ancient Buddhist monasteries, offers a spiritual journey amidst breathtaking Himalayan landscapes.",
    description: "Leh Ladakh is a high-altitude desert known for its stunning landscapes, ancient monasteries, and adventure opportunities. From the magnetic hill to Pangong Lake, every moment in Ladakh is unforgettable.",
    highlights: [
      "Pangong Tso Lake",
      "Khardungla Pass",
      "Hemis Monastery",
      "Thiksey Monastery",
      "Nubra Valley",
    ],
    special: "At over 11,000 feet, Leh is one of the highest permanently inhabited towns in the world, offering a unique high-altitude experience.",
    duration: "5 Nights / 4 Days",
    type: "High Altitude Adventure",
    priority: 8,
    itinerary: [
      {
        day: 1,
        title: "Arrival & Leh Local",
        description: "Arrive at Leh airport and transfer to your hotel. Rest and acclimatize to the high altitude. Evening visit to Shanti Stupa and Leh Market. Overnight stay in Leh.",
      },
      {
        day: 2,
        title: "Hemis & Thiksey",
        description: "Full day excursion to Hemis Monastery, the largest Buddhist monastery in Ladakh. Later visit Thiksey Monastery with its stunning location and architecture. Return to Leh for overnight stay.",
      },
      {
        day: 3,
        title: "Khardungla Pass",
        description: "Drive over the famous Khardungla Pass (18,380 feet) - one of the highest motorable roads in the world. Enjoy breathtaking views of the Nubra Valley. Return to Leh for overnight stay.",
      },
      {
        day: 4,
        title: "Pangong Lake",
        description: "Full day excursion to the stunning Pangong Tso Lake (14,270 feet). Enjoy the crystal clear waters and changing colors of this high-altitude lake. Return to Leh for overnight stay.",
      },
      {
        day: 5,
        title: "Departure",
        description: "After breakfast, check out from the hotel. Transfer to Leh airport for your onward journey, carrying memories of the magnificent Himalayan landscapes.",
      },
    ],
    inclusions: [
      "Comfortable AC vehicle",
      "Hotel accommodation",
      "Driver allowances",
      "All tolls & taxes",
      "Sightseeing as per itinerary",
    ],
    exclusions: [
      "Meals",
      "Entry tickets",
      "Personal expenses",
      "Adventure activities",
      "Tips",
    ],
  },
  {
    id: "spiti-valley",
    name: "Spiti Valley",
    image: destSpitiValley,
    subtitle: "Cold Mountain Desert & Ancient Monasteries",
    intro: "The Spiti Valley, a cold mountain desert in Himachal Pradesh, offers raw Himalayan beauty with ancient Buddhist monasteries.",
    description: "Spiti Valley is a remote Himalayan valley known for its stark landscapes, ancient monasteries, and unique culture. This high-altitude desert offers adventure seekers and spiritual seekers an unforgettable experience.",
    highlights: [
      "Key Monastery",
      "Kibber Village",
      "Pin Valley",
      "Dhankar Lake",
      "Tabo Monastery",
    ],
    special: "Spiti Valley remains cut off from the world for 6 months due to heavy snowfall, preserving its ancient Buddhist culture and traditions.",
    duration: "5 Nights / 4 Days",
    type: "High Altitude Adventure",
    priority: 9,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kaza",
        description: "Arrive at Kaza, the headquarters of Spiti Valley. Check in to your hotel and rest. Evening visit to the famous Key Monastery with its stunning location. Overnight stay in Kaza.",
      },
      {
        day: 2,
        title: "Kibber & Pin Valley",
        description: "Full day excursion to Kibber Village, one of the highest villages in Asia. Later visit the beautiful Pin Valley and enjoy the scenic mountain landscapes. Return to Kaza for overnight stay.",
      },
      {
        day: 3,
        title: "Dhankar Lake & Tabo",
        description: "Visit Dhankar Lake, a high-altitude freshwater lake. Later explore the ancient Tabo Monastery, known as the Ajanta of the Himalayas. Return to Kaza for overnight stay.",
      },
      {
        day: 4,
        title: "Langza & Hikkim",
        description: "Excursion to Langza Village for fossil hunting and Hikkim Village with its unique monastery. Experience the local Spiti culture and traditions. Return to Kaza for overnight stay.",
      },
      {
        day: 5,
        title: "Departure",
        description: "After breakfast, check out from the hotel. Begin your return journey with memories of the pristine Spiti Valley and its ancient Buddhist heritage.",
      },
    ],
    inclusions: [
      "Comfortable AC vehicle",
      "Hotel accommodation",
      "Driver allowances",
      "All tolls & taxes",
      "Sightseeing as per itinerary",
    ],
    exclusions: [
      "Meals",
      "Entry tickets",
      "Personal expenses",
      "Adventure activities",
      "Tips",
    ],
  },
  {
    id: "kufri-narkanda",
    name: "Kufri - Narkanda",
    image: destKufri,
    subtitle: "Snow Adventures & Mountain Views",
    intro: "Kufri and Narkanda offer perfect winter sports and stunning Himalayan views, making them ideal adventure destinations.",
    description: "Kufri and Narkanda are popular hill stations near Shimla, known for winter sports, adventure activities, and breathtaking mountain views. These destinations offer perfect escapes for adventure enthusiasts and nature lovers.",
    highlights: [
      "Kufri Fun World",
      "Skiing & Snowboarding",
      "Himalayan Nature Park",
      "Narkanda Wildlife",
      "Trekking Trails",
    ],
    special: "Kufri transforms into a winter wonderland from December to March, offering some of the best skiing experiences in the Himalayan region.",
    duration: "5 Nights / 4 Days",
    type: "Adventure & Snow Sports",
    priority: 10,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kufri",
        description: "Pickup from your location and drive to Kufri. Upon arrival, check in to your hotel. Evening visit to Kufri Fun World for adventure activities. Overnight stay in Kufri.",
      },
      {
        day: 2,
        title: "Kufri Adventure Sports",
        description: "Full day of adventure activities in Kufri - skiing, snowboarding, and tobogganing. Visit Himalayan Nature Park. Enjoy the stunning snow-covered mountain views. Overnight stay in Kufri.",
      },
      {
        day: 3,
        title: "Narkanda Excursion",
        description: "Day trip to Narkanda, known for its wildlife sanctuary and mountain views. Visit the famous Narkanda Temple. Enjoy nature walks and photography opportunities. Return to Kufri for overnight stay.",
      },
      {
        day: 4,
        title: "Mashobra & Chail",
        description: "Excursion to Mashobra and Chail Palace. Visit the world's highest cricket ground in Chail. Explore the beautiful pine forests and mountain trails. Return to Kufri for overnight stay.",
      },
      {
        day: 5,
        title: "Departure",
        description: "After breakfast, check out from the hotel. Begin your return journey with wonderful memories of snow adventures and mountain beauty.",
      },
    ],
    inclusions: [
      "Comfortable AC vehicle",
      "Hotel accommodation",
      "Driver allowances",
      "All tolls & taxes",
      "Sightseeing as per itinerary",
    ],
    exclusions: [
      "Meals",
      "Entry tickets",
      "Personal expenses",
      "Adventure activities",
      "Tips",
    ],
  },
  {
    id: "golden-temple",
    name: "Golden Temple (Amritsar)",
    image: destGoldenTemple,
    subtitle: "Holiest Sikh Shrine & Spiritual Peace",
    intro: "The Golden Temple in Amritsar is the holiest shrine in Sikhism, offering spiritual solace and architectural grandeur.",
    description: "The Golden Temple, also known as Harmandir Sahib, is the spiritual and cultural center of the Sikh religion. This stunning temple covered in gold offers visitors a peaceful spiritual experience along with delicious community kitchen meals.",
    highlights: [
      "Golden Temple Structure",
      "Amrit Sarovar (Holy Tank)",
      "Community Kitchen (Langar)",
      "Akal Takht Sahib",
      "Wagah Border Ceremony",
      "Spiritual Atmosphere",
    ],
    special: "The Golden Temple serves free meals to over 100,000 visitors daily regardless of caste, creed, or religion, embodying the Sikh principles of equality and community service.",
    duration: "5 Nights / 4 Days",
    type: "Spiritual & Cultural",
    priority: 11,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Amritsar",
        description: "Pickup from your location and drive to Amritsar. Upon arrival, check in to your hotel. Evening visit to the Golden Temple for the beautiful night view. Overnight stay in Amritsar.",
      },
      {
        day: 2,
        title: "Golden Temple & City Tour",
        description: "Full day exploring the Golden Temple complex. Visit the Akal Takht Sahib and participate in the community kitchen (Langar). Evening visit to Jallianwala Bagh Memorial. Overnight stay in Amritsar.",
      },
      {
        day: 3,
        title: "Wagah Border Ceremony",
        description: "Day trip to Wagah Border to witness the ceremonial closing of gates between India and Pakistan. Experience the patriotic atmosphere and unique border ceremony. Return to Amritsar for overnight stay.",
      },
      {
        day: 4,
        title: "Local Sightseeing",
        description: "Visit Durgiana Temple, Maharaja Ranjit Singh Museum, and Ram Bagh. Explore the local markets and taste authentic Punjabi cuisine. Overnight stay in Amritsar.",
      },
      {
        day: 5,
        title: "Departure",
        description: "After breakfast, check out from the hotel. Transfer to airport/station for your onward journey, carrying memories of the spiritual peace.",
      },
    ],
    inclusions: [
      "Comfortable AC vehicle",
      "Hotel accommodation",
      "Driver allowances",
      "All tolls & taxes",
      "Sightseeing as per itinerary",
    ],
    exclusions: [
      "Meals",
      "Entry tickets",
      "Personal expenses",
      "Adventure activities",
      "Tips",
    ],
  },
];

// DEPRECATION NOTICE:
// The hardcoded destinations array above is kept for reference only.
// All functions below now use SimpleTours from storage as the single source of truth.
// This ensures admin panel changes reflect immediately on the website.

import { getActiveSimpleTours, getSimpleTourBySlug } from './simpleTours';

// Helper function to get top destinations for homepage (sorted by priority)
// NOW USES SIMPLETOURS FROM STORAGE
export const getHomepageDestinations = (): Destination[] => {
  const tours = getActiveSimpleTours().slice(0, 6);

  // Map SimpleTour to Destination format for backward compatibility
  return tours.map(tour => ({
    id: tour.slug, // Use slug as ID for consistency
    name: tour.tourName,
    image: tour.images?.[0] || '',
    subtitle: tour.location,
    intro: tour.description,
    description: tour.description,
    highlights: tour.highlights || [],
    special: tour.special || '',
    duration: tour.duration || '5 Days',
    type: 'Tour Package',
    priority: tour.priority,
    itinerary: tour.itinerary.map(day => ({
      day: day.dayNumber,
      title: day.title,
      description: day.description,
    })),
    inclusions: tour.inclusions || [],
    exclusions: tour.exclusions || [],
  }));
};

// Helper function to get destination by ID
// NOW USES SIMPLETOURS FROM STORAGE WITH SLUG-BASED LOOKUP
export const getDestinationById = (id: string): Destination | undefined => {
  const tour = getSimpleTourBySlug(id);

  if (!tour) return undefined;

  // Map SimpleTour to Destination format for backward compatibility
  return {
    id: tour.slug,
    name: tour.tourName,
    image: tour.images?.[0] || '',
    subtitle: tour.location,
    intro: tour.description,
    description: tour.description,
    highlights: tour.highlights || [],
    special: tour.special || '',
    duration: tour.duration || '5 Days',
    type: 'Tour Package',
    priority: tour.priority,
    itinerary: tour.itinerary.map(day => ({
      day: day.dayNumber,
      title: day.title,
      description: day.description,
    })),
    inclusions: tour.inclusions || [],
    exclusions: tour.exclusions || [],
  };
};


