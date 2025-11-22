"use client";

import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/app/components/ui/avatar";
import { Award, GraduationCap, Heart, Users } from "lucide-react";
import Link from "next/link";
import dynamic from 'next/dynamic';

// ✅ Dynamic import for Footer to avoid SSR issues
const Footer = dynamic(() => import("../../components/Footer"), {
  ssr: false,
});

export default function AboutTeam() {
  const team = [
    {
      name: "Dr. Michael Chen",
      role: "Principal Physiotherapist",
      image: "https://i.pravatar.cc/400?img=12",
      credentials: "BPhty, MSc Sports Medicine",
      specializations: ["Sports Injury", "Manual Therapy", "Rehabilitation"],
      bio: "With over 15 years of experience, Dr. Chen specializes in sports injuries and has worked with professional athletes. His patient-centered approach focuses on getting you back to peak performance.",
      achievements: [
        "Certified Sports Physiotherapist",
        "Australian Physiotherapy Association Member",
        "Published researcher in sports medicine",
        "Former physiotherapist for state-level sports teams",
      ],
    },
    {
      name: "Dr. Sarah Williams",
      role: "Senior Physiotherapist",
      image: "https://i.pravatar.cc/400?img=5",
      credentials: "BPhty, PhD Clinical Physiotherapy",
      specializations: ["Pain Management", "Women's Health", "Post-Surgery Recovery"],
      bio: "Dr. Williams brings extensive experience in pain management and post-operative rehabilitation. She is passionate about helping patients achieve long-term wellness through evidence-based treatment.",
      achievements: [
        "PhD in Clinical Physiotherapy",
        "Specialist in chronic pain management",
        "Women's health physiotherapy certification",
        "Regular speaker at physiotherapy conferences",
      ],
    },
    {
      name: "Dr. Robert Thompson",
      role: "Clinical Director",
      image: "https://i.pravatar.cc/400?img=33",
      credentials: "BPhty, MSc, FACP",
      specializations: ["Chronic Conditions", "Geriatric Care", "Neurological Rehabilitation"],
      bio: "As our Clinical Director, Dr. Thompson has dedicated 20 years to advancing physiotherapy practices. He specializes in complex chronic conditions and geriatric rehabilitation.",
      achievements: [
        "Fellow of Australian College of Physiotherapists",
        "20+ years clinical experience",
        "Expert in geriatric rehabilitation",
        "Mentor to junior physiotherapists nationwide",
      ],
    },
  ];

  const teamValues = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every treatment plan is tailored to your individual needs and goals.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Our team maintains the highest standards through continuous learning.",
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "We work together to ensure you receive comprehensive, integrated care.",
    },
    {
      icon: GraduationCap,
      title: "Evidence-Based",
      description: "All our treatments are backed by the latest research and best practices.",
    },
  ];

  return (
    <>
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Meet Our Team</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Expert physiotherapists dedicated to your recovery and well-being
            </p>
          </div>

          {/* Team Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {teamValues.map((value, index) => (
              <Card key={index} className="text-center hover-elevate" data-testid={`value-${index}`}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Team Members */}
          <div className="space-y-12">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover-elevate" data-testid={`card-team-${index}`}>
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Photo */}
                    <div className="md:col-span-1 p-8 flex items-center justify-center bg-muted/30">
                      <Avatar className="w-48 h-48">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback className="text-4xl">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    {/* Info */}
                    <div className="md:col-span-2 p-8">
                      <div className="mb-4">
                        <h2 className="text-2xl font-bold mb-1">{member.name}</h2>
                        <p className="text-primary font-semibold text-lg">{member.role}</p>
                        <p className="text-muted-foreground text-sm">{member.credentials}</p>
                      </div>

                      <div className="mb-4">
                        <h3 className="font-semibold mb-2">Specializations</h3>
                        <div className="flex flex-wrap gap-2">
                          {member.specializations.map((spec, i) => (
                            <Badge key={i} variant="secondary" data-testid={`badge-spec-${index}-${i}`}>
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-4">{member.bio}</p>

                      <div>
                        <h3 className="font-semibold mb-2">Achievements & Certifications</h3>
                        <ul className="space-y-1">
                          {member.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Experience Section */}
          <Card className="mt-16 bg-muted/30">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Collective Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Combined Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Professional Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                  <div className="text-muted-foreground">Patients Treated</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bottom CTA */}
          <div className="mt-16 text-center bg-primary text-primary-foreground rounded-lg p-12">
            <h3 className="text-2xl font-bold mb-4">Work with Our Expert Team</h3>
            <p className="mb-6 opacity-90 max-w-2xl mx-auto">
              Experience personalized care from our highly qualified physiotherapists. Each team member brings unique expertise to ensure you receive the best possible treatment.
            </p>
            <Link href="/appointment">
              <button className="bg-background text-foreground hover:bg-background/90 font-bold py-3 px-8 rounded-md transition hover-elevate" data-testid="button-book-team">
                Book an Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}