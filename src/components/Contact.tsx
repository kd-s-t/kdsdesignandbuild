"use client";

import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground text-xs sm:text-sm tracking-[0.3em] uppercase mb-3 sm:mb-4">
              Get in Touch
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4 sm:mb-6">
              Let&apos;s Build Together
            </h2>
            <p className="font-body text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-8 sm:mb-12">
              Ready to bring your vision to life? Whether you have a project in mind 
              or just want to explore possibilities, we&apos;d love to hear from you.
            </p>

            <div className="space-y-4 sm:space-y-8">
              <a 
                href="tel:+6399999999" 
                className="group flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-card border border-border/50 hover:border-foreground/30 transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-foreground/5 rounded-sm flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs tracking-widest uppercase text-muted-foreground block mb-1">
                    Call Us
                  </span>
                  <span className="font-display text-lg sm:text-xl text-foreground group-hover:text-foreground/80 transition-colors break-all">
                    +63 99999999
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
              </a>

              <a 
                href="mailto:info@kdsdesign.com" 
                className="group flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-card border border-border/50 hover:border-foreground/30 transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-foreground/5 rounded-sm flex-shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs tracking-widest uppercase text-muted-foreground block mb-1">
                    Email Us
                  </span>
                  <span className="font-display text-lg sm:text-xl text-foreground group-hover:text-foreground/80 transition-colors break-all">
                    info@kdsdesign.com
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
              </a>

              <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-card border border-border/50">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-foreground/5 rounded-sm flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs tracking-widest uppercase text-muted-foreground block mb-1">
                    Visit Us
                  </span>
                  <span className="font-display text-lg sm:text-xl text-foreground">
                    Dapa, Surigao del Norte<br />
                    Siargao
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-center p-4 sm:p-6 md:p-8 border border-border/50 bg-card"
              >
                <span className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground block mb-1 sm:mb-2">50+</span>
                <span className="font-body text-xs sm:text-sm text-muted-foreground tracking-widest uppercase">Projects Completed</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-center p-4 sm:p-6 md:p-8 border border-border/50 bg-card"
              >
                <span className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground block mb-1 sm:mb-2">4+</span>
                <span className="font-body text-xs sm:text-sm text-muted-foreground tracking-widest uppercase">Years Experience</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-center p-4 sm:p-6 md:p-8 border border-border/50 bg-card"
              >
                <span className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground block mb-1 sm:mb-2">25</span>
                <span className="font-body text-xs sm:text-sm text-muted-foreground tracking-widest uppercase">Team Members</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-center p-4 sm:p-6 md:p-8 border border-border/50 bg-card"
              >
                <span className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground block mb-1 sm:mb-2">100%</span>
                <span className="font-body text-xs sm:text-sm text-muted-foreground tracking-widest uppercase">Client Satisfaction</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

