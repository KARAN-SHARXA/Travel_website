import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Train, Plane, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { getActiveStations } from '@/data/stations';

const ReachStations = () => {
  const stations = useMemo(() => getActiveStations(), []);

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Reach Us Easily</span>
          <h2 className="section-title mt-2">
            Station & Airport <span className="text-primary">Transfers</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Reliable taxi service from major railway stations and airports to your destination
          </p>
        </div>

        {/* Stations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stations.length === 0 ? (
            <div className="col-span-full text-center py-8">
              <p className="text-muted-foreground">No stations available at the moment.</p>
            </div>
          ) : (
            stations.map((station) => (
              <Link
                key={station.id}
                to={`/book/station?station=${encodeURIComponent(station.name)}`}
              >
                <Card className="card-travel h-full hover:-translate-y-2 transition-transform group">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-xl ${station.type === 'station' ? 'bg-sky/10 text-sky' : 'bg-primary/10 text-primary'} flex items-center justify-center mb-4`}>
                      {station.type === 'station' ? <Train size={28} /> : <Plane size={28} />}
                    </div>
                    <h3 className="text-lg font-bold mb-2 font-display group-hover:text-primary transition-colors">{station.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {station.type === 'station' ? 'Railway Station' : 'Airport'}
                    </p>
                    <span className="text-primary text-sm font-medium flex items-center gap-1">
                      Book Taxi <ArrowRight size={16} />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ReachStations;
