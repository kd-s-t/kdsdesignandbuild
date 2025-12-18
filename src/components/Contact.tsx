"use client";

import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">
              Get in Touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
              Let's Build Together
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-12">
              Ready to bring your vision to life? Whether you have a project in mind 
              or just want to explore possibilities, we'd love to hear from you.
            </p>

            <div className="space-y-8">
              <a 
                href="tel:+1234567890" 
                className="group flex items-start gap-4 p-6 bg-card border border-border/50 hover:border-foreground/30 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-foreground/5 rounded-sm">
                  <Phone className="w-5 h-5 text-foreground" />
                </div>
                <div className="flex-1">
                  <span className="text-xs tracking-widest uppercase text-muted-foreground block mb-1">
                    Call Us
                  </span>
                  <span className="font-display text-xl text-foreground group-hover:text-foreground/80 transition-colors">
                    +1 (234) 567-890
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>

              <a 
                href="mailto:info@kdsdesign.com" 
                className="group flex items-start gap-4 p-6 bg-card border border-border/50 hover:border-foreground/30 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-foreground/5 rounded-sm">
                  <Mail className="w-5 h-5 text-foreground" />
                </div>
                <div className="flex-1">
                  <span className="text-xs tracking-widest uppercase text-muted-foreground block mb-1">
                    Email Us
                  </span>
                  <span className="font-display text-xl text-foreground group-hover:text-foreground/80 transition-colors">
                    info@kdsdesign.com
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>

              <div className="flex items-start gap-4 p-6 bg-card border border-border/50">
                <div className="w-12 h-12 flex items-center justify-center bg-foreground/5 rounded-sm">
                  <MapPin className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <span className="text-xs tracking-widest uppercase text-muted-foreground block mb-1">
                    Visit Us
                  </span>
                  <span className="font-display text-xl text-foreground">
                    123 Architecture Ave<br />
                    Design District, City 10001
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-8 border border-border/50 bg-card">
                <span className="font-display text-5xl md:text-6xl text-foreground block mb-2">50+</span>
                <span className="font-body text-sm text-muted-foreground tracking-widest uppercase">Projects Completed</span>
              </div>
              <div className="text-center p-8 border border-border/50 bg-card">
                <span className="font-display text-5xl md:text-6xl text-foreground block mb-2">4+</span>
                <span className="font-body text-sm text-muted-foreground tracking-widest uppercase">Years Experience</span>
              </div>
              <div className="text-center p-8 border border-border/50 bg-card">
                <span className="font-display text-5xl md:text-6xl text-foreground block mb-2">25</span>
                <span className="font-body text-sm text-muted-foreground tracking-widest uppercase">Team Members</span>
              </div>
              <div className="text-center p-8 border border-border/50 bg-card">
                <span className="font-display text-5xl md:text-6xl text-foreground block mb-2">100%</span>
                <span className="font-body text-sm text-muted-foreground tracking-widest uppercase">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

