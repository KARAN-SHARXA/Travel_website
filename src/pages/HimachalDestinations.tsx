import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { getHomepageDestinations } from '@/data/destinations';
import OptimizedImage from '@/components/OptimizedImage';

const HimachalDestinations = () => {
  const navigate = useNavigate();
  const destinations = useMemo(() => getHomepageDestinations(), []);

  return (
    <Layout>
      <SEO
        title="Explore Himachal Pradesh"
        description="Discover the beauty and spirituality of Himachal Pradesh with our comprehensive travel guide."
      />

      {/* Hero Section */}
      <section className="bg-charcoal text-cream py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Explore Himachal
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 font-display">
            Himachal Pradesh <span className="text-primary">Destinations</span>
          </h1>
          <p className="text-cream/70 mt-4 max-w-2xl mx-auto">
            Discover the beauty and spirituality of the Himalayan state
          </p>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 space-y-20">
          {destinations.map((dest, index) => (
            <div key={dest.id} id={dest.id} className="scroll-mt-24">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
              >
                {/* Image */}
                <Link
                  to={`/destination/${dest.id}`}
                  className={`relative rounded-2xl overflow-hidden group bg-muted aspect-[4/3] lg:aspect-[16/10] ${index % 2 === 1 ? 'lg:order-2' : ''
                    }`}
                >
                  <OptimizedImage
                    src={dest.image}
                    alt={dest.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    {dest.subtitle}
                  </div>
                </Link>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-display">
                    {dest.name}
                  </h2>

                  <p className="text-muted-foreground mb-4">
                    {dest.intro}
                  </p>

                  <p className="text-muted-foreground mb-6">
                    {dest.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h3 className="font-bold mb-3">Top Attractions</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {dest.highlights.slice(0, 4).map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <MapPin size={14} className="text-primary" />
                          <span className="line-clamp-1">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Buttons – ExploreHimachal LOGIC */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="bg-primary text-primary-foreground hover:bg-amber-dark">
                      <Link
                        to={`/destination/${dest.id}`}
                        className="flex items-center gap-2"
                      >
                        View Full Details <ArrowRight size={18} />
                      </Link>
                    </Button>

                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => {
                        navigate('/book/custom?destination=' + encodeURIComponent(dest.name));
                      }}
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default HimachalDestinations;
