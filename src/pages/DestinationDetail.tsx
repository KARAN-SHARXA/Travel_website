import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { MapPin, Clock, Calendar, CheckCircle, XCircle, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useMemo } from 'react';
import { getDestinationById } from '@/data/destinations';
import { getActiveSimpleTours } from '@/data/simpleTours';
import { buildWhatsAppUrl } from '@/lib/contact';
import OptimizedImage from '@/components/OptimizedImage';

const DestinationDetail = () => {
  const { destinationId } = useParams<{ destinationId: string }>();
  const navigate = useNavigate();
  const destination = useMemo(() => (destinationId ? getDestinationById(destinationId) : undefined), [destinationId]);
  const otherTours = useMemo(() => getActiveSimpleTours(), []);

  if (!destination) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Destination Not Found</h1>
          <p className="text-muted-foreground mb-8">The destination you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/himachal-destinations">View All Destinations</Link>
          </Button>

        </div>
      </Layout>
    );
  }

  const handleBookNow = () => {
    // Unified booking flow (works for tours)
    navigate(`/book/${destination.id}`);
  };

  const handleWhatsAppBooking = () => {
    const message = `Hello,\n\nI want to book the following tour:\n\nPackage Type: ${destination.name} Tour\nDays: 5 Days\nTravel Date: To be decided\nPickup City: To be confirmed\nNumber of Persons: To be confirmed\n\nPlease share details.`;

    window.open(buildWhatsAppUrl(message), '_blank');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[360px] sm:min-h-[420px] overflow-hidden">
        <OptimizedImage
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-cream px-4">
            <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
              {destination.type}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display">
              {destination.name}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-cream/80 mt-4">{destination.subtitle}</p>
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
                <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display">Overview</h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">{destination.intro}</p>
                <p className="text-muted-foreground leading-relaxed">{destination.description}</p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display">Top Attractions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {destination.highlights.map((highlight, i) => (
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
                    What Makes {destination.name} Special?
                  </h3>
                  <p className="text-muted-foreground">{destination.special}</p>
                </CardContent>
              </Card>

              {/* 5-Day Itinerary */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 font-display">5-Day Tour Itinerary</h2>
                <div className="space-y-4">
                  {destination.itinerary.map((day) => (
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
                      {destination.inclusions.map((item, i) => (
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
                      {destination.exclusions.map((item, i) => (
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
                        <span className="text-muted-foreground text-sm">{destination.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="text-primary flex-shrink-0 mt-1" size={18} />
                      <div>
                        <span className="font-medium text-sm block">Type</span>
                        <span className="text-muted-foreground text-sm">{destination.type}</span>
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
                    <h3 className="text-lg md:text-xl font-bold font-display">Book This Trip</h3>
                    <p className="text-cream/70 text-sm">5 Days / 4 Nights package to {destination.name}</p>
                    
                    <div className="space-y-3">
                      <Button 
                        onClick={handleBookNow}
                        className="w-full bg-primary text-primary-foreground hover:bg-amber-dark py-5 text-base"
                      >
                        Book Now <ArrowRight className="ml-2" size={18} />
                      </Button>
                      
                      <Button 
                        onClick={handleWhatsAppBooking}
                        variant="outline"
                        className="w-full border-cream text-cream hover:bg-cream hover:text-charcoal py-5 text-base"
                      >
                        <Phone className="mr-2" size={18} />
                        WhatsApp Booking
                      </Button>
                    </div>

                    <p className="text-cream/60 text-xs text-center">
                      Price quoted after booking • No advance payment
                    </p>
                  </CardContent>
                </Card>

                

                {/* Other Destinations */}
                <Card className="card-travel">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-lg font-bold font-display mb-4">Explore More</h3>
                    <div className="space-y-3">
                      {otherTours
                        .filter((t) => t.slug !== destination.id)
                        .slice(0, 3)
                        .map((t) => (
                        <Link
                          key={t.id}
                          to={`/explore-himachal/${t.slug}`}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                        >
                          <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                            <OptimizedImage
                              src={t.images?.[0] || ''}
                              alt={t.tourName}
                              className="w-full h-full object-cover"
                              sizes="48px"
                            />
                          </div>
                          <div className="min-w-0">
                            <span className="font-medium text-sm block truncate">{t.tourName}</span>
                            <span className="text-xs text-muted-foreground">{t.location}</span>
                          </div>
                          
                        </Link>
                      ))}
                    </div>
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

export default DestinationDetail;
