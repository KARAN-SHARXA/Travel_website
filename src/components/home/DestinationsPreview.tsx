import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getActiveSimpleTours } from '@/data/simpleTours';
import OptimizedImage from '@/components/OptimizedImage';

const DestinationsPreview = () => {
  // Get tours sorted by priority
  const tours = useMemo(() => getActiveSimpleTours().slice(0, 6), []);

  return (
    <section className="py-20 bg-charcoal text-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Popular Destinations</span>
          <h2 className="section-title mt-2 text-cream">
            Explore Himachal <span className="text-primary">Pradesh</span>
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto">
            From sacred temples to serene hill stations, we take you to the best destinations
          </p>
        </div>

        {/* Destinations Grid - 6 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
          {tours.length === 0 ? (
            <div className="col-span-full text-center py-8">
              <p className="text-cream/70">No destinations available at the moment.</p>
            </div>
          ) : (
            tours.map((tour) => (
              <Link key={tour.id} to={`/explore-himachal/${tour.slug}`} className="group">
                <div className="relative rounded-2xl overflow-hidden bg-muted aspect-[4/3]">
                  <OptimizedImage
                    src={tour.images?.[0] || ''}
                    alt={tour.tourName}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
                        {tour.duration || 'Tour Package'}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 font-display group-hover:text-primary transition-colors">
                      {tour.tourName}
                    </h3>
                    <p className="text-cream/70 text-xs sm:text-sm line-clamp-2">{tour.description}</p>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>

        {/* CTA - Read More */}
        {tours.length > 0 && (
          <div className="text-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-amber-dark">
              <Link to="/explore-himachal" className="flex items-center gap-2">
                View All Destinations <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default DestinationsPreview;
