import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Play, Clock, Users, Star, Lock } from "lucide-react";
import { Link } from "react-router-dom";

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  students: number;
  progress?: number;
  thumbnail: string;
  isLocked?: boolean;
  category: string;
}

interface CourseCardProps {
  course: Course;
  size?: 'default' | 'large';
}

const CourseCard = ({ course, size = 'default' }: CourseCardProps) => {
  const isLarge = size === 'large';
  
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-success/20 text-success border-success/30';
      case 'Intermediate': return 'bg-warning/20 text-warning border-warning/30';
      case 'Advanced': return 'bg-destructive/20 text-destructive border-destructive/30';
      default: return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (course.isLocked) {
      e.preventDefault();
      alert("Ovaj kurs je deo Premium paketa. Nadogradi svoju pretplatu da dobiješ pristup.");
      return;
    }
  };

  if (course.isLocked) {
    return (
      <div 
        className={`group relative overflow-hidden rounded-xl bg-gradient-card border border-border/50 cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-elegant hover:border-primary/30 opacity-60 ${isLarge ? 'h-80' : 'h-72'}`}
        onClick={handleClick}
      >
        {/* Thumbnail */}
        <div className={`relative overflow-hidden ${isLarge ? 'h-48' : 'h-40'}`}>
          <div 
            className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-glow/20 group-hover:scale-105 transition-transform duration-300"
            style={{
              backgroundImage: `linear-gradient(135deg, hsl(var(--primary) / 0.8), hsl(var(--primary-glow) / 0.6))`,
            }}
          />
          
          {/* Level Tag - positioned at top right of thumbnail */}
          <div className="absolute top-3 right-3 z-10">
            <Badge variant="outline" className={`text-xs border ${getLevelColor(course.level)}`}>
              {course.level === 'Beginner' ? 'Početni' : 
               course.level === 'Intermediate' ? 'Srednji' : 
               course.level === 'Advanced' ? 'Napredni' : course.level}
            </Badge>
          </div>
          
          {/* Lock indicator */}
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-20">
            <div className="text-center">
              <Lock className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Premium kurs</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          {/* Header */}
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className={`font-poppins font-semibold leading-tight line-clamp-2 ${
                isLarge ? 'text-lg' : 'text-base'
              }`}>
                {course.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">autor: {course.instructor}</p>
            </div>
          </div>

          {/* Progress (if exists) */}
          {course.progress !== undefined && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Napredak</span>
                <span className="font-medium">{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="h-2">
                <div className="h-full bg-gradient-primary rounded-full transition-all duration-300" />
              </Progress>
            </div>
          )}

          {/* Meta information */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-3 h-3" />
                <span>{course.students.toLocaleString()} polaznika</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-3 h-3 fill-current text-yellow-500" />
              <span>{course.rating}</span>
            </div>
          </div>

          {/* Progress bar at bottom if course is started */}
          {course.progress !== undefined && course.progress > 0 && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted/20">
              <div 
                className="h-full bg-gradient-primary transition-all duration-300"
                style={{ width: `${course.progress}%` }}
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <Link to={`/course/${course.id}`}>
      <div 
        className={`group relative overflow-hidden rounded-xl bg-gradient-card border border-border/50 cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-elegant hover:border-primary/30 ${isLarge ? 'h-80' : 'h-72'}`}
      >
        {/* Thumbnail */}
        <div className={`relative overflow-hidden ${isLarge ? 'h-48' : 'h-40'}`}>
          <div 
            className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-glow/20 group-hover:scale-105 transition-transform duration-300"
            style={{
              backgroundImage: `linear-gradient(135deg, hsl(var(--primary) / 0.8), hsl(var(--primary-glow) / 0.6))`,
            }}
          />
          
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button size="lg" className="rounded-full bg-background/20 backdrop-blur-sm border border-white/20">
              <Play className="w-6 h-6" />
            </Button>
          </div>
          
          {/* Level Tag - positioned at top right of thumbnail */}
          <div className="absolute top-3 right-3 z-10">
            <Badge variant="outline" className={`text-xs border ${getLevelColor(course.level)}`}>
              {course.level === 'Beginner' ? 'Početni' : 
               course.level === 'Intermediate' ? 'Srednji' : 
               course.level === 'Advanced' ? 'Napredni' : course.level}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          {/* Header */}
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className={`font-poppins font-semibold leading-tight line-clamp-2 ${
                isLarge ? 'text-lg' : 'text-base'
              }`}>
                {course.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">autor: {course.instructor}</p>
            </div>
          </div>

          {/* Progress (if exists) */}
          {course.progress !== undefined && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Napredak</span>
                <span className="font-medium">{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="h-2">
                <div className="h-full bg-gradient-primary rounded-full transition-all duration-300" />
              </Progress>
            </div>
          )}

          {/* Meta information */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-3 h-3" />
                <span>{course.students.toLocaleString()} polaznika</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-3 h-3 fill-current text-yellow-500" />
              <span>{course.rating}</span>
            </div>
          </div>

          {/* Progress bar at bottom if course is started */}
          {course.progress !== undefined && course.progress > 0 && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted/20">
              <div 
                className="h-full bg-gradient-primary transition-all duration-300"
                style={{ width: `${course.progress}%` }}
              />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;