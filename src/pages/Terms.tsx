import { Card } from "@/components/ui/card";
import { FileText, AlertCircle, CheckCircle, XCircle, Scale, Shield } from "lucide-react";

const Terms = () => {
  const sections = [
    {
      icon: CheckCircle,
      title: "Acceptance of Terms",
      content: [
        "By accessing or using PixelCheck, you agree to be bound by these Terms of Service",
        "If you do not agree to these terms, you may not use our service",
        "We reserve the right to modify these terms at any time with notice",
        "Continued use after changes constitutes acceptance of new terms"
      ]
    },
    {
      icon: FileText,
      title: "Service Description",
      content: [
        "PixelCheck provides AI-powered image verification and authenticity detection",
        "Results are provided as probability assessments, not absolute guarantees",
        "Service availability is subject to maintenance and technical requirements",
        "We continuously update our models to improve accuracy and detection capabilities"
      ]
    },
    {
      icon: Shield,
      title: "User Responsibilities",
      content: [
        "You must be at least 13 years old to use PixelCheck",
        "You are responsible for maintaining the security of your account",
        "You may not use the service for illegal or unauthorized purposes",
        "You must not attempt to reverse engineer or compromise our systems"
      ]
    },
    {
      icon: XCircle,
      title: "Prohibited Uses",
      content: [
        "Uploading illegal, harmful, or offensive content",
        "Attempting to overwhelm or disrupt our service (DDoS attacks)",
        "Using the service to violate others' privacy or intellectual property rights",
        "Automated scraping or unauthorized API access"
      ]
    },
    {
      icon: AlertCircle,
      title: "Limitations of Liability",
      content: [
        "PixelCheck is provided 'as is' without warranties of any kind",
        "We are not liable for decisions made based on our analysis results",
        "Our liability is limited to the amount paid for the service",
        "We are not responsible for third-party content or services"
      ]
    },
    {
      icon: Scale,
      title: "Intellectual Property",
      content: [
        "All PixelCheck technology, algorithms, and content are our property",
        "You retain ownership of images you upload for analysis",
        "You grant us a temporary license to process your images",
        "Our trademarks and branding may not be used without permission"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Terms of Service
              </h1>
              <p className="text-xl text-muted-foreground">
                Please read these terms carefully before using PixelCheck.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>

            {/* Introduction */}
            <Card className="p-8 mb-8 border-primary/20 bg-gradient-to-br from-card to-primary/5">
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service ("Terms") govern your access to and use of PixelCheck's 
                AI-powered image verification service. By using our service, you enter into a 
                legally binding agreement with PixelCheck. Please read these terms carefully and 
                contact us if you have any questions.
              </p>
            </Card>

            {/* Terms Sections */}
            <div className="space-y-6">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-md transition-all duration-300 border-border/50">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="text-xl font-bold mt-2">{section.title}</h2>
                    </div>
                    <ul className="space-y-2 ml-16">
                      {section.content.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </div>

            {/* Additional Terms */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card className="p-6 bg-muted/50 border-border/50">
                <h2 className="font-semibold mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  Termination
                </h2>
                <p className="text-sm text-muted-foreground">
                  We reserve the right to suspend or terminate your access to PixelCheck at any 
                  time for violation of these terms or for any other reason at our discretion.
                </p>
              </Card>

              <Card className="p-6 bg-muted/50 border-border/50">
                <h2 className="font-semibold mb-2 flex items-center gap-2">
                  <Scale className="w-4 h-4 text-primary" />
                  Governing Law
                </h2>
                <p className="text-sm text-muted-foreground">
                  These Terms are governed by the laws of the State of California, USA. Any 
                  disputes will be resolved in the courts of San Francisco County.
                </p>
              </Card>
            </div>

            {/* Contact */}
            <Card className="p-6 mt-8 border-primary/20">
              <h2 className="font-semibold mb-2">Questions About These Terms?</h2>
              <p className="text-sm text-muted-foreground">
                If you have any questions about our Terms of Service, please contact us at 
                legal@pixelcheck.ai or visit our contact page.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
