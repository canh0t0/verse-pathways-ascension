
import React from 'react';
import { SkillNode as SkillNodeType, ThemeInfo } from '@/types/skill-tree';
import SkillNode from './SkillNode';
import ThemeSeal from './ThemeSeal';
import { 
  Church, 
  Heart, 
  MessageCircle, 
  Leaf, 
  Users 
} from "lucide-react";

interface ThemeBranchProps {
  theme: ThemeInfo;
  nodes: SkillNodeType[];
  onNodeClick: (nodeId: string) => void;
}

const getThemeIcon = (themeId: string, size = 24, isCompleted = false) => {
  const iconClass = isCompleted ? "text-completed-dark" : "";
  
  switch (themeId) {
    case 'faith':
      return <Church size={size} className={iconClass} />;
    case 'love':
      return <Heart size={size} className={iconClass} />;
    case 'prayer':
      return <MessageCircle size={size} className={iconClass} />;
    case 'peace':
      return <Leaf size={size} className={iconClass} />;
    case 'servant':
      return <Users size={size} className={iconClass} />;
    default:
      return null;
  }
};

const ThemeBranch: React.FC<ThemeBranchProps> = ({ theme, nodes, onNodeClick }) => {
  // Sort nodes by position
  const sortedNodes = [...nodes].sort((a, b) => a.position - b.position);
  
  const canNodeBeActivated = (node: SkillNodeType): boolean => {
    // First node is always activatable
    if (node.position === 1) return true;
    
    // Check if previous node is completed
    const previousNode = sortedNodes.find(n => n.position === node.position - 1);
    return previousNode ? previousNode.completed : false;
  };

  return (
    <div className="theme-branch mb-12 relative">
      <div className="flex items-center mb-4">
        <div className={cn(
          `p-2 rounded-full ${theme.completed ? "bg-completed-dark/10" : `bg-${theme.id}-light`} ${theme.completed ? "text-completed-dark" : `text-${theme.id}`} mr-3`,
          theme.completed && "ring-2 ring-completed-dark/30"
        )}>
          {getThemeIcon(theme.id, 24, theme.completed)}
        </div>
        <h3 className="text-xl font-serif font-semibold">{theme.name}</h3>
        {theme.completed && <ThemeSeal theme={theme.id} className="ml-2" />}
      </div>
      
      <div className="theme-nodes-container relative">
        {/* Connection lines between nodes */}
        <svg className="absolute top-6 left-6 w-[calc(100%-48px)] h-0.5 z-0 pointer-events-none">
          <line 
            x1="0" 
            y1="0" 
            x2="100%" 
            y2="0" 
            className={`skill-connection ${theme.completed ? `stroke-completed-dark/30` : `stroke-${theme.id}/30`}`}
            strokeWidth="2"
          />
        </svg>
        
        {/* Nodes */}
        <div className="flex justify-between relative z-10">
          {sortedNodes.map((node) => (
            <SkillNode
              key={node.id}
              node={node}
              canActivate={canNodeBeActivated(node) && !node.completed}
              onClick={onNodeClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeBranch;
