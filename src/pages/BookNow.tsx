
import { Link } from 'react-router-dom';
import { Navigation, MapPin, Plane } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const BookOptions = () => {
  return (
    <Layout>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Book Your Trip
            </span>
            <h1 className="text-4xl font-bold mt-2">
              Start Your <span className="text-primary">Journey</span>
            </h1>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* Custom Booking */}
            <Card className="hover:border-primary transition">
              <CardContent className="p-8 text-center space-y-4">
                <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-blue-100">
                  <Navigation className="text-blue-600" />
                </div>

                <h3 className="text-xl font-semibold">Custom Booking</h3>

                <p className="text-muted-foreground text-sm">
                  Travel anywhere in India. Choose your own pickup,
                  destination, and schedule.
                </p>

                <Button asChild className="bg-primary w-full">
                  <Link to="/book/custom">
                    Book Custom Trip →
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Trip Package */}
            <Card className="border-primary">
              <CardContent className="p-8 text-center space-y-4">
                <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-orange-100">
                  <MapPin className="text-primary" />
                </div>

                <h3 className="text-xl font-semibold">Trip Package</h3>

                <p className="text-muted-foreground text-sm">
                  Choose from our curated pilgrimage and hill
                  station packages with fixed routes.
                </p>

                <Button asChild className="bg-primary w-full">
                  <Link to="/fixed-packages">
                    Book Package →
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Station / Airport */}
            <Card className="hover:border-primary transition">
              <CardContent className="p-8 text-center space-y-4">
                <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-green-100">
                  <Plane className="text-green-600" />
                </div>

                <h3 className="text-xl font-semibold">Station / Airport</h3>

                <p className="text-muted-foreground text-sm">
                  Pickup from railway stations and airports.
                  Reliable transfer services.
                </p>

                <Button asChild className="bg-primary w-full">
                  <Link to="/book/station">
                    Book Transfer →
                  </Link>
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookOptions;


