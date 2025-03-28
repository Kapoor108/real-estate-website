
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { MessageSquare, MapPin, Calendar, DollarSign, Edit, Heart, Home, Settings } from "lucide-react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  
  // User profile data
  const userProfile = {
    name: "Jamie Smith",
    age: 28,
    occupation: "UX Designer",
    location: "Downtown",
    moveInDate: "May, 2024",
    budget: "$1,200 - $1,700",
    bio: "Hi there! I'm a UX designer looking for a place downtown. I'm clean, respectful, and social but also value quiet time. I enjoy cooking, hiking, and board games.",
    interests: ["Design", "Hiking", "Cooking", "Photography", "Board Games", "Reading"],
    lookingFor: ["Clean", "Pet-friendly", "Close to transit", "Furnished", "Utilities included"],
    compatibilityScore: 85,
  };
  
  const savedRoommates = [
    {
      id: "r1",
      name: "Alex Johnson",
      location: "Downtown",
      compatibilityScore: 92,
    },
    {
      id: "r2",
      name: "Taylor Rodriguez",
      location: "Westside",
      compatibilityScore: 87,
    },
  ];
  
  const savedProperties = [
    {
      id: "p1",
      title: "Modern Loft Apartment",
      location: "Downtown",
      price: "$1,850/month",
      bedrooms: 2,
    },
    {
      id: "p2",
      title: "Spacious Garden Apartment",
      location: "Westside",
      price: "$1,650/month",
      bedrooms: 2,
    },
  ];
  
  const messages = [
    {
      id: "m1",
      from: "Alex Johnson",
      message: "Hi Jamie! I saw that we have a high compatibility score. Would you be interested in discussing potential roommate opportunities?",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: "m2",
      from: "Westside Properties",
      message: "Thank you for your interest in our Garden Apartment. We've scheduled your virtual tour for tomorrow at 3 PM.",
      time: "1 day ago",
      unread: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Profile Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-background rounded-xl border border-border p-6 animate-fade-in">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-semibold text-primary mb-4">
                      {userProfile.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h2 className="text-xl font-semibold">{userProfile.name}</h2>
                    <p className="text-sm text-muted-foreground">{userProfile.occupation}, {userProfile.age}</p>
                    
                    <div className="mt-3 flex items-center">
                      <Badge className="flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-green-400"></span>
                        <span>{userProfile.compatibilityScore}% Match Rating</span>
                      </Badge>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 mr-2" />
                      <div>
                        <p className="text-sm font-medium">Location</p>
                        <p className="text-sm text-muted-foreground">{userProfile.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Calendar className="h-4 w-4 text-muted-foreground mt-0.5 mr-2" />
                      <div>
                        <p className="text-sm font-medium">Move-in Date</p>
                        <p className="text-sm text-muted-foreground">{userProfile.moveInDate}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <DollarSign className="h-4 w-4 text-muted-foreground mt-0.5 mr-2" />
                      <div>
                        <p className="text-sm font-medium">Budget</p>
                        <p className="text-sm text-muted-foreground">{userProfile.budget}</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full mt-6"
                    onClick={() => setActiveTab("settings")}
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
                
                <div className="bg-background rounded-xl border border-border overflow-hidden animate-fade-in [animation-delay:100ms] [animation-fill-mode:forwards] opacity-0">
                  <div className="divide-y divide-border">
                    <Button 
                      variant="ghost" 
                      className={`w-full justify-start rounded-none px-4 py-2.5 h-auto text-sm ${activeTab === "profile" ? "bg-accent" : ""}`}
                      onClick={() => setActiveTab("profile")}
                    >
                      <Home className="h-4 w-4 mr-2.5" />
                      Profile
                    </Button>
                    <Button 
                      variant="ghost" 
                      className={`w-full justify-start rounded-none px-4 py-2.5 h-auto text-sm ${activeTab === "saved" ? "bg-accent" : ""}`}
                      onClick={() => setActiveTab("saved")}
                    >
                      <Heart className="h-4 w-4 mr-2.5" />
                      Saved
                    </Button>
                    <Button 
                      variant="ghost" 
                      className={`w-full justify-start rounded-none px-4 py-2.5 h-auto text-sm ${activeTab === "messages" ? "bg-accent" : ""}`}
                      onClick={() => setActiveTab("messages")}
                    >
                      <MessageSquare className="h-4 w-4 mr-2.5" />
                      Messages
                      {messages.some(m => m.unread) && (
                        <span className="ml-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                          {messages.filter(m => m.unread).length}
                        </span>
                      )}
                    </Button>
                    <Button 
                      variant="ghost" 
                      className={`w-full justify-start rounded-none px-4 py-2.5 h-auto text-sm ${activeTab === "settings" ? "bg-accent" : ""}`}
                      onClick={() => setActiveTab("settings")}
                    >
                      <Settings className="h-4 w-4 mr-2.5" />
                      Settings
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content Area */}
            <div className="lg:col-span-3">
              <div className="animate-fade-in">
                {activeTab === "profile" && (
                  <div className="space-y-6">
                    <div className="bg-background rounded-xl border border-border p-6">
                      <h3 className="text-lg font-medium mb-3">About Me</h3>
                      <p className="text-muted-foreground">{userProfile.bio}</p>
                      
                      <div className="mt-6">
                        <h4 className="text-sm font-medium mb-2">Interests</h4>
                        <div className="flex flex-wrap gap-2">
                          {userProfile.interests.map(interest => (
                            <Badge key={interest} variant="secondary">{interest}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-background rounded-xl border border-border p-6">
                      <h3 className="text-lg font-medium mb-3">What I'm Looking For</h3>
                      <div className="flex flex-wrap gap-2">
                        {userProfile.lookingFor.map(item => (
                          <Badge key={item} variant="outline">{item}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-background rounded-xl border border-border p-6">
                      <h3 className="text-lg font-medium mb-3">Compatibility Preferences</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-sm">Cleanliness</span>
                          <div className="flex space-x-1">
                            {[1, 2, 3, 4, 5].map(n => (
                              <div
                                key={n}
                                className={`w-6 h-2 rounded-full ${n <= 4 ? "bg-primary" : "bg-muted"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Socializing</span>
                          <div className="flex space-x-1">
                            {[1, 2, 3, 4, 5].map(n => (
                              <div
                                key={n}
                                className={`w-6 h-2 rounded-full ${n <= 3 ? "bg-primary" : "bg-muted"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Guests</span>
                          <div className="flex space-x-1">
                            {[1, 2, 3, 4, 5].map(n => (
                              <div
                                key={n}
                                className={`w-6 h-2 rounded-full ${n <= 3 ? "bg-primary" : "bg-muted"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Noise Level</span>
                          <div className="flex space-x-1">
                            {[1, 2, 3, 4, 5].map(n => (
                              <div
                                key={n}
                                className={`w-6 h-2 rounded-full ${n <= 2 ? "bg-primary" : "bg-muted"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Morning Person</span>
                          <div className="flex space-x-1">
                            {[1, 2, 3, 4, 5].map(n => (
                              <div
                                key={n}
                                className={`w-6 h-2 rounded-full ${n <= 4 ? "bg-primary" : "bg-muted"}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === "saved" && (
                  <div className="space-y-6">
                    <div className="bg-background rounded-xl border border-border p-6">
                      <Tabs defaultValue="roommates">
                        <TabsList className="mb-6">
                          <TabsTrigger value="roommates">Roommates</TabsTrigger>
                          <TabsTrigger value="properties">Properties</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="roommates">
                          {savedRoommates.length > 0 ? (
                            <div className="divide-y divide-border">
                              {savedRoommates.map((roommate) => (
                                <div key={roommate.id} className="py-4 first:pt-0 last:pb-0">
                                  <div className="flex justify-between items-center">
                                    <div className="flex items-center">
                                      <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center mr-3">
                                        {roommate.name.split(' ').map(n => n[0]).join('')}
                                      </div>
                                      <div>
                                        <Link to={`/roommates/${roommate.id}`} className="font-medium hover:underline">
                                          {roommate.name}
                                        </Link>
                                        <p className="text-sm text-muted-foreground">{roommate.location}</p>
                                      </div>
                                    </div>
                                    <Badge variant="outline">{roommate.compatibilityScore}% Match</Badge>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="text-center py-8">
                              <p className="text-muted-foreground mb-4">You haven't saved any roommates yet</p>
                              <Button asChild>
                                <Link to="/roommates">Browse Roommates</Link>
                              </Button>
                            </div>
                          )}
                        </TabsContent>
                        
                        <TabsContent value="properties">
                          {savedProperties.length > 0 ? (
                            <div className="divide-y divide-border">
                              {savedProperties.map((property) => (
                                <div key={property.id} className="py-4 first:pt-0 last:pb-0">
                                  <div className="flex justify-between items-center">
                                    <div>
                                      <Link to={`/properties/${property.id}`} className="font-medium hover:underline">
                                        {property.title}
                                      </Link>
                                      <p className="text-sm text-muted-foreground">
                                        {property.location} • {property.bedrooms} {property.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}
                                      </p>
                                    </div>
                                    <Badge>{property.price}</Badge>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="text-center py-8">
                              <p className="text-muted-foreground mb-4">You haven't saved any properties yet</p>
                              <Button asChild>
                                <Link to="/properties">Browse Properties</Link>
                              </Button>
                            </div>
                          )}
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                )}
                
                {activeTab === "messages" && (
                  <div className="bg-background rounded-xl border border-border overflow-hidden">
                    {messages.length > 0 ? (
                      <div>
                        {messages.map((message, index) => (
                          <div 
                            key={message.id}
                            className={`p-4 flex gap-4 hover:bg-accent/40 transition-colors ${message.unread ? 'bg-accent/20' : ''} ${index !== messages.length - 1 ? 'border-b border-border' : ''}`}
                          >
                            <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                              {message.from.split(' ')[0][0]}
                            </div>
                            <div className="flex-grow">
                              <div className="flex justify-between">
                                <h4 className="font-medium">{message.from}</h4>
                                <span className="text-xs text-muted-foreground">{message.time}</span>
                              </div>
                              <p className="text-sm text-muted-foreground truncate">{message.message}</p>
                              <Button variant="link" size="sm" className="p-0 h-auto text-primary">View Conversation</Button>
                            </div>
                            {message.unread && (
                              <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-lg font-medium mb-1">No messages yet</p>
                        <p className="text-muted-foreground mb-6">Connect with roommates to start chatting</p>
                        <Button asChild>
                          <Link to="/roommates">Find Roommates</Link>
                        </Button>
                      </div>
                    )}
                  </div>
                )}
                
                {activeTab === "settings" && (
                  <div className="bg-background rounded-xl border border-border p-6">
                    <h3 className="text-lg font-medium mb-6">Account Settings</h3>
                    <p className="text-muted-foreground mb-4">Settings content would go here, including profile editing options, notification preferences, etc.</p>
                    <Button variant="outline">Save Changes</Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
