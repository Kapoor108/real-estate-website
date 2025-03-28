
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoommateCard from "@/components/RoommateCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Search, SlidersHorizontal, X } from "lucide-react";

// Sample data for roommates
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
  },
  {
    id: "r4",
    name: "Morgan Lee",
    age: 27,
    occupation: "Teacher",
    location: "Eastside",
    compatibilityScore: 85,
    interests: ["Music", "Yoga", "Cooking"],
    moveInDate: "May 15, 2024",
    budget: "$900 - $1,300",
  },
  {
    id: "r5",
    name: "Riley Wilson",
    age: 29,
    occupation: "Product Manager",
    location: "Downtown",
    compatibilityScore: 74,
    interests: ["Fitness", "Travel", "Technology"],
    moveInDate: "June 1, 2024",
    budget: "$1,200 - $1,700",
  },
  {
    id: "r6",
    name: "Casey Brown",
    age: 26,
    occupation: "Graphic Designer",
    location: "Northside",
    compatibilityScore: 90,
    interests: ["Art", "Movies", "Gaming"],
    moveInDate: "April 30, 2024",
    budget: "$1,100 - $1,600",
  },
  {
    id: "r7",
    name: "Jamie Garcia",
    age: 31,
    occupation: "Healthcare Professional",
    location: "Southside",
    compatibilityScore: 82,
    interests: ["Reading", "Hiking", "Cooking"],
    moveInDate: "May 15, 2024",
    budget: "$1,300 - $1,900",
  },
  {
    id: "r8",
    name: "Quinn Taylor",
    age: 24,
    occupation: "Data Analyst",
    location: "Westside",
    compatibilityScore: 76,
    interests: ["Tech", "Board Games", "Fitness"],
    moveInDate: "June 15, 2024",
    budget: "$1,000 - $1,500",
  },
];

// All available interests for filtering
const allInterests = Array.from(
  new Set(roommates.flatMap(roommate => roommate.interests))
).sort();

// All available locations for filtering
const allLocations = Array.from(
  new Set(roommates.map(roommate => roommate.location))
).sort();

const Roommates = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minCompatibility, setMinCompatibility] = useState(0);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter roommates based on search and filters
  const filteredRoommates = roommates.filter(roommate => {
    // Filter by search term
    const matchesSearch = 
      roommate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      roommate.occupation.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by compatibility score
    const matchesCompatibility = roommate.compatibilityScore >= minCompatibility;
    
    // Filter by interests (if any selected)
    const matchesInterests = 
      selectedInterests.length === 0 || 
      selectedInterests.some(interest => roommate.interests.includes(interest));
    
    // Filter by location (if any selected)
    const matchesLocation = 
      selectedLocations.length === 0 || 
      selectedLocations.includes(roommate.location);
    
    return matchesSearch && matchesCompatibility && matchesInterests && matchesLocation;
  });
  
  // Toggle interest selection
  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };
  
  // Toggle location selection
  const toggleLocation = (location: string) => {
    setSelectedLocations(prev =>
      prev.includes(location)
        ? prev.filter(l => l !== location)
        : [...prev, location]
    );
  };
  
  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setMinCompatibility(0);
    setSelectedInterests([]);
    setSelectedLocations([]);
  };
  
  const hasActiveFilters = 
    searchTerm !== "" || 
    minCompatibility > 0 || 
    selectedInterests.length > 0 || 
    selectedLocations.length > 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-3">Find Your Perfect Roommate</h1>
            <p className="text-lg text-muted-foreground">Browse potential roommates based on compatibility and shared interests</p>
          </div>
          
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search by name or occupation..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Button 
                variant={showFilters ? "default" : "outline"}
                onClick={() => setShowFilters(!showFilters)}
                className="md:w-auto w-full"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                {showFilters ? "Hide Filters" : "Show Filters"}
              </Button>
              
              {hasActiveFilters && (
                <Button 
                  variant="ghost"
                  onClick={clearFilters}
                  className="md:w-auto w-full"
                >
                  <X className="h-4 w-4 mr-2" />
                  Clear Filters
                </Button>
              )}
            </div>
            
            {/* Filter panel */}
            {showFilters && (
              <div className="mt-6 p-6 border border-border rounded-lg animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <h3 className="text-sm font-medium mb-3">Compatibility Score</h3>
                    <div className="space-y-4">
                      <Slider
                        value={[minCompatibility]}
                        onValueChange={(value) => setMinCompatibility(value[0])}
                        max={100}
                        step={5}
                      />
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Min: {minCompatibility}%</span>
                        <Badge variant="outline">{minCompatibility === 0 ? 'Any' : `${minCompatibility}%+`}</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-3">Location</h3>
                    <div className="flex flex-wrap gap-2">
                      {allLocations.map(location => (
                        <Badge
                          key={location}
                          variant={selectedLocations.includes(location) ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => toggleLocation(location)}
                        >
                          {location}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h3 className="text-sm font-medium mb-3">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {allInterests.map(interest => (
                        <Badge
                          key={interest}
                          variant={selectedInterests.includes(interest) ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => toggleInterest(interest)}
                        >
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Results section */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">
                {filteredRoommates.length} {filteredRoommates.length === 1 ? 'Roommate' : 'Roommates'} Found
              </h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select className="text-sm bg-transparent border border-border rounded-md py-1 px-2 focus:outline-none focus:ring-1 focus:ring-primary">
                  <option value="compatibility">Compatibility</option>
                  <option value="moveInDate">Move-in Date</option>
                  <option value="budget">Budget</option>
                </select>
              </div>
            </div>
            
            {filteredRoommates.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRoommates.map((roommate, index) => (
                  <RoommateCard
                    key={roommate.id}
                    {...roommate}
                    className="animate-fade-in opacity-0 [animation-fill-mode:forwards]"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-lg text-muted-foreground mb-4">No roommates match your search criteria</p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Roommates;
