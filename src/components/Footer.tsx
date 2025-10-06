import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    product: [
      { label: "Features", href: "#features", isAnchor: true },
      { label: "How It Works", href: "#how-it-works", isAnchor: true },
      { label: "Technology", href: "#technology", isAnchor: true },
    ],
    company: [
      { label: "About Us", href: "/about", isAnchor: false },
      { label: "Contact Us", href: "/contact", isAnchor: false },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy", isAnchor: false },
      { label: "Terms of Service", href: "/terms", isAnchor: false }
    ]
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href) as HTMLElement | null;
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-secondary">
                  <Shield className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">PixelCheck</span>
              </div>
              <p className="text-sm text-muted-foreground">
                AI-powered image verification for a more trustworthy digital world.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    {link.isAnchor ? (
                      <a 
                        href={link.href}
                        onClick={(e) => handleAnchorClick(e, link.href)}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link 
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    {link.isAnchor ? (
                      <a 
                        href={link.href}
                        onClick={(e) => handleAnchorClick(e, link.href)}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link 
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    {link.isAnchor ? (
                      <a 
                        href={link.href}
                        onClick={(e) => handleAnchorClick(e, link.href)}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link 
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} PixelCheck. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with advanced machine learning technology
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
