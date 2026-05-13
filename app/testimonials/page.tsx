import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TestimonialCard from "@/components/TestimonialCard";
import { TESTIMONIALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read real results from S & C Business Group LLC clients — score improvements, collections removed, and financial freedom achieved.",
};

export default function TestimonialsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-brand-black pt-36 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#8FAF8F 1px, transparent 1px), linear-gradient(90deg, #8FAF8F 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-body text-sage text-xs tracking-widest uppercase font-medium mb-4">
            Client Stories
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Real People.<br />
            <span className="text-sage">Real Progress.</span>
          </h1>
          <div className="w-12 h-0.5 bg-sage mb-6" />
          <p className="font-body text-white/60 text-lg max-w-xl leading-relaxed">
            These are the stories of clients who took the first step and never
            looked back. Their results are real — and yours can be too.
          </p>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.id} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-cream-dark py-10">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="font-body text-xs text-muted leading-relaxed">
            Results shown are individual client experiences and may not be typical.
            Credit repair outcomes vary based on each client&apos;s unique credit profile,
            cooperation with the process, and the accuracy of items on their report.
            S & C Business Group LLC does not guarantee specific results.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sage py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl text-white mb-5">
            Your Story Starts Here
          </h2>
          <p className="font-body text-white/80 text-lg mb-8 leading-relaxed">
            Join hundreds of clients who chose to take control of their credit.
            Book your consultation and let&apos;s write your success story.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-sage-dark hover:bg-cream font-body font-medium px-8 py-4 rounded-full transition-all duration-200 hover:gap-3"
          >
            Book Your Consultation
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
