import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore all 8 credit repair services offered by S & C Business Group LLC — from dispute collections and charge-off removal to identity restoration.",
};

export default function ServicesPage() {
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
        <div className="absolute top-0 right-0 w-80 h-80 bg-sage opacity-10 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-body text-sage text-xs tracking-widest uppercase font-medium mb-4">
            What We Offer
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Our Support Services
          </h1>
          <div className="w-12 h-0.5 bg-sage mb-6" />
          <p className="font-body text-white/60 text-lg max-w-xl leading-relaxed">
            We tackle every type of negative item on your credit report.
            Personalized strategies, real results — one dispute at a time.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="bg-cream-dark py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="font-body text-sage text-xs tracking-widest uppercase font-medium mb-3">
              How It Works
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl text-brand-black">
              Our Simple Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Book a Consultation",
                desc: "Schedule your 30-minute call. We review your credit reports from all three bureaus together.",
              },
              {
                step: "02",
                title: "Build Your Plan",
                desc: "We identify every negative item, prioritize disputes, and create a personalized action plan.",
              },
              {
                step: "03",
                title: "Watch Results",
                desc: "We file disputes, follow up, and keep you updated as items are removed and your score climbs.",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="w-12 h-12 rounded-xl bg-sage text-white font-heading font-bold text-xl flex items-center justify-center mb-5">
                  {item.step}
                </div>
                <h3 className="font-heading text-2xl text-brand-black mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before booking note */}
      <section className="bg-white py-14">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="bg-sage/10 border border-sage-light rounded-2xl p-8">
            <p className="font-body text-sage text-xs tracking-widest uppercase font-medium mb-3">
              Before Your Appointment
            </p>
            <h3 className="font-heading text-2xl text-brand-black mb-4">
              Please prepare the following:
            </h3>
            <ul className="space-y-3">
              {[
                "Create an account at www.experian.com and have your login ready",
                "Have your credit reports from all 3 bureaus accessible if possible",
                "Note any specific accounts or items you'd like to discuss",
                "Same-day appointments are not available — please book at least 24 hours in advance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-sage shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-brand-black leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sage py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl text-white mb-5">
            Ready to Get Started?
          </h2>
          <p className="font-body text-white/80 text-lg mb-8 leading-relaxed">
            Book your consultation today. One call can change your financial future.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-sage-dark hover:bg-cream font-body font-medium px-8 py-4 rounded-full transition-all duration-200 hover:gap-3"
          >
            Schedule Your Consultation
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
