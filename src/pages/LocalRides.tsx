import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { MapPin, AlertCircle, Car, Clock, Navigation, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { buildWhatsAppUrl } from "@/lib/contact";

const LocalRides = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickup: "",
    destination: "",
    date: "",
    time: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name.trim() || !formData.phone.trim() || !formData.pickup.trim() || !formData.time.trim()) {
      toast({
        title: 'Validation Error',
        description: 'Please fill in all required fields',
        variant: 'destructive',
      });
      return;
    }

    // Create WhatsApp message
    const message = `🚖 *Kuldeep Tour & Travel*

*Booking Details:*
• Name: ${formData.name}
• Phone: ${formData.phone}
• Pickup: ${formData.pickup}
• Destination: ${formData.destination}
• Date: ${formData.date}
• Time: ${formData.time}

*Please confirm availability and share final quote. Thank you! 🙏`;

    // Open WhatsApp with pre-filled message
    window.open(buildWhatsAppUrl(message), '_blank');

    toast({
      title: 'Booking Request Submitted!',
      description: 'Opening WhatsApp with your booking details...',
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-charcoal text-cream py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Local Rides
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 font-display leading-tight break-words">
            Local Taxi and Auto Service in{" "}
            <span className="text-primary block sm:inline text-lg sm:text-xl md:text-2xl font-semibold">
              Garli, Pragpur, Balahar, Nehranpukhar, Dehra, Kaloha, Amb
            </span>
          </h1>

          <p className="text-cream/70 mt-4 max-w-2xl mx-auto">
            Quick, affordable, and reliable local taxi and Auto service within 100km
            radius of Kangra
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <Card className="card-travel">
              <CardHeader>
                <CardTitle className="font-display text-2xl flex items-center gap-2">
                  <Car className="text-primary" />
                  Book Local Ride
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Alert className="mb-6 border-primary/20 bg-primary/5">
                  <AlertCircle className="h-4 w-4 text-primary" />
                  <AlertDescription className="text-sm">
                    Local rides are available only within{" "}
                    <strong>100km radius of kangra</strong>. For destinations
                    outside this area, please use our{" "}
                    <a href="/book" className="text-primary underline">
                      Custom Booking
                    </a>
                    .
                  </AlertDescription>
                </Alert>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Enter your name"
                        required
                        className="input-travel"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 XXXXX XXXXX"
                        required
                        className="input-travel"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="pickup">Pickup Location</Label>
                    <div className="relative">
                      <Input
                        id="pickup"
                        value={formData.pickup}
                        onChange={(e) =>
                          setFormData({ ...formData, pickup: e.target.value })
                        }
                        placeholder="Enter pickup location"
                        required
                        className="input-travel pl-10"
                      />
                      <MapPin
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                        size={18}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="destination">Destination</Label>
                    <div className="relative">
                      <Input
                        id="destination"
                        value={formData.destination}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            destination: e.target.value,
                          })
                        }
                        placeholder="Enter destination (within 40km)"
                        required
                        className="input-travel pl-10"
                      />
                      <Navigation
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                        size={18}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 text-muted-foreground" size={18} />
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) =>
                            setFormData({ ...formData, date: e.target.value })
                          }
                          required
                          className="input-travel pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Time</Label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-3 text-muted-foreground" size={18} />
                        <Input
                          id="time"
                          type="time"
                          value={formData.time}
                          onChange={(e) =>
                            setFormData({ ...formData, time: e.target.value })
                          }
                          required
                          className="input-travel pl-10"
                        />
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-amber-dark py-6 text-lg"
                  >
                    Request Local Ride
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    Price will be confirmed by our team after reviewing your
                    booking request
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Info Section */}
            <div className="space-y-6">
              <Card className="card-travel">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-4 font-display">
                    Service Coverage
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Our local taxi service covers Kangra and surrounding areas
                    within a 100km radius, including:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Pragpur",
                      "Nehranpukhar",
                      "Dehra",
                      "Kaloha",
                      "Amb",
                      "Chamba Pattan",
                      "Masot",
                      "Bani",
                      "Bhatrala",
                      "Balahar",
                      "Muhin"
                    ].map((place) => (
                      <div
                        key={place}
                        className="flex items-center gap-2 text-sm"
                      >
                        <MapPin size={14} className="text-primary" />
                        {place}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="card-travel">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-4 font-display flex items-center gap-2">
                    <Clock className="text-primary" />
                    How It Works
                  </h3>
                  <ol className="space-y-4">
                    <li className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                        1
                      </span>
                      <div>
                        <p className="font-medium">Submit Your Request</p>
                        <p className="text-sm text-muted-foreground">
                          Fill in your pickup, destination and time
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                        2
                      </span>
                      <div>
                        <p className="font-medium">Get Confirmation</p>
                        <p className="text-sm text-muted-foreground">
                          We'll call you with price and driver details
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                        3
                      </span>
                      <div>
                        <p className="font-medium">Enjoy Your Ride</p>
                        <p className="text-sm text-muted-foreground">
                          Pay after completion - no advance required
                        </p>
                      </div>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LocalRides;
