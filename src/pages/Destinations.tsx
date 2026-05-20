import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import { ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { getHomepageFixedPackages } from '@/data/fixedPackages';
import { memo, useMemo } from 'react';
import OptimizedImage from '@/components/OptimizedImage';

const Destinations = () => {
  const fixedPackages = useMemo(() => getHomepageFixedPackages(), []);

  return (
    <Layout>
      <SEO
        title="Our Fixed Packages | Pre-Planned Tour Routes"
        description="Explore our pre-planned taxi packages from Amb Andaura to Devi Darshan, Dharamshala tours, and Delhi drops. Fixed routes with hassle-free booking."
        keywords="fixed packages, devi darshan package, dharamshala tour, delhi drop, pre-planned routes, himachal packages"
      />

      {/* Hero Section */}
      <section className="bg-charcoal text-cream py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Fixed Packages</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 font-display">
            Pre-Planned <span className="text-primary">Routes</span>
          </h1>
          <p className="text-cream/70 mt-4 max-w-2xl mx-auto">
            Ready-to-book packages with fixed pickup points, routes, and schedules. Perfect for hassle-free travel.
          </p>
        </div>
      </section>

      {/* Fixed Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {fixedPackages.map((pkg, index) => (
              <MemoFixedPackageCard
                key={pkg.id}
                packageData={pkg}
                index={index}
              />
            ))}
          </div>

          {/* Custom Trip CTA */}
          <div className="mt-16 text-center bg-muted rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display">
              Want a Custom Itinerary?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              We offer custom trips to any destination in Himachal Pradesh and beyond. Tell us where you want to go!
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-amber-dark">
              <Link to="/book/custom">Book Custom Trip</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Fixed Package Card Component with Auto-playing Image Slider
const FixedPackageCard = ({
  packageData,
  index,
}: {
  packageData: any;
  index: number;
}) => {
  const images = Array.isArray(packageData.images) ? packageData.images : [packageData.images?.[0] || ''];
  const primaryImage = images[0];

  const detailLink = `/packages/${packageData.slug}`;
  const bookLink = `/book/${packageData.slug}`;
  const isTour = packageData.packageMode === 'tour';

  return (
    <Card className="card-travel overflow-hidden">
      <div className={`grid grid-cols-1 lg:grid-cols-2`}>
        {/* Image Section */}
        <div className="relative bg-muted aspect-[16/10] lg:aspect-auto lg:min-h-[18rem]">
          {primaryImage ? (
            <OptimizedImage
              src={primaryImage}
              alt={`${packageData.packageName} - Image`}
              className="absolute inset-0 w-full h-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          ) : (
            <div className="absolute inset-0 bg-charcoal" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full font-medium text-sm">
            {isTour ? 'Tour Package' : 'Drop Service'}
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-cream font-display drop-shadow-lg">
              {packageData.packageName}
            </h3>
          </div>
        </div>

        {/* Content Section */}
        <CardContent className="p-5 sm:p-6 md:p-8 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full border border-primary">
              Fixed Package
            </span>
            {packageData.duration && (
              <span className="flex items-center gap-1 text-muted-foreground text-sm">
                <Clock size={16} />
                {packageData.duration}
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 font-display">{packageData.packageName}</h2>
          <p className="text-muted-foreground mb-6">{packageData.shortDescription}</p>

          <div className="flex flex-col sm:flex-row gap-3">
            {isTour && (
              <Button asChild variant="outline" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to={detailLink} className="flex items-center justify-center gap-2">
                  View Details <ArrowRight size={18} />
                </Link>
              </Button>
            )}
            <Button asChild className={`${isTour ? 'flex-1' : 'w-full'} bg-primary text-primary-foreground hover:bg-amber-dark`}>
              <Link to={bookLink} className="flex items-center justify-center gap-2">
                Book Now <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

const MemoFixedPackageCard = memo(FixedPackageCard);

export default Destinations;
