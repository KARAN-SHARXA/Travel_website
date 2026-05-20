import { CheckCircle, Shield, Clock, CreditCard, Headphones, MapPin } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Safe & Verified Drivers',
    description: 'All our drivers are background verified and trained for your safety.',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'We are available round the clock for all your travel needs.',
  },
  {
    icon: CreditCard,
    title: 'Pay After Ride',
    description: 'No advance payment required. Pay comfortably after your journey.',
  },
  {
    icon: MapPin,
    title: 'GPS Tracked Vehicles',
    description: 'All our vehicles are GPS enabled for your peace of mind.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Our customer support team is always ready to assist you.',
  },
  {
    icon: CheckCircle,
    title: 'Transparent Pricing',
    description: 'No hidden charges. What we quote is what you pay.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="section-title mt-2 mb-6">
              Your Trusted <span className="text-primary">Travel Partner</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              With years of experience in providing reliable transportation services across Himachal Pradesh, 
              we ensure your journey is safe, comfortable, and memorable.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-warm rounded-3xl p-8 text-primary-foreground">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div className="text-5xl font-bold font-display mb-2">10+</div>
                <p className="text-primary-foreground/80">Years Experience</p>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div className="text-5xl font-bold font-display mb-2">5K+</div>
                <p className="text-primary-foreground/80">Happy Customers</p>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div className="text-5xl font-bold font-display mb-2">15+</div>
                <p className="text-primary-foreground/80">Vehicles</p>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div className="text-5xl font-bold font-display mb-2">50+</div>
                <p className="text-primary-foreground/80">Destinations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
