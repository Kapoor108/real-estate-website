import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Search, SlidersHorizontal, X, MapPin } from "lucide-react";

// Sample data
const properties = [
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
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&auto=format&fit=crop"
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
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519643381401-22c77e60520e?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539922631499-20552e9df145?w=800&auto=format&fit=crop"
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
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "p4",
    title: "Luxury Downtown Condo",
    location: "Downtown, Financial District",
    price: "$2,200/month",
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1350,
    amenities: ["Doorman", "Elevator", "Fitness Center", "Concierge", "Pool"],
    availableDate: "May 1",
    potentialRoommates: 2,
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "p5",
    title: "Cozy Midtown Apartment",
    location: "Midtown, Theater District",
    price: "$1,500/month",
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 850,
    amenities: ["Recently Renovated", "Hardwood Floors", "Elevator", "Laundry"],
    availableDate: "June 15",
    potentialRoommates: 1,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "p6",
    title: "Bright Corner Townhouse",
    location: "Eastside, University Area",
    price: "$1,900/month",
    bedrooms: 3,
    bathrooms: 1.5,
    squareFeet: 1400,
    amenities: ["Private Yard", "Fireplace", "Basement", "Garage", "Deck"],
    availableDate: "May 30",
    potentialRoommates: 4,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "p7",
    title: "Industrial Loft Conversion",
    location: "Westside, Art District",
    price: "$1,750/month",
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 1000,
    amenities: ["High Ceilings", "Exposed Brick", "Large Windows", "Freight Elevator"],
    availableDate: "April 15",
    potentialRoommates: 2,
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "p8",
    title: "Charming Brownstone Apartment",
    location: "Southside, Historic District",
    price: "$1,850/month",
    bedrooms: 2,
    bathrooms: 1,
    squareFeet: 1050,
    amenities: ["Original Details", "Bay Windows", "Backyard Access", "Storage"],
    availableDate: "June 1",
    potentialRoommates: 3,
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&auto=format&fit=crop"
    ]
  },
];

// Extract all unique amenities
const allAmenities = Array.from(
  new Set(properties.flatMap(property => property.amenities))
).sort();

// Extract all unique locations
const allDistricts = Array.from(
  new Set(properties.map(property => {
    return property.location.split(', ')[0];
  }))
).sort();

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minBedrooms, setMinBedrooms] = useState(0);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");
  
  // Filter properties based on search and filters
  const filteredProperties = properties.filter(property => {
    // Filter by search term
    const matchesSearch = 
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by bedrooms
    const matchesBedrooms = property.bedrooms >= minBedrooms;
    
    // Filter by amenities (if any selected)
    const matchesAmenities = 
      selectedAmenities.length === 0 || 
      selectedAmenities.every(amenity => property.amenities.includes(amenity));
    
    // Filter by district (if any selected)
    const district = property.location.split(', ')[0];
    const matchesDistrict = 
      selectedDistricts.length === 0 || 
      selectedDistricts.includes(district);
    
    return matchesSearch && matchesBedrooms && matchesAmenities && matchesDistrict;
  });
  
  // Toggle amenity selection
  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities(prev =>
      prev.includes(amenity)
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    );
  };
  
  // Toggle district selection
  const toggleDistrict = (district: string) => {
    setSelectedDistricts(prev =>
      prev.includes(district)
        ? prev.filter(d => d !== district)
        : [...prev, district]
    );
  };
  
  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setMinBedrooms(0);
    setSelectedAmenities([]);
    setSelectedDistricts([]);
  };
  
  const hasActiveFilters = 
    searchTerm !== "" || 
    minBedrooms > 0 || 
    selectedAmenities.length > 0 || 
    selectedDistricts.length > 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-3">Find Your Perfect Rental</h1>
            <p className="text-lg text-muted-foreground">Browse available properties and connect with potential roommates</p>
          </div>
          
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search by title, location, or amenities..."
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
              
              <Button 
                variant={viewMode === "map" ? "default" : "outline"}
                onClick={() => setViewMode(viewMode === "grid" ? "map" : "grid")}
                className="md:w-auto w-full"
              >
                <MapPin className="h-4 w-4 mr-2" />
                {viewMode === "grid" ? "Map View" : "Grid View"}
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
                    <h3 className="text-sm font-medium mb-3">Bedrooms</h3>
                    <div className="space-y-4">
                      <Slider
                        value={[minBedrooms]}
                        onValueChange={(value) => setMinBedrooms(value[0])}
                        max={4}
                        step={1}
                      />
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Min: {minBedrooms} {minBedrooms === 1 ? 'Bedroom' : 'Bedrooms'}</span>
                        <Badge variant="outline">{minBedrooms === 0 ? 'Any' : `${minBedrooms}+`}</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-3">Location</h3>
                    <div className="flex flex-wrap gap-2">
                      {allDistricts.map(district => (
                        <Badge
                          key={district}
                          variant={selectedDistricts.includes(district) ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => toggleDistrict(district)}
                        >
                          {district}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h3 className="text-sm font-medium mb-3">Amenities</h3>
                    <div className="flex flex-wrap gap-2">
                      {allAmenities.map(amenity => (
                        <Badge
                          key={amenity}
                          variant={selectedAmenities.includes(amenity) ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => toggleAmenity(amenity)}
                        >
                          {amenity}
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
                {filteredProperties.length} {filteredProperties.length === 1 ? 'Property' : 'Properties'} Found
              </h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select className="text-sm bg-transparent border border-border rounded-md py-1 px-2 focus:outline-none focus:ring-1 focus:ring-primary">
                  <option value="price">Price: Low to High</option>
                  <option value="priceDesc">Price: High to Low</option>
                  <option value="date">Available Date</option>
                  <option value="roommates">Potential Roommates</option>
                </select>
              </div>
            </div>
            
            {viewMode === "grid" && filteredProperties.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties.map((property, index) => (
                  <PropertyCard
                    key={property.id}
                    {...property}
                    className="animate-fade-in opacity-0 [animation-fill-mode:forwards]"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  />
                ))}
              </div>
            ) : viewMode === "map" ? (
              <div className="rounded-xl overflow-hidden border border-border h-[500px] bg-muted/50 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-lg font-medium mb-2">Map View</p>
                  <p className="text-muted-foreground">Interactive map would be displayed here</p>
                </div>
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-lg text-muted-foreground mb-4">No properties match your search criteria</p>
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

export default Properties;
