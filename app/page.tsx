import Apps from "@/components/Apps";
import Content from "@/components/Content";
import Customize from "@/components/Customize";
import Data from "@/components/Data";
import Extension from "@/components/Extension";
import Footer from "@/components/Footer";
import Freetrial from "@/components/Freetrial";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Plan from "@/components/Plan";
import Sponsor from "@/components/Sponsor";
import Testimonials from "@/components/Testimonials";
import Workmanagement from "@/components/Workmanagement";
import Yourwork from "@/components/Yourwork";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Workmanagement />
      <Content />
      <Extension />
      <Customize />
      <Plan />
      <Yourwork />
      <Data />
      <Sponsor />
      <Apps />
      <Testimonials />
      <Freetrial />
      <Footer />
    </main>
  );
}
