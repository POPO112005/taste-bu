import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Star } from "lucide-react";

interface PlaceCardProps {
  name: string;
  description: string;
  image: string;
  rating: number;
  priceRange: string;
  openHours: string;
  distance: string;
  tags: string[];
  highlights?: string[];
}

const PlaceCard = ({
  name,
  description,
  image,
  rating,
  priceRange,
  openHours,
  distance,
  tags,
  highlights = []
}: PlaceCardProps) => {
  return (
    <Card className="overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card">
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-card/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
          <Star className="h-3 w-3 sm:h-4 sm:w-4 text-warm-orange fill-current" />
          <span className="text-xs sm:text-sm font-medium text-foreground">{rating}</span>
        </div>
      </div>
      
      <CardContent className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{name}</h3>
        <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
          <div className="flex items-center space-x-1">
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>{distance}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>{openHours}</span>
          </div>
          <span className="font-medium text-coffee">{priceRange}</span>
        </div>
        
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        {highlights.length > 0 && (
          <div className="space-y-1">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-xs sm:text-sm text-coffee font-medium">
                • {highlight}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PlaceCard;