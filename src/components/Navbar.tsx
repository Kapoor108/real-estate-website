import { useState, useEffect, lazy, Suspense } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
// Lazy load icons
const Home = lazy(() => import('lucide-react').then(mod => ({ default: mod.Home })));
const Users = lazy(() => import('lucide-react').then(mod => ({ default: mod.Users })));
const Search = lazy(() => import('lucide-react').then(mod => ({ default: mod.Search })));
const MessageSquare = lazy(() => import('lucide-react').then(mod => ({ default: mod.MessageSquare })));
const Bot = lazy(() => import('lucide-react').then(mod => ({ default: mod.Bot })));
const Mail = lazy(() => import('lucide-react').then(mod => ({ default: mod.Mail })));

// Memoize nav items to prevent unnecessary re-renders
const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Roommates", path: "/roommates", icon: Users },
  { name: "Properties", path: "/properties", icon: Search },
  { name: "Messages", path: "/messages", icon: MessageSquare },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Use passive event listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleContactClick = () => {
    window.location.href = "mailto:support@roommatchr.com?subject=Contact%20RoomMatchr";
  };

  const openAIChat = () => {
    window.open("https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/03/28/01/20250328011402-0CENE9B7.json", "_blank");
  };

  // Render icon with Suspense
  const renderIcon = (Icon: any) => (
    <Suspense fallback={<div className="w-4 h-4 mr-2" />}>
      <Icon className="h-4 w-4 mr-2" />
    </Suspense>
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-smooth will-change-transform",
        scrolled 
          ? "glass-nav py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-semibold tracking-tight transition-opacity hover:opacity-80"
        >
          RoomMatchr
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-all",
                location.pathname === item.path
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/80 hover:text-foreground hover:bg-accent"
              )}
            >
              <span className="flex items-center">
                {renderIcon(item.icon)}
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="transition-all hover:scale-105"
            onClick={handleContactClick}
          >
            {renderIcon(Mail)}
            Contact Us
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            className="transition-all hover:scale-105"
            onClick={openAIChat}
          >
            {renderIcon(Bot)}
            Ask AI Assistant
          </Button>
          
          <Link to="/profile">
            <Button variant="ghost" size="sm" className="rounded-full h-9 w-9 p-0">
              <span className="sr-only">Profile</span>
              <div className="h-7 w-7 rounded-full bg-accent flex items-center justify-center">
                <span className="text-xs font-medium">JD</span>
              </div>
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border z-50">
        <div className="grid grid-cols-5 gap-1 p-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center py-2 px-1 rounded-md text-xs transition-colors",
                location.pathname === item.path
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              )}
            >
              <span className="mb-1">{renderIcon(item.icon)}</span>
              <span>{item.name}</span>
            </Link>
          ))}
          <button
            onClick={handleContactClick}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-md text-xs transition-colors text-muted-foreground"
          >
            {renderIcon(Mail)}
            <span>Contact</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
