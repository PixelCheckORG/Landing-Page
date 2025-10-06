import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, Search, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              404
            </h1>
          </div>

          {/* Error Message */}
          <Card className="p-8 md:p-12 border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Page Not Found
                </h2>
                <p className="text-lg text-muted-foreground">
                  Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" className="group">
                  <Link to="/">
                    <Home className="w-5 h-5" />
                    Back to Home
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="group">
                  <Link to="/contact">
                    <Search className="w-5 h-5" />
                    Contact Support
                  </Link>
                </Button>
              </div>
            </div>
          </Card>

          {/* Helpful Links */}
          <div className="mt-12">
            <p className="text-sm text-muted-foreground mb-4">
              Here are some helpful links instead:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/" className="text-primary hover:underline">
                Home
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/about" className="text-primary hover:underline">
                About Us
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/contact" className="text-primary hover:underline">
                Contact
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
