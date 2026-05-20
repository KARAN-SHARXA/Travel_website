import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { MapPin, Clock, Calendar, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getTempleById, temples } from '@/data/temples';
import { buildWhatsAppUrl } from '@/lib/contact';
import OptimizedImage from '@/components/OptimizedImage';

const TempleDetail = () => {
  const { templeId } = useParams<{ templeId: string }>();
  const navigate = useNavigate();
  const temple = templeId ? getTempleById(templeId) : undefined;

  if (!temple) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Temple Not Found</h1>
          <p className="text-muted-foreground mb-8">The temple you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/destinations">View All Destinations</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const handleBookNow = () => {
    navigate(`/book/custom?destination=${encodeURIComponent(temple.name)}`);
  };

  const handleWhatsAppBooking = () => {
    const message = `Hello,\\n\\nI want to book the following tour:\\n\\nPackage Type: ${temple.fullName}\\nDays: 5 Days\\nTravel Date: To be decided\\nPickup City: To be confirmed\\nNumber of Persons: To be confirmed\\n\\nPlease share details.`;

    window.open(buildWhatsAppUrl(message), '_blank');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[360px] sm:min-h-[420px] overflow-hidden">
        <OptimizedImage
          src={temple.image}
          alt={temple.name}
          className="w-full h-full object-cover"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-cream px-4">
            <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
              {temple.subtitle}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display">
              {temple.fullName}
            </h1>
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
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{temple.overview}</p>
              </div>

              {/* History */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display">History & Significance</h2>
                <p className="text-muted-foreground leading-relaxed">{temple.history}</p>
              </div>

              {/* Darshan Details */}
              <Card className="card-travel">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-4 font-display flex items-center gap-2">
                    <Clock className="text-primary" size={20} />
                    Darshan Details
                  </h3>
                  <p className="text-muted-foreground">{temple.darshanDetails}</p>
                </CardContent>
              </Card>

              {/* 5-Day Itinerary */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 font-display">5-Day Pilgrimage Itinerary</h2>
                <div className="space-y-4">
                  {temple.itinerary.map((day) => (
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
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4 md:space-y-6">
                {/* Quick Info Card */}
                <Card className="card-travel">
                  <CardContent className="p-4 md:p-6 space-y-4">
                    <h3 className="text-lg md:text-xl font-bold font-display">Quick Info</h3>

                    <div className="flex items-start gap-3">
                      <MapPin className="text-primary flex-shrink-0 mt-1" size={18} />
                      <div>
                        <span className="font-medium text-sm block">Location</span>
                        <span className="text-muted-foreground text-sm">{temple.location}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Calendar className="text-primary flex-shrink-0 mt-1" size={18} />
                      <div>
                        <span className="font-medium text-sm block">Best Time to Visit</span>
                        <span className="text-muted-foreground text-sm">{temple.bestTime}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="text-primary flex-shrink-0 mt-1" size={18} />
                      <div>
                        <span className="font-medium text-sm block">Tour Duration</span>
                        <span className="text-muted-foreground text-sm">5 Days / 4 Nights</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Booking Card */}
                <Card className="card-travel bg-charcoal text-cream">
                  <CardContent className="p-4 md:p-6 space-y-4">
                    <h3 className="text-lg md:text-xl font-bold font-display">Book This Temple Tour</h3>
                    <p className="text-cream/70 text-sm">Individual booking for {temple.name} only. No combined package required.</p>

                    <div className="space-y-3">
                      <Button
                        onClick={handleBookNow}
                        className="w-full bg-primary text-primary-foreground hover:bg-amber-dark py-5 text-base"
                      >
                        Book Now <ArrowRight className="ml-2" size={18} />
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

                {/* Other Temples */}
                <Card className="card-travel">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-lg font-bold font-display mb-4">Other Sacred Temples</h3>
                    <div className="space-y-3">
                      {temples.filter(t => t.id !== temple.id).slice(0, 3).map((t) => (
                        <Link
                          key={t.id}
                          to={`/temple/${t.id}`}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                        >
                          <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                            <OptimizedImage
                              src={t.image}
                              alt={t.name}
                              className="w-full h-full object-cover"
                              sizes="48px"
                            />
                          </div>
                          <div className="min-w-0">
                            <span className="font-medium text-sm block truncate">{t.name}</span>
                            <span className="text-xs text-muted-foreground">{t.subtitle}</span>
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

export default TempleDetail;
