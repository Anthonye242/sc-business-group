import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Users,
  CheckCircle2,
  Star,
  ChevronDown,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { SERVICES, TESTIMONIALS, STATS } from "@/lib/constants";

export default function HomePage() {
  const featuredServices = SERVICES.slice(0, 3);
  const featuredTestimonials = TESTIMONIALS.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center bg-brand-black overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#8FAF8F 1px, transparent 1px), linear-gradient(90deg, #8FAF8F 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sage opacity-10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-sage-light opacity-5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-8">
              <div className="w-8 h-px bg-sage" />
              <span className="font-body text-sage text-xs tracking-widest uppercase font-medium">
                S & C Business Group LLC
              </span>
            </div>

            <h1 className="font-heading font-semibold text-white mb-6 leading-[1.08]">
              <span className="block text-5xl sm:text-6xl lg:text-7xl">
                Repair Your Credit.
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-sage mt-1">
                Reclaim Your Life.
              </span>
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-0.5 bg-sage" />
              <div className="w-2 h-2 rounded-full bg-sage" />
              <div className="w-8 h-0.5 bg-sage/40" />
            </div>

            <p className="font-body text-white/70 text-lg leading-relaxed max-w-xl mb-10">
              Professional credit restoration services that dispute negative items,
              remove charge-offs, and put you on the path to financial freedom.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-sage hover:bg-sage-dark text-white font-body font-medium px-8 py-4 rounded-full transition-all duration-200 hover:gap-3"
              >
                Book a Consultation
                <ArrowRight size={17} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-sage text-white hover:text-sage font-body font-medium px-8 py-4 rounded-full transition-all duration-200"
              >
                View Our Services
              </Link>
            </div>

            <p className="font-body text-white/40 text-xs mt-6 flex items-center gap-1.5">
              <CheckCircle2 size={12} className="text-sage" />
              30-minute consultation · $50 · Phone call
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
          <ChevronDown size={20} />
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-b border-cream-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Licensed & Trusted",
                sub: "Professional credit repair services",
              },
              {
                icon: TrendingUp,
                title: "Real Results",
                sub: "Verified score improvements for our clients",
              },
              {
                icon: Users,
                title: "Personalized Care",
                sub: "Tailored strategies for your unique situation",
              },
            ].map(({ icon: Icon, title, sub }) => (
              <div key={title} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-sage" />
                </div>
                <div>
                  <p className="font-heading text-xl text-brand-black">{title}</p>
                  <p className="font-body text-xs text-muted mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-5xl font-bold text-sage mb-2">
                  {stat.value}
                </p>
                <p className="font-body text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <p className="font-body text-sage text-xs tracking-widest uppercase font-medium mb-3">
                What We Do
              </p>
              <h2 className="font-heading text-4xl sm:text-5xl text-brand-black">
                Our Support Services
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-body text-sm text-sage hover:gap-3 transition-all font-medium shrink-0"
            >
              See all 8 services <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-brand-black py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-body text-sage text-xs tracking-widest uppercase font-medium mb-4">
                About Us
              </p>
              <h2 className="font-heading text-4xl sm:text-5xl text-white mb-6 leading-tight">
                Two Women on a Mission to Fix Your Credit
              </h2>
              <div className="w-12 h-0.5 bg-sage mb-8" />
              <blockquote className="font-heading text-2xl italic text-white/80 leading-relaxed mb-8">
                &ldquo;We started this business because we believe everyone deserves
                access to financial freedom — no matter where they&apos;re starting from.&rdquo;
              </blockquote>
              <p className="font-body text-white/60 leading-relaxed mb-10">
                S & C Business Group LLC was founded by two driven women who saw
                firsthand how damaged credit holds people back from housing,
                vehicles, and opportunities. We built this company to be the
                resource we wish existed.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-sage hover:bg-sage-dark text-white font-body text-sm font-medium px-7 py-3 rounded-full transition-all duration-200 hover:gap-3"
              >
                Meet the Team <ArrowRight size={15} />
              </Link>
            </div>

            {/* Partner photos */}
            <div className="flex gap-4 justify-center">
              {[
                { src: "/images/partner-courtney.png", name: "Courtney B.", offset: "mt-0" },
                { src: "/images/partner-unknown.png", name: "Co-Founder", offset: "mt-10" },
              ].map((p) => (
                <div key={p.name} className={`flex-1 max-w-[200px] ${p.offset}`}>
                  <div className="aspect-[3/4] rounded-2xl border border-sage/30 relative overflow-hidden shadow-xl">
                    <Image
                      src={p.src}
                      alt={p.name}
                      fill
                      className="object-cover object-top"
                      sizes="200px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-0 right-0 text-center">
                      <p className="font-heading text-white text-sm">{p.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials teaser */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <p className="font-body text-sage text-xs tracking-widest uppercase font-medium mb-3">
                Client Results
              </p>
              <h2 className="font-heading text-4xl sm:text-5xl text-brand-black">
                Real People, Real Progress
              </h2>
            </div>
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 font-body text-sm text-sage hover:gap-3 transition-all font-medium shrink-0"
            >
              Read all stories <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTestimonials.map((t) => (
              <TestimonialCard key={t.id} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-sage py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="fill-white text-white" />
              ))}
            </div>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-5 leading-tight">
            Ready to Reclaim Your Credit?
          </h2>
          <p className="font-body text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Schedule your consultation today and take the first step toward the
            financial freedom you deserve. No more denials. No more worry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-sage-dark hover:bg-cream font-body font-medium px-8 py-4 rounded-full transition-all duration-200 hover:gap-3"
            >
              Book Your Consultation
              <ArrowRight size={17} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center border border-white/40 hover:border-white text-white font-body font-medium px-8 py-4 rounded-full transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
