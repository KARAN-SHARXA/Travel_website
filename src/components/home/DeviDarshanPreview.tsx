import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { temples } from "@/data/temples";
import OptimizedImage from '@/components/OptimizedImage';

const DeviDarshan = () => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + temples.length) % temples.length);

  const next = () =>
    setCurrent((prev) => (prev + 1) % temples.length);

  return (
    <>
      {/* ===== Hero / Heading Section (SAME AS BEFORE) ===== */}
      <section className="bg-charcoal text-cream py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Sacred Pilgrimage
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 font-display">
            Devi <span className="text-primary">Darshan</span>
          </h1>
          <p className="text-cream/70 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Visit the sacred Shakti Peethas of Himachal Pradesh. Book individual temple tours – no combined package required.
          </p>
        </div>
      </section>

      {/* ===== Temples Slider ===== */}
      <section className="relative h-[70vh] min-h-[360px] sm:min-h-[500px] overflow-hidden">
        <div key={temples[current]?.id} className="absolute inset-0">
          <OptimizedImage
            src={temples[current]?.image}
            alt={temples[current]?.name}
            className="w-full h-full object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
            <div className="max-w-3xl text-cream">
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm bg-primary text-primary-foreground px-3 py-1 rounded mb-4">
                <Clock size={14} /> 4 Days
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-display mb-3 sm:mb-4">
                {temples[current]?.name}
              </h2>

              <p className="text-cream/80 mb-6 text-sm sm:text-base">
                {temples[current]?.overview.substring(0, 120)}...
              </p>

              <Link
                to={`/temple/${temples[current]?.id}`}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-amber-dark"
              >
                View Details <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-cream/10 backdrop-blur rounded-full flex items-center justify-center text-cream hover:bg-primary"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={next}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-cream/10 backdrop-blur rounded-full flex items-center justify-center text-cream hover:bg-primary"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {temples.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-3 rounded-full transition-all ${
                i === current ? "bg-primary w-8" : "bg-cream/50 w-3"
              }`}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default DeviDarshan;
