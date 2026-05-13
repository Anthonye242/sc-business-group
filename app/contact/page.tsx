import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, DollarSign, ExternalLink } from "lucide-react";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { PHONE, EMAIL, ADDRESS, INSTAGRAM, INSTAGRAM_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Schedule your personal credit repair consultation with S & C Business Group LLC. 30 minutes, $50, phone call. Same-day appointments not available.",
};

export default function ContactPage() {
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
            Get Started
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Book Your<br />
            <span className="text-sage">Consultation</span>
          </h1>
          <div className="w-12 h-0.5 bg-sage mb-6" />
          <p className="font-body text-white/60 text-lg max-w-xl leading-relaxed">
            Select a date and time that works for you. We&apos;ll review your credit
            reports together and build a plan to move forward.
          </p>
        </div>
      </section>

      {/* Calendly + Contact info */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Consultation details */}
              <div className="bg-white rounded-2xl border border-cream-dark p-7">
                <h2 className="font-heading text-2xl text-brand-black mb-6">
                  Consultation Details
                </h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-sage/10 flex items-center justify-center shrink-0">
                      <Clock size={16} className="text-sage" />
                    </div>
                    <div>
                      <p className="font-body text-sm font-medium text-brand-black">Duration</p>
                      <p className="font-body text-sm text-muted mt-0.5">
                        30 minutes (plan for up to 1 hour)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-sage/10 flex items-center justify-center shrink-0">
                      <DollarSign size={16} className="text-sage" />
                    </div>
                    <div>
                      <p className="font-body text-sm font-medium text-brand-black">Investment</p>
                      <p className="font-body text-sm text-muted mt-0.5">$50 USD</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-sage/10 flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-sage" />
                    </div>
                    <div>
                      <p className="font-body text-sm font-medium text-brand-black">Format</p>
                      <p className="font-body text-sm text-muted mt-0.5">Phone call</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Before you book */}
              <div className="bg-sage/10 border border-sage-light rounded-2xl p-7">
                <h3 className="font-heading text-xl text-brand-black mb-4">
                  Before Your Call
                </h3>
                <ul className="space-y-3">
                  {[
                    "Create an account at experian.com",
                    "Have your login credentials ready",
                    "Note any specific accounts to discuss",
                    "Same-day appointments are not available",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-sage shrink-0 mt-1.5" />
                      <p className="font-body text-sm text-brand-black leading-relaxed">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact info */}
              <div className="bg-white rounded-2xl border border-cream-dark p-7">
                <h3 className="font-heading text-xl text-brand-black mb-5">
                  Contact Us
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Phone size={15} className="text-sage shrink-0 mt-0.5" />
                    <a
                      href={`tel:${PHONE}`}
                      className="font-body text-sm text-muted hover:text-sage transition-colors"
                    >
                      {PHONE}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail size={15} className="text-sage shrink-0 mt-0.5" />
                    <a
                      href={`mailto:${EMAIL}`}
                      className="font-body text-sm text-muted hover:text-sage transition-colors"
                    >
                      {EMAIL}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin size={15} className="text-sage shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-muted">{ADDRESS}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ExternalLink size={15} className="text-sage shrink-0 mt-0.5" />
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-muted hover:text-sage transition-colors"
                    >
                      {INSTAGRAM}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Calendly embed */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-cream-dark p-2 sm:p-4 shadow-sm">
                <CalendlyEmbed />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ strip */}
      <section className="bg-cream-dark py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-heading text-3xl text-brand-black text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-5">
            {[
              {
                q: "How long does credit repair take?",
                a: "Most clients begin seeing results within 30–90 days. Full resolution of all disputes can take 3–6 months depending on the complexity of your case.",
              },
              {
                q: "Can you guarantee my score will improve?",
                a: "We cannot legally guarantee specific point increases, but we can guarantee that we will work diligently to dispute every inaccurate or unverifiable item on your report.",
              },
              {
                q: "Do I need to pull my credit report before the call?",
                a: "We recommend creating an account at experian.com so we can review your report together during the consultation. You can use a free account.",
              },
              {
                q: "What if I've already tried disputing on my own?",
                a: "That's completely fine. We know the exact language, strategies, and escalation paths that get results — even for items that have been previously disputed.",
              },
            ].map(({ q, a }) => (
              <details
                key={q}
                className="group bg-white rounded-xl border border-cream-dark p-5 cursor-pointer"
              >
                <summary className="font-heading text-lg text-brand-black list-none flex items-center justify-between gap-4">
                  {q}
                  <span className="text-sage font-body text-xl transition-transform group-open:rotate-45 shrink-0">
                    +
                  </span>
                </summary>
                <p className="font-body text-sm text-muted mt-4 leading-relaxed pt-4 border-t border-cream-dark">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
