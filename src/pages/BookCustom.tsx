import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { MessageCircle, ArrowRight, MapPin, User, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { buildWhatsAppUrl } from '@/lib/contact';

const BookCustom = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const prefilledDestination = searchParams.get('destination') || '';

  const [formData, setFormData] = useState({
    pickup: '',
    destination: prefilledDestination,
    days: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    passengers: '',
    notes: '',
  });

  const generateBookingNumber = () => `BK${Date.now().toString().slice(-6)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const bookingNumber = generateBookingNumber();

    const message = `
Hello,

I want to book a *Custom Trip*.

*Booking No:* ${bookingNumber}
*Pickup Location:* ${formData.pickup || 'To be decided'}
*Destination:* ${formData.destination || 'To be decided'}
*Number of Days:* ${formData.days || 'To be decided'}
*Travel Date:* ${formData.date || 'To be decided'}
*Pickup Time:* ${formData.time || 'To be decided'}
*Number of Passengers:* ${formData.passengers}

*Name:* ${formData.name}
*Phone:* ${formData.phone}

*Additional Notes:* ${formData.notes || 'None'}

Please share price & details.
    `;

    toast({
      title: 'Booking created',
      description: `Booking No: ${bookingNumber}. Redirecting to WhatsApp…`,
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
      {/* HERO */}
      <section className="bg-charcoal text-cream py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary text-sm uppercase tracking-wider">
            Custom Booking
          </span>
          <h1 className="text-4xl font-bold mt-2 font-display">
            Book Your <span className="text-primary">Custom Trip</span>
          </h1>
          <p className="text-cream/70 mt-4 max-w-xl mx-auto">
            Choose your pickup location, destination, and travel dates. Full control over your itinerary.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-6 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label>Pickup Location</Label>
                  <Input
                    type="text"
                    placeholder="Enter your pickup location"
                    value={formData.pickup}
                    onChange={e => setFormData({ ...formData, pickup: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label>Destination</Label>
                  <Input
                    type="text"
                    placeholder="Enter your destination"
                    value={formData.destination}
                    onChange={e => setFormData({ ...formData, destination: e.target.value })}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Travel Date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 text-muted-foreground" size={18} />
                      <Input
                        id="date"
                        type="date"
                        className="pl-10"
                        value={formData.date}
                        onChange={e => setFormData({ ...formData, date: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Travel Time</Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 text-muted-foreground" size={18} />
                      <Input
                        id="time"
                        type="time"
                        className="pl-10"
                        value={formData.time}
                        onChange={e => setFormData({ ...formData, time: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Full Name</Label>
                    <Input
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <Label>Phone Number</Label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label>Number of Passengers</Label>
                  <Input
                    type="number"
                    min="1"
                    value={formData.passengers}
                    onChange={e => setFormData({ ...formData, passengers: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label>Additional Notes (optional)</Label>
                  <Textarea
                    rows={3}
                    value={formData.notes}
                    onChange={e => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Any special requirements or preferences..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-amber-dark py-6 text-lg"
                >
                  <MessageCircle className="mr-2" />
                  Book on WhatsApp <ArrowRight className="ml-2" />
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  • Price shared on WhatsApp
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default BookCustom;
