import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Footer = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:support@roommatchr.com?subject=Contact%20RoomMatchr";
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="text-xl font-semibold tracking-tight">
              RoomMatchr
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Finding the perfect roommate and home shouldn't be stressful. Let us match you with the right people and places.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full h-8 w-8"
                asChild
              >
                <a href="https://twitter.com/roommatchr" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full h-8 w-8"
                asChild
              >
                <a href="https://instagram.com/roommatchr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full h-8 w-8"
                asChild
              >
                <a href="https://linkedin.com/company/roommatchr" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium text-sm mb-4">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link 
                    to="/about"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/careers"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/blog"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/press"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Press
                  </Link>
                </li>
                <li>
                  <button
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                    onClick={handleContactClick}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-sm mb-4">Resources</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link 
                    to="/roommate-guides"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Roommate Guides
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/rental-tips"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Rental Tips
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/safety"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Safety Center
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/faq"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-sm mb-4">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link 
                    to="/terms"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/privacy"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/cookies"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} RoomMatchr. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <select 
              className="text-sm bg-transparent border border-border rounded-md py-1 px-2 text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              defaultValue="en"
            >
              <option value="en">English (US)</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
