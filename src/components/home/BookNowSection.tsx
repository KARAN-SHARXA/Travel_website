import { Link } from 'react-router-dom';
import { Navigation, MapPin, Plane, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const BookNowSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Book Your Trip</span>
          <h2 className="section-title mt-2">
            Start Your <span className="text-primary">Journey</span>
          </h2>
        </div>

        {/* Booking Options - Custom LEFT, Trip Package RIGHT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Custom Booking - LEFT */}
          <Card className="card-travel">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-sky/10 text-sky flex items-center justify-center mx-auto mb-6">
                <Navigation size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">Custom Booking</h3>
              <p className="text-muted-foreground mb-6">
                Travel anywhere in India. Choose your own pickup, destination, and schedule.
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-amber-dark w-full">
                <Link to="/book/custom" className="flex items-center justify-center gap-2">
                  Book Custom Trip <ArrowRight size={18} />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Trip Package - MIDDLE */}
          <Card className="card-travel border-2 border-primary">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                <MapPin size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">Trip Package</h3>
              <p className="text-muted-foreground mb-6">
                Choose from our curated pilgrimage and hill station packages with fixed routes.
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-amber-dark w-full">
                <Link to="/fixed-packages" className="flex items-center justify-center gap-2">
                  Book Package <ArrowRight size={18} />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Station/Airport - RIGHT */}
          <Card className="card-travel">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-forest/10 text-forest flex items-center justify-center mx-auto mb-6">
                <Plane size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">Station/Airport</h3>
              <p className="text-muted-foreground mb-6">
                Pickup from railway stations and airports. Reliable transfer services.
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-amber-dark w-full">
                <Link to="/book/station" className="flex items-center justify-center gap-2">
                  Book Transfer <ArrowRight size={18} />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookNowSection;
