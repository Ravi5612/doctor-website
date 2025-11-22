"use client";

import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import Footer from "../components/Footer";

export default function ConditionsPage() {
  const conditions = [
    {
      category: "Back & Neck",
      items: [
        { name: "Lower Back Pain", description: "Treatment for acute and chronic lower back conditions" },
        { name: "Neck Pain", description: "Relief from neck strain, stiffness, and cervical issues" },
        { name: "Sciatica", description: "Management of sciatic nerve pain and related symptoms" },
        { name: "Disc Herniation", description: "Conservative treatment for herniated or bulging discs" },
      ],
    },
    {
      category: "Sports Injuries",
      items: [
        { name: "ACL Tears", description: "Pre and post-surgical rehabilitation for ACL injuries" },
        { name: "Ankle Sprains", description: "Recovery programs for ankle ligament injuries" },
        { name: "Tennis Elbow", description: "Treatment for lateral epicondylitis and similar conditions" },
        { name: "Rotator Cuff Injuries", description: "Shoulder rehabilitation and strengthening programs" },
      ],
    },
    {
      category: "Joint Conditions",
      items: [
        { name: "Arthritis", description: "Management of osteoarthritis and rheumatoid arthritis" },
        { name: "Frozen Shoulder", description: "Treatment to restore shoulder mobility and function" },
        { name: "Hip Pain", description: "Assessment and treatment of hip joint conditions" },
        { name: "Knee Pain", description: "Management of various knee conditions and injuries" },
      ],
    },
    {
      category: "Post-Surgery",
      items: [
        { name: "Joint Replacement", description: "Rehabilitation after hip, knee, or shoulder replacement" },
        { name: "Spinal Surgery", description: "Post-operative care for spinal procedures" },
        { name: "Ligament Reconstruction", description: "Recovery programs after ligament repair surgery" },
        { name: "General Surgery Recovery", description: "Rehabilitation following various surgical procedures" },
      ],
    },
    {
      category: "Chronic Conditions",
      items: [
        { name: "Fibromyalgia", description: "Pain management and exercise programs" },
        { name: "Chronic Fatigue", description: "Graduated exercise and energy management" },
        { name: "Headaches", description: "Treatment for tension and cervicogenic headaches" },
        { name: "Postural Issues", description: "Correction of poor posture and related problems" },
      ],
    },
    {
      category: "Women's Health",
      items: [
        { name: "Pregnancy-Related Pain", description: "Management of back and pelvic pain during pregnancy" },
        { name: "Post-Partum Recovery", description: "Rehabilitation after childbirth" },
        { name: "Pelvic Floor Dysfunction", description: "Treatment for pelvic floor weakness and related issues" },
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Conditions We Treat</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Expert care for a wide range of musculoskeletal and chronic conditions
            </p>
          </div>

          {/* Conditions by Category */}
          <div className="space-y-12">
            {conditions.map((category, catIndex) => (
              <div key={catIndex}>
                <h2 className="text-2xl font-bold mb-6 text-primary">{category.category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((condition, index) => (
                    <Card key={index} className="hover-elevate" data-testid={`card-condition-${catIndex}-${index}`}>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold mb-2">{condition.name}</h3>
                        <p className="text-muted-foreground text-sm">{condition.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Treatment Approach Section */}
          <Card className="mt-16 bg-muted/30">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-center">Our Treatment Approach</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">🎯</div>
                  <h3 className="font-bold mb-2">Personalized Care</h3>
                  <p className="text-muted-foreground text-sm">
                    Every treatment plan is tailored to your specific condition and goals
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🔬</div>
                  <h3 className="font-bold mb-2">Evidence-Based</h3>
                  <p className="text-muted-foreground text-sm">
                    We use the latest research and proven techniques for best results
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">💪</div>
                  <h3 className="font-bold mb-2">Long-term Results</h3>
                  <p className="text-muted-foreground text-sm">
                    We focus on sustainable recovery and preventing future issues
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Info Section */}
          <Card className="mt-16">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Don't See Your Condition Listed?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We treat many more conditions beyond those listed here. Contact us to discuss your specific needs, and we'll let you know how we can help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button variant="default" size="lg" data-testid="button-contact">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/appointment">
                  <Button variant="outline" size="lg" className="hover-elevate" data-testid="button-book">
                    Book Consultation
                  </Button>
                </Link>
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