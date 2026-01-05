import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>The Crispiano Cafe | Fresh Brews. Crisp Moments.</title>
        <meta
          name="description"
          content="Discover handcrafted coffee and delicious treats at The Crispiano Cafe. Order via WhatsApp or visit us for a cozy café experience in downtown."
        />
        <meta
          name="keywords"
          content="cafe, coffee shop, espresso, latte, cappuccino, pastries, coffee near me, The Crispiano Cafe"
        />
        <meta property="og:title" content="The Crispiano Cafe | Fresh Brews. Crisp Moments." />
        <meta
          property="og:description"
          content="Handcrafted coffee and delicious treats in a warm, welcoming atmosphere. Order on WhatsApp or visit us today!"
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://thecrispianocafe.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Menu />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
