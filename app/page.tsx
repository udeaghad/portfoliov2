import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProfilePix from "@/components/ProfilePix";

export default function Home() {
  return (
    <main className="h-dvh relative">
      <div>
        <HeroSection />
      </div>
      <div>
        <ProfilePix />
      </div>
      <div className="absolute bottom-0">
        <Footer />
      </div>
    </main>
  );
}
