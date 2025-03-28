import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import RoommateCard from "@/components/RoommateCard";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Sample data
const featuredRoommates = [
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
  }
];

const featuredProperties = [
  {
    id: "p1",
    title: "Modern Loft Apartment",
    location: "Downtown, Central District",
    price: "$1,850/month",
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1200,
    amenities: ["In-unit Laundry", "Dishwasher", "Central AC", "Gym", "Rooftop"],
    availableDate: "May 15",
    potentialRoommates: 5,
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "p2",
    title: "Spacious Garden Apartment",
    location: "Westside, Park District",
    price: "$1,650/month",
    bedrooms: 2,
    bathrooms: 1,
    squareFeet: 1100,
    amenities: ["Patio", "Hardwood Floors", "Pet Friendly", "Parking"],
    availableDate: "April 30",
    potentialRoommates: 3,
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "p3",
    title: "Renovated Vintage Studio",
    location: "Northside, Lake District",
    price: "$1,200/month",
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 750,
    amenities: ["Stainless Appliances", "Walk-in Closet", "Smart Home", "Bike Storage"],
    availableDate: "June 1",
    potentialRoommates: 0,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&auto=format&fit=crop"
    ]
  }
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <Features />
        
        {/* Featured Roommates Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold">Featured Roommates</h2>
                <p className="text-muted-foreground mt-2">Discover potential roommates who match your lifestyle and preferences</p>
              </div>
              <Button 
                variant="outline" 
                className="mt-4 md:mt-0"
                asChild
              >
                <Link to="/roommates">Browse All Roommates</Link>
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredRoommates.map((roommate) => (
                <RoommateCard
                  key={roommate.id}
                  {...roommate}
                  className="animate-fade-in opacity-0 [animation-fill-mode:forwards]"
                  style={{
                    animationDelay: `${featuredRoommates.indexOf(roommate) * 100}ms`
                  }}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Properties Section */}
        <section className="py-20 bg-accent/50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold">Featured Properties</h2>
                <p className="text-muted-foreground mt-2">Browse our selection of premium rental properties</p>
              </div>
              <Button 
                variant="outline" 
                className="mt-4 md:mt-0"
                asChild
              >
                <Link to="/properties">Browse All Properties</Link>
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  {...property}
                  className="animate-fade-in opacity-0 [animation-fill-mode:forwards]"
                  style={{
                    animationDelay: `${featuredProperties.indexOf(property) * 100}ms`
                  }}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="animated-gradient absolute inset-0 -z-10 opacity-30"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Perfect Match?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of users who found their ideal roommates and homes through RoomMatchr.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg" 
                  className="transition-all hover:shadow-lg hover:scale-105"
                  asChild
                >
                  <Link to="/signup">Create Your Profile</Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="transition-all hover:shadow-md hover:scale-105"
                  asChild
                >
                  <Link to="/how-it-works">Learn How It Works</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
