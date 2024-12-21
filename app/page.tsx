import AboutSection from "@/components/AboutSection";
import DownloadButton from "@/components/DownloadButton";
import DownLoadIcon from "@/components/DownLoadIcon";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MySkills from "@/components/MySkills";
import ProfilePix from "@/components/ProfilePix";
import Qualification from "@/components/Qualification";
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

      <div className="dark:bg-black py-10">
        <div className="flex justify-center items-center gap-2">
          <h3 className="text-3xl font-extrabold text-center dark:text-slate-200 underline underline-offset-4">
            Resume
          </h3>
          <div>
            <DownLoadIcon />
          </div>
        </div>

        <Resume />
        <Qualification />
        <MySkills />
        <Separator className="bg-slate-400 my-5" />
        <div className="flex justify-center">
          <DownloadButton
            link="/assets/Resume.pdf"
            filename="Resume.pdf"
            name="Download Resume"
          />
        </div>
      </div>

      <div className="fixed bottom-0">
        <Footer />
      </div>
    </main>
  );
}
