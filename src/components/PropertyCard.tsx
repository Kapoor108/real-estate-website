import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Heart, MapPin, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  images: string[];
  amenities: string[];
  potentialRoommates?: number;
  className?: string;
  style?: React.CSSProperties;
}

const PropertyCard = ({
  id,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  squareFeet,
  images,
  amenities,
  potentialRoommates = 0,
  className,
  style,
}: PropertyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleConnect = () => {
    window.location.href = `mailto:support@roommatchr.com?subject=Inquiry about ${title}&body=Hi, I'm interested in the property: ${title} in ${location}.%0D%0A%0D%0AProperty Details:%0D%0A- Price: ${price}%0D%0A- Bedrooms: ${bedrooms}%0D%0A- Bathrooms: ${bathrooms}%0D%0A- Square Feet: ${squareFeet}%0D%0A%0D%0AI would like to:%0D%0A- Learn more about the property%0D%0A- Schedule a viewing%0D%0A- Connect with potential roommates (${potentialRoommates} interested)%0D%0A%0D%0APlease help me get more information.%0D%0A%0D%0AThank you!`;
  };

  return (
    <div 
      className={cn(
        "group rounded-xl bg-background border border-border transition-all duration-300",
        isHovered ? "shadow-lg scale-[1.02]" : "shadow-sm",
        className
      )}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] rounded-t-xl overflow-hidden">
        <img 
          src={images[currentImageIndex]} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        <div className="absolute top-3 right-3 flex gap-2">
          <button 
            className={cn(
              "p-1.5 rounded-full backdrop-blur-sm transition-all",
              isFavorite 
                ? "bg-primary/80 text-primary-foreground" 
                : "bg-background/80 text-foreground hover:bg-background/90"
            )}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart className={cn("h-4 w-4", isFavorite && "fill-current")} />
          </button>
        </div>
        
        <div className="absolute bottom-3 left-3">
          <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
          <div className="flex items-center text-white/90 text-sm">
            <MapPin className="h-3.5 w-3.5 mr-1" />
            {location}
          </div>
        </div>
        
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 flex gap-1">
            {images.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-1.5 h-1.5 rounded-full transition-all",
                  index === currentImageIndex
                    ? "bg-white"
                    : "bg-white/50 hover:bg-white/75"
                )}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div className="space-y-1">
            <div className="flex space-x-3 text-sm text-muted-foreground">
              <span>{bedrooms} {bedrooms === 1 ? 'Bed' : 'Beds'}</span>
              <span>•</span>
              <span>{bathrooms} {bathrooms === 1 ? 'Bath' : 'Baths'}</span>
              <span>•</span>
              <span>{squareFeet} sq ft</span>
            </div>
            <div className="flex items-center text-lg font-semibold">
              <DollarSign className="h-4 w-4 text-primary mr-0.5" />
              {price.replace('$', '')}
            </div>
          </div>
          
          {potentialRoommates > 0 && (
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-2">
                {Array.from({ length: Math.min(potentialRoommates, 3) }).map((_, i) => (
                  <div 
                    key={i}
                    className="h-7 w-7 rounded-full bg-accent border-2 border-background flex items-center justify-center text-xs"
                  >
                    R
                  </div>
                ))}
              </div>
              {potentialRoommates > 3 && (
                <span className="text-xs text-muted-foreground">
                  +{potentialRoommates - 3} more
                </span>
              )}
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {amenities.slice(0, 3).map((amenity, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {amenity}
            </Badge>
          ))}
          {amenities.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{amenities.length - 3} more
            </Badge>
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <Button 
            variant="outline" 
            size="sm"
            className="text-sm"
            asChild
          >
            <Link to={`/properties/${id}`}>
              <Home className="h-3.5 w-3.5 mr-1.5" />
              View Details
            </Link>
          </Button>
          
          <Button 
            size="sm"
            className="text-sm"
            onClick={handleConnect}
          >
            <MapPin className="h-3.5 w-3.5 mr-1.5" />
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
