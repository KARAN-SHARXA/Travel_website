import { memo, useMemo, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, MapPin, MessageCircle, Phone } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getActiveSimpleTours, getSimpleTourBySlug } from '@/data/simpleTours';
import OptimizedImage from '@/components/OptimizedImage';

const ExploreHimachal = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const tours = useMemo(() => getActiveSimpleTours(), []);

  // Filter tours based on search query
  const filteredTours = useMemo(() => {
    if (!searchQuery.trim()) return tours;

    const query = searchQuery.toLowerCase();
    return tours.filter(tour =>
      tour.tourName.toLowerCase().includes(query) ||
      tour.location.toLowerCase().includes(query) ||
      tour.description.toLowerCase().includes(query)
    );
  }, [tours, searchQuery]);

  const tour = useMemo(() => (slug ? getSimpleTourBySlug(slug) : undefined), [slug]);

  // If slug provided, show detail page
  if (tour) {
    const primaryImage = tour.images?.[0];
    const gallery = (tour.images || []).slice(1);

    const handleBookNow = () => {
      navigate(`/book/${tour.slug}`, {
        state: {
          tourName: tour.tourName,
          location: tour.location,
          duration: tour.duration,
          startingPrice: tour.startingPrice,
          tourId: tour.id
        }
      });
    };

    return (
      <Layout>
        <SEO
          title={`${tour.tourName} - ${tour.duration || '5 Days Tour'}`}
          description={tour.description}
          keywords={`${tour.tourName}, ${tour.location}, Himachal Pradesh, tour package`}
        />

        {/* Hero with Image */}
        <section className="relative h-[60vh] min-h-[360px] sm:min-h-[420px]">
          <OptimizedImage
            src={tour.images?.[0] || '/placeholder.jpg'}
            alt={tour.tourName}
            className="w-full h-full object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
            <div className="container mx-auto">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-cream font-display mb-3 sm:mb-4">
                {tour.tourName}
              </h1>
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 text-cream/90">
                <span className="bg-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base">{tour.duration || '5 Days'}</span>
                <span className="bg-charcoal/80 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base">{tour.location}</span>
                {tour.startingPrice && (
                  <span className="bg-charcoal/80 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base">
                    Starting from ₹{tour.startingPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Detail Content + Sidebar (old look) */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Main */}
              <div className="lg:col-span-2 space-y-6 md:space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display">Overview</h2>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    {tour.description}
                  </p>
                </div>

                {gallery.length > 0 && (
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display">Gallery</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {gallery.map((img, index) => (
                        <div key={index} className="overflow-hidden rounded-xl bg-muted aspect-[4/3]">
                          <OptimizedImage
                            src={img}
                            alt={`${tour.tourName} - ${index + 2}`}
                            className="w-full h-full object-cover"
                            sizes="(max-width: 640px) 100vw, 50vw"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Itinerary Section */}
                {tour.itinerary && tour.itinerary.length > 0 && (
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 font-display">Tour Itinerary</h2>
                    <div className="space-y-6">
                      {tour.itinerary.map((day, index) => (
                        <div key={day.id} className="relative">
                          {/* Day connector line */}
                          {index < tour.itinerary.length - 1 && (
                            <div className="absolute left-6 top-12 w-0.5 h-full bg-border -z-10" />
                          )}

                          <div className="flex gap-4">
                            {/* Day number circle */}
                            <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                              {day.dayNumber}
                            </div>

                            {/* Day content */}
                            <div className="flex-1">
                              <div className="bg-card border rounded-lg p-6">
                                <h3 className="text-xl font-semibold mb-3 font-display">
                                  {day.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                  {day.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-4 md:space-y-6">
                  <Card className="card-travel">
                    <CardContent className="p-4 md:p-6 space-y-4">
                      <h3 className="text-lg md:text-xl font-bold font-display">Quick Info</h3>

                      {tour.duration && (
                        <div className="flex items-start gap-3">
                          <Clock className="text-primary flex-shrink-0 mt-1" size={18} />
                          <div>
                            <span className="font-medium text-sm block">Duration</span>
                            <span className="text-muted-foreground text-sm">{tour.duration}</span>
                          </div>
                        </div>
                      )}

                      <div className="flex items-start gap-3">
                        <MapPin className="text-primary flex-shrink-0 mt-1" size={18} />
                        <div>
                          <span className="font-medium text-sm block">Location</span>
                          <span className="text-muted-foreground text-sm">{tour.location}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Calendar className="text-primary flex-shrink-0 mt-1" size={18} />
                        <div>
                          <span className="font-medium text-sm block">Type</span>
                          <span className="text-muted-foreground text-sm">Tour Package</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-travel bg-charcoal text-cream">
                    <CardContent className="p-4 md:p-6 space-y-4">
                      <h3 className="text-lg md:text-xl font-bold font-display">Book This Trip</h3>
                      <p className="text-cream/70 text-sm">
                        {tour.duration ? `${tour.duration} ` : ''}tour to {tour.tourName}
                      </p>

                      <div className="space-y-3">
                        <Button
                          onClick={handleBookNow}
                          className="w-full bg-primary text-primary-foreground hover:bg-amber-dark py-5 text-base"
                        >
                          Book Now <ArrowRight className="ml-2" size={18} />
                        </Button>

                        <Button
                          onClick={handleBookNow}
                          className="w-full border border-cream text-cream bg-transparent hover:bg-cream hover:text-charcoal py-5 text-base"
                        >
                          <Phone className="mr-2" size={18} />
                          WhatsApp Booking
                        </Button>
                      </div>

                      <p className="text-cream/80 text-xs text-center">
                        Price shared on WhatsApp • No advance payment
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
  }

  // List page (old wide-card look)
  return (
    <Layout>
      <SEO
        title="Explore Himachal Pradesh"
        description="Discover beautiful destinations in Himachal Pradesh. Customize your trip to Shimla, Manali, Dharamshala, and more."
      />

      {/* Hero */}
      <section className="bg-charcoal text-cream py-10 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-4xl font-bold font-display leading-tight">Explore Himachal Pradesh</h1>
          <p className="text-cream/80 mt-4 max-w-2xl mx-auto">
            Discover the beauty and spirituality of the Himalayan state
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search tours by name or location..."
              className="w-full px-4 py-3 sm:px-6 sm:py-4 rounded-xl border-2 border-border focus:border-primary focus:outline-none text-base sm:text-lg"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Tours */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredTours.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {searchQuery ? `No tours found matching "${searchQuery}"` : 'No tours available at the moment.'}
              </p>
            </div>
          ) : (
            <>
              {searchQuery && (
                <p className="text-center text-muted-foreground mb-6">
                  Found {filteredTours.length} tour{filteredTours.length !== 1 ? 's' : ''}
                </p>
              )}
              <div className="space-y-12">
                {filteredTours.map((t, index) => (
                  <MemoTourCard key={t.id} tour={t} index={index} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

const TourCard = ({
  tour,
  index,
}: {
  tour: ReturnType<typeof getActiveSimpleTours>[number];
  index: number;
}) => {
  const navigate = useNavigate();
  const images = Array.isArray(tour.images) ? tour.images : [];
  const primaryImage = images[0];

  const detailLink = `/explore-himachal/${tour.slug}`;

  const handleBookNow = () => {
    navigate(`/book/${tour.slug}`, {
      state: {
        tourName: tour.tourName,
        location: tour.location,
        duration: tour.duration,
        startingPrice: tour.startingPrice,
        tourId: tour.id
      }
    });
  };

  return (
    <Card className="card-travel overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div className={`relative bg-muted aspect-[16/10] lg:aspect-auto lg:min-h-[18rem] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
          {primaryImage ? (
            <OptimizedImage
              src={primaryImage}
              alt={`${tour.tourName} - Image`}
              className="absolute inset-0 w-full h-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          ) : (
            <div className="absolute inset-0 bg-charcoal" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full font-medium text-sm">
            Tour
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6">
            <div className="inline-block max-w-full bg-charcoal/60 backdrop-blur-sm rounded-lg px-3 py-2">
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-cream font-display drop-shadow-lg leading-tight break-words">
                {tour.tourName}
              </h3>
            </div>
          </div>
        </div>

        {/* Content */}
        <CardContent className={`p-5 sm:p-6 md:p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full border border-primary">
              Explore Himachal
            </span>
            {tour.duration && (
              <span className="flex items-center gap-1 text-muted-foreground text-sm">
                <Clock size={16} />
                {tour.duration}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 mb-3">
            <MapPin size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground">{tour.location}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 font-display">{tour.tourName}</h2>
          <p className="text-muted-foreground mb-6 line-clamp-3">{tour.description}</p>

          {typeof tour.startingPrice === 'number' && (
            <p className="text-primary font-semibold mb-6">Starting from ₹{tour.startingPrice}</p>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild variant="outline" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to={detailLink} className="flex items-center justify-center gap-2">
                View Details <ArrowRight size={18} />
              </Link>
            </Button>
            <Button onClick={handleBookNow} className="flex-1 bg-primary text-primary-foreground hover:bg-amber-dark">
              Book Now <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

const MemoTourCard = memo(TourCard);

export default ExploreHimachal;


