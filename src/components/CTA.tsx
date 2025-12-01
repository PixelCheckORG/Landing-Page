import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section id="get-started" className="py-24 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-95" />
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                Start Verifying Images Today
              </h2>
              
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                Join thousands of users who trust PixelCheck to verify image authenticity. 
                No credit card required. Start analyzing in seconds.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button
                    asChild
                    size="xl"
                    className="bg-background text-foreground hover:bg-background/90 shadow-xl group"
                >
                  <a
                      href="https://pixel-check-app.netlify.app/login"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    Get Started Free
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>


                <Button 
                  asChild
                  size="xl" 
                  variant="glass"
                  className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20"
                >
                  <Link to="/contact-sales">
                    <Mail className="w-5 h-5" />
                    Contact Sales
                  </Link>
                </Button>
              </div>

              {/* Trust Badge */}
              <div className="pt-8 text-sm text-primary-foreground/80">
                Trusted by media professionals and organizations worldwide
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
