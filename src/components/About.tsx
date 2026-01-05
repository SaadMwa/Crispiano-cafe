import { Coffee, Heart, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Coffee,
      title: 'Premium Beans',
      description: 'Carefully sourced and expertly roasted for the perfect cup every time.',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every drink is crafted with passion by our skilled baristas.',
    },
    {
      icon: Users,
      title: 'Community Hub',
      description: 'A welcoming space for friends, remote workers, and coffee lovers alike.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <span className="text-accent font-medium text-sm uppercase tracking-widest mb-4 block">
              Our Story
            </span>
            <h2 className="heading-lg text-foreground mb-6">
              Where Every Cup{' '}
              <span className="text-coffee-light">Tells a Story</span>
            </h2>
            <p className="text-body text-muted-foreground mb-6">
              Welcome to The Crispiano Cafe — your neighborhood haven for exceptional 
              coffee and warm hospitality. We believe that great coffee brings people 
              together, creating moments of connection and joy.
            </p>
            <p className="text-body text-muted-foreground mb-8">
              From our carefully selected beans to our cozy ambiance, every detail 
              is thoughtfully designed to make your visit unforgettable. Whether 
              you're catching up with friends, working remotely, or simply enjoying 
              a quiet moment, we're here to make it special.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex gap-5 p-6 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-body-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
