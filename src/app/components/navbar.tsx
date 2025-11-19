"use client";

import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/app/components/ui/button";

export default function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const mainNavItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "CONDITIONS", href: "/conditions" },
    { name: "BLOG", href: "/blog" },
    { name: "CONTACT", href: "/contact" },
  ];

  const aboutSubItems = [
    { name: "Our Team", href: "/about/team" },
    { name: "Our Clinic", href: "/about/clinic" },
    { name: "Our Approach", href: "/about/approach" },
  ];

  const servicesSubItems = [
    { name: "Physiotherapy", href: "/services/physiotherapy" },
    { name: "Sports Injury Treatment", href: "/services/sports-injury" },
    { name: "Rehabilitation", href: "/services/rehabilitation" },
    { name: "Massage Therapy", href: "/services/massage" },
    { name: "Dry Needling", href: "/services/dry-needling" },
    { name: "Exercise Prescription", href: "/services/exercise" },
  ];

  const getLinkClassName = (href: string) => {
    const isActive = location === href;
    return isActive
      ? "text-primary font-bold text-sm hover:text-primary/80 transition"
      : "text-foreground font-medium text-sm hover:text-primary transition";
  };

  return (
    <>
      {/* Green Contact Bar - NOT sticky, scrolls away */}
      <div
        className={`bg-green-900 text-white px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled ? "h-0 py-0 overflow-hidden" : "h-auto py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-end items-center gap-6 text-sm">
          <a
            href="tel:0283229022"
            className="flex items-center gap-2 hover:text-green-200 transition"
            data-testid="link-phone"
          >
            <span>📞</span>
            <span>02 8322 9022</span>
          </a>
          <a
            href="mailto:info@burwoodphysio.com.au"
            className="flex items-center gap-2 hover:text-green-200 transition"
            data-testid="link-email"
          >
            <span>✉️</span>
            <span>info@burwoodphysio.com.au</span>
          </a>
        </div>
      </div>

      {/* Main Navbar - STICKY, stays at top */}
      <nav className="sticky top-0 left-0 right-0 bg-background border-b border-border shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" data-testid="link-logo" className="flex flex-col cursor-pointer">
              <div className="text-2xl font-bold flex items-center gap-1">
                <span className="text-primary">MED</span>
                <span className="text-primary/80">Cares</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex gap-6 items-center">
                {mainNavItems.map((item) => (
                  <li key={item.name}>
                    {item.name === "ABOUT US" ? (
                      <div className="relative group">
                        <button className="text-foreground font-medium text-sm hover:text-primary transition flex items-center gap-1">
                          {item.name}
                          <span className="text-xs">▼</span>
                        </button>
                        <div className="absolute left-0 mt-2 w-48 bg-card border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                          {aboutSubItems.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-3 text-sm text-card-foreground hover:bg-primary hover:text-primary-foreground transition first:rounded-t-md last:rounded-b-md"
                              data-testid={`link-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : item.name === "SERVICES" ? (
                      <div className="relative group">
                        <button className="text-foreground font-medium text-sm hover:text-primary transition flex items-center gap-1">
                          {item.name}
                          <span className="text-xs">▼</span>
                        </button>
                        <div className="absolute left-0 mt-2 w-56 bg-card border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                          {servicesSubItems.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-3 text-sm text-card-foreground hover:bg-primary hover:text-primary-foreground transition first:rounded-t-md last:rounded-b-md"
                              data-testid={`link-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={getLinkClassName(item.href)}
                        data-testid={`link-${item.name.toLowerCase()}`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Theme Toggle & CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                size="icon"
                variant="ghost"
                onClick={toggleTheme}
                data-testid="button-theme-toggle"
                className="hover-elevate"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
              <Link href="/appointment">
                <Button
                  variant="default"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-md"
                  data-testid="button-book-appointment"
                >
                  BOOK APPOINTMENT
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <Button
                size="icon"
                variant="ghost"
                onClick={toggleTheme}
                data-testid="button-theme-toggle-mobile"
                className="hover-elevate"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={toggleMobileMenu}
                data-testid="button-mobile-menu"
                className="hover-elevate"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border shadow-sm">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {mainNavItems.map((item) =>
                item.name === "ABOUT US" ? (
                  <div key={item.name} className="space-y-1">
                    <Link href={item.href}>
                      <a
                        onClick={toggleMobileMenu}
                        className="block px-3 py-2 text-base font-medium text-card-foreground hover:text-primary"
                        data-testid="link-about-mobile"
                      >
                        {item.name}
                      </a>
                    </Link>
                    <div className="pl-4 space-y-1">
                      {aboutSubItems.map((subItem) => (
                        <Link key={subItem.href} href={subItem.href}>
                          <a
                            onClick={toggleMobileMenu}
                            className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary"
                            data-testid={`link-${subItem.name.toLowerCase().replace(/\s+/g, '-')}-mobile`}
                          >
                            {subItem.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : item.name === "SERVICES" ? (
                  <div key={item.name} className="space-y-1">
                    <Link href={item.href}>
                      <a
                        onClick={toggleMobileMenu}
                        className="block px-3 py-2 text-base font-medium text-card-foreground hover:text-primary"
                        data-testid="link-services-mobile"
                      >
                        {item.name}
                      </a>
                    </Link>
                    <div className="pl-4 space-y-1">
                      {servicesSubItems.map((subItem) => (
                        <Link key={subItem.href} href={subItem.href}>
                          <a
                            onClick={toggleMobileMenu}
                            className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary"
                            data-testid={`link-${subItem.name.toLowerCase().replace(/\s+/g, '-')}-mobile`}
                          >
                            {subItem.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link key={item.name} href={item.href}>
                    <a
                      onClick={toggleMobileMenu}
                      className="block px-3 py-2 text-base font-medium text-card-foreground hover:text-primary"
                      data-testid={`link-${item.name.toLowerCase()}-mobile`}
                    >
                      {item.name}
                    </a>
                  </Link>
                )
              )}
              <Link href="/appointment">
                <Button
                  onClick={toggleMobileMenu}
                  variant="default"
                  className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                  data-testid="button-book-appointment-mobile"
                >
                  BOOK APPOINTMENT
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}