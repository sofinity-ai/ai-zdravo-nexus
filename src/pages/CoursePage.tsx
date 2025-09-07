import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Play, 
  Pause, 
  Volume2, 
  Settings, 
  Maximize, 
  Clock, 
  Users, 
  Star, 
  BookOpen, 
  CheckCircle,
  Lock
} from "lucide-react";

const CoursePage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(1);

  const courseData = {
    title: "Napredni Prompt Inženjering",
    instructor: "Marko Petrović",
    rating: 4.8,
    students: 2100,
    duration: "3h 45min",
    level: "Napredni",
    progress: 35,
    description: "Ovladate naprednim tehnikama prompt inženjeringa i naučite kako da kreirate kompleksne AI procese. Ovaj kurs pokriva chain-of-thought tehnike, prompt chaining, i optimizaciju za različite AI modele.",
    lessons: [
      { id: 1, title: "Uvod u Napredni Prompt Engineering", duration: "12:30", completed: true, locked: false },
      { id: 2, title: "Chain-of-Thought Reasoning", duration: "18:45", completed: true, locked: false },
      { id: 3, title: "Prompt Chaining Tehnike", duration: "22:15", completed: false, locked: false },
      { id: 4, title: "Optimizacija za GPT-4", duration: "19:20", completed: false, locked: false },
      { id: 5, title: "RAG i Kontekst Management", duration: "25:30", completed: false, locked: true },
      { id: 6, title: "Production Prompt Patterns", duration: "28:10", completed: false, locked: true },
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Video and Course Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player */}
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <video
                className="w-full h-full object-cover"
                poster="/hero-video-poster.jpg"
              >
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>
              
              {/* Video Controls Overlay */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Button
                  size="lg"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-primary/90 hover:bg-primary text-white w-16 h-16 rounded-full"
                >
                  {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                </Button>
              </div>
              
              {/* Bottom Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center space-x-4">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </Button>
                    <span className="text-sm">08:45 / 18:45</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Volume2 className="w-4 h-4" />
                    <Settings className="w-4 h-4" />
                    <Maximize className="w-4 h-4" />
                  </div>
                </div>
                <Progress value={47} className="mt-2 h-1" />
              </div>
            </div>

            {/* Course Header */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">{courseData.level}</Badge>
                <Badge variant="outline" className="text-primary border-primary">
                  <BookOpen className="w-3 h-3 mr-1" />
                  Kurs
                </Badge>
              </div>
              
              <h1 className="font-satoshi font-bold text-3xl md:text-4xl gradient-text">
                {courseData.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{courseData.students.toLocaleString()} polaznika</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{courseData.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{courseData.rating}</span>
                </div>
              </div>
              
              <p className="font-manrope text-lg text-muted-foreground leading-relaxed">
                Instruktor: <span className="text-foreground font-medium">{courseData.instructor}</span>
              </p>
            </div>

            {/* Course Description */}
            <Card className="p-6">
              <h3 className="font-satoshi font-semibold text-xl mb-4">O kursu</h3>
              <p className="font-manrope text-muted-foreground leading-relaxed">
                {courseData.description}
              </p>
            </Card>

            {/* Learning Objectives */}
            <Card className="p-6">
              <h3 className="font-satoshi font-semibold text-xl mb-4">Šta ćete naučiti</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Chain-of-thought reasoning tehnike",
                  "Napredne prompt strukture",
                  "Optimizacija za različite AI modele",
                  "RAG i kontekst management",
                  "Production-ready prompt patterns",
                  "Debugging i testiranje promptova"
                ].map((objective, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="font-manrope text-muted-foreground">{objective}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar - Course Curriculum */}
          <div className="space-y-6">
            {/* Progress Card */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-satoshi font-semibold text-lg">Vaš napredak</h3>
                <span className="text-primary font-medium">{courseData.progress}%</span>
              </div>
              <Progress value={courseData.progress} className="mb-3" />
              <p className="text-sm text-muted-foreground">
                2 od 6 lekcija završeno
              </p>
            </Card>

            {/* Course Curriculum */}
            <Card className="p-6">
              <h3 className="font-satoshi font-semibold text-lg mb-4">Sadržaj kursa</h3>
              <div className="space-y-3">
                {courseData.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className={`flex items-center justify-between p-3 rounded-lg transition-colors cursor-pointer ${
                      lesson.id === currentLesson 
                        ? 'bg-primary/10 border border-primary/20' 
                        : 'hover:bg-muted/50'
                    } ${lesson.locked ? 'opacity-60' : ''}`}
                    onClick={() => !lesson.locked && setCurrentLesson(lesson.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        {lesson.completed ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : lesson.locked ? (
                          <Lock className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-muted-foreground" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="font-manrope font-medium text-sm truncate">
                          {lesson.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {lesson.duration}
                        </p>
                      </div>
                    </div>
                    {lesson.id === currentLesson && !lesson.locked && (
                      <Button size="sm" variant="ghost">
                        <Play className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            {/* Course Actions */}
            <div className="space-y-3">
              <Button className="w-full bg-gradient-primary hover:opacity-90">
                Nastavi sa učenjem
              </Button>
              <Button variant="outline" className="w-full">
                Preuzmi materijale
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CoursePage;