// Mental Health Knowledge Base for RAG
// This serves as the retrieval source for the AI assistant

export interface KnowledgeEntry {
  id: string;
  category: string;
  topic: string;
  content: string;
  keywords: string[];
}

export const mentalHealthKnowledge: KnowledgeEntry[] = [
  {
    id: "anxiety-1",
    category: "Anxiety",
    topic: "Understanding Anxiety",
    content: `Anxiety is a natural response to stress. It's your body's way of alerting you to potential threats. While occasional anxiety is normal, persistent anxiety that interferes with daily life may indicate an anxiety disorder. Common symptoms include: excessive worry, restlessness, difficulty concentrating, sleep problems, and physical symptoms like rapid heartbeat. Remember: anxiety is treatable, and you're not alone.`,
    keywords: ["anxiety", "worry", "stress", "nervous", "panic", "fear"]
  },
  {
    id: "anxiety-2",
    category: "Anxiety",
    topic: "Coping with Anxiety",
    content: `Effective strategies for managing anxiety include: 1) Deep breathing exercises - try the 4-7-8 technique (inhale 4 seconds, hold 7, exhale 8). 2) Grounding techniques - name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste. 3) Progressive muscle relaxation - tense and release each muscle group. 4) Regular exercise - even a 10-minute walk helps. 5) Limiting caffeine and alcohol. 6) Maintaining a consistent sleep schedule.`,
    keywords: ["coping", "breathing", "relaxation", "grounding", "techniques", "calm"]
  },
  {
    id: "depression-1",
    category: "Depression",
    topic: "Understanding Depression",
    content: `Depression is more than just feeling sad. It's a medical condition that affects how you think, feel, and handle daily activities. Signs include: persistent sad or empty mood, loss of interest in activities you once enjoyed, changes in appetite or weight, sleep difficulties, fatigue, feelings of worthlessness or guilt, difficulty thinking or concentrating, and thoughts of death or suicide. Depression is highly treatable with therapy, medication, or both.`,
    keywords: ["depression", "sad", "hopeless", "empty", "tired", "exhausted", "worthless"]
  },
  {
    id: "depression-2",
    category: "Depression",
    topic: "Self-Care for Depression",
    content: `While professional help is important, self-care can support your recovery: 1) Start small - even getting out of bed is an achievement. 2) Maintain routines - structure provides stability. 3) Connect with others - isolation worsens depression. 4) Move your body - gentle exercise releases mood-boosting chemicals. 5) Practice self-compassion - be kind to yourself. 6) Limit negative self-talk - challenge harmful thoughts. 7) Set realistic goals - celebrate small wins.`,
    keywords: ["self-care", "recovery", "routine", "exercise", "connection", "goals"]
  },
  {
    id: "stress-1",
    category: "Stress",
    topic: "Understanding Stress",
    content: `Stress is your body's reaction to demands or challenges. Short-term stress can be motivating, but chronic stress takes a toll on your physical and mental health. Common stressors include work pressure, relationship issues, financial concerns, health problems, and major life changes. Signs of stress overload: headaches, muscle tension, fatigue, sleep problems, irritability, and difficulty concentrating.`,
    keywords: ["stress", "pressure", "overwhelmed", "tension", "overload", "burnout"]
  },
  {
    id: "stress-2",
    category: "Stress",
    topic: "Stress Management Techniques",
    content: `Effective stress management includes: 1) Time management - prioritize tasks and set boundaries. 2) Mindfulness meditation - even 5 minutes daily helps. 3) Physical activity - regular exercise is a powerful stress reliever. 4) Social support - talk to friends, family, or a counselor. 5) Healthy habits - balanced diet, adequate sleep, limited alcohol. 6) Relaxation techniques - deep breathing, yoga, or progressive muscle relaxation. 7) Taking breaks - regular rest prevents burnout.`,
    keywords: ["management", "mindfulness", "meditation", "balance", "relaxation", "breaks"]
  },
  {
    id: "sleep-1",
    category: "Sleep",
    topic: "Sleep and Mental Health",
    content: `Sleep and mental health are deeply connected. Poor sleep can contribute to anxiety and depression, while mental health issues can disrupt sleep. Adults need 7-9 hours of quality sleep. Signs of sleep problems: difficulty falling asleep, waking frequently, feeling unrefreshed, daytime fatigue, irritability, and difficulty concentrating. Good sleep is foundational to mental wellness.`,
    keywords: ["sleep", "insomnia", "tired", "rest", "fatigue", "night"]
  },
  {
    id: "sleep-2",
    category: "Sleep",
    topic: "Sleep Hygiene Tips",
    content: `Improve your sleep with these practices: 1) Consistent schedule - go to bed and wake up at the same time daily. 2) Create a restful environment - dark, quiet, cool room. 3) Limit screen time - avoid devices 1 hour before bed. 4) Avoid caffeine after noon. 5) Regular exercise - but not close to bedtime. 6) Relaxing bedtime routine - reading, gentle stretching, or a warm bath. 7) Use bed only for sleep - not work or watching TV. 8) If you can't sleep, get up and do something calming.`,
    keywords: ["hygiene", "routine", "bedtime", "screen", "schedule", "rest"]
  },
  {
    id: "mindfulness-1",
    category: "Mindfulness",
    topic: "Introduction to Mindfulness",
    content: `Mindfulness is the practice of being fully present in the moment without judgment. It helps reduce stress, anxiety, and depression while improving focus and emotional regulation. You don't need special equipment or lots of time - even brief moments of mindfulness throughout your day can make a difference. The goal isn't to empty your mind, but to observe your thoughts and feelings without getting caught up in them.`,
    keywords: ["mindfulness", "present", "moment", "awareness", "meditation", "focus"]
  },
  {
    id: "mindfulness-2",
    category: "Mindfulness",
    topic: "Simple Mindfulness Exercises",
    content: `Try these simple mindfulness practices: 1) Mindful breathing - focus on your breath for 2 minutes. 2) Body scan - notice sensations from head to toe. 3) Mindful eating - savor each bite without distractions. 4) Walking meditation - focus on each step. 5) Sensory awareness - pause and notice what you see, hear, smell. 6) Loving-kindness meditation - send positive wishes to yourself and others. 7) Mindful listening - give full attention in conversations.`,
    keywords: ["exercises", "breathing", "body scan", "walking", "practice", "meditation"]
  },
  {
    id: "crisis-1",
    category: "Crisis Support",
    topic: "When to Seek Help",
    content: `Please seek immediate help if you're experiencing: thoughts of suicide or self-harm, feeling like a burden to others, overwhelming hopelessness, intense emotional pain, or crisis situations. You can reach: National Suicide Prevention Lifeline: 988 (US), Crisis Text Line: Text HOME to 741741, International Association for Suicide Prevention: https://www.iasp.info/resources/Crisis_Centres/. You matter, and help is available 24/7.`,
    keywords: ["crisis", "emergency", "suicide", "help", "hotline", "urgent", "harm"]
  },
  {
    id: "self-esteem-1",
    category: "Self-Esteem",
    topic: "Building Self-Esteem",
    content: `Self-esteem is how you value and perceive yourself. Low self-esteem can affect every area of life. Building healthy self-esteem involves: 1) Recognizing negative self-talk and challenging it. 2) Practicing self-compassion - treat yourself as you would a friend. 3) Celebrating your achievements, no matter how small. 4) Setting healthy boundaries. 5) Surrounding yourself with supportive people. 6) Focusing on what you can control. 7) Accepting that nobody is perfect.`,
    keywords: ["self-esteem", "confidence", "self-worth", "value", "negative thoughts", "self-talk"]
  },
  {
    id: "relationships-1",
    category: "Relationships",
    topic: "Healthy Relationships",
    content: `Healthy relationships are built on: trust, respect, communication, and mutual support. Signs of a healthy relationship: feeling safe to express yourself, respecting boundaries, supporting each other's goals, resolving conflicts constructively, and maintaining individual identities. If you're in a relationship that feels controlling, abusive, or consistently drains you, consider seeking support from a counselor or trusted person.`,
    keywords: ["relationships", "communication", "boundaries", "trust", "respect", "support"]
  },
  {
    id: "grief-1",
    category: "Grief",
    topic: "Understanding Grief",
    content: `Grief is a natural response to loss - whether it's the death of a loved one, end of a relationship, job loss, or other significant changes. There's no "right" way to grieve, and everyone's timeline is different. Common experiences include: shock, denial, anger, sadness, guilt, and eventually acceptance. Be patient with yourself, and know that healing isn't linear. It's okay to seek support during this difficult time.`,
    keywords: ["grief", "loss", "death", "mourning", "bereavement", "healing"]
  }
];

// Simple keyword-based retrieval for RAG
export function retrieveRelevantKnowledge(query: string, topK: number = 3): KnowledgeEntry[] {
  const queryLower = query.toLowerCase();
  const words = queryLower.split(/\s+/);
  
  const scored = mentalHealthKnowledge.map(entry => {
    let score = 0;
    
    // Check keywords
    for (const keyword of entry.keywords) {
      if (queryLower.includes(keyword)) {
        score += 3;
      }
    }
    
    // Check topic
    if (entry.topic.toLowerCase().split(/\s+/).some(word => words.includes(word))) {
      score += 2;
    }
    
    // Check category
    if (queryLower.includes(entry.category.toLowerCase())) {
      score += 2;
    }
    
    // Check content for matching words
    const contentWords = entry.content.toLowerCase().split(/\s+/);
    for (const word of words) {
      if (word.length > 3 && contentWords.includes(word)) {
        score += 1;
      }
    }
    
    return { entry, score };
  });
  
  // Sort by score and return top K
  return scored
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map(item => item.entry);
}

export function formatKnowledgeForContext(entries: KnowledgeEntry[]): string {
  if (entries.length === 0) {
    return "";
  }
  
  return entries.map(entry => 
    `[${entry.category} - ${entry.topic}]\n${entry.content}`
  ).join("\n\n---\n\n");
}
