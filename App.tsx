import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import SelectedWork from './components/SelectedWork';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleTagSelect = (tag: string | null) => {
    setSelectedTag(tag);
    if (tag) {
      // Smooth scroll to work section
      const workSection = document.getElementById('work');
      if (workSection) {
        workSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-warm-50 text-warm-900 selection:bg-[#C15C37] selection:text-white">
      <Header />
      <main>
        <Hero onTagSelect={handleTagSelect} />
        <Philosophy />
        <SelectedWork selectedTag={selectedTag} onTagSelect={setSelectedTag} />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;