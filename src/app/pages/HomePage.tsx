import { HeroSection } from '../components/HeroSection';
import { Stats } from '../components/Stats';
import { HowItWorks } from '../components/HowItWorks';
import { Features } from '../components/Features';
import { Testimonials } from '../components/Testimonials';
import { Platforms } from '../components/Platforms';
import { AboutUs } from '../components/AboutUs';
import { FAQ } from '../components/FAQ';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <Stats />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Platforms />
      <AboutUs />
      <FAQ />
    </>
  );
}