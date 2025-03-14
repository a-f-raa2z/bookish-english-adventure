import React from 'react';
import { BookOpenCheck, GraduationCap, BookOpen } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const levels = [
  {
    title: "Foundations of Everyday English",
    duration: "4 Weeks, 4 Books",
    description: "For learners comfortable with basic English who want to build fluency. Focus on daily vocabulary, common phrases, and understanding simple ideas.",
    books: [
      {
        title: "Super Attractor",
        content: [
          "Listen to the summary and podcast.",
          "Focus on self-improvement and positive mindset vocabulary.",
          "Identify and practice 10 key phrases.",
          "Writing task: Describe a personal goal using learned vocabulary."
        ]
      },
      {
        title: "Atomic Habits",
        content: [
          "Study action-based language and goal-setting terms.",
          "Listen to the podcast and practice pronunciation.",
          "Comprehension task: Answer multiple-choice questions on key ideas.",
          "Writing task: Explain one habit you want to change."
        ]
      },
      {
        title: "The Power of Now",
        content: [
          "Improve comprehension of abstract ideas and mindfulness.",
          "Identify key idioms and phrases in the summary.",
          "Speaking practice: Explain a key concept in your own words.",
          "Writing task: Reflect on how mindfulness impacts daily life."
        ]
      },
      {
        title: "Fall and Rise",
        content: [
          "Strengthen past tense and storytelling skills.",
          "Analyze historical events and their impact.",
          "Speaking practice: Retell a historical event from the book.",
          "Final writing task: Summarize a key lesson learned."
        ]
      }
    ],
    color: "from-blue-500/10 to-blue-500/5"
  },
  {
    title: "Deepening Understanding and Expression",
    duration: "4 Weeks, 4 Books",
    description: "For learners who can understand longer texts and want to improve critical thinking, argumentation, and professional vocabulary.",
    books: [
      {
        title: "Thinking, Fast and Slow",
        content: [
          "Read summary and analyze complex sentence structures.",
          "Extract key idioms and phrasal verbs.",
          "Writing task: Describe a situation where intuition led to a good/bad decision."
        ]
      },
      {
        title: "The Psychology of Money",
        content: [
          "Learn finance-related expressions and persuasive language.",
          "Listen to the podcast and write a one-paragraph reflection.",
          "Speaking practice: Explain a financial concept in simple terms."
        ]
      },
      {
        title: "You Are a Badass",
        content: [
          "Master informal English, self-motivation phrases, and slang.",
          "Practice paraphrasing one key idea from the book.",
          "Writing task: Write a motivational letter using new expressions."
        ]
      },
      {
        title: "Losing Earth",
        content: [
          "Improve comprehension of climate change and historical narratives.",
          "Identify connectors and transition words.",
          "Final writing task: Present a structured argument on an environmental issue."
        ]
      }
    ],
    color: "from-indigo-500/10 to-indigo-500/5"
  },
  {
    title: "Advanced Communication and Critical Thinking",
    duration: "4 Weeks, 4 Books",
    description: "For learners who are comfortable reading challenging books and want to refine their professional and academic English.",
    books: [
      {
        title: "The Four Agreements",
        content: [
          "Read and analyze philosophical language and ethics-related terms.",
          "Identify advanced sentence structures and transitions.",
          "Writing task: Reflect on how one of the agreements applies to your life."
        ]
      },
      {
        title: "Sapiens",
        content: [
          "Expand historical and sociological vocabulary.",
          "Identify key concepts and their implications.",
          "Speaking practice: Explain a historical event in your own words.",
          "Writing task: Write an essay comparing past and present societies."
        ]
      },
      {
        title: "A Promised Land",
        content: [
          "Study political and autobiographical narratives.",
          "Extract and analyze persuasive language used in speeches.",
          "Writing task: Draft a speech on an important issue."
        ]
      },
      {
        title: "The Innovator's Dilemma",
        content: [
          "Learn business and tech disruption terminology.",
          "Deep reading: Analyze a passage and its impact.",
          "Final writing task: Write a case study on business innovation."
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
        <Accordion type="single" collapsible className="w-full">
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
                      <p className="text-sm text-muted-foreground">{level.duration}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                
                <AccordionContent className="px-6 pb-6">
                  <div className="pt-2 md:pl-16">
                    <p className="text-muted-foreground mb-6">{level.description}</p>
                    
                    <div className="space-y-6">
                      {level.books.map((book, bookIndex) => (
                        <Collapsible key={bookIndex} className="border rounded-lg">
                          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left hover:bg-muted/50">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-primary/10">
                                <BookOpen className="h-5 w-5 text-primary" />
                              </div>
                              <span className="font-medium">Week {bookIndex + 1}: {book.title}</span>
                            </div>
                            <ChevronRight className="h-5 w-5 transition-transform ui-expanded:rotate-90" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="p-4 pt-0 text-sm border-t bg-muted/10">
                            <ul className="space-y-2 list-disc pl-6 pt-3">
                              {book.content.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                              ))}
                            </ul>
                          </CollapsibleContent>
                        </Collapsible>
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
