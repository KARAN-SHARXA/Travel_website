import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { buildWhatsAppUrl, CONTACT } from '@/lib/contact';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: [CONTACT.phoneDisplay],
      link: `tel:${CONTACT.phoneE164}`,
    },
    {
      icon: Mail,
      title: 'Email',
      details: [CONTACT.email],
      link: `mailto:${CONTACT.email}`,
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Balahar , kangra , Himachal Pradesh', 'India - 176215'],
      link: null,
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['24/7 Available', 'Always at your service'],
      link: null,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-charcoal text-cream py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Contact Us</span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mt-2 font-display">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-cream/70 mt-4 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help you plan your perfect trip
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-travel text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <info.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 font-display">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    info.link ? (
                      <a key={i} href={info.link} className="block text-muted-foreground hover:text-primary transition-colors">
                        {detail}
                      </a>
                    ) : (
                      <p key={i} className="text-muted-foreground">{detail}</p>
                    )
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-travel">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 font-display">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        required
                        className="input-travel"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        required
                        className="input-travel"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className="input-travel"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="How can we help?"
                        required
                        className="input-travel"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your travel plans or questions..."
                      required
                      className="input-travel"
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-amber-dark py-6 text-lg">
                    <Send size={20} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map / Additional Info */}
            <div className="space-y-6">
              <Card className="card-travel">
               <CardContent className="p-0">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27038.20406258147!2d76.2369!3d31.9976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b3fd6d8eaeae7%3A0x6c2c5c9e8b6f5a6!2sPragpur%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
    width="100%"
    height="300"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="rounded-t-xl"
  />
</CardContent>

              </Card>

              <Card className="card-travel">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-4 font-display">Quick Booking</h3>
                  <p className="text-muted-foreground mb-4">
                    Need to book a ride quickly? Call us directly or message us on WhatsApp for instant assistance.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="flex-1 bg-primary text-primary-foreground hover:bg-amber-dark">
                      <a href={`tel:${CONTACT.phoneE164}`}>
                        <Phone size={18} className="mr-2" />
                        Call Now
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="flex-1 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white">
                      <a href={buildWhatsAppUrl("Hello, I want to book a ride.")} target="_blank" rel="noopener noreferrer">
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
