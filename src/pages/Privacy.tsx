import { Card } from "@/components/ui/card";
import { Shield, Eye, Lock, Database, UserCheck, FileText } from "lucide-react";

const Privacy = () => {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "Images you upload for analysis (temporarily processed, not stored)",
        "Account information (email, name) if you create an account",
        "Usage data and analytics to improve our service",
        "Technical data (IP address, browser type) for security purposes"
      ]
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      content: [
        "To provide AI-powered image verification services",
        "To improve and optimize our detection algorithms",
        "To communicate with you about your account and our services",
        "To ensure security and prevent fraudulent activity"
      ]
    },
    {
      icon: Shield,
      title: "Data Protection",
      content: [
        "All data transmission is encrypted using industry-standard SSL/TLS",
        "Images are analyzed in real-time and immediately deleted",
        "We never use your images to train our models without explicit consent",
        "Regular security audits and compliance with data protection regulations"
      ]
    },
    {
      icon: Eye,
      title: "Your Privacy Rights",
      content: [
        "Access and download your personal data at any time",
        "Request deletion of your account and associated data",
        "Opt-out of marketing communications",
        "Control cookie preferences and tracking settings"
      ]
    },
    {
      icon: UserCheck,
      title: "Third-Party Services",
      content: [
        "We use trusted third-party services for analytics and infrastructure",
        "No personal data is sold or shared with advertisers",
        "Third parties are bound by strict data protection agreements",
        "You can review our list of service providers upon request"
      ]
    },
    {
      icon: FileText,
      title: "Data Retention",
      content: [
        "Uploaded images: Deleted immediately after analysis",
        "Account data: Retained until account deletion",
        "Usage logs: Retained for 90 days for security purposes",
        "Anonymized analytics: Retained indefinitely for service improvement"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Privacy Policy
              </h1>
              <p className="text-xl text-muted-foreground">
                Your privacy is our priority. Learn how we collect, use, and protect your data.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>

            {/* Introduction */}
            <Card className="p-8 mb-8 border-primary/20 bg-gradient-to-br from-card to-primary/5">
              <p className="text-muted-foreground leading-relaxed">
                At PixelCheck, we are committed to protecting your privacy and ensuring the security 
                of your personal information. This Privacy Policy explains how we collect, use, store, 
                and protect your data when you use our AI-powered image verification service. By using 
                PixelCheck, you agree to the practices described in this policy.
              </p>
            </Card>

            {/* Policy Sections */}
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

            {/* Contact for Privacy */}
            <Card className="p-6 mt-8 bg-muted/50 border-border/50">
              <h2 className="font-semibold mb-2">Questions About Privacy?</h2>
              <p className="text-sm text-muted-foreground mb-4">
                If you have any questions or concerns about our privacy practices, please contact 
                our Data Protection Officer at privacy@pixelcheck.ai or use our contact form.
              </p>
              <p className="text-xs text-muted-foreground">
                PixelCheck complies with GDPR, CCPA, and other applicable data protection regulations.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
