import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import TrustStrip from '../components/TrustStrip';
import StatsSection from '../components/StatsSection';
import WhyUsSection from '../components/WhyUsSection';
import AllCoursesSection from '../components/AllCoursesSection';
import FeaturedCourseSection from '../components/FeaturedCourseSection';
import ProjectsShowcase from '../components/ProjectsShowcase';
import SkillsSection from '../components/SkillsSection';
import CareerOutcomesSection from '../components/CareerOutcomesSection';
import LearningJourneySection from '../components/LearningJourneySection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white selection:bg-cyan-400 selection:text-[#0b0f19]">
      <Navbar />
      <main>
        <HeroSection />
        <TrustStrip />
        <StatsSection />
        <AllCoursesSection />
        <FeaturedCourseSection />
        <ProjectsShowcase />
        <SkillsSection />
        <CareerOutcomesSection />
        <LearningJourneySection />
        <WhyUsSection /> {/* <-- MOVED HERE (Just before Testimonials) */}
        <TestimonialsSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}