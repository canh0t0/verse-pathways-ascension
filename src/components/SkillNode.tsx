
import { SkillNode as SkillNodeType } from "@/types/skill-tree";
import { cn } from "@/lib/utils";
import { 
  Church, 
  Heart, 
  MessageCircle, 
  Leaf, 
  Users, 
  ChevronRight, 
  Lock, 
  Check 
} from "lucide-react";

interface SkillNodeProps {
  node: SkillNodeType;
  canActivate: boolean;
  onClick: (nodeId: string) => void;
}

const getThemeIcon = (theme: string, size = 16) => {
  switch (theme) {
    case 'faith':
      return <Church size={size} />;
    case 'love':
      return <Heart size={size} />;
    case 'prayer':
      return <MessageCircle size={size} />;
    case 'peace':
      return <Leaf size={size} />;
    case 'servant':
      return <Users size={size} />;
    default:
      return <ChevronRight size={size} />;
  }
};

const SkillNode: React.FC<SkillNodeProps> = ({ node, canActivate, onClick }) => {
  const getStatusClass = () => {
    if (node.completed) {
      return `bg-${node.theme} border-${node.theme} text-white`;
    }
    if (node.inProgress) {
      return `bg-${node.theme}-light border-${node.theme} text-${node.theme}-dark`;
    }
    if (canActivate) {
      return `bg-white border-${node.theme} text-${node.theme}-dark hover:bg-${node.theme}-light transition-colors duration-200`;
    }
    return "bg-gray-100 border-gray-300 text-gray-400";
  };

  const getNodeSizeClass = () => {
    // The last node in each branch (position 7) is larger
    return node.position === 7 ? "w-16 h-16" : "w-12 h-12";
  };

  const getStatusIcon = () => {
    if (node.completed) {
      return <Check className="absolute bottom-0 right-0 bg-green-500 rounded-full p-0.5 text-white" size={15} />;
    }
    if (!canActivate && !node.inProgress) {
      return <Lock className="absolute bottom-0 right-0 bg-gray-400 rounded-full p-0.5 text-white" size={15} />;
    }
    return null;
  };

  return (
    <div className="node-container relative inline-flex flex-col items-center">
      <button
        onClick={() => onClick(node.id)}
        disabled={!canActivate && !node.inProgress && !node.completed}
        className={cn(
          "relative rounded-full border-2 flex items-center justify-center cursor-pointer transition-all duration-300",
          getNodeSizeClass(),
          getStatusClass(),
          // Removido o efeito de piscada: node.completed && "animate-pulse-glow",
          node.position === 7 && node.completed && "ring-4 ring-completed/50"
        )}
        aria-label={node.label}
      >
        {/* Aplicar cor dourada aos ícones completados */}
        <div className={node.completed ? "text-completed" : ""}>
          {getThemeIcon(node.theme, node.position === 7 ? 24 : 20)}
        </div>
        {getStatusIcon()}
      </button>
      
      {/* Progress indicator for in-progress nodes */}
      {node.inProgress && (
        <div className="mt-1 w-full bg-gray-200 rounded-full h-1.5">
          <div 
            className={`bg-${node.theme} h-1.5 rounded-full`} 
            style={{ width: `${(node.versesShared / node.versesNeeded) * 100}%` }}
          ></div>
        </div>
      )}
      
      {/* Tooltip */}
      <div className="node-tooltip">
        <strong>{node.label}</strong>
        <br />
        {node.description}
        {node.inProgress && (
          <span className="block font-bold text-xs mt-1">
            Progresso: {node.versesShared}/{node.versesNeeded}
          </span>
        )}
      </div>
    </div>
  );
};

export default SkillNode;
