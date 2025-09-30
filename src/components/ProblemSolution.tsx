import { AlertCircle, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const ProblemSolution = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Challenge of AI-Generated Content
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              In an era where AI can create photorealistic images, distinguishing truth from 
              fabrication has become critical for maintaining trust in digital media.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem */}
            <Card className="p-8 space-y-6 border-destructive/30 bg-gradient-to-br from-card to-destructive/5 hover:shadow-md transition-all">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-destructive/10">
                  <AlertCircle className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">The Problem</h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  "AI-generated images flood social media daily",
                  "Misinformation spreads faster than verification",
                  "Existing tools are complex and inaccessible",
                  "Trust in digital content is declining",
                  "Manual verification is time-consuming and unreliable"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Solution */}
            <Card className="p-8 space-y-6 border-success/30 bg-gradient-to-br from-card to-success/5 hover:shadow-md transition-all">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-success/10">
                  <CheckCircle className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Solution</h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Instant AI detection with 99%+ accuracy",
                  "Simple drag-and-drop interface for everyone",
                  "Detailed technical analysis for professionals",
                  "Comprehensive metadata examination",
                  "Real-time results in under 10 seconds"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
