import { Link } from "react-router-dom";

interface SubjectCardProps {
  emoji: string;
  title: string;
  description: string;
  path: string;
  colorClass: string;
}

const SubjectCard = ({ emoji, title, description, path, colorClass }: SubjectCardProps) => {
  return (
    <Link to={path} className="block group">
      <div className="subject-card relative overflow-hidden">
        {/* Background decoration */}
        <div 
          className={`absolute top-0 right-0 w-32 h-32 rounded-full ${colorClass} opacity-10 blur-2xl transform translate-x-8 -translate-y-8 group-hover:opacity-20 transition-opacity duration-300`}
        />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Emoji Icon */}
          <div className="mb-4">
            <span className="text-5xl md:text-6xl block group-hover:scale-110 transition-transform duration-300">
              {emoji}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm md:text-base mb-6 line-clamp-3">
            {description}
          </p>

          {/* CTA Button */}
          <div className="flex items-center gap-2 text-primary font-semibold">
            <span>Start Learning</span>
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SubjectCard;
