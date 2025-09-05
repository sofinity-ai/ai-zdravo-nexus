import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MessageCircle, TrendingUp, Clock, ExternalLink } from "lucide-react";

interface CommunityThread {
  id: string;
  title: string;
  author: string;
  authorAvatar?: string;
  channel: string;
  replies: number;
  upvotes: number;
  timeAgo: string;
  isHot?: boolean;
}

const mockThreads: CommunityThread[] = [
  {
    id: '1',
    title: 'Najbolji prompts za content marketing u 2024?',
    author: 'Milica S.',
    channel: 'marketing',
    replies: 24,
    upvotes: 45,
    timeAgo: '2h',
    isHot: true
  },
  {
    id: '2', 
    title: 'Claude vs ChatGPT za coding - vaša iskustva?',
    author: 'Stefan P.',
    channel: 'development', 
    replies: 18,
    upvotes: 32,
    timeAgo: '4h'
  },
  {
    id: '3',
    title: 'AI alati za automatizaciju - n8n integracije',
    author: 'Ana K.',
    channel: 'automation',
    replies: 12,
    upvotes: 28,
    timeAgo: '6h'
  }
];

const CommunityWidget = () => {
  return (
    <div className="bg-gradient-card border border-border/50 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <MessageCircle className="h-5 w-5 text-primary" />
          <h3 className="font-poppins font-semibold text-lg">Aktivnosti u Zajednici</h3>
        </div>
        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
          Prikaži Sve
          <ExternalLink className="w-3 h-3 ml-1" />
        </Button>
      </div>

      <div className="space-y-4">
        {mockThreads.map((thread) => (
          <div 
            key={thread.id}
            className="group p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer border border-transparent hover:border-border/50"
          >
            <div className="flex items-start space-x-3">
              <Avatar className="h-8 w-8 flex-shrink-0">
                <AvatarImage src={thread.authorAvatar} />
                <AvatarFallback className="bg-gradient-primary text-primary-foreground text-xs">
                  {thread.author.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  {thread.isHot && (
                    <TrendingUp className="h-3 w-3 text-destructive" />
                  )}
                  <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                    #{thread.channel}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{thread.timeAgo}</span>
                </div>
                
                <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                  {thread.title}
                </h4>
                
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-muted-foreground">by {thread.author}</span>
                  <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="h-3 w-3" />
                      <span>{thread.replies}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="h-3 w-3" />
                      <span>{thread.upvotes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-border/30">
        <Button variant="outline" className="w-full">
          <MessageCircle className="w-4 h-4 mr-2" />
          Priključi se Diskusiji
        </Button>
      </div>
    </div>
  );
};

export default CommunityWidget;