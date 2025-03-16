
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Progress } from '@/components/ui/progress';
import { GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Book } from 'lucide-react';
import { Clock } from 'lucide-react';

// Mock progress data
const userProgress = {
  level1: 75,
  level2: 30,
  level3: 0,
  totalProgress: 35,
  currentWeek: 2,
  currentBook: "Atomic Habits",
  lastActivity: "2 hours ago",
  weekProgress: {
    "Super Attractor": 100,
    "Atomic Habits": 40,
    "The Power of Now": 0,
    "Fall and Rise": 0,
    "Thinking, Fast and Slow": 0,
    "The Psychology of Money": 0,
    "You Are a Badass": 0,
    "Losing Earth": 0,
    "The Four Agreements": 0,
    "Sapiens": 0,
    "A Promised Land": 0,
    "The Innovator's Dilemma": 0
  }
};

const PaidCourseDetail = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Add top padding to prevent content from overlapping with the fixed header */}
      <div className="pt-20">
        {/* Progress Banner */}
        <div className="bg-primary/10 py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold mb-1">My English Learning Journey</h1>
                <p className="text-muted-foreground">Continue where you left off</p>
              </div>
              <Button className="mt-4 md:mt-0">
                Continue Learning
              </Button>
            </div>
            
            <div className="glass-card p-6 mb-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">Overall Progress</p>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{userProgress.totalProgress}% Complete</span>
                    <span className="text-sm text-primary font-medium">Complete Level 1</span>
                  </div>
                  <Progress value={userProgress.totalProgress} className="h-2" />
                </div>
                
                <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Book className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Current Book</p>
                      <p className="font-medium">{userProgress.currentBook}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Last Activity</p>
                      <p className="font-medium">{userProgress.lastActivity}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          {/* Course Syllabus with Progress */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Course Progress</h2>
            <p className="text-muted-foreground">Track your journey through each level and book</p>
          </div>
          
          <CourseLevelsWithProgress weekProgress={userProgress.weekProgress} />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

// New component for course levels with progress
const CourseLevelsWithProgress = ({ weekProgress }: { weekProgress: Record<string, number> }) => {
  // Reusing the same data structure from CourseLevels.tsx
  const levels = [
    {
      title: "Foundations of Everyday English",
      duration: "4 Weeks, 4 Books",
      totalTime: "40 hours",
      description: "For learners comfortable with basic English who want to build fluency. Focus on daily vocabulary, common phrases, and understanding simple ideas.",
      books: [
        {
          title: "Super Attractor",
          weekTime: "10 hours",
          coverImage: "photo-1649972904349-6e44c42644a7",
          content: [
            "Listen to the summary and podcast.",
            "Focus on self-improvement and positive mindset vocabulary.",
            "Identify and practice 10 key phrases."
          ]
        },
        {
          title: "Atomic Habits",
          weekTime: "10 hours",
          coverImage: "photo-1486312338219-ce68d2c6f44d",
          content: [
            "Study action-based language and goal-setting terms.",
            "Listen to the podcast and practice pronunciation.",
            "Comprehension task: Answer multiple-choice questions on key ideas."
          ]
        },
        {
          title: "The Power of Now",
          weekTime: "10 hours",
          coverImage: "photo-1487058792275-0ad4aaf24ca7",
          content: [
            "Improve comprehension of abstract ideas and mindfulness.",
            "Identify key idioms and phrases in the summary."
          ]
        },
        {
          title: "Fall and Rise",
          weekTime: "10 hours",
          coverImage: "photo-1498050108023-c5249f4df085",
          content: [
            "Strengthen past tense and storytelling skills.",
            "Analyze historical events and their impact."
          ]
        }
      ],
      color: "from-blue-500/10 to-blue-500/5"
    },
    {
      title: "Deepening Understanding and Expression",
      duration: "4 Weeks, 4 Books",
      totalTime: "48 hours",
      description: "For learners who can understand longer texts and want to improve critical thinking, argumentation, and professional vocabulary.",
      books: [
        {
          title: "Thinking, Fast and Slow",
          weekTime: "12 hours",
          coverImage: "photo-1581091226825-a6a2a5aee158",
          content: [
            "Read summary and analyze complex sentence structures.",
            "Extract key idioms and phrasal verbs."
          ]
        },
        {
          title: "The Psychology of Money",
          weekTime: "12 hours",
          coverImage: "photo-1461749280684-dccba630e2f6",
          content: [
            "Learn finance-related expressions and persuasive language.",
            "Listen to the podcast and write a one-paragraph reflection."
          ]
        },
        {
          title: "You Are a Badass",
          weekTime: "12 hours",
          coverImage: "photo-1488590528505-98d2b5aba04b",
          content: [
            "Master informal English, self-motivation phrases, and slang.",
            "Practice paraphrasing one key idea from the book."
          ]
        },
        {
          title: "Losing Earth",
          weekTime: "12 hours",
          coverImage: "photo-1518770660439-4636190af475",
          content: [
            "Improve comprehension of climate change and historical narratives.",
            "Identify connectors and transition words."
          ]
        }
      ],
      color: "from-indigo-500/10 to-indigo-500/5"
    },
    {
      title: "Advanced Communication and Critical Thinking",
      duration: "4 Weeks, 4 Books",
      totalTime: "56 hours",
      description: "For learners who are comfortable reading challenging books and want to refine their professional and academic English.",
      books: [
        {
          title: "The Four Agreements",
          weekTime: "14 hours",
          coverImage: "photo-1531297484001-80022131f5a1",
          content: [
            "Read and analyze philosophical language and ethics-related terms.",
            "Identify advanced sentence structures and transitions."
          ]
        },
        {
          title: "Sapiens",
          weekTime: "14 hours",
          coverImage: "photo-1488590528505-98d2b5aba04b",
          content: [
            "Expand historical and sociological vocabulary.",
            "Identify key concepts and their implications."
          ]
        },
        {
          title: "A Promised Land",
          weekTime: "14 hours",
          coverImage: "photo-1487058792275-0ad4aaf24ca7",
          content: [
            "Study political and autobiographical narratives.",
            "Extract and analyze persuasive language used in speeches."
          ]
        },
        {
          title: "The Innovator's Dilemma",
          weekTime: "14 hours",
          coverImage: "photo-1649972904349-6e44c42644a7",
          content: [
            "Learn business and tech disruption terminology.",
            "Deep reading: Analyze a passage and its impact."
          ]
        }
      ],
      color: "from-purple-500/10 to-purple-500/5"
    }
  ];

  return (
    <div className="mx-auto max-w-4xl">
      {levels.map((level, levelIndex) => (
        <div key={levelIndex} className="mb-10">
          <div className="glass-card mb-6 p-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${level.color} flex-shrink-0`}>
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">{level.title}</h3>
                <p className="text-sm text-muted-foreground mb-1">{level.duration}</p>
                <p className="text-sm font-medium text-primary">Total: {level.totalTime}</p>
              </div>
              
              {/* Calculate level progress */}
              {(() => {
                const levelBooks = level.books.map(book => book.title);
                const levelProgress = levelBooks.reduce((sum, title) => sum + weekProgress[title], 0) / levelBooks.length;
                return (
                  <div className="md:w-1/3">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Level Progress</span>
                      <span className="font-medium">{Math.round(levelProgress)}%</span>
                    </div>
                    <Progress value={levelProgress} className="h-2" />
                  </div>
                );
              })()}
            </div>
          </div>
          
          <div className="space-y-4 md:pl-16">
            <p className="text-muted-foreground mb-4">{level.description}</p>
            
            <div className="space-y-4">
              {level.books.map((book, bookIndex) => (
                <div key={bookIndex} className="border rounded-lg overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-4">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-primary/10 flex-shrink-0">
                        <img 
                          src={`https://images.unsplash.com/${book.coverImage}?auto=format&fit=crop&w=100&q=80`} 
                          alt={book.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <span className="font-medium block">Week {bookIndex + 1}: {book.title}</span>
                        <span className="text-sm text-primary">{book.weekTime}</span>
                      </div>
                    </div>
                    
                    <div className="sm:w-1/3 mt-3 sm:mt-0">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-xs text-muted-foreground">Progress</span>
                        <span className="text-xs font-medium">{weekProgress[book.title]}%</span>
                      </div>
                      <Progress value={weekProgress[book.title]} className="h-2" />
                    </div>
                  </div>
                  
                  <div className="p-4 text-sm border-t bg-muted/10">
                    <ul className="space-y-2 list-disc pl-6 pt-1">
                      {book.content.map((item, itemIndex) => (
                        <li key={itemIndex} className={weekProgress[book.title] > 0 ? "text-muted-foreground" : ""}>
                          {item}
                          {weekProgress[book.title] === 100 && <span className="ml-2 text-green-500">✓</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaidCourseDetail;
