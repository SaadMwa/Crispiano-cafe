import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/+923194563985?text=Hi! I would like to place an order.', '_blank');
  };

  const openDirections = () => {
    window.open('https://maps.google.com/?q=The+Crispiano+Cafe', '_blank');
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-widest mb-4 block">
            Visit Us
          </span>
          <h2 className="heading-lg text-foreground mb-4">
            Find <span className="text-coffee-light">Your Way</span> Here
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            We're conveniently located in the heart of downtown. 
            Stop by for your daily caffeine fix or a weekend treat!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-card h-[350px] lg:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Crispiano Cafe Location"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              {/* Location */}
              <div className="flex gap-4 p-5 bg-card rounded-xl shadow-soft">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">
                    Location
                  </h3>
                  <p className="text-muted-foreground text-body-sm">
                    123 Coffee Street, Downtown<br />
                    New York, NY 10001
                  </p>
                  <button
                    onClick={openDirections}
                    className="text-accent text-sm font-medium mt-2 hover:underline"
                  >
                    Get Directions →
                  </button>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 p-5 bg-card rounded-xl shadow-soft">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">
                    Opening Hours
                  </h3>
                  <p className="text-muted-foreground text-body-sm">
                    Monday - Friday: 7:00 AM - 8:00 PM<br />
                    Saturday - Sunday: 8:00 AM - 9:00 PM
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 p-5 bg-card rounded-xl shadow-soft">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">
                    Phone
                  </h3>
                  <p className="text-muted-foreground text-body-sm">
                    +1 (234) 567-890
                  </p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <Button
                size="lg"
                onClick={openWhatsApp}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 text-lg font-medium shadow-card hover:shadow-hover transition-all mt-4"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Order on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
