import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageSquare } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      category: "General",
      questions: [
        {
          question: "What is PixelCheck?",
          answer: "PixelCheck is an AI-powered image verification platform that helps you detect manipulated, AI-generated, or fraudulent images. Our advanced algorithms analyze images in real-time to provide accurate authenticity reports."
        },
        {
          question: "How does PixelCheck work?",
          answer: "PixelCheck uses state-of-the-art machine learning models to analyze various aspects of an image, including metadata, pixel patterns, compression artifacts, and AI generation signatures. Our system then provides a comprehensive authenticity score and detailed analysis."
        },
        {
          question: "What types of images can I verify?",
          answer: "PixelCheck supports all common image formats including JPG, PNG, WEBP, and more. You can verify photos, graphics, screenshots, and any other digital images up to 50MB in size."
        },
        {
          question: "Is my data secure?",
          answer: "Absolutely. We take security seriously and employ enterprise-grade encryption for all data transmission and storage. Your images are processed securely and deleted from our servers after analysis unless you choose to save them in your account."
        }
      ]
    },
    {
      category: "Pricing & Plans",
      questions: [
        {
          question: "Do you offer a free trial?",
          answer: "Yes! We offer a free tier that includes 10 image verifications per month. This is perfect for individuals who want to test our service before committing to a paid plan."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and for enterprise customers, we can arrange invoice-based billing."
        },
        {
          question: "Can I upgrade or downgrade my plan?",
          answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades will apply at the start of your next billing cycle. Any unused credits will be prorated."
        },
        {
          question: "Is there a discount for annual subscriptions?",
          answer: "Yes! Annual subscriptions receive a 20% discount compared to monthly billing. Enterprise customers may also qualify for volume discounts."
        }
      ]
    },
    {
      category: "Technical",
      questions: [
        {
          question: "Do you offer an API?",
          answer: "Yes! Our Professional and Enterprise plans include API access. You can integrate PixelCheck's verification capabilities directly into your applications, websites, or workflows. Full documentation is available in our developer portal."
        },
        {
          question: "What is the verification accuracy rate?",
          answer: "Our AI models achieve over 95% accuracy in detecting manipulated and AI-generated images. We continuously train and improve our models with the latest data to maintain high accuracy rates."
        },
        {
          question: "How fast is the verification process?",
          answer: "Most images are analyzed within 2-5 seconds. Complex images or high-resolution files may take slightly longer, but results are typically delivered in under 10 seconds."
        },
        {
          question: "Can I verify images in bulk?",
          answer: "Yes! Professional and Enterprise plans support bulk verification. You can upload multiple images at once or use our API to process large volumes of images programmatically."
        }
      ]
    },
    {
      category: "Support",
      questions: [
        {
          question: "What support channels are available?",
          answer: "We offer multiple support channels: email support for all users, live chat for Professional and Enterprise customers, and priority phone support for Enterprise customers. Our support team is available Monday through Friday, 9 AM to 6 PM EST."
        },
        {
          question: "Do you offer training or onboarding?",
          answer: "Enterprise customers receive personalized onboarding sessions and training materials. We also provide comprehensive documentation, video tutorials, and webinars for all users."
        },
        {
          question: "What is your SLA for Enterprise customers?",
          answer: "Enterprise customers receive a 99.9% uptime SLA, priority support with 2-hour response time, and a dedicated account manager. Custom SLAs can be arranged for specific requirements."
        },
        {
          question: "Can I request custom features?",
          answer: "Yes! We're always looking to improve PixelCheck based on customer feedback. Enterprise customers can request custom features or integrations, which we'll evaluate based on feasibility and alignment with our product roadmap."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <HelpCircle className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about PixelCheck's features, pricing, 
                and how our AI-powered image verification works.
              </p>
            </div>

            {/* FAQ Sections */}
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <span className="w-2 h-8 bg-primary rounded-full"></span>
                    {category.category}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`item-${categoryIndex}-${index}`}
                        className="border rounded-lg px-6 bg-card"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-4">
                          <span className="font-semibold">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            {/* Still have questions? */}
            <Card className="mt-16 p-8 text-center bg-gradient-to-br from-card to-primary/5 border-primary/20">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Can't find the answer you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/contact">Contact Support</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/contact-sales">Talk to Sales</a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
