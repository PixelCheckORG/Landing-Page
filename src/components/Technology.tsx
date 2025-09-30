import { Card } from "@/components/ui/card";
import { Brain, Cpu, Database, Lock } from "lucide-react";

const Technology = () => {
  const techPoints = [
    {
      icon: Brain,
      title: "Advanced Machine Learning",
      description: "Neural networks trained on millions of real and AI-generated images for unmatched accuracy"
    },
    {
      icon: Cpu,
      title: "Multi-Layer Analysis",
      description: "Analyzes over 200 unique features including pixel patterns, compression artifacts, and noise distribution"
    },
    {
      icon: Database,
      title: "Comprehensive Detection",
      description: "Identifies images from major AI generators including DALL-E, Midjourney, Stable Diffusion, and more"
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "Your images are analyzed securely and never stored or used for training purposes"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powered by Cutting-Edge AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              PixelCheck leverages state-of-the-art machine learning technology to provide 
              reliable, accurate detection you can trust
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {techPoints.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <Card key={index} className="p-8 border-primary/20 hover:border-primary/40 hover:shadow-md transition-all duration-300 bg-card">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-sm">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <h3 className="text-xl font-semibold">{tech.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* ML Technology Details */}
          <Card className="p-8 bg-gradient-to-br from-card to-primary/10 border-primary/30 shadow-md">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Cpu className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our ML Detection Process</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="space-y-2">
                  <div className="font-semibold text-foreground">Pixel Analysis</div>
                  <p className="text-muted-foreground">
                    Examines micro-patterns and inconsistencies invisible to the human eye
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-foreground">Metadata Forensics</div>
                  <p className="text-muted-foreground">
                    Analyzes EXIF data, compression signatures, and file characteristics
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-foreground">Confidence Scoring</div>
                  <p className="text-muted-foreground">
                    Provides transparency with detailed probability breakdowns
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Technology;
