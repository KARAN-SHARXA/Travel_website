import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { MessageCircle, ArrowRight, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import OptimizedImage from '@/components/OptimizedImage';

import mataChintpurni from '@/assets/mata-chintpurni.jpg';
import mataBaglamukhi from '@/assets/mata-baglamukhi.jpg';
import mataJwalaji from '@/assets/mata-jwalaji.jpg';
import mataKangra from '@/assets/mata-kangra.jpg';
import mataBajreshwari from '@/assets/mata-bajreshwari.jpg';
import mataChamunda from '@/assets/mata-chamunda.jpg';

const BookAmbDeviDarshan = () => {
  const { toast } = useToast();

  const [form, setForm] = useState({
    date: '',
    name: '',
    phone: '',
    email: '',
    passengers: '',
    notes: '',
  });

  const images = [mataChintpurni, mataBaglamukhi, mataJwalaji, mataKangra, mataBajreshwari, mataChamunda];

  const generateBookingNumber = () => `DD${Date.now().toString().slice(-6)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const bookingNumber = generateBookingNumber();

    const message = `
Hello,

I want to book *Amb Anduara → Devi Darshan Fixed Package*.

*Booking No:* ${bookingNumber}
*Pickup:* Amb Anduara Railway Station
*Package:* Devi Darshan
*Route:*
  - Chintpurni
  - Baglamukhi
  - Jwala Ji
  - Kangra
  - Brijeshwari
  - Chamunda Devi
*Duration:* 5 Days / 4 Nights

*Travel Date:* ${form.date || 'To be decided'}
*Number of Persons:* ${form.passengers}

*Name:* ${form.name}
*Phone:* ${form.phone}
*Email:* ${form.email}

*Notes:* ${form.notes || 'None'}

Please share price & details.
    `;

    toast({
      title: 'Booking created',
      description: `Booking No: ${bookingNumber}. Redirecting to WhatsApp…`,
    });

    setTimeout(() => {
      window.open(
        `https://wa.me/919882983719?text=${encodeURIComponent(message)}`,
        '_blank'
      );
    }, 800);
  };

  return (
    <Layout>
      {/* HERO WITH IMAGE SLIDER */}
      <section className="relative h-[60vh] min-h-[360px] sm:min-h-[420px] overflow-hidden">
        <OptimizedImage
          src={images[0]}
          alt="Devi Darshan"
          className="absolute inset-0 w-full h-full object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl text-cream">
            <span className="text-primary text-sm uppercase tracking-wider">Fixed Package</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 font-display">
              Amb Anduara → <span className="text-primary">Devi Darshan</span>
            </h1>
            <p className="text-cream/70 mt-4 max-w-xl mx-auto">
              Pickup & route already decided. Just fill your details and book via WhatsApp.
            </p>
          </div>
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
                    value="Amb Anduara Railway Station"
                    disabled
                    className="bg-muted"
                  />
                </div>

                <div>
                  <Label>Destination</Label>
                  <Input
                    type="text"
                    value="Devi Darshan"
                    disabled
                    className="bg-muted"
                  />
                </div>

                <div>
                  <Label>Full Name</Label>
                  <Input
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Phone Number</Label>
                    <Input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="travelDate">Travel Date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 text-muted-foreground" size={18} />
                      <Input
                        id="travelDate"
                        type="date"
                        className="pl-10"
                        placeholder="Select date"
                        value={form.date}
                        onChange={e => setForm({ ...form, date: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="passengers">Number of Passengers</Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 text-muted-foreground" size={18} />
                      <Input
                        id="passengers"
                        type="number"
                        min="1"
                        className="pl-10"
                        value={form.passengers}
                        onChange={e => setForm({ ...form, passengers: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label>Additional Notes (optional)</Label>
                  <Textarea
                    rows={3}
                    value={form.notes}
                    onChange={e => setForm({ ...form, notes: e.target.value })}
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
                  No advance payment • Price shared on WhatsApp
                </p>
              </form>

            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default BookAmbDeviDarshan;
