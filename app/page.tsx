import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Method } from "@/components/Method";
import { Sectors } from "@/components/Sectors";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Team } from "@/components/Team";
import { ValueProps } from "@/components/ValueProps";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <Stats />
        <Services />
        <ValueProps />
        <Team />
        <Sectors />
        <Method />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
