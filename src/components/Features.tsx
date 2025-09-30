import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, Shield, BarChart3, FileStack, 
  Download, Clock, Users, Sparkles 
} from "lucide-react";
import featureAI from "@/assets/feature-ai.png";
import featureSpeed from "@/assets/feature-speed.png";
import featureSecure from "@/assets/feature-secure.png";

const Features = () => {
  const generalFeatures = [
    {
      icon: Zap,
      title: "Instant Verification",
      description: "Get results in under 10 seconds with simple yes/no answers",
      image: featureSpeed
    },
    {
      icon: Shield,
      title: "High Accuracy",
      description: "99.2% detection rate powered by advanced ML algorithms",
      image: featureSecure
    },
    {
      icon: Users,
      title: "No Expertise Needed",
      description: "Intuitive interface designed for everyone, no technical knowledge required",
      image: featureAI
    },
    {
      icon: Clock,
      title: "Recent Analysis History",
      description: "Access your last 5 analyzed images for quick reference"
    }
  ];

  const professionalFeatures = [
    {
      icon: BarChart3,
      title: "Detailed Technical Analysis",
      description: "Access comprehensive breakdowns of all detection features and confidence scores"
    },
    {
      icon: FileStack,
      title: "Batch Processing",
      description: "Analyze multiple images simultaneously to optimize your workflow"
    },
    {
      icon: Download,
      title: "Professional Reports",
      description: "Generate exportable PDF reports with complete analysis details"
    },
    {
      icon: Sparkles,
      title: "Metadata Extraction",
      description: "Full EXIF data analysis including camera info, dates, and file origin"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Features for Everyone
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're casually checking social media or professionally verifying content, 
              we have the tools you need
            </p>
          </div>

          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="general" className="text-base">
                For Everyone
              </TabsTrigger>
              <TabsTrigger value="professional" className="text-base">
                For Professionals
              </TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="space-y-8">
              <div className="text-center mb-8">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  Perfect for Social Media Users & General Public
                </Badge>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {generalFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className="p-6 hover:shadow-md hover:border-primary/30 transition-all duration-300 border-border/50">
                      <div className="flex items-start gap-4">
                        {feature.image ? (
                          <img src={feature.image} alt={feature.title} className="w-12 h-12" />
                        ) : (
                          <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                        )}
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="professional" className="space-y-8">
              <div className="text-center mb-8">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  Designed for Media Professionals & Content Creators
                </Badge>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {professionalFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className="p-6 hover:shadow-md hover:border-primary/30 transition-all duration-300 border-border/50 bg-gradient-to-br from-card to-primary/5">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Features;
