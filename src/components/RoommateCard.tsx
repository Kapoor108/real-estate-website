import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Heart, User, DollarSign, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export interface RoommateCardProps {
  id: string;
  name: string;
  age: number;
  occupation: string;
  location: string;
  compatibilityScore: number;
  interests: string[];
  moveInDate: string;
  budget: string;
  className?: string;
  style?: React.CSSProperties;
  avatar?: string;
}

const RoommateCard = ({
  id,
  name,
  age,
  occupation,
  location,
  compatibilityScore,
  interests,
  moveInDate,
  budget,
  className,
  style,
  avatar,
}: RoommateCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const handleConnect = () => {
    window.location.href = `mailto:support@roommatchr.com?subject=Connect with ${name}&body=Hi, I'm interested in connecting with ${name} (${occupation}) as a potential roommate. My compatibility score with them is ${compatibilityScore}%.%0D%0A%0D%0APlease help us get in touch.%0D%0A%0D%0AThank you!`;
  };
  
  return (
    <div 
      className={cn(
        "relative overflow-hidden group rounded-xl bg-background border border-border transition-all duration-300",
        isHovered ? "shadow-lg scale-[1.02]" : "shadow-sm",
        className
      )}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <div className="relative">
              {avatar ? (
                <div className="h-14 w-14 rounded-full overflow-hidden">
                  <img 
                    src={avatar} 
                    alt={name}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="h-14 w-14 rounded-full bg-accent flex items-center justify-center text-lg font-semibold overflow-hidden">
                  {avatar ? (
                    <img src={avatar} alt={name} className="h-full w-full object-cover" />
                  ) : (
                    <img 
                      src={`https://randomuser.me/api/portraits/${age % 2 === 0 ? 'men' : 'women'}/${Math.floor(Math.random() * 70)}.jpg`} 
                      alt={name}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
              )}
              <span 
                className={cn(
                  "absolute -bottom-1 -right-1 h-5 w-5 rounded-full flex items-center justify-center text-[10px] font-bold text-background border-2 border-background",
                  compatibilityScore >= 80 ? "bg-green-500" : 
                  compatibilityScore >= 60 ? "bg-amber-500" : "bg-red-500"
                )}
              >
                {compatibilityScore}
              </span>
            </div>
            <div className="ml-3">
              <h3 className="font-semibold">{name}, {age}</h3>
              <p className="text-sm text-muted-foreground">{occupation}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              className={cn(
                "p-1.5 rounded-full transition-all",
                isFavorite ? "bg-primary/10 text-primary" : "bg-transparent text-muted-foreground hover:bg-accent"
              )}
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Heart className={cn("h-4 w-4", isFavorite && "fill-current")} />
            </button>
            
            <Badge variant="outline" className="text-xs font-normal">
              {location}
            </Badge>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium">Interests</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {interests.map((interest) => (
                <Badge 
                  key={interest} 
                  variant="secondary" 
                  className="text-xs"
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-primary" />
              <div>
                <p className="text-muted-foreground text-xs">Move-in Date</p>
                <p className="font-medium">{moveInDate}</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <DollarSign className="h-3.5 w-3.5 text-primary" />
              <div>
                <p className="text-muted-foreground text-xs">Budget</p>
                <p className="font-medium">{budget}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-muted/50 border-t border-border grid grid-cols-2 gap-2">
        <Button 
          variant="outline" 
          size="sm"
          className="text-sm"
          asChild
        >
          <Link to={`/roommates/${id}`}>
            <User className="h-3.5 w-3.5 mr-1.5" />
            View Profile
          </Link>
        </Button>
        
        <Button 
          size="sm"
          className="text-sm"
          onClick={handleConnect}
        >
          <MessageSquare className="h-3.5 w-3.5 mr-1.5" />
          Connect
        </Button>
      </div>
      
      {/* Compatibility indicator */}
      <div className="absolute top-0 right-0 left-0 h-1">
        <div 
          className={cn(
            "h-full transition-all duration-300",
            compatibilityScore >= 80 ? "bg-green-500" : 
            compatibilityScore >= 60 ? "bg-amber-500" : "bg-red-500",
            isHovered ? "opacity-100" : "opacity-80"
          )}
          style={{ width: `${compatibilityScore}%` }}
        ></div>
      </div>
    </div>
  );
};

export default RoommateCard;
