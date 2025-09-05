import Navigation from "@/components/Navigation";
import WelcomeBanner from "@/components/WelcomeBanner";
import CourseCarousel from "@/components/CourseCarousel";
import ContinueLearningCard from "@/components/ContinueLearningCard";
import LearningPathCard from "@/components/LearningPathCard";
import CommunityWidget from "@/components/CommunityWidget";
import PromptCard from "@/components/PromptCard";
import { mockCourses, mockPrompts, continueLearningSolutions } from "@/data/mockData";
import { Sparkles, TrendingUp, Zap } from "lucide-react";

const Index = () => {
  // Filter courses by category for different carousels
  const popularCourses = mockCourses.slice(0, 4);
  const beginnerCourses = mockCourses.filter(course => course.level === 'Beginner');
  const advancedCourses = mockCourses.filter(course => course.level === 'Advanced');
  const topPrompts = mockPrompts.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Welcome Banner */}
        <section className="animate-fade-in">
          <WelcomeBanner />
        </section>

        {/* Continue Learning Section */}
        <section className="animate-slide-up">
          <div className="flex items-center space-x-2 mb-6">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="font-poppins font-semibold text-2xl">Continue Learning</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {continueLearningSolutions.map((course) => (
              <ContinueLearningCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* Learning Path & Community */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <LearningPathCard />
          <CommunityWidget />
        </section>

        {/* Course Carousels */}
        <section className="space-y-12">
          <CourseCarousel 
            title="🔥 Popular Courses" 
            courses={popularCourses}
          />
          
          <CourseCarousel 
            title="🚀 Perfect for Beginners" 
            courses={beginnerCourses}
          />
          
          <CourseCarousel 
            title="⚡ Advanced Techniques" 
            courses={advancedCourses}
          />
        </section>

        {/* Featured Prompts */}
        <section>
          <div className="flex items-center space-x-2 mb-6">
            <Zap className="h-5 w-5 text-primary" />
            <h2 className="font-poppins font-semibold text-2xl">Featured Prompts</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topPrompts.map((prompt) => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-16">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex justify-center">
              <Sparkles className="h-12 w-12 text-primary animate-glow-pulse" />
            </div>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl">
              Ready to <span className="gradient-text">Master AI</span>?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of professionals from the Western Balkans who are already 
              transforming their careers with AI skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 shadow-glow animate-glow-pulse">
                Start Your Journey
              </button>
              <button className="px-8 py-3 border border-border bg-background/50 backdrop-blur-sm rounded-lg font-semibold hover:bg-muted/50">
                Explore Community
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
