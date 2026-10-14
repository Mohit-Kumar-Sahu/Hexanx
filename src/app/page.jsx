import HeroSection from '../components/HeroSection';
import LayeredEcosystemShowcase from '../components/LayeredEcosystemShowcase';
import AyraSection from '../components/AyraSection';
import BrandPhilosophyBanner from '../components/BrandPhilosophyBanner';

export const metadata = {
  title: 'Hexanx | Enterprise B2B SaaS Ecosystem & AI Platform',
  description:
    'Hexanx is a unified B2B SaaS ecosystem offering Hexanx OS (HR & Finance), Flasto (Restaurant OS), and Roomyes (Hotel PMS) powered by the proprietary Ayra AI neural engine.',
  alternates: { canonical: 'https://www.hexanx.in/' },
};

export default function HomePage() {
  return (
    <div className="relative w-full overflow-x-hidden flex flex-col gap-14 sm:gap-20 md:gap-28 pb-16 sm:pb-24 min-h-screen bg-slate-50 text-slate-800 selection:bg-blue-500 selection:text-white">
      {/* SVG Topographic Contour Background Overlay */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden opacity-35">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="landing-topo-contours" width="120" height="120" patternUnits="userSpaceOnUse">
              <path
                d="M 0 30 Q 30 10, 60 30 T 120 30 M 0 60 Q 30 40, 60 60 T 120 60 M 0 90 Q 30 70, 60 90 T 120 90 M 0 120 Q 30 100, 60 120 T 120 120"
                fill="none"
                stroke="rgba(37, 99, 235, 0.08)"
                strokeWidth="1.2"
              />
              <path
                d="M 15 0 Q 35 60, 15 120 M 45 0 Q 65 60, 45 120 M 75 0 Q 95 60, 75 120 M 105 0 Q 125 60, 105 120"
                fill="none"
                stroke="rgba(147, 51, 234, 0.05)"
                strokeWidth="1"
              />
            </pattern>
            <radialGradient id="landing-topo-glow-1" cx="20%" cy="15%" r="60%">
              <stop offset="0%" stopColor="rgba(37, 99, 235, 0.08)" />
              <stop offset="60%" stopColor="transparent" />
            </radialGradient>
            <radialGradient id="landing-topo-glow-2" cx="80%" cy="70%" r="50%">
              <stop offset="0%" stopColor="rgba(147, 51, 234, 0.06)" />
              <stop offset="70%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#landing-topo-contours)" />
          <rect width="100%" height="100%" fill="url(#landing-topo-glow-1)" />
          <rect width="100%" height="100%" fill="url(#landing-topo-glow-2)" />
        </svg>
      </div>

      <HeroSection />
      <LayeredEcosystemShowcase />
      <AyraSection />
      <BrandPhilosophyBanner />
    </div>
  );
}
