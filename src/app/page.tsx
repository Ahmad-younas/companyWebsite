'use client';

import HeroSlider from './components/HeroSlider';
import Navbar from "./components/Navbar";
import Journey from './components/Journey';
import Footer from './components/Footer';
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSlider />
      <Footer />
    </main>
  );
}
