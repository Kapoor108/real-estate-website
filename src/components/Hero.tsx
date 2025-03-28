
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="animated-gradient absolute inset-0 -z-10 opacity-50"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTYgMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bS0xNi0xNmMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtMC0xNmMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0wIDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNE0yMCAyMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTQiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className={cn(
              "space-y-6 transition-all duration-700 ease-out",
              loaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            )}
          >
            <div className="inline-block animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-accent text-accent-foreground">
                Find your perfect roommate & home
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
              Discover Your <span className="text-primary">Perfect</span> Living Match
            </h1>
            
            <p className="text-lg text-muted-foreground md:text-xl max-w-xl animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
              RoomMatchr uses AI to connect you with compatible roommates and ideal rental properties, all in one seamless experience.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
              <Button 
                size="lg" 
                className="transition-all hover:shadow-lg hover:scale-105"
                asChild
              >
                <Link to="/roommates">Find Roommates</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="transition-all hover:shadow-md hover:scale-105"
                asChild
              >
                <Link to="/properties">Browse Properties</Link>
              </Button>
            </div>
            
            <div className="pt-8 animate-fade-in opacity-0 [animation-delay:1000ms] [animation-fill-mode:forwards]">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className="h-10 w-10 rounded-full bg-accent border-2 border-background flex items-center justify-center overflow-hidden"
                    >
                      <img 
                        src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`} 
                        alt={`User ${i}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-medium">Join 2,000+ users</p>
                  <p className="text-muted-foreground">who found their perfect match</p>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className={cn(
              "relative transition-all duration-700 ease-out",
              loaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0",
              "[animation-delay:300ms]"
            )}
          >
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-70"></div>
            <div className="relative glass-card rounded-3xl p-1 shadow-2xl">
              <div className="bg-background/80 backdrop-blur-sm rounded-[calc(1.5rem-4px)] overflow-hidden">
                <div className="aspect-[4/3] w-full rounded-t-[calc(1.5rem-4px)] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop" 
                    alt="Modern Apartment"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">Modern Apartment</h3>
                      <p className="text-muted-foreground">Downtown, 2 rooms</p>
                    </div>
                    <span className="text-lg font-bold">$1,250/mo</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="flex -space-x-2">
                      {[1, 2].map((i) => (
                        <div 
                          key={i}
                          className="h-8 w-8 rounded-full bg-accent border-2 border-background flex items-center justify-center overflow-hidden"
                        >
                          <img 
                            src={`https://randomuser.me/api/portraits/women/${20 + i}.jpg`}
                            alt={`Potential roommate ${i}`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">2 potential roommates</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <Button 
                      variant="secondary" 
                      size="sm"
                      asChild
                    >
                      <Link to="/properties/p1">View Details</Link>
                    </Button>
                    <Button size="sm">Connect</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
