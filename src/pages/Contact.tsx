import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "support@pixelcheck.ai",
      detail: "We typically respond within 24 hours"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Available Mon-Fri, 9AM-6PM EST",
      detail: "Get instant help from our team"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "+51 (01) 123-4567",
      detail: "For enterprise customers"
    },
    {
      icon: MapPin,
      title: "Office",
      description: "Lima, Peru",
      detail: "Visit us by appointment"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have questions about PixelCheck? We're here to help. Reach out to our team 
                and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-8 border-primary/20">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can we help?" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..." 
                      rows={6}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Card>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Other Ways to Reach Us</h2>
                  <div className="space-y-4">
                    {contactMethods.map((method, index) => {
                      const Icon = method.icon;
                      return (
                        <Card key={index} className="p-6 hover:shadow-md hover:border-primary/30 transition-all duration-300 border-border/50">
                          <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <div className="space-y-1">
                              <h3 className="font-semibold">{method.title}</h3>
                              <p className="text-sm text-foreground">{method.description}</p>
                              <p className="text-sm text-muted-foreground">{method.detail}</p>
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </div>

                {/* FAQ Note */}
                <Card className="p-6 bg-gradient-to-br from-card to-primary/5 border-primary/20">
                  <h3 className="font-semibold mb-2">Looking for Quick Answers?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Check out our FAQ section for instant answers to common questions about 
                    PixelCheck's features, pricing, and technical details.
                  </p>
                  <Button variant="outline" size="sm">
                    View FAQ
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
