
import React, { useState } from 'react';
import { skillTreeData } from '@/data/skill-tree-data';
import ThemeBranch from './ThemeBranch';
import MasterSeal from './MasterSeal';
import { useToast } from '@/components/ui/use-toast';
import { SkillNode } from '@/types/skill-tree';

const SkillTree: React.FC = () => {
  const [treeData, setTreeData] = useState(skillTreeData);
  const { toast } = useToast();

  const handleNodeClick = (nodeId: string) => {
    const node = treeData.nodes.find(n => n.id === nodeId);
    
    if (!node) return;
    
    if (node.completed) {
      toast({
        title: "Achievement Complete",
        description: `You've already completed: ${node.label}`,
      });
      return;
    }
    
    if (node.inProgress) {
      toast({
        title: "In Progress",
        description: `Share ${node.versesNeeded - node.versesShared} more verses to complete this achievement.`,
      });
      return;
    }
    
    // Check if this node can be activated (previous node completed)
    const themeBranchNodes = treeData.nodes
      .filter(n => n.theme === node.theme)
      .sort((a, b) => a.position - b.position);
    
    const previousNodeIndex = node.position - 2; // -1 for zero-indexing, -1 for previous
    
    // First node or previous node is completed
    const canActivate = node.position === 1 || 
      (previousNodeIndex >= 0 && themeBranchNodes[previousNodeIndex].completed);
    
    if (canActivate) {
      // Start this node (mark as in progress)
      const updatedNodes = treeData.nodes.map(n => 
        n.id === nodeId ? { ...n, inProgress: true, versesShared: 1 } : n
      );
      
      setTreeData({
        ...treeData,
        nodes: updatedNodes
      });
      
      toast({
        title: "Achievement Started",
        description: `You've started working on: ${node.label}`,
      });
    }
  };

  return (
    <div className="skill-tree-container mx-auto p-6 max-w-5xl">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-serif font-bold mb-2">Verse Pathways</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Share scripture verses to unlock achievements and earn seals for each theme.
          Complete all five branches to earn the ultimate Tree Master seal.
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          {treeData.themes.map((theme) => (
            <ThemeBranch
              key={theme.id}
              theme={theme}
              nodes={treeData.nodes.filter((node) => node.theme === theme.id)}
              onNodeClick={handleNodeClick}
            />
          ))}
        </div>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
            <MasterSeal earned={treeData.masterSealEarned} />
            <p className="mt-4 text-center text-sm text-gray-600">
              Complete all five branches to earn the Tree Master seal and 
              complete this season's challenge!
            </p>
          </div>
          
          <div className="hidden md:block">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-serif font-semibold mb-4">Season Progress</h3>
              
              <div className="space-y-4">
                {treeData.themes.map((theme) => (
                  <div key={theme.id} className="flex items-center justify-between">
                    <span className={`text-${theme.id} font-medium`}>{theme.name}</span>
                    <span className="text-gray-600">{theme.completedNodes}/{theme.totalNodes}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Total Progress:</span>
                  <span className="text-gray-600">
                    {treeData.themes.reduce((acc, theme) => acc + theme.completedNodes, 0)}/
                    {treeData.themes.reduce((acc, theme) => acc + theme.totalNodes, 0)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-serif font-semibold mb-4">How It Works</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Share 7 verses for each node to complete it</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Complete all 7 nodes in a branch to earn that theme's seal</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Complete all 5 branches to earn the Tree Master seal</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Each season brings new challenges and rewards</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillTree;
