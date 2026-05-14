import { PrismaHero } from "@/components/ui/prisma-hero";
import { WhyEksen } from "@/components/sections/WhyEksen";
import { Programs } from "@/components/sections/Programs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <PrismaHero />
      <WhyEksen />
      <Programs />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
