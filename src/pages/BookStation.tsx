import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Plane, MessageCircle, ArrowRight, RotateCw, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { getActiveStations, generateBookingId, addBookingLog, generateStationBookingMessage } from '@/data';
import { buildWhatsAppUrl } from '@/lib/contact';

const BookNow = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const stations = useMemo(() => getActiveStations(), []);

  const urlStation = searchParams.get('station') || '';

  const [isFromStation, setIsFromStation] = useState(true);

  const [stationForm, setStationForm] = useState({
    station: urlStation,
    manualLocation: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    passengers: '',
    notes: '',
  });

  useEffect(() => {
    if (urlStation) {
      setStationForm(prev => ({ ...prev, station: urlStation }));
    }
  }, [urlStation]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const pickup = isFromStation
      ? stationForm.station
      : stationForm.manualLocation;

    const drop = isFromStation
      ? stationForm.manualLocation
      : stationForm.station;

    if (!pickup || !drop) return;

    const bookingNumber = generateBookingId();

    // Create booking log
    addBookingLog({
      customerName: stationForm.name,
      customerPhone: stationForm.phone,
      travelDate: stationForm.date,
      passengers: parseInt(stationForm.passengers),
      status: 'pending',
      pickup,
      drop,
    }, 'station');

    // Generate WhatsApp message
    const message = generateStationBookingMessage({
      customerName: stationForm.name,
      customerPhone: stationForm.phone,
      travelDate: stationForm.date,
      travelTime: stationForm.time,
      passengers: parseInt(stationForm.passengers),
      status: 'pending',
      pickup,
      drop,
      notes: stationForm.notes,
    }).replace('BOOKING_PLACEHOLDER', bookingNumber); // Replace placeholder with actual booking number

    toast({
      title: 'Booking Created',
      description: `Booking ID ${bookingNumber}. Redirecting to WhatsApp…`,
    });

    setTimeout(() => {
      window.open(
        buildWhatsAppUrl(message),
        '_blank'
      );
    }, 800);
  };

  return (
    <Layout>
      <section className="bg-charcoal text-cream py-12 sm:py-16 text-center">
        <Plane className="mx-auto mb-4 text-primary" size={40} />
        <h1 className="text-2xl sm:text-4xl font-bold">Station & Airport Transfer</h1>
        <p className="text-cream/70 mt-2">
          Reliable pickup & drop service
        </p>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* PICKUP */}
                <div>
                  <Label>Pickup Location</Label>
                  {isFromStation ? (
                    <Select
                      value={stationForm.station}
                      onValueChange={(v) =>
                        setStationForm({ ...stationForm, station: v })
                      }
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Choose station or airport" />
                      </SelectTrigger>
                      <SelectContent>
                        {stations.map(s => (
                          <SelectItem key={s.id} value={s.name}>
                            {s.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : (
                    <Input
                      className="mt-1"
                      placeholder="Enter pickup location"
                      value={stationForm.manualLocation}
                      onChange={e =>
                        setStationForm({
                          ...stationForm,
                          manualLocation: e.target.value,
                        })
                      }
                      required
                    />
                  )}
                </div>

                {/* FLIP */}
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={() => setIsFromStation(p => !p)}
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <RotateCw size={16} />
                    Flip Pickup / Drop
                  </button>
                </div>

                {/* DROP */}
                <div>
                  <Label>Drop Location</Label>
                  {isFromStation ? (
                    <Input
                      className="mt-1"
                      placeholder="Enter drop location"
                      value={stationForm.manualLocation}
                      onChange={e =>
                        setStationForm({
                          ...stationForm,
                          manualLocation: e.target.value,
                        })
                      }
                      required
                    />
                  ) : (
                    <Select
                      value={stationForm.station}
                      onValueChange={(v) =>
                        setStationForm({ ...stationForm, station: v })
                      }
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Choose station or airport" />
                      </SelectTrigger>
                      <SelectContent>
                        {stations.map(s => (
                          <SelectItem key={s.id} value={s.name}>
                            {s.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                </div>

                {/* DATE & TIME */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="travelDate">Travel Date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 text-muted-foreground" size={18} />
                      <Input
                        id="travelDate"
                        type="date"
                        className="pl-10"
                        placeholder="Select date"
                        required
                        value={stationForm.date}
                        onChange={e =>
                          setStationForm({ ...stationForm, date: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="travelTime">Travel Time</Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 text-muted-foreground" size={18} />
                      <Input
                        id="travelTime"
                        type="time"
                        className="pl-10"
                        placeholder="Select time"
                        required
                        value={stationForm.time}
                        onChange={e =>
                          setStationForm({ ...stationForm, time: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>

                <Input
                  placeholder="Full Name"
                  required
                  value={stationForm.name}
                  onChange={e =>
                    setStationForm({ ...stationForm, name: e.target.value })
                  }
                />

                <Input
                  placeholder="Phone Number"
                  required
                  value={stationForm.phone}
                  onChange={e =>
                    setStationForm({ ...stationForm, phone: e.target.value })
                  }
                />

                <Input
                  type="number"
                  min="1"
                  max="20"
                  placeholder="Passengers"
                  required
                  value={stationForm.passengers}
                  onChange={e =>
                    setStationForm({
                      ...stationForm,
                      passengers: e.target.value,
                    })
                  }
                />

                <Textarea
                  placeholder="Train / Flight number or notes (optional)"
                  value={stationForm.notes}
                  onChange={e =>
                    setStationForm({ ...stationForm, notes: e.target.value })
                  }
                />

                <Button className="w-full text-lg">
                  <MessageCircle className="mr-2" />
                  Send on WhatsApp
                  <ArrowRight className="ml-2" />
                </Button>

              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default BookNow;
