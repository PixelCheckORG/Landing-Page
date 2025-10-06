import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, Users, Zap, BarChart3, Shield, 
  CheckCircle, Mail, Phone, Calendar 
} from "lucide-react";

const ContactSales = () => {
  const professionalFeatures = [
    {
      icon: BarChart3,
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive insights and detailed reporting for all your image verifications"
    },
    {
      icon: Zap,
      title: "Batch Processing",
      description: "Analyze hundreds of images simultaneously with priority processing"
    },
    {
      icon: Shield,
      title: "API Access",
      description: "Integrate PixelCheck directly into your workflow with our robust API"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Multi-user accounts with role-based permissions and shared workspaces"
    }
  ];

  const plans = [
    {
      name: "Professional",
      price: "$49",
      period: "/month",
      description: "Perfect for freelancers and small teams",
      features: [
        "1,000 image analyses/month",
        "Advanced technical reports",
        "Batch processing (up to 50 images)",
        "Priority email support",
        "Metadata extraction",
        "30-day analysis history"
      ]
    },
    {
      name: "Business",
      price: "$149",
      period: "/month",
      description: "Ideal for growing organizations",
      features: [
        "5,000 image analyses/month",
        "Everything in Professional",
        "API access (5,000 calls/month)",
        "Batch processing (up to 200 images)",
        "Team collaboration (5 users)",
        "90-day analysis history",
        "Phone support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with custom needs",
      features: [
        "Unlimited image analyses",
        "Everything in Business",
        "Unlimited API calls",
        "Unlimited batch processing",
        "Unlimited team members",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantee"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Professional Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Upgrade to Professional Features
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get advanced tools, priority support, and unlimited access for your team. 
              Perfect for media professionals, content creators, and organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Professional Features
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to verify images at scale
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {professionalFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 border-border/50">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-sm flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary-foreground" />
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
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Choose Your Plan
              </h2>
              <p className="text-lg text-muted-foreground">
                Flexible pricing for teams of all sizes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`p-8 relative ${
                    plan.popular 
                      ? 'border-primary shadow-lg scale-105' 
                      : 'border-border/50'
                  }`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary">
                      Most Popular
                    </Badge>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Talk to Our Sales Team
              </h2>
              <p className="text-lg text-muted-foreground">
                Have questions? Need a custom solution? Our team is here to help.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-8 border-primary/20">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        First Name *
                      </label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name *
                      </label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Work Email *
                    </label>
                    <Input id="email" type="email" placeholder="john@company.com" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company Name *
                    </label>
                    <Input id="company" placeholder="Your Company" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="teamSize" className="text-sm font-medium">
                      Team Size *
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select team size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 people</SelectItem>
                        <SelectItem value="11-50">11-50 people</SelectItem>
                        <SelectItem value="51-200">51-200 people</SelectItem>
                        <SelectItem value="201-1000">201-1,000 people</SelectItem>
                        <SelectItem value="1000+">1,000+ people</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="plan" className="text-sm font-medium">
                      Interested In *
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a plan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professional">Professional Plan</SelectItem>
                        <SelectItem value="business">Business Plan</SelectItem>
                        <SelectItem value="enterprise">Enterprise Plan</SelectItem>
                        <SelectItem value="custom">Custom Solution</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your needs..." 
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Request a Demo
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="p-6 border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email Sales</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Get a response within 24 hours
                      </p>
                      <a href="mailto:sales@pixelcheck.ai" className="text-sm text-primary hover:underline">
                        sales@pixelcheck.ai
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Call Us</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Mon-Fri, 9AM-6PM EST
                      </p>
                      <a href="tel:+15551234567" className="text-sm text-primary hover:underline">
                        +51 (01) 123-4567
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Schedule a Demo</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        See PixelCheck in action
                      </p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Book a Meeting
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-card to-primary/5 border-primary/20">
                  <div className="flex items-start gap-3 mb-3">
                    <Building2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">Enterprise Solutions</h3>
                      <p className="text-sm text-muted-foreground">
                        Need custom integrations, dedicated support, or volume pricing? 
                        Our enterprise team can create a tailored solution for your organization.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Trusted by Leading Organizations
            </h3>
            <p className="text-muted-foreground mb-8">
              Join hundreds of media companies, content creators, and enterprises using PixelCheck 
              to verify image authenticity at scale.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>99.2% Accuracy Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSales;
