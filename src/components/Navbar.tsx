import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Technology", href: "#technology" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // If we're not on the homepage, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const target = document.querySelector(href) as HTMLElement | null;
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      // We're already on homepage, just scroll
      const target = document.querySelector(href) as HTMLElement | null;
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleGetStartedClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleNavClick(e, "#get-started");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2" aria-label="PixelCheck Home">
          <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-secondary shadow-sm">
            <Shield className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg md:text-xl font-bold tracking-tight">PixelCheck</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Desktop CTA */}
          <Button asChild size="sm" className="hidden md:inline-flex">
            <a href="https://pixel-check-app.netlify.app/login" target="_blank" rel="noopener noreferrer">Get Started</a>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open navigation menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background/95 backdrop-blur border-border">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-secondary">
                  <Shield className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-bold">PixelCheck</span>
              </div>
              <nav className="grid gap-4 text-base font-medium">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-6">
                <Button asChild className="w-full">
                  <a href="https://pixel-check-app.netlify.app/login" target="_blank" rel="noopener noreferrer">Get Started</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;