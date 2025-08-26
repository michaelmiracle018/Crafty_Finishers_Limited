import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/section/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/section/WhyChooseUs";
import Services from "@/section/Services";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import Blog from "@/components/Blog";
import Footer from "@/section/Footer";

import "swiper/css";

export const Route = createFileRoute("/")({ component });

function component() {
  return (
    <main className="grid min-h-screen place-content-center">
      <Navbar />
      <Hero />
      {/* <About /> */}
      <WhyChooseUs />
      <Services />
      <Portfolio />
      <Team />
      <Testimonial />
      <Blog />
      <Footer />
    </main>
  );
}
