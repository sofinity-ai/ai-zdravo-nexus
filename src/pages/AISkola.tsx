import Navigation from "@/components/Navigation";
import CourseCarousel from "@/components/CourseCarousel";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { mockCourses } from "@/data/mockData";
import { useState } from "react";

const AISkola = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("sve");
  const [selectedLevel, setSelectedLevel] = useState<string>("svi");

  // Filter courses based on selected filters
  const filteredCourses = mockCourses.filter(course => {
    const categoryMatch = selectedCategory === "sve" || course.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const levelMatch = selectedLevel === "svi" || course.level.toLowerCase() === selectedLevel.toLowerCase();
    return categoryMatch && levelMatch;
  });

  // Organize courses into different carousels
  const popularCourses = mockCourses.slice(0, 6);
  const newCourses = [...mockCourses].reverse().slice(0, 4);
  const beginnerCourses = mockCourses.filter(course => course.level === 'Beginner');
  const advancedCourses = mockCourses.filter(course => course.level === 'Advanced');
  const marketingCourses = mockCourses.filter(course => course.category.toLowerCase().includes('marketing'));

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="ai-skola" />
      
      <main className="container mx-auto px-6 py-8 space-y-12">
        {/* Page Title & Subtitle */}
        <div className="text-center space-y-4">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl">AI Škola</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tvoja biblioteka znanja za veštačku inteligenciju. Izaberi svoju stazu i započni učenje.
          </p>
        </div>

        {/* Filtering Controls */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Kategorija</label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48 bg-card border-border/50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-card border-border/50">
                <SelectItem value="sve">Sve Kategorije</SelectItem>
                <SelectItem value="marketing">AI za Marketing</SelectItem>
                <SelectItem value="produktivnost">AI za Produktivnost</SelectItem>
                <SelectItem value="development">AI Development</SelectItem>
                <SelectItem value="poslovna">Poslovna Primena</SelectItem>
                <SelectItem value="kreativni">Kreativni Alati</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Nivo</label>
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger className="w-48 bg-card border-border/50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-card border-border/50">
                <SelectItem value="svi">Svi Nivoi</SelectItem>
                <SelectItem value="beginner">Početni</SelectItem>
                <SelectItem value="intermediate">Srednji</SelectItem>
                <SelectItem value="advanced">Napredni</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Course Carousels - Netflix Style */}
        <div className="space-y-12">
          <CourseCarousel 
            title="Popularni Kursevi" 
            courses={popularCourses}
            showViewAll={false}
          />
          
          <CourseCarousel 
            title="Novo u AI Školi" 
            courses={newCourses}
            showViewAll={false}
          />
          
          <CourseCarousel 
            title="Savršeno za Početnike" 
            courses={beginnerCourses}
            showViewAll={false}
          />
          
          <CourseCarousel 
            title="Napredne Tehnike i Automatizacija" 
            courses={advancedCourses}
            showViewAll={false}
          />
          
          <CourseCarousel 
            title="AI za Marketing Profesionalce" 
            courses={marketingCourses}
            showViewAll={false}
          />
        </div>

        {/* If filters are applied, show filtered results */}
        {(selectedCategory !== "sve" || selectedLevel !== "svi") && (
          <div className="pt-8 border-t border-border/20">
            <CourseCarousel 
              title="Filtrirani Rezultati" 
              courses={filteredCourses}
              showViewAll={false}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default AISkola;