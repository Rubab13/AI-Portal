import Hero from '../components/Hero';
import QuickValueStrip from '../components/QuickValueStrip';
import AgentSlider from '../components/AgentSlider';
import PartnerStatsSection from '../components/PartnerStatsSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Hero />
        <QuickValueStrip />
        <AgentSlider />
        <PartnerStatsSection />
      </main>
      <Footer />
    </div>
  );
}
