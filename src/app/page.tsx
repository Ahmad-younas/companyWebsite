import Image from "next/image";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import Navbar from "./components/Navbar";
import HeroSlider from './components/HeroSlider';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <h1>Welcome to Confiz</h1>
      <Footer />
    </main>
  );
}
