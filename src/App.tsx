import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProblemStatement } from "./components/ProblemStatement";
import { Solution } from "./components/Solution";
import { Features } from "./components/Features";
import { Comparison } from "./components/Comparison";
import { Impact } from "./components/Impact";
import { BusinessModel } from "./components/BusinessModel";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProblemStatement />
      <Solution />
      <Features />
      <Comparison />
      <Impact />
      <BusinessModel />
      <Contact />
      <Footer />
    </div>
  );
}
