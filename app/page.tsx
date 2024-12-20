import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProfilePix from "@/components/ProfilePix";
import Resume from "@/components/Resume";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="h-dvh relative overflow-scroll pb-28">
      <div>
        <HeroSection />
      </div>
      <div>
        <ProfilePix />
      </div>

      <div>
        <AboutSection />
      </div>

      <div className="dark:bg-black">
        <h3 className="text-3xl font-extrabold text-center py-5 dark:text-slate-200 underline underline-offset-4">
          Resume
        </h3>
        {/* <Separator className="my-4 bg-slate-400" /> */}
        <Resume />
      </div>

      <div className="fixed bottom-0">
        <Footer />
      </div>
    </main>
  );
}
