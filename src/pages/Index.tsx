import Navigation from "@/components/Navigation";
import VideoHero from "@/components/VideoHero";
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
      
      {/* Video Hero Section */}
      <VideoHero />

      <main className="container mx-auto px-4 py-8 space-y-12">

        {/* Continue Learning Section */}
        <section className="animate-slide-up">
          <div className="flex items-center space-x-2 mb-6">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="font-satoshi font-semibold text-2xl">Nastavi sa učenjem</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {continueLearningSolutions.map((course) => (
              <ContinueLearningCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* Popular Courses */}
        <section className="space-y-6">
          <CourseCarousel 
            title="Popularni Kursevi" 
            courses={popularCourses}
            showFilters={true}
          />
        </section>

        {/* Featured Prompts */}
        <section>
          <div className="flex items-center space-x-2 mb-6">
            <Zap className="h-5 w-5 text-primary" />
            <h2 className="font-satoshi font-semibold text-2xl">Izdvojeni Promptovi</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topPrompts.map((prompt) => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>
        </section>

        {/* Learning Path & Community - Two Column Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <LearningPathCard />
          </div>
          <div className="lg:col-span-2">
            <CommunityWidget />
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-16">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex justify-center">
              <Sparkles className="h-12 w-12 text-primary animate-glow-pulse" />
            </div>
            <h2 className="font-satoshi font-bold text-3xl md:text-4xl">
              Spremni da <span className="gradient-text">ovladate AI</span>?
            </h2>
            <p className="text-lg text-muted-foreground font-manrope leading-relaxed">
              Pridružite se hiljadama stručnjaka iz Zapadnog Balkana koji već 
              transformišu svoje karijere pomoću AI veština.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-manrope font-semibold hover:opacity-90 shadow-glow animate-glow-pulse">
                Započni putovanje
              </button>
              <button className="px-8 py-3 border border-border bg-background/50 backdrop-blur-sm rounded-lg font-manrope font-semibold hover:bg-muted/50">
                Istraži Zajednicu
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
