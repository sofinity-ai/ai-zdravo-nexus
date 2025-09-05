import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Play, Clock, Users, Star, Lock } from "lucide-react";

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

  return (
    <div 
      className={`group relative overflow-hidden rounded-xl bg-gradient-card border border-border/50 hover-lift ${
        course.isLocked ? 'content-locked' : ''
      } ${isLarge ? 'h-80' : 'h-72'}`}
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
        
        {/* Lock indicator */}
        {course.isLocked && (
          <div className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm">
            <Lock className="w-4 h-4 text-muted-foreground" />
          </div>
        )}
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
            <p className="text-sm text-muted-foreground mt-1">{course.instructor}</p>
          </div>
          <Badge variant="outline" className={`text-xs border ${getLevelColor(course.level)}`}>
            {course.level === 'Beginner' ? 'Početni' : 
             course.level === 'Intermediate' ? 'Srednji' : 
             course.level === 'Advanced' ? 'Napredni' : course.level}
          </Badge>
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
              <span>{course.students.toLocaleString()}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-3 h-3 fill-current text-yellow-500" />
            <span>{course.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;