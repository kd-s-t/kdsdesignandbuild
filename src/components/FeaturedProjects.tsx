"use client";

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4 text-center">
          Our Work
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-card border border-border/50 p-8 card-hover">
              <div className="aspect-video bg-muted mb-6" />
              <h3 className="font-display text-2xl text-foreground mb-2">Project {i}</h3>
              <p className="font-body text-muted-foreground">Project description</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

