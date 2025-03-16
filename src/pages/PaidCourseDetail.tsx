
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseOverview from '@/components/CourseOverview';
import CourseLevels from '@/components/CourseLevels';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Book, Clock, GraduationCap, BarChart3, Calendar } from 'lucide-react';

// Mock progress data
const userProgress = {
  level1: 75,
  level2: 30,
  level3: 0,
  totalProgress: 35,
  currentWeek: 2,
  currentBook: "Atomic Habits",
  lastActivity: "2 hours ago",
  streakDays: 5,
  weeklyActivity: [
    { day: 'Mon', hours: 2 },
    { day: 'Tue', hours: 1.5 },
    { day: 'Wed', hours: 2.5 },
    { day: 'Thu', hours: 0.5 },
    { day: 'Fri', hours: 1 },
    { day: 'Sat', hours: 0 },
    { day: 'Sun', hours: 0 },
  ],
  completedBooks: [
    { title: "Super Attractor", completedAt: "2023-05-10" }
  ],
  nextMilestone: "Complete Level 1",
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
  const [activeTab, setActiveTab] = useState("progress");

  return (
    <div className="min-h-screen">
      <Header />
      
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
                  <span className="text-sm text-primary font-medium">{userProgress.nextMilestone}</span>
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
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="mb-10">
          <TabsList className="mb-6">
            <TabsTrigger value="progress">My Progress</TabsTrigger>
            <TabsTrigger value="about">About Course</TabsTrigger>
          </TabsList>
          
          <TabsContent value="progress" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium">Level Progress</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Level 1</span>
                      <span className="font-medium">{userProgress.level1}%</span>
                    </div>
                    <Progress value={userProgress.level1} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Level 2</span>
                      <span className="font-medium">{userProgress.level2}%</span>
                    </div>
                    <Progress value={userProgress.level2} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Level 3</span>
                      <span className="font-medium">{userProgress.level3}%</span>
                    </div>
                    <Progress value={userProgress.level3} className="h-2" />
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium">Current Streak</h3>
                </div>
                
                <div className="text-center my-4">
                  <span className="text-4xl font-bold text-primary">{userProgress.streakDays}</span>
                  <p className="text-muted-foreground">Days in a row</p>
                </div>
                
                <div className="flex justify-between mt-6">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                        i < userProgress.streakDays ? 'bg-primary text-white' : 'bg-muted'
                      }`}>
                        {day}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Book className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium">Completed Books</h3>
                </div>
                
                {userProgress.completedBooks.length > 0 ? (
                  <div className="space-y-3">
                    {userProgress.completedBooks.map((book, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-md bg-muted/30">
                        <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                          <Book className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{book.title}</p>
                          <p className="text-xs text-muted-foreground">Completed on {book.completedAt}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center my-8">No completed books yet</p>
                )}
              </Card>
            </div>
            
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium">Weekly Activity</h3>
              </div>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={userProgress.weeklyActivity}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" />
                    <YAxis label={{ value: 'Hours', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Bar dataKey="hours" fill="#8884d8" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {/* Course Syllabus with Progress */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Course Syllabus & Progress</h2>
              <p className="text-muted-foreground">Track your journey through each level and book</p>
            </div>
            
            <CourseLevelsWithProgress weekProgress={userProgress.weekProgress} />
          </TabsContent>
          
          <TabsContent value="about">
            <CourseOverview />
          </TabsContent>
        </Tabs>
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
