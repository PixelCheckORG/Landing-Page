import { Upload, Brain, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Image",
      description: "Simply drag and drop or select any image file. We support all common formats including JPEG, PNG, and WEBP.",
      step: "01"
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Our advanced machine learning models analyze pixel patterns, noise distribution, and metadata in milliseconds.",
      step: "02"
    },
    {
      icon: CheckCircle2,
      title: "Get Results",
      description: "Receive a clear verdict with confidence scores. See detailed technical analysis if you need more information.",
      step: "03"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How PixelCheck Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to verify any image's authenticity with cutting-edge AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30" />
                  )}
                  
                  <Card className="relative p-8 space-y-6 hover:shadow-lg transition-all duration-300 border-primary/20 bg-gradient-to-br from-card to-muted/30">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold shadow-md">
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div className="pt-4">
                      <div className="inline-flex p-4 rounded-2xl bg-primary/10">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Technical Detail */}
          <div className="mt-16 text-center">
            <Card className="inline-block p-6 bg-muted/50 border-border/50">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Technical Note:</span> Our ML models analyze over 200 unique features 
                including compression artifacts, noise patterns, and spectral inconsistencies to provide accurate detection.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
