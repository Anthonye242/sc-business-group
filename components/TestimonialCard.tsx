import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  city: string;
  score: string;
  stars: number;
}

export default function TestimonialCard({
  quote,
  name,
  city,
  score,
  stars,
}: TestimonialCardProps) {
  return (
    <div className="p-7 bg-white rounded-2xl border border-cream-dark shadow-sm flex flex-col gap-4">
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} size={14} className="fill-sage text-sage" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="font-heading text-xl italic text-brand-black leading-snug flex-1">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Result badge + author */}
      <div className="flex items-center justify-between gap-3 pt-2 border-t border-cream-dark">
        <div>
          <p className="font-body text-sm font-medium text-brand-black">{name}</p>
          <p className="font-body text-xs text-muted">{city}</p>
        </div>
        <span className="shrink-0 text-xs font-body font-medium bg-sage-light text-sage-dark px-3 py-1 rounded-full">
          {score}
        </span>
      </div>
    </div>
  );
}
