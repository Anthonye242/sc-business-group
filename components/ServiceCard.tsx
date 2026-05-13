import {
  Shield,
  XCircle,
  BookOpen,
  Heart,
  Clock,
  Car,
  GraduationCap,
  UserCheck,
  LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Shield,
  XCircle,
  BookOpen,
  Heart,
  Clock,
  Car,
  GraduationCap,
  UserCheck,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  variant?: "default" | "compact";
}

export default function ServiceCard({
  title,
  description,
  icon,
  variant = "default",
}: ServiceCardProps) {
  const Icon = ICON_MAP[icon] ?? Shield;

  if (variant === "compact") {
    return (
      <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-cream-dark hover:border-sage-light hover:shadow-md transition-all duration-200">
        <div className="w-10 h-10 rounded-lg bg-sage/10 flex items-center justify-center shrink-0">
          <Icon size={18} className="text-sage" />
        </div>
        <div>
          <h3 className="font-heading text-lg text-brand-black mb-1">{title}</h3>
          <p className="font-body text-sm text-muted leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="group p-7 bg-white rounded-2xl border border-cream-dark hover:border-sage-light hover:shadow-lg transition-all duration-200">
      <div className="w-12 h-12 rounded-xl bg-sage/10 flex items-center justify-center mb-5 group-hover:bg-sage/20 transition-colors">
        <Icon size={22} className="text-sage" />
      </div>
      <h3 className="font-heading text-2xl text-brand-black mb-3">{title}</h3>
      <p className="font-body text-sm text-muted leading-relaxed">{description}</p>
    </div>
  );
}
