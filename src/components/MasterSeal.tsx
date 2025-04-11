
import { cn } from "@/lib/utils";
import { TreeDeciduous } from "lucide-react";

interface MasterSealProps {
  earned: boolean;
  className?: string;
}

const MasterSeal: React.FC<MasterSealProps> = ({ earned, className }) => {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="relative">
        <div className={cn(
          "w-20 h-20 rounded-full flex items-center justify-center",
          earned 
            ? "bg-gradient-to-br from-yellow-300 to-yellow-600 animate-float" 
            : "bg-gray-200"
        )}>
          <TreeDeciduous 
            className={cn(
              "w-14 h-14", 
              earned ? "text-white" : "text-gray-400"
            )} 
            fill={earned ? "currentColor" : "none"}
          />
          <span className="absolute inset-0 flex items-center justify-center text-xl font-bold">
            {earned ? "✓" : "?"}
          </span>
        </div>
      </div>
      <span className={cn(
        "mt-2 font-semibold",
        earned ? "text-completed" : "text-gray-400"
      )}>
        {earned ? "Mestre da Árvore" : "Complete todos os ramos"}
      </span>
    </div>
  );
};

export default MasterSeal;
