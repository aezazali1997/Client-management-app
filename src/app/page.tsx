"use client";
import Navbar from "@/components/navbar";
import LandingPage from "@/components/landing";
import ThreeStepProcess from "@/components/threestepprocess";
import Banner from "@/components/banner";
import Testimonial from "@/components/testimonials";
import WhyUs from "@/components/whyus";
import Footer from "@/components/footer";
import { BrowserRouter } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LandingPage />
        <ThreeStepProcess />
        <Banner />
        <Testimonial />
        <WhyUs />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
