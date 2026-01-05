import galleryInterior from '@/assets/gallery-interior.jpg';
import galleryDrinks from '@/assets/gallery-drinks.jpg';
import galleryPastries from '@/assets/gallery-pastries.jpg';
import galleryOutdoor from '@/assets/gallery-outdoor.jpg';

const Gallery = () => {
  const images = [
    {
      src: galleryDrinks,
      alt: 'Artisan coffee drinks at The Crispiano Cafe',
      title: 'Our Signature Drinks',
    },
    {
      src: galleryInterior,
      alt: 'Cozy interior of The Crispiano Cafe',
      title: 'Warm Interiors',
    },
    {
      src: galleryPastries,
      alt: 'Fresh pastries and desserts',
      title: 'Fresh Pastries',
    },
    {
      src: galleryOutdoor,
      alt: 'Outdoor seating area with string lights',
      title: 'Outdoor Seating',
    },
  ];

  return (
    <section id="gallery" className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-widest mb-4 block">
            Gallery
          </span>
          <h2 className="heading-lg text-foreground mb-4">
            A Glimpse of <span className="text-coffee-light">Crispiano</span>
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Experience the warmth and charm of our café through these moments 
            captured by our community.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={image.title}
              className="group relative overflow-hidden rounded-xl aspect-square shadow-soft hover:shadow-hover transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-heading font-semibold text-lg text-primary-foreground">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Follow us for more coffee moments
          </p>
          <a
            href="https://instagram.com/thecrispianocafe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @thecrispianocafe
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
