import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/OptimizedImage';

import mataChintpurni from '@/assets/mata-chintpurni.jpg';
import heroDharamshala from '@/assets/hero-dharamshala.jpg';
import Local2 from '@/assets/hero-local2.jpg';

const slides = [
  {
    id: 1,
    image: Local2,
    title: 'Kuldeep Tour & Travels',
    subtitle: 'Now see the world with us',
    description:
      'We offer comfortable, reliable, and affordable taxi services for local travel, outstation journeys, and customized trips with complete safety.',
  },
  {
    id: 2,
    image: mataChintpurni,
    title: 'Devi Darshan',
    description:'Peaceful and well-planned Devi Darshan tours covering Chintpurni, Jwalaji, Baglamukhi, Brajeshwari, Kangra, Naina Devi, and other sacred temples.'
  },
  {
    id: 3,
    image: heroDharamshala,
    title: 'Himachal Pradesh',
    description:
      'Explore Himachal Pradesh with trips to Dharamshala, Shimla, Manali, and other scenic hill destinations.',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const slide = slides[currentSlide];

  return (
    <section className="relative h-[85vh] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] overflow-hidden">
      {/* Active Slide (render only one image to avoid downloading hidden slides) */}
      <div key={slide.id} className="absolute inset-0 animate-fade-in">
        <OptimizedImage
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-cream">
            {/* Subtitle */}
            {slide.subtitle && (
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary mb-2 sm:mb-3 md:mb-4 font-medium animate-fade-in-up">
                {slide.subtitle}
              </p>
            )}

            {/* Title */}
            <h1
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 px-2 animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              {slide.title}
            </h1>

            {/* Description (Dynamic) */}
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-cream mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto px-2 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              {slide.description}
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-amber-dark text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6"
              >
                <Link to="/book/custom" className="flex items-center justify-center gap-2">
                  Book Your Ride Now
                  <ChevronRight size={16} className="sm:w-5 sm:h-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary bg-charcoal/50 hover:bg-primary hover:text-primary-foreground text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6"
              >
                <Link to="/local-rides">Local Area Rides</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-cream/20 backdrop-blur-sm rounded-full flex items-center justify-center text-cream hover:bg-primary transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>

        <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-cream/20 backdrop-blur-sm rounded-full flex items-center justify-center text-cream hover:bg-primary transition-colors"
        aria-label="Next slide"
          >
        <ChevronRight size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
       </button>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 sm:h-2.5 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-primary w-6 sm:w-7 md:w-8'
                : 'bg-cream/50 hover:bg-cream w-2 sm:w-2.5 md:w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
