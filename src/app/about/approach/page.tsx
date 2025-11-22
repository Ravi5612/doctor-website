"use client";

import { Card, CardContent } from "@/app/components/ui/card";
import { Target, Users, TrendingUp, Award } from "lucide-react";
import dynamic from 'next/dynamic';

// ✅ Dynamically import Footer to avoid SSR issues
const Footer = dynamic(() => import("../../components/Footer"), {
  ssr: false,
});

export default function AboutApproach() {
  const principles = [
    {
      icon: Target,
      title: "Evidence-Based Practice",
      description: "We use the latest research and proven techniques to ensure the most effective treatment outcomes for our patients.",
    },
    {
      icon: Users,
      title: "Patient-Centered Care",
      description: "Your goals become our goals. We create personalized treatment plans that align with your lifestyle and recovery objectives.",
    },
    {
      icon: TrendingUp,
      title: "Holistic Approach",
      description: "We address not just symptoms, but the root causes, considering your overall health and well-being in every treatment plan.",
    },
    {
      icon: Award,
      title: "Continuous Improvement",
      description: "Our team stays updated with the latest advancements in physiotherapy through ongoing education and professional development.",
    },
  ];

  const methodology = [
    {
      step: "1",
      title: "Comprehensive Assessment",
      description: "We begin with a thorough evaluation of your condition, medical history, and lifestyle to understand the complete picture.",
    },
    {
      step: "2",
      title: "Personalized Treatment Plan",
      description: "Based on your assessment, we create a customized plan that addresses your specific needs and recovery goals.",
    },
    {
      step: "3",
      title: "Active Treatment",
      description: "We combine hands-on therapy, exercise programs, and education to help you recover effectively and safely.",
    },
    {
      step: "4",
      title: "Progress Monitoring",
      description: "Regular assessments ensure your treatment is working, with adjustments made as needed to optimize your recovery.",
    },
    {
      step: "5",
      title: "Long-term Wellness",
      description: "We equip you with the knowledge and exercises to maintain your health and prevent future injuries.",
    },
  ];

  return (
    <>
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Approach</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A philosophy built on excellence, compassion, and proven results
            </p>
          </div>

          {/* Philosophy Statement */}
          <Card className="mb-16">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Philosophy</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  At Burwood Physio, we believe that every patient deserves personalized, compassionate care that addresses their unique needs and goals. We're not just treating injuries—we're empowering people to live their best lives.
                </p>
                <p>
                  Our approach combines evidence-based techniques with a deep understanding of each patient's individual circumstances. We take the time to listen, to understand, and to create treatment plans that work for you, not just your condition.
                </p>
                <p>
                  We're committed to your long-term wellness, not just short-term relief. That's why we focus on education, prevention, and equipping you with the tools to maintain your health long after your treatment ends.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Core Principles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Core Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {principles.map((principle, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-principle-${index}`}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                      <principle.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Treatment Methodology */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Treatment Methodology</h2>
            <div className="space-y-6">
              {methodology.map((item, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-methodology-${index}`}>
                  <CardContent className="p-6">
                    <div className="flex gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Values */}
          <Card className="bg-primary text-primary-foreground mb-16">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-2">Excellence</h3>
                  <p className="opacity-90">
                    We strive for the highest standards in everything we do
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Compassion</h3>
                  <p className="opacity-90">
                    We treat every patient with empathy and respect
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Integrity</h3>
                  <p className="opacity-90">
                    We practice with honesty and transparency always
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Why Choose Us CTA */}
          <Card className="bg-muted/30">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Experience the Difference</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our patient-centered approach has helped thousands recover and achieve their health goals. 
                Let us help you on your journey to wellness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/appointment">
                  <button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-3 px-8 rounded-md transition hover-elevate">
                    Book an Appointment
                  </button>
                </a>
                <a href="/contact">
                  <button className="bg-background border-2 border-primary text-primary hover:bg-primary/10 font-bold py-3 px-8 rounded-md transition hover-elevate">
                    Contact Us
                  </button>
                </a>
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