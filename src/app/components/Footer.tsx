"use client";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ];

  const services = [
    { name: "Physiotherapy", href: "/services#physiotherapy" },
    { name: "Sports Injury", href: "/services#sports" },
    { name: "Rehabilitation", href: "/services#rehab" },
    { name: "Massage Therapy", href: "/services#massage" },
    { name: "Pain Management", href: "/services#pain" },
  ];

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="w-full border-t-4 border-primary"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="text-2xl font-bold text-primary mb-4">
              BURWOOD PHYSIO
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Professional physiotherapy services dedicated to your recovery and well-being. Over 10,000 successful treatments.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-md transition hover-elevate"
                data-testid="link-facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-md transition hover-elevate"
                data-testid="link-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-md transition hover-elevate"
                data-testid="link-twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition" 
                    data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <a
                    href={service.href}
                    className="text-sm text-muted-foreground hover:text-primary transition"
                    data-testid={`footer-service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  123 Burwood Road<br />
                  Burwood, NSW 2134<br />
                  Australia
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:0283229022" className="text-sm text-muted-foreground hover:text-primary transition">
                  02 8322 9022
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@burwoodphysio.com.au" className="text-sm text-muted-foreground hover:text-primary transition">
                  info@burwoodphysio.com.au
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Business Hours</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <div className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span>7:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>8:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Burwood Physio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link 
              href="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-primary transition" 
              data-testid="link-privacy"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms"
              className="text-sm text-muted-foreground hover:text-primary transition" 
              data-testid="link-terms"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}