import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ActivitiesSection from "./components/ActivitiesSection";
import KnowledgeSection from "./components/KnowledgeSection";
import ContactFooter from "./components/ContactFooter";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-linen text-umber selection:bg-sage selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <ActivitiesSection />
        <KnowledgeSection />
      </main>
      <ContactFooter />
      <FloatingWhatsApp />
    </div>
  );
}
