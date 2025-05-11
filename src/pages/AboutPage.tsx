import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import Mission from "@/components/about/Mission";
import Team from "@/components/about/Team";
import CTA from "@/components/home/CTA";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AboutHero />
        <Mission />
        <Team />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
