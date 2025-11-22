"use client";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/app/components/ui/avatar";
import { Activity, Heart, Zap, Users, Award, Clock, Star, CheckCircle, Shield, Headphones, TrendingUp } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import("./components/Footer"), {
  ssr: false,
});
export default function HomePage() {
  const autoplayPlugin = useRef(
    Autoplay({ 
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
      badge: "⭐ Over 10,000 Successful Treatments",
      title: "Expert Physiotherapy for Your",
      titleHighlight: "Recovery Journey",
      description: "Professional treatment for sports injuries, chronic pain, and rehabilitation. Get back to doing what you love with our expert care.",
    },
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80",
      badge: "🏆 Sports Injury Specialists",
      title: "Get Back in the Game",
      titleHighlight: "Stronger Than Ever",
      description: "Advanced sports physiotherapy helping athletes of all levels recover faster and perform better. Trusted by professional teams.",
    },
    {
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&q=80",
      badge: "💚 Compassionate Care",
      title: "Pain-Free Living at",
      titleHighlight: "Every Age",
      description: "Gentle, effective treatment for seniors and adults managing chronic conditions. Improve mobility and quality of life.",
    },
    {
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80",
      badge: "🏥 State-of-the-Art Facility",
      title: "Modern Equipment,",
      titleHighlight: "Expert Care",
      description: "Our fully equipped clinic provides the latest technology and techniques for your optimal recovery and comfort.",
    },
  ];
  const services = [
    { icon: Activity, title: "Sports Injury", description: "Specialized treatment for athletic injuries and performance optimization." },
    { icon: Heart, title: "Rehabilitation", description: "Comprehensive recovery programs tailored to your needs." },
    { icon: Zap, title: "Pain Management", description: "Effective solutions for chronic and acute pain relief." },
    { icon: Users, title: "Massage Therapy", description: "Professional therapeutic massage for recovery and relaxation." },
    { icon: Award, title: "Post-Surgery Recovery", description: "Expert post-operative care and rehabilitation programs." },
    { icon: Clock, title: "Chronic Conditions", description: "Long-term management and treatment for chronic issues." },
  ];
  const whyChooseUs = [
    { stat: "15+", label: "Years Experience", icon: Award },
    { stat: "10,000+", label: "Successful Treatments", icon: Users },
    { stat: "24/7", label: "Emergency Support", icon: Clock },
    { stat: "98%", label: "Patient Satisfaction", icon: Star },
  ];
  const testimonials = [
    { name: "Sarah Mitchell", condition: "Sports Injury", rating: 5, image: "https://i.pravatar.cc/150?img=1", text: "Exceptional care! The team helped me recover from my knee injury faster than I expected. Highly professional and caring." },
    { name: "John Davis", condition: "Back Pain", rating: 5, image: "https://i.pravatar.cc/150?img=3", text: "After years of chronic back pain, I finally found relief. The physiotherapists here are truly experts in their field." },
    { name: "Emma Wilson", condition: "Post-Surgery", rating: 5, image: "https://i.pravatar.cc/150?img=5", text: "The post-surgery rehabilitation program was perfectly tailored to my needs. I'm back to my normal activities now!" },
    { name: "Michael Chen", condition: "Chronic Pain", rating: 5, image: "https://i.pravatar.cc/150?img=7", text: "The holistic approach to my chronic pain management has been life-changing. I can finally enjoy activities I love again." },
  ];
  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80", alt: "Rehabilitation exercises" },
    { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80", alt: "Sports therapy session" },
    { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80", alt: "Modern equipment" },
    { src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80", alt: "Group therapy" },
    { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80", alt: "Clinic interior" },
  ];
  const features = [
    { icon: Shield, title: "Insurance Accepted", description: "We accept all major health insurance plans and provide direct billing." },
    { icon: CheckCircle, title: "Evidence-Based Treatment", description: "Our methods are backed by the latest research and clinical studies." },
    { icon: Headphones, title: "Personalized Care", description: "Every treatment plan is customized to your unique needs and goals." },
    { icon: TrendingUp, title: "Proven Results", description: "98% of our patients report significant improvement in their condition." },
  ];
  const treatmentProcess = [
    { step: "1", title: "Initial Assessment", description: "Comprehensive evaluation of your condition, medical history, and goals." },
    { step: "2", title: "Custom Treatment Plan", description: "Personalized program designed specifically for your recovery needs." },
    { step: "3", title: "Active Treatment", description: "Hands-on therapy, exercise programs, and ongoing support." },
    { step: "4", title: "Progress Tracking", description: "Regular assessments to monitor your improvement and adjust treatment." },
    { step: "5", title: "Long-term Wellness", description: "Education and tools to maintain your health and prevent future injuries." },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <section className="relative overflow-hidden">
        <Carousel opts={{ align: "start", loop: true }} plugins={[autoplayPlugin.current]} className="w-full" onMouseEnter={() => autoplayPlugin.current.stop()} onMouseLeave={() => autoplayPlugin.current.play()}>
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
                  <img src={slide.image} alt={`Hero slide ${index + 1}`} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
                  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
                    <div className="max-w-3xl">
                      <Badge className="mb-4 bg-primary/20 text-primary border-primary">{slide.badge}</Badge>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{slide.title} <span className="text-primary">{slide.titleHighlight}</span></h1>
                      <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">{slide.description}</p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link href="/appointment"><Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base">Book Appointment Now</Button></Link>
                        <Link href="/services"><Button size="lg" variant="outline" className="font-bold text-base hover-elevate">Learn More</Button></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden lg:flex gap-4">
            <CarouselPrevious className="relative left-0 translate-y-0" />
            <CarouselNext className="relative right-0 translate-y-0" />
          </div>
        </Carousel>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><feature.icon className="h-8 w-8 text-primary" /></div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services Overview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Comprehensive physiotherapy solutions tailored to your specific needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover-elevate">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4"><service.icon className="h-6 w-6 text-primary" /></div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link href="/services" className="text-primary hover:text-primary/80 font-medium text-sm inline-flex items-center gap-1">Learn More →</Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center" data-testid={`feature-${index}`}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive physiotherapy solutions tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover-elevate" data-testid={`card-service-${index}`}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link 
  href="/services"
  className="text-primary hover:text-primary/80 font-medium text-sm inline-flex items-center gap-1"
  data-testid={`link-service-${index}`}
>
  Learn More →
</Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Carousel */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Clinic & Facilities</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              State-of-the-art equipment and modern facilities for your comfort and recovery
            </p>
          </div>

          <Carousel className="w-full max-w-5xl mx-auto" data-testid="carousel-gallery">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="p-0">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-96 object-cover rounded-lg"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Treatment Process</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A systematic approach to ensure your complete recovery and long-term wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {treatmentProcess.map((item, index) => (
              <Card key={index} className="text-center hover-elevate" data-testid={`process-${index}`}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                    {item.step}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Burwood Physio</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Trusted by thousands for exceptional care and results
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center" data-testid={`stat-${index}`}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{item.stat}</div>
                <div className="text-muted-foreground font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Patients Say</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real stories from real people who trusted us with their recovery
            </p>
          </div>

          <Carousel className="w-full max-w-5xl mx-auto" data-testid="carousel-testimonials">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="h-full">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                          ))}
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed flex-1">"{testimonial.text}"</p>
                        <div className="flex items-center gap-3 border-t border-border pt-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-bold">{testimonial.name}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.condition}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Common Questions</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Quick answers to questions you may have
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="hover-elevate">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Do I need a referral?</h3>
                <p className="text-muted-foreground text-sm">No referral needed! You can book directly with us. However, check with your insurance for coverage requirements.</p>
              </CardContent>
            </Card>
            <Card className="hover-elevate">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">How long is each session?</h3>
                <p className="text-muted-foreground text-sm">Initial consultations are 45-60 minutes, follow-ups are typically 30-45 minutes depending on your treatment needs.</p>
              </CardContent>
            </Card>
            <Card className="hover-elevate">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Do you accept insurance?</h3>
                <p className="text-muted-foreground text-sm">Yes! We accept all major health insurance plans and offer direct billing for your convenience.</p>
              </CardContent>
            </Card>
            <Card className="hover-elevate">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">What should I wear?</h3>
                <p className="text-muted-foreground text-sm">Comfortable, loose-fitting clothing that allows easy access to the area being treated. Athletic wear works great!</p>
              </CardContent>
            </Card>
          </div>
<div className="text-center mt-8">
  {/* ✅ FIXED */}
  <Link href="/faq">
    <Button variant="outline" size="lg" className="hover-elevate">
      View All FAQs
    </Button>
  </Link>
</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Start Your Recovery Journey?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Book your appointment today and take the first step towards a pain-free life
          </p>
        {/* ✅ FIXED */}
<Link href="/appointment">
  <Button
    size="lg"
    variant="secondary"
    className="font-bold text-base hover-elevate"
  >
    Book Your Appointment
  </Button>
</Link>
        </div>
      </section>
       <Footer />
    </div>
    
  );
}
