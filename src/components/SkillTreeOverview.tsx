
import { ThemeInfo } from "@/types/skill-tree";
import ThemeSeal from "./ThemeSeal";
import { 
  Church, 
  Heart, 
  MessageCircle, 
  Leaf, 
  Users 
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface SkillTreeOverviewProps {
  themes: ThemeInfo[];
}

const getThemeIcon = (themeId: string, size = 20) => {
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

const SkillTreeOverview: React.FC<SkillTreeOverviewProps> = ({ themes }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-serif font-semibold mb-4">Season Progress</h3>
      
      <div className="space-y-4">
        {themes.map((theme) => (
          <div key={theme.id} className="flex items-center">
            <div className={`shrink-0 p-1.5 rounded-full bg-${theme.id}-light text-${theme.id} mr-3`}>
              {getThemeIcon(theme.id)}
            </div>
            
            <div className="flex-grow mr-3">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-sm">{theme.name}</span>
                <span className="text-xs text-gray-500">
                  {theme.completedNodes}/{theme.totalNodes}
                </span>
              </div>
              <Progress 
                value={(theme.completedNodes / theme.totalNodes) * 100} 
                className={`h-2 bg-${theme.id}-light`} 
                indicatorClassName={`bg-${theme.id}`}
              />
            </div>
            
            {theme.completed && <ThemeSeal theme={theme.id} size="sm" />}
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <span className="font-medium">Total Progress:</span>
          <span className="text-sm text-gray-500">
            {themes.reduce((acc, theme) => acc + theme.completedNodes, 0)}/
            {themes.reduce((acc, theme) => acc + theme.totalNodes, 0)}
          </span>
        </div>
        <Progress 
          value={(themes.reduce((acc, theme) => acc + theme.completedNodes, 0) / 
                 themes.reduce((acc, theme) => acc + theme.totalNodes, 0)) * 100}
          className="h-2 mt-1 bg-gray-100" 
        />
      </div>
    </div>
  );
};

export default SkillTreeOverview;
