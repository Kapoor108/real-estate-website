import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, User, DollarSign, Calendar, MessageSquare, MapPin, Home, Heart } from "lucide-react";

// Sample data - in a real app, this would come from a database
const roommates = [
  {
    id: "r1",
    name: "Alex Johnson",
    age: 28,
    occupation: "Software Engineer",
    location: "Downtown",
    compatibilityScore: 92,
    interests: ["Reading", "Travel", "Tech"],
    moveInDate: "May 1, 2024",
    budget: "$1,200 - $1,800",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "I'm a software engineer who enjoys a clean, quiet living space. I work from home most days and am looking for roommates with similar schedules. I enjoy cooking on weekends and an occasional movie night.",
    lifestyle: {
      cleanliness: "Very Clean",
      schedule: "Early Bird",
      smoking: "Non-Smoker",
      pets: "No Pets",
      drinking: "Social Drinker"
    },
    preferredLocations: ["Downtown", "Midtown", "Tech District"]
  },
  {
    id: "r2",
    name: "Taylor Rodriguez",
    age: 25,
    occupation: "Marketing Manager",
    location: "Westside",
    compatibilityScore: 87,
    interests: ["Fitness", "Cooking", "Movies"],
    moveInDate: "April 15, 2024",
    budget: "$1,000 - $1,500",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Marketing professional looking for a vibrant apartment with social roommates. I enjoy hosting small gatherings and exploring the city on weekends. I'm tidy, respectful of personal space, and looking for like-minded roommates.",
    lifestyle: {
      cleanliness: "Clean",
      schedule: "Night Owl",
      smoking: "Non-Smoker",
      pets: "Cat Friendly",
      drinking: "Regular Drinker"
    },
    preferredLocations: ["Westside", "Arts District", "University Area"]
  },
  {
    id: "r3",
    name: "Jordan Smith",
    age: 30,
    occupation: "UX Designer",
    location: "Midtown",
    compatibilityScore: 78,
    interests: ["Art", "Photography", "Hiking"],
    moveInDate: "June 1, 2024",
    budget: "$1,400 - $2,000",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    bio: "Creative professional seeking a spacious apartment with natural light. I value a balance between social time and quiet space. I enjoy outdoor activities on weekends and keep a minimalist, organized living space.",
    lifestyle: {
      cleanliness: "Average",
      schedule: "Flexible",
      smoking: "Outdoor Smoker",
      pets: "Pet Friendly",
      drinking: "Occasional Drinker"
    },
    preferredLocations: ["Midtown", "Creative District", "Park Area"]
  }
];

const RoommateDetail = () => {
  const { id } = useParams();
  const [roommate, setRoommate] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  
  useEffect(() => {
    const foundRoommate = roommates.find(r => r.id === id);
    setRoommate(foundRoommate);
    setLoading(false);
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [id]);
  
  const handleContactClick = () => {
    window.location.href = `mailto:support@roommatchr.com?subject=Connect with ${roommate.name}&body=Hi, I'm interested in connecting with ${roommate.name} (${roommate.occupation}) as a potential roommate. My compatibility score with them is ${roommate.compatibilityScore}%.%0D%0A%0D%0AI would like to:%0D%0A- Learn more about their lifestyle preferences%0D%0A- Discuss potential living arrangements%0D%0A- Schedule a time to meet or video chat%0D%0A%0D%0APlease help us get in touch.%0D%0A%0D%0AThank you!`;
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse text-2xl">Loading...</div>
        </div>
      </div>
    );
  }
  
  if (!roommate) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center p-6">
          <h2 className="text-2xl font-bold mb-4">Roommate Not Found</h2>
          <p className="text-muted-foreground mb-6">The roommate you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/roommates">Back to Roommates</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="mb-6">
            <Button variant="ghost" size="sm" className="mb-4" asChild>
              <Link to="/roommates">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Roommates
              </Link>
            </Button>
            
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold">{roommate.name}</h1>
              <Button 
                variant="outline" 
                size="icon"
                className={isFavorite ? "text-primary bg-primary/10" : ""}
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? "fill-primary" : ""}`} />
              </Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="h-32 w-32 rounded-full overflow-hidden bg-accent">
                        <img 
                          src={roommate.avatar || `https://randomuser.me/api/portraits/${roommate.age % 2 === 0 ? 'men' : 'women'}/${roommate.age}.jpg`}
                          alt={roommate.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-grow space-y-4">
                      <div>
                        <h2 className="text-xl font-semibold">{roommate.name}, {roommate.age}</h2>
                        <p className="text-muted-foreground">{roommate.occupation}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-primary/90 hover:bg-primary text-primary-foreground">
                          <MapPin className="h-3 w-3 mr-1" />
                          {roommate.location}
                        </Badge>
                        
                        <Badge variant="outline">
                          <Calendar className="h-3 w-3 mr-1" />
                          Available {roommate.moveInDate}
                        </Badge>
                        
                        <Badge variant="outline">
                          <DollarSign className="h-3 w-3 mr-1" />
                          Budget: {roommate.budget}
                        </Badge>
                        
                        <Badge 
                          className={
                            roommate.compatibilityScore >= 80 ? "bg-green-500 hover:bg-green-600" : 
                            roommate.compatibilityScore >= 60 ? "bg-amber-500 hover:bg-amber-600" : 
                            "bg-red-500 hover:bg-red-600"
                          }
                        >
                          {roommate.compatibilityScore}% Compatible
                        </Badge>
                      </div>
                      
                      <p>{roommate.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {roommate.interests.map((interest: string) => (
                        <Badge key={interest} variant="secondary">{interest}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Lifestyle</h3>
                    <ul className="space-y-2">
                      {Object.entries(roommate.lifestyle).map(([key, value]: [string, any]) => (
                        <li key={key} className="flex justify-between">
                          <span className="text-muted-foreground capitalize">{key}:</span>
                          <span className="font-medium">{value}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Preferred Locations</h3>
                  <div className="flex flex-wrap gap-2">
                    {roommate.preferredLocations.map((location: string) => (
                      <Badge key={location} variant="outline">
                        <MapPin className="h-3 w-3 mr-1" />
                        {location}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Contact {roommate.name.split(' ')[0]}</h3>
                  
                  <div className="space-y-4">
                    <Button className="w-full" onClick={handleContactClick}>
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                    
                    <Button variant="outline" className="w-full" asChild>
                      <Link to={`/roommates/${roommate.id}`}>
                        <User className="h-4 w-4 mr-2" />
                        View Full Profile
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Compatibility</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Overall Match</span>
                        <span className="font-medium">{roommate.compatibilityScore}%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full">
                        <div 
                          className={`h-full rounded-full ${
                            roommate.compatibilityScore >= 80 ? "bg-green-500" : 
                            roommate.compatibilityScore >= 60 ? "bg-amber-500" : "bg-red-500"
                          }`}
                          style={{ width: `${roommate.compatibilityScore}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Lifestyle</span>
                        <span className="font-medium">{Math.floor(roommate.compatibilityScore * 0.9)}%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full">
                        <div 
                          className="h-full bg-blue-500 rounded-full"
                          style={{ width: `${Math.floor(roommate.compatibilityScore * 0.9)}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Location</span>
                        <span className="font-medium">{Math.floor(roommate.compatibilityScore * 1.1)}%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full">
                        <div 
                          className="h-full bg-purple-500 rounded-full"
                          style={{ width: `${Math.min(100, Math.floor(roommate.compatibilityScore * 1.1))}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RoommateDetail;
