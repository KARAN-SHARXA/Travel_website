import { Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import { MapPin, Clock, Calendar, CheckCircle, XCircle, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroDharamshala from '@/assets/hero-dharamshala.jpg';
import { buildWhatsAppUrl } from '@/lib/contact';
import OptimizedImage from '@/components/OptimizedImage';

const DetailsAmbToDharamhala = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/book/amb-dharamshala');
  };

  const handleWhatsAppBooking = () => {
    const message = `Hello,

I want to book *Amb Andaura → Dharamshala Fixed Tour Package*.

*Package:* Amb Andaura → Dharamshala
*Duration:* 4 Nights / 5 Days
*Route:*
  - Day 1: Amb Andaura → Dharamshala (arrival & local exploration)
  - Day 2: Dharamshala → McLeodganj
  - Day 3: Dharamshala → Dalhousie
  - Day 4: Dalhousie → Khajjiar
  - Day 5: Dalhousie → Amb Andaura (departure)

Please share price & details.`;

    window.open(buildWhatsAppUrl(message), '_blank');
  };

  const itinerary = [
    {
      day: 1,
      title: 'Amb Andaura → Dharamshala (Arrival & Local Exploration)',
      description: 'Arrive at Amb Andaura Railway Station and begin your scenic journey to Dharamshala. Upon arrival, check in to your hotel and take some time to relax. In the evening, explore the local area around Dharamshala, visit the famous cricket stadium, and enjoy the peaceful mountain atmosphere. Overnight stay in Dharamshala.',
    },
    {
      day: 2,
      title: 'Dharamshala → McLeodganj',
      description: 'After breakfast, proceed to McLeodganj, the upper town known as Little Lhasa. Visit the Tsuglagkhang Complex (Dalai Lama Temple), explore Tibetan monasteries, and experience the unique blend of Indian and Tibetan cultures. Enjoy the vibrant cafes and local markets. Return to Dharamshala for overnight stay.',
    },
    {
      day: 3,
      title: 'Dharamshala → Dalhousie',
      description: 'After breakfast, travel to Dalhousie, a charming colonial-era hill station spread across five hills. Enjoy the scenic drive through pine forests and mountain valleys. Upon arrival, check in to your hotel. Evening at leisure to explore the colonial architecture and enjoy the cool mountain air. Overnight stay in Dalhousie.',
    },
    {
      day: 4,
      title: 'Dalhousie → Khajjiar',
      description: 'After breakfast, embark on a full-day excursion to Khajjiar, often called the Mini Switzerland of India. Enjoy the lush green meadows, serene lake, and dense forests. Participate in adventure activities like horse riding and zorbing. Take in the breathtaking panoramic views of the surrounding mountains. Return to Dalhousie in the evening for overnight stay.',
    },
    {
      day: 5,
      title: 'Dalhousie → Amb Andaura (Departure)',
      description: 'After breakfast, check out from the hotel and begin your return journey to Amb Andaura Railway Station. Travel through scenic mountain roads, making stops at picturesque viewpoints along the way. Arrive at the railway station in time for your onward departure, carrying beautiful memories of your Himachal adventure.',
    },
  ];

  const inclusions = [
    'Pickup & Drop from Amb Andaura Railway Station',
    'Comfortable AC vehicle for entire journey',
    'Hotel accommodation (4 nights)',
    'Driver allowances & toll charges',
    'All sightseeing as per itinerary',
  ];

  const exclusions = [
    'Meals (breakfast, lunch, dinner)',
    'Entry tickets to monuments & attractions',
    'Adventure activity charges',
    'Personal expenses & tips',
    'Any additional services not mentioned',
  ];

  return (
    <Layout>
      <SEO
        title="Amb Andaura to Dharamshala Package"
        description="Complete 5-day tour package from Amb Andaura Railway Station covering Dharamshala, McLeodganj, Dalhousie, and Khajjiar. Fixed route with hotel accommodation included."
      />
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[360px] sm:min-h-[420px] overflow-hidden">
        <OptimizedImage
          src={heroDharamshala}
          alt="Amb Andaura to Dharamshala"
          className="w-full h-full object-cover"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-cream px-4">
            <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
              Fixed Package
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display">
              Amb Andaura → Dharamshala
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-cream/80 mt-4">4 Nights / 5 Days</p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              {/* Overview */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display">Package Overview</h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
                  Experience the best of Himachal Pradesh with this comprehensive tour package starting from Amb Andaura Railway Station. This carefully curated journey takes you through the spiritual haven of Dharamshala, the Tibetan cultural hub of McLeodganj, the colonial charm of Dalhousie, and the natural beauty of Khajjiar.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Perfect for travelers seeking a complete Himachal experience with pre-planned routes, comfortable accommodations, and hassle-free travel arrangements. This package combines spiritual exploration, cultural immersion, and natural beauty in one seamless journey.
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display">Package Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Dharamshala Cricket Stadium & Local Exploration',
                    'McLeodganj - Little Lhasa & Tibetan Culture',
                    'Dalhousie Colonial Hill Station',
                    'Khajjiar - Mini Switzerland of India',
                    'Scenic Mountain Drives & Panoramic Views',
                  ].map((highlight, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                      <MapPin size={18} className="text-primary flex-shrink-0" />
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What Makes It Special */}
              <Card className="card-travel bg-primary/5 border-primary/20">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-3 font-display text-primary">
                    Why Choose This Package?
                  </h3>
                  <p className="text-muted-foreground">
                    This fixed package offers a perfect blend of convenience and exploration. With pickup from Amb Andaura Railway Station, you can start your journey immediately upon arrival. The itinerary covers multiple destinations in a logical sequence, ensuring you experience the diverse beauty of Himachal Pradesh without the hassle of planning individual bookings.
                  </p>
                </CardContent>
              </Card>

              {/* 5-Day Itinerary */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 font-display">5-Day Tour Itinerary</h2>
                <div className="space-y-4">
                  {itinerary.map((day) => (
                    <Card key={day.day} className="card-travel overflow-hidden">
                      <CardContent className="p-0">
                        <div className="flex flex-col sm:flex-row">
                          <div className="bg-primary text-primary-foreground p-4 flex items-center justify-center min-w-[80px] sm:min-w-[100px]">
                            <div className="text-center">
                              <span className="text-xs uppercase tracking-wider">Day</span>
                              <span className="text-2xl sm:text-3xl font-bold block">{day.day}</span>
                            </div>
                          </div>
                          <div className="p-4 md:p-6 flex-1">
                            <h4 className="text-base md:text-lg font-bold mb-2">{day.title}</h4>
                            <p className="text-sm md:text-base text-muted-foreground">{day.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <Card className="card-travel">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-lg font-bold mb-4 font-display flex items-center gap-2 text-green-600">
                      <CheckCircle size={20} />
                      Inclusions
                    </h3>
                    <ul className="space-y-2">
                      {inclusions.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="card-travel">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-lg font-bold mb-4 font-display flex items-center gap-2 text-red-600">
                      <XCircle size={20} />
                      Exclusions
                    </h3>
                    <ul className="space-y-2">
                      {exclusions.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <XCircle size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4 md:space-y-6">
                {/* Quick Info Card */}
                <Card className="card-travel">
                  <CardContent className="p-4 md:p-6 space-y-4">
                    <h3 className="text-lg md:text-xl font-bold font-display">Quick Info</h3>

                    <div className="flex items-start gap-3">
                      <Clock className="text-primary flex-shrink-0 mt-1" size={18} />
                      <div>
                        <span className="font-medium text-sm block">Duration</span>
                        <span className="text-muted-foreground text-sm">4 Nights / 5 Days</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="text-primary flex-shrink-0 mt-1" size={18} />
                      <div>
                        <span className="font-medium text-sm block">Pickup Point</span>
                        <span className="text-muted-foreground text-sm">Amb Andaura Railway Station</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Calendar className="text-primary flex-shrink-0 mt-1" size={18} />
                      <div>
                        <span className="font-medium text-sm block">Best Time</span>
                        <span className="text-muted-foreground text-sm">March - June, Sept - Nov</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Booking Card */}
                <Card className="card-travel bg-charcoal text-cream">
                  <CardContent className="p-4 md:p-6 space-y-4">
                    <h3 className="text-lg md:text-xl font-bold font-display">Book This Package</h3>
                    <p className="text-cream/70 text-sm">4 Nights / 5 Days package from Amb Andaura to Dharamshala</p>

                    <div className="space-y-3">
                      <Button
                        onClick={handleBookNow}
                        className="w-full bg-primary text-primary-foreground hover:bg-amber-dark py-5 text-base"
                      >
                        <MessageCircle className="mr-2" size={18} />
                        Book This Package <ArrowRight className="ml-2" size={18} />
                      </Button>

                      <Button
                        onClick={handleWhatsAppBooking}
                        className="w-full border border-cream text-cream bg-transparent hover:bg-cream hover:text-charcoal py-5 text-base"
                      >
                        <Phone className="mr-2" size={18} />
                        WhatsApp Booking
                      </Button>
                    </div>

                    <p className="text-cream/80 text-xs text-center">
                      Price quoted after booking • No advance payment
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DetailsAmbToDharamhala;
