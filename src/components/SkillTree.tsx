
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
        title: "Conquista Completa",
        description: `Você já completou: ${node.label}`,
      });
      return;
    }
    
    if (node.inProgress) {
      toast({
        title: "Em Progresso",
        description: `Compartilhe mais ${node.versesNeeded - node.versesShared} versículos para completar essa conquista.`,
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
        title: "Conquista Iniciada",
        description: `Você começou a trabalhar em: ${node.label}`,
      });
    }
  };

  return (
    <div className="skill-tree-container mx-auto p-6 max-w-5xl">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-serif font-bold mb-2">Caminhos de Versículos</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Compartilhe versículos das escrituras para desbloquear conquistas e ganhar selos para cada tema.
          Complete todos os cinco ramos para ganhar o selo supremo de Mestre da Árvore.
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
              Complete todos os cinco ramos para ganhar o selo de Mestre da Árvore e 
              completar o desafio desta temporada!
            </p>
          </div>
          
          <div className="hidden md:block">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-serif font-semibold mb-4">Progresso da Temporada</h3>
              
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
                  <span className="font-medium">Progresso Total:</span>
                  <span className="text-gray-600">
                    {treeData.themes.reduce((acc, theme) => acc + theme.completedNodes, 0)}/
                    {treeData.themes.reduce((acc, theme) => acc + theme.totalNodes, 0)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-serif font-semibold mb-4">Como Funciona</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Compartilhe 7 versículos para cada nó para completá-lo</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Complete todos os 7 nós em um ramo para ganhar o selo daquele tema</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Complete todos os 5 ramos para ganhar o selo de Mestre da Árvore</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Cada temporada traz novos desafios e recompensas</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillTree;
