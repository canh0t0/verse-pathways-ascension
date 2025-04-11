
import { cn } from "@/lib/utils";
import { Award } from "lucide-react";

interface ThemeSealProps {
  theme: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const ThemeSeal: React.FC<ThemeSealProps> = ({ 
  theme, 
  className,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div 
      className={cn(
        "relative flex items-center justify-center rounded-full animate-float", 
        sizeClasses[size],
        className
      )}
    >
      <Award 
        className={cn(
          "text-completed-dark fill-completed-dark", 
          size === 'sm' ? 'w-6 h-6' : size === 'md' ? 'w-8 h-8' : 'w-12 h-12'
        )} 
      />
      <span 
        className={cn(
          "absolute inset-0 flex items-center justify-center text-gray-900 font-bold",
          size === 'sm' ? 'text-[8px]' : size === 'md' ? 'text-[10px]' : 'text-sm'
        )}
      >
        {theme.charAt(0).toUpperCase()}
      </span>
    </div>
  );
};

export default ThemeSeal;
