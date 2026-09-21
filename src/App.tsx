import React from 'react';
import { AmbientBackground } from './components/AmbientBackground';
import { ApothekeCard } from './components/ApothekeCard';
import { BibliothekCard } from './components/BibliothekCard';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { LanguageSelector } from './components/LanguageSelector';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen min-h-[100dvh] w-full bg-[#07110D] text-[#F3EBDD] overflow-x-hidden flex flex-col items-center">
        {/* Cinematic Ambient Atmosphere */}
        <AmbientBackground />

        {/* Main Mobile-First Bio Container */}
        <div className="relative z-10 w-full max-w-[480px] xs:max-w-[500px] sm:max-w-[540px] mx-auto min-h-screen min-h-[100dvh] flex flex-col justify-between px-3 xs:px-3.5 sm:px-4.5 pt-[max(0.75rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))]">
          
          {/* Subtle Top Language Selector (Automatic device detection + manual toggle) */}
          <LanguageSelector />

          {/* Header with circular expert portrait & portal title */}
          <Header />

          {/* The Two Main Destination Cards */}
          <main className="w-full flex flex-col gap-3.5 xs:gap-4 sm:gap-4.5 my-2.5 sm:my-4">
            {/* Destination 1: DIE VERBOTENE APOTHEKE */}
            <ApothekeCard />

            {/* Destination 2: VERBORGENE BIBLIOTHEK */}
            <BibliothekCard />
          </main>

          {/* Footer with Mandated Archival Quote & Horizon Vista */}
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}
