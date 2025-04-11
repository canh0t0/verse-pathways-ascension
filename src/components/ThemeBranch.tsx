
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

const getThemeIcon = (themeId: string, size = 24) => {
  switch (themeId) {
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
        <div className={`p-2 rounded-full bg-${theme.id}-light text-${theme.id} mr-3`}>
          {getThemeIcon(theme.id)}
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
            className={`skill-connection stroke-${theme.id}/30`}
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
