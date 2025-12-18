"use client";

import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2024",
    title: "The Horizon Residence",
    description: "Completed our most ambitious residential project to date, featuring 8,500 sq ft of modern living space.",
    type: "Project",
  },
  {
    year: "2023",
    title: "Nova Corporate Tower",
    description: "Delivered a 12-story commercial building, our first large-scale commercial development.",
    type: "Project",
  },
  {
    year: "2023",
    title: "Serenity Villa",
    description: "Mountain retreat project recognized for sustainable design and integration with natural landscape.",
    type: "Project",
  },
  {
    year: "2022",
    title: "Team Expansion",
    description: "Grew our team to 25 professionals including architects, engineers, and project managers.",
    type: "Milestone",
  },
  {
    year: "2021",
    title: "Urban Loft Collection",
    description: "Completed a series of 12 luxury urban lofts in the downtown district.",
    type: "Project",
  },
  {
    year: "2020",
    title: "Company Founded",
    description: "KDS Design & Build established with a vision to create exceptional architectural experiences.",
    type: "Milestone",
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16 md:mb-24">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">
            Our Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            Building History
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            From our founding to today, every project and milestone has shaped who we are.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-foreground -translate-x-1/2 mt-2 z-10" />
                
                <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                  <div className={`inline-block ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    <span className={`inline-block px-3 py-1 text-xs tracking-widest uppercase mb-3 ${
                      item.type === 'Milestone' 
                        ? 'bg-foreground/10 text-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {item.type}
                    </span>
                  </div>
                  
                  <div className={`flex items-baseline gap-4 mb-2 flex-wrap ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <span className="font-display text-3xl md:text-4xl text-foreground font-light">
                      {item.year}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-lg sm:text-xl md:text-2xl text-foreground mb-2 sm:mb-3">
                    {item.title}
                  </h3>
                  
                  <p className={`font-body text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    {item.description}
                  </p>
                </div>

                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
