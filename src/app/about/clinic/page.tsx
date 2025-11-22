"use client";

import { Card, CardContent } from "@/app/components/ui/card";
import { CheckCircle, MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import Footer from "../../components/Footer";

export default function AboutClinic() {
  const facilities = [
    "State-of-the-art rehabilitation equipment",
    "Private treatment rooms for individual care",
    "Spacious exercise therapy area",
    "Modern diagnostic technology",
    "Comfortable waiting lounge",
    "On-site parking facilities",
    "Wheelchair accessible throughout",
    "Clean and hygienic environment",
    "Advanced electrotherapy equipment",
    "Dedicated sports rehabilitation zone",
    "Climate-controlled treatment rooms",
    "Complimentary refreshments",
  ];

  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80", alt: "Main treatment area" },
    { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80", alt: "Reception and waiting area" },
    { src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80", alt: "Exercise rehabilitation zone" },
    { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80", alt: "Modern equipment" },
    { src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80", alt: "Group therapy space" },
  ];

  const equipmentList = [
    {
      category: "Manual Therapy Equipment",
      items: ["Adjustable treatment tables", "Specialized massage tools", "Manual therapy aids"],
    },
    {
      category: "Exercise & Rehabilitation",
      items: ["Resistance training equipment", "Balance and stability tools", "Cardio machines", "Functional movement systems"],
    },
    {
      category: "Electrotherapy Modalities",
      items: ["Ultrasound therapy", "TENS units", "Laser therapy", "Shockwave therapy"],
    },
    {
      category: "Assessment Tools",
      items: ["Goniometers for range of motion", "Strength testing equipment", "Postural analysis systems"],
    },
  ];

  return (
    <>
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Clinic</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A modern, fully-equipped facility designed for your comfort and recovery
            </p>
          </div>

          {/* Image Carousel */}
          <div className="mb-16">
            <Carousel className="w-full max-w-5xl mx-auto" data-testid="carousel-clinic">
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardContent className="p-0">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-96 object-cover rounded-lg"
                        />
                        <div className="p-4 text-center bg-muted/30">
                          <p className="font-medium">{image.alt}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* About the Clinic */}
          <Card className="mb-16">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Welcome to Burwood Physio</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Located in the heart of Burwood, our clinic has been serving the community for over 15 years. We pride ourselves on providing a warm, welcoming environment where patients feel comfortable and cared for throughout their recovery journey.
                </p>
                <p>
                  Our facility is equipped with the latest physiotherapy technology and equipment, ensuring you receive the most effective treatment available. From advanced rehabilitation machines to private treatment rooms, every aspect of our clinic is designed with your comfort and recovery in mind.
                </p>
                <p>
                  We understand that visiting a healthcare facility can be stressful, which is why we've created a calming atmosphere with friendly staff ready to assist you from the moment you walk through our doors.
                </p>
                <p>
                  Our 2,500 square foot facility features dedicated zones for different types of therapy, ensuring that whether you're recovering from surgery, managing chronic pain, or rehabilitating from a sports injury, you have access to the appropriate space and equipment for your specific needs.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Facilities & Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Facilities & Amenities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-muted/30 rounded-md hover-elevate"
                  data-testid={`facility-${index}`}
                >
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="font-medium">{facility}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Advanced Equipment & Technology</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {equipmentList.map((category, index) => (
                <Card key={index} className="hover-elevate" data-testid={`equipment-${index}`}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-primary">{category.category}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Safety & Hygiene */}
          <Card className="mb-16 bg-primary/5">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-center">Your Safety is Our Priority</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="font-bold mb-2">COVID-Safe Practices</h3>
                  <p className="text-muted-foreground text-sm">Enhanced cleaning protocols and sanitization between all appointments</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Modern Ventilation</h3>
                  <p className="text-muted-foreground text-sm">Advanced air filtration systems maintaining fresh, clean air throughout</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Privacy Assured</h3>
                  <p className="text-muted-foreground text-sm">Private treatment rooms ensuring your comfort and confidentiality</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Visit Us</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        123 Burwood Road<br />
                        Burwood, NSW 2134<br />
                        Australia
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Convenient location with easy access to public transport and ample parking
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a
                        href="tel:0283229022"
                        className="text-muted-foreground hover:text-primary transition"
                      >
                        02 8322 9022
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Call us for appointments or inquiries
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:info@burwoodphysio.com.au"
                        className="text-muted-foreground hover:text-primary transition"
                      >
                        info@burwoodphysio.com.au
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Send us your questions anytime
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Opening Hours</h2>
                
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                        <span className="font-medium">Monday - Friday:</span>
                        <span className="font-bold text-foreground">7:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                        <span className="font-medium">Saturday:</span>
                        <span className="font-bold text-foreground">8:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                        <span className="font-medium">Sunday:</span>
                        <span className="font-bold text-foreground">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 p-4 rounded-md mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong>Extended Hours:</strong> We offer early morning and evening appointments to accommodate your busy schedule.
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded-md">
                  <p className="text-sm font-semibold mb-2">Public Holidays</p>
                  <p className="text-sm text-muted-foreground">
                    We're closed on public holidays. For emergency services during this time, please contact us via email.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Section (Optional) */}
          <Card className="mt-8">
            <CardContent className="p-0">
              <div className="aspect-video w-full bg-muted/30 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8!2d151.10!3d-33.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUyJzEzLjIiUyAxNTHCsDA2JzAwLjAiRQ!5e0!3m2!1sen!2sau!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinic Location"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}