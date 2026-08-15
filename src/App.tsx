/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Credibility from './components/Credibility';
import Categories from './components/Categories';
import BannerImpact from './components/BannerImpact';
import Courses from './components/Courses';
import Differentials from './components/Differentials';
import About from './components/About';
import ServiceArea from './components/ServiceArea';
import CtaFinal from './components/CtaFinal';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5E9DD] text-[#20201E] selection:bg-[#AB907B] selection:text-white">
      {/* Header component with sticky transition */}
      <Header />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Credibility horizontal band */}
        <Credibility />

        {/* Detailed "About the company" */}
        <About />

        {/* Asymmetric Category Grid */}
        <Categories />

        {/* Full-width Impact Banner */}
        <BannerImpact />

        {/* Ecosmetics official products showcase */}
        <Courses />

        {/* Brambatti key differentials */}
        <Differentials />

        {/* State delivery coverage / regional service viewer */}
        <ServiceArea />

        {/* Direct WhatsApp Call to Action segment */}
        <CtaFinal />
      </main>

      {/* Structured Footer with coordinates, instagram and legal mentions */}
      <Footer />
    </div>
  );
}
