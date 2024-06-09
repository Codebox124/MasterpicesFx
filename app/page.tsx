import Image from "next/image";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimoni";
import CTA from "./components/Cta";


export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
    </>
  );
}
