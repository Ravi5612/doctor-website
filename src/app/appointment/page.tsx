"use client";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Label } from "@/app/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Calendar } from "@/app/components/ui/calendar";
import { useState } from "react";
import { useToast } from "@/app/components/hooks/use-toast";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import dynamic from 'next/dynamic';

// ✅ Dynamic import for Footer to avoid SSR issues
const Footer = dynamic(() => import("../components/Footer"), {
  ssr: false,
});

export default function AppointmentPage() {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    practitioner: "",
    time: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Appointment booked:", { ...formData, date });
    toast({
      title: "Appointment Request Sent!",
      description: "We'll confirm your appointment within 24 hours.",
    });
  };

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Book an Appointment</h1>
          <p className="text-muted-foreground text-lg">
            Take the first step towards your recovery. Schedule your appointment today.
          </p>
        </div>

        <Card>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Personal Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      placeholder="John Doe"
                      className="mt-2"
                      data-testid="input-name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      placeholder="john@example.com"
                      className="mt-2"
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                    placeholder="02 1234 5678"
                    className="mt-2"
                    data-testid="input-phone"
                  />
                </div>
              </div>

              {/* Appointment Details */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Appointment Details</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="service">Service *</Label>
                    <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                      <SelectTrigger className="mt-2" data-testid="select-service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="physiotherapy">General Physiotherapy</SelectItem>
                        <SelectItem value="sports">Sports Injury</SelectItem>
                        <SelectItem value="rehab">Rehabilitation</SelectItem>
                        <SelectItem value="massage">Massage Therapy</SelectItem>
                        <SelectItem value="pain">Pain Management</SelectItem>
                        <SelectItem value="post-surgery">Post-Surgery Recovery</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="practitioner">Preferred Practitioner</Label>
                    <Select value={formData.practitioner} onValueChange={(value) => handleChange("practitioner", value)}>
                      <SelectTrigger className="mt-2" data-testid="select-practitioner">
                        <SelectValue placeholder="No preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No Preference</SelectItem>
                        <SelectItem value="dr-chen">Dr. Michael Chen</SelectItem>
                        <SelectItem value="dr-williams">Dr. Sarah Williams</SelectItem>
                        <SelectItem value="dr-thompson">Dr. Robert Thompson</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Preferred Date *</Label>
                    <div className="mt-2">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date()}
                        className="rounded-md border"
                        data-testid="calendar-date"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="time">Preferred Time *</Label>
                    <Select value={formData.time} onValueChange={(value) => handleChange("time", value)}>
                      <SelectTrigger className="mt-2" data-testid="select-time">
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (7:00 AM - 12:00 PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12:00 PM - 5:00 PM)</SelectItem>
                        <SelectItem value="evening">Evening (5:00 PM - 7:00 PM)</SelectItem>
                      </SelectContent>
                    </Select>

                    {date && (
                      <p className="text-sm text-muted-foreground mt-2">
                        Selected: {format(date, "MMMM d, yyyy")}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => handleChange("notes", e.target.value)}
                  placeholder="Tell us about your condition or any specific concerns..."
                  rows={4}
                  className="mt-2"
                  data-testid="input-notes"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                data-testid="button-submit"
              >
                Request Appointment
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                * We'll contact you within 24 hours to confirm your appointment time.
              </p>
            </form>
            
          </CardContent>
        </Card>
      
      </div>
      
    </div>
    
     <Footer />
     </>
  );
  
}