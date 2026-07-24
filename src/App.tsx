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
import EcosmeticsPartnership from './components/EcosmeticsPartnership';
import Differentials from './components/Differentials';
import About from './components/About';
import ServiceArea from './components/ServiceArea';
import CtaFinal from './components/CtaFinal';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#E5E0DC] text-[#000000] selection:bg-[#48523B] selection:text-[#E5E0DC]">
      {/* Header component with sticky transition */}
      <Header />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Credibility horizontal band */}
        <Credibility />

        {/* Asymmetric Category Grid */}
        <Categories />

        {/* Full-width Impact Banner */}
        <BannerImpact />

        {/* Ecosmetics official products showcase */}
        <Courses />

        {/* Brambatti key differentials */}
        <Differentials />

        {/* Ecosmetics brand & partnership values */}
        <EcosmeticsPartnership />

        {/* Detailed "About the company" */}
        <About />

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

