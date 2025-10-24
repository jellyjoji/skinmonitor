import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Mail, Globe, Coffee } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { send } from "@emailjs/browser";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  // EmailJS config - set these in your .env as VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
  const SERVICE_ID =
    import.meta.env.VITE_EMAILJS_SERVICE_ID || "your_service_id";
  const TEMPLATE_ID =
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "your_template_id";
  const PUBLIC_KEY =
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      industry: formData.industry,
      message: formData.message,
      // ensure the template or EmailJS account is configured to accept this
      to_email: "joji.the.jungle@gmail.com",
    };

    try {
      if (
        SERVICE_ID === "your_service_id" ||
        TEMPLATE_ID === "your_template_id" ||
        PUBLIC_KEY === "your_public_key"
      ) {
        // If env vars are not configured, log a helpful message and fallback to alert
        console.warn(
          "EmailJS not configured. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env to enable email sending."
        );
        alert(
          "Thank you for your interest! We'll contact you shortly. (Email sending not configured)"
        );
      } else {
        await send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
        alert("Message sent. we'll contact you shortly!");
      }

      setFormData({
        name: "",
        email: "",
        company: "",
        industry: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send contact message:", error);
      let errMsg = "";
      try {
        if (error instanceof Error) errMsg = error.message;
        else errMsg = JSON.stringify(error);
      } catch (e) {
        errMsg = String(error);
      }
      alert(
        `Failed to send message. ${errMsg} Please try again or email joji.the.jungle@gmail.com directly.`
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Request a Demo</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how SkinMonitor AI can transform your artificial skin research.
            Get in touch with our team today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="Your Company"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="industry">Industry</Label>
                  <Select
                    value={formData.industry}
                    onValueChange={(value) =>
                      setFormData({ ...formData, industry: value })
                    }
                  >
                    <SelectTrigger id="industry">
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cosmetics">Cosmetics</SelectItem>
                      <SelectItem value="pharmaceutical">
                        Pharmaceutical
                      </SelectItem>
                      <SelectItem value="biotech">Biotech</SelectItem>
                      <SelectItem value="topical">Topical Products</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your needs..."
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Request Demo
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Image */}
          <div className="space-y-6">
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwbW9uaXRvcmluZyUyMHN5c3RlbXxlbnwxfHx8fDE3NjEzMDI4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Laboratory"
                className="w-full h-full object-cover"
              />
            </div>

            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-600">Email</p>
                      <p>joji.the.jungle@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-600">Remote Collaboration</p>
                      <p>Available Worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Coffee className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-600">Coffee Chat</p>
                      <p>Always up for a virtual coffee!</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
