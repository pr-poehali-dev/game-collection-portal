
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import HeroBanner from '@/components/home/HeroBanner';
import GameDescription from '@/components/home/GameDescription';
import DownloadSection from '@/components/home/DownloadSection';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16"> {/* Padding top для компенсации фиксированного навбара */}
        <HeroBanner />
        <GameDescription />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
