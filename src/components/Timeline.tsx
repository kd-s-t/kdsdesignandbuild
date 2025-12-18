"use client";

const Timeline = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4 text-center">
          Our Journey
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-12 text-center">
          Timeline
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border-l-2 border-border/50 pl-8 pb-8">
              <div className="font-display text-2xl text-foreground mb-2">Milestone {i}</div>
              <p className="font-body text-muted-foreground">Timeline description</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

