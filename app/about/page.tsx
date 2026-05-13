import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, Target, Shield } from "lucide-react";
import { PARTNERS, STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the two women behind S & C Business Group LLC — dedicated to helping clients repair their credit and achieve lasting financial freedom.",
};

export default function AboutPage() {
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
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage opacity-10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 translate-y-1/2" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-body text-sage text-xs tracking-widest uppercase font-medium mb-4">
            Our Story
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Built by Women,<br />
            <span className="text-sage">Built for You.</span>
          </h1>
          <div className="w-12 h-0.5 bg-sage mb-6" />
          <p className="font-body text-white/60 text-lg max-w-xl leading-relaxed">
            S & C Business Group LLC was founded with one purpose: to give everyday
            people the tools and expertise they need to fight back against bad credit
            and build a better financial future.
          </p>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-body text-sage text-xs tracking-widest uppercase font-medium mb-3">
              The Team
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl text-brand-black">
              Meet the Founders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {PARTNERS.map((partner, i) => (
              <div key={i} className="group">
                {/* Photo */}
                <div className="relative aspect-[4/5] bg-cream-dark rounded-2xl overflow-hidden mb-6 shadow-md">
                  {partner.image ? (
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <div className="w-24 h-24 rounded-full bg-sage/20 border-2 border-sage/30 flex items-center justify-center">
                        <span className="font-heading text-4xl text-sage/50">
                          {partner.name.charAt(0)}
                        </span>
                      </div>
                      <p className="font-body text-muted text-sm">Photo coming soon</p>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Info */}
                <h3 className="font-heading text-3xl text-brand-black mb-1">
                  {partner.name}
                </h3>
                <p className="font-body text-sage text-sm font-medium mb-4">
                  {partner.role}
                </p>
                <div className="w-8 h-0.5 bg-sage-light mb-4" />
                <p className="font-body text-muted text-sm leading-relaxed">
                  {partner.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & values */}
      <section className="bg-cream-dark py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-body text-sage text-xs tracking-widest uppercase font-medium mb-4">
                Our Mission
              </p>
              <h2 className="font-heading text-4xl sm:text-5xl text-brand-black mb-6 leading-tight">
                Financial Freedom Isn&apos;t a Privilege — It&apos;s a Right
              </h2>
              <div className="w-12 h-0.5 bg-sage mb-8" />
              <p className="font-body text-muted leading-relaxed mb-6">
                We built S & C Business Group LLC because we know how a damaged credit
                score can close doors — on housing, vehicles, business loans, and
                even employment. We believe with the right support, anyone can turn
                their credit around.
              </p>
              <p className="font-body text-muted leading-relaxed">
                Our approach is personal, transparent, and results-driven. We don&apos;t
                make promises we can&apos;t keep — we make moves that produce real changes
                on your report.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Heart,
                  title: "Client-Centered",
                  desc: "Every strategy is built around your specific credit profile, goals, and timeline.",
                },
                {
                  icon: Target,
                  title: "Results-Driven",
                  desc: "We focus on measurable outcomes: items removed, scores improved, approvals secured.",
                },
                {
                  icon: Shield,
                  title: "Transparent & Honest",
                  desc: "No hidden fees, no empty promises. We walk you through every step of the process.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-5 p-5 bg-white rounded-xl border border-cream-dark">
                  <div className="w-10 h-10 rounded-lg bg-sage/10 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-sage" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-brand-black mb-1">{title}</h3>
                    <p className="font-body text-sm text-muted leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-black py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-5xl font-bold text-sage mb-2">
                  {stat.value}
                </p>
                <p className="font-body text-sm text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl text-brand-black mb-5">
            Let&apos;s Work Together
          </h2>
          <p className="font-body text-muted text-lg mb-8 leading-relaxed">
            Ready to start your credit repair journey? Book a consultation and let us
            build a plan specifically for you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-sage hover:bg-sage-dark text-white font-body font-medium px-8 py-4 rounded-full transition-all duration-200 hover:gap-3"
          >
            Book a Consultation
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
