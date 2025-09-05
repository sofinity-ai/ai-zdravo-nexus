import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, Heart, Bookmark, ExternalLink } from "lucide-react";
import { useState } from "react";

export interface Prompt {
  id: string;
  title: string;
  description: string;
  prompt: string;
  category: string;
  tags: string[];
  aiTools: string[];
  author: string;
  likes: number;
  isBookmarked?: boolean;
  isLocked?: boolean;
}

interface PromptCardProps {
  prompt: Prompt;
}

const PromptCard = ({ prompt }: PromptCardProps) => {
  const [copied, setCopied] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(prompt.isBookmarked || false);

  const handleCopy = async () => {
    if (prompt.isLocked) return;
    
    await navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getToolLogo = (tool: string) => {
    const logos: Record<string, string> = {
      'ChatGPT': '🤖',
      'Claude': '🔮',
      'Gemini': '💎', 
      'Midjourney': '🎨',
      'DALL-E': '🖼️',
      'GPT-4': '⚡',
    };
    return logos[tool] || '🤖';
  };

  return (
    <div 
      className={`group relative overflow-hidden rounded-xl bg-gradient-card border border-border/50 p-6 hover-lift ${
        prompt.isLocked ? 'content-locked' : ''
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-poppins font-semibold text-lg leading-tight line-clamp-2 mb-2">
            {prompt.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {prompt.description}
          </p>
        </div>
        
        <div className="flex items-center space-x-2 ml-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`h-8 w-8 p-0 ${isBookmarked ? 'text-primary' : ''}`}
          >
            <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
          >
            <Heart className="h-4 w-4" />
            <span className="sr-only">{prompt.likes} likes</span>
          </Button>
        </div>
      </div>

      {/* AI Tools */}
      <div className="flex items-center space-x-2 mb-4">
        {prompt.aiTools.map((tool) => (
          <div 
            key={tool}
            className="flex items-center space-x-1 px-2 py-1 rounded-md bg-muted/50 text-xs"
          >
            <span>{getToolLogo(tool)}</span>
            <span className="font-medium">{tool}</span>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        <Badge variant="outline" className="text-xs border-primary/30 text-primary">
          {prompt.category}
        </Badge>
        {prompt.tags.slice(0, 2).map((tag) => (
          <Badge key={tag} variant="outline" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>

      {/* Prompt Preview */}
      <div className="relative mb-4">
        <div className="bg-muted/30 rounded-lg p-3 text-sm font-mono leading-relaxed">
          <p className="line-clamp-3 text-muted-foreground">
            {prompt.prompt}
          </p>
        </div>
        {prompt.prompt.length > 150 && (
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-muted/30 to-transparent" />
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 text-sm text-muted-foreground">
          <span>by {prompt.author}</span>
          <div className="flex items-center space-x-1">
            <Heart className="w-3 h-3" />
            <span>{prompt.likes}</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            disabled={prompt.isLocked}
            className="h-8"
          >
            <Copy className="w-3 h-3 mr-1" />
            {copied ? 'Kopirano!' : 'Kopiraj'}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            disabled={prompt.isLocked}
          >
            <ExternalLink className="w-3 h-3" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PromptCard;