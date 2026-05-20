import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getHomepageFixedPackages } from '@/data/fixedPackages';
import OptimizedImage from '@/components/OptimizedImage';

const FixedPackagesSection = () => {
  const packages = useMemo(() => getHomepageFixedPackages(), []);

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Fixed Taxi Packages</span>
          <h2 className="section-title mt-2">
            Popular <span className="text-primary">Fixed Routes</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Pre-planned packages with fixed pickup, route, and duration. Perfect for hassle-free travel.
          </p>
        </div>

        {/* Fixed Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="card-travel overflow-hidden group">
              <div className="relative bg-muted aspect-[4/3] overflow-hidden">
                <OptimizedImage
                  src={pkg.images[0]}
                  alt={pkg.packageName}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent" />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full font-medium text-sm">
                  Fixed Package
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-cream font-display mb-2">
                    {pkg.packageName}
                  </h3>
                  <div className="flex items-center gap-2 text-cream/80 text-sm">
                    <span>{pkg.duration}</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6 line-clamp-3">{pkg.shortDescription}</p>
                <div className="flex gap-3">
                  {pkg.packageMode === 'tour' && (
                    <Button asChild variant="outline" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Link to={`/packages/${pkg.slug}`} className="flex items-center justify-center gap-2">
                        View Details <ArrowRight size={18} />
                      </Link>
                    </Button>
                  )}
                  <Button asChild className={`${pkg.packageMode === 'tour' ? 'flex-1' : 'w-full'} bg-primary text-primary-foreground hover:bg-amber-dark`}>
                    <Link to={`/book/${pkg.slug}`} className="flex items-center justify-center gap-2">
                      {pkg.packageMode === 'tour' ? 'Book Now' : 'Book Drop'} <ArrowRight size={18} />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FixedPackagesSection;
