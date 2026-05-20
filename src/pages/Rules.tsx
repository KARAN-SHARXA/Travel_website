import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, CheckCircle, XCircle, Calendar, Clock, Phone } from 'lucide-react';
import { CONTACT } from '@/lib/contact';

const Rules = () => {
  const policies = [
    {
      title: 'Booking Policy',
      icon: Calendar,
      items: [
        'All bookings are subject to vehicle availability',
        'Booking confirmation will be sent via email and WhatsApp',
        'A unique booking number will be provided for each booking',
        'Please verify all details before confirming your booking',
      ],
    },
    {
      title: 'Cancellation Policy',
      icon: XCircle,
      items: [
        'Free cancellation up to 2 days (48 hours) before scheduled pickup',
        'Cancellations within 48 hours of pickup: Full payment required',
        'No-show without prior notice: Full payment required',
        'Emergency cancellations will be handled on a case-by-case basis',
      ],
    },
    {
      title: 'Payment Terms',
      icon: CheckCircle,
      items: [
        'No advance payment required for booking',
        'Payment is due upon completion of the ride',
        'Accepted payment methods: Cash, UPI, Bank Transfer',
        'Price quoted includes driver allowance and toll charges (for package trips)',
      ],
    },
    {
      title: 'Passenger Guidelines',
      icon: AlertCircle,
      items: [
        'Be ready at pickup location at the scheduled time',
        'Carry valid ID proof for verification',
        'No smoking or consumption of alcohol inside the vehicle',
        'Luggage should be within reasonable limits',
        'Seat belts must be worn at all times',
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-charcoal text-cream py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Policies</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 font-display">
            Rules & <span className="text-primary">Regulations</span>
          </h1>
          <p className="text-cream/70 mt-4 max-w-2xl mx-auto">
            Please read our policies carefully before booking your ride
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map((policy, index) => (
              <Card key={index} className="card-travel">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-display">
                    <policy.icon size={24} className="text-primary" />
                    {policy.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {policy.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Important Notice */}
          <Card className="mt-12 border-primary/20 bg-primary/5">
            <CardContent className="p-8 text-center">
              <AlertCircle size={48} className="mx-auto text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-4 font-display">Important Notice</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Our prices are fair and transparent. The final price will be communicated before your trip. 
                There are no hidden charges. For any queries or concerns, please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`tel:${CONTACT.phoneE164}`} className="flex items-center justify-center gap-2 text-primary font-medium hover:underline">
                  <Phone size={18} />
                  {CONTACT.phoneDisplay}
                </a>
                <a href={`mailto:${CONTACT.email}`} className="text-primary font-medium hover:underline">
                  {CONTACT.email}
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Rules;
