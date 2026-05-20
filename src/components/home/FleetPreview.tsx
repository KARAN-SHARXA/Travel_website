import { Link } from 'react-router-dom';
import { Users, Briefcase, Fuel, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
  },
  {
    id: 2,
    name: 'Toyota Etios',
    image: carEtios,
    seats: 4,
    luggage: 3,
    fuel: 'Diesel',
    category: 'Sedan',
  },
  {
    id: 3,
    name: 'Maruti Suzuki Ertiga',
    image: carErtiga,
    seats: 7,
    luggage: 3,
    fuel: 'Petrol/CNG',
    category: 'MPV',
  },
  {
    id: 4,
    name: 'Toyota Innova',
    image: carInnova,
    seats: 7,
    luggage: 4,
    fuel: 'Diesel',
    category: 'Premium SUV',
  },
  {
    id: 5,
    name: 'Force Tempo Traveller',
    image: carTempo,
    seats: 12,
    luggage: 10,
    fuel: 'Diesel',
    category: 'Minibus',
  },
];

const FleetPreview = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Fleet</span>
            <h2 className="section-title mt-2">
              Choose Your <span className="text-primary">Ride</span>
            </h2>
          </div>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link to="/fleet" className="flex items-center gap-2">
              View All Vehicles <ArrowRight size={18} />
            </Link>
          </Button>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {fleet.map((car) => (
            <Card key={car.id} className="card-travel group">
              <div className="relative overflow-hidden bg-muted aspect-[4/3]">
                <OptimizedImage
                  src={car.image}
                  alt={car.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
                <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  {car.category}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sm mb-3 font-display">{car.name}</h3>
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users size={14} className="text-primary" />
                    <span>{car.seats}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase size={14} className="text-primary" />
                    <span>{car.luggage}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Fuel size={14} className="text-primary" />
                    <span>{car.fuel}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetPreview;
