
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
  nextMilestone: "Complete Level 1"
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
            <TabsTrigger value="syllabus">Course Syllabus</TabsTrigger>
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
          </TabsContent>
          
          <TabsContent value="syllabus">
            <CourseOverview />
            <CourseLevels />
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default PaidCourseDetail;
