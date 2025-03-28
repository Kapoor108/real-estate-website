import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Heart, Share, MapPin, Phone, MessageSquare, ArrowLeft, Calendar, DollarSign, Home, Ruler, Bath } from "lucide-react";

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
    description: "This stunning modern loft features soaring ceilings, abundant natural light, and an open floor plan perfect for entertaining. The kitchen boasts stainless steel appliances, quartz countertops, and a breakfast bar. Located in the heart of downtown with easy access to restaurants, shopping, and public transportation.",
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
    description: "Charming garden-level apartment with a private patio and access to a shared backyard. Features hardwood floors throughout, updated kitchen, and in-unit laundry. Located in a quiet, tree-lined neighborhood near parks, cafes, and shops.",
    images: [
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519643381401-22c77e60520e?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539922631499-20552e9df145?w=800&auto=format&fit=crop"
    ]
  },
];

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const foundProperty = properties.find(p => p.id === id);
    setProperty(foundProperty);
    setLoading(false);
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">Loading property details...</div>
      </div>
    );
  }
  
  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Property Not Found</h2>
            <p className="mb-6 text-muted-foreground">The property you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/properties">Back to Properties</Link>
            </Button>
          </div>
        </main>
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
              <Link to="/properties">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Properties
              </Link>
            </Button>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold">{property.title}</h1>
                <div className="flex items-center text-muted-foreground mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{property.location}</span>
                </div>
              </div>
              <div className="text-2xl font-semibold">{property.price}</div>
            </div>
          </div>
          
          <div className="mb-8">
            <Carousel className="w-full">
              <CarouselContent>
                {property.images.map((image: string, index: number) => (
                  <CarouselItem key={index} className="basis-full md:basis-4/5 lg:basis-2/3">
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-xl">
                      <img 
                        src={image} 
                        alt={`${property.title} - image ${index + 1}`} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Property Details</h2>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    <div className="flex flex-col items-center p-3 bg-accent rounded-lg">
                      <Home className="h-5 w-5 mb-2 text-primary" />
                      <span className="text-sm text-muted-foreground">Bedrooms</span>
                      <span className="font-medium">{property.bedrooms}</span>
                    </div>
                    <div className="flex flex-col items-center p-3 bg-accent rounded-lg">
                      <Bath className="h-5 w-5 mb-2 text-primary" />
                      <span className="text-sm text-muted-foreground">Bathrooms</span>
                      <span className="font-medium">{property.bathrooms}</span>
                    </div>
                    <div className="flex flex-col items-center p-3 bg-accent rounded-lg">
                      <Ruler className="h-5 w-5 mb-2 text-primary" />
                      <span className="text-sm text-muted-foreground">Area</span>
                      <span className="font-medium">{property.squareFeet} sq ft</span>
                    </div>
                    <div className="flex flex-col items-center p-3 bg-accent rounded-lg">
                      <Calendar className="h-5 w-5 mb-2 text-primary" />
                      <span className="text-sm text-muted-foreground">Available</span>
                      <span className="font-medium">{property.availableDate}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-medium mb-2">Description</h3>
                  <p className="text-muted-foreground mb-6">{property.description}</p>
                  
                  <h3 className="font-medium mb-2">Amenities</h3>
                  <div className="flex flex-wrap gap-2">
                    {property.amenities.map((amenity: string, index: number) => (
                      <Badge key={index} variant="outline">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {property.potentialRoommates > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Potential Roommates</h2>
                    <div className="flex items-center mb-4">
                      <div className="flex -space-x-2 mr-3">
                        {Array.from({ length: Math.min(property.potentialRoommates, 4) }).map((_, i) => (
                          <div 
                            key={i}
                            className="h-10 w-10 rounded-full bg-accent border-2 border-background flex items-center justify-center"
                          >
                            <span className="text-xs font-medium">R</span>
                          </div>
                        ))}
                      </div>
                      <span className="text-muted-foreground">
                        {property.potentialRoommates} {property.potentialRoommates === 1 ? 'person' : 'people'} interested in sharing this property
                      </span>
                    </div>
                    <Button className="w-full">View Compatible Roommates</Button>
                  </CardContent>
                </Card>
              )}
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Interested in this property?</h3>
                  <div className="space-y-3">
                    <Button className="w-full">
                      <Phone className="mr-2 h-4 w-4" />
                      Contact Landlord
                    </Button>
                    <Button variant="outline" className="w-full">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                    <Button variant="secondary" className="w-full">
                      Schedule Tour
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1">
                  <Heart className="mr-2 h-4 w-4" />
                  Save
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Property Location</h3>
                  <div className="aspect-video rounded-lg bg-muted/50 flex items-center justify-center mb-3">
                    <MapPin className="h-6 w-6 text-muted-foreground" />
                    <span className="ml-2 text-muted-foreground">Map view</span>
                  </div>
                  <Button variant="outline" className="w-full">
                    <MapPin className="mr-2 h-4 w-4" />
                    View on Map
                  </Button>
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

export default PropertyDetail;
