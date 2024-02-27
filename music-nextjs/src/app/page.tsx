import CardSection from "@/components/CardSection";
import ChooseUs from "@/components/ChooseUs";
import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import Webinar from "@/components/Webinar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased ">
      <HeroSection />
      <FeaturedSection />
      <ChooseUs />
      <CardSection />
      <Webinar />
      <Instructor />
    </main>
  );
}
