import { SkillTreeData, ThemeType } from "@/types/skill-tree";

export const skillTreeData: SkillTreeData = {
  masterSealEarned: false,
  themes: [
    {
      id: 'faith',
      name: 'Faith',
      description: 'Share scriptures about faith and trust in God',
      icon: 'church',
      completed: false,
      totalNodes: 7,
      completedNodes: 3,
    },
    {
      id: 'love',
      name: 'Love',
      description: 'Share scriptures about God\'s love and loving others',
      icon: 'heart',
      completed: false,
      totalNodes: 7,
      completedNodes: 2,
    },
    {
      id: 'prayer',
      name: 'Prayer',
      description: 'Share scriptures about prayer and communion with God',
      icon: 'message-circle',
      completed: false,
      totalNodes: 7,
      completedNodes: 0,
    },
    {
      id: 'peace',
      name: 'Peace',
      description: 'Share scriptures about peace and tranquility in Christ',
      icon: 'leaf',
      completed: true,
      totalNodes: 7,
      completedNodes: 7,
    },
    {
      id: 'servant',
      name: 'Servant',
      description: 'Share scriptures about serving others and humility',
      icon: 'users',
      completed: false,
      totalNodes: 7,
      completedNodes: 4,
    },
  ],
  nodes: [
    // Faith nodes
    {
      id: 'faith-1',
      label: 'Belief Seeker',
      description: 'Share 7 verses about the foundations of faith',
      theme: 'faith',
      position: 1,
      completed: true,
      inProgress: false,
      versesNeeded: 7,
      versesShared: 7,
    },
    {
      id: 'faith-2',
      label: 'Trust Builder',
      description: 'Share 7 verses about trusting God in difficult times',
      theme: 'faith',
      position: 2,
      completed: true,
      inProgress: false,
      versesNeeded: 7,
      versesShared: 7,
    },
    {
      id: 'faith-3',
      label: 'Faith Walker',
      description: 'Share 7 verses about walking by faith, not by sight',
      theme: 'faith',
      position: 3,
      completed: true,
      inProgress: false,
      versesNeeded: 7,
      versesShared: 7,
    },
    {
      id: 'faith-4',
      label: 'Steadfast Believer',
      description: 'Share 7 verses about remaining steadfast in faith',
      theme: 'faith',
      position: 4,
      completed: false,
      inProgress: true,
      versesNeeded: 7,
      versesShared: 3,
    },
    {
      id: 'faith-5',
      label: 'Promise Claimer',
      description: 'Share 7 verses about God\'s promises',
      theme: 'faith',
      position: 5,
      completed: false,
      inProgress: false,
      versesNeeded: 7,
      versesShared: 0,
    },
    {
      id: 'faith-6',
      label: 'Faith Champion',
      description: 'Share 7 verses about faith victories',
      theme: 'faith',
      position: 6,
      completed: false,
      inProgress: false,
      versesNeeded: 7,
      versesShared: 0,
    },
    {
      id: 'faith-7',
      label: 'Faith Master',
      description: 'Share 7 verses about mature faith',
      theme: 'faith',
      position: 7,
      completed: false,
      inProgress: false,
      versesNeeded: 7,
      versesShared: 0,
    },
    
    // Love nodes
    {
      id: 'love-1',
      label: 'Love Novice',
      description: 'Share 7 verses about God\'s love for us',
      theme: 'love',
      position: 1,
      completed: true,
      inProgress: false,
      versesNeeded: 7,
      versesShared: 7,
    },
    {
      id: 'love-2',
      label: 'Love Apprentice',
      description: 'Share 7 verses about loving your neighbor',
      theme: 'love',
      position: 2,
      completed: true,
      inProgress: false,
      versesNeeded: 7,
      versesShared: 7,
    },
    {
      id: 'love-3',
      label: 'Love in Action',
      description: 'Share 7 verses about demonstrating love',
      theme: 'love',
      position: 3,
      completed: false,
      inProgress: true,
      versesNeeded: 7,
      versesShared: 4,
    },
    {
      id: 'love-4',
      label: 'Love Overcomer',
      description: 'Share 7 verses about love overcoming obstacles',
      theme: 'love',
      position: 4,
      completed: false,
      inProgress: false,
      versesNeeded: 7,
      versesShared: 0,
    },
    {
      id: 'love-5',
      label: 'Sacrificial Love',
      description: 'Share 7 verses about sacrificial love',
      theme: 'love',
      position: 5,
      completed: false,
      inProgress: false,
      versesNeeded: 7,
      versesShared: 0,
    },
    {
      id: 'love-6',
      label: 'Love Exemplar',
      description: 'Share 7 verses about being an example of love',
      theme: 'love',
      position: 6,
      completed: false,
      inProgress: false,
      versesNeeded: 7,
      versesShared: 0,
    },
    {
      id: 'love-7',
      label: 'Love Master',
      description: 'Share 7 verses about perfect love',
      theme: 'love',
      position: 7,
      completed: false,
      inProgress: false,
      versesNeeded: 7,
      versesShared: 0,
    },
    
    // Prayer nodes
    {
      id: 'prayer-1',
      label: 'Prayer Beginner',
      description: 'Share 7 verses about how to pray',
      theme: 'prayer',
      position: 1,
      completed: false,
      inProgress: true,
      versesNeeded: 7,
      versesShared: 2,
    },
    {
      id: 'prayer-2',
      label: 'Prayer Student',
      description: 'Share 7 verses about persistent prayer',
      theme: 'prayer',
      position: 2,
      completed: false,
      inProgress: false,
      versesNeeded: 7,
      versesShared: 0,
    },
    {
      id: 'prayer-3',
      label: 'Intercessor',
      description: 'Share 7 verses about praying for others',
      theme: 'prayer',
      position: 3,
      completed: false,
      inProgress: false,
      versesNeeded: 7,
      versesShared: 0,
    },
    {
      id: 'prayer-4',
      label: 'Prayer Warrior',
      description: 'Share 7 verses about spiritual warfare prayer',
      theme: 'prayer',
      position: 4,
      completed: false,
      inProgress: false,
      versesNeeded: 7,
      versesShared: 0,
    },
    {
      id: 'prayer-5',
      label: 'Dedicated Prayer',
      description: 'Share 7 verses about dedicated prayer life',
      theme: 'prayer',
      position: 5,
      completed: false,
      inProgress: false,
      versesNeeded: 7,
      versesShared: 0,
    },
    {
      id: 'prayer-6',
      label: 'Prayer Leader',
      description: 'Share 7 verses about leading others in prayer',
      theme: 'prayer',
      position: 6,
      completed: false,
      inProgress: false,
      versesNeeded: 7,
      versesShared: 0,
    },
    {
      id: 'prayer-7',
      label: 'Prayer Master',
      description: 'Share 7 verses about powerful, effective prayer',
      theme: 'prayer',
      position: 7,
      completed: false,
      inProgress: false,
      versesNeeded: 7,
      versesShared: 0,
    },
    
    // Peace nodes - todos completos
    {
      id: 'peace-1',
      label: 'Peace Seeker',
      description: 'Share 7 verses about finding peace in God',
      theme: 'peace',
      position: 1,
      completed: true,
      inProgress: false,
      versesNeeded: 7,
      versesShared: 7,
    },
    {
      id: 'peace-2',
      label: 'Peace Learner',
      description: 'Share 7 verses about peace in difficult times',
      theme: 'peace',
      position: 2,
      completed: true,
      inProgress: false,
      versesNeeded: 7,
      versesShared: 7,
    },
    {
      id: 'peace-3',
      label: 'Peacemaker',
      description: 'Share 7 verses about making peace with others',
      theme: 'peace',
      position: 3,
      completed: true,
      inProgress: false,
      versesNeeded: 7,
      versesShared: 7,
    },
    {
      id: 'peace-4',
      label: 'Peace Cultivator',
      description: 'Share 7 verses about cultivating peace',
      theme: 'peace',
      position: 4,
      completed: true,
      inProgress: false,
      versesNeeded: 7,
      versesShared: 7,
    },
    {
      id: 'peace-5',
      label: 'Peace Practitioner',
      description: 'Share 7 verses about practicing peace daily',
      theme: 'peace',
      position: 5,
      completed: true,
      inProgress: false,
      versesNeeded: 7,
      versesShared: 7,
    },
    {
      id: 'peace-6',
      label: 'Peace Ambassador',
      description: 'Share 7 verses about representing peace',
      theme: 'peace',
      position: 6,
      completed: true,
      inProgress: false,
      versesNeeded: 7,
      versesShared: 7,
    },
    {
      id: 'peace-7',
      label: 'Peace Master',
      description: 'Share 7 verses about perfect peace',
      theme: 'peace',
      position: 7,
      completed: true,
      inProgress: false,
      versesNeeded: 7,
      versesShared: 7,
    },
    
    // Servant nodes
    {
      id: 'servant-1',
      label: 'Service Beginner',
      description: 'Share 7 verses about serving others',
      theme: 'servant',
      position: 1,
      completed: true,
      inProgress: false,
      versesNeeded: 7,
      versesShared: 7,
    },
    {
      id: 'servant-2',
      label: 'Humble Helper',
      description: 'Share 7 verses about humility in service',
      theme: 'servant',
      position: 2,
      completed: true,
      inProgress: false,
      versesNeeded: 7,
      versesShared: 7,
    },
    {
      id: 'servant-3',
      label: 'Dedicated Server',
      description: 'Share 7 verses about dedicated service',
      theme: 'servant',
      position: 3,
      completed: true,
      inProgress: false,
      versesNeeded: 7,
      versesShared: 7,
    },
    {
      id: 'servant-4',
      label: 'Servant Leader',
      description: 'Share 7 verses about servant leadership',
      theme: 'servant',
      position: 4,
      completed: true,
      inProgress: false,
      versesNeeded: 7,
      versesShared: 7,
    },
    {
      id: 'servant-5',
      label: 'Sacrificial Servant',
      description: 'Share 7 verses about sacrificial service',
      theme: 'servant',
      position: 5,
      completed: false,
      inProgress: true,
      versesNeeded: 7,
      versesShared: 5,
    },
    {
      id: 'servant-6',
      label: 'Service Mentor',
      description: 'Share 7 verses about teaching others to serve',
      theme: 'servant',
      position: 6,
      completed: false,
      inProgress: false,
      versesNeeded: 7,
      versesShared: 0,
    },
    {
      id: 'servant-7',
      label: 'Servant Master',
      description: 'Share 7 verses about lifelong service',
      theme: 'servant',
      position: 7,
      completed: false,
      inProgress: false,
      versesNeeded: 7,
      versesShared: 0,
    },
  ]
};
