import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, CheckCircle, Clock } from "lucide-react";

interface LearningPath {
  id: string;
  title: string;
  description: string;
  totalLessons: number;
  completedLessons: number;
  estimatedTime: string;
  currentLesson: {
    title: string;
    duration: string;
  };
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

const mockLearningPath: LearningPath = {
  id: '1',
  title: 'AI Marketing Fundamentals',
  description: 'Naučite osnove AI marketinga kroz praktične primere i alate',
  totalLessons: 12,
  completedLessons: 7,
  estimatedTime: '3h 20min',
  currentLesson: {
    title: 'Content Creation with ChatGPT',
    duration: '18min'
  },
  difficulty: 'Intermediate'
};

const LearningPathCard = () => {
  const progress = (mockLearningPath.completedLessons / mockLearningPath.totalLessons) * 100;
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-success/20 text-success border-success/30';
      case 'Intermediate': return 'bg-warning/20 text-warning border-warning/30';
      case 'Advanced': return 'bg-destructive/20 text-destructive border-destructive/30';
      default: return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  return (
    <div className="bg-gradient-card border border-border/50 rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Target className="h-5 w-5 text-primary" />
        <h3 className="font-poppins font-semibold text-lg">Your Learning Path</h3>
      </div>

      <div className="space-y-4">
        {/* Path Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h4 className="font-poppins font-semibold text-base mb-2">
              {mockLearningPath.title}
            </h4>
            <p className="text-sm text-muted-foreground mb-3">
              {mockLearningPath.description}
            </p>
            <Badge variant="outline" className={`text-xs border ${getDifficultyColor(mockLearningPath.difficulty)}`}>
              {mockLearningPath.difficulty}
            </Badge>
          </div>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground font-medium">
              Progress: {mockLearningPath.completedLessons}/{mockLearningPath.totalLessons} lessons
            </span>
            <span className="font-semibold">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-3">
            <div 
              className="h-full bg-gradient-primary rounded-full transition-all duration-500 animate-progress-shine"
              style={{ width: `${progress}%` }}
            />
          </Progress>
        </div>

        {/* Current Lesson */}
        <div className="bg-muted/30 rounded-lg p-4 border border-border/30">
          <div className="flex items-center space-x-2 mb-2">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary uppercase tracking-wide">
              Next Lesson
            </span>
          </div>
          <h5 className="font-medium text-sm mb-1">
            {mockLearningPath.currentLesson.title}
          </h5>
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>{mockLearningPath.currentLesson.duration}</span>
          </div>
        </div>

        {/* Action Button */}
        <Button className="w-full bg-gradient-primary hover:opacity-90 shadow-glow">
          Continue Learning
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>

        {/* Stats */}
        <div className="flex items-center justify-between pt-2 text-xs text-muted-foreground border-t border-border/30">
          <div className="flex items-center space-x-1">
            <CheckCircle className="h-3 w-3 text-success" />
            <span>{mockLearningPath.completedLessons} completed</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>{mockLearningPath.estimatedTime} remaining</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPathCard;