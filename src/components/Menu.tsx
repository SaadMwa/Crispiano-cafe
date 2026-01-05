import { useState } from 'react';
import { cn } from '@/lib/utils';

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: 'coffee',
    name: 'Coffee',
    items: [
      { name: 'Espresso', description: 'Rich and bold single or double shot', price: '$3.50' },
      { name: 'Cappuccino', description: 'Espresso with steamed milk and velvety foam', price: '$4.50' },
      { name: 'Latte', description: 'Smooth espresso with creamy steamed milk', price: '$5.00' },
      { name: 'Americano', description: 'Espresso with hot water for a clean finish', price: '$4.00' },
      { name: 'Flat White', description: 'Double ristretto with microfoam milk', price: '$5.00' },
      { name: 'Mocha', description: 'Espresso, chocolate, and steamed milk', price: '$5.50' },
    ],
  },
  {
    id: 'specialty',
    name: 'Specialty Drinks',
    items: [
      { name: 'Crispiano Signature', description: 'House special with caramel and vanilla', price: '$6.50' },
      { name: 'Iced Honey Latte', description: 'Cold brew with honey and oat milk', price: '$6.00' },
      { name: 'Matcha Latte', description: 'Premium Japanese matcha with your choice of milk', price: '$5.50' },
      { name: 'Golden Turmeric Latte', description: 'Warming spiced turmeric blend', price: '$5.50' },
      { name: 'Iced Caramel Macchiato', description: 'Vanilla, milk, espresso, and caramel drizzle', price: '$6.00' },
    ],
  },
  {
    id: 'snacks',
    name: 'Snacks & Desserts',
    items: [
      { name: 'Butter Croissant', description: 'Flaky, golden, freshly baked', price: '$4.00' },
      { name: 'Chocolate Muffin', description: 'Rich chocolate chips in soft muffin', price: '$4.50' },
      { name: 'Avocado Toast', description: 'Smashed avocado on artisan sourdough', price: '$8.00' },
      { name: 'Cinnamon Roll', description: 'Warm with cream cheese frosting', price: '$5.00' },
      { name: 'Cheesecake Slice', description: 'Creamy New York style cheesecake', price: '$6.50' },
      { name: 'Granola Bowl', description: 'Greek yogurt, fresh fruits, and honey', price: '$7.50' },
    ],
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const activeItems = menuData.find((cat) => cat.id === activeCategory)?.items || [];

  return (
    <section id="menu" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-widest mb-4 block">
            Our Menu
          </span>
          <h2 className="heading-lg text-foreground mb-4">
            Crafted with <span className="text-coffee-light">Care</span>
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            From classic espresso drinks to our signature creations, every item 
            is made fresh with premium ingredients.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'px-5 py-2.5 rounded-full font-medium text-sm transition-all',
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {activeItems.map((item, index) => (
            <div
              key={item.name}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-coffee-light transition-colors">
                  {item.name}
                </h3>
                <span className="text-accent font-semibold text-lg">
                  {item.price}
                </span>
              </div>
              <p className="text-body-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Order CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to order? Send us a message on WhatsApp!
          </p>
          <button
            onClick={() => window.open('https://wa.me/1234567890?text=Hi! I would like to place an order.', '_blank')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-colors shadow-soft hover:shadow-card"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Order on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
