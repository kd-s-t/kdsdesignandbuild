"use client";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-6 text-center">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-6 animate-fade-in">
          Design & Build
        </h1>
        <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-200">
          Creating spaces that transcend the ordinary
        </p>
      </div>
    </section>
  );
};

export default Hero;

