
export type ThemeType = 'faith' | 'love' | 'prayer' | 'peace' | 'servant';

export interface SkillNode {
  id: string;
  label: string;
  description: string;
  theme: ThemeType;
  position: number; // Position from 1-7 within its theme
  completed: boolean;
  inProgress: boolean; // Has some progress but not completed
  versesNeeded: number; // Total verses needed (always 7)
  versesShared: number; // Current progress
}

export interface ThemeInfo {
  id: ThemeType;
  name: string;
  description: string;
  icon: string;
  completed: boolean;
  totalNodes: number;
  completedNodes: number;
}

export interface SkillTreeData {
  themes: ThemeInfo[];
  nodes: SkillNode[];
  masterSealEarned: boolean;
}
