import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Play, Clock, BookOpen } from "lucide-react";

interface ContinueLearningCardProps {
  course: {
    id: string;
    title: string;
    progress: number;
    nextLesson: string;
    duration: string;
    thumbnail: string;
  };
}

const ContinueLearningCard = ({ course }: ContinueLearningCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-card border border-border/50 p-6 hover-lift">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-glow/10 opacity-50" />
      
      {/* Content */}
      <div className="relative space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h4 className="font-poppins font-semibold text-base mb-2 line-clamp-1">
              {course.title}
            </h4>
            <p className="text-sm text-muted-foreground mb-3">
              Next: {course.nextLesson}
            </p>
          </div>
          <Button
            size="icon"
            className="h-12 w-12 rounded-full bg-primary/20 hover:bg-primary/30 border border-primary/30"
          >
            <Play className="h-5 w-5 text-primary fill-current" />
          </Button>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium">{course.progress}%</span>
          </div>
          <Progress value={course.progress} className="h-2">
            <div 
              className="h-full bg-gradient-primary rounded-full transition-all duration-500"
              style={{ width: `${course.progress}%` }}
            />
          </Progress>
        </div>

        {/* Action */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>{course.duration}</span>
          </div>
          <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 h-8">
            <BookOpen className="w-3 h-3 mr-1" />
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContinueLearningCard;