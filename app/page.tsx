import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RecentProjects from "@/components/RecentProjects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Experience />
      <RecentProjects />
      <TechStack />
      <Education />
      <Footer />
    </main>
  );
}
