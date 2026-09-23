import React from 'react';
import { AmbientBackground } from './components/AmbientBackground';
import { ApothekeCard } from './components/ApothekeCard';
import { BibliothekCard } from './components/BibliothekCard';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen min-h-[100dvh] w-full overflow-x-hidden bg-[#07110D] text-[#F3EBDD]">
        <AmbientBackground />

        <div className="relative z-10 mx-auto flex min-h-screen min-h-[100dvh] w-full max-w-[960px] flex-col px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-8 lg:px-10">
          <Header />

          <main className="mx-auto flex w-full max-w-[820px] flex-col gap-5 sm:gap-7">
            <BibliothekCard />
            <ApothekeCard />
          </main>

          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}
