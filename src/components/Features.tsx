
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "AI-Powered Matching",
    description: "Our sophisticated algorithm analyzes lifestyle preferences, habits, and personalities to find your ideal roommate match.",
    icon: "🧠",
  },
  {
    title: "Integrated Rental Search",
    description: "Browse properties that match both your and your potential roommate's preferences in one seamless experience.",
    icon: "🏠",
  },
  {
    title: "Secure Messaging",
    description: "Connect with potential roommates and property managers through our secure, encrypted messaging platform.",
    icon: "💬",
  },
  {
    title: "Virtual Tours",
    description: "Explore properties remotely with high-quality virtual tours before scheduling in-person visits.",
    icon: "🔍",
  },
  {
    title: "Verified Profiles",
    description: "All users undergo a verification process to ensure safety and transparency within our community.",
    icon: "✅",
  },
  {
    title: "Lease Automation",
    description: "Streamline the rental process with digital applications, agreements, and payments.",
    icon: "📝",
  }
];

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-accent/50"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <h2 
            className={cn(
              "text-3xl font-bold mb-4 transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            The Perfect Roommate & Home Finding Experience
          </h2>
          <p 
            className={cn(
              "text-lg text-muted-foreground transition-all duration-700 delay-100",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            RoomMatchr combines cutting-edge technology with a human-centered approach to create the most efficient and enjoyable roommate and rental finding experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div 
            className={cn(
              "relative aspect-square max-w-lg mx-auto md:ml-auto transition-all duration-700 delay-200",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-70 animate-pulse-subtle"></div>
            <div className="relative glass-card h-full w-full rounded-3xl p-1">
              <div className="bg-background/90 h-full w-full rounded-[calc(1.5rem-4px)] flex items-center justify-center overflow-hidden">
                <div className="text-6xl animate-scale-in">{features[activeFeature].icon}</div>
              </div>
            </div>
            
            {/* Feature indicators */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === activeFeature 
                      ? "bg-primary w-8" 
                      : "bg-primary/30 hover:bg-primary/50"
                  )}
                  aria-label={`View feature ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div 
            className={cn(
              "space-y-10 transition-all duration-700 delay-300",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {features.map((feature, index) => (
              <div 
                key={index}
                className={cn(
                  "p-6 rounded-xl transition-all duration-500",
                  index === activeFeature
                    ? "bg-background shadow-lg scale-105"
                    : "hover:bg-background/50 cursor-pointer"
                )}
                onClick={() => setActiveFeature(index)}
              >
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <span className="mr-2">{feature.icon}</span> {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
