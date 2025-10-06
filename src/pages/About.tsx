import { Card } from "@/components/ui/card";
import { Shield, Target, Users, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "We believe in building trust through transparent AI detection methods and clear communication."
    },
    {
      icon: Target,
      title: "Accuracy First",
      description: "Our commitment to 99%+ accuracy ensures you can rely on PixelCheck for critical decisions."
    },
    {
      icon: Users,
      title: "Accessible to All",
      description: "Advanced technology should be simple to use. We make AI detection available to everyone."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuously improving our models to stay ahead of evolving AI generation techniques."
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                About PixelCheck
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We're on a mission to restore trust in digital media by making AI image detection 
                accessible, accurate, and easy to use for everyone.
              </p>
            </div>

            {/* Mission Statement */}
            <Card className="p-8 md:p-12 mb-12 bg-gradient-to-br from-card to-primary/5 border-primary/20">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  In an era where AI-generated images are becoming indistinguishable from reality, 
                  PixelCheck provides the tools needed to verify authenticity. We combine cutting-edge 
                  machine learning with intuitive design to empower individuals, journalists, and 
                  organizations to make informed decisions about digital content.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded by a team of AI researchers and software engineers, PixelCheck was born 
                  from the recognition that misinformation spreads faster than verification. Our 
                  advanced detection models are trained on millions of images and continuously updated 
                  to identify the latest AI generation techniques.
                </p>
              </div>
            </Card>

            {/* Core Values */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Core Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <Card key={index} className="p-6 hover:shadow-md hover:border-primary/30 transition-all duration-300 border-border/50">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-sm flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold">{value.title}</h3>
                          <p className="text-muted-foreground">{value.description}</p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Team Note */}
            <div className="text-center">
              <Card className="inline-block p-6 bg-muted/50 border-border/50">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Join Our Mission:</span> We're always 
                  looking for talented individuals passionate about AI ethics and digital trust. 
                  Check our careers page for opportunities.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
