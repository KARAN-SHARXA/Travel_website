import { Link, useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import { MapPin, Clock, Calendar, CheckCircle, XCircle, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getFixedPackageBySlug, generateBookingId, addBookingLog, generateFixedPackageBookingMessage, getStations } from '@/data';
import { useToast } from '@/hooks/use-toast';
import { useMemo, useState } from 'react';
import { buildWhatsAppUrl } from '@/lib/contact';
import { CONTACT } from '@/lib/contact';
import heroDharamshala from '@/assets/hero-dharamshala.jpg';
import OptimizedImage from '@/components/OptimizedImage';

const PackageDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isBooking, setIsBooking] = useState(false);

  const packageData = useMemo(() => getFixedPackageBySlug(slug || ''), [slug]);

  if (!packageData) {
    return (
      <Layout>
        <section className="py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Package Not Found</h1>
          <p className="text-muted-foreground mb-8">The package you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </section>
      </Layout>
    );
  }

  const handleBookNow = () => {
    navigate(`/book/${packageData.slug}`);
  };

  const handleDirectBooking = () => {
    setIsBooking(true);
    const bookingNumber = generateBookingId();

    const pickupName = getStations().find(s => s.id === (packageData as any).pickupLocationId)?.name || 'Fixed';

    // Create booking log
    addBookingLog({
      packageName: packageData.packageName,
      customerName: 'Direct Booking',
      customerPhone: 'Pending',
      status: 'pending',
    }, 'fixed-package');

    // Generate WhatsApp message
    const message = generateFixedPackageBookingMessage({
      packageName: packageData.packageName,
      pickup: pickupName,
      customerName: 'Direct Booking',
      customerPhone: 'Pending',
      status: 'pending',
    }, packageData.packageName, packageData.duration).replace('BOOKING_PLACEHOLDER', bookingNumber);

    toast({
      title: 'Booking Initiated',
      description: `Booking ID ${bookingNumber}. Redirecting to WhatsApp…`,
    });

    setTimeout(() => {
      window.open(
        buildWhatsAppUrl(message),
        '_blank'
      );
      setIsBooking(false);
    }, 800);
  };

  const handleWhatsAppBooking = () => {
    const bookingNumber = generateBookingId();

    const pickupName = getStations().find(s => s.id === (packageData as any).pickupLocationId)?.name || 'Fixed';

    // Generate WhatsApp message
    const message = generateFixedPackageBookingMessage({
      packageName: packageData.packageName,
      pickup: pickupName,
      customerName: 'WhatsApp Enquiry',
      customerPhone: 'Pending',
      status: 'pending',
    }, packageData.packageName, packageData.duration).replace('BOOKING_PLACEHOLDER', bookingNumber);

    window.open(buildWhatsAppUrl(message), '_blank');
  };

  const inclusions = [
    'Pickup & Drop from ' + (packageData.pickupType === 'station' ? 'Railway Station' : 'Airport'),
    'Comfortable AC vehicle for entire journey',
    packageData.packageMode === 'tour' ? 'Hotel accommodation' : 'Direct transfer service',
    'Driver allowances & toll charges',
    packageData.packageMode === 'tour' ? 'All sightseeing as per itinerary' : 'All route charges',
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
        title={packageData.packageName}
        description={packageData.shortDescription}
        canonicalUrl={typeof window !== 'undefined' ? `${window.location.origin}/packages/${packageData.slug}` : undefined}
        ogType="article"
        structuredData={{
          "@context": "https://schema.org",
          "@type": packageData.packageMode === 'tour' ? "TouristTrip" : "Service",
          "name": packageData.packageName,
          "description": packageData.shortDescription,
          "image": packageData.images,
          "provider": {
            "@type": "TravelAgency",
            "name": "Kuldeep Tour & Travel",
            "telephone": CONTACT.phoneE164,
            "email": CONTACT.email,
            "sameAs": [CONTACT.facebookUrl, CONTACT.instagramUrl],
          },
          ...(packageData.packageMode === 'tour'
            ? {
              "itinerary": {
                "@type": "ItemList",
                "itemListElement": (packageData.itinerary || []).map((d, idx) => ({
                  "@type": "ListItem",
                  "position": idx + 1,
                  "name": d.title,
                  "description": d.description,
                })),
              },
            }
            : {
              "serviceType": "Taxi Transfer",
              "areaServed": "India",
            }),
        }}
      />
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[360px] sm:min-h-[420px] overflow-hidden">
        <OptimizedImage
          src={packageData.images[0] || heroDharamshala}
          alt={packageData.packageName}
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
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display">
              {packageData.packageName}
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-cream/80 mt-3 sm:mt-4">{packageData.duration}</p>
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
                  {packageData.shortDescription}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {packageData.packageMode === 'tour'
                    ? 'This comprehensive tour package covers multiple destinations with pre-planned routes, comfortable accommodations, and hassle-free travel arrangements. Perfect for travelers seeking a complete experience without individual bookings.'
                    : 'This point-to-point transfer service offers direct travel without any stay included. Ideal for travelers looking for efficient and reliable transportation to their destination.'
                  }
                </p>
              </div>

              {/* Highlights */}
              {packageData.packageMode === 'tour' && (
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display">Package Highlights</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {packageData.itinerary.slice(0, 5).map((day, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                        <MapPin size={18} className="text-primary flex-shrink-0" />
                        <span className="text-sm">{day.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* What Makes It Special */}
              <Card className="card-travel bg-primary/5 border-primary/20">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-3 font-display text-primary">
                    Why Choose This Package?
                  </h3>
                  <p className="text-muted-foreground">
                    {packageData.packageMode === 'tour'
                      ? 'This fixed package offers a perfect blend of convenience and exploration. With pre-planned routes and comfortable accommodations, you can experience the best of each destination without the hassle of individual bookings.'
                      : 'This direct transfer service provides reliable and efficient transportation. No stops, no detours - just straight to your destination with professional service.'
                    }
                  </p>
                </CardContent>
              </Card>

              {/* Itinerary */}
              {packageData.packageMode === 'tour' && packageData.itinerary.length > 0 && (
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 font-display">
                    {packageData.itinerary.length}-Day Tour Itinerary
                  </h2>
                  <div className="space-y-4">
                    {packageData.itinerary.map((day) => (
                      <Card key={day.id} className="card-travel overflow-hidden">
                        <CardContent className="p-0">
                          <div className="flex flex-col sm:flex-row">
                            <div className="bg-primary text-primary-foreground p-4 flex items-center justify-center min-w-[80px] sm:min-w-[100px]">
                              <div className="text-center">
                                <span className="text-xs uppercase tracking-wider">Day</span>
                                <span className="text-2xl sm:text-3xl font-bold block">{day.dayNumber}</span>
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
              )}

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
                        <span className="text-muted-foreground text-sm">{packageData.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="text-primary flex-shrink-0 mt-1" size={18} />
                      <div>
                        <span className="font-medium text-sm block">Package Type</span>
                        <span className="text-muted-foreground text-sm">
                          {packageData.packageMode === 'tour' ? 'Multi-destination Tour' : 'Point-to-Point Transfer'}
                        </span>
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
                    <h3 className="text-lg md:text-xl font-bold font-display">
                      {packageData.packageMode === 'tour' ? 'Book This Package' : 'Book This Transfer'}
                    </h3>
                    <p className="text-cream/70 text-sm">
                      {packageData.duration} {packageData.packageName}
                    </p>

                    <div className="space-y-3">
                      {packageData.packageMode === 'tour' && (
                        <Button
                          onClick={handleBookNow}
                          className="w-full bg-primary text-primary-foreground hover:bg-amber-dark py-5 text-base"
                        >
                          <MessageCircle className="mr-2" size={18} />
                          Book This Package <ArrowRight className="ml-2" size={18} />
                        </Button>
                      )}

                      <Button
                        onClick={packageData.packageMode === 'tour' ? handleWhatsAppBooking : handleDirectBooking}
                        className={`${packageData.packageMode === 'tour' ? 'border border-cream text-cream bg-transparent hover:bg-cream hover:text-charcoal' : 'w-full bg-primary text-primary-foreground hover:bg-amber-dark'} py-5 text-base w-full`}
                        disabled={isBooking}
                      >
                        <Phone className="mr-2" size={18} />
                        {isBooking ? 'Processing...' : packageData.packageMode === 'tour' ? 'WhatsApp Booking' : 'Book Now'}
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

export default PackageDetail;
