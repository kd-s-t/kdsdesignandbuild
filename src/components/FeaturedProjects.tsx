"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "The Horizon Residence",
    category: "Residential",
    year: "2024",
    description: "A luxury private residence featuring open-concept living with double-height ceilings and seamless indoor-outdoor integration.",
    image: "/project-1.jpg",
  },
  {
    id: 2,
    title: "Nova Corporate Tower",
    category: "Commercial",
    year: "2023",
    description: "A striking 12-story office building with a geometric glass facade designed for maximum natural light and energy efficiency.",
    image: "/project-2.jpg",
  },
  {
    id: 3,
    title: "Serenity Villa",
    category: "Residential",
    year: "2023",
    description: "Mountain retreat with infinity pool, blending modernist design with natural surroundings for ultimate tranquility.",
    image: "/project-3.jpg",
  },
];

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16 md:mb-24">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">
            Featured Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            Our Top Projects
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Each project represents our commitment to excellence, innovation, and 
            creating spaces that stand the test of time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-card rounded-sm overflow-hidden card-hover"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
                
                <span className="absolute top-4 right-4 text-xs tracking-widest text-foreground/80 bg-background/20 backdrop-blur-sm px-3 py-1 z-10">
                  {project.year}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <span className="text-muted-foreground text-xs tracking-[0.2em] uppercase mb-1 sm:mb-2 block">
                  {project.category}
                </span>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-foreground mb-2 sm:mb-3 group-hover:text-foreground/90 transition-colors">
                  {project.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-2 text-foreground text-sm font-body opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>View Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
