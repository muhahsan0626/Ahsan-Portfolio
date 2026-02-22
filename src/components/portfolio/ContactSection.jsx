import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

// EmailJS Configuration - now loaded from environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: 'Muhammad Ahsan', // Change to your name
        },
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);

      // Success feedback
      setSent(true);
      setForm({ name: '', email: '', message: '' });
      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out. I'll get back to you soon!"
      });

      // Reset sent state after 4 seconds
      setTimeout(() => setSent(false), 4000);

    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error("Failed to send message", {
        description: error.text || "Please try again or contact me directly via email."
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 sm:gap-3 mb-2">
          <span className="text-primary font-mono text-base sm:text-lg">07.</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">Get in Touch</h2>
          <div className="hidden sm:block flex-1 h-px bg-primary/30 ml-4" />
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Contact Info */}
          <div className="bg-card/40 border border-primary/20 rounded-xl p-5 sm:p-6 md:p-8">
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              I'm always open to discussing <span className="text-primary font-semibold">new opportunities</span>, interesting projects,
              or just having a good conversation about technology.
            </p>
            <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              <a
                href="mailto:hello@example.com"
                className="flex items-center gap-3 sm:gap-4 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                </div>
                <span className="text-xs sm:text-sm font-medium truncate">hello@example.com</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Linkedin className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                </div>
                <span className="text-xs sm:text-sm font-medium">LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Github className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                </div>
                <span className="text-xs sm:text-sm font-medium">GitHub Profile</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div>
              <Label htmlFor="name" className="text-xs sm:text-sm text-muted-foreground font-medium">Name</Label>
              <Input
                id="name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                required
                placeholder="Your name"
                className="mt-2 bg-card border-primary/30 focus:border-primary text-foreground placeholder:text-muted-foreground/50 h-10 sm:h-11 text-sm"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-xs sm:text-sm text-muted-foreground font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                required
                placeholder="your@email.com"
                className="mt-2 bg-card border-primary/30 focus:border-primary text-foreground placeholder:text-muted-foreground/50 h-10 sm:h-11 text-sm"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-xs sm:text-sm text-muted-foreground font-medium">Message</Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                required
                rows={4}
                placeholder="What would you like to discuss?"
                className="mt-2 bg-card border-primary/30 focus:border-primary text-foreground placeholder:text-muted-foreground/50 text-sm"
              />
            </div>
            <Button
              type="submit"
              disabled={sending || sent}
              className="bg-primary hover:bg-primary/90 text-background rounded-lg px-6 h-10 sm:h-11 w-full sm:w-auto font-semibold glow-cyan-sm text-sm"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Sent!
                </>
              ) : sending ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}