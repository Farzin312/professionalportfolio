import type { Metadata } from "next";
import React from "react";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";
import Services from "./components/Services";

export const metadata: Metadata = {
  title: "Home – Upstride",
  description:
    "I build backend systems & AI-powered integrations: SEO optimization, payments, finance automation, analytics, and more.",
  openGraph: {
    title: "Home – Upstride",
    description:
      "Specializing in modular AI lead-gen, analytics, auth/security, microservices, and turnkey services.",
    url: "https://upstride.tech",
    images: [{ url: "https://upstride.tech/logo.png", width: 1200, height: 630 }],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Testimonials />
      <Projects />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">
            <span className="text-yellow-300">Struggling to balance</span> your business and digital demands?
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Let us take care of your digital maintenance and updates each month, <br/>
            so you can focus on what matters—growing your business!
          </p>
        </div>
      </section>
      <Services />
      {/* Back up to Services */}
      <div className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-start">
          <a href="#services" className="flex flex-col items-center text-black hover:underline">
            <span className="px-2 ml-6 py-1  bg-black text-white rounded-full">↑</span>
            <span className="mt-2 ml-6 font-medium text-xl text-center leading-snug">
              Back up to<br />
              Services
            </span>
          </a>
        </div>
      </div>

      {/* Closing CTA */}
      <div className="py-15 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-2xl font-semibold mb-20">
            &ldquo;Build Smarter, Sell Faster – The Ultimate Web Solution!&rdquo;
            <br />
            Let&rsquo;s build your future-proof website today!
          </p>
        </div>
      </div>
    </main>
  );
}
