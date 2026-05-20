import { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { MessageCircle, ArrowRight, Calendar, Users, User, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { getFixedPackageBySlug, generateBookingId, addBookingLog, generateFixedPackageBookingMessage, getSimpleTourBySlug, generateSimpleTourEnquiryMessage, getStations } from '@/data';
import { buildWhatsAppUrl } from '@/lib/contact';

type UnifiedPackageData =
  | (
    ReturnType<typeof getFixedPackageBySlug> extends infer T
    ? T extends NonNullable<T>
    ? T & { type: 'fixed-package' }
    : never
    : never
  )
  | (
    ReturnType<typeof getSimpleTourBySlug> extends infer T
    ? T extends NonNullable<T>
    ? T & {
      type: 'simple-tour';
      packageName: string;
      packageMode: 'tour';
      shortDescription: string;
      images: string[];
    }
    : never
    : never
  );

const BookFixedPackageUnified = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  const packageData = useMemo<UnifiedPackageData | null>(() => {
    const pkg = getFixedPackageBySlug(slug || '');
    if (pkg) return { ...pkg, type: 'fixed-package' as const };

    const tour = getSimpleTourBySlug(slug || '');
    if (tour) return {
      ...tour,
      type: 'simple-tour' as const,
      packageName: tour.tourName,
      packageMode: 'tour' as const,
      shortDescription: tour.description,
      images: tour.images || []
    };

    return null;
  }, [slug]);

  const fixedPickupName = useMemo(() => {
    if (packageData?.type === 'fixed-package') {
      const stations = getStations();
      return stations.find(s => s.id === (packageData as any).pickupLocationId)?.name || 'Pre-set Location';
    }
    return '';
  }, [packageData]);

  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    travelDate: '',
    passengers: '1',
    notes: '',
    pickupLocation: '',
  });

  useEffect(() => {
    if (!packageData) {
      navigate('/');
    }
  }, [packageData, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!packageData) return;

    const bookingNumber = generateBookingId();

    // Create booking log
    addBookingLog({
      packageName: packageData.packageName,
      customerName: bookingForm.name,
      customerPhone: bookingForm.phone,
      travelDate: bookingForm.travelDate,
      passengers: parseInt(bookingForm.passengers),
      status: 'pending',
      pickup: packageData.type === 'simple-tour' ? bookingForm.pickupLocation : fixedPickupName,
    }, packageData.type === 'fixed-package' ? 'fixed-package' : 'simple-tour');

    // Generate WhatsApp message
    let message = '';
    if (packageData.type === 'fixed-package') {
      message = generateFixedPackageBookingMessage({
        packageName: packageData.packageName,
        pickup: fixedPickupName,
        customerName: bookingForm.name,
        customerPhone: bookingForm.phone,
        travelDate: bookingForm.travelDate,
        passengers: parseInt(bookingForm.passengers),
        status: 'pending',
      }, packageData.packageName, packageData.duration).replace('BOOKING_PLACEHOLDER', bookingNumber);
    } else {
      message = generateSimpleTourEnquiryMessage({
        customerName: bookingForm.name,
        customerPhone: bookingForm.phone,
        travelDate: bookingForm.travelDate,
        passengers: parseInt(bookingForm.passengers),
        status: 'pending',
        pickup: bookingForm.pickupLocation
      }, packageData.packageName).replace('BOOKING_PLACEHOLDER', bookingNumber);
    }

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

  if (!packageData) {
    return null; // Will redirect via useEffect
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-charcoal text-cream py-12 sm:py-16 text-center">
        <MessageCircle className="mx-auto mb-4 text-primary" size={40} />
        <h1 className="text-2xl sm:text-4xl font-bold">
          {packageData.type === 'simple-tour' ? 'Book Tour Package' : (packageData.packageMode === 'tour' ? 'Book Fixed Package' : 'Book Transfer')}
        </h1>
        <p className="text-cream/70 mt-2">
          {packageData.packageName}{packageData.duration ? ` • ${packageData.duration}` : ''}
        </p>
      </section>

      {/* Booking Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Package Summary */}
            <div className="lg:col-span-1">
              <Card className="card-travel sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 font-display">Package Summary</h3>

                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm text-muted-foreground">Package</Label>
                      <p className="font-semibold">{packageData.packageName}</p>
                    </div>

                    <div>
                      <Label className="text-sm text-muted-foreground">Duration</Label>
                      <p className="font-semibold">{packageData.duration || 'To be confirmed'}</p>
                    </div>

                    <div>
                      <Label className="text-sm text-muted-foreground">Type</Label>
                      <p className="font-semibold">
                        {packageData.packageMode === 'tour' ? 'Multi-destination Tour' : 'Point-to-Point Transfer'}
                      </p>
                    </div>

                    <div>
                      <Label className="text-sm text-muted-foreground">Description</Label>
                      <p className="text-sm text-muted-foreground">{packageData.shortDescription}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => navigate(packageData.type === 'fixed-package' ? `/packages/${packageData.slug}` : `/explore-himachal/${packageData.slug}`)}
                    >
                      ← Back to Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="card-travel">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {packageData.type === 'simple-tour' ? (
                      <div className="mb-6">
                        <Label>Pickup Location *</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 text-muted-foreground" size={18} />
                          <Input
                            className="pl-10 mt-1"
                            placeholder="Enter your pickup location (Railway Station, Hotel, etc.)"
                            value={bookingForm.pickupLocation}
                            onChange={e => setBookingForm({ ...bookingForm, pickupLocation: e.target.value })}
                            required
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">For this tour, you can choose any pickup point.</p>
                      </div>
                    ) : (
                      <div className="mb-6">
                        <Label>Pickup Location (Fixed)</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 text-muted-foreground/50" size={18} />
                          <Input
                            className="pl-10 mt-1 bg-muted/50 cursor-not-allowed"
                            value={fixedPickupName}
                            disabled
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">This is a fixed package with a pre-set starting point.</p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Full Name *</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 text-muted-foreground" size={18} />
                          <Input
                            className="pl-10 mt-1"
                            placeholder="Enter your full name"
                            value={bookingForm.name}
                            onChange={e => setBookingForm({ ...bookingForm, name: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label>Phone Number *</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 text-muted-foreground" size={18} />
                          <Input
                            className="pl-10 mt-1"
                            placeholder="Enter your phone number"
                            value={bookingForm.phone}
                            onChange={e => setBookingForm({ ...bookingForm, phone: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="travelDate">Travel Date *</Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 text-muted-foreground" size={18} />
                          <Input
                            id="travelDate"
                            type="date"
                            className="pl-10 mt-1"
                            placeholder="Select date"
                            value={bookingForm.travelDate}
                            onChange={e => setBookingForm({ ...bookingForm, travelDate: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label>Number of Passengers *</Label>
                        <div className="relative">
                          <Users className="absolute left-3 top-3 text-muted-foreground" size={18} />
                          <Input
                            type="number"
                            min="1"
                            max="20"
                            className="pl-10 mt-1"
                            placeholder="Number of passengers"
                            value={bookingForm.passengers}
                            onChange={e => setBookingForm({ ...bookingForm, passengers: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label>Additional Notes</Label>
                      <Textarea
                        placeholder="Any special requirements or notes (optional)"
                        value={bookingForm.notes}
                        onChange={e => setBookingForm({ ...bookingForm, notes: e.target.value })}
                        rows={4}
                      />
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Booking Information</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Price will be shared on WhatsApp</li>
                        <li>• No advance payment required</li>
                        <li>• Confirmation after details discussion</li>
                        <li>• 24/7 customer support available</li>
                      </ul>
                    </div>

                    <Button
                      type="submit"
                      className="w-full text-lg py-6"
                      size="lg"
                    >
                      <MessageCircle className="mr-2" />
                      Send Booking on WhatsApp
                      <ArrowRight className="ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout >
  );
};

export default BookFixedPackageUnified;
