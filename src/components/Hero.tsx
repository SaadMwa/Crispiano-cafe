import { Button } from '@/components/ui/button';
import { MessageCircle, ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-coffee.jpg';

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.querySelector('#menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/1234567890?text=Hi! I would like to place an order.', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Freshly brewed coffee with latte art and croissant at The Crispiano Cafe"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/80 backdrop-blur-sm rounded-full mb-8 opacity-0 animate-fade-up">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-secondary-foreground">
              Now Open • Freshly Brewed Daily
            </span>
          </div>

          {/* Headline */}
          <h1 className="heading-xl text-foreground mb-6 opacity-0 animate-fade-up animation-delay-100">
            Fresh Brews.{' '}
            <span className="text-coffee-light">Crisp Moments.</span>
          </h1>

          {/* Subtext */}
          <p className="text-body text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up animation-delay-200">
            Discover the art of handcrafted coffee in a warm, relaxed atmosphere. 
            Every cup is brewed with passion, every moment made memorable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up animation-delay-300">
            <Button
              size="lg"
              onClick={scrollToMenu}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-card hover:shadow-hover transition-all"
            >
              View Menu
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={openWhatsApp}
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg font-medium transition-all"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Order on WhatsApp
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 opacity-0 animate-fade-up animation-delay-400">
          <button
            onClick={scrollToMenu}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll to menu"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
