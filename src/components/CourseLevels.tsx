import React from 'react';
import { GraduationCap, Target } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const levels = [
  {
    title: "Foundations of Everyday English",
    duration: "4 Weeks, 4 Books",
    totalTime: "40 hours",
    goal: "Develop confidence in understanding and using English in everyday situations, focusing on high-frequency vocabulary (2,500-4,000 words), fundamental sentence structures, and intuitive listening skills. Learners at this stage should move from understanding words to grasping whole ideas.",
    books: [
      {
        title: "Super Attractor",
        subtitle: "Methods for Manifesting a Life Beyond Your Wildest Dreams",
        author: "Gabrielle Bernstein",
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
        subtitle: "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
        author: "James Clear",
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
        subtitle: "A Guide to Spiritual Enlightenment",
        author: "Eckhart Tolle",
        weekTime: "10 hours",
        coverImage: "photo-1487058792275-0ad4aaf24ca7",
        content: [
          "Improve comprehension of abstract ideas and mindfulness.",
          "Identify key idioms and phrases in the summary."
        ]
      },
      {
        title: "Fall and Rise",
        subtitle: "The Story of 9/11",
        author: "Mitchell Zuckoff",
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
    goal: "Shift from understanding English to expressing thoughts clearly and fluently. This level focuses on academic and professional vocabulary (4,500-7,000 words), structured thinking, and nuanced communication. Learners will learn to break down complex ideas and express opinions effectively.",
    books: [
      {
        title: "Thinking, Fast and Slow",
        subtitle: "A Revolutionary Look at the Way Our Minds Work",
        author: "Daniel Kahneman",
        weekTime: "12 hours",
        coverImage: "photo-1581091226825-a6a2a5aee158",
        content: [
          "Listen to and read summary and analyze complex sentence structures.",
          "Extract key idioms and phrasal verbs."
        ]
      },
      {
        title: "The Psychology of Money",
        subtitle: "Timeless Lessons on Wealth, Greed, and Happiness",
        author: "Morgan Housel",
        weekTime: "12 hours",
        coverImage: "photo-1461749280684-dccba630e2f6",
        content: [
          "Learn finance-related expressions and persuasive language.",
          "Listen to the podcast and write a one-paragraph reflection."
        ]
      },
      {
        title: "You Are a Badass",
        subtitle: "How to Stop Doubting Your Greatness and Start Living an Awesome Life",
        author: "Jen Sincero",
        weekTime: "12 hours",
        coverImage: "photo-1488590528505-98d2b5aba04b",
        content: [
          "Master informal English, self-motivation phrases, and slang.",
          "Practice paraphrasing one key idea from the book."
        ]
      },
      {
        title: "Losing Earth",
        subtitle: "A Recent History",
        author: "Nathaniel Rich",
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
    goal: "Refine critical thinking, argumentation, and professional communication, with an emphasis on complex analysis, industry-specific vocabulary (7,000+ words), and persuasive writing.",
    books: [
      {
        title: "The Four Agreements",
        subtitle: "A Practical Guide to Personal Freedom",
        author: "Don Miguel Ruiz",
        weekTime: "14 hours",
        coverImage: "photo-1531297484001-80022131f5a1",
        content: [
          "Read and analyze philosophical language and ethics-related terms.",
          "Identify advanced sentence structures and transitions."
        ]
      },
      {
        title: "Sapiens",
        subtitle: "A Brief History of Humankind",
        author: "Yuval Noah Harari",
        weekTime: "14 hours",
        coverImage: "photo-1488590528505-98d2b5aba04b",
        content: [
          "Expand historical and sociological vocabulary.",
          "Identify key concepts and their implications."
        ]
      },
      {
        title: "A Promised Land",
        subtitle: "Presidential Memoir",
        author: "Barack Obama",
        weekTime: "14 hours",
        coverImage: "photo-1487058792275-0ad4aaf24ca7",
        content: [
          "Study political and autobiographical narratives.",
          "Extract and analyze persuasive language used in speeches."
        ]
      },
      {
        title: "The Innovator's Dilemma",
        subtitle: "When New Technologies Cause Great Firms to Fail",
        author: "Clayton M. Christensen",
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

const CourseLevels = () => {
  return (
    <section id="levels" className="section-container bg-accent/30">
      <div className="text-center mb-16">
        <p className="title-chip">Program Structure</p>
        <h2 className="title-medium mb-6">Course Syllabus</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          The course is divided into three progressive levels, each designed to build upon your existing knowledge 
          and take your English skills to new heights.
        </p>
      </div>
      
      <div className="mx-auto max-w-4xl">
        <Accordion type="single" collapsible className="w-full" defaultValue="level-0">
          {levels.map((level, index) => (
            <AccordionItem key={index} value={`level-${index}`}>
              <div className="glass-card mb-4 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 text-left">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${level.color} flex-shrink-0`}>
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{level.title}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{level.duration}</p>
                      <p className="text-sm font-medium text-primary">Total: {level.totalTime}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                
                <AccordionContent className="px-6 pb-6">
                  <div className="pt-2 md:pl-16">
                    {level.description && (
                      <p className="text-muted-foreground mb-6">{level.description}</p>
                    )}
                    
                    {level.goal && (
                      <div className="bg-primary/5 rounded-lg p-4 mb-6 border border-primary/10">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-1.5 bg-primary/10 rounded-full">
                            <Target className="h-5 w-5 text-primary" />
                          </div>
                          <h4 className="font-medium">Goal</h4>
                        </div>
                        <p className="text-muted-foreground">{level.goal}</p>
                      </div>
                    )}
                    
                    <div className="space-y-6">
                      {level.books.map((book, bookIndex) => (
                        <div key={bookIndex} className="border rounded-lg">
                          <div className="flex items-center gap-3 p-4">
                            <div className="w-12 h-12 rounded-lg overflow-hidden bg-primary/10 flex-shrink-0">
                              <img 
                                src={`https://images.unsplash.com/${book.coverImage}?auto=format&fit=crop&w=100&q=80`} 
                                alt={book.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <span className="font-medium block">Week {bookIndex + 1}: {book.title} by {book.author}</span>
                              <span className="text-xs text-muted-foreground block">{book.subtitle}</span>
                              <span className="text-sm text-primary">{book.weekTime}</span>
                            </div>
                          </div>
                          <div className="p-4 pt-0 text-sm border-t bg-muted/10">
                            <ul className="space-y-2 list-disc pl-6 pt-3">
                              {book.content.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default CourseLevels;
