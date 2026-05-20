import Layout from '@/components/layout/Layout';
import { Users, Briefcase, Fuel, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import OptimizedImage from '@/components/OptimizedImage';

import carDzire from '@/assets/car-dzire.jpg';
import carEtios from '@/assets/car-etios.jpg';
import carErtiga from '@/assets/car-ertiga.jpg';
import carInnova from '@/assets/car-innova.jpg';
import carTempo from '@/assets/car-tempo.jpg';

const fleet = [
  {
    id: 1,
    name: 'Maruti Suzuki Dzire',
    image: carDzire,
    seats: 4,
    luggage: 2,
    fuel: 'Petrol/CNG',
    category: 'Sedan',
    features: ['AC', 'Music System', 'Fuel Efficient', 'Compact & Comfortable'],
  },
  {
    id: 2,
    name: 'Toyota Etios',
    image: carEtios,
    seats: 4,
    luggage: 3,
    fuel: 'Diesel',
    category: 'Sedan',
    features: ['AC', 'Music System', 'Spacious Boot', 'Comfortable Ride'],
  },
  {
    id: 3,
    name: 'Maruti Suzuki Ertiga',
    image: carErtiga,
    seats: 7,
    luggage: 3,
    fuel: 'Petrol/CNG',
    category: 'MPV',
    features: ['AC', 'Music System', 'USB Charging', 'Family Friendly', 'Spacious'],
  },
  {
    id: 4,
    name: 'Toyota Innova',
    image: carInnova,
    seats: 7,
    luggage: 4,
    fuel: 'Diesel',
    category: 'Premium SUV',
    features: ['AC', 'Music System', 'USB Charging', 'Comfortable Seating', 'Ample Luggage Space'],
  },
  {
    id: 5,
    name: 'Force Tempo Traveller',
    image: carTempo,
    seats: 12,
    luggage: 10,
    fuel: 'Diesel',
    category: 'Minibus',
    features: ['AC', 'Music System', 'Large Group Friendly', 'Pushback Seats', 'Ample Space'],
  },
];

const Fleet = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-charcoal text-cream py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Fleet</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 font-display">
            Choose Your Perfect <span className="text-primary">Ride</span>
          </h1>
          <p className="text-cream/70 mt-4 max-w-2xl mx-auto">
            We offer a variety of well-maintained vehicles to suit your travel needs and preferences
          </p>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fleet.map((car) => (
              <Card key={car.id} className="card-travel overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative bg-muted aspect-[4/3] lg:aspect-auto lg:min-h-[16rem]">
                    <OptimizedImage
                      src={car.image}
                      alt={car.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col justify-between">
                    <div>
                      <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                        {car.category}
                      </span>
                      <h3 className="text-2xl font-bold mt-3 mb-4 font-display">{car.name}</h3>
                      
                      <div className="flex gap-6 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users size={16} className="text-primary" />
                          <span>{car.seats} Seats</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase size={16} className="text-primary" />
                          <span>{car.luggage} Bags</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Fuel size={16} className="text-primary" />
                          <span>{car.fuel}</span>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {car.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check size={16} className="text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild className="bg-primary text-primary-foreground hover:bg-amber-dark w-full">
                      <Link to="/book/custom">Book This Vehicle</Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Fleet;
